import React, { useEffect, useRef, useState } from "react";
import SelectItem from "./SelectItem";

type Props = {
  transformAction: Function;
};

const SelectMenu: React.FC<Props> = ({ transformAction }) => {
  const selectionBar = useRef<HTMLDivElement>(null);
  const [transFormValue, setTransFormValue] = useState<number>(0);
  const [currentWidth, setCurrentWidth] = useState<number>(0);

  useEffect(() => {
    const element: any = selectionBar.current;
    setCurrentWidth(element.firstChild.clientWidth);
    const eventedElement = element as HTMLParagraphElement;
    eventedElement.addEventListener("click", (e) => {
      const element: any = e.target;
      const rect = element.getBoundingClientRect();
      if (element.tagName === "P") {
        setTransFormValue(rect.left);
        setCurrentWidth(element.clientWidth);
        transformAction(parseInt(element.id) * 25);
      }
    });
  }, [transformAction]);

  return (
    <section>
      <div
        ref={selectionBar}
        className="w-full pt-[10px] pb-[3px] cursor-pointer flex justify-start"
      >
        <SelectItem option="Experiences" id="0" />
        <SelectItem option="About" id="1" />
        <SelectItem option="Followers" id="2" />
        <SelectItem option="Following" id="3" />
      </div>
      <div className="w-full relative">
        <div
          className="h-[2px] rounded-[100%] bg-blue-800 absolute transition-transform duration-4"
          style={{
            transform: `translateX(${transFormValue}px)`,
            width: `${currentWidth}px`,
          }}
        ></div>
      </div>
    </section>
  );
};

export default SelectMenu;
