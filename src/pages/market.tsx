import Layout from "@/components/layout";
import React, { useEffect, useState } from "react";

import dynamic from "next/dynamic";

const Market: React.FC = ({ Component }: any) => {
  const [dataList, setDataList] = useState<any[]>([]);

  // 动态导入组件，并指定其仅在客户端渲染
  const Search = dynamic(() => import("@/components/Market/search"), {
    ssr: false,
  });
  const CardList = dynamic(() => import("@/components/Market/cardList"), {
    ssr: false,
  });

  // explain: 使用后端查询数据
  const searchTableList = () => {};

  // mock data
  const mockInsertData = () => {
    const list = [];
    for (let index = 0; index < 10; index++) {
      list.push({
        name: `模拟数据_${dataList.length + index}`,
        image: "./massive/remote_image_clkk1vy920007t0rwbj2rr3ut.png",
        id: dataList.length + index,
        desc: "开发测试数据...",
      });
    }
    return list;
  };

  useEffect(() => {
    setDataList(mockInsertData());
  }, []);

  return (
    <Layout>
      <main className="pt-20 bg-primary-bg">
        <Search
          onchange={(value: string) => {
            console.log("onchange", value);
          }}
        ></Search>
        <div className="w-full px-12 py-3 min-h-[50vh]">
          <CardList
            dataList={dataList}
            onchange={() => {
              const list = mockInsertData();
              setDataList((ls) => {
                return [...ls, ...list];
              });
            }}
          ></CardList>
        </div>
      </main>
    </Layout>
  );
};

export default Market;
