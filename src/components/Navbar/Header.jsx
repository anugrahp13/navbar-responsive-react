import { useState } from "react"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  // console.log(isMenuOpen)

  return (
    <>
      <header className="bg-black absolute top-0 left-0 w-full flex items-center z-10">
        <div className="container flex justify-between mx-auto px-4 lg:max-w-7xl">
          <div className="flex items-center order-1">
            <a href="/" className="p-1 font-semibold text-lg text-slate-900 py-3 dark:text-white">
              AP<span className="-ml-0 text-primary dark:text-teal-200">.</span>
            </a>
          </div>
          <nav className="flex flex-row gap-4 items-center order-2">
            <button onClick={toggleMenu} className="order-2 text-slate-800 text-lg block items-center md:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 lg:h-6 lg:w-6 scale-90 text-slate-800 dark:text-white" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12" />
              </svg>
            </button>
            <a href="/" className="hidden md:block lg:inline-flex items-center gap-1 px-3 py-2 text-sm font-medium text-slate-500 active:text-slate-800 hover:text-slate-800 dark:text-white hover:dark:text-teal-300">Home</a>
            <a href="/projects" className="hidden md:block lg:inline-flex items-center gap-1 px-3 py-2 text-sm font-medium text-slate-500 active:text-slate-800 hover:text-slate-800 dark:text-white hover:dark:text-teal-300">Projects</a>
            <a href="/about" className="hidden md:block lg:inline-flex items-center gap-1 px-3 py-2 text-sm font-medium text-slate-500 active:text-slate-800 hover:text-slate-800 dark:text-white hover:dark:text-teal-300">About</a>
            <a href="/contact" className="hidden md:block lg:inline-flex items-center gap-1 px-3 py-2 text-sm font-medium text-slate-500 active:text-slate-800 hover:text-slate-800 dark:text-white hover:dark:text-teal-300">Contact</a>
          </nav>
        </div>
      </header>

      {/* Sidebar Menu Start */}
      {isMenuOpen ? (
        <div className="fixed left-0 top-0 bg-black bg-opacity-50 w-screen justify-center items-center lg:hidden z-50">
          <div className="p-4 bg-white text-gray-100 text-xl text-center w-3/4 h-screen overflow-y-auto font-semibold rounded-tr-xl rounded-br-lg top-0 bottom-0 lg:left-0 dark:bg-dark">
            <div className="px-5 mt-1 flex items-center justify-between">
              <a href="/" className="font-semibold text-lg text-primary py-3 dark:text-white">
                Anugrah Prastyo<span className="-ml-0 text-slate-800 dark:text-teal-200">.</span>
              </a>
              <button onClick={toggleMenu}>
                <svg xmlns="http://www.w3.org/2000/svg" id="close" className="h-8 w-8 scale-75 cursor-pointer text-dark dark:text-white" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <hr className="my-2 text-gray-600"></hr>
            <nav className="my-4">
              <a href="/" className="p-2.5 flex items-center text-[15px] rounded-lg px-4 hover:bg-slate-400/25 text-slate-800 dark:text-white">Home</a>
              <a href="/projects" className="p-2.5 flex items-center text-[15px] rounded-lg px-4 hover:bg-slate-400/25 text-slate-800 dark:text-white">Projects</a>
              <a href="/about" className="p-2.5 flex items-center text-[15px] rounded-lg px-4 hover:bg-slate-400/25 text-slate-800 dark:text-white">About</a>
              <a href="/contact" className="p-2.5 flex items-center text-[15px] rounded-lg px-4 hover:bg-slate-400/25 text-slate-800 dark:text-white">Contact</a>
            </nav>
            <hr className="my-2 text-gray-600"></hr>
            <div className="p-2.5 px-4 mt-auto">
              <div className="flex flex-wrap items-center gap-4 py-3">
                <a href="https://github.com/anugrahp13" target="_blank" className="w-9 h-9 rounded-full flex justify-center items-center border border-slate-300 text-slate-300 hover:border-primary hover:text-white hover:bg-primary dark:border-white hover:dark:border-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" stroke-width="2" fill="currentColor"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" /></svg>
                </a>
                <a href="https://www.linkedin.com/in/anugrah-prastyo/" target="_blank" className="w-9 h-9 rounded-full flex justify-center items-center border border-slate-300 text-slate-300 hover:border-primary hover:text-white hover:bg-primary dark:border-white hover:dark:border-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 448 512" stroke-width="2" fill="currentColor"><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" /></svg>
                </a>
              </div>
              <p className="text-left font-light text-sm text-slate-500 dark:text-white">© 2024 - Developed by <span className="hover:text-primary font-bold">Anugrah Prastyo</span>.</p>
            </div>
          </div>
        </div>
      ) : null}
    </>
  )
}

export default Header
