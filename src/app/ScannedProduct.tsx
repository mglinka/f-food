import React, {useState} from "react";
import ENScoreIndicator from "@/components/indexes/ENScoreIndicator";
import ScoreIndicator from "@/components/indexes/ScoreIndicator";
import Tile from "@/components/Tile";
import Message from "@/components/Message";
import {Product} from "@/components/Product";

interface ScannedProductProps {
  scanned: string;
}


const products: Product[] = [{
    UUID: "ef5a151e-75e8-4b3b-9dd1-1cb0af9b55c0",
    productName: "Mleko Polskie spożywcze pasteryzowane 3,2% MLEKOVITA",
    productDescription: "Mleko spożywcze pasteryzowane w wysokiej temperaturze. Zawartość tłuszczu 3,2%",
    productQuantity: 1,
    unit: "l",
    packageType: "PET",
    country: "Polska",
    ingredients: [
      "mleko spoż. pasteryzowane"
    ],
    additions: [],
    flavour: [],
    nutritionalIndexes: [
      {
        legend: "Źródło białka",
        indexValue: 1
      },
      {
        legend: "Źródło potasu",
        indexValue: 1
      },
      {
        legend: "Wysoka zawartość wapnia",
        indexValue: 2
      },
      {
        legend: "Wysoka zawartość witaminy B12",
        indexValue: 2
      },
      {
        legend: "Wysoka zawartość fosforu",
        indexValue: 2
      }
    ],
    productIndexes: [
      {
        indexName: "P",
        indexValue: 1
      },
      {
        indexName: "T",
        indexValue: 8
      },
      {
        indexName: "S",
        indexValue: 8
      },
      {
        indexName: "M",
        indexValue: 5
      },
      {
        indexName: "V",
        indexValue: 2
      }
    ],
    storage: "+2C do +8C ",
    durability: "Brak informacji",
    instructionsAfterOpening: "przechowywać w temperaturze +2C do +8C nie dłużej niż 24 godziny",
    preparation: "Brak informacji",
    allergens: [
      "mleko"
    ],
    image: "https://mlekovita.com.pl/uploads/products/13/9080mleko-polskie-spozywcze-pet-3-2-w03-2021-01-20-0005-copy-jpg.jpg",
    portion: {
      unit: "ml",
      portionQuantity: 250
    },
    ratings: [
      {
        groupName: "Zastosowane procesy technologiczne",
        name: "pasteryzowanie"
      },
      {
        groupName: "Alergeny (może zawierać)",
        name: "mleko i produkty pochodne"
      }
    ],
    nutritionalValues: [
      {
        nutritionalValueName: "Witamina B12",
        nutritionalValueGroup: "Witaminy",
        quantity: 0.4,
        unit: "mcg"
      },
      {
        nutritionalValueName: "Kwasy nasycone",
        nutritionalValueGroup: "Tłuszcz",
        quantity: 2.0,
        unit: "g"
      },
      {
        nutritionalValueName: "Białko",
        nutritionalValueGroup: "Białko",
        quantity: 3.2,
        unit: "g"
      },
      {
        nutritionalValueName: "Total",
        nutritionalValueGroup: "Węglowodany",
        quantity: 4.7,
        unit: "g"
      },
      {
        nutritionalValueName: "Cukry",
        nutritionalValueGroup: "Węglowodany",
        quantity: 4.7,
        unit: "g"
      },
      {
        nutritionalValueName: "Sól",
        nutritionalValueGroup: "Sól",
        quantity: 0.1,
        unit: "g"
      },
      {
        nutritionalValueName: "Wapń",
        nutritionalValueGroup: "Minerały",
        quantity: 105.0,
        unit: "mg"
      },
      {
        nutritionalValueName: "Fosfor",
        nutritionalValueGroup: "Minerały",
        quantity: 90.0,
        unit: "mg"
      },
      {
        nutritionalValueName: "Wartość Energetyczna",
        nutritionalValueGroup: "Wartość Energetyczna",
        quantity: 60.0,
        unit: "kcal"
      },
      {
        nutritionalValueName: "Potas",
        nutritionalValueGroup: "Minerały",
        quantity: 155.0,
        unit: "mg"
      },
      {
        nutritionalValueName: "Total",
        nutritionalValueGroup: "Tłuszcz",
        quantity: 3.2,
        unit: "g"
      }
    ],
    EAN: "5900512850016"
},
  {
      UUID: "db81e474-9deb-4647-973f-901c91631b8e",
      productName: "Mleko Polskie spożywcze pasteryzowane 2% MLEKOVITA",
      productDescription: "mleko spożywcze pasteryzowane 2% ",
      productQuantity: 1,
      unit: "l",
      packageType: "butelka PET",
      country: "Polska",
      ingredients: [
        "mleko pasteryzowane"
      ],
      additions: [],
      flavour: [],
      nutritionalIndexes: [
        {
          legend: "Źródło potasu",
          indexValue: 1
        },
        {
          legend: "Źródło fosforu",
          indexValue: 1
        },
        {
          legend: "Wysoka zawartość białka",
          indexValue: 3
        },
        {
          legend: "Źródło wapnia",
          indexValue: 1
        },
        {
          legend: "Wysoka zawartość witaminy B12",
          indexValue: 2
        }
      ],
      productIndexes: [
        {
          indexName: "P",
          indexValue: 3
        },
        {
          indexName: "T",
          indexValue: 8
        },
        {
          indexName: "S",
          indexValue: 8
        },
        {
          indexName: "M",
          indexValue: 3
        },
        {
          indexName: "V",
          indexValue: 2
        }
      ],
      storage: "w temp +2C do +8C",
      durability: "27 dni",
      instructionsAfterOpening: "przechowywać w temp. +2C do +8C nie dłużej niż 24 godziny ",
      preparation: "Brak informacji",
      allergens: [
        "mleko"
      ],
      image: "https://mlekovita.com.pl/uploads/products/14/3177mleko-polskie-spozywcze-pet-2-0-w03-2021-01-20-0005-copy-jpg.jpg",
      portion: {
        unit: "ml",
        portionQuantity: 100
      },
      ratings: [
        {
          groupName: "Zastosowane procesy technologiczne",
          name: "pasteryzowanie"
        },
        {
          groupName: "Zastosowane procesy technologiczne",
          name: "produkt naturalny"
        },
        {
          groupName: "Alergeny (może zawierać)",
          name: "mleko i produkty pochodne"
        }
      ],
      nutritionalValues: [
        {
          nutritionalValueName: "Total",
          nutritionalValueGroup: "Tłuszcz",
          quantity: 2.0,
          unit: "g"
        },
        {
          nutritionalValueName: "Sól",
          nutritionalValueGroup: "Sól",
          quantity: 0.1,
          unit: "g"
        },
        {
          nutritionalValueName: "Total",
          nutritionalValueGroup: "Węglowodany",
          quantity: 4.7,
          unit: "g"
        },
        {
          nutritionalValueName: "Cukry",
          nutritionalValueGroup: "Węglowodany",
          quantity: 4.7,
          unit: "g"
        },
        {
          nutritionalValueName: "Witamina B12",
          nutritionalValueGroup: "Witaminy",
          quantity: 0.4,
          unit: "mcg"
        },
        {
          nutritionalValueName: "Wapń",
          nutritionalValueGroup: "Minerały",
          quantity: 105.0,
          unit: "mg"
        },
        {
          nutritionalValueName: "Potas",
          nutritionalValueGroup: "Minerały",
          quantity: 155.0,
          unit: "mg"
        },
        {
          nutritionalValueName: "Fosfor",
          nutritionalValueGroup: "Minerały",
          quantity: 90.0,
          unit: "mg"
        },
        {
          nutritionalValueName: "Wartość Energetyczna",
          nutritionalValueGroup: "Wartość Energetyczna",
          quantity: 50.0,
          unit: "kcal"
        },
        {
          nutritionalValueName: "Kwasy nasycone",
          nutritionalValueGroup: "Tłuszcz",
          quantity: 1.3,
          unit: "g"
        },
        {
          nutritionalValueName: "Białko",
          nutritionalValueGroup: "Białko",
          quantity: 3.2,
          unit: "g"
        }
      ],
      EAN: "5900512850023"
  },
   {
      UUID: "8c02f700-36f0-4f89-be80-209968c41757",
      productName: "Chleb kanapkowy ze skrzypem polnym bezglutenowy MONCANA",
      productDescription: "chleb kanapkowy ze skrzypem polnym",
      productQuantity: 600,
      unit: "g",
      packageType: "torebka",
      country: "Polska",
      ingredients: [
        "mąka jaglana",
        "ekstrakt ze skrzypu polnego",
        "sól morska",
        "suche drożdże",
        "płatki ziemniaczane",
        "łuska babki jajowatej",
        "mąka ryżowa"
      ],
      additions: [],
      flavour: [],
      nutritionalIndexes: [

      ],
      productIndexes: [],
      storage: "w suchym i chłodnym miejscu",
      durability: "Brak informacji",
      instructionsAfterOpening: "Brak informacji",
      preparation: "Brak informacji",
      allergens: [],
      image: "https://moncana.pl/hpeciai/7d744d5eb4ab1570cf7f324b1ed372f4/pol_pl_Maka-na-Chleb-Bezglutenowy-Kanapkowy-ze-Skrzypem-Polnym-BIO-600g-292_1.webp",
      portion: {
        unit: "g",
        portionQuantity: 100
      },
      ratings: [
        {
          groupName: "Parametry bez składników",
          name: "Bez glutenu"
        }
      ],
      nutritionalValues: [
        {
          nutritionalValueName: "Wartość Energetyczna",
          nutritionalValueGroup: "Wartość Energetyczna",
          quantity: 328.0,
          unit: "kcal"
        },
        {
          nutritionalValueName: "Total",
          nutritionalValueGroup: "Tłuszcz",
          quantity: 1.7,
          unit: "g"
        },
        {
          nutritionalValueName: "Kwasy nasycone",
          nutritionalValueGroup: "Tłuszcz",
          quantity: 0.4,
          unit: "g"
        },
        {
          nutritionalValueName: "Błonnik",
          nutritionalValueGroup: "Błonnik",
          quantity: 2.4,
          unit: "g"
        },
        {
          nutritionalValueName: "Total",
          nutritionalValueGroup: "Węglowodany",
          quantity: 65.0,
          unit: "g"
        },
        {
          nutritionalValueName: "Cukry",
          nutritionalValueGroup: "Węglowodany",
          quantity: 0.7,
          unit: "g"
        },
        {
          nutritionalValueName: "Białko",
          nutritionalValueGroup: "Białko",
          quantity: 8.0,
          unit: "g"
        },
        {
          nutritionalValueName: "Sól",
          nutritionalValueGroup: "Sól",
          quantity: 2.6,
          unit: "g"
        }
      ],
      EAN: "5906792158033"

  },
  {
    UUID: "36fa7e1c-ecf6-453f-bb35-d7446c9a8457",
    productName: "Kefir rawicki OSM RAWICZ",
    productDescription: "kefir zaw. tłuszczu 1.5%. Siła tradycji - od 1887r..",
    productQuantity: 400,
    unit: "g",
    packageType: "butelka PP",
    country: "Polska",
    ingredients: [
      "mleko pasteryzowane",
      "żywe kultury bakterii",
      "białka mleka"
    ],
    additions: [],
    flavour: [],
    nutritionalIndexes: [
      {
        legend: "Źródło witaminy B12",
        indexValue: 1
      },
      {
        legend: "Zawiera żywe kultury jogurtowe",
        indexValue: 1
      },
      {
        legend: "Źródło wapnia",
        indexValue: 1
      },
      {
        legend: "Wysoka zawartość białka",
        indexValue: 2
      }
    ],
    productIndexes: [
      {
        indexName: "T",
        indexValue: 4
      },
      {
        indexName: "S",
        indexValue: 5
      },
      {
        indexName: "P",
        indexValue: 2
      },
      {
        indexName: "M",
        indexValue: 1
      },
      {
        indexName: "V",
        indexValue: 1
      }
    ],
    storage: "+2C do +6C",
    durability: "Brak informacji",
    instructionsAfterOpening: "24 h",
    preparation: "przed otwarciem wstrząsnąć",
    allergens: [],
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQQKG8EqLY-xygtX7DLTI6U9e7PRaUgk28IGg&s=",
    portion: {
      unit: "g",
      portionQuantity: 100
    },
    ratings: [
      {
        groupName: "Zastosowane procesy technologiczne",
        name: "produkt naturalny"
      },
      {
        groupName: "Bez dodatków do żywności",
        name: "bez konserwantów"
      }
    ],
    nutritionalValues: [
      {
        nutritionalValueName: "Witamina B12",
        nutritionalValueGroup: "Witaminy",
        quantity: 0.45,
        unit: "mcg"
      },
      {
        nutritionalValueName: "Wapń",
        nutritionalValueGroup: "Minerały",
        quantity: 120.0,
        unit: "mg"
      },
      {
        nutritionalValueName: "Wartość Energetyczna",
        nutritionalValueGroup: "Wartość Energetyczna",
        quantity: 45.0,
        unit: "kcal"
      },
      {
        nutritionalValueName: "Białko",
        nutritionalValueGroup: "Białko",
        quantity: 3.2,
        unit: "g"
      },
      {
        nutritionalValueName: "Total",
        nutritionalValueGroup: "Tłuszcz",
        quantity: 1.5,
        unit: "g"
      },
      {
        nutritionalValueName: "Kwasy nasycone",
        nutritionalValueGroup: "Tłuszcz",
        quantity: 1.0,
        unit: "g"
      },
      {
        nutritionalValueName: "Total",
        nutritionalValueGroup: "Węglowodany",
        quantity: 4.6,
        unit: "g"
      },
      {
        nutritionalValueName: "Cukry",
        nutritionalValueGroup: "Węglowodany",
        quantity: 3.4,
        unit: "g"
      }
    ],
    EAN: "5904646000408"
  },
  {
    UUID: "2eccba9e-5ae9-46f0-9760-58fd1cbf2b16",
    productName: "Banan liofilizowany ELENA",
    productDescription: "banan liofilizowany chipsy",
    productQuantity: 30,
    unit: "g",
    packageType: "torebka",
    country: "Polska",
    ingredients: [
      "banan liofilizowany 100%"
    ],
    additions: [],
    flavour: [],
    nutritionalIndexes: [
      {
        legend: "Wysoka zawartość błonnika pokarmowego",
        indexValue: 2
      }
    ],
    productIndexes: [
      {
        indexName: "F",
        indexValue: 2
      },
      {
        indexName: "T",
        indexValue: 2
      },
      {
        indexName: "S",
        indexValue: 2
      }
    ],
    storage: "w suchym miejscu w temp. pokojowej, szczelnie zamkniętym opakowaniu",
    durability: "Brak informacji",
    instructionsAfterOpening: "Brak informacji",
    preparation: "Brak informacji",
    allergens: [],
    image: "https://kolagenum.com/343-large_default/Liofilizowany-banan-p180.jpg",
    portion: {
      unit: "g",
      portionQuantity: 30
    },
    ratings: [
      {
        groupName: "Parametry bez składników",
        name: "Bez glutenu"
      },
      {
        groupName: "Zastosowane procesy technologiczne",
        name: "liofilizowanie"
      },
      {
        groupName: "Posiadane Certyfikaty",
        name: "Bez glutenu, Znak Przekreślonego Kłosa (ESL)"
      }
    ],
    nutritionalValues: [
      {
        nutritionalValueName: "Wartość Energetyczna",
        nutritionalValueGroup: "Wartość Energetyczna",
        quantity: 363.33,
        unit: "kcal"
      },
      {
        nutritionalValueName: "Total",
        nutritionalValueGroup: "Tłuszcz",
        quantity: 0.67,
        unit: "g"
      },
      {
        nutritionalValueName: "Błonnik",
        nutritionalValueGroup: "Błonnik",
        quantity: 7.67,
        unit: "g"
      },
      {
        nutritionalValueName: "Total",
        nutritionalValueGroup: "Węglowodany",
        quantity: 82.0,
        unit: "g"
      },
      {
        nutritionalValueName: "Cukry",
        nutritionalValueGroup: "Węglowodany",
        quantity: 60.67,
        unit: "g"
      },
      {
        nutritionalValueName: "Białko",
        nutritionalValueGroup: "Białko",
        quantity: 4.67,
        unit: "g"
      }
    ],
    EAN: "5907616713148"
<<<<<<< HEAD
  },
  {
    UUID: "c1f53dd2-5ee5-4a00-9c75-5014ce1c822b",
    productName: "Jogurt wysokobiałkowy SUPER BODY ACTIVE naturalny MLEKOVITA",
    productDescription: "naturalny jogurt",
    productQuantity: 200,
    unit: "g",
    packageType: "kubek PP",
    country: "Polska",
    ingredients: [
        "białka mleka",
        "mleko",
        "kultury bakterii jogurtowych"
    ],
    additions: [],
    flavour: [],
    nutritionalIndexes: [
        {
            legend: "Wysoka zawartość białka",
            indexValue: 3
        },
        {
            legend: "Źródło wapnia",
            indexValue: 1
        }
    ],
    productIndexes: [
        {
            indexName: "T",
            indexValue: 4
        },
        {
            indexName: "S",
            indexValue: 4
        },
        {
            indexName: "P",
            indexValue: 3
        },
        {
            indexName: "M",
            indexValue: 1
        }
    ],
    storage: "w warunkach chłodniczych",
    durability: "40 dni",
    instructionsAfterOpening: "Brak informacji",
    preparation: "Brak informacji",
    allergens: [
        "mleko"
    ],
    image: "https://mlekovitka.pl/3673-large_default/super-body-active-jogurt-wysokobialkowy-naturalny-200-g.jpg",
    portion: {
        unit: "g",
        portionQuantity: 100
    },
    ratings: [
        {
            groupName: "Zastosowane procesy technologiczne",
            name: "pasteryzowanie"
        },
        {
            groupName: "Alegreny (może zawierać)",
            name: "mleko i produkty pochodne"
        },
        {
            groupName: "Zastosowane procesy technologiczne",
            name: "fermentacja"
        }
    ],
    nutritionalValues: [
        {
            nutritionalValueName: "Wartość Energetyczna",
            nutritionalValueGroup: "Wartość Energetyczna",
            quantity: 69.0,
            unit: "kcal"
        },
        {
            nutritionalValueName: "Total",
            nutritionalValueGroup: "Tłuszcz",
            quantity: 3.0,
            unit: "g"
        },
        {
            nutritionalValueName: "Kwasy nasycone",
            nutritionalValueGroup: "Tłuszcz",
            quantity: 2.0,
            unit: "g"
        },
        {
            nutritionalValueName: "Total",
            nutritionalValueGroup: "Węglowodany",
            quantity: 5.0,
            unit: "g"
        },
        {
            nutritionalValueName: "Cukry",
            nutritionalValueGroup: "Węglowodany",
            quantity: 5.0,
            unit: "g"
        },
        {
            nutritionalValueName: "Białko",
            nutritionalValueGroup: "Białko",
            quantity: 5.5,
            unit: "g"
        },
        {
            nutritionalValueName: "Sól",
            nutritionalValueGroup: "Sól",
            quantity: 0.12,
            unit: "g"
        },
        {
            nutritionalValueName: "Wapń",
            nutritionalValueGroup: "Minerały",
            quantity: 150.0,
            unit: "mg"
        }
    ],
    EAN: "5900512901343"
},
{
  UUID: "5376bd81-3acd-4966-b3fd-94f65f153d8b",
  productName: "Koncentrat białek serwatkowych SUPER BODY ACTIVE WPC 80 bananowy MLEKOVITA",
  productDescription: "Koncentrat białek serwatkowych instant bananowy",
  productQuantity: 700,
  unit: "g",
  packageType: "torba folia",
  country: "Polska",
  ingredients: [
      "lecytyna",
      "koncentrat białek serwatkowych (z mleka krowiego)",
      "sól",
      "karoteny"
  ],
  additions: [],
  flavour: [
      "naturalny"
  ],
  nutritionalIndexes: [
      {
          legend: "Wysoka zawartość wapnia",
          indexValue: 3
      },
      {
          legend: "Wysoka zawartość białka",
          indexValue: 3
      }
  ],
  productIndexes: [
      {
          indexName: "T",
          indexValue: 6
      },
      {
          indexName: "S",
          indexValue: 6
      },
      {
          indexName: "P",
          indexValue: 3
      },
      {
          indexName: "M",
          indexValue: 3
      }
  ],
  storage: "Brak informacji",
  durability: "24 miesiące",
  instructionsAfterOpening: "Brak informacji",
  preparation: "Brak informacji",
  allergens: [
      "mleko"
  ],
  image: "https://mlekovitka.pl/1959-large_default/super-body-active-wpc-80-koncentrat-bialek-serwatkowych-instant-bananowy-700-g.jpg",
  portion: {
      unit: "g",
      portionQuantity: 100
  },
  ratings: [
      {
          groupName: "Zastosowane procesy technologiczne",
          name: "pasteryzowanie"
      },
      {
          groupName: "Zastosowane procesy technologiczne",
          name: "suszenie"
      },
      {
          groupName: "Alegreny (może zawierać)",
          name: "mleko i produkty pochodne"
      },
      {
          groupName: "Parametry bez składników",
          name: "Bez glutenu"
      },
      {
          groupName: "Parametry bez składników",
          name: "Bez dodatku cukru"
      }
  ],
  nutritionalValues: [
      {
          nutritionalValueName: "Sól",
          nutritionalValueGroup: "Sól",
          quantity: 0.2,
          unit: "g"
      },
      {
          nutritionalValueName: "Wartość Energetyczna",
          nutritionalValueGroup: "Wartość Energetyczna",
          quantity: 398.0,
          unit: "kcal"
      },
      {
          nutritionalValueName: "Total",
          nutritionalValueGroup: "Tłuszcz",
          quantity: 6.0,
          unit: "g"
      },
      {
          nutritionalValueName: "Kwasy nasycone",
          nutritionalValueGroup: "Tłuszcz",
          quantity: 3.9,
          unit: "g"
      },
      {
          nutritionalValueName: "Total",
          nutritionalValueGroup: "Węglowodany",
          quantity: 9.0,
          unit: "g"
      },
      {
          nutritionalValueName: "Cukry",
          nutritionalValueGroup: "Węglowodany",
          quantity: 9.0,
          unit: "g"
      },
      {
          nutritionalValueName: "Białko",
          nutritionalValueGroup: "Białko",
          quantity: 77.0,
          unit: "g"
      },
      {
          nutritionalValueName: "Histydyna",
          nutritionalValueGroup: "Aminokwasy egzogenne",
          quantity: 1.35,
          unit: "mg"
      },
      {
          nutritionalValueName: "Lizyna",
          nutritionalValueGroup: "Aminokwasy egzogenne",
          quantity: 7.4,
          unit: "mg"
      },
      {
          nutritionalValueName: "Tryptofan",
          nutritionalValueGroup: "Aminokwasy egzogenne",
          quantity: 1.3,
          unit: "mg"
      },
      {
          nutritionalValueName: "Metionina",
          nutritionalValueGroup: "Aminokwasy egzogenne",
          quantity: 1.68,
          unit: "mg"
      },
      {
          nutritionalValueName: "Treonina",
          nutritionalValueGroup: "Aminokwasy egzogenne",
          quantity: 5.58,
          unit: "mg"
      },
      {
          nutritionalValueName: "Izoleucyna ",
          nutritionalValueGroup: "Aminokwasy egzogenne",
          quantity: 4.65,
          unit: "mg"
      },
      {
          nutritionalValueName: "Fenyloalanina ",
          nutritionalValueGroup: "Aminokwasy egzogenne",
          quantity: 2.32,
          unit: "mg"
      },
      {
          nutritionalValueName: "Leucyna ",
          nutritionalValueGroup: "Aminokwasy egzogenne",
          quantity: 8.3,
          unit: "mg"
      },
      {
          nutritionalValueName: "Arginina",
          nutritionalValueGroup: "Aminokwasy egzogenne",
          quantity: 1.81,
          unit: "mg"
      },
      {
          nutritionalValueName: "Walina",
          nutritionalValueGroup: "Aminokwasy egzogenne",
          quantity: 4.29,
          unit: "mg"
      },
      {
          nutritionalValueName: "Wapń",
          nutritionalValueGroup: "Minerały",
          quantity: 410.0,
          unit: "mg"
      }
  ],
  EAN: "5900512984803"
},
{
      UUID: "fc869f01-87a4-4767-b0d9-978e4522077f",
      productName: "Koncentrat białek serwatkowych SUPER BODY ACTIVE WPC 80 czekoladowy MLEKOVITA",
      productDescription: "koncentrat białek serwatkowych instant czekoladowy",
      productQuantity: 700,
      unit: "g",
      packageType: "torba folia",
      country: "Polska",
      ingredients: [
          "lecytyna",
          "kakao",
          "koncentrat białek serwatkowych (z mleka krowiego)",
          "sól"
      ],
      additions: [],
      flavour: [
          "naturalny"
      ],
      nutritionalIndexes: [
          {
              legend: "wysoka zawartość wapnia",
              indexValue: 6
          },
          {
              legend: "wysoka zawartość białka",
              indexValue: 6
          }
      ],
      productIndexes: [
          {
              indexName: "P",
              indexValue: 3
          },
          {
              indexName: "T",
              indexValue: 8
          },
          {
              indexName: "S",
              indexValue: 8
          },
          {
              indexName: "M",
              indexValue: 3
          },
          {
              indexName: "V",
              indexValue: 2
          }
      ],
      storage: "Brak informacji",
      durability: "24 miesiące",
      instructionsAfterOpening: "Brak informacji",
      preparation: "Brak informacji",
      allergens: [
          "mleko"
      ],
      image: "https://mlekovitka.pl/1953-large_default/super-body-active-wpc-80-koncentrat-bialek-serwatkowych-instant-czekoladowy-700-g.jpg",
      portion: {
          unit: "g",
          portionQuantity: 100
      },
      ratings: [
          {
              groupName: "Zastosowane procesy technologiczne",
              name: "pasteryzowanie"
          },
          {
              groupName: "Parametry bez składników",
              name: "wysoka zawartość białka"
          },
          {
              groupName: "Zastosowane procesy technologiczne",
              name: "suszenie"
          },
          {
              groupName: "Alegreny (może zawierać)",
              name: "mleko i produkty pochodne"
          },
          {
              groupName: "Parametry bez składników",
              name: "wysoka zawartość wapnia"
          },
          {
              groupName: "Parametry bez składników",
              name: "Bez dodatku cukru"
          }
      ],
      nutritionalValues: [
          {
              nutritionalValueName: "Total",
              nutritionalValueGroup: "Tłuszcz",
              quantity: 7.0,
              unit: "g"
          },
          {
              nutritionalValueName: "Kwasy nasycone",
              nutritionalValueGroup: "Tłuszcz",
              quantity: 4.6,
              unit: "g"
          },
          {
              nutritionalValueName: "Sól",
              nutritionalValueGroup: "Sól",
              quantity: 0.5,
              unit: "g"
          },
          {
              nutritionalValueName: "Cukry",
              nutritionalValueGroup: "Węglowodany",
              quantity: 11.0,
              unit: "g"
          },
          {
              nutritionalValueName: "Fenyloalanina ",
              nutritionalValueGroup: "Aminokwasy egzogenne",
              quantity: 2.32,
              unit: "mg"
          },
          {
              nutritionalValueName: "Histydyna",
              nutritionalValueGroup: "Aminokwasy egzogenne",
              quantity: 1.35,
              unit: "mg"
          },
          {
              nutritionalValueName: "Lizyna",
              nutritionalValueGroup: "Aminokwasy egzogenne",
              quantity: 7.4,
              unit: "mg"
          },
          {
              nutritionalValueName: "Izoleucyna ",
              nutritionalValueGroup: "Aminokwasy egzogenne",
              quantity: 4.65,
              unit: "mg"
          },
          {
              nutritionalValueName: "Metionina",
              nutritionalValueGroup: "Aminokwasy egzogenne",
              quantity: 1.68,
              unit: "mg"
          },
          {
              nutritionalValueName: "Treonina",
              nutritionalValueGroup: "Aminokwasy egzogenne",
              quantity: 5.58,
              unit: "mg"
          },
          {
              nutritionalValueName: "Walina",
              nutritionalValueGroup: "Aminokwasy egzogenne",
              quantity: 4.29,
              unit: "mg"
          },
          {
              nutritionalValueName: "Total",
              nutritionalValueGroup: "Węglowodany",
              quantity: 11.0,
              unit: "g"
          },
          {
              nutritionalValueName: "Arginina",
              nutritionalValueGroup: "Aminokwasy egzogenne",
              quantity: 1.81,
              unit: "mg"
          },
          {
              nutritionalValueName: "Wapń",
              nutritionalValueGroup: "Minerały",
              quantity: 410.0,
              unit: "mg"
          },
          {
              nutritionalValueName: "Białko",
              nutritionalValueGroup: "Białko",
              quantity: 76.0,
              unit: "g"
          },
          {
              nutritionalValueName: "Wartość Energetyczna",
              nutritionalValueGroup: "Wartość Energetyczna",
              quantity: 411.0,
              unit: "kcal"
          },
          {
              nutritionalValueName: "Leucyna ",
              nutritionalValueGroup: "Aminokwasy egzogenne",
              quantity: 8.3,
              unit: "mg"
          },
          {
              nutritionalValueName: "Tryptofan",
              nutritionalValueGroup: "Aminokwasy egzogenne",
              quantity: 1.3,
              unit: "mg"
          }
      ],
      EAN: "5900512984773"
  },
  {
        UUID: "fddd91e1-6b8e-4792-95f1-dad1269a06de",
        productName: "Koncentrat białek serwatkowych SUPER BODY ACTIVE WPC 80 truskawkowy MLEKOVITA",
        productDescription: "koncentrat białek serwatkowych instant truskawkowy",
        productQuantity: 700,
        unit: "g",
        packageType: "torba folia",
        country: "Polska",
        ingredients: [
            "",
            "lecytyna",
            "koncentrat białek serwatkowych (z mleka krowiego)",
            "sól"
        ],
        additions: [],
        flavour: [
            "naturalny"
        ],
        nutritionalIndexes: [
            {
                legend: "Wysoka zawartość wapnia",
                indexValue: 3
            },
            {
                legend: "Wysoka zawartość białka",
                indexValue: 3
            }
        ],
        productIndexes: [
            {
                indexName: "T",
                indexValue: 6
            },
            {
                indexName: "S",
                indexValue: 6
            },
            {
                indexName: "P",
                indexValue: 3
            },
            {
                indexName: "M",
                indexValue: 3
            }
        ],
        storage: "Brak informacji",
        durability: "24 miesiące",
        instructionsAfterOpening: "Brak informacji",
        preparation: "Brak informacji",
        allergens: [
            "mleko"
        ],
        image: "https://mlekovita.com.pl/uploads/products/657/9849wpc-80-truskawkowy-700-g-jpg.jpg",
        portion: {
            unit: "g",
            portionQuantity: 100
        },
        ratings: [
            {
                groupName: "Zastosowane procesy technologiczne",
                name: "pasteryzowanie"
            },
            {
                groupName: "Zastosowane procesy technologiczne",
                name: "suszenie"
            },
            {
                groupName: "Alegreny (może zawierać)",
                name: "mleko i produkty pochodne"
            },
            {
                groupName: "Parametry bez składników",
                name: "Bez glutenu"
            },
            {
                groupName: "Parametry bez składników",
                name: "Bez dodatku cukru"
            }
        ],
        nutritionalValues: [
            {
                nutritionalValueName: "Wapń",
                nutritionalValueGroup: "Minerały",
                quantity: 410.0,
                unit: "mg"
            },
            {
                nutritionalValueName: "Wartość Energetyczna",
                nutritionalValueGroup: "Wartość Energetyczna",
                quantity: 398.0,
                unit: "kcal"
            },
            {
                nutritionalValueName: "Total",
                nutritionalValueGroup: "Tłuszcz",
                quantity: 6.0,
                unit: "g"
            },
            {
                nutritionalValueName: "Kwasy nasycone",
                nutritionalValueGroup: "Tłuszcz",
                quantity: 3.9,
                unit: "g"
            },
            {
                nutritionalValueName: "Total",
                nutritionalValueGroup: "Węglowodany",
                quantity: 9.0,
                unit: "g"
            },
            {
                nutritionalValueName: "Cukry",
                nutritionalValueGroup: "Węglowodany",
                quantity: 9.0,
                unit: "g"
            },
            {
                nutritionalValueName: "Białko",
                nutritionalValueGroup: "Białko",
                quantity: 77.0,
                unit: "g"
            },
            {
                nutritionalValueName: "Sól",
                nutritionalValueGroup: "Sól",
                quantity: 0.2,
                unit: "g"
            },
            {
                nutritionalValueName: "Histydyna",
                nutritionalValueGroup: "Aminokwasy egzogenne",
                quantity: 1.35,
                unit: "mg"
            },
            {
                nutritionalValueName: "Lizyna",
                nutritionalValueGroup: "Aminokwasy egzogenne",
                quantity: 7.4,
                unit: "mg"
            },
            {
                nutritionalValueName: "Treonina",
                nutritionalValueGroup: "Aminokwasy egzogenne",
                quantity: 5.58,
                unit: "mg"
            },
            {
                nutritionalValueName: "Izoleucyna ",
                nutritionalValueGroup: "Aminokwasy egzogenne",
                quantity: 4.65,
                unit: "mg"
            },
            {
                nutritionalValueName: "Walina",
                nutritionalValueGroup: "Aminokwasy egzogenne",
                quantity: 4.29,
                unit: "mg"
            },
            {
                nutritionalValueName: "Arginina",
                nutritionalValueGroup: "Aminokwasy egzogenne",
                quantity: 1.81,
                unit: "mg"
            },
            {
                nutritionalValueName: "Tryptofan",
                nutritionalValueGroup: "Aminokwasy egzogenne",
                quantity: 1.3,
                unit: "mg"
            },
            {
                nutritionalValueName: "Leucyna ",
                nutritionalValueGroup: "Aminokwasy egzogenne",
                quantity: 8.3,
                unit: "mg"
            },
            {
                nutritionalValueName: "Fenyloalanina ",
                nutritionalValueGroup: "Aminokwasy egzogenne",
                quantity: 2.32,
                unit: "mg"
            },
            {
                nutritionalValueName: "Metionina",
                nutritionalValueGroup: "Aminokwasy egzogenne",
                quantity: 1.68,
                unit: "mg"
            }
        ],
        EAN: "5900512984780"
    },
    {
      UUID: "f57f3858-ce4f-4adb-afb5-cc744d547cbf",
      productName: "Koncentrat białek serwatkowych SUPER BODY ACTIVE WPC 80 waniliowy MLEKOVITA WPC 80",
      productDescription: "koncentrat białek serwatkowych instant waniliowy",
      productQuantity: 700,
      unit: "g",
      packageType: "torba folia",
      country: "Polska",
      ingredients: [
          "lecytyna",
          "koncentrat białek serwatkowych (z mleka krowiego)",
          "sól",
          "karoteny"
      ],
      additions: [],
      flavour: [
          "naturalny"
      ],
      nutritionalIndexes: [
          {
              legend: "Wysoka zawartość wapnia",
              indexValue: 3
          },
          {
              legend: "Wysoka zawartość białka",
              indexValue: 3
          }
      ],
      productIndexes: [
          {
              indexName: "T",
              indexValue: 6
          },
          {
              indexName: "S",
              indexValue: 6
          },
          {
              indexName: "P",
              indexValue: 3
          },
          {
              indexName: "M",
              indexValue: 3
          }
      ],
      storage: "Brak informacji",
      durability: "24 miesiące",
      instructionsAfterOpening: "Brak informacji",
      preparation: "Brak informacji",
      allergens: [
          "mleko"
      ],
      image: "https://mlekovitka.pl/1957-large_default/super-body-active-wpc-80-koncentrat-bialek-serwatkowych-instant-waniliowy-700-g.jpg",
      portion: {
          unit: "g",
          portionQuantity: 100
      },
      ratings: [
          {
              groupName: "Zastosowane procesy technologiczne",
              name: "pasteryzowanie"
          },
          {
              groupName: "Zastosowane procesy technologiczne",
              name: "suszenie"
          },
          {
              groupName: "Alegreny (może zawierać)",
              name: "mleko i produkty pochodne"
          },
          {
              groupName: "Parametry bez składników",
              name: "Bez glutenu"
          },
          {
              groupName: "Parametry bez składników",
              name: "Bez dodatku cukru"
          }
      ],
      nutritionalValues: [
          {
              nutritionalValueName: "Wartość Energetyczna",
              nutritionalValueGroup: "Wartość Energetyczna",
              quantity: 398.0,
              unit: "kcal"
          },
          {
              nutritionalValueName: "Total",
              nutritionalValueGroup: "Tłuszcz",
              quantity: 6.0,
              unit: "g"
          },
          {
              nutritionalValueName: "Kwasy nasycone",
              nutritionalValueGroup: "Tłuszcz",
              quantity: 3.9,
              unit: "g"
          },
          {
              nutritionalValueName: "Total",
              nutritionalValueGroup: "Węglowodany",
              quantity: 9.0,
              unit: "g"
          },
          {
              nutritionalValueName: "Cukry",
              nutritionalValueGroup: "Węglowodany",
              quantity: 9.0,
              unit: "g"
          },
          {
              nutritionalValueName: "Sól",
              nutritionalValueGroup: "Sól",
              quantity: 0.2,
              unit: "g"
          },
          {
              nutritionalValueName: "Wapń",
              nutritionalValueGroup: "Minerały",
              quantity: 410.0,
              unit: "mg"
          },
          {
              nutritionalValueName: "Fenyloalanina ",
              nutritionalValueGroup: "Aminokwasy egzogenne",
              quantity: 2.32,
              unit: "mg"
          },
          {
              nutritionalValueName: "Arginina",
              nutritionalValueGroup: "Aminokwasy egzogenne",
              quantity: 1.81,
              unit: "mg"
          },
          {
              nutritionalValueName: "Leucyna ",
              nutritionalValueGroup: "Aminokwasy egzogenne",
              quantity: 8.3,
              unit: "mg"
          },
          {
              nutritionalValueName: "Lizyna",
              nutritionalValueGroup: "Aminokwasy egzogenne",
              quantity: 7.4,
              unit: "mg"
          },
          {
              nutritionalValueName: "Metionina",
              nutritionalValueGroup: "Aminokwasy egzogenne",
              quantity: 1.68,
              unit: "mg"
          },
          {
              nutritionalValueName: "Treonina",
              nutritionalValueGroup: "Aminokwasy egzogenne",
              quantity: 5.58,
              unit: "mg"
          },
          {
              nutritionalValueName: "Tryptofan",
              nutritionalValueGroup: "Aminokwasy egzogenne",
              quantity: 1.3,
              unit: "mg"
          },
          {
              nutritionalValueName: "Walina",
              nutritionalValueGroup: "Aminokwasy egzogenne",
              quantity: 4.29,
              unit: "mg"
          },
          {
              nutritionalValueName: "Histydyna",
              nutritionalValueGroup: "Aminokwasy egzogenne",
              quantity: 1.35,
              unit: "mg"
          },
          {
              nutritionalValueName: "Białko",
              nutritionalValueGroup: "Białko",
              quantity: 77.0,
              unit: "g"
          },
          {
              nutritionalValueName: "Izoleucyna ",
              nutritionalValueGroup: "Aminokwasy egzogenne",
              quantity: 4.65,
              unit: "mg"
          }
      ],
      EAN: "5900512984797"
  },
  {
    UUID: "edccb21b-282d-4878-accf-2fe254be2c76",
    productName: "Koncentrat białek serwatkowych WPC 80 SUPER BODY ACTIVE MLEKOVITA",
    productDescription: "Koncentrat białek serwatkowych WPC 80 natural",
    productQuantity: 700,
    unit: "g",
    packageType: "torba folia",
    country: "Polska",
    ingredients: [
      "koncentrat białek serwatkowych (z mleka krowiego)"
    ],
    additions: [],
    flavour: [
      "naturalny masła"
    ],
    nutritionalIndexes: [
      {
        legend: "Wysoka zawartość wapnia",
        indexValue: 3
      },
      {
        legend: "Wysoka zawartość białka",
        indexValue: 3
      }
    ],
    productIndexes: [
      {
        indexName: "P",
        indexValue: 1
      },
      {
        indexName: "T",
        indexValue: 6
      },
      {
        indexName: "S",
        indexValue: 6
      },
      {
        indexName: "M",
        indexValue: 3
      },
      {
        indexName: "V",
        indexValue: 2
      }
    ],
    storage: "Brak informacji",
    durability: "24 miesiące",
    instructionsAfterOpening: "Brak informacji",
    preparation: "Brak informacji",
    allergens: [
      "mleko"
    ],
    image: "https://mlekovita.com.pl/media/cache/product_view/uploads/products/236/8714torebka-wpc-nowa-pakowaczka-w06-k-0000-jpg.jpg",
    portion: {
      unit: "g",
      portionQuantity: 100
    },
    ratings: [
      {
        groupName: "Zastosowane procesy technologiczne",
        name: "pasteryzowanie"
      },
      {
        groupName: "Bez dodatków do żywności",
        name: "bez środków słodzących"
      },
      {
        groupName: "Zastosowane procesy technologiczne",
        name: "suszenie"
      },
      {
        groupName: "Alegreny (może zawierać)",
        name: "mleko i produkty pochodne"
      },
      {
        groupName: "Bez dodatków do żywności",
        name: "bez dodatków do żywności"
      },
      {
        groupName: "Parametry bez składników",
        name: "Bez dodatku cukru"
      }
    ],
    nutritionalValues: [
      {
        nutritionalValueName: "Cukry",
        nutritionalValueGroup: "Węglowodany",
        quantity: 8.0,
        unit: "g"
      },
      {
        nutritionalValueName: "Total",
        nutritionalValueGroup: "Tłuszcz",
        quantity: 5.0,
        unit: "g"
      },
      {
        nutritionalValueName: "Total",
        nutritionalValueGroup: "Węglowodany",
        quantity: 8.0,
        unit: "g"
      },
      {
        nutritionalValueName: "Sól",
        nutritionalValueGroup: "Sól",
        quantity: 0.3,
        unit: "g"
      },
      {
        nutritionalValueName: "Wapń",
        nutritionalValueGroup: "Minerały",
        quantity: 430.0,
        unit: "mg"
      },
      {
        nutritionalValueName: "Białko",
        nutritionalValueGroup: "Białko",
        quantity: 80.0,
        unit: "g"
      },
      {
        nutritionalValueName: "Fenyloalanina ",
        nutritionalValueGroup: "Aminokwasy egzogenne",
        quantity: 2.5,
        unit: "mg"
      },
      {
        nutritionalValueName: "Lizyna",
        nutritionalValueGroup: "Aminokwasy egzogenne",
        quantity: 7.5,
        unit: "mg"
      },
      {
        nutritionalValueName: "Metionina",
        nutritionalValueGroup: "Aminokwasy egzogenne",
        quantity: 1.8,
        unit: "mg"
      },
      {
        nutritionalValueName: "Treonina",
        nutritionalValueGroup: "Aminokwasy egzogenne",
        quantity: 5.6,
        unit: "mg"
      },
      {
        nutritionalValueName: "Walina",
        nutritionalValueGroup: "Aminokwasy egzogenne",
        quantity: 4.5,
        unit: "mg"
      },
      {
        nutritionalValueName: "Histydyna",
        nutritionalValueGroup: "Aminokwasy egzogenne",
        quantity: 1.4,
        unit: "mg"
      },
      {
        nutritionalValueName: "Leucyna ",
        nutritionalValueGroup: "Aminokwasy egzogenne",
        quantity: 8.65,
        unit: "mg"
      },
      {
        nutritionalValueName: "Wartość Energetyczna",
        nutritionalValueGroup: "Wartość Energetyczna",
        quantity: 397.0,
        unit: "kcal"
      },
      {
        nutritionalValueName: "Kwasy nasycone",
        nutritionalValueGroup: "Tłuszcz",
        quantity: 3.1,
        unit: "g"
      },
      {
        nutritionalValueName: "Arginina",
        nutritionalValueGroup: "Aminokwasy egzogenne",
        quantity: 1.8,
        unit: "mg"
      },
      {
        nutritionalValueName: "Izoleucyna ",
        nutritionalValueGroup: "Aminokwasy egzogenne",
        quantity: 4.85,
        unit: "mg"
      },
      {
        nutritionalValueName: "Tryptofan",
        nutritionalValueGroup: "Aminokwasy egzogenne",
        quantity: 1.1,
        unit: "mg"
      }
    ],
    EAN: "5900512983387"
  },
  {
    UUID: "1caf90bd-6191-4c0e-9202-2e3bd6c2d108",
    productName: "Maślanka w proszku SUPER BODY ACTIVE naturalna MLEKOVITA",
    productDescription: "maślanka w proszku",
    productQuantity: 400,
    unit: "g",
    packageType: "torba folia",
    country: "Polska",
    ingredients: [
      "maślanka"
    ],
    additions: [],
    flavour: [],
    nutritionalIndexes: [
      {
        legend: "Wysoka zawartość wapnia",
        indexValue: 3
      },
      {
        legend: "Wysoka zawartość fosforu",
        indexValue: 3
      },
      {
        legend: "Wysoka zawartość białka",
        indexValue: 3
      },
      {
        legend: "Wysoka zawartość potasu",
        indexValue: 3
      }
    ],
    productIndexes: [
      {
        indexName: "P",
        indexValue: 3
      },
      {
        indexName: "T",
        indexValue: 12
      },
      {
        indexName: "S",
        indexValue: 12
      },
      {
        indexName: "M",
        indexValue: 9
      }
    ],
    storage: "w warunkach chłodniczych",
    durability: "12 miesięcy",
    instructionsAfterOpening: "Brak informacji",
    preparation: "Brak informacji",
    allergens: [
      "mleko"
    ],
    image: "https://mlekovita.com.pl/uploads/products/837/8180sba-torebka-maslanka-w-proszku-nowa-pakowaczka-w02-0000-kopia-jpg.jpg",
    portion: {
      unit: "g",
      portionQuantity: 100
    },
    ratings: [
      {
        groupName: "Zastosowane procesy technologiczne",
        name: "pasteryzowanie"
      },
      {
        groupName: "Zastosowane procesy technologiczne",
        name: "produkt naturalny"
      },
      {
        groupName: "Zastosowane procesy technologiczne",
        name: "suszenie"
      },
      {
        groupName: "Alegreny (może zawierać)",
        name: "mleko i produkty pochodne"
      },
      {
        groupName: "Parametry bez składników",
        name: "Bez glutenu"
      },
      {
        groupName: "Parametry bez składników",
        name: "Bez dodatku cukru"
      }
    ],
    nutritionalValues: [
      {
        nutritionalValueName: "Total",
        nutritionalValueGroup: "Tłuszcz",
        quantity: 7.0,
        unit: "g"
      },
      {
        nutritionalValueName: "Kwasy nasycone",
        nutritionalValueGroup: "Tłuszcz",
        quantity: 4.5,
        unit: "g"
      },
      {
        nutritionalValueName: "Total",
        nutritionalValueGroup: "Węglowodany",
        quantity: 50.0,
        unit: "g"
      },
      {
        nutritionalValueName: "Białko",
        nutritionalValueGroup: "Białko",
        quantity: 32.0,
        unit: "g"
      },
      {
        nutritionalValueName: "Sól",
        nutritionalValueGroup: "Sól",
        quantity: 1.1,
        unit: "g"
      },
      {
        nutritionalValueName: "Wapń",
        nutritionalValueGroup: "Minerały",
        quantity: 1050.0,
        unit: "mg"
      },
      {
        nutritionalValueName: "Potas",
        nutritionalValueGroup: "Minerały",
        quantity: 1522.0,
        unit: "mg"
      },
      {
        nutritionalValueName: "Wartość Energetyczna",
        nutritionalValueGroup: "Wartość Energetyczna",
        quantity: 391.0,
        unit: "kcal"
      },
      {
        nutritionalValueName: "Cukry",
        nutritionalValueGroup: "Węglowodany",
        quantity: 50.0,
        unit: "g"
      },
      {
        nutritionalValueName: "Fosfor",
        nutritionalValueGroup: "Minerały",
        quantity: 892.0,
        unit: "mg"
      }
    ],
    EAN: "5900512901220"
  },
  {
      UUID: "b573055d-ff27-460b-9243-f8a7648b0a41",
      productName: "Mleko w proszku SUPER BODY ACTIVE odtłuszczone bez laktozy MLEKOVITA",
      productDescription: "mleko w proszku odtłuszczone bez laktozy",
      productQuantity: 500,
      unit: "g",
      packageType: "torba folia",
      country: "Polska",
      ingredients: [
        "mleko"
      ],
      additions: [],
      flavour: [],
      nutritionalIndexes: [
        {
          legend: "Wysoka zawartość wapnia",
          indexValue: 3
        },
        {
          legend: "Wysoka zawartość fosforu",
          indexValue: 3
        },
        {
          legend: "Wysoka zawartość białka",
          indexValue: 3
        },
        {
          legend: "Wysoka zawartość potasu",
          indexValue: 3
        }
      ],
      productIndexes: [
        {
          indexName: "P",
          indexValue: 3
        },
        {
          indexName: "T",
          indexValue: 12
        },
        {
          indexName: "S",
          indexValue: 12
        },
        {
          indexName: "M",
          indexValue: 9
        }
      ],
      storage: "w suchym i chłodnym miejscu",
      durability: "12 miesięcy",
      instructionsAfterOpening: "Brak informacji",
      preparation: "Brak informacji",
      allergens: [
        "mleko"
      ],
      image: "https://mlekovita.com.pl/uploads/images/CfWD6ntJ9cXNEKuPBazA/8123-sba-torebka-mleko-w-proszku-bez-laktozy-nowa-pakowaczka-w02-0030-kopia.jpg",
      portion: {
        unit: "g",
        portionQuantity: 100
      },
      ratings: [
        {
          groupName: "Parametry bez składników",
          name: "Bez laktozy"
        },
        {
          groupName: "Zastosowane procesy technologiczne",
          name: "suszenie"
        },
        {
          groupName: "Alegreny (może zawierać)",
          name: "mleko i produkty pochodne"
        },
        {
          groupName: "Parametry bez składników",
          name: "Bez glutenu"
        },
        {
          groupName: "Parametry bez składników",
          name: "Bez dodatku cukru"
        }
      ],
      nutritionalValues: [
        {
          nutritionalValueName: "Total",
          nutritionalValueGroup: "Tłuszcz",
          quantity: 1.1,
          unit: "g"
        },
        {
          nutritionalValueName: "Kwasy nasycone",
          nutritionalValueGroup: "Tłuszcz",
          quantity: 0.7,
          unit: "g"
        },
        {
          nutritionalValueName: "Total",
          nutritionalValueGroup: "Węglowodany",
          quantity: 51.0,
          unit: "g"
        },
        {
          nutritionalValueName: "Cukry",
          nutritionalValueGroup: "Węglowodany",
          quantity: 51.0,
          unit: "g"
        },
        {
          nutritionalValueName: "Sól",
          nutritionalValueGroup: "Sól",
          quantity: 1.1,
          unit: "g"
        },
        {
          nutritionalValueName: "Fosfor",
          nutritionalValueGroup: "Minerały",
          quantity: 700.0,
          unit: "mg"
        },
        {
          nutritionalValueName: "Wapń",
          nutritionalValueGroup: "Minerały",
          quantity: 1000.0,
          unit: "mg"
        },
        {
          nutritionalValueName: "Potas",
          nutritionalValueGroup: "Minerały",
          quantity: 1400.0,
          unit: "mg"
        },
        {
          nutritionalValueName: "Wartość Energetyczna",
          nutritionalValueGroup: "Wartość Energetyczna",
          quantity: 350.0,
          unit: "kcal"
        },
        {
          nutritionalValueName: "Białko",
          nutritionalValueGroup: "Białko",
          quantity: 34.0,
          unit: "g"
        }
      ],
      EAN: "5900512983271"
    },
    {
        UUID: "43ea98aa-dc52-44ee-a70b-652ef45fbb20",
        productName: "Mleko Wydojone 2% bez laktozy MLEKOVITA",
        productDescription: "mleko 2% bez laktozy",
        productQuantity: 1,
        unit: "l",
        packageType: "butelka HDPE ",
        country: "Polska",
        ingredients: [
          "mleko "
        ],
        additions: [],
        flavour: [],
        nutritionalIndexes: [
          {
            legend: "Źródło wapnia",
            indexValue: 1
          },
          {
            legend: "Wysoka zawartość białka",
            indexValue: 2
          }
        ],
        productIndexes: [
          {
            indexName: "S",
            indexValue: 3
          },
          {
            indexName: "P",
            indexValue: 2
          },
          {
            indexName: "M",
            indexValue: 1
          },
          {
            indexName: "T",
            indexValue: 3
          }
        ],
        storage: "od +2C do +8C",
        durability: "30 dni",
        instructionsAfterOpening: "przechowywać w temp.: +2C do +8C nie dłużej niż 48 godzin",
        preparation: "Brak informacji",
        allergens: [
          "mleko"
        ],
        image: "https://mlekovita.com.pl/uploads/products/586/2404mleko-wypasione-butelka-1l-2022-04-20-2-w02-0000-copy-jpg.jpg",
        portion: {
          unit: "ml",
          portionQuantity: 100
        },
        ratings: [
          {
            groupName: "Zastosowane procesy technologiczne",
            name: "pasteryzowanie"
          },
          {
            groupName: "Parametry bez składników",
            name: "Bez laktozy"
          },
          {
            groupName: "Alegreny (może zawierać)",
            name: "mleko i produkty pochodne"
          }
        ],
        nutritionalValues: [
          {
            nutritionalValueName: "Total",
            nutritionalValueGroup: "Tłuszcz",
            quantity: 2.0,
            unit: "g"
          },
          {
            nutritionalValueName: "Kwasy nasycone",
            nutritionalValueGroup: "Tłuszcz",
            quantity: 1.3,
            unit: "g"
          },
          {
            nutritionalValueName: "Total",
            nutritionalValueGroup: "Węglowodany",
            quantity: 4.7,
            unit: "g"
          },
          {
            nutritionalValueName: "Wapń",
            nutritionalValueGroup: "Minerały",
            quantity: 105.0,
            unit: "mg"
          },
          {
            nutritionalValueName: "Sól",
            nutritionalValueGroup: "Sól",
            quantity: 0.1,
            unit: "g"
          },
          {
            nutritionalValueName: "Cukry",
            nutritionalValueGroup: "Węglowodany",
            quantity: 4.7,
            unit: "g"
          },
          {
            nutritionalValueName: "Wartość Energetyczna",
            nutritionalValueGroup: "Wartość Energetyczna",
            quantity: 50.0,
            unit: "kcal"
          },
          {
            nutritionalValueName: "Białko",
            nutritionalValueGroup: "Białko",
            quantity: 3.2,
            unit: "g"
          }
        ],
        EAN: "5900512983639"
      },
      {
          UUID: "efe91d1c-0b37-4b7f-ab43-d676ade7fc20",
          productName: "Mleko Wydojone 3,2% bez laktozy MLEKOVITA",
          productDescription: "mleko bez laktozy",
          productQuantity: 1,
          unit: "l",
          packageType: "butelka HDPE ",
          country: "Polska",
          ingredients: [
            "mleko"
          ],
          additions: [],
          flavour: [],
          nutritionalIndexes: [
            {
              legend: "Źródło wapnia",
              indexValue: 1
            },
            {
              legend: "Wysoka zawartość białka",
              indexValue: 2
            }
          ],
          productIndexes: [
            {
              indexName: "S",
              indexValue: 3
            },
            {
              indexName: "P",
              indexValue: 2
            },
            {
              indexName: "M",
              indexValue: 1
            },
            {
              indexName: "T",
              indexValue: 3
            }
          ],
          storage: "od +2C do +8C",
          durability: "30 dni\r\n",
          instructionsAfterOpening: "przechowywać w temp.: +2C do +8C nie dłużej niż 48 godzin",
          preparation: "Brak informacji",
          allergens: [
            "mleko"
          ],
          image: "https://mlekovita.com.pl/media/cache/product_view/uploads/products_specials/593/x6256mleko-bez-laktozy-wydojone-3-2-png.png.pagespeed.ic.zWIFBL5u7D.png",
          portion: {
            unit: "ml",
            portionQuantity: 100
          },
          ratings: [
            {
              groupName: "Zastosowane procesy technologiczne",
              name: "pasteryzowanie"
            },
            {
              groupName: "Parametry bez składników",
              name: "Bez laktozy"
            },
            {
              groupName: "Alegreny (może zawierać)",
              name: "mleko i produkty pochodne"
            }
          ],
          nutritionalValues: [
            {
              nutritionalValueName: "Wartość Energetyczna",
              nutritionalValueGroup: "Wartość Energetyczna",
              quantity: 60.0,
              unit: "kcal"
            },
            {
              nutritionalValueName: "Total",
              nutritionalValueGroup: "Tłuszcz",
              quantity: 3.2,
              unit: "g"
            },
            {
              nutritionalValueName: "Kwasy nasycone",
              nutritionalValueGroup: "Tłuszcz",
              quantity: 2.0,
              unit: "g"
            },
            {
              nutritionalValueName: "Białko",
              nutritionalValueGroup: "Białko",
              quantity: 3.2,
              unit: "g"
            },
            {
              nutritionalValueName: "Sól",
              nutritionalValueGroup: "Sól",
              quantity: 0.1,
              unit: "g"
            },
            {
              nutritionalValueName: "Total",
              nutritionalValueGroup: "Węglowodany",
              quantity: 4.7,
              unit: "g"
            },
            {
              nutritionalValueName: "Wapń",
              nutritionalValueGroup: "Minerały",
              quantity: 105.0,
              unit: "mg"
            },
            {
              nutritionalValueName: "Cukry",
              nutritionalValueGroup: "Węglowodany",
              quantity: 4.7,
              unit: "g"
            }
          ],
          EAN: "5900512983646"
        },
        {
            UUID: "d065569f-99b9-4499-83d8-0de120566fa8",
            productName: "Mleko wysokobiałkowe SUPER BODY ACTIVE UHT 0,5% MLEKOVITA",
            productDescription: "mleko wysokobiałkowe UHT 0,5% klasyczne",
            productQuantity: 1,
            unit: "l",
            packageType: "Tetra Pak",
            country: "Polska",
            ingredients: [
              "mleko",
              "białka mleka (z mleka krowiego)"
            ],
            additions: [],
            flavour: [],
            nutritionalIndexes: [
              {
                legend: "Wysoka zawartość wapnia",
                indexValue: 2
              },
              {
                legend: "Wysoka zawartość białka",
                indexValue: 3
              }
            ],
            productIndexes: [
              {
                indexName: "T",
                indexValue: 5
              },
              {
                indexName: "S",
                indexValue: 5
              },
              {
                indexName: "P",
                indexValue: 3
              },
              {
                indexName: "M",
                indexValue: 2
              }
            ],
            storage: "Przechowywać w temperaturze od +1 st. C do +25 st. C",
            durability: "7 miesięcy",
            instructionsAfterOpening: "przechowywać w warunkach chłodniczych nie dłużej niż 48 godzin.",
            preparation: "Brak informacji",
            allergens: [
              "mleko"
            ],
            image: "https://mlekovita.com.pl/media/cache/product_view/uploads/products/840/1933sba-mleko-wysokobialkowe-sq-2023-12-05-w01-klasyczne-0050-kopia-jpg.jpg",
            portion: {
              unit: "ml",
              portionQuantity: 100
            },
            ratings: [
              {
                groupName: "Zastosowane procesy technologiczne",
                name: "pasteryzowanie"
              },
              {
                groupName: "Alegreny (może zawierać)",
                name: "mleko i produkty pochodne"
              },
              {
                groupName: "Parametry bez składników",
                name: "Niska zawartość tłuszczu"
              }
            ],
            nutritionalValues: [
              {
                nutritionalValueName: "Total",
                nutritionalValueGroup: "Tłuszcz",
                quantity: 0.5,
                unit: "g"
              },
              {
                nutritionalValueName: "Kwasy nasycone",
                nutritionalValueGroup: "Tłuszcz",
                quantity: 0.3,
                unit: "g"
              },
              {
                nutritionalValueName: "Total",
                nutritionalValueGroup: "Węglowodany",
                quantity: 4.7,
                unit: "g"
              },
              {
                nutritionalValueName: "Cukry",
                nutritionalValueGroup: "Węglowodany",
                quantity: 4.7,
                unit: "g"
              },
              {
                nutritionalValueName: "Sól",
                nutritionalValueGroup: "Sól",
                quantity: 0.1,
                unit: "g"
              },
              {
                nutritionalValueName: "Wapń",
                nutritionalValueGroup: "Minerały",
                quantity: 150.0,
                unit: "mg"
              },
              {
                nutritionalValueName: "Wartość Energetyczna",
                nutritionalValueGroup: "Wartość Energetyczna",
                quantity: 41.0,
                unit: "kcal"
              },
              {
                nutritionalValueName: "Białko",
                nutritionalValueGroup: "Białko",
                quantity: 4.5,
                unit: "g"
              }
            ],
            EAN: "5900512901329"
          },
          {
              UUID: "578db518-581b-4801-8613-4d09b12ed366",
              productName: "serek homogenizowany SUPER BODY ACTIVE bez laktozy MLEKOVITA",
              productDescription: "wysokobiałkowy serek homogenizowany naturalny bez laktozy",
              productQuantity: 150,
              unit: "g",
              packageType: "kubek PP",
              country: "Polska",
              ingredients: [
                "mleko pasteryzowane",
                "kultury bakterii fermentacji mlekowej"
              ],
              additions: [],
              flavour: [],
              nutritionalIndexes: [
                {
                  legend: "Wysoka zawartość białka",
                  indexValue: 3
                }
              ],
              productIndexes: [
                {
                  indexName: "S",
                  indexValue: 3
                },
                {
                  indexName: "P",
                  indexValue: 3
                },
                {
                  indexName: "T",
                  indexValue: 3
                }
              ],
              storage: "w warunkach chlodniczych od +2 st. C do +10 st. C",
              durability: "40 dni",
              instructionsAfterOpening: "Brak informacji",
              preparation: "Brak informacji",
              allergens: [
                "mleko"
              ],
              image: "https://mlekovita.com.pl/uploads/products/848/4814sba-wysokobialkowy-serek-homogenizowany-150g-naturalny-w01-0030-kopia-jpg.jpg",
              portion: {
                unit: "g",
                portionQuantity: 100
              },
              ratings: [
                {
                  groupName: "Zastosowane procesy technologiczne",
                  name: "pasteryzowanie"
                },
                {
                  groupName: "Parametry bez składników",
                  name: "Bez laktozy"
                },
                {
                  groupName: "Alegreny (może zawierać)",
                  name: "mleko i produkty pochodne"
                },
                {
                  groupName: "Zastosowane procesy technologiczne",
                  name: "fermentacja"
                }
              ],
              nutritionalValues: [
                {
                  nutritionalValueName: "Wartość Energetyczna",
                  nutritionalValueGroup: "Wartość Energetyczna",
                  quantity: 121.0,
                  unit: "kcal"
                },
                {
                  nutritionalValueName: "Total",
                  nutritionalValueGroup: "Tłuszcz",
                  quantity: 7.0,
                  unit: "g"
                },
                {
                  nutritionalValueName: "Kwasy nasycone",
                  nutritionalValueGroup: "Tłuszcz",
                  quantity: 4.1,
                  unit: "g"
                },
                {
                  nutritionalValueName: "Total",
                  nutritionalValueGroup: "Węglowodany",
                  quantity: 3.5,
                  unit: "g"
                },
                {
                  nutritionalValueName: "Cukry",
                  nutritionalValueGroup: "Węglowodany",
                  quantity: 3.5,
                  unit: "g"
                },
                {
                  nutritionalValueName: "Białko",
                  nutritionalValueGroup: "Białko",
                  quantity: 11.0,
                  unit: "g"
                },
                {
                  nutritionalValueName: "Sól",
                  nutritionalValueGroup: "Sól",
                  quantity: 0.15,
                  unit: "g"
                }
              ],
              EAN: "5900512901350"
            },
            {
                UUID: "f69fdc56-fb0a-479f-8b56-f3419c2b1d5d",
                productName: "Serek wiejski SUPER BODY ACTIVE wysokobiałkowy MLEKOVITA",
                productDescription: "świeży ziarnisty twarożek",
                productQuantity: 200,
                unit: "g",
                packageType: "kubek PP",
                country: "Polska",
                ingredients: [
                  "ziarno twarogowe",
                  "śmietanka pasteryzowana",
                  "sól"
                ],
                additions: [],
                flavour: [],
                nutritionalIndexes: [
                  {
                    legend: "Wysoka zawartość białka",
                    indexValue: 3
                  }
                ],
                productIndexes: [
                  {
                    indexName: "S",
                    indexValue: 3
                  },
                  {
                    indexName: "P",
                    indexValue: 3
                  },
                  {
                    indexName: "T",
                    indexValue: 3
                  }
                ],
                storage: "w warunkach chłodniczych od +2 st. C do +8 st. C",
                durability: "18 dni",
                instructionsAfterOpening: "Brak informacji",
                preparation: "wymieszać przed spożyciem",
                allergens: [
                  "mleko"
                ],
                image: "https://mlekovita.com.pl/media/cache/product_view/uploads/products/787/7113serek-wiejski-ziarnisty-sba-200-g-2022-10-31-w06-0020-copy-jpg.jpg",
                portion: {
                  unit: "g",
                  portionQuantity: 100
                },
                ratings: [
                  {
                    groupName: "Zastosowane procesy technologiczne",
                    name: "pasteryzowanie"
                  },
                  {
                    groupName: "Alegreny (może zawierać)",
                    name: "mleko i produkty pochodne"
                  },
                  {
                    groupName: "Zastosowane procesy technologiczne",
                    name: "fermentacja"
                  }
                ],
                nutritionalValues: [
                  {
                    nutritionalValueName: "Wartość Energetyczna",
                    nutritionalValueGroup: "Wartość Energetyczna",
                    quantity: 97.0,
                    unit: "kcal"
                  },
                  {
                    nutritionalValueName: "Total",
                    nutritionalValueGroup: "Tłuszcz",
                    quantity: 3.0,
                    unit: "g"
                  },
                  {
                    nutritionalValueName: "Kwasy nasycone",
                    nutritionalValueGroup: "Tłuszcz",
                    quantity: 2.0,
                    unit: "g"
                  },
                  {
                    nutritionalValueName: "Total",
                    nutritionalValueGroup: "Węglowodany",
                    quantity: 2.3,
                    unit: "g"
                  },
                  {
                    nutritionalValueName: "Cukry",
                    nutritionalValueGroup: "Węglowodany",
                    quantity: 2.3,
                    unit: "g"
                  },
                  {
                    nutritionalValueName: "Białko",
                    nutritionalValueGroup: "Białko",
                    quantity: 15.0,
                    unit: "g"
                  },
                  {
                    nutritionalValueName: "Sól",
                    nutritionalValueGroup: "Sól",
                    quantity: 0.7,
                    unit: "g"
                  }
                ],
                EAN: "5900512988801"
              },
              {
                  UUID: "0297c4e4-0b28-4b42-8143-d37bf3e4b425",
                  productName: "Ser GOUDA bez laktozy MLEKOVITA",
                  productDescription: "ser dojrzewający, plastry",
                  productQuantity: 150,
                  unit: "g",
                  packageType: "tacka",
                  country: "Polska",
                  ingredients: [
                    "kultury bakterii mlekowych",
                    "mleko",
                    "sól"
                  ],
                  additions: [],
                  flavour: [],
                  nutritionalIndexes: [
                    {
                      legend: "Wysoka zawartość wapnia",
                      indexValue: 3
                    },
                    {
                      legend: "Wysoka zawartość białka",
                      indexValue: 3
                    }
                  ],
                  productIndexes: [
                    {
                      indexName: "T",
                      indexValue: 6
                    },
                    {
                      indexName: "S",
                      indexValue: 6
                    },
                    {
                      indexName: "P",
                      indexValue: 3
                    },
                    {
                      indexName: "M",
                      indexValue: 3
                    }
                  ],
                  storage: "+2 C do +10 C",
                  durability: "pakowany w atmosferze ochronnej",
                  instructionsAfterOpening: "nie dłużej niż 3 dni",
                  preparation: "Brak informacji",
                  allergens: [
                    "mleko"
                  ],
                  image: "https://mlekovita.com.pl/uploads/products/369/4562ser-goudai-plastry-bez-laktozy-150g-m2016-w03-0000-copy-jpg.jpg",
                  portion: {
                    unit: "g",
                    portionQuantity: 100
                  },
                  ratings: [
                    {
                      groupName: "Zastosowane procesy technologiczne",
                      name: "pasteryzowanie"
                    },
                    {
                      groupName: "Parametry bez składników",
                      name: "Bez laktozy"
                    },
                    {
                      groupName: "Bez dodatków do żywności",
                      name: "bez konserwantów"
                    },
                    {
                      groupName: "Alergeny (może zawierać)",
                      name: "mleko i produkty pochodne"
                    }
                  ],
                  nutritionalValues: [
                    {
                      nutritionalValueName: "Wartość Energetyczna",
                      nutritionalValueGroup: "Wartość Energetyczna",
                      quantity: 334.0,
                      unit: "kcal"
                    },
                    {
                      nutritionalValueName: "Kwasy nasycone",
                      nutritionalValueGroup: "Tłuszcz",
                      quantity: 17.0,
                      unit: "g"
                    },
                    {
                      nutritionalValueName: "Białko",
                      nutritionalValueGroup: "Białko",
                      quantity: 25.0,
                      unit: "g"
                    },
                    {
                      nutritionalValueName: "Sól",
                      nutritionalValueGroup: "Sól",
                      quantity: 1.5,
                      unit: "g"
                    },
                    {
                      nutritionalValueName: "Wapń",
                      nutritionalValueGroup: "Minerały",
                      quantity: 800.0,
                      unit: "mg"
                    },
                    {
                      nutritionalValueName: "Total",
                      nutritionalValueGroup: "Tłuszcz",
                      quantity: 26.0,
                      unit: "g"
                    }
                  ],
                  EAN: "5900512999814"
                },
                {
                    UUID: "927d0f18-7e48-4440-a4a7-ab7a3de8f5a1",
                    productName: "Ser wysokobiałkowy SUPER BODY ACTIVE MLEKOVITA",
                    productDescription: "ser wysokobiałkowy plastry",
                    productQuantity: 140,
                    unit: "g",
                    packageType: "tacka z tworzywa sztucznego przykryta folią typu  otwórz/zamknij",
                    country: "Polska",
                    ingredients: [
                      "mleko pasteryzowane",
                      "kultury bakterii",
                      "sól",
                      "karoteny"
                    ],
                    additions: [],
                    flavour: [],
                    nutritionalIndexes: [
                      {
                        legend: "Wysoka zawartość wapnia",
                        indexValue: 3
                      },
                      {
                        legend: "Wysoka zawartość białka",
                        indexValue: 3
                      },
                      {
                        legend: "Niska zawartość tłuszczu",
                        indexValue: 1
                      }
                    ],
                    productIndexes: [
                      {
                        indexName: "T",
                        indexValue: 6
                      },
                      {
                        indexName: "P",
                        indexValue: 3
                      },
                      {
                        indexName: "S",
                        indexValue: 7
                      },
                      {
                        indexName: "M",
                        indexValue: 3
                      }
                    ],
                    storage: "w warunkach chłodniczych od +2 st. C do +10 st. C ",
                    durability: "",
                    instructionsAfterOpening: "przechowywać w temperaturze od +2 do +10C nie dłużej niż 3 dni",
                    preparation: "Brak informacji",
                    allergens: [
                      "mleko"
                    ],
                    image: "https://mlekovita.com.pl/media/cache/product_view/uploads/products_specials/830/x8904sba-ser-wysokobialkowy-plastry-png.png.pagespeed.ic.HO23IwlSqf.png",
                    portion: {
                      unit: "g",
                      portionQuantity: 100
                    },
                    ratings: [
                      {
                        groupName: "Zastosowane procesy technologiczne",
                        name: "pasteryzowanie"
                      },
                      {
                        groupName: "Bez dodatków do żywności",
                        name: "bez konserwantów"
                      },
                      {
                        groupName: "Alegreny (może zawierać)",
                        name: "mleko i produkty pochodne"
                      },
                      {
                        groupName: "Parametry bez składników",
                        name: "Niska zawartość tłuszczu"
                      }
                    ],
                    nutritionalValues: [
                      {
                        nutritionalValueName: "Wartość Energetyczna",
                        nutritionalValueGroup: "Wartość Energetyczna",
                        quantity: 168.0,
                        unit: "kcal"
                      },
                      {
                        nutritionalValueName: "Total",
                        nutritionalValueGroup: "Tłuszcz",
                        quantity: 2.8,
                        unit: "g"
                      },
                      {
                        nutritionalValueName: "Kwasy nasycone",
                        nutritionalValueGroup: "Tłuszcz",
                        quantity: 1.8,
                        unit: "g"
                      },
                      {
                        nutritionalValueName: "Białko",
                        nutritionalValueGroup: "Białko",
                        quantity: 36.0,
                        unit: "g"
                      },
                      {
                        nutritionalValueName: "Sól",
                        nutritionalValueGroup: "Sól",
                        quantity: 1.9,
                        unit: "g"
                      },
                      {
                        nutritionalValueName: "Wapń",
                        nutritionalValueGroup: "Minerały",
                        quantity: 1300.0,
                        unit: "mg"
                      }
                    ],
                    EAN: "5900512989839"
                  },
                
=======
  }
>>>>>>> 418769c921dc40f2b8001f2876d96d59839399ee
];

const ScannedProduct: React.FC<ScannedProductProps> = ({scanned}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  // const product = products.find(p => p.EAN === scanned);
  const product = products[7];

  if (!product) {
    return (
        <div className="p-4">
          <p className="text-red-600 text-xl">Nie znaleziono produktu o kodzie EAN: {scanned}</p>
        </div>
    );
  }
    return (
      <>
        <div className="md:p-4 pr-4 pl-4 pb-4 w-full">
          <Message level={5} />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-9 gap-6 md:p-4 pr-4 pl-4 pb-4 mt-0">
          <div className="space-y-4 md:col-span-4">

            <Tile title="Nazwa produktu">
              <p className="font-light text-md">
                <span>{product.productName}</span>
              </p>
            </Tile>
            <Tile title="Opis">
              <p className="font-light text-md">
                {product.productDescription}
              </p>

              {isExpanded && (
                  <div className="mt-2 text-gray-700">
                    <p className="flex items-center space-x-2">
                      <span>Kraj</span>
                      <img src={"/right-arrow.png"} alt="Arrow" className="w-4 h-4 object-contain"/>
                      <span>Polska</span>
                    </p>
                    <p className="flex items-center space-x-2">
                      <span>Kod EAN</span>
                      <img src={"/right-arrow.png"} alt="Arrow" className="w-4 h-4 object-contain"/>
                      <span>{product.EAN}</span>
                    </p>
                  </div>
              )}

              <button
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="flex items-center justify-between w-full mt-4 text-white font-medium"
              >
                <span>{isExpanded ? "Zwiń" : "Czytaj więcej"}</span>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    className={`transform transition-transform duration-300 ${
                        isExpanded ? "rotate-180" : "rotate-0"
                    }`}
                >
                  <path
                      d="M12 17.414 3.293 8.707l1.414-1.414L12 14.586l7.293-7.293 1.414 1.414L12 17.414z"/>
                </svg>
              </button>
            </Tile>

            <Tile title="">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center w-full">
                {product.productIndexes.map((index) => {
                  return (
                      <>
                      <div className="flex items-center space-x-4 px-4 sm:px-6">
                        <span className="text-2xl font-light">Indeks {index.indexName}</span>
                      </div>
                      <div>
                        <ScoreIndicator highlightedIndex={Math.ceil(index.indexValue/2)}/>
                      </div>
                      </>
                    )
                }
                )}

                {/*<div className="flex items-center space-x-4 px-4 sm:px-6">*/}
                {/*  <span className=" text-2xl font-light">Indeks SUM</span>*/}
                {/*</div>*/}
                {/*<div>*/}
                {/*  <ScoreIndicator highlightedIndex={3}/>*/}
                {/*</div>*/}

                {/*<div className="flex items-center space-x-4 px-4 sm:px-6">*/}
                {/*  <span className=" text-2xl font-light">Indeks FF</span>*/}
                {/*</div>*/}
                {/*<div>*/}
                {/*  <ScoreIndicator highlightedIndex={3}/>*/}
                {/*</div>*/}
              </div>
            </Tile>
            <Tile title="">
              <ul className="list-disc space-y-2">
                {Array.isArray(product.nutritionalIndexes) ? product.nutritionalIndexes.map((item, index) => (
                    item.legend ? (
                        <li key={index} className="font-light text-xl flex items-center space-x-4">
                          <div>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                 fill="currentColor" className="size-6">
                              <path fillRule="evenodd"
                                    d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z"
                                    clipRule="evenodd"/>
                            </svg>
                          </div>
                          <span>{item.legend}</span>
                        </li>
                    ) : null
                )) : <p className="text-gray-500">Brak danych</p>}
              </ul>
            </Tile>

            <Tile title="">
              <ul className="list-disc space-y-2">
                {product.ratings.map((item, index) => (
                    <li key={index} className="font-light text-xl flex items-center space-x-4">
                      <div>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                             fill="currentColor"
                             className="size-6">
                          <path
                              fillRule="evenodd"
                              d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z"
                              clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <span>{item.groupName} {item.name}</span>
                    </li>
                ))}
              </ul>
            </Tile>


            <Tile title="Skład">
              <ul className="list-disc pl-8 space-y-2">
                {[
                  ...product.ingredients.map((item) => item)

                ].map((item: string, index: number) => (
                    <li key={index} className="font-light text-xl flex items-center space-x-4">
                      <img src={"/right-arrow.png"} alt="Arrow" className="w-4 h-4 object-contain"/>
                      <span>{item}</span>
                    </li>
                ))}
              </ul>
            </Tile>

          </div>

          <div className=" space-y-4  md:col-span-5 ">
            <Tile title="Tabela wartości
              odżywczych">

              <div className="overflow-x-auto">
                <table className="min-w-full table-auto border-collapse rounded-lg overflow-hidden">
                  <thead>
                  <tr className="text-gray-800 text-left">
                    <th className="px-6 py-3 text-sm font-md">Składnik</th>
                    <th className="px-6 py-3 text-sm font-md">Wartość na 100g</th>
                    <th className="px-6 py-3 text-sm font-md">Jednostka</th>
                    <th className="px-6 py-3 text-sm font-md">% RWS</th>
                  </tr>
                  </thead>
                  <tbody>
                  {[
                    {name: "Kalorie", value: "250", unit: "kcal", rws: "1"},
                    {name: "Białko", value: "12", unit: "g", rws: "5"},
                    {name: "Tłuszcze", value: "10", unit: "g", rws: "3"},
                    {name: "Węglowodany", value: "30", unit: "g", rws: "2"},
                    {name: "Błonnik", value: "5", unit: "g", rws: "2"}
                  ].map((item, index) => (
                      <tr key={index}
                          className={`border-t ${index % 2 === 0 ? "bg-white" : "bg-white"}`}>
                        <td className="px-6 py-3 font-light text-gray-700">{item.name}</td>
                        <td className="px-6 py-3 text-gray-700">{item.value}</td>
                        <td className="px-6 py-3 text-gray-500">{item.unit}</td>
                        <td className="px-6 py-3 text-gray-700">{item.rws}%</td>
                      </tr>
                  ))}
                  </tbody>
                </table>
              </div>

            </Tile>

            <Tile title="">
              <img
                  src={product.image}
                  alt="test"
                  className="w-2/5 h-auto object-cover rounded-lg shadow-md mx-auto block"
              />
            </Tile>
          </div>
        </div>
      </>
  );
};

export default ScannedProduct;