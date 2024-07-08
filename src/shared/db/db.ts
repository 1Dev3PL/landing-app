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
