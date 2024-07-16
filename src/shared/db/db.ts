import sheben from "shared/assets/images/sheben.png";
import shps from "shared/assets/images/shps.png";
import pesokIzOtsevov from "shared/assets/images/pesokIzOtsevov.png";
import skmostLogo from "shared/assets/images/skmostLogo.svg";
import rjdLogo from "shared/assets/images/rjdLogo.svg";
import inkLogo from "shared/assets/images/inkLogo.svg";
import fifteenTwentyLogo from "shared/assets/images/fifteenTwentyLogo.svg";
import gaspromTomskLogo from "shared/assets/images/gaspromTomskLogo.svg";
import rIndustyLogo from "shared/assets/images/rIndustyLogo.svg";
import bamStroyLogo from "shared/assets/images/bamStroyLogo.svg";

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

export type TQuestion = {
  question: string;
  answer: string;
};

export const questions: TQuestion[] = [
  {
    question: "Где производится ваш щебень и другие материалы?",
    answer:
      "ТекстОтвета ТекстОтвета ТекстОтвета ТекстОтвета ТекстОтвета ТекстОтвета ТекстОтвета ТекстОтвета ТекстОтвета ТекстОтвета ТекстОтвета ТекстОтвета",
  },
  {
    question: "В какой зоне вы доставляете материалы?",
    answer:
      "ТекстОтвета ТекстОтвета ТекстОтвета ТекстОтвета ТекстОтвета ТекстОтвета ТекстОтвета ТекстОтвета ТекстОтвета ТекстОтвета ТекстОтвета ТекстОтвета",
  },
  {
    question: "Есть ли паспорт качества на каждую группу материалов?",
    answer:
      "ТекстОтвета ТекстОтвета ТекстОтвета ТекстОтвета ТекстОтвета ТекстОтвета ТекстОтвета ТекстОтвета ТекстОтвета ТекстОтвета ТекстОтвета ТекстОтвета",
  },
  {
    question: "Есть ли паспорт качества на каждую группу материалов?",
    answer:
      "ТекстОтвета ТекстОтвета ТекстОтвета ТекстОтвета ТекстОтвета ТекстОтвета ТекстОтвета ТекстОтвета ТекстОтвета ТекстОтвета ТекстОтвета ТекстОтвета",
  },
  {
    question: "Где производится ваш щебень и другие материалы?",
    answer:
      "ТекстОтвета ТекстОтвета ТекстОтвета ТекстОтвета ТекстОтвета ТекстОтвета ТекстОтвета ТекстОтвета ТекстОтвета ТекстОтвета ТекстОтвета ТекстОтвета",
  },
  {
    question: "Есть ли паспорт качества на каждую группу материалов?",
    answer:
      "ТекстОтвета ТекстОтвета ТекстОтвета ТекстОтвета ТекстОтвета ТекстОтвета ТекстОтвета ТекстОтвета ТекстОтвета ТекстОтвета ТекстОтвета ТекстОтвета",
  },
  {
    question: "Есть ли паспорт качества на каждую группу материалов?",
    answer:
      "ТекстОтвета ТекстОтвета ТекстОтвета ТекстОтвета ТекстОтвета ТекстОтвета ТекстОтвета ТекстОтвета ТекстОтвета ТекстОтвета ТекстОтвета ТекстОтвета",
  },
  {
    question: "Есть ли паспорт качества на каждую группу материалов?",
    answer:
      "ТекстОтвета ТекстОтвета ТекстОтвета ТекстОтвета ТекстОтвета ТекстОтвета ТекстОтвета ТекстОтвета ТекстОтвета ТекстОтвета ТекстОтвета ТекстОтвета",
  },
];

export type TPlacemark = {
  id: number;
  latitude: number;
  longitude: number;
  description: string;
  title?: string;
  address?: string;
  goods?: string[];
};

export const office: [TPlacemark] = [
  {
    id: 0,
    latitude: 59.87887,
    longitude: 30.278265,
    description: "улица Возрождения, 31",
  },
];

export const factories: TPlacemark[] = [
  {
    id: 0,
    latitude: 60.584634,
    longitude: 29.061951,
    description: "Гавриловский Щз, до 17:00",
    title: "Гавриловский щебеночный завод",
    address:
      "186350, Ленинградская область, Выборгский район, пос. Гаврилово, ул. Заводская, д.1",
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
    address:
      "Рощинское городское поселение, Выборгский район, Ленинградская область",
    goods: ["Something"],
  },
];

export type TReview = {
  id: number;
  logo: string;
  text: string;
  companyName: string;
};

export const reviews: TReview[] = [
  {
    id: 0,
    logo: skmostLogo,
    text: "Благодарим «Петратерру» за высокий уровень профессионализма и плодотворное сотрудничество!\n\nУверены в дальнейшем сотрудничестве в таком же позитивном и результативном ключе!",
    companyName: "АО «БАМТОННЕЛЬСТРОЙ-МОСТ»",
  },
  {
    id: 1,
    logo: rjdLogo,
    text: "Качество вашей работы всегда на высоте, все выполнено очень четко и профессионально.\n\nВы всегда подходите к поставке практично и не допуская серьезных задержек в сроках.",
    companyName: "ОАО «РОССИЙСКИЕ ЖЕЛЕЗНЫЕ ДОРОГИ»",
  },
  {
    id: 2,
    logo: inkLogo,
    text: "Выражаем благодарность компании «Петратерра» за высококачественные поставки нерудных материалов.\n\nВсегда остаемся довольны уровнем обслуживания и качеством материалов",
    companyName: "АО «ИНК-КАПИТАЛ»",
  },
  {
    id: 3,
    logo: fifteenTwentyLogo,
    text: "«Петратерра» всегда проявляла высокий уровень профессионализма. Менеджеры компании оперативно реагировали на наши запросы и предоставляли всю необходимую информацию",
    companyName: "ООО «ГРУППА КОМПАНИЙ 1520»",
  },
  {
    id: 4,
    logo: fifteenTwentyLogo,
    text: "«Петратерра» всегда проявляла высокий уровень профессионализма. Менеджеры компании оперативно реагировали на наши запросы и предоставляли всю необходимую информацию",
    companyName: "ООО «ГРУППА КОМПАНИЙ 1520»",
  },
  {
    id: 5,
    logo: fifteenTwentyLogo,
    text: "«Петратерра» всегда проявляла высокий уровень профессионализма. Менеджеры компании оперативно реагировали на наши запросы и предоставляли всю необходимую информацию",
    companyName: "ООО «ГРУППА КОМПАНИЙ 1520»",
  },
];

export type TPartner = {
  logo: string;
};

export const partners: TPartner[] = [
  {
    logo: gaspromTomskLogo,
  },
  {
    logo: skmostLogo,
  },
  {
    logo: rIndustyLogo,
  },
  {
    logo: bamStroyLogo,
  },
  {
    logo: rjdLogo,
  },
  {
    logo: gaspromTomskLogo,
  },
  {
    logo: skmostLogo,
  },
  {
    logo: rIndustyLogo,
  },
  {
    logo: bamStroyLogo,
  },
  {
    logo: rjdLogo,
  },
];
