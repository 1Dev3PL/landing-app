import sheben from "shared/assets/images/sheben.png";
import shps from "shared/assets/images/shps.png";
import pesokIzOtsevov from "shared/assets/images/pesokIzOtsevov.png";

export type TItem = {
  imgSrc: string;
  title: string;
  description: string;
  fractions: string[];
  productGroupId: number;
};

export const items: TItem[] = [
  {
    imgSrc: sheben,
    title: "Щебень",
    description: "Для изготовления бетона и дорожного строительства",
    fractions: ["25 – 60", "40 – 70", "20 – 40"],
    productGroupId: 0,
  },
  {
    imgSrc: shps,
    title: "ЩПС",
    description: "Применяется для дорожного строительства",
    fractions: ["0-40", "0-80"],
    productGroupId: 1,
  },
  {
    imgSrc: pesokIzOtsevov,
    title: "Песок из отсевов",
    description: "Из отсевов дробления",
    fractions: ["0-5"],
    productGroupId: 2,
  },
  {
    imgSrc: sheben,
    title: "Щебень",
    description: "Для изготовления бетона и дорожного строительства",
    fractions: ["25 – 60", "40 – 70", "20 – 40"],
    productGroupId: 0,
  },
  {
    imgSrc: shps,
    title: "ЩПС",
    description: "Применяется для дорожного строительства",
    fractions: ["0-40", "0-80"],
    productGroupId: 1,
  },
  {
    imgSrc: pesokIzOtsevov,
    title: "Песок из отсевов",
    description: "Из отсевов дробления",
    fractions: ["0-5"],
    productGroupId: 2,
  },
  {
    imgSrc: sheben,
    title: "Щебень",
    description: "Для изготовления бетона и дорожного строительства",
    fractions: ["25 – 60", "40 – 70", "20 – 40"],
    productGroupId: 0,
  },
  {
    imgSrc: shps,
    title: "ЩПС",
    description: "Применяется для дорожного строительства",
    fractions: ["0-40", "0-80"],
    productGroupId: 1,
  },
  {
    imgSrc: pesokIzOtsevov,
    title: "Песок из отсевов",
    description: "Из отсевов дробления",
    fractions: ["0-5"],
    productGroupId: 2,
  },
];

export type TPlacemark= {
  id: number;
  latitude: number;
  longitude: number;
  description: string;
  title?: string;
  address?: string;
  goods?: string[];
}

export const factories: TPlacemark[] = [
  {
    id: 0,
    latitude: 60.584634,
    longitude: 29.061951,
    description: "Гавриловский Щз, до 17:00",
    title: "Гавриловский щебеночный завод",
    address: "186350, Ленинградская область, Выборгский район, пос. Гаврилово, ул. Заводская, д.1",
    goods: [
      "Щебень фр. 5-20 мм",
      "Щебень фр. 20-40 мм",
      "Щебень фр. 40-70 мм",
      "Щебень фр. 25-60 мм",
      "ЩПС фр. 0-40 мм",
      "ЩПС фр. 0-80 мм",
      "Песок из отсевов дробления фр. 0-5 мм",
    ],
  },
  {
    id: 1,
    latitude: 60.373541,
    longitude: 29.423439,
    description: "Рощинское городское поселение",
    title: "Рощинское городское поселение",
    address: "Рощинское городское поселение, Выборгский район, Ленинградская область",
    goods: [
      "Something",
    ],
  },
];
