import { useRef, useState } from "react";
// import debounce from "lodash.debounce";

function LinghtDarkConvert({ drakImage, lightImage, defautlWidth }: any) {
  const [divWidth, setDivWidth] = useState<number>(defautlWidth || 80);
  const divRef = useRef<any>(null);

  const handleMouseMove = (event: any) => {
    if (divRef.current && divRef.current.offsetWidth) {
      const percentage =
        (event?.nativeEvent?.offsetX / divRef.current.offsetWidth) * 100;
      setDivWidth(100 - percentage);
    }
  };

  const handleMouseLeave = () => {
    setDivWidth(defautlWidth || 80);
  };

  return (
    <div
      className="website-linght-dark-follow shadow-gray-800 rounded-lg"
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="img-box">
        <img src={drakImage} />
      </div>
      <div className="modal"></div>
      <div
        className="mask"
        style={{
          width: `${divWidth}%`,
        }}
      >
        <div className="img-box">
          <img src={lightImage} />
        </div>
      </div>
    </div>
  );
}

export default LinghtDarkConvert;
