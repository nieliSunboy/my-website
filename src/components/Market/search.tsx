import { useEffect, useState } from "react";

function Search({ onchange }: any) {
  const [keyword, setKeyword] = useState<string>("");
  const [HotKeys, setHotKeys] = useState<string[]>([]);

  useEffect(() => {
    // explain: 关键词从服务端获取
    setHotKeys(["智慧城市", "3D地图", "智慧园区", "地图可视化"]);
  }, []);
  return (
    <div
      className="flex flex-col justify-center h-auto px-12  sm:px-[25%]"
      // style={{
      //   backgroundImage:
      //     "url(https://www.shanhaibi.com/image/market-list/banner.png)",
      // }}
    >
      <h2 className="my-10 text-2xl  text-center">丰富的3D设计资源</h2>
      <div className="flex flex-row w-full sm:max-w-[80%] h-12 bg-white rounded-sm p-1 mb-3 mx-auto">
        <input
          className="border-0 mr-3 h-10 w-full pl-2 outline-0"
          placeholder="请输入"
          value={keyword}
        ></input>
        <button
          className="w-[200px] h-10 bg-primary-500 hover:bg-primary-600 text-white border-0 rounded-sm"
          onClick={() => {
            if (onchange) {
              onchange(keyword);
            }
          }}
        >
          搜索
        </button>
      </div>
      <div className="flex flex-row w-auto mx-auto mb-8 text-white">
        {Array.isArray(HotKeys) &&
          HotKeys.map((hotStr, idx) => {
            return (
              <div
                key={idx}
                className="px-3 cursor-default py-2 h-8 bg-transparent text-sm  hover:bg-primary-500  text-gray-400 hover:text-white rounded-sm"
                onClick={() => {
                  setKeyword(hotStr);
                }}
              >
                {hotStr}
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Search;
