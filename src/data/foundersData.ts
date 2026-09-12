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
    bio: 'I got lost in the bad things of life. Otherwise, I would have met myself and fallen in love. 🔮',
    motto: "A half-baked effort won't get you good results or bring you any satisfaction.",
    mottoHashtags: ['#pornota', '#Warfaze'],
    livesIn: 'Dhaka, Bangladesh',
    from: 'Akhaura, Chittagong, Bangladesh',
    birthday: 'March 23',
    gender: 'Male',
    instagram: 'pritom_chowhan',
    instagramUrl: 'https://www.instagram.com/pritom_chowhan/',
    linkedin: 'Pritom Chowhan',
    linkedinUrl: 'https://www.linkedin.com/in/pritom-chowhan-80088a1b1/',
    Linkdin: 'Pritom Chowhan',
    LinkdinUrl: 'https://www.linkedin.com/in/pritom-chowhan-80088a1b1/',

    work: [
      {
        role: 'Cultural Development & Arts',
        organization: 'Upazilla silpokola Academy Akhaura',
        duration: 'Oct 30, 2018 - Present · 7 years, 10 months',
        details: 'Active patronage and long-standing association with local artistic initiatives.',
      },
      {
        role: 'Digital Skills & Technology',
        organization: 'Learning & Earning Development Project - LEDP',
        details: 'Skill development and digital entrepreneurship track.',
      },
    ],
    education: [
      {
        institution: 'American International University-Bangladesh (AIUB)',
        details: 'Undergraduate study right by our cafe doorstep in Kuratoli, Kuril.',
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
    story:
      'Pritom Chowhan is one of the foundational minds behind Zen Cafe. Having walked the streets of Kuratoli and studied at AIUB, he recognized the urgent need for an unhurried, calm retreat where students and creatives could gather without the sensory overload of typical Dhaka street stalls. Driven by his core conviction that "a half-baked effort won\'t bring you any satisfaction," Pritom ensured every interior corner, track light, and beverage standard was executed with uncompromising care.',
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
    bio: 'Long time no seeee 🔮',
    motto: 'Hai ishq mein jab dube hum / Gham bhi mile toh kaisa gham?',
    livesIn: 'Dhaka, Bangladesh',
    from: 'Bhola, Barisal, Bangladesh',
    birthday: 'December 29, 2000',
    gender: 'Male',
    instagram: 'niaaz_shovon',
    instagramUrl: 'https://www.instagram.com/niaazzz___/',

    work: [
      {
        role: 'Hospitality & Operations',
        organization: 'Panthom Rc',
        duration: 'Mar 8, 2025 - Present · 1 year, 6 months',
        details: 'Managing fast-paced hospitality logistics and guest relations.',
      },
    ],
    education: [
      {
        institution: 'Charfassion govt college',
        details: 'Higher secondary studies with academic distinction.',
        year: 'Class of 2019',
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
    friendsCount: '758 friends',
    mutualCount: '127 mutual friends',
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
        institution: 'Nikunja Model School & College',
        details: 'College education in North Dhaka, bridging friendships across the city.',
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
