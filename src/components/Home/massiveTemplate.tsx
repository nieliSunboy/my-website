import dynamic from "next/dynamic";
import Subscribe from "./massivePubSub";

function MassiveTemplate() {
  // explain: 因为是图片，使用动态管理地址遍历列表
  const arrImages = [
    "./massive/remote_image_clkk1vy920007t0rwbj2rr3ut.png",
    "./massive/charts-img-db_id_4rzu6dt423o00.png",
    "./massive/remote_image_clpgdc366022dnvf7sabejocu.png",
    "./massive/remote_image_clpjl58sh02nbnvf7x2qjcire.png",
    "./massive/charts-img-db_id_2be8vdvkwq8000.png",
    "./massive/charts-img-db_id_3fgerpcds48000.png",
  ];

  // explain: 这里使用动态管理 统计数据
  const jsonStatistics = {
    template: 99,
    assembly: 999,
  };

  // 动态导入组件，并指定其仅在客户端渲染
  const SlideImageCardList = dynamic(() => import("./slideImageCardList"), {
    ssr: false,
  });

  // 使用
  const pubsub = new Subscribe();

  return (
    <div className="content-box-bg py-2">
      <div className="py-24 sm:py-32 z-10 relative mt-28 px-0">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl gap-16 sm:gap-y-24 flex flex-col">
          <div className="relative h-[23rem]">
            <div className="text-center -mt-36 md:-mt-34 h">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 drop-shadow-md dark:text-white sm:text-5xl title-custom">
                海量模板素材 免费领取
              </h2>
              <p className="mt-6 text-lg/8 text-gray-600 dark:text-gray-300">
                数千款资源，开箱即用，从设计创作到对接并交付上线，完整的产研工作流仅需几个工作日。
              </p>
            </div>
            <div className="content-bg-right"></div>
            <div className="resource-bigcard shadow w-1/2 md:w-1/3">
              <div className="title">社区中心</div>
              <div className="title1 text-sm sm:text-md md:text-3xl text-nowrap">
                丰富资源
              </div>
              <div className="title2 text-sm sm:text-md md:text-3xl">
                精选模板与自定义组件
              </div>
              <div className="statistic-wrap">
                <div className="statistic-item text-nowrap pr-6">
                  <span>{jsonStatistics?.template}+</span>
                  <span>模板</span>
                </div>
                <div className="statistic-item text-nowrap">
                  <span>{jsonStatistics?.assembly}+</span>
                  <span>组件</span>
                </div>
              </div>

              <div className="btns">
                <button
                  type="button"
                  className="focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0 font-medium rounded-md text-sm gap-x-1.5 p-1.5 ring-1 ring-inset ring-current text-gray-500 dark:text-gray-400 hover:bg-gray-50 disabled:bg-transparent dark:hover:bg-gray-950 dark:disabled:bg-transparent focus-visible:ring-2 focus-visible:ring-gray-500 dark:focus-visible:ring-gray-400 inline-flex items-center"
                  onClick={() => {
                    pubsub.publish("scroll", "left");
                  }}
                >
                  <span
                    className="i-heroicons-chevron-left-16-solid flex-shrink-0 h-5 w-5"
                    aria-hidden="true"
                  ></span>
                </button>
                <button
                  type="button"
                  onClick={() => {
                    pubsub.publish("scroll", "right");
                  }}
                  className="focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0 font-medium rounded-md text-sm gap-x-1.5 p-1.5 ring-1 ring-inset ring-current text-gray-500 dark:text-gray-400 hover:bg-gray-50 disabled:bg-transparent dark:hover:bg-gray-950 dark:disabled:bg-transparent focus-visible:ring-2 focus-visible:ring-gray-500 dark:focus-visible:ring-gray-400 inline-flex items-center"
                >
                  <span
                    className="i-heroicons-chevron-right-16-solid flex-shrink-0 h-5 w-5"
                    aria-hidden="true"
                  ></span>
                </button>
              </div>
            </div>

            <SlideImageCardList
              list={arrImages}
              pubsub={pubsub}
            ></SlideImageCardList>
          </div>
        </div>
      </div>
    </div>
  );
}
export default MassiveTemplate;
