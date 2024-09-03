import { useEffect, useRef, useState } from "react";

function useBoxTabs({ defaultValue }: any) {
  const [activeTab, setActiveTab] = useState<number>(defaultValue);
  const [aniIsLoaded, setAniIsLoaded] = useState<boolean>(false);
  const onTabClick = (i: number) => {
    console.log("i--", i);
    setActiveTab(i);
  };

  const isActive = (i: number) => {
    return i === activeTab;
  };

  useEffect(() => {
    console.log("1111");
    setAniIsLoaded(false);
  }, []);

  return {
    aniIsLoaded,
    setAniIsLoaded,
    isActive,
    onTabClick,
  };
}

export default useBoxTabs;
