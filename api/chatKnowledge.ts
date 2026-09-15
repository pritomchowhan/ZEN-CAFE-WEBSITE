import { CONTACT_INFO, MENU_ITEMS } from '../src/data/cafeData';

export const CAFE_KNOWLEDGE = [
  'Cafe: Zen Cafe',
  `Address: ${CONTACT_INFO.address}`,
  `Phone: ${CONTACT_INFO.phoneFormatted}`,
  `Email: ${CONTACT_INFO.email}`,
  `Hours: ${CONTACT_INFO.hours}; closed ${CONTACT_INFO.closedDay}.`,
  `Menu: ${MENU_ITEMS.map((item) => `${item.name} (${item.price}; ${item.category}) - ${item.description}`).join('\n')}`,
  'Founders: Pritom Chowhan (Co-Founder & Creative Director); Niaz Mahmud Shovon (Co-Founder & Operations Lead); Minhajul Huda (Co-Founder & Community Experience).',
].join('\n');
