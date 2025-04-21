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
    name: "ТОО \"Agro Trade PV\"",
    type: "Товарищество с ограниченной ответственностью",
    location: "Павлодарская область, г. Павлодар",
    description: "Одна из крупнейших молочно-товарных ферм Павлодарской области. Использует современное технологическое оборудование.",
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
    name: "ТОО \"Галицкое\"",
    type: "Товарищество с ограниченной ответственностью",
    location: "Павлодарская область, Павлодарский район",
    description: "Действующая молочно-товарная ферма, расширяющая производство при поддержке государственного финансирования.",
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
    name: "ТОО \"Уштерек и К\"",
    type: "Товарищество с ограниченной ответственностью",
    location: "Павлодарская область",
    description: "Действующая молочно-товарная ферма, входящая в число предприятий, получивших государственную поддержку на расширение производства.",
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
    name: "КХ \"Пахарь\"",
    type: "Крестьянское хозяйство",
    location: "Павлодарская область",
    description: "Действующее крестьянское хозяйство, получившее государственную поддержку на расширение молочного производства.",
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
        price: 800000,
        imageUrl: crownImage
      }
    ]
  }
];
