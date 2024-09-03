import Image from "next/image";

/**
 *
{
  title: '自定义组件',
  desc: '任何会员都可高度定制化组件，无需支付其它费用。集成 Vue 在线编辑器开发，一行代码即可触发事件联动，满足您的定制化业务需求',
  items: [
    {
      title: '自由定制',
      icon: '',
      desc: '可以与内置组件交互联动、数据请求，没有任何束缚'
    },
    {
      title: '高度可用',
      icon: '',
      desc: '支持最新 Vue Feature、ESM 依赖引入，在线编辑、TS 校验',
    },
    {
      title: '资源社区', 
      icon: '',
      desc: '上千款自定义组件资源，开放的社区生态，一键引入，即拿即用'
    },
  ]
}
 */

function OverviewItem({ values, isLast }: any) {
  return (
    <div
      className="py-24 sm:py-32 z-10 relative -mb-24 mt-[-5%]"
      data-v-0f524006=""
    >
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl gap-16 sm:gap-y-24 grid lg:grid-cols-2 lg:items-center">
        <div className={isLast ? "lg:order-last" : ""}>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl lg:text-5xl">
            {values?.title}
          </h2>
          <p className="mt-6 text-lg/8 text-gray-600 dark:text-gray-300">
            {values?.desc}
          </p>
          <dl className="mt-6 leading-7 space-y-4">
            {values?.items &&
              values?.items.map((item: any, idx: number) => {
                return (
                  <div className="relative pl-8" key={idx}>
                    <dt className="font-semibold text-gray-900 dark:text-white">
                      <span
                        className="i-heroicons-chart-bar absolute left-0 top-1 h-5 w-5 text-primary"
                        aria-hidden="true"
                      ></span>
                      <span>{item?.title}</span>
                    </dt>
                    <dd className="text-gray-500 dark:text-gray-400 leading-6">
                      {item?.desc}
                    </dd>
                  </div>
                );
              })}

            <div className="relative pl-8">
              <dt className="font-semibold text-gray-900 dark:text-white">
                <span
                  className="i-heroicons-check absolute left-0 top-1 h-5 w-5 text-primary"
                  aria-hidden="true"
                ></span>
                <span>高度可用</span>
              </dt>
              <dd className="text-gray-500 dark:text-gray-400 leading-6">
                支持最新 Vue Feature、ESM 依赖引入，在线编辑、TS 校验
              </dd>
            </div>
            <div className="relative pl-8">
              <dt className="font-semibold text-gray-900 dark:text-white">
                <span
                  className="i-heroicons-globe-alt absolute left-0 top-1 h-5 w-5 text-primary"
                  aria-hidden="true"
                ></span>
                <span>资源社区</span>
              </dt>
              <dd className="text-gray-500 dark:text-gray-400 leading-6">
                上千款自定义组件资源，开放的社区生态，一键引入，即拿即用
              </dd>
            </div>
          </dl>
        </div>
        <div
          className="current-box-shadow aspect-w-16 aspect-h-9 rounded-lg relative overflow-hidden hover:scale-110 transition-all duration-300 border-8 border-white rounded-lg"
          data-v-0f524006=""
          data-v-c1e3639b=""
        >
          <Image
            alt=""
            src={values?.image}
            className="w-full h-full object-fill rounded-lg"
            width={1001}
            height={1001}
          />
        </div>
      </div>
    </div>
  );
}

export default OverviewItem;
