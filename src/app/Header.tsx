export const Header = ()=> {
  return (
      <header>
        <nav className="bg-white border-gray-200 lg:px-6 py-4 px-5 ">
          <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
            <a href="/" className="flex items-center">
              <img src="/assets/logo.png" className="mr-3 h-20 sm:h-20"
                   alt="Logo"/>
              <span
                  className="self-center text-4xl font-light whitespace-nowrap ">SuperFood</span>
            </a>
            <div className="flex items-center lg:order-2">


            </div>
            <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
                 id="mobile-menu-2">
              <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                <li>
                  <a href="#"
                     className="block py-2 pr-4 pl-3 text-primary-600 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0"
                     aria-current="page">Strona Główna</a>
                </li>
                <li>
                  <a href="#"
                     className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 ">Katalog</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
  )
}