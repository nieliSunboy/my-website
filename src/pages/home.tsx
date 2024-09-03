import Layout from "@/components/layout";
// pages/_app.tsx
import React from "react";
import Advantage from "@/components/Home/advantage";
import OverviewItem from "@/components/Home/overviewItem";
import CustomerMessage from "@/components/Home/customerMessage";
import Cooperative from "@/components/Home/cooperative";

import dynamic from "next/dynamic";
import Goview from "@/components/Home/goview";
import MassiveTemplate from "@/components/Home/massiveTemplate";
import WelcomeSmooth from "@/components/Home/welcomeSmooth";

const Home: React.FC = ({ Component }: any) => {
  const overviewItems = [
    {
      title: "自定义组件",
      desc: "任何会员都可高度定制化组件，无需支付其它费用。集成 Vue 在线编辑器开发，一行代码即可触发事件联动，满足您的定制化业务需求",
      image: "/sections-custom-component.jpg",
      items: [
        {
          title: "自由定制",
          icon: "",
          desc: "可以与内置组件交互联动、数据请求，没有任何束缚",
        },
        {
          title: "高度可用",
          icon: "",
          desc: "支持最新 Vue Feature、ESM 依赖引入，在线编辑、TS 校验",
        },
        {
          title: "资源社区",
          icon: "",
          desc: "上千款自定义组件资源，开放的社区生态，一键引入，即拿即用",
        },
      ],
    },
    {
      title: "交互联动",
      desc: "极大超越同类平台灵活调度，不仅支持与其它组件的通用交互方案，还可使用全局内置方法配合组件声明周期，实现更细粒度的联动场景",
      image: "/sections-custom-event.jpg",
      isLast: true,
      items: [
        {
          title: "配置弹窗",
          icon: "",
          desc: "支持便捷可视化配置弹窗，可快速联动其它组件",
        },
        {
          title: "全局方法",
          icon: "",
          desc: "提供全局内置方法函数，任意位置都可调用，实现更细粒度的联动场景",
        },
        {
          title: "组件互联",
          icon: "",
          desc: "组件互联互通，支持多种数据源接入，数据联动",
        },
      ],
    },
    {
      title: "一键部署",
      desc: "内置大屏内网自动化部署工具「Windows、MacOS、Linux」，一键打包大屏数据，快速启用服务，更高效、更便捷，支持 Nginx 部署",
      image: "/sections-deploy.jpg",
      items: [
        {
          title: "内网部署",
          icon: "",
          desc: "可在私有网络内部署大屏项目，安全稳定",
        },
        {
          title: "Nginx 部署",
          icon: "",
          desc: "下载项目的静态文件包，采用 Nginx 代理的方式部署",
        },
        {
          title: "多项目部署",
          icon: "",
          desc: "同一个容器下面可以同时运行多个项目，项目管理更高效",
        },
      ],
    },
  ];

  return (
    <Layout>
      <main className="pt-20 ">
        {/** WelcomeSmooth  暂时不开放 */}
        <WelcomeSmooth></WelcomeSmooth>

        {/** Overview 概览介绍 */}
        <div className="relative">
          <div
            className="absolute -mt-[10%] inset-0 landing-grid z-[-1] [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
            data-v-0f524006=""
          ></div>
          {overviewItems &&
            overviewItems.map((over: any, idx: number) => {
              return (
                <div key={idx}>
                  <OverviewItem
                    values={over}
                    isLast={over?.isLast}
                  ></OverviewItem>
                </div>
              );
            })}
        </div>

        {/** Advantage 选择优势 */}
        <Advantage></Advantage>

        {/** Template 海量模板素材 */}
        <MassiveTemplate></MassiveTemplate>

        {/** CustomerMessage 客户寄语 */}
        <CustomerMessage></CustomerMessage>

        {/** 合作用户 */}
        <Cooperative></Cooperative>

        {/** 低代码驱动 */}
        <Goview></Goview>
      </main>
    </Layout>
  );
};

export default Home;
