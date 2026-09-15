import { FounderProfile } from '../types';
import pritomImg from '../assets/images/pritom_portrait_1789240977742.jpg';
import shovonImg from '../assets/images/shovon_portrait_1789240992496.jpg';
import minhajulImg from '../assets/images/minhajul_portrait_1789241005537.jpg';

export const FOUNDERS_DATA: FounderProfile[] = [
  {
    id: 'pritom',
    order: 1,
    name: 'PRITOM CHOWHAN',
    displayName: 'Pritom Chowhan',
    role: 'Co-Founder & Creative Director',
    image: pritomImg,
    fallbackImage: '/pritom_chowhan.jpg',
    bio: "I don't have everything figured out. I'm just trying to understand life, do meaningful work, and become better along the way.",
    motto: "Go confidently in the direction of your dreams. Live the life you have imagined.",
    mottoDetails: 'Life is too short for half-hearted dreams, forced relationships, and things done only for approval. Stay curious. Stay honest. Keep moving.',
    livesIn: 'Dhaka, Bangladesh',
    from: 'Akhaura, Brahmanbaria',
    birthday: 'March 23',
    gender: 'Male',
    instagram: 'pritom_chowhan',
    instagramUrl: 'https://www.instagram.com/pritom_chowhan/',
    facebookUrl: 'https://www.facebook.com/imkingpritom/',
    linkedin: 'Pritom Chowhan',
    linkedinUrl: 'https://www.linkedin.com/in/pritom-chowhan-80088a1b1/',
    Linkdin: 'Pritom Chowhan',
    LinkdinUrl: 'https://www.linkedin.com/in/pritom-chowhan-80088a1b1/',

    work: [
      {
        role: 'Chief Executive Officer (CEO) & Co-Founder',
        organization: 'Pathshala',
        organizationUrl: 'https://www.facebook.com/pathshala001',
        duration: 'Oct 2020 - Feb 2022',
      },
      {
        role: 'Studied Computer Graphic Designer',
        organization: 'Learning & Earning Development Project - LEDP',
        organizationUrl: 'https://www.facebook.com/profile.php?id=100069827409835',
        duration: 'Jul 21, 2020 - Jan 20, 2021',
      },
      {
        role: 'Debating & Communication',
        organization: 'Cambrian Debating Society - CDS',
        duration: 'Sept 25, 2017 - Dec 30, 2019',
      },
    ],
    education: [
      {
        institution: 'American International University-Bangladesh (AIUB)',
        details: 'Bachelor of Computer Science and Engineering.',
      },
      {
        institution: 'Cambrian Debating Society - CDS',
        details: 'Oratory, critical thinking, and communication leadership.',
      },
      {
        institution: 'Bangladesh Railway Govt. High School ,Akhaura',
        details: 'Foundational schooling and community roots.',
      },
    ],
    storyTitle: 'Still Becoming.',
    story:
      'I believe life is less about having everything figured out and more about becoming a better version of yourself, one experience at a time. I like creating things, learning from mistakes, questioning what already exists, and turning simple ideas into something meaningful.',
    storyClosing: "I don't want to simply pass through life. I want to leave something behind that feels genuinely mine.",
    philosophy:
      'Patience in craft, heart in hospitality, and never doing anything by halves.',
    zenRoleDescription:
      'Curates the cafe brand vision, interior visual harmony, acoustic balance, and community culture.',
    favoriteDrink: 'Raw Mango Natural Juice & Fresh Cappuccino',
    favoriteDrinkId: 'raw-mango',
  },
  {
    id: 'niaz',
    order: 2,
    name: 'Niaz Mohammad Shovon',
    displayName: 'Niaz Mahmud Shovon',
    role: 'Co-Founder & Operations Lead',
    image: shovonImg,
    fallbackImage: '/niaz_shovon.jpg',
    bio: 'Curious by nature, always learning, creating, and becoming.',
    motto: '“Try to be better than yourself.” — William Faulkner',
    livesIn: 'Dhaka, Bangladesh',
    from: 'Bhola, Barisal, Bangladesh',
    birthday: 'December 29, 2000',
    gender: 'Male',
    instagram: 'niaaz_shovon',
    instagramUrl: 'https://www.instagram.com/niaazzz___/',
    facebookUrl: 'https://www.facebook.com/shikder.mahmmud',

    work: [
      {
        role: 'Hospitality & Operations',
        organization: 'Panthom Rc',
        duration: 'Mar 8, 2025 - Present · 1 year, 6 months',
        details: 'Managing fast-paced hospitality logistics and guest relations.',
      },
      {
        role: 'Works at Panthom Rc',
        organization: 'DMF',
        duration: 'March 8, 2025 - Present',
      },
      {
        role: 'Former DMF at Textile Galaxy XI',
        organization: 'Textile Galaxy XI',
        duration: 'June 2023 - February 2025',
      },
    ],
    education: [
      {
        institution: 'Charfassion govt college',
        details: 'Higher secondary studies with academic distinction.',
        year: 'Class of 2019',
      },
      {
        institution: 'North South University',
        details: 'Bachelor of Business Administration',
      },
    ],
    story:
      'Bringing warmth, humor, and meticulous operational discipline from Bhola, Barisal to the heart of Dhaka, Niaz Mohammad Shovon ensures Zen Cafe runs with effortless grace. He believes a cafe is only as good as the smile that greets you at the door and the exact consistency of every beverage served. Niaz coordinates counter service, daily fresh fruit sourcing, and ensures every visitor feels welcomed as an honored regular.',
    philosophy:
      'Genuine smiles make any day lighter; genuine hospitality turns strangers into family.',
    zenRoleDescription:
      'Leads guest hospitality, daily counter operations, barista workflow, and supplier relationships.',
    favoriteDrink: 'Fresh Malta Juice & Double Shot Espresso',
    favoriteDrinkId: 'malta',
  },
  {
    id: 'minhajul',
    order: 3,
    name: 'Minhajul Huda',
    displayName: 'Minhajul Huda',
    role: 'Co-Founder & Community Experience',
    image: minhajulImg,
    fallbackImage: '/minhajul_huda.jpg',
    bio: 'Connecting people over good drinks, soothing ambient track lighting, and genuine hospitality.',
    motto: 'Creating calm corners where stories unfold naturally.',
    livesIn: 'Rampur, Dhaka, Bangladesh',
    from: 'Akhaura, Chittagong, Bangladesh',
    birthday: 'August',
    gender: 'Male',
    instagram: 'minhaj_1204',
    instagramUrl: 'https://www.instagram.com/minhaj_1204/',
    facebookUrl: 'https://www.facebook.com/minhajul.huda.1204',
    work: [
      {
        role: 'Community Engagement & Space Design',
        organization: 'Zen Cafe Kuril',
        duration: 'Co-Founder · 2026 - Present',
        details: 'Curating visitor experiences, private study arrangements, and welcoming student groups.',
      },
    ],
    education: [
      {
        institution: 'Nikunja Model College',
        year: 'Class of 2019',
      },
      {
        institution: 'Bangladesh Railway Govt. high school ,Akhaura , 2009',
        year: 'Class of 2017',
      },
      {
        institution: 'United International University',
        details: 'Bachelor of Computer Science and Engineering.',
      },
    ],
    story:
      'Hailing from Akhaura and residing in Rampur, Dhaka, Minhajul Huda brings a magnetic warmth and deep eye for atmospheric comfort to Zen Cafe. An avid lover of cafe aesthetics and warm social spaces, Minhajul helped photograph and configure the gallery walls, the track-lit dark green corners, and the acoustic zoning so patrons can read, study, or enjoy heartfelt conversations in peace.',
    philosophy:
      'Space is not just furniture and walls; it is how comfortably your mind can breathe inside it.',
    zenRoleDescription:
      'Oversees ambient space curation, student community engagement, photo gallery exhibitions, and private gatherings.',
    favoriteDrink: 'Mint Lemonade Chill & Hand-Poured Filter Coffee',
    favoriteDrinkId: 'mint-lemonade',
  },
];
