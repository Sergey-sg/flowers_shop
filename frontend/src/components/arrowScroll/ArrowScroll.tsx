import React from "react";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import "react-horizontal-scrolling-menu/dist/styles.css";
import { IFlowerItem } from "../../interfaces/IFlowerItem.interface";
import { FlowerCard } from "../FlowerCard";
import { LeftArrow, RightArrow } from "./Arrow";
import "./hideScrollbar.css";
import usePreventBodyScroll from "./usePreventBodyScroll";

type scrollVisibilityApiType = React.ContextType<typeof VisibilityContext>;

function onWheel(apiObj: scrollVisibilityApiType, ev: React.WheelEvent): void {
  const isThouchpad = Math.abs(ev.deltaX) !== 0 || Math.abs(ev.deltaY) < 15;

  if (isThouchpad) {
    ev.stopPropagation();
    return;
  }

  if (ev.deltaY < 0) {
    apiObj.scrollNext();
  } else if (ev.deltaY > 0) {
    apiObj.scrollPrev();
  }
}

function ArrowScroll(props: { items: IFlowerItem[] }) {
  const { disableScroll, enableScroll } = usePreventBodyScroll();

  return (
    <>
      <div className="example">
        <div onMouseEnter={disableScroll} onMouseLeave={enableScroll}>
          <ScrollMenu
            LeftArrow={LeftArrow}
            RightArrow={RightArrow}
            onWheel={onWheel}
          >
            {props.items?.map((item) => (
              <FlowerCard key={item.pk} flower={item} />
            ))}
          </ScrollMenu>
        </div>
      </div>
    </>
  );
}

export default ArrowScroll;
