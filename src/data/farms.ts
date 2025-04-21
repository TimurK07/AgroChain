import crownImage from "../assets/crownImage.jpeg"

export interface Cow {
  id: string;
  breed: string;              // Порода
  age: number;                // Возраст
  weight: number;             // Вес в кг
  milkYield: number;         // Удой в литрах в день
  lastCalvingDate: string;   // Дата последнего отёла
  pregnancyStatus: string;   // Статус стельности
  health: {
    vaccination: string[];    // История вакцинации
    diseases: string[];      // История болезней
    vetInspectionDate: string; // Дата последнего вет. осмотра
  };
  genetics: {
    father: string;          // Информация об отце
    mother: string;          // Информация о матери
    pedigree: boolean;       // Наличие родословной
  };
  productivity: {
    milkFat: number;         // Жирность молока (%)
    milkProtein: number;     // Белок в молоке (%)
    averageYield: number;    // Средний удой за 305 дней
    lactationNumber: number; // Номер лактации
  };
  price: number;
  imageUrl: string;
  additionalImages?: string[]; // Дополнительные фотографии
}

export interface Farm {
  id: string;
  name: string;
  type: string;
  location: string;
  description: string;
  cattleCount: number;
  cattle: Cow[];
}

export const farms: Farm[] = [
  {
    id: "1",
    name: "Христианское хозяйство \"Благодать\"",
    type: "Крестьянское хозяйство",
    location: "г. Павлодар, ул. Центральная 45",
    description: "Семейное христианское хозяйство, специализирующееся на производстве молочной продукции. Основано в 2010 году.",
    cattleCount: 150,
    cattle: [
      {
        id: "1234",
        breed: "Голштинская",
        age: 4,
        weight: 650,
        milkYield: 32,
        lastCalvingDate: "2024-12-15",
        pregnancyStatus: "Стельная, 5 месяцев",
        health: {
          vaccination: ["Бруцеллез - 2024-01-15", "Ящур - 2024-02-01"],
          diseases: ["Нет в истории болезней"],
          vetInspectionDate: "2024-03-01"
        },
        genetics: {
          father: "Бык Император, линия Рефлекшн Соверинг",
          mother: "Корова Марта, удой матери 10,500 кг за 305 дней",
          pedigree: true
        },
        productivity: {
          milkFat: 4.2,
          milkProtein: 3.4,
          averageYield: 9800,
          lactationNumber: 2
        },
        price: 850000,
        imageUrl: crownImage
      },
      {
        id: "1235",
        breed: "Симментальская",
        age: 5,
        weight: 680,
        milkYield: 28,
        lastCalvingDate: "2024-11-20",
        pregnancyStatus: "Нестельная",
        health: {
          vaccination: ["Бруцеллез - 2024-01-15", "Ящур - 2024-02-01"],
          diseases: ["Мастит (2023) - вылечен"],
          vetInspectionDate: "2024-03-01"
        },
        genetics: {
          father: "Бык Гром, линия Флекгвих",
          mother: "Корова Зорька, удой матери 9,200 кг за 305 дней",
          pedigree: true
        },
        productivity: {
          milkFat: 4.0,
          milkProtein: 3.5,
          averageYield: 8500,
          lactationNumber: 3
        },
        price: 780000,
        imageUrl: crownImage
      }
    ]
  },
  {
    id: "2",
    name: "КХ \"Новая Жизнь\"",
    type: "Крестьянское хозяйство",
    location: "г. Павлодар, с. Павлодарское",
    description: "Христианское фермерское хозяйство с традициями. Занимаемся разведением крупного рогатого скота с 2005 года.",
    cattleCount: 180,
    cattle: [
      {
        id: "2001",
        breed: "Айрширская",
        age: 3,
        weight: 590,
        milkYield: 30,
        lastCalvingDate: "2025-01-10",
        pregnancyStatus: "Нестельная",
        health: {
          vaccination: ["Бруцеллез - 2024-01-20", "Ящур - 2024-02-05"],
          diseases: ["Нет в истории болезней"],
          vetInspectionDate: "2024-03-05"
        },
        genetics: {
          father: "Бык Сокол, линия Дон Жуан",
          mother: "Корова Ласточка, удой матери 9,800 кг за 305 дней",
          pedigree: true
        },
        productivity: {
          milkFat: 4.5,
          milkProtein: 3.6,
          averageYield: 9200,
          lactationNumber: 1
        },
        price: 820000,
        imageUrl: crownImage
      }
    ]
  },
  {
    id: "3",
    name: "ТОО \"Павлодар-Агро Христианское\"",
    type: "Товарищество с ограниченной ответственностью",
    location: "г. Павлодар, ул. Промышленная 12",
    description: "Крупное христианское сельскохозяйственное предприятие Павлодара. Современные технологии и традиционные ценности.",
    cattleCount: 250,
    cattle: [
      {
        id: "3001",
        breed: "Гернзейская",
        age: 4,
        weight: 620,
        milkYield: 29,
        lastCalvingDate: "2024-12-10",
        pregnancyStatus: "Стельная, 4 месяца",
        health: {
          vaccination: ["Бруцеллез - 2024-01-10", "Ящур - 2024-01-25"],
          diseases: ["Нет в истории болезней"],
          vetInspectionDate: "2024-02-20"
        },
        genetics: {
          father: "Бык Феникс, линия Рефлекшн Соверинг",
          mother: "Корова Надежда, удой матери 10,200 кг за 305 дней",
          pedigree: true
        },
        productivity: {
          milkFat: 4.3,
          milkProtein: 3.5,
          averageYield: 9500,
          lactationNumber: 2
        },
        price: 830000,
        imageUrl: crownImage
      },
      {
        id: "3002",
        breed: "Джерсейская",
        age: 5,
        weight: 680,
        milkYield: 27,
        lastCalvingDate: "2024-11-15",
        pregnancyStatus: "Нестельная",
        health: {
          vaccination: ["Бруцеллез - 2024-01-10", "Ящур - 2024-01-25"],
          diseases: ["Мастит (2022) - вылечен"],
          vetInspectionDate: "2024-02-20"
        },
        genetics: {
          father: "Бык Атлас, линия Флекгвих",
          mother: "Корова Вера, удой матери 9,500 кг за 305 дней",
          pedigree: true
        },
        productivity: {
          milkFat: 4.1,
          milkProtein: 3.6,
          averageYield: 8800,
          lactationNumber: 3
        },
        price: 790000,
        imageUrl: crownImage
      }
    ]
  },
  {
    id: "4",
    name: "Фермерское хозяйство \"Вера\"",
    type: "Крестьянское хозяйство",
    location: "г. Павлодар, ул. Луговая 78",
    description: "Небольшое семейное хозяйство, основанное на христианских принципах. Специализируемся на производстве экологически чистой продукции.",
    cattleCount: 120,
    cattle: [
      {
        id: "4001",
        breed: "Швицкая",
        age: 3,
        weight: 580,
        milkYield: 28,
        lastCalvingDate: "2025-01-05",
        pregnancyStatus: "Нестельная",
        health: {
          vaccination: ["Бруцеллез - 2024-01-15", "Ящур - 2024-02-01"],
          diseases: ["Нет в истории болезней"],
          vetInspectionDate: "2024-03-01"
        },
        genetics: {
          father: "Бык Титан, линия Дон Жуан",
          mother: "Корова Надежда, удой матери 9,800 кг за 305 дней",
          pedigree: true
        },
        productivity: {
          milkFat: 4.4,
          milkProtein: 3.5,
          averageYield: 9000,
          lactationNumber: 1
        },
        price: 810000,
        imageUrl: crownImage
      }
    ]
  },
  {
    id: "5",
    name: "КХ \"Добрый путь\"",
    type: "Крестьянское хозяйство",
    location: "г. Павлодар, ул. Полевая 23",
    description: "Христианское хозяйство, специализирующееся на молочном животноводстве. Используем современные методы содержания скота.",
    cattleCount: 160,
    cattle: [
      {
        id: "5001",
        breed: "Айрширская",
        age: 4,
        weight: 600,
        milkYield: 30,
        lastCalvingDate: "2024-12-05",
        pregnancyStatus: "Стельная, 5 месяцев",
        health: {
          vaccination: ["Бруцеллез - 2024-01-10", "Ящур - 2024-01-25"],
          diseases: ["Нет в истории болезней"],
          vetInspectionDate: "2024-02-20"
        },
        genetics: {
          father: "Бык Феникс, линия Рефлекшн Соверинг",
          mother: "Корова Марта, удой матери 10,500 кг за 305 дней",
          pedigree: true
        },
        productivity: {
          milkFat: 4.2,
          milkProtein: 3.4,
          averageYield: 9600,
          lactationNumber: 2
        },
        price: 840000,
        imageUrl: crownImage
      }
    ]
  },
  {
    id: "6",
    name: "ТОО \"Христианское подворье\"",
    type: "Товарищество с ограниченной ответственностью",
    location: "г. Павлодар, ул. Степная 56",
    description: "Современное хозяйство с христианскими традициями. Занимаемся разведением племенного скота.",
    cattleCount: 200,
    cattle: [
      {
        id: "6001",
        breed: "Голштинская",
        age: 5,
        weight: 680,
        milkYield: 29,
        lastCalvingDate: "2024-11-10",
        pregnancyStatus: "Нестельная",
        health: {
          vaccination: ["Бруцеллез - 2024-01-10", "Ящур - 2024-01-25"],
          diseases: ["Мастит (2022) - вылечен"],
          vetInspectionDate: "2024-02-20"
        },
        genetics: {
          father: "Бык Атлас, линия Флекгвих",
          mother: "Корова Вера, удой матери 9,500 кг за 305 дней",
          pedigree: true
        },
        productivity: {
          milkFat: 4.1,
          milkProtein: 3.6,
          averageYield: 9200,
          lactationNumber: 3
        },
        price: 800000,
        imageUrl: crownImage
      }
    ]
  },
  {
    id: "7",
    name: "Агрофирма \"Милосердие\"",
    type: "Товарищество с ограниченной ответственностью",
    location: "г. Павлодар, ул. Садовая 34",
    description: "Христианское предприятие полного цикла. От выращивания кормов до производства молочной продукции.",
    cattleCount: 220,
    cattle: [
      {
        id: "7001",
        breed: "Джерсейская",
        age: 4,
        weight: 620,
        milkYield: 28,
        lastCalvingDate: "2024-12-05",
        pregnancyStatus: "Стельная, 4 месяца",
        health: {
          vaccination: ["Бруцеллез - 2024-01-15", "Ящур - 2024-02-01"],
          diseases: ["Нет в истории болезней"],
          vetInspectionDate: "2024-03-01"
        },
        genetics: {
          father: "Бык Титан, линия Дон Жуан",
          mother: "Корова Надежда, удой матери 9,800 кг за 305 дней",
          pedigree: true
        },
        productivity: {
          milkFat: 4.4,
          milkProtein: 3.5,
          averageYield: 9000,
          lactationNumber: 2
        },
        price: 820000,
        imageUrl: crownImage
      }
    ]
  },
  {
    id: "8",
    name: "КХ \"Благословение\"",
    type: "Крестьянское хозяйство",
    location: "г. Павлодар, ул. Зеленая 89",
    description: "Семейное христианское хозяйство с многолетними традициями. Специализируемся на производстве органической продукции.",
    cattleCount: 140,
    cattle: [
      {
        id: "8001",
        breed: "Швицкая",
        age: 3,
        weight: 580,
        milkYield: 27,
        lastCalvingDate: "2025-01-05",
        pregnancyStatus: "Нестельная",
        health: {
          vaccination: ["Бруцеллез - 2024-01-10", "Ящур - 2024-01-25"],
          diseases: ["Нет в истории болезней"],
          vetInspectionDate: "2024-02-20"
        },
        genetics: {
          father: "Бык Феникс, линия Рефлекшн Соверинг",
          mother: "Корова Марта, удой матери 10,500 кг за 305 дней",
          pedigree: true
        },
        productivity: {
          milkFat: 4.2,
          milkProtein: 3.4,
          averageYield: 9200,
          lactationNumber: 1
        },
        price: 810000,
        imageUrl: crownImage
      }
    ]
  },
  {
    id: "9",
    name: "Ферма \"Добрый пастырь\"",
    type: "Крестьянское хозяйство",
    location: "г. Павлодар, ул. Речная 67",
    description: "Христианское хозяйство, специализирующееся на разведении молочных пород КРС. Применяем экологические методы ведения хозяйства.",
    cattleCount: 170,
    cattle: [
      {
        id: "9001",
        breed: "Айрширская",
        age: 4,
        weight: 600,
        milkYield: 30,
        lastCalvingDate: "2024-12-05",
        pregnancyStatus: "Стельная, 5 месяцев",
        health: {
          vaccination: ["Бруцеллез - 2024-01-15", "Ящур - 2024-02-01"],
          diseases: ["Нет в истории болезней"],
          vetInspectionDate: "2024-03-01"
        },
        genetics: {
          father: "Бык Титан, линия Дон Жуан",
          mother: "Корова Надежда, удой матери 9,800 кг за 305 дней",
          pedigree: true
        },
        productivity: {
          milkFat: 4.4,
          milkProtein: 3.5,
          averageYield: 9600,
          lactationNumber: 2
        },
        price: 840000,
        imageUrl: crownImage
      }
    ]
  },
  {
    id: "10",
    name: "ТОО \"Святая земля\"",
    type: "Товарищество с ограниченной ответственностью",
    location: "г. Павлодар, ул. Набережная 90",
    description: "Крупное христианское сельскохозяйственное предприятие. Сочетаем современные технологии с традиционными методами хозяйствования.",
    cattleCount: 230,
    cattle: [
      {
        id: "10001",
        breed: "Голштинская",
        age: 5,
        weight: 680,
        milkYield: 29,
        lastCalvingDate: "2024-11-10",
        pregnancyStatus: "Нестельная",
        health: {
          vaccination: ["Бруцеллез - 2024-01-10", "Ящур - 2024-01-25"],
          diseases: ["Мастит (2022) - вылечен"],
          vetInspectionDate: "2024-02-20"
        },
        genetics: {
          father: "Бык Атлас, линия Флекгвих",
          mother: "Корова Вера, удой матери 9,500 кг за 305 дней",
          pedigree: true
        },
        productivity: {
          milkFat: 4.1,
          milkProtein: 3.6,
          averageYield: 9400,
          lactationNumber: 3
        },
        price: 830000,
        imageUrl: crownImage
      }
    ]
  }
];
