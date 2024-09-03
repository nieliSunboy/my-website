import dynamic from "next/dynamic";
import "./smooth.css";
import useBoxTabs from "./hooks/useBoxTabs";
const WelcomeSmooth: React.FC = () => {
  const { isActive, onTabClick, aniIsLoaded, setAniIsLoaded } = useBoxTabs({
    defaultValue: 0,
  });

  // 动态导入组件，并指定其仅在客户端渲染
  const ScrollAnimationComponent = dynamic(
    () => import("./scrollAnimationComponent"),
    {
      ssr: false,
    }
  );

  const arrVideo = [
    "https://goviewpro.oss-cn-hangzhou.aliyuncs.com/saas/home-design.mp4",
    "https://goviewpro.oss-cn-hangzhou.aliyuncs.com/saas/home-community.mp4",
    "https://goviewpro.oss-cn-hangzhou.aliyuncs.com/saas/home-delivery.mp4",
  ];

  const renderScrollAnimation = () => {
    if (!aniIsLoaded) {
      return (
        <ScrollAnimationComponent
          onLoad={() => setAniIsLoaded(true)}
          onTabActiveChange={(index: number) => {
            onTabClick(index);
          }}
        ></ScrollAnimationComponent>
      );
    }
  };

  return (
    <div className="smooth-placeholder max-[1200px]:hidden">
      {renderScrollAnimation()}
      <div
        className="ScrollSmoother-wrapper"
        style={{
          inset: "0px",
          width: "100%",
          height: "100%",
        }}
      >
        <div
          id="smooth-content"
          style={{
            width: "100%",
            overflow: "visible",
          }}
        >
          <div className="pin-spacer">
            <div
              className="smooth--box box-first z-50"
              data-speed="1.5"
              data-lag="0"
            >
              <img className="smooth--bg" src="./home-bg.jpg" alt="" />

              <div className="box website-slogan" id={"website-slogan"}>
                <div className="slogan-title">灵活驱动，无限可能</div>
                <div className="des text-slate-800">
                  <span className="">
                    区别传统的平台工具，通过「自定义组件 +
                    灵活函数」，解决您的各类定制化需求
                  </span>
                  <span className="text-sm mt-3">
                    一键内网部署 | 海量素材模板 | 自定义组件 | 设计稿导入 |
                    动画特效
                  </span>

                  <button
                    type="button"
                    className="
                      focus:outline-none
                      text-white
                      disabled:cursor-not-allowed
                      disabled:opacity-75
                      flex-shrink-0 rounded-md
                      gap-x-2 px-3 py-2
                      dark:text-gray-900 bg-primary-500
                      hover:bg-primary-600 disabled:bg-primary-500
                      dark:bg-primary-400 dark:hover:bg-primary-500
                      dark:disabled:bg-primary-400 focus-visible:outline
                      focus-visible:outline-2 focus-visible:outline-offset-2
                      focus-visible:outline-primary-500 dark:focus-visible:outline-primary-400
                      w-[244px] h-[54px] text-xl font-normal flex items-center
                      justify-center mt-14 mb-6 shadow-md hover:shadow-lg
                      "
                  >
                    免费试用
                  </button>
                </div>
              </div>

              <div className="box box-window border-8 border-slate-50 rounded-lg bg-white">
                {Array.isArray(arrVideo) &&
                  arrVideo.map((itemVideo, idx) => {
                    return (
                      <div
                        key={idx}
                        className={`box-window-item rounded-lg overflow-hidden ${
                          isActive(idx) ? "box-window-item-active" : ""
                        }`}
                      >
                        <video
                          loop={true}
                          autoPlay
                          muted={true}
                          playsInline
                          src={itemVideo}
                        ></video>
                      </div>
                    );
                  })}
              </div>
              <div
                className="box slogan-wrap"
                style={{
                  visibility: "hidden",
                  opacity: "0.9",
                  marginTop: "0px",
                }}
              >
                <div className="slogan-title">灵活驱动，无限可能</div>
                <div className="des text-slate-800">
                  <span>
                    区别传统的平台工具，通过「自定义组件 +
                    灵活函数」，解决您的各类定制化需求
                  </span>
                  <span className="text-sm mt-3">
                    一键内网部署 | 海量素材模板 | 自定义组件 | 设计稿导入 |
                    动画特效{" "}
                  </span>
                  <button
                    type="button"
                    className="focus:outline-none disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0 rounded-md gap-x-2 px-3 py-2 text-white dark:text-gray-900 bg-primary-500 hover:bg-primary-600 disabled:bg-primary-500 dark:bg-primary-400 dark:hover:bg-primary-500 dark:disabled:bg-primary-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500 dark:focus-visible:outline-primary-400 w-[244px] h-[54px] text-xl font-normal flex items-center justify-center mt-14 mb-6 shadow-md hover:shadow-lg"
                  >
                    免费试用
                  </button>
                </div>
              </div>
              <div
                className="box box-tabs"
                style={{
                  opacity: 0,
                }}
              >
                <div
                  className={`box-tabs-item ${
                    isActive(0) ? "box-tabs-item-active text-black" : ""
                  }`}
                  onClick={() => {
                    onTabClick(0);
                  }}
                >
                  <img
                    src="./design.jpg"
                    className={`box-tabs-item-icon -ml-2`}
                  />
                  <span>设计</span>
                </div>

                <div
                  className={`box-tabs-item ${
                    isActive(1) ? "box-tabs-item-active text-black" : ""
                  }`}
                  onClick={() => {
                    onTabClick(1);
                  }}
                >
                  <img
                    src="./community.jpg"
                    className="box-tabs-item-icon -ml-2"
                  />
                  <span>社区</span>
                </div>

                <div
                  className={`box-tabs-item ${
                    isActive(2) ? "box-tabs-item-active text-black" : ""
                  }`}
                  onClick={() => {
                    onTabClick(2);
                  }}
                >
                  <img
                    src="./delivery.jpg"
                    className="box-tabs-item-icon -ml-2"
                  />
                  <span>交付</span>
                </div>

                <div className="box-tabs-des text-slate-500">
                  <div className="box-tabs-des-title text-black">
                    一键内网部署
                  </div>
                  <div className="box-tabs-des-content">
                    低代码数据对接，灵活部署，交付及维护成本降低 95%
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeSmooth;
