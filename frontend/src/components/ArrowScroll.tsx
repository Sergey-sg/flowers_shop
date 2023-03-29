import React from "react";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import 'react-horizontal-scrolling-menu/dist/styles.css';
import { IFlowerItem } from "../interfaces/IFlowerItem.interface";
import { FlowerCard } from "./FlowerCard";
import "./hideScrollbar.css";

const preventDefault = (ev: Event) => {
    if (ev.preventDefault) {
        ev.preventDefault();
    }
    ev.returnValue = false;
};

const enableBodyScroll = () => {
    document && document.removeEventListener("wheel", preventDefault, false);
};
const disableBodyScroll = () => {
    document &&
        document.addEventListener("wheel", preventDefault, {
            passive: false
    });
};

function usePreventBodyScroll() {
    const [hidden, setHidden] = React.useState(false);

    React.useEffect(() => {
        hidden ? disableBodyScroll() : enableBodyScroll();

        return enableBodyScroll;
    }, [hidden]);

    const disableScroll = React.useCallback(() => setHidden(true), []);
    const enableScroll = React.useCallback(() => setHidden(false), []);
    return { disableScroll, enableScroll };
}

function Arrow({
  children,
  disabled,
  onClick
}: {
  children: React.ReactNode;
  disabled: boolean;
  onClick: VoidFunction;
}) {
  return (
    <button
      disabled={disabled}
      className='text-[#E1E1E6] p-3 text-3xl'
      onClick={onClick}
      style={{
        cursor: "pointer",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        right: "1%",
        opacity: disabled ? "0" : "1",
        userSelect: "none"
      }}
    >
      {children}
    </button>
  );
}

function LeftArrow() {
  const {
    isFirstItemVisible,
    scrollPrev,
    visibleElements,
    initComplete
  } = React.useContext(VisibilityContext);

  const [disabled, setDisabled] = React.useState(
    !initComplete || (initComplete && isFirstItemVisible)
  );
  React.useEffect(() => {
    // NOTE: detect if whole component visible
    if (visibleElements.length) {
      setDisabled(isFirstItemVisible);
    }
  }, [isFirstItemVisible, visibleElements]);

  return (
    <Arrow disabled={disabled} onClick={() => scrollPrev()}>
      &lt;
    </Arrow>
  );
}

function RightArrow() {
  const { isLastItemVisible, scrollNext, visibleElements } = React.useContext(
    VisibilityContext
  );

  const [disabled, setDisabled] = React.useState(
    !visibleElements.length && isLastItemVisible
  );
  React.useEffect(() => {
    if (visibleElements.length) {
      setDisabled(isLastItemVisible);
    }
  }, [isLastItemVisible, visibleElements]);

  return (
    <Arrow disabled={disabled} onClick={() => scrollNext()}>
      &gt;
    </Arrow>
  );
}

type scrollVisibilityApiType = React.ContextType<typeof VisibilityContext>;

const elemPrefix = "test";
const getId = (index: number) => `${elemPrefix}${index}`;


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

function ArrowScroll(props: any) {
  const { disableScroll, enableScroll } = usePreventBodyScroll();

  return (
    <>
      <div className="example">
        <div onMouseEnter={disableScroll} onMouseLeave={enableScroll}>
          <ScrollMenu
            Header={<div>HEADER</div>}
            Footer={<div>FOOTER</div>}
            LeftArrow={LeftArrow}
            RightArrow={RightArrow}
            onWheel={onWheel}
          >
            {props.items?.map((item: IFlowerItem) => (
              <FlowerCard flower={item}/>
            ))}
          </ScrollMenu>
        </div>
      </div>
    </>
  );
}
export default ArrowScroll;