function Cooperative() {
  // explain: 数据中第一个元素(Array) 是第一行数据， Array 中子元素需要填入图片地址即可
  const arrItems = [
    [
      "./chandao.png",
      "./chandao.png",
      "./chandao.png",
      "./chandao.png",
      "./chandao.png",
      "./chandao.png",
      "./chandao.png",
      "./chandao.png",
      "./chandao.png",
      "./chandao.png",
      "./chandao.png",
      "./chandao.png",
      "./chandao.png",
      "./chandao.png",
      "./chandao.png",
      "./chandao.png",
      "./chandao.png",
      "./chandao.png",
    ],
    [
      "./chandao.png",
      "./chandao.png",
      "./chandao.png",
      "./chandao.png",
      "./chandao.png",
      "./chandao.png",
      "./chandao.png",
      "./chandao.png",
      "./chandao.png",
      "./chandao.png",
      "./chandao.png",
      "./chandao.png",
      "./chandao.png",
      "./chandao.png",
      "./chandao.png",
      "./chandao.png",
      "./chandao.png",
      "./chandao.png",
    ],
    [
      "./chandao.png",
      "./chandao.png",
      "./chandao.png",
      "./chandao.png",
      "./chandao.png",
      "./chandao.png",
      "./chandao.png",
      "./chandao.png",
      "./chandao.png",
      "./chandao.png",
      "./chandao.png",
      "./chandao.png",
      "./chandao.png",
      "./chandao.png",
      "./chandao.png",
      "./chandao.png",
      "./chandao.png",
      "./chandao.png",
    ],
  ];

  return (
    <div className="mb-16 pt-3 relative overflow-hidden">
      <div className="logos-left invisible md:visible"></div>
      <div
        className="logos-right invisible md:visible"
        data-v-ad5c73a9=""
      ></div>
      {/** row 1 */}
      {arrItems.map((arrChild, idx) => {
        return (
          <div
            key={"row-" + idx}
            id={"row-" + idx}
            className={`flex items-center justify-center gap-6 mb-6 even-index ${
              idx % 2 === 0 ? "end-index" : "old-index"
            }`}
            data-v-ad5c73a9=""
          >
            {arrChild.map((imgUrl, cIdx) => {
              return (
                <div
                  key={"child-item-" + cIdx}
                  className="item-shadow flex items-center p-4 gap-3 rounded-xl w-44 h-16"
                  data-v-ad5c73a9=""
                >
                  <img
                    src={imgUrl}
                    className="rounded-lg overflow-hidden max-w-44 max-h-16"
                  />
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}

export default Cooperative;
