export type BenefitImage = {
  id: number;
  url: string;
  width: number;
  height: number;
  description: string;
};

export const benefitImages: BenefitImage[] = [
  {
    id: 1,
    url: '/benefit-eco-stylist.png',
    width: 178,
    height: 22,
    description: 'Logo eco-stylist company',
  },
  {
    id: 2,
    url: '/benefit-canadian-living.png',
    width: 111,
    height: 52,
    description: 'Logo canadian-living company',
  },
  {
    id: 3,
    url: '/benefit-jillian-harris.png',
    width: 271,
    height: 53,
    description: 'Logo jillian-harris company',
  },
  {
    id: 4,
    url: '/benefit-eco-hub.png',
    width: 194,
    height: 37,
    description: 'Logo eco-hub company',
  },
  {
    id: 5,
    url: '/benefit-trend-hunter.png',
    width: 192,
    height: 58,
    description: 'Logo trend-hunter company',
  },
];
