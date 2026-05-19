import type {
  NavItem,
  StatItem,
  WhyItem,
  GalleryImage,
  Review,
  ContactItem,
  FaqItem,
  ChatConfig,
  ServiceCategory,
  DaySchedule,
  MenuCategory,
  ImageMap,
  HeroContent,
} from './types';
import { t } from './get-ui-text';

// Switch to true when local /images/*.webp files are ready
export const USE_LOCAL_IMAGES = false;

// ---------------------------------------------------------------------------
// HERO
// ---------------------------------------------------------------------------
export const HERO: HeroContent = {
  title: 'Pohoda Joga Trenčín',
  subtitle: 'Štúdio jogy v srdci Trenčína. Ponúkame hodiny pre začiatočníkov aj pokročilých — hatha, vinyasa a relaxačná joga. Malé skupiny, skúsení lektori, príjemná atmosféra. Prvá hodina zadarmo.',
  layout: 'full',
};

// ---------------------------------------------------------------------------
// IMAGES
// ---------------------------------------------------------------------------
export const IMAGES: ImageMap = {
  hero: '/images/hero.webp',
  about: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&q=80',
  gallery: [
    '/images/gallery-1.webp',
    '/images/gallery-2.webp',
    '/images/gallery-3.webp',
    '/images/gallery-4.webp',
    '/images/gallery-5.webp',
    '/images/gallery-6.webp',
  ],
  logo: '',
};

// ---------------------------------------------------------------------------
// NAVIGATION
// ---------------------------------------------------------------------------
export const NAV_ITEMS: NavItem[] = [
  { label: t().nav.home,     href: '#hero'     },
  { label: t().nav.services, href: '#services' },
  { label: t().nav.reviews,  href: '#reviews'  },
  { label: t().nav.contact,  href: '#contact'  },
];

// ---------------------------------------------------------------------------
// STATS
// ---------------------------------------------------------------------------
export const STATS: StatItem[] = [];

// ---------------------------------------------------------------------------
// WHY US
// ---------------------------------------------------------------------------
export const WHY_ITEMS: WhyItem[] = [
  { id: '1', icon: '⭐', title: t().whyUs.q1Title, description: t().whyUs.q1Desc },
  { id: '2', icon: '⚡', title: t().whyUs.q2Title, description: t().whyUs.q2Desc },
  { id: '3', icon: '💰', title: t().whyUs.q3Title, description: t().whyUs.q3Desc },
  { id: '4', icon: '🛡️', title: t().whyUs.q4Title, description: t().whyUs.q4Desc },
];

// ---------------------------------------------------------------------------
// SERVICE CATEGORIES (templateType: 'services')
// ---------------------------------------------------------------------------
export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    id: '1',
    name: 'Skupinové hodiny',
    items: [
      {
        id: '1-1',
        name: 'Hatha joga',
        description: 'Klasická joga zameraná na správne držanie tela, dýchanie a uvoľnenie. Vhodná pre začiatočníkov aj pokročilých.',
        price: 'od 10 €',
        icon: '🧘',
      },
      {
        id: '1-2',
        name: 'Vinyasa joga',
        description: 'Dynamická joga, ktorá prepája pohyb s dychom. Posilňuje telo a zlepšuje koordináciu a flexibilitu.',
        price: 'od 10 €',
        icon: '🌊',
      },
      {
        id: '1-3',
        name: 'Relaxačná joga',
        description: 'Jemná joga zameraná na hlboké uvoľnenie, odbúranie stresu a obnovu vnútornej pohody.',
        price: 'od 10 €',
        icon: '🌿',
      },
    ],
  },
  {
    id: '2',
    name: 'Individuálne hodiny',
    items: [
      {
        id: '2-1',
        name: 'Individuálna lekcia',
        description: 'Hodina jogy prispôsobená výlučne vašim potrebám a cieľom. Pracujete priamo s lektorom v súkromnom prostredí.',
        price: 'od 30 €',
        icon: '🎯',
      },
      {
        id: '2-2',
        name: 'Balíček 5 lekcií',
        description: 'Päť individuálnych hodín za zvýhodnenú cenu. Ideálne pre tých, ktorí chcú rýchly a viditeľný pokrok.',
        price: 'od 130 €',
        icon: '📦',
      },
    ],
  },
  {
    id: '3',
    name: 'Špeciálne programy',
    items: [
      {
        id: '3-1',
        name: 'Joga pre tehotné',
        description: 'Bezpečné cvičenie špeciálne navrhnuté pre nastávajúce mamičky. Posilňuje telo a pripravuje na pôrod.',
        price: 'od 12 €',
        icon: '🤰',
      },
      {
        id: '3-2',
        name: 'Detská joga',
        description: 'Hravé hodiny jogy pre deti, ktoré rozvíjajú pohyblivosť, koncentráciu a sebavedomie.',
        price: 'od 8 €',
        icon: '🧒',
      },
      {
        id: '3-3',
        name: 'Prvá hodina zadarmo',
        description: 'Vyskúšajte našu jogu bez záväzkov. Prvá hodina je pre nových záujemcov úplne zadarmo.',
        price: 'Zadarmo',
        icon: '🎁',
      },
    ],
  },
];

// ---------------------------------------------------------------------------
// SCHEDULE (templateType: 'schedule')
// ---------------------------------------------------------------------------
export const SCHEDULE: DaySchedule[] = [];

// ---------------------------------------------------------------------------
// MENU CATEGORIES (templateType: 'menu')
// ---------------------------------------------------------------------------
export const MENU_CATEGORIES: MenuCategory[] = [];

// ---------------------------------------------------------------------------
// REVIEWS
// ---------------------------------------------------------------------------
export const REVIEWS: Review[] = [];

// ---------------------------------------------------------------------------
// CONTACT
// ---------------------------------------------------------------------------
export const CONTACT_ITEMS: ContactItem[] = [
  { icon: '📍', title: t().contact.address, lines: ['Palackého 12, Trenčín'] },
  { icon: '📞', title: t().contact.phone,   lines: ['+421 900 000 000'] },
  { icon: '✉️', title: t().contact.email,   lines: ['info@pohodajoga.sk'] },
  { icon: '🕐', title: t().contact.hours,   lines: ['Pondelok – Piatok: 09:00 – 18:00', 'Sobota – Nedeľa: zatvorené'] },
];

// ---------------------------------------------------------------------------
// FAQ
// ---------------------------------------------------------------------------
export const FAQ_ITEMS: FaqItem[] = [
  {
    id: '1',
    question: 'Musím mať predchádzajúce skúsenosti s jogou?',
    answer: 'Nie, skúsenosti nie sú potrebné. Naše hodiny sú otvorené pre začiatočníkov aj pokročilých. Lektori prispôsobia cvičenie vašej úrovni.',
  },
  {
    id: '2',
    question: 'Čo si mám priniesť na prvú hodinu?',
    answer: 'Stačí pohodlné oblečenie vhodné na cvičenie. Podložky na jogu sú k dispozícii v štúdiu, prípadne si môžete priniesť vlastnú.',
  },
  {
    id: '3',
    question: 'Ako môžem využiť prvú hodinu zadarmo?',
    answer: 'Jednoducho nás kontaktujte telefonicky alebo e-mailom a dohodnite si termín. Prvá hodina pre nových záujemcov je úplne bezplatná bez akýchkoľvek záväzkov.',
  },
  {
    id: '4',
    question: 'Koľko ľudí býva v skupinovej hodine?',
    answer: 'Dbáme na malé skupiny, aby sa každý účastník mohol naplno venovať cvičeniu a lektor mal priestor poskytnúť individuálnu pozornosť. Skupiny zvyčajne obsahujú 6 až 10 ľudí.',
  },
  {
    id: '5',
    question: 'Môžem cvičiť jogu, ak mám zdravotné obmedzenia?',
    answer: 'Áno, informujte nás pred hodinou o svojich zdravotných obmedzeniach a lektor prispôsobí cvičenie vašim potrebám. V prípade vážnejších zdravotných problémov odporúčame poradiť sa najprv s lekárom.',
  },
];

// ---------------------------------------------------------------------------
// CHAT CONFIG
// ---------------------------------------------------------------------------
export const CHAT_CONFIG: ChatConfig = {
  greeting: 'Vitajte v Pohoda Joga Trenčín! 🧘 Ako vám môžeme pomôcť?',
  quickReplies: [
    {
      id: '1',
      label: 'Prvá hodina zadarmo',
      response: 'Áno, prvá hodina je pre nových záujemcov úplne zadarmo! Stačí nás kontaktovať na info@pohodajoga.sk alebo na čísle +421 900 000 000 a dohodneme si termín.',
    },
    {
      id: '2',
      label: 'Rozvrh hodín',
      response: 'Hodiny prebiehajú od pondelka do piatku v čase 09:00 – 18:00. Pre aktuálny rozvrh skupinových hodín nás prosím kontaktujte priamo.',
    },
    {
      id: '3',
      label: 'Ceny lekcií',
      response: 'Skupinové hodiny začínajú od 10 €, individuálne lekcie od 30 €. Ponúkame aj balíčky za zvýhodnenú cenu. Prvá hodina je zadarmo!',
    },
    {
      id: '4',
      label: 'Kde nás nájdete',
      response: 'Naše štúdio sa nachádza na adrese Palackého 12, Trenčín. Tešíme sa na vás!',
    },
  ],
  fallbackResponse: 'Ďakujeme za vašu správu. Pre podrobnejšie informácie nás prosím kontaktujte na info@pohodajoga.sk alebo telefonicky na +421 900 000 000.',
};