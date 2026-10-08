export const SITE = {
  name: "Paradise Spa",
  tagline:
    "Our guests return not just for the treatments — but for the feeling they take home.",
  about:
    "Paradise Spa is located in the heart of Kathmandu city, established to awaken you physically and spiritually. Best place to relax, refresh and revitalize.",
  address: "Sher Bhawan, Chaksibari Marg, Thamel, Kathmandu, Nepal",
  email: "paradisespanepal@gmail.com",
  phone: "+977 9823243082",
  hours: "Mon - Sat: 8:00 AM - 10:00 PM",
  contactHours: "8:30AM - 9:30PM",
  instagram: "#",
  facebook: "#",
};

export const NAV = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/packages", label: "Packages" },
  { href: "/blogs", label: "Blogs" },
  { href: "/about-us", label: "About Us" },
  { href: "/contact-us", label: "Contact Us" },
];

export type Category =
  | "Body Treatments"
  | "Holistic Therapies"
  | "Massage Therapy";
export const CATEGORIES: Category[] = [
  "Body Treatments",
  "Holistic Therapies",
  "Massage Therapy",
];

export type Service = {
  slug: string;
  name: string;
  category: Category;
  minDuration: number;
  maxDuration: number;
  minPrice: number;
  maxPrice: number;
  summary: string;
  description: string;
  techniques: { title: string; text: string }[];
  options: { minutes: number; price: number }[];
};

type Raw = Omit<Service, "options"> & { override?: Record<number, number> };

function build(r: Raw): Service {
  const { override, ...rest } = r;
  const steps: number[] = [];
  for (let m = r.minDuration; m <= r.maxDuration; m += 30) steps.push(m);
  const options = steps.map((m, i) => {
    if (override && override[m]) return { minutes: m, price: override[m] };
    const t = steps.length === 1 ? 0 : i / (steps.length - 1);
    const raw = r.minPrice + (r.maxPrice - r.minPrice) * t;
    return { minutes: m, price: Math.round(raw / 50) * 50 };
  });
  return { ...rest, options };
}

const generic = (name: string) => [
  {
    title: "Preparation",
    text: `Your therapist discusses your needs and preferred pressure before your ${name} begins.`,
  },
  {
    title: "Treatment",
    text: "Warm oils, towels and calm surroundings help the body release tension and restore balance.",
  },
  {
    title: "Aftercare",
    text: "Finish with a moment of stillness, herbal tea and tips to carry the calm home.",
  },
];

const RAW: Raw[] = [
  {
    slug: "four-hand-therapy",
    name: "Four hand Therapy",
    category: "Massage Therapy",
    minDuration: 60,
    maxDuration: 120,
    minPrice: 6500,
    maxPrice: 8000,
    summary:
      "Four-hand therapy is intended to provide a more relaxing experience than traditional treatments.",
    description:
      "Four-hand therapy is intended to provide a more relaxing experience than traditional treatments. The therapists' synchronized, flowing movements produce a perfect rhythm that surrounds you in comfort and enhances your sensation of peacefulness. This approach not only relaxes the mind but also stimulates and revitalizes the muscles more efficiently than other methods.",
    techniques: [
      {
        title: "Friction",
        text: "Enhances blood circulation by providing oxygen and nutrients to various body parts.",
      },
      {
        title: "Deep Pressure",
        text: "Simultaneous movements and applied pressure from both therapists lead to deep pressure, enhancing relaxation.",
      },
      {
        title: "Hacking",
        text: "Maximizes the use of tired or sore muscles and is very effective as a muscle-stimulating method.",
      },
      {
        title: "Roll Massage",
        text: "Warms the muscles and skin through direct compression.",
      },
      {
        title: "Fluid Movements",
        text: "A soft massage, leading to the effortless movement of body fluids.",
      },
    ],
    override: { 60: 6500, 90: 7500, 120: 8000 },
  },
  {
    slug: "trekkers-special-therapy",
    name: "Trekker's Special Therapy",
    category: "Massage Therapy",
    minDuration: 90,
    maxDuration: 150,
    minPrice: 5000,
    maxPrice: 6800,
    summary:
      "Trekker's Special Therapy is a specialized massage treatment designed for people…",
    description:
      "Trekker's Special Therapy is a specialized massage treatment designed for people returning from the trails. Focused work on calves, thighs, hips and lower back eases fatigue and helps you recover after long days of trekking.",
    techniques: generic("Trekker's Special Therapy"),
    override: { 90: 5000, 120: 6000, 150: 6800 },
  },
  {
    slug: "thai-stretching-therapy",
    name: "Thai-stretching Therapy",
    category: "Massage Therapy",
    minDuration: 60,
    maxDuration: 120,
    minPrice: 3500,
    maxPrice: 5000,
    summary:
      "Among the various therapies available at Paradise Spa, Thai stretching therapy is a highly…",
    description:
      "Among the various therapies available at Paradise Spa, Thai stretching therapy is a highly effective method combining acupressure, assisted yoga-like stretches and rhythmic compression to improve flexibility and release tight muscles.",
    techniques: generic("Thai-stretching Therapy"),
  },
  {
    slug: "aroma-therapy",
    name: "Aroma Therapy",
    category: "Holistic Therapies",
    minDuration: 60,
    maxDuration: 120,
    minPrice: 4000,
    maxPrice: 6500,
    summary:
      "Aromatherapy, a holistic practice, engages the therapeutic properties of essential oils to…",
    description:
      "Aromatherapy uses aromatic plant oils, including essential oils, for psychological and physical well-being. Aromatherapists blend therapeutic essential oils, especially for each person, and suggest topical application, massage, inhalation, or water immersion to stimulate the desired responses.",
    techniques: generic("Aroma Therapy"),
  },
  {
    slug: "nepali-traditional-therapy",
    name: "Nepali Traditional Therapy",
    category: "Massage Therapy",
    minDuration: 60,
    maxDuration: 120,
    minPrice: 4000,
    maxPrice: 6500,
    summary:
      "Nepal's traditional therapy is a typical Nepali massage. Traditional Nepali…",
    description:
      "A typical Nepali massage using warm oils and rhythmic strokes handed down through generations, designed to soothe the body and calm the mind.",
    techniques: generic("Nepali Traditional Therapy"),
  },
  {
    slug: "deep-tissue-therapy",
    name: "Deep Tissue Therapy",
    category: "Massage Therapy",
    minDuration: 60,
    maxDuration: 120,
    minPrice: 4000,
    maxPrice: 6500,
    summary:
      "Deep tissue therapy is a technique used to treat musculoskeletal issues, such as…",
    description:
      "Deep tissue therapy is a technique used to treat musculoskeletal issues such as strains and chronic tension. Slow, firm strokes reach the deeper layers of muscle and connective tissue.",
    techniques: generic("Deep Tissue Therapy"),
  },
  {
    slug: "swedish-therapy",
    name: "Swedish Therapy",
    category: "Massage Therapy",
    minDuration: 60,
    maxDuration: 120,
    minPrice: 3500,
    maxPrice: 5000,
    summary:
      "Swedish massage is one of the most commonly offered massage techniques. It's…",
    description:
      "Swedish massage is one of the most commonly offered massage techniques. Long, gliding strokes, kneading and gentle tapping promote relaxation and improve circulation.",
    techniques: generic("Swedish Therapy"),
  },
  {
    slug: "ayurvedic-therapy",
    name: "Ayurvedic Therapy",
    category: "Holistic Therapies",
    minDuration: 60,
    maxDuration: 120,
    minPrice: 3500,
    maxPrice: 5000,
    summary:
      "We know what you were searching for. You are at the right place. The best spa for therapies i…",
    description:
      "Traditional Ayurvedic massage using herbal oils selected for your dosha to balance body and mind, detoxify and rejuvenate.",
    techniques: generic("Ayurvedic Therapy"),
  },
  {
    slug: "hotstone-treatment",
    name: "Hotstone Treatment",
    category: "Body Treatments",
    minDuration: 90,
    maxDuration: 150,
    minPrice: 5000,
    maxPrice: 7000,
    summary:
      "In salubrity and relaxation, the hot stone massage has become increasingly popular…",
    description:
      "Smooth heated basalt stones are placed on key points and used as massage tools, melting away muscle tension and deepening relaxation.",
    techniques: generic("Hotstone Treatment"),
  },
  {
    slug: "steam-and-sauna",
    name: "Steam and Sauna",
    category: "Body Treatments",
    minDuration: 30,
    maxDuration: 60,
    minPrice: 1000,
    maxPrice: 1700,
    summary:
      "In Paradise Spa, Sauna steam therapy is a great way to naturally promote healing and…",
    description:
      "Sauna and steam therapy is a great way to naturally promote healing and relaxation, opening pores and easing sore muscles.",
    techniques: generic("Steam and Sauna"),
  },
  {
    slug: "jacuzzi-treatment",
    name: "Jacuzzi Treatment",
    category: "Body Treatments",
    minDuration: 30,
    maxDuration: 60,
    minPrice: 1500,
    maxPrice: 2000,
    summary:
      "Get the ultimate hydrotherapy experience with air and water jets working in concert to target…",
    description:
      "A hydrotherapy experience with air and water jets working in concert to target tension and improve circulation.",
    techniques: generic("Jacuzzi Treatment"),
  },
  {
    slug: "upper-and-lower-back-treatment",
    name: "Upper and Lower Back Treatment",
    category: "Massage Therapy",
    minDuration: 30,
    maxDuration: 60,
    minPrice: 1530,
    maxPrice: 2250,
    summary:
      "Are you having persistent upper and lower back pain that is stopping you from living you…",
    description:
      "Targeted treatment for persistent upper and lower back pain, easing stiffness and restoring mobility.",
    techniques: generic("Upper and Lower Back Treatment"),
  },
  {
    slug: "head-and-shoulder-treatment",
    name: "Head and shoulder Treatment",
    category: "Massage Therapy",
    minDuration: 30,
    maxDuration: 60,
    minPrice: 1530,
    maxPrice: 2250,
    summary:
      "In today's world full of stress and responsibilities, who wouldn't love a relaxing…",
    description:
      "A relaxing head, neck and shoulder massage that releases the tension built up through daily stress and long hours at a desk.",
    techniques: generic("Head and shoulder Treatment"),
  },
  {
    slug: "cupping-treatment",
    name: "Cupping Treatment",
    category: "Holistic Therapies",
    minDuration: 30,
    maxDuration: 60,
    minPrice: 1800,
    maxPrice: 2700,
    summary:
      "Cupping therapy is a traditional therapy technique originated in China and West Asia. …",
    description:
      "Cupping therapy is a traditional technique originated in China and West Asia. Suction cups lift the skin and underlying tissue to ease muscle tension and stimulate blood flow.",
    techniques: generic("Cupping Treatment"),
  },
  {
    slug: "body-scrub",
    name: "Body Scrub",
    category: "Body Treatments",
    minDuration: 30,
    maxDuration: 90,
    minPrice: 2200,
    maxPrice: 4500,
    summary:
      "Are you having rough skin and dry patches getting you down? Consider a full-body scrub treatment…",
    description:
      "A full-body scrub treatment that exfoliates rough skin and dry patches, leaving the skin soft, smooth and glowing.",
    techniques: generic("Body Scrub"),
  },
  {
    slug: "shirodhara",
    name: "Shirodhara",
    category: "Holistic Therapies",
    minDuration: 30,
    maxDuration: 90,
    minPrice: 4000,
    maxPrice: 6500,
    summary:
      "In today's fast-paced world finding a moment of mental peace is more important than ever…",
    description:
      "A continuous stream of warm herbal oil is poured over the forehead, calming the nervous system and bringing deep mental peace.",
    techniques: generic("Shirodhara"),
  },
  {
    slug: "acupressure-shiatsu",
    name: "Acupressure/Shiatsu",
    category: "Holistic Therapies",
    minDuration: 60,
    maxDuration: 120,
    minPrice: 3500,
    maxPrice: 5000,
    summary:
      "Acupressure is a therapeutic massage method that includes manual pressure applied to…",
    description:
      "A therapeutic method using manual pressure applied to specific points of the body to restore energy flow and relieve pain.",
    techniques: generic("Acupressure/Shiatsu"),
  },
  {
    slug: "reflexology-treatment",
    name: "Reflexology Treatment",
    category: "Holistic Therapies",
    minDuration: 30,
    maxDuration: 60,
    minPrice: 1530,
    maxPrice: 2250,
    summary:
      "Paradise Spa has chosen reflexology massage as a fundamental therapy of its spa menu to…",
    description:
      "Pressure applied to reflex points on the feet and hands to encourage balance and well-being throughout the body.",
    techniques: generic("Reflexology Treatment"),
  },
];

export const SERVICES: Service[] = RAW.map(build);
export const getService = (slug: string) =>
  SERVICES.find((s) => s.slug === slug);

export type Pkg = {
  slug: string;
  name: string;
  minutes: number;
  price: number;
  items: string[];
  description: string;
};

export const PACKAGES: Pkg[] = [
  {
    slug: "half-day-package",
    name: "Paradise Spa Half-Day Package",
    minutes: 260,
    price: 8000,
    items: [
      "Aroma Therapy - 60 mins",
      "Manicure - Normal Manicure",
      "Facial - Aloevera Facial",
      "Pedicure - Normal pedicure",
    ],
    description:
      "Restart your mind, body, and soul with our Half-Day Therapy Package at Paradise Spa. Indulge in luxurious treatments designed to melt away stress. Experience pure bliss and leave feeling refreshed and revitalized. This package includes a full-body aromatherapy session, manicure, pedicure, and an aloe vera facial.",
  },
  {
    slug: "full-day-package",
    name: "Paradise Spa Full-Day Packages",
    minutes: 350,
    price: 10000,
    items: [
      "Shirodhara - 30 mins",
      "Ayurvedic Therapy - 90 mins",
      "Facial - Normal facial",
      "Manicure - Normal Manicure",
      "Pedicure - Normal pedicure",
      "Steam and Sauna - 30 mins",
    ],
    description:
      "Treat yourself to a day of pure bliss with our exclusive Full-Day Therapy Packages. Whether you need deep relaxation or a quick rejuvenation, it's a perfect escape. Endure a full-day exclusive therapy treatment at Paradise Spa. This package includes an exclusive treatment, Ayurvedic therapy, a facial, manicure, and pedicure, and concludes with a steam and sauna session.",
  },
];
export const getPackage = (slug: string) =>
  PACKAGES.find((p) => p.slug === slug);

export type Blog = { slug: string; title: string; date: string; tag: string };
export const BLOGS: Blog[] = [
  {
    slug: "body-to-body-spa-in-kathmandu-what-to-know",
    title: "Body to Body Spa in Kathmandu: What to Know",
    date: "September 9, 2026",
    tag: "News",
  },
  {
    slug: "best-couple-massage-in-kathmandu",
    title:
      "Best Couple Massage in Kathmandu: What to Look for When Choosing a Spa",
    date: "September 9, 2026",
    tag: "News",
  },
  {
    slug: "cupping-therapy-in-kathmandu",
    title: "Cupping Therapy in Kathmandu: Benefits, Risks and What to Expect",
    date: "September 9, 2026",
    tag: "News",
  },
  {
    slug: "body-to-body-spa-in-kathmandu-what-to-expect",
    title: "Body to Body Spa in Kathmandu: What to Expect",
    date: "September 9, 2026",
    tag: "News",
  },
  {
    slug: "swedish-massage-or-deep-tissue-massage",
    title: "Swedish Massage or Deep Tissue Massage in Kathmandu?",
    date: "August 13, 2026",
    tag: "News",
  },
  {
    slug: "deep-tissue-vs-thai-massage-in-thamel",
    title: "Deep Tissue vs Thai Massage in Thamel: Which Is Better?",
    date: "August 13, 2026",
    tag: "News",
  },
  {
    slug: "which-massage-is-best-after-everest-base-camp",
    title: "Which Massage Is Best After Everest Base Camp Trek?",
    date: "August 13, 2026",
    tag: "News",
  },
  {
    slug: "best-massage-for-tourists-in-kathmandu",
    title:
      "Best Massage for Tourists in Kathmandu: Swedish, Deep Tissue and More",
    date: "August 13, 2026",
    tag: "News",
  },
  {
    slug: "what-is-an-ayurveda-panchakarma-retreat",
    title: "What is an Ayurveda Panchakarma Retreat",
    date: "March 2, 2026",
    tag: "News",
  },
  {
    slug: "why-practice-mindfulness",
    title: "Why Practice Mindfulness?",
    date: "March 2, 2026",
    tag: "News",
  },
];

export const REVIEWS = [
  {
    name: "Ilaria Serra",
    text: "I went to this spa for a massage after trekking to Everest Base Camp, and it was nothing short of rejuvenating. The woman who gave me the massage had magical hands and managed to stretch out all my tired muscles.",
  },
  {
    name: "Daniel Foster",
    text: "Calm, clean and professional. The four hand therapy was the most relaxing hour I have had in years.",
  },
  {
    name: "Priya Sharma",
    text: "The half-day package was worth every rupee. Friendly staff and a peaceful atmosphere right in Thamel.",
  },
  {
    name: "Marco Bellini",
    text: "Best Ayurvedic treatment in Kathmandu. I left feeling light, refreshed and completely renewed.",
  },
];

export const BENEFITS = [
  {
    title: "Personalized Pampering",
    text: "Every treatment is all about you, so you are guaranteed of a calming scents, touches, and motions that feeds the body, mind, and spirit.",
  },
  {
    title: "Mental Clarity",
    text: "Cleanse yourself of the day to day stress and distractions and open your mind to clarity, creativity and renewed vision.",
  },
  {
    title: "Gentle Reawakening",
    text: "Open your eyes to delicate scents, touches, and motions that bring back sanity, tranquility, and conscious awareness.",
  },
  {
    title: "Radiant Vitality",
    text: "Get your vitality back with your body and mind being rejuvenated with a new feeling of vitality and natural radiance.",
  },
];

export const fmt = (n: number) => "Rs " + n.toLocaleString("en-US");
