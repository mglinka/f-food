import React from "react";
import ENScoreIndicator from "@/components/indexes/ENScoreIndicator";
import ScoreIndicator from "@/components/indexes/ScoreIndicator";

interface ScannedProductProps {
  scanned: string;
}


const ProductInfo = {
  productName:"Product 1",
  productDescription:"Product 1 description",
}

const ScannedProduct: React.FC<ScannedProductProps> = ({ scanned }) => {
  return (
      <div className="grid grid-cols-1 md:grid-cols-9 gap-6 p-4">
        <div className="space-y-4 md:col-span-4">
          <section>
            <div className="p-4 bg-gray-100 rounded-lg shadow-md">
              <h1 className="text-xl font-medium text-black mb-2">Nazwa produktu</h1>
              <p className="font-light text-lg"><span>Mleko Polskie spożywcze pasteryzowane 3,2% MLEKOVITA</span></p>


            </div>
          </section>
          <section>
            <div className="p-4 bg-gray-100 rounded-lg shadow-md">

              <h1 className="text-xl font-medium text-black mb-2">Opis</h1>
              <p className="font-light text-lg"><span>Mleko spożywcze pasteryzowane w wysokiej temperaturze. Zawartość tłuszczu 3,2%</span></p>
            </div>
          </section>

          <section>
            <div className="p-4 bg-gray-100 rounded-lg shadow-md overflow-hidden">
              <h1 className="text-xl font-medium text-black mb-2">Indeksy</h1>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center w-full">

                <div className="flex items-center space-x-4 px-4 sm:px-6">
                  <img src={"/right-arrow.png"} alt="Arrow" className="w-4 h-4 sm:w-6 sm:h-6 object-contain" />
                  <span className="text-base sm:text-lg font-light">Indeks EN</span>
                </div>
                <div>
                  <ENScoreIndicator highlightedIndex={3} />
                </div>

                <div className="flex items-center space-x-4 px-4 sm:px-6">
                  <img src={"/right-arrow.png"} alt="Arrow" className="w-4 h-4 sm:w-6 sm:h-6 object-contain" />
                  <span className="text-base sm:text-lg font-light">Indeks SUM</span>
                </div>
                <div>
                  <ScoreIndicator highlightedIndex={3} />
                </div>

                <div className="flex items-center space-x-4 px-4 sm:px-6">
                  <img src={"/right-arrow.png"} alt="Arrow" className="w-4 h-4 sm:w-6 sm:h-6 object-contain" />
                  <span className="text-base sm:text-lg font-light">Indeks FF</span>
                </div>
                <div>
                  <ScoreIndicator highlightedIndex={3} />
                </div>

              </div>
            </div>
          </section>

          <section>
            <div className="p-4 bg-gray-100 rounded-lg shadow-md">
              <h1 className="text-xl font-medium text-black mb-2">Parametry</h1>
              <div className="font-light text-lg flex items-center space-x-4 pl-6">
                <img
                    src={"/right-arrow.png"}
                    alt="Arrow"
                    className="w-4 h-4 object-contain"
                />
                <span>Bez gutenu</span>
              </div>
              <div className="font-light text-lg flex items-center space-x-4 pl-6">
                <img
                    src={"/right-arrow.png"}
                    alt="Arrow"
                    className="w-4 h-4 object-contain"
                />
                <span>Bez laktozy</span>
              </div>
            </div>
          </section>

          <section>
            <div className="p-4 bg-gray-100 rounded-lg shadow-md">
              <h1 className="text-xl text-black">Skład</h1>
              <div className="font-light text-lg flex items-center space-x-4 pl-6">
                <img
                    src={"/right-arrow.png"}
                    alt="Arrow"
                    className="w-4 h-4 object-contain"
                />
                <span>Bez laktozy</span>
              </div>
              <div className="font-light text-lg flex items-center space-x-4 pl-6">
                <img
                    src={"/right-arrow.png"}
                    alt="Arrow"
                    className="w-4 h-4 object-contain"
                />
                <span>Bez laktozy</span>
              </div>

            </div>
          </section>
        </div>

        <div className="p-4 bg-gray-100 rounded-lg shadow-md md:col-span-4">
          <h1 className="text-xl text-black">Tabela wartości odżywczych</h1>

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