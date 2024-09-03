import React, { useEffect, useRef, useState } from "react";

function SlideImageCardList({ list, pubsub }: any) {
  const isDragging = useRef<boolean>(false);
  const [offset, setOffset] = useState(0);
  const start = useRef<any>(0);
  const dragRef = useRef<HTMLDivElement>(null);

  const scrollChange = (type: string) => {
    handleScrollChange(type === "left" ? -350 : 350);
  };
  useEffect(() => {
    pubsub.subscribe("scroll", scrollChange);
    return () => {
      pubsub.subscribe("scroll", () => {});
    };
  }, []);

  const handleMouseDown = (event: React.MouseEvent<HTMLDivElement>) => {
    isDragging.current = true;
    start.current = event?.clientX;
  };

  // const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
  //   const { movementX, clientX } = event;
  //   console.log("handleMouseMove-", event, movementX);
  //   if (isDragging.current && dragRef.current) {
  //     const scrollLeft: number = start.current - clientX;
  //     setOffset(scrollLeft);
  //   }
  // };

  // const handleMouseUp = () => {
  //   isDragging.current = false;
  //   start.current = 0;
  // };

  const handleScrollChange = (number: number) => {
    const container = dragRef.current;
    if (container) {
      const newScrollLeft = container.scrollLeft + number;
      // setScrollLeft(newScrollLeft);
      console.log(newScrollLeft);
      container.scrollTo({
        left: newScrollLeft,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative card-box">
      <div
        //no-scrollbar
        className="relative w-full flex overflow-x-auto snap-x snap-mandatory scroll-smooth  no-scrollbar"
        // onMouseMove={handleMouseMove}
        ref={dragRef}
        style={{
          transform: `translateX(${offset}px)`,
        }}
      >
        {Array.isArray(list) &&
          list.map((img, idx) => {
            return (
              <div
                onMouseDown={handleMouseDown}
                // onMouseUp={handleMouseUp}
                // onBlur={handleMouseUp}
                key={`massive-img-${idx + 1}`}
                className="flex flex-none snap-center"
              >
                <div className="py-2">
                  <img
                    className="card-item rounded-xl"
                    src={img}
                    draggable="false"
                  />
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}
// function SlideImageCardList({ list }: any) {}

export default SlideImageCardList;
