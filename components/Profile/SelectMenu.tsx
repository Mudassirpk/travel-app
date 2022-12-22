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
        transformAction(parseInt(element.id) * 20);
      }
    });
  }, [transformAction]);

  return (
    <section>
      <div
        ref={selectionBar}
        className="w-full flex-wrap pt-[10px] pb-[3px] cursor-pointer flex justify-start"
      >
        <SelectItem option="Experiences" id="0" />
        <SelectItem option="About" id="1" />
        <SelectItem option="Followers" id="2" />
        <SelectItem option="Following" id="3" />
        <SelectItem option="Media" id="4" />
      </div>
     
    </section>
  );
};

export default SelectMenu;
