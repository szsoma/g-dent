export const site = {
  name: 'G-Dent',
  tagline: 'fogorvosi magánrendelő',
  phoneLabel: '06/30-945-2470',
  phoneHref: 'tel:+36309452470',
  email: 'gdent@t-email.hu',
  emailHref: 'mailto:gdent@t-email.hu',
  address: '3580 Tiszaújváros, Tompa Mihály út 30.',
  addressShort: 'Tiszaújváros · Tompa Mihály út 30.',
} as const;

export const navItems = [
  { label: 'Szolgáltatásaink', href: '#szolgaltatasok' },
  { label: 'Nyitvatartás', href: '#nyitvatartas' },
  { label: 'Pénztárak', href: '#penztarak' },
  { label: 'Kapcsolat', href: '#kapcsolat' },
];

export const header = {
  menuAriaLabel: 'Menü megnyitása',
  menuCtaLabel: 'időpontot foglalok',
};

export const hero = {
  eyebrow: 'Tiszaújváros · Tompa Mihály út 30.',
  headingLead: 'Fájdalommentes fogászat',
  headingAccent: 'családi hangulatban',
  headingEnd: '.',
  lead: 'Kellemes környezet, tapasztalt szakorvosok és magas szintű ellátás várják kedves betegeinket — a diagnosztikától a fogpótlásig egy kézben.',
  primaryCtaLabel: 'Időpontot foglalok',
  secondaryCtaLabel: 'Szolgáltatásaink',
  facts: [
    { label: 'Bejelentkezés', value: '06/30-945-2470', href: 'tel:+36309452470' },
    { label: 'Email', value: 'gdent@t-email.hu', href: 'mailto:gdent@t-email.hu' },
    { label: 'Panoráma röntgen', value: 'Helyben, Tiszaújvárosban' },
  ],
  imageSideCaption: 'A rendelő második várója',
  namePlate: 'Dr. Rózsa Ildikó · fog- és szájbetegségek szakorvosa',
};

export const services = {
  eyebrow: 'Szolgáltatásaink',
  heading: 'Minden, amire egy család fogászatában szüksége van',
  intro:
    'A megelőzéstől a bonyolultabb fogpótlásokig mindent egy helyen intézhet.',
  items: [
    {
      index: '01',
      title: 'Vizsgálat és higiénia',
      items: [
        'Állapotfelmérés',
        'Szájhigiénés tanácsadás',
        'Ultrahangos fogkő eltávolítás',
        'Tasak kezelés',
        'Ózon terápia',
      ],
    },
    {
      index: '02',
      title: 'Képi diagnosztika',
      items: [
        'Panoráma röntgen (csak Tiszaújvárosban)',
        'Intraorális RTG készítés',
      ],
      note: 'A felvétel a rendelőben készül — nem kell másik intézménybe utaznia.',
    },
    {
      index: '03',
      title: 'Tömések és gyökérkezelés',
      items: [
        'Esztétikus tömés készítése',
        'Inlay, onlay',
        'Gyökérkezelés',
        'Elektrokautéres kezelések',
      ],
    },
    {
      index: '04',
      title: 'Fogpótlások és beültetés',
      items: [
        'Kivehető és rögzített fogpótlások',
        'Fém-, kerámia- és cirkón koronák, hidak, csapok',
        'Fogbeültetés',
      ],
    },
    {
      index: '05',
      title: 'Fogászat és esztétika',
      items: ['Fogfehérítés', 'Fogékszerek készítése'],
    },
    {
      index: '06',
      title: 'Gyermekfogászat',
      items: ['Teljes körű gyermekfogászati ellátás'],
      note:
        'A kicsiknek is korukhoz és temperamentumukhoz igazodó, türelemmel végzett kezelést kínálunk.',
    },
  ],
};

export const team = {
  eyebrow: 'Orvosaink',
  heading: 'Egy szakorvos, aki ismeri betegeit',
  imageCaption:
    'A rendelő kezelőszobája — kényelmes, letisztult környezetben várjuk pácienseinket.',
  items: [
    {
      name: 'Dr. Rózsa Ildikó',
      role: 'Fog- és szájbetegségek szakorvosa',
      description:
        'A magánrendelő alapellátója: a szájhigiénés megelőzéstől a gyökérkezelésen és fogpótlásokon át a gyermekfogászatig vállalja betegeinek teljes körű ellátását.',
      phone: '06/30/945-24-70',
      phoneHref: 'tel:+36309452470',
      email: 'gdent@t-email.hu',
      focus: ['Panoráma röntgen', 'Fogpótlások', 'Gyermekfogászat'],
    },
  ],
};

export const hours = {
  eyebrow: 'Nyitvatartás',
  heading: 'Mikor várjuk Önt?',
  intro:
    'Bejelentkezést kérjük telefonon, így a várakozás minimalizálható — részesülhet pácienseink teljes figyelméből.',
  addressNote: 'Rendelőnk: 3580 Tiszaújváros, Tompa Mihály út 30.',
};

export interface HourEntry {
  day: string;
  time: string;
}

/** Collapses the per-day hours collection into the day range and time span
 *  shown in the contact section, so the two can never drift apart. */
export function summarizeHours(entries: HourEntry[]): string[] {
  if (entries.length === 0) return [];

  const first = entries[0];
  const last = entries[entries.length - 1];
  // "HH.MM" strings compare correctly as plain text.
  const starts = entries.map((entry) => entry.time.split('–')[0].trim()).sort();
  const ends = entries
    .map((entry) => entry.time.split('–')[1]?.trim() ?? '')
    .sort();

  const dayRange =
    first.day === last.day ? first.day : `${first.day}–${last.day}`;

  return [dayRange, `${starts[0]} – ${ends[ends.length - 1]}`];
}

export const insurance = {
  eyebrow: 'Egészségpénztárak',
  heading: 'Pénztáraink — kényelmes kiváltás',
  intro:
    'Szerződéses pénztárainkkal közvetlenül elszámolhatunk. Igény esetén a rendelő más egészségpénztárral is köt szerződést.',
  items: [
    'NAVOSZ',
    'Aranykor',
    'Patika',
    'Vasutas',
    'AXA',
    'MKB',
    'TEMPO',
    'OTP',
    'DIMENZI',
    'PRO VITA',
    'GENERALI',
    'MEDICINA',
    'Allianz',
    'K&H',
    'Vitamin',
  ],
};

export const contact = {
  eyebrow: 'Kapcsolat',
  heading: 'Foglaljon időpontot Tiszaújvárosban',
  intro:
    'Hívjon minket bizalommal a megadett rendelési időben, vagy írjon emailt — mindkét esetben mihamarabb visszajelzünk.',
  imageCaption: 'A rendelő bejárata a Tompa Mihály utcában.',
  addressLabel: 'Cím',
  hoursLabel: 'Rendelési idő',
};

export const footer = {
  description:
    'G-Dent Kft · fogorvosi magánrendelő Tiszaújvárosban. Családi hangulat, kellemes környezet, fájdalommentes kezelés.',
  sitemapTitle: 'Oldaltérkép',
  contactTitle: 'Elérhetőség',
  contactLinks: [
    { label: '06/30-945-2470', href: 'tel:+36309452470' },
    { label: 'gdent@t-email.hu', href: 'mailto:gdent@t-email.hu' },
    { label: '3580 Tiszaújváros, Tompa Mihály út 30.', href: '#kapcsolat' },
  ],
  copyright: '© 2026 G-Dent Kft · Minden jog fenntartva.',
};
