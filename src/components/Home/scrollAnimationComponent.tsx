import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const ScrollAnimationComponent: React.FC<{
  onLoad: () => void;
  onTabActiveChange: (index: number) => void;
}> = ({ onLoad, onTabActiveChange }: any) => {
  useEffect(() => {
    // 检查是否在客户端
    if (typeof window === "undefined") return;

    // 注册 ScrollTrigger 插件
    gsap.registerPlugin(ScrollTrigger);

    const scroollTop = ScrollTrigger.create({
      trigger: "#smooth-content",
      start: "-200px top",
      markers: false,
      onEnter: () => {
        gsap.set("#website-slogan", {
          opacity: 0.9,
          y: "-20px",
        });
        gsap.set("#smooth-content", {
          position: "fixed",
          top: "20px",
        });
        gsap.set("#smooth-content .box-window", {
          top: "70vh",
        });
        gsap.set("#smooth-content .box-tabs", {
          opacity: 0,
        });
      },
      onLeaveBack: () => {
        gsap.to("#website-slogan", {
          opacity: 0.0,
          duration: 0.5,
          y: "100px",
        });
        gsap.to("#smooth-content", {
          y: "-80px",
          top: "50px",
        });
      },
    });
    // 当滚动到50px时
    const scroollTop50 = ScrollTrigger.create({
      trigger: "#smooth-content",
      start: "0px top",
      markers: false,
      onEnter: () => {
        gsap.to("#smooth-content", {
          y: "-60px",
          duration: 0.5,
        });
        gsap.to("#website-slogan", {
          opacity: 0.0,
          duration: 0.5,
          y: "-10px",
        });

        gsap.to("#smooth-content .box-window", {
          y: "-388.52px",
          duration: 0.5,
          z: 5,
        });
      },

      onLeaveBack: () => {
        gsap.to("#smooth-content", {
          duration: 0.5,
          y: "-20px",
        });

        gsap.to("#website-slogan", {
          opacity: 0.9,
          duration: 0.5,
          y: "0",
        });

        gsap.to("#smooth-content .box-window", {
          y: "0",
          duration: 0.5,
        });
      },
    });
    // 滚动到 100 时
    const scroollTop100 = ScrollTrigger.create({
      trigger: "#smooth-content",
      start: "100px top",
      markers: false,
      onEnter: () => {
        gsap.to("#smooth-content .box-tabs", {
          x: "-100%",
          opacity: 0.9,
          duration: 0.5,
        });
        gsap.to("#smooth-content .box-window", {
          x: "33%",
          duration: 0.5,
        });
      },
      onLeaveBack: () => {
        gsap.to("#smooth-content .box-tabs", {
          x: "0",
          opacity: 0,
          duration: 0.5,
        });
        gsap.to("#smooth-content .box-window", {
          x: "0",
          duration: 0.5,
        });
      },
    });

    // 当滚动到 150 时
    const scroollTop150 = ScrollTrigger.create({
      trigger: "#smooth-content",
      start: "150px top",
      markers: false,
      onEnter: () => {
        onTabActiveChange(0);
      },
      onLeaveBack: () => {
        onTabActiveChange(0);
      },
    });
    // 当滚动到 200 时
    const scroollTop200 = ScrollTrigger.create({
      trigger: "#smooth-content",
      start: "200px top",
      markers: false,
      onEnter: () => {
        onTabActiveChange(1);
      },
      onLeaveBack: () => {
        onTabActiveChange(1);
      },
    });
    // 当滚动到 300 时
    const scroollTop300 = ScrollTrigger.create({
      trigger: "#smooth-content",
      start: "300px top",
      markers: false,
      onEnter: () => {
        onTabActiveChange(2);
      },
      onLeaveBack: () => {
        onTabActiveChange(2);
      },
    });
    // 当滚动到 320 时
    const scroollTop320 = ScrollTrigger.create({
      trigger: "#smooth-content",
      start: "320px top",
      markers: false,
      onEnter: () => {
        gsap.to("#smooth-content", {
          position: "unset",
        });
      },
      onLeaveBack: () => {
        gsap.set("#smooth-content", {
          position: "fixed",
          top: "20px",
        });
      },
    });
    if (onLoad) onLoad();

    return () => {
      // 清理 ScrollTrigger 实例
      // scroollTop.kill();
      // scroollTop50.kill();
      // scroollTop100.kill();
      // scroollTop150.kill();
      // scroollTop200.kill();
      // scroollTop320.kill();
      // scroollTop300.kill();
    };
  }, []);

  return <></>;
};

export default ScrollAnimationComponent;
