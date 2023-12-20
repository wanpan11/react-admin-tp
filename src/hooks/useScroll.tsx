import { useEffect, useRef } from "react";

export default function useScroll(contentRef: React.RefObject<HTMLDivElement>) {
  const mouseRef = useRef({ start: false, mouse: { x: 0 } });

  const onMouseDown = (evt: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const { clientX } = evt;
    mouseRef.current.start = true;
    mouseRef.current.mouse = { x: clientX };
  };

  const onMouseMove = (evt: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (mouseRef.current.start) {
      const { clientX } = evt;
      console.log("name ===>", clientX);
      if (contentRef.current) {
        const { x } = mouseRef.current.mouse;
        const diff = clientX - x;

        if (diff > 0) {
          contentRef.current.scrollLeft -= diff;
        } else {
          contentRef.current.scrollLeft += Math.abs(diff);
        }
      }

      mouseRef.current.mouse = { x: clientX };
    }
  };

  const onMouseUp = () => {
    mouseRef.current.start = false;
    mouseRef.current.mouse = { x: 0 };
  };

  useEffect(() => {
    window.addEventListener("mouseup", onMouseUp);

    return () => {
      window.removeEventListener("mouseup", onMouseUp);
    };
  }, []);

  return { onMouseDown, onMouseMove, onMouseUp };
}
