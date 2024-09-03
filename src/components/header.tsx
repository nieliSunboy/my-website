import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <div className="bg-background/75 backdrop-blur border-b border-gray-200 dark:border-gray-800 -mb-px fixed top-0 z-[100] w-full">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl flex items-center gap-3 h-16">
        <div className="lg:flex-1 flex items-center gap-1.5">
          <Link
            aria-current="page"
            href="/home"
            className="router-link-active router-link-exact-active flex-shrink-0 font-bold text-xl text-gray-900 dark:text-white flex items-end gap-1.5"
            aria-label="Logo"
          >
            <div className="flex align-center gap-2">
              <Image
                src="/logo.png"
                alt="Vercel Logo"
                className="w-10 drop-shadow-md"
                width={50}
                height={24}
              />
              海创微联
              <span className="inline-flex items-center font-medium rounded-md text-xs px-1.5 py-0.5 bg-primary-50 dark:bg-primary-400 dark:bg-opacity-10 text-primary-500 dark:text-primary-400 ring-1 ring-inset ring-primary-500 dark:ring-primary-400 ring-opacity-25 dark:ring-opacity-25 mb-0.5">
                NEW
              </span>
            </div>
          </Link>
        </div>

        <ul className="items-center gap-x-8 hidden lg:flex">
          <li className="relative">
            <Link
              className="text-sm/6 font-semibold flex items-center gap-1 hover:text-primary"
              href="/market"
            >
              案例中心
            </Link>
          </li>
          <li className="relative">
            <a
              className="text-sm/6 font-semibold flex items-center gap-1 hover:text-primary"
              href="https://www.yuque.com/iot-fast/ksh?#"
            >
              文档教程
            </a>
            {/* <button
              type="button"
              className="text-sm/6 font-semibold flex items-center gap-1 hover:text-primary"
            >

              文档教程
            </button> */}
          </li>
          <li className="relative">
            <a
              className="text-sm/6 font-semibold flex items-center gap-1 hover:text-primary"
              href=""
            >
              服务定价
            </a>
          </li>
        </ul>

        <div className="flex items-center justify-end lg:flex-1 gap-1.5 ml-auto">
          <a
            className="focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0 font-medium rounded-full gap-x-2 px-3 py-2 shadow-sm text-white dark:text-gray-900 bg-gray-900 hover:bg-gray-800 disabled:bg-gray-900 dark:bg-white dark:hover:bg-gray-100 dark:disabled:bg-white focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400 items-center login-btn hidden lg:flex text-xs mt-1"
            href="https://ai.goviewlink.com/saas/login"
          >
            <span className="">免费试用</span>
            <span
              className="i-heroicons-arrow-right-20-solid flex-shrink-0 h-5 w-5"
              aria-hidden="true"
            ></span>
          </a>
          <div
            data-headlessui-state=""
            className="relative inline-flex text-left rtl:text-right"
          >
            <div
              id="headlessui-menu-button-nctlRmIk4j0-0"
              aria-haspopup="menu"
              aria-expanded="false"
              data-headlessui-state=""
              className="inline-flex w-full"
              role="button"
              data-n-ids='{"nctlRmIk4j0-0":"nctlRmIk4j0-0"}'
            >
              <img
                data-nuxt-img=""
                draggable="false"
                src="./GoView Pro - 官网_files/default-avatar.png"
                className="w-0 h-0 rounded-full ml-2 select-none shadow-md shadow-grey-500/50 cursor-pointer transition-all duration-300"
              />
            </div>
          </div>
          <button
            type="button"
            className="focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0 font-medium rounded-full text-sm gap-x-2 p-2 text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800 focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400 inline-flex items-center lg:hidden"
            aria-label="Open Menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="size-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
