import { MEDIA } from './media';
import { ROOM_GALLERIES } from './sourceData';

export interface RoomData {
  slug: string;
  path: string;
  name: string;
  seoTitle: string;
  shortDesc: string;
  fullDesc: string;
  sqFt: string;
  bed: string;
  features: string[];
  complimentaryAmenities: string[];
  taxNote: string;
  image: string;
  galleryImages: string[];
}

export const COMPLIMENTARY_AMENITIES = [
  'House baked sweets',
  'Complimentary coffee, tea, and soft drinks',
  'Parking and Valet',
  'Luggage service',
  'Nightly turndown service',
  'Daily housekeeping',
  'Complimentary Wi-Fi',
  'Concierge',
];

export const ROOM_TAX_NOTE =
  'Daily published rates exclude the 11.5% room tax and 12% service, which will appear in the guest cart.';

export const ROOMS: RoomData[] = [
  {
    slug: 'the-thyme',
    path: '/room/the-thyme/',
    name: 'Thyme Room',
    seoTitle: 'Thyme Room - Château du Sureau',
    shortDesc:
      'One of the Estate’s larger accommodations, the Thyme Room is an exquisite combination of style and beauty.',
    fullDesc:
      'One of the Estate’s larger accommodations, the Thyme Room is an exquisite combination of style and beauty. Featuring exposed wood beams, this spacious suite sets the scene for romance with fine art, beautiful fabrics, arched windows, and a convenient entrance directly to the Estate courtyard. The Thyme Room is tastefully ADA compliant and easily accessible.',
    sqFt: '490 Square Feet',
    bed: 'Luxurious canopy king-size bed',
    features: [
      'Luxurious canopy king-size bed',
      'Wood-burning fireplace',
      'Soaking tub and shower combination',
      'Writing desk',
      '490 Square Feet',
    ],
    complimentaryAmenities: COMPLIMENTARY_AMENITIES,
    taxNote: ROOM_TAX_NOTE,
    image: MEDIA.roomCanopy,
    galleryImages: ROOM_GALLERIES['the-thyme'] || [MEDIA.roomCanopy],
  },
  {
    slug: 'the-rosehip',
    path: '/room/the-rosehip/',
    name: 'Rosehip Room',
    seoTitle: 'Rosehip Room - Château du Sureau',
    shortDesc:
      'Travel to France in the ornate Rosehip Room. The Rosehip Room is a blend of contemporary and old-world flair.',
    fullDesc:
      'Travel to France in the ornate Rosehip Room, a charming blend of contemporary and old-world flair. Guests enjoy the elegant Empire-era furnishings with an alluring reading niche and a viewing balcony. After a day of adventure, soaking in the Rosehip Room’s sumptuous tub is pure heaven.',
    sqFt: '485 Square Feet',
    bed: 'Grand queen-sized bed',
    features: [
      'Grand queen-sized bed',
      'Wood-burning fireplace',
      'Soaking tub and separate shower',
      'Reading niche',
      'Writing desk',
      '485 Square Feet',
    ],
    complimentaryAmenities: COMPLIMENTARY_AMENITIES,
    taxNote: ROOM_TAX_NOTE,
    image: MEDIA.roomRosehip,
    galleryImages: ROOM_GALLERIES['the-rosehip'] || [MEDIA.roomRosehip],
  },
  {
    slug: 'the-sweet-geranium',
    path: '/room/the-sweet-geranium/',
    name: 'Sweet Geranium Room',
    seoTitle: 'Book Château du Sureau Sweet Geranium Room',
    shortDesc:
      'Nestled in the lower corner of the Château, the Sweet Geranium Room vaulted ceilings, and a sweeping view from a private balcony.',
    fullDesc:
      'Nestled in the lower corner of the Chateau, the Sweet Geranium Room features vaulted ceilings and a sweeping view from a private balcony. Relax in the cozy sitting area overlooking the rock garden while enjoying a good book or a glass of wine.',
    sqFt: '430 Square Feet',
    bed: 'Luxurious four-poster king size bed',
    features: [
      'Luxurious four-poster king size bed',
      'Wood-burning fireplace',
      'Balcony',
      'Soaking tub and shower',
      'Writing desk',
      '430 Square Feet',
    ],
    complimentaryAmenities: COMPLIMENTARY_AMENITIES,
    taxNote: ROOM_TAX_NOTE,
    image: MEDIA.roomSweetGeranium,
    galleryImages: ROOM_GALLERIES['the-sweet-geranium'] || [MEDIA.roomSweetGeranium],
  },
  {
    slug: 'the-lavender',
    path: '/room/the-lavender/',
    name: 'Lavender Room',
    seoTitle: 'Lavender Room - Château du Sureau',
    shortDesc:
      'Located on a private corner of the Château, the Lavender Room is intimate – perfect for a romantic rendezvous.',
    fullDesc:
      'Located on a private corner of the Château, the Lavender Room is intimate – perfect for a romantic rendezvous. Guests particularly enjoy this room’s charming balcony next to the stone turret with sweeping views of the grounds and nearby mountains.',
    sqFt: '395 Square Feet',
    bed: 'King size sleigh bed',
    features: [
      'King size sleigh bed',
      'Wood-burning fireplace',
      'Balcony',
      'Soaking tub and shower',
      'Writing desk',
      '2nd floor',
      '395 Square Feet',
    ],
    complimentaryAmenities: COMPLIMENTARY_AMENITIES,
    taxNote: ROOM_TAX_NOTE,
    image: MEDIA.roomLavender,
    galleryImages: ROOM_GALLERIES['the-lavender'] || [MEDIA.roomLavender],
  },
  {
    slug: 'the-chamomile',
    path: '/room/the-chamomile/',
    name: 'Chamomile Room',
    seoTitle: 'Book Classic Château du Sureau Chamomile Room',
    shortDesc:
      'Crowned with a beamed ceiling, the Chamomile Room is warm and inviting featuring lavish mahogany furnishings and French art.',
    fullDesc:
      'Crowned with a beamed ceiling, the Chamomile Room is warm and inviting featuring lavish mahogany furnishings and French art. The king size canopy bed is situated for a perfect view of the wood-burning fireplace and the step-out balcony over the hillside and the garden. After a stroll of the grounds, enjoy a hot shower or a soak in the limestone bathtub.',
    sqFt: '415 Square Feet',
    bed: 'King size bed',
    features: [
      'King size bed',
      'Wood-burning fireplace',
      'Soaking tub and shower combination',
      'Step-out Balcony',
      'Writing desk',
      '2nd floor',
      '415 Square Feet',
    ],
    complimentaryAmenities: COMPLIMENTARY_AMENITIES,
    taxNote: ROOM_TAX_NOTE,
    image: MEDIA.roomChamomile,
    galleryImages: ROOM_GALLERIES['the-chamomile'] || [MEDIA.roomChamomile],
  },
  {
    slug: 'the-rosemary',
    path: '/room/the-rosemary/',
    name: 'Rosemary Room',
    seoTitle: 'Rosemary Room - Château du Sureau',
    shortDesc:
      'The Rosemary Room is an oasis of calm and relaxation. A king size canopy bed romantically envelopes you with its French fabric.',
    fullDesc:
      'The Rosemary Room is an oasis of calm and relaxation, and features a king size canopy bed adorned with French fabric. Guests enjoy a quiet garden and hillside views from a luxurious marble tub. A French tiled shower is large enough for two. The room has an intimate sitting area, a step-out balcony, and a wood-burning fireplace.',
    sqFt: '425 Square Feet',
    bed: 'King size canopy bed',
    features: [
      'King size canopy bed',
      'Wood-burning fireplace',
      'Soaking tub and separate shower',
      'Balcony',
      'Writing desk',
      '2nd floor',
      '425 Square Feet',
    ],
    complimentaryAmenities: COMPLIMENTARY_AMENITIES,
    taxNote: ROOM_TAX_NOTE,
    image: MEDIA.roomRosemary,
    galleryImages: ROOM_GALLERIES['the-rosemary'] || [MEDIA.roomRosemary],
  },
  {
    slug: 'the-saffron',
    path: '/room/the-saffron/',
    name: 'Saffron Room',
    seoTitle: 'Saffron Room - Château du Sureau',
    shortDesc:
      'Distinctive and dramatic, the romantic Saffron Room excites and delights. Repose like royalty in an opulent king -size bedroom set from 1834 of ebony wood with ivory inlay.',
    fullDesc:
      'Distinctive and dramatic, this romantic accommodation allows guests to repose like royalty in an opulent 1834 king-size bedroom set clad in ebony wood and ivory. Enjoy a floor-to-ceiling tapestry, black marble wood-burning fireplace and a French inspired balcony. The vast marble soaking tub and separate shower is a welcome sight after a full day of excursions.',
    sqFt: '480 Square Feet',
    bed: 'King size bed',
    features: [
      'King size bed',
      'Wood-burning fireplace',
      'Soaking tub and separate shower',
      'Balcony',
      'Writing desk',
      '2nd floor',
      '480 Square Feet',
    ],
    complimentaryAmenities: COMPLIMENTARY_AMENITIES,
    taxNote: ROOM_TAX_NOTE,
    image: MEDIA.roomSaffron,
    galleryImages: ROOM_GALLERIES['the-saffron'] || [MEDIA.roomSaffron],
  },
  {
    slug: 'the-elderberry',
    path: '/room/the-elderberry/',
    name: 'Elderberry Room',
    seoTitle: 'Book Elderberry Room at Château du Sureau',
    shortDesc:
      'The Elderberry Room is bright and cheerful with tall cathedral ceilings and large windows dressed in pale yellow and berry blue colored fabrics.',
    fullDesc:
      'The Elderberry Room is bright and cheerful with tall cathedral ceilings and large windows dressed in pale yellow and berry blue colored fabrics. Hand painted elderberries adorn the tile in the bathroom with a separate soaking tub and shower. Guests will rest comfortably in the large king size canopy bed amidst elegant furnishings. The room’s high corner setting commands views of the Sierras and the town below.',
    sqFt: '470 Square Feet',
    bed: 'King size bed',
    features: [
      'King size bed',
      'Wood-burning fireplace',
      'Soaking tub and separate shower',
      'Balcony',
      'Writing desk',
      '2nd floor',
      '470 Square Feet',
    ],
    complimentaryAmenities: COMPLIMENTARY_AMENITIES,
    taxNote: ROOM_TAX_NOTE,
    image: MEDIA.roomElderberry,
    galleryImages: ROOM_GALLERIES['the-elderberry'] || [MEDIA.roomElderberry],
  },
  {
    slug: 'the-mint',
    path: '/room/the-mint/',
    name: 'Mint Room',
    seoTitle: 'Mint Room at Château du Sureau',
    shortDesc:
      'Situated in the West Wing beyond a fragrant rose garden with views from a step-out balcony, the Mint room is perfect for those seeking privacy.',
    fullDesc:
      'Situated in the West Wing beyond a fragrant rose garden with views from a step-out balcony, the Mint room is perfect for those seeking privacy. The calming hues of pale rose and mint green are warm and welcoming. After an exciting day, enjoy an invigorating soak in the spa tub, a fireside chat, and a good night’s sleep in the luxurious king size canopy bed.',
    sqFt: '470 Square Feet',
    bed: 'King size bed',
    features: [
      'King size bed',
      'Wood-burning fireplace',
      'Soaking tub and shower combination',
      'Balcony',
      'Writing desk',
      '470 Square Feet',
    ],
    complimentaryAmenities: COMPLIMENTARY_AMENITIES,
    taxNote: ROOM_TAX_NOTE,
    image: MEDIA.roomMint,
    galleryImages: ROOM_GALLERIES['the-mint'] || [MEDIA.roomMint],
  },
  {
    slug: 'the-ciboulette',
    path: '/room/the-ciboulette/',
    name: 'Ciboulette Room',
    seoTitle: 'Book a hotel in Château du Sureau - Ciboulette Room',
    shortDesc:
      'The Ciboulette Room evokes the charm and beauty of the French countryside. Surrounded by vintage botanical sketches and a European tapestry, there is the convenience of two double beds and a writing nook with a French provincial desk.',
    fullDesc:
      'The Ciboulette Room evokes the charm and beauty of the French countryside. Surrounded by vintage botanical sketches and a European tapestry, there is the convenience of two double beds and a writing nook with a French provincial desk. After an exhilarating day, a quick rinse in the bathroom’s Swiss limestone shower will refresh before heading for dinner.',
    sqFt: '350 Square Feet',
    bed: 'Two Double Beds',
    features: [
      'Two Double Beds',
      'Shower',
      'Writing desk',
      '350 Square Feet',
    ],
    complimentaryAmenities: COMPLIMENTARY_AMENITIES,
    taxNote: ROOM_TAX_NOTE,
    image: MEDIA.roomCiboulette,
    galleryImages: ROOM_GALLERIES['the-ciboulette'] || [MEDIA.roomCiboulette],
  },
];

export const VILLA_DATA = {
  title: 'Villa du Sureau',
  seoTitle: 'Villa du Sureau - Château du Sureau',
  subtitle: 'Elegant. Sophisticated. Private Period',
  homepageSummary:
    'The most luxurious accommodations on property. Relish in your own private 2,000 sq ft. Villa. This blissful Villa includes two decadent king sized bedrooms, an office fit for an author, grand salon with baby grand Steinway piano, wet bar, dining terrace, and private spa. Our team will personalize your stay by tailoring each detail to make sure your time at the Villa is to perfection.',
  roomsListingSummary:
    'Hidden behind a private-gated entrance is the property’s most exclusive accommodation, the stately Villa du Sureau. This 2,000 square-foot Parisian-style Manor retreat is adorned with fine furnishings, specialty art, and charming design details.',
  description:
    'Our free-standing Villa du Sureau is the most exclusive accommodation on property, offering a private, sophisticated sanctuary. Surrounded by towering pines, gardens, and French fountains lies our beautiful two bedroom/two bathroom, 2,000 square-foot Parisian-style Manor. A personal oasis of relaxation completes with a palatial balcony and Roman Spa.',
  taxNote: ROOM_TAX_NOTE,
  features: [
    'Private gated entrance',
    'Two California King bedrooms',
    'Library Office',
    'Salon Living Room appointed with Steinway & Sons Piano',
    'Petite kitchenette and dining table',
    'Deep marble soaking tubs and separate showers',
    'Original 19th century European elegant decor',
    'Private balcony and garden',
    'Private Roman jacuzzi',
    'Wood burning fireplace',
    '2000 sq. ft.',
  ],
  exclusiveAmenities: [
    'Welcome bottle of wine',
    'In room soft drinks, juices, fresh fruit',
    'Twice daily housekeeping and turn down service',
    'Access to private outdoor Roman jacuzzi',
    'Concierge',
  ],
  extraSpecialTitle: 'Make Your Villa Experience Extra Special',
  extraSpecialBody:
    'Your villa stay should be as impeccably comfortable and luxurious fit to your needs. Allow us to present you with a menu of elevated additions to make your stay just right.',
  image: MEDIA.villaHome,
  listingImage: MEDIA.villaListingThumb,
  galleryImages: MEDIA.villaBanners,
};

export const FIVE_COURSE_MENU = {
  title: 'Pre-fixe Dinner Menu',
  seoTitle: 'Book Five-Course Dinner Menu at Château du Sureau',
  priceLabel: 'Five Course',
  price: '$175',
  winePairingLabel: 'Wine Pairing',
  winePairingPrice: '$95',
  courses: [
    {
      dish: 'Hamachi Crudo',
      details: 'tomatillo aguachile, citrus, shishito pepper',
    },
    {
      dish: 'Tomato Salad',
      details: 'granola, tomato water, basil',
    },
    {
      dish: 'Pan-Seared King Salmon',
      details: 'summer squash, carrot, lemon verbena',
    },
    {
      dish: 'Beef Ribeye',
      details: 'corn, fig, chanterelle mushroom',
    },
    {
      dish: 'Chocolate Torte',
      details: 'espresso, caramel, apple',
    },
  ],
  notes: [
    '*Kindly know, a 22% service charge will be added to all bills. This charge will go directly to entire team',
    '*Please know at times the menu may change due to availability of our fresh, local products',
    '*There may be risk associated with consuming raw or undercooked seafood or animal protein',
    '*We require 48-hour advance notice for any guests with dietary/allergy restrictions',
    '*A kind note: we have an age minimum of 8 years and older in the Restaurant to ensure an intimate environment',
  ],
};

export const THREE_COURSE_MENU = {
  title: 'Petite Pre-fixe Dinner Menu',
  seoTitle: 'Book Three-Course Dinner Menu at Château du Sureau',
  priceLabel: 'Three Course',
  price: '$125',
  winePairingLabel: 'Wine Pairing',
  winePairingPrice: '$70',
  courses: [
    {
      dish: 'Hamachi Crudo',
      details: 'tomatillo aguachile, citrus, shishito pepper',
      connectorAfter: undefined,
    },
    {
      dish: 'Pan-Seared King Salmon',
      details: 'summer squash, carrot, lemon verbena',
      connectorAfter: 'or',
    },
    {
      dish: 'Beef Ribeye',
      details: 'corn, fig, chanterelle mushroom',
      connectorAfter: undefined,
    },
    {
      dish: 'Chocolate Torte',
      details: 'espresso, caramel, apple',
      connectorAfter: undefined,
    },
  ],
  notes: FIVE_COURSE_MENU.notes,
};

export const WINE_AND_COCKTAILS_DATA = {
  title: 'Wine & Cocktails Menu',
  seoTitle: 'Wine & Cocktails Menu - Château du Sureau',
  cellarHours: 'Wednesday – Sunday 5 p.m. – 9 p.m.',
  signatureCocktailsSixteen: [
    { name: 'Blue Skies', price: '16', notes: 'Gin, cherry, lemon, egg white, blue curaçao' },
    { name: 'On The Cobb', price: '16', notes: 'Silver tequila, corn, lime, ancho chile, egg white, cucumber' },
    { name: 'Strawberry Garden', price: '16', notes: 'Vodka, strawberry, lime, basil' },
    { name: 'Autumn Equinox', price: '16', notes: 'Rye whiskey, apple brandy, lemon, angostura bitters' },
    { name: 'Pits & Passion', price: '16', notes: 'Gin, peach, lemon, passion fruit' },
    { name: 'Cherry Wood Old Fashioned', price: '16', notes: 'Bourbon, demerara, angostura bitters, cherry wood smoke' },
    { name: 'Paris Nights (Clarified Cocktail)', price: '16', notes: 'Paris infused gin, apricot, vanilla, lemon' },
    { name: 'Farmer’s Market', price: '16', notes: 'Tomato water, vodka, dry vermouth, espelette rinse' },
    { name: 'Shochu Aromatics', price: '16', notes: 'Shochu, lychee, yuzu, club soda' },
  ],
  signatureCocktailsEighteen: [
    { name: 'Cherry Wood Old Fashioned', price: '18', notes: 'bourbon, demerara, angostura bitters, cherry wood smoke' },
    { name: 'Pine & Petals', price: '18', notes: 'white rum, lavender, pineapple, coconut, lime, egg white' },
    { name: 'Bourbon Float (Clarified Cocktail)', price: '18', notes: 'bourbon, root beer, vanilla, nutmeg, allspice' },
    { name: 'Cherry Bloom (Clarified Cocktail)', price: '18', notes: 'cherry blossom infused tequila, passion fruit, licor 43, lime' },
    { name: 'Poinsettia', price: '18', notes: 'gin, hibiscus, raspberry, orange blossom water, lime' },
    { name: 'Smoke & Bitters', price: '18', notes: 'mezcal, campari, lemon, sambuca' },
    { name: 'White Cosmo', price: '18', notes: 'vodka, elderflower, white cranberry, lime' },
    { name: 'Peach Balm', price: '18', notes: 'gin, peach, italicus, aperol, lemon' },
  ],
  mocktails: [
    { name: 'Elderflower 75', price: '10', notes: 'Seedlip grove 42, lemon juice, elderflower syrup, sparkling cider' },
    { name: 'Cinnamon Apple', price: '10', notes: 'Seedlip spice 94, apple cider, lemon juice, cinnamon simple syrup' },
  ],
  sparkling: [
    { producer: 'Coquelicot, Los Olivos', price: '15', details: '2019 sparkling chardonnay' },
    { producer: 'Nicolas Feuillatte, Brut, Champagne, France', price: '18', details: 'réserve brut' },
  ],
  whites: [
    { producer: 'Coquelicot, Los Olivos District', price: '15', details: '2020 grüner veltliner' },
    { producer: 'Rose & Son, Santa Ynez Valley', price: '15', details: '2021 chenin blanc' },
    { producer: 'Howard Park, Margaret River, Australia', price: '16', details: '2020 sauvignon blanc & semillon' },
    { producer: 'Silva Road, Redwood Valley', price: '18', details: '2019 chardonnay' },
  ],
  reds: [
    { producer: 'Coquelicot, Los Olivos District', price: '17', details: '2020 malbec' },
    { producer: 'Rose & Son, Santa Ynez Valley', price: '17', details: '2020 carbonic carignan' },
    { producer: 'Loring Wine Company, Cortada Alta Vineyard, SLH', price: '20', details: '2021 pinot noir' },
    { producer: 'Silva Road, Redwood Valley', price: '24', details: '2019 cabernet sauvignon' },
  ],
  winesByGlassFiveOz: {
    sparkling: [
      { producer: 'Coquelicot, Los Olivos', price: '16', details: '2023 sparkling rosé of sangiovese (pét-nat)' },
      { producer: 'François Montand, Jura, France', price: '18', details: 'blanc de blanc' },
    ],
    whites: [
      { producer: 'Rose & Son, Santa Ynez Valley', price: '16', details: '2022 chenin blanc' },
      { producer: 'Karine, Love Ranch Vineyard, Madera County', price: '16', details: '2023 viognier' },
      { producer: 'Coquelicot, Los Olivos District', price: '18', details: '2024 sauvignon blanc' },
      { producer: 'Loring Wine Company, Sta. Rita Hills', price: '18', details: '2023 chardonnay' },
    ],
    reds: [
      { producer: 'Rose & Son, Santa Ynez Valley', price: '18', details: '2021 carbonic carignan' },
      { producer: 'Coquelicot, Los Olivos District', price: '20', details: '2022 malbec' },
      { producer: 'Tyler, Santa Barbara County', price: '22', details: '2023 pinot noir' },
      { producer: 'Baldacci, Napa Valley', price: '24', details: '2022 cabernet sauvignon blend' },
    ],
  },
  beer: [
    { name: 'Voodoo Ranger IPA', price: '7', origin: 'Fort collins, co & asheville, nc' },
    { name: 'Samuel Smith Nut Brown Ale', price: '8', origin: 'England' },
    { name: 'Westmalle Trappist Tripel Ale', price: '11', origin: 'Belgium' },
  ],
};

export const CULINARY_TEAM = [
  {
    role: 'Head Chef',
    name: 'Ethan de Graaff',
    image: MEDIA.chefEthan,
    bio: 'A resident of Oakhurst for most of his life, Ethan de Graaff, has been a mainstay in the kitchens of The Elderberry House. de Graaff rejoined The Elderberry House in 2019 as sous chef. Reunited with the culinary team at the restaurant, de Graaff enjoyed creating and crafting dishes that brought people and food together for a memorable experience. In June 2022, he was promoted to Chef de Cuisine, or head chef. As a leader in the kitchen, de Graaff strives for consistency and passion. He works closely with the entire team, from line cooks to DDR Hospitality culinary director, Chris Flint.',
  },
  {
    role: 'Sommelier',
    name: 'Erica Ruiz',
    image: MEDIA.sommelierErica,
    bio: 'I truly enjoy being a sommelier at The Elderberry House I get to put my own creative spin on our beverage program. I love that each wine has its own unique story and I am proud to be able to share those stories with our guests.',
  },
];
