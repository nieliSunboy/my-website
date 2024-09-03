import { useEffect, useRef } from "react";

function CardList({ dataList, onchange }: any) {
  const listRef = useRef<HTMLUListElement>(null); // 列表的ref

  if (dataList.length <= 0) {
    return <div className="mt-12 text-center">暂无数据</div>;
  }

  // 监听滚动事件
  // useEffect(() => {
  //   const handleScroll = (event: any) => {
  //     // if (!listRef.current) return;
  //     console.log(event?.target);
  //     // 当滚动到底部时触发
  //     // if (scrollTop + clientHeight >= scrollHeight) {
  //     //   if (onchange) onchange();
  //     // }
  //   };

  //   // const listElement = listRef.current;

  //   document.addEventListener("scroll", handleScroll);

  //   return () => {
  //     document.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  return (
    <div>
      <div
        // ref={listRef}
        className="grid 2xl:grid-cols-6 xl:grid-cols-5 lg:grid-cols-4  md:grid-cols-3 sm:grid-cols-2 gap-4 font-mono text-white text-sm text-center font-bold leading-6 bg-stripes-fuchsia rounded-lg"
      >
        {Array.isArray(dataList) &&
          dataList.map((item, idx) => {
            return (
              <div
                className="rounded-sm bg-white sm:aspect-video hover:-translate-y-2"
                key={item?.id}
              >
                <img src={item?.image} />
                <h1 className="text-slate-950 text-md hover:text-primary-600 text-left px-2 pb-2 pt-3">
                  {item?.name}
                </h1>
                <div className="text-xs text-gray-400 font-thin text-left px-2 pb-2">
                  {item?.desc}
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default CardList;
