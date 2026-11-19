import express from 'express';
import type { Request, Response } from 'express';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = Number(process.env.PORT) || 3000;
const DIST_DIR = path.resolve(__dirname, 'dist');
const HAS_DIST = fs.existsSync(path.join(DIST_DIR, 'index.html'));
const USE_VITE_DEV =
  process.env.VITE_DEV_SERVER === '1' ||
  process.env.NODE_ENV === 'development' ||
  !HAS_DIST;

interface SubmissionRecord {
  id: string;
  type: 'newsletter' | 'package-reservation' | 'yosemite-inquiry' | 'catering-proposal';
  submittedAt: string;
  payload: Record<string, unknown>;
}

const memorySubmissions: SubmissionRecord[] = [];

function resolveStorageFile(): string {
  const localDir = path.resolve(__dirname, 'data');
  try {
    fs.mkdirSync(localDir, { recursive: true });
    const testFile = path.join(localDir, 'submissions.json');
    if (!fs.existsSync(testFile)) {
      fs.writeFileSync(testFile, '[]', 'utf8');
    }
    return testFile;
  } catch {
    return '/tmp/chateau-submissions.json';
  }
}

const STORAGE_FILE = resolveStorageFile();

function saveSubmission(record: SubmissionRecord): void {
  memorySubmissions.push(record);
  try {
    let existing: SubmissionRecord[] = [];
    if (fs.existsSync(STORAGE_FILE)) {
      const raw = fs.readFileSync(STORAGE_FILE, 'utf8');
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed)) {
        existing = parsed;
      }
    }
    existing.push(record);
    fs.writeFileSync(STORAGE_FILE, JSON.stringify(existing, null, 2), 'utf8');
  } catch {
    // Fallback gracefully to in-memory storage when filesystem is read-only
  }
}

async function startServer() {
  const app = express();
  app.disable('x-powered-by');
  app.use(express.json({ limit: '256kb' }));

  app.get('/api/health', (_req: Request, res: Response) => {
    res.json({ ok: true, mode: USE_VITE_DEV ? 'development' : 'production' });
  });

  app.post('/api/newsletter', (req: Request, res: Response) => {
    const email = typeof req.body?.email === 'string' ? req.body.email.trim() : '';
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      res.status(400).json({ ok: false, error: 'Please enter a valid email address.' });
      return;
    }

    const record: SubmissionRecord = {
      id: `nl-${Date.now()}`,
      type: 'newsletter',
      submittedAt: new Date().toISOString(),
      payload: { email },
    };
    saveSubmission(record);
    res.status(201).json({ ok: true, id: record.id });
  });

  app.post('/api/inquiries', (req: Request, res: Response) => {
    const rawType = req.body?.type;
    const type: SubmissionRecord['type'] =
      rawType === 'package-reservation' ||
      rawType === 'yosemite-inquiry' ||
      rawType === 'catering-proposal'
        ? rawType
        : 'yosemite-inquiry';

    const payload =
      req.body && typeof req.body === 'object' && !Array.isArray(req.body)
        ? (req.body as Record<string, unknown>)
        : {};

    const record: SubmissionRecord = {
      id: `inq-${Date.now()}`,
      type,
      submittedAt: new Date().toISOString(),
      payload,
    };
    saveSubmission(record);
    res.status(201).json({ ok: true, id: record.id });
  });

  if (USE_VITE_DEV) {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: {
        middlewareMode: true,
        hmr: process.env.DISABLE_HMR !== 'true',
        watch: process.env.DISABLE_HMR === 'true' ? null : {},
      },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    app.use(
      '/assets',
      express.static(path.join(DIST_DIR, 'assets'), {
        maxAge: '1y',
        immutable: true,
      })
    );
    app.use(
      '/src/assets',
      express.static(path.join(DIST_DIR, 'src/assets'), {
        maxAge: '7d',
      })
    );
    app.use(
      express.static(DIST_DIR, {
        index: 'index.html',
      })
    );

    // SPA fallback for client-side routes; never return HTML for missing static assets or API routes
    app.get('*', (req: Request, res: Response) => {
      if (
        req.path.startsWith('/api/') ||
        req.path.startsWith('/assets/') ||
        req.path.startsWith('/src/assets/')
      ) {
        res.status(404).end();
        return;
      }
      res.sendFile(path.join(DIST_DIR, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(
      `Château du Sureau server listening on http://0.0.0.0:${PORT} (${USE_VITE_DEV ? 'dev' : 'production'})`
    );
  });
}

startServer().catch((err) => {
  console.error('Failed to start server:', err);
  process.exit(1);
});
