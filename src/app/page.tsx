import Link from "next/link";

export default function Home() {
  return (
      <div
          className="bg-gray-100 grid grid-rows-[20px_1fr_20px]  min-h-screen p-8 pb-20 gap-16 font-[family-name:var(--font-geist-sans)]">

        <main
            className="flex flex-col sm:flex-row-reverse gap-[32px] row-start-2 items-center sm:items-start">

          <section className=" p-4 relative bg-white/80 rounded-2xl -mt-4 pr-0">

            <div className="">
              <h3 className="text-3xl mb-2 font-light">Zeskanuj kod EAN, aby wyświetlić szczegółowe
                informacje</h3>
              <div className="mt-6 relative flex items-center bottom-0 right-0">
                <img
                    src={"/assets/arrows.png"}
                    alt="Arrow"
                    className="object-contain h-50 rotate-z-90 mb-8"
                />
                <Link href={"/scanner"} className="pt-28 pr-2">
                  <div
                      className="flex items-center justify-center rounded-full aspect-square bg-white/80 shadow-2xl p-6 hover:-translate-y-2 ease-out cursor-pointer transition-transform">
                    <img
                        src={"/assets/barcode-scan.png"}
                        alt="Barcode Scan"
                        className="w-16 object-contain"
                    />
                  </div>
                </Link>
              </div>

            </div>
          </section>
            <section>
              <div className="w-3/5 mx-auto">
                <h1 className="text-2xl font-semibold mb-4">Znak F-Food</h1>

                <p className="text-lg text-gray-700">
                  Znak certyfikujący Unii Europejskiej dla żywności o szczególnej wartości odżywczej
                  F-Food
                </p>


              </div>
          </section>


        </main>
      </div>
  );
}
