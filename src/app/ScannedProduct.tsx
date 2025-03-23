import React, {useState} from "react";
import ENScoreIndicator from "@/components/indexes/ENScoreIndicator";
import ScoreIndicator from "@/components/indexes/ScoreIndicator";

interface ScannedProductProps {
  scanned: string;
}


const ProductInfo = {
  productName:"Product 1",
  productDescription:"Product 1 description",
  EAN:"123456789111",
  country:"Poland",
  package:"Package 1",
  composition: "mleko, sól, E509, E330",
  parameters: "VEGE, bez glutenu, bez laktozy, bez GMO"
}

const ScannedProduct: React.FC<ScannedProductProps> = ({ scanned }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
      <div className="grid grid-cols-1 md:grid-cols-9 gap-6 p-4">
        <div className="space-y-4 md:col-span-4">
          <section>
            <div className="p-4 border-2 border-gray-100 rounded-lg shadow-md">
              <h1 className="text-2xl font-medium text-black mb-2">Nazwa produktu</h1>
              <p className="font-light text-md"><span>Mleko Polskie spożywcze pasteryzowane 3,2% MLEKOVITA</span></p>


            </div>
          </section>
          <section>
            <div className="p-4 rounded-lg shadow-md border-2 border-gray-100">
              <h1 className="text-2xl font-medium text-black mb-2">Opis</h1>
              <p className="font-light text-md">
                Mleko spożywcze pasteryzowane w wysokiej temperaturze. Zawartość tłuszczu 3,2%
              </p>

              {isExpanded && (
                  <div className="mt-2 text-gray-700">
                    <p className="flex items-center space-x-2">
                      <span>Kraj</span>
                      <img src={"/right-arrow.png"} alt="Arrow" className="w-4 h-4 object-contain" />
                      <span>{ProductInfo.country}</span>
                    </p>
                    <p className="flex items-center space-x-2">
                      <span>Opakowanie</span>
                      <img src={"/right-arrow.png"} alt="Arrow" className="w-4 h-4 object-contain" />
                      <span>{ProductInfo.package}</span>
                    </p>
                    <p className="flex items-center space-x-2">
                      <span>Kod EAN</span>
                      <img src={"/right-arrow.png"} alt="Arrow" className="w-4 h-4 object-contain" />
                      <span>{ProductInfo.EAN}</span>
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
                  <path d="M12 17.414 3.293 8.707l1.414-1.414L12 14.586l7.293-7.293 1.414 1.414L12 17.414z"/>
                </svg>
              </button>
            </div>
          </section>

          <section>
            <div className="p-4 border-2 border-gray-100 rounded-lg shadow-md overflow-hidden">
              {/*<h1 className="text-2xl font-medium text-black mb-2">Indeksy</h1>*/}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center w-full">

                <div className="flex items-center space-x-4 px-4 sm:px-6">
                  <span className="text-base sm:text-xl font-light">Indeks EN</span>
                </div>
                <div>
                  <ENScoreIndicator highlightedIndex={1} />
                </div>

                <div className="flex items-center space-x-4 px-4 sm:px-6">
                  <span className="text-base sm:text-xl font-light">Indeks SUM</span>
                </div>
                <div>
                  <ScoreIndicator highlightedIndex={3} />
                </div>

                <div className="flex items-center space-x-4 px-4 sm:px-6">
                  <span className="text-base sm:text-xl font-light">Indeks FF</span>
                </div>
                <div>
                  <ScoreIndicator highlightedIndex={3} />
                </div>

              </div>
            </div>
          </section>

          <section>
            <div className="p-4 border-2 border-gray-100 rounded-lg shadow-md flex flex-col gap-4">
              <div className="font-light text-xl flex items-center space-x-4 pl-6">
              <ul className="list-disc  space-y-2">
                {ProductInfo.parameters.split(", ").map((item, index) => (
                    <li key={index} className="font-light text-xl flex items-center space-x-4">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                        <path fillRule="evenodd" d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z" clipRule="evenodd" />
                      </svg>
                      <span>{item}</span>
                    </li>
                ))}
              </ul>
              </div>
            </div>
          </section>


          <section>
            <div className="p-4 border-2 border-gray-100 rounded-lg shadow-md">
              <h1 className="text-2xl text-black mb-2">Skład</h1>
              <ul className="list-disc pl-8 space-y-2">
                {ProductInfo.composition.split(", ").map((item, index) => (
                    <li key={index} className="font-light text-xl flex items-center space-x-4">
                      <img src={"/right-arrow.png"} alt="Arrow" className="w-4 h-4 object-contain" />
                      <span>{item}</span>
                    </li>
                ))}
              </ul>
            </div>
          </section>

        </div>

        <div className="p-4 border-2 border-gray-100 rounded-lg shadow-md md:col-span-4">
          <h1 className="text-2xl text-black">Tabela wartości odżywczych</h1>

          <div className="overflow-x-auto">
            <table className="min-w-full table-auto">
              <thead>
              <tr className="bg-gray-200">
                <th className="px-4 py-2 text-left"></th>
                <th className="px-4 py-2 text-left">Wartość na 100g</th>
                <th className="px-4 py-2 text-left"></th>
                <th className="px-4 py-2 text-left">% RWS</th>
              </tr>
              </thead>
              <tbody>
              <tr className="border-t">
                <td className="px-4 py-2">Kalorie</td>
                <td className="px-4 py-2">250</td>
                <td className="px-4 py-2">kcal</td>
                <td className="px-4 py-2"></td>
              </tr>
              <tr className="bg-gray-50 border-t">
                <td className="px-4 py-2">Białko</td>
                <td className="px-4 py-2">12</td>
                <td className="px-4 py-2">g</td>
                <td className="px-4 py-2"></td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2">Tłuszcze</td>
                <td className="px-4 py-2">10</td>
                <td className="px-4 py-2">g</td>
                <td className="px-4 py-2"></td>
              </tr>
              <tr className="bg-gray-50 border-t">
                <td className="px-4 py-2">Węglowodany</td>
                <td className="px-4 py-2">30</td>
                <td className="px-4 py-2">g</td>
                <td className="px-4 py-2"></td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2">Błonnik</td>
                <td className="px-4 py-2">5</td>
                <td className="px-4 py-2">g</td>
                <td className="px-4 py-2"></td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>

      </div>
  );
};

export default ScannedProduct;