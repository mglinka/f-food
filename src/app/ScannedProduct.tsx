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
  }
];

const ScannedProduct: React.FC<ScannedProductProps> = ({scanned}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const product = products.find(p => p.EAN === scanned);

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