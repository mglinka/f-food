import React, {useState} from "react";
import ENScoreIndicator from "@/components/indexes/ENScoreIndicator";
import ScoreIndicator from "@/components/indexes/ScoreIndicator";
import Tile from "@/components/Tile";
import Message from "@/components/Message";

interface ScannedProductProps {
  scanned: string;
}


const product: Product = {
  id: "43ea98aa-dc52-44ee-a70b-652ef45fbb20",
  version: 11,
  country: "Polska",
  ean: "5900512983639",
  productDescription: "mleko 2% bez laktozy",
  productName: "Mleko Wydojone 2% bez laktozy MLEKOVITA",
  productQuantity: 1,
  compositionId: "b45a6f5e-01b0-4b4a-80b6-951f4260ddaf",
  labelId: "5454bb30-6302-4fc9-ba45-7d4486f71adb",
  packageTypeId: "1d45b332-8d48-4a6b-878c-b9e89f48a80d",
  portionId: "de6ec2d7-ae66-40f4-94fd-1b5c7edb9cfd",
  producerId: "5faeeb7c-800b-4bd6-9b25-5607d163db45",
  unitId: "354b6d6f-91e0-48d3-ba18-6e5f4e996c49",
  labelDTO: {
    storage: "od +2C do +8C",
    durability: "30 dni",
    instructionsAfterOpening: "przechowywać w temp.: +2C do +8C nie dłużej niż 48 godzin",
    preparation: null,
    allergens: "mleko",
    image: "",
  },
  compositionDTO: {
    ingredientDTOS: [{name: "mleko"}],
    additionDTOS: [],
    flavourDTO: null,
  },
  nutritionalValueDTOS: [
    {
      nutritionalValueName: {
        group: {groupName: "Tłuszcz"},
        name: "Total",
      },
      quantity: 2,
      unit: {name: "g"},
      nrv: 0,
    },

  ],
  categoryDTO: {
    id: "dcb3f437-bc54-46f1-b683-b73a4c46f6fe",
    name: "Nabiał",
  },
  ratingDTOS: [
    {groupName: "Zastosowane procesy technologiczne", name: ": pasteryzowanie"},
    {groupName: "", name: "Bez laktozy"},
    {groupName: "Alergeny (może zawierać)", name: ": mleko i produkty pochodne"},
  ],
  nutritionalIndexDTOS: [
    {indexValue: 0, legend: null},
    {indexValue: 1, legend: "Źródło wapnia"},
    {indexValue: 2, legend: "Wysoka zawartość białka"},
  ],
  productIndexDTOS: [
    {indexName: "S", indexValue: 3},
    {indexName: "P", indexValue: 2},
    {indexName: "M", indexValue: 1},
    {indexName: "T", indexValue: 3},
  ],
};

const ScannedProduct: React.FC<ScannedProductProps> = ({scanned}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
      <>
        <div className="md:p-4 pr-4 pl-4 pb-4 w-full">
          <Message level={3} />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-9 gap-6 md:p-4 pr-4 pl-4 pb-4 mt-0">
          <div className="space-y-4 md:col-span-4">

            <Tile title="Nazwa produktu">
              <p className="font-light text-md">
                <span>Mleko Polskie spożywcze pasteryzowane 3,2% MLEKOVITA</span>
              </p>
            </Tile>
            <Tile title="Opis">
              <p className="font-light text-md">
                Mleko spożywcze pasteryzowane w wysokiej temperaturze. Zawartość tłuszczu 3,2%
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
                      <span>5900512983639</span>
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
                <div className="flex items-center space-x-4 px-4 sm:px-6">
                  <span className="text-2xl font-light">Indeks EN</span>
                </div>
                <div>
                  <ENScoreIndicator highlightedIndex={1}/>
                </div>

                <div className="flex items-center space-x-4 px-4 sm:px-6">
                  <span className=" text-2xl font-light">Indeks SUM</span>
                </div>
                <div>
                  <ScoreIndicator highlightedIndex={3}/>
                </div>

                <div className="flex items-center space-x-4 px-4 sm:px-6">
                  <span className=" text-2xl font-light">Indeks FF</span>
                </div>
                <div>
                  <ScoreIndicator highlightedIndex={3}/>
                </div>
              </div>
            </Tile>
            <Tile title="">
              <ul className="list-disc space-y-2">
                {Array.isArray(product.nutritionalIndexDTOS) ? product.nutritionalIndexDTOS.map((item, index) => (
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
                {product.ratingDTOS.map((item, index) => (
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
                  ...product.compositionDTO.ingredientDTOS.map((item) => item.name),
                  ...product.compositionDTO.additionDTOS.map((item) => item.name),
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
                  src="/assets/mleko.png"
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