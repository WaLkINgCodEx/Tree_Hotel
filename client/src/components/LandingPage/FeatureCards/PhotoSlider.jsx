import { useRef, useEffect } from "react";

const PhotoSlider = (props) => {
  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;
    const resizeElement = slider.querySelector(".resize");
    const dividerElement = slider.querySelector(".divider");

    let touched = false;
    const handleTouchStart = () => {
      touched = true;
    };
    const handleTouchEnd = () => {
      touched = false;
    };

    window.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("touchend", handleTouchEnd);

    const handleMouseDown = (e) => {
      e.preventDefault();

      resizeElement.classList.add("resizable");
      dividerElement.classList.add("draggable");

      const startX = e.pageX || e.touches[0].pageX;
      const dragWidth = dividerElement.offsetWidth;
      const posX = dividerElement.offsetLeft + dragWidth - startX;
      const containerOffset = slider.offsetLeft;
      const containerWidth = slider.offsetWidth;
      const minLeft = containerOffset + 10;
      const maxLeft = containerOffset + containerWidth - dragWidth - 10;

      const handleMouseMove = (e) => {
        if (!touched) {
          e.preventDefault();
        }

        const moveX = e.pageX || e.touches[0].pageX;

        let leftValue = moveX + posX - dragWidth;

        if (leftValue < minLeft) {
          leftValue = minLeft;
        } else if (leftValue > maxLeft) {
          leftValue = maxLeft;
        }

        const widthValue =
          ((leftValue + dragWidth / 2 - containerOffset) * 100) /
            containerWidth +
          "%";

        dividerElement.style.left = widthValue;
        resizeElement.style.width = widthValue;
      };

      const handleMouseUp = () => {
        dividerElement.classList.remove("draggable");
        resizeElement.classList.remove("resizable");

        window.removeEventListener("mousemove", handleMouseMove);
        window.removeEventListener("touchmove", handleMouseMove);
        window.removeEventListener("mouseup", handleMouseUp);
        window.removeEventListener("touchend", handleMouseUp);
        window.removeEventListener("touchcancel", handleMouseUp);
      };

      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("touchmove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
      window.addEventListener("touchend", handleMouseUp);
      window.addEventListener("touchcancel", handleMouseUp);
    };

    dividerElement.addEventListener("mousedown", handleMouseDown);
    dividerElement.addEventListener("touchstart", handleMouseDown);

    return () => {
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
      dividerElement.removeEventListener("mousedown", handleMouseDown);
      dividerElement.removeEventListener("touchstart", handleMouseDown);
    };
  }, []);

  return (
    <div className="comparison-slider-wrapper">
      <img src={props.image1} alt="hotel overview" />
      <div className="comparison-slider" ref={sliderRef}>
        <div className="resize">
          <div className="resize-frame">
            <img src={props.image2} alt="" />
          </div>
        </div>
        <div className="divider"></div>
      </div>
    </div>
  );
};
export default PhotoSlider;
