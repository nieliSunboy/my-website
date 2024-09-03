import dynamic from "next/dynamic";

function Goview() {
  // 动态导入组件，并指定其仅在客户端渲染
  const LinghtDarkConvert = dynamic(() => import("./linghtDarkConvert"), {
    ssr: false,
  });

  return (
    <div className="goview-light-dark-change overflow-hidden relative">
      <div className="right-bg hidden xl:block"></div>
      <div className="content-box my-20 py-24 x l:py-8">
        <div className="left">
          <h1 className="text-5xl mt-3 font-semibold">
            <span className="text-4xl font-semibold text-sky-500">
              灵活驱动的
            </span>
            低代码平台
          </h1>
          <h2
            className="mt-6 text-xl text-gray-600"
            style={{
              maxWidth: "520px",
            }}
          >
            区别传统的平台工具，通过「自定义组件 +
            灵活函数」，解决您的各类定制化需求
          </h2>
          <div className="flex gap-4 mt-3 items-center">
            <button
              type="button"
              className="focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0 font-medium rounded-md text-base gap-x-2.5 px-6 py-3 shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 text-gray-900 dark:text-white bg-white hover:bg-gray-50 disabled:bg-white dark:bg-gray-900 dark:hover:bg-gray-800/50 dark:disabled:bg-gray-900 focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400 inline-flex items-center drop-shadow-sm"
            >
              立即使用
            </button>
            <button
              type="button"
              className="focus:outline-none disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0 font-medium rounded-md text-base gap-x-2.5 px-6 py-3 shadow-sm text-white dark:text-gray-900 bg-primary-500 hover:bg-primary-600 disabled:bg-primary-500 dark:bg-primary-400 dark:hover:bg-primary-500 dark:disabled:bg-primary-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500 dark:focus-visible:outline-primary-400 inline-flex items-center drop-shadow-lg"
            >
              咨询企业服务
            </button>
          </div>
        </div>
        <div className="right hidden xl:flex">
          <LinghtDarkConvert
            drakImage="./dark-demo.png"
            lightImage="./light-demo.png"
            defautlWidth={80}
          ></LinghtDarkConvert>
        </div>
      </div>
    </div>
  );
}

export default Goview;
