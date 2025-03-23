import React from "react";

interface ScannedProductProps {
  scanned: string;
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
            <div className="p-4 bg-gray-100 rounded-lg shadow-md">
              <h1 className="text-xl font-medium text-black mb-2">Indeksy</h1>
              <p className="text-lg font-light">Indeks EN</p>
              <p className="text-lg font-light">Indeks SUM</p>
              <p className="text-lg font-light">Indeks FF</p>
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
          <h1 className="font-medium mb-4">Tabela wartości odżywczych</h1>

          <div className="overflow-x-auto">
            <table className="min-w-full table-auto">
              <thead>
              <tr className="bg-gray-200">
                <th className="px-4 py-2 text-left">Składnik</th>
                <th className="px-4 py-2 text-left">Wartość na 100g</th>
                <th className="px-4 py-2 text-left">Wartość na porcję</th>
              </tr>
              </thead>
              <tbody>
              <tr className="border-t">
                <td className="px-4 py-2">Kalorie</td>
                <td className="px-4 py-2">250 kcal</td>
                <td className="px-4 py-2">50 kcal</td>
              </tr>
              <tr className="bg-gray-50 border-t">
                <td className="px-4 py-2">Białko</td>
                <td className="px-4 py-2">12g</td>
                <td className="px-4 py-2">2.4g</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2">Tłuszcze</td>
                <td className="px-4 py-2">10g</td>
                <td className="px-4 py-2">2g</td>
              </tr>
              <tr className="bg-gray-50 border-t">
                <td className="px-4 py-2">Węglowodany</td>
                <td className="px-4 py-2">30g</td>
                <td className="px-4 py-2">6g</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2">Błonnik</td>
                <td className="px-4 py-2">5g</td>
                <td className="px-4 py-2">1g</td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
  );
};

export default ScannedProduct;