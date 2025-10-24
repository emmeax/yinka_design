import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useRef } from "react";
import { cn } from "../../lib/utils";
import { NextButton, PrevButton } from "./CarouselArrowButtons";
import { DashButton } from "./CarouselDashButton";
import { useDotButton, usePrevNextButtons } from "./hooks";

const numberWithinRange = (number, min, max) =>
    Math.min(Math.max(number, min), max);

const Carousel = (props) => {
    const {
        className,
        children,
        options,
        plugins,
        showControls = true,
        type = "default",
        tweenFactorBase,
        minScale,
    } = props;
    const [emblaRef, emblaApi] = useEmblaCarousel(options, plugins);

    const { selectedIndex, scrollSnaps, onDotButtonClick } =
        useDotButton(emblaApi);

    const {
        prevBtnDisabled,
        nextBtnDisabled,
        onPrevButtonClick,
        onNextButtonClick,
    } = usePrevNextButtons(emblaApi);

    const tweenFactor = useRef(0);
    const tweenNodes = useRef([]);

    const setTweenNodes = useCallback((emblaApi) => {
        tweenNodes.current = emblaApi.slideNodes();
    }, []);

    const setTweenFactor = useCallback(
        (emblaApi) => {
            tweenFactor.current =
                tweenFactorBase * emblaApi.scrollSnapList().length;
        },
        [tweenFactorBase],
    );

    const tweenScale = useCallback(
        (emblaApi, eventName) => {
            const engine = emblaApi.internalEngine();
            const scrollProgress = emblaApi.scrollProgress();
            const slidesInView = emblaApi.slidesInView();
            const isScrollEvent = eventName === "scroll";

            emblaApi.scrollSnapList().forEach((scrollSnap, snapIndex) => {
                let diffToTarget = scrollSnap - scrollProgress;
                const slidesInSnap = engine.slideRegistry[snapIndex];

                slidesInSnap.forEach((slideIndex) => {
                    if (isScrollEvent && !slidesInView.includes(slideIndex))
                        return;

                    if (engine.options.loop) {
                        engine.slideLooper.loopPoints.forEach((loopItem) => {
                            const target = loopItem.target();

                            if (slideIndex === loopItem.index && target !== 0) {
                                const sign = Math.sign(target);

                                if (sign === -1) {
                                    diffToTarget =
                                        scrollSnap - (1 + scrollProgress);
                                }
                                if (sign === 1) {
                                    diffToTarget =
                                        scrollSnap + (1 - scrollProgress);
                                }
                            }
                        });
                    }

                    const tweenValue =
                        1 - Math.abs(diffToTarget * tweenFactor.current);
                    const scale = numberWithinRange(
                        tweenValue,
                        minScale,
                        1,
                    ).toString();
                    const tweenNode = tweenNodes.current[slideIndex];
                    if (tweenNode) {
                        tweenNode.style.transform = `scale(${scale})`;
                    }
                });
            });
        },
        [minScale],
    );

    useEffect(() => {
        if (!emblaApi || type !== "scale") return;

        setTweenNodes(emblaApi);
        setTweenFactor(emblaApi);
        tweenScale(emblaApi);

        emblaApi
            .on("reInit", setTweenNodes)
            .on("reInit", setTweenFactor)
            .on("reInit", tweenScale)
            .on("scroll", tweenScale)
            .on("slideFocus", tweenScale);
    }, [emblaApi, type, tweenScale, setTweenNodes, setTweenFactor]);

    return (
        <section>
            <div className="overflow-hidden" ref={emblaRef}>
                <div
                    className={cn(
                        "[backface-visibility:hidden] flex touch-pan-y touch-pinch-zoom",
                        className,
                    )}
                >
                    {children}
                </div>
            </div>

            {showControls && (
                <div className="w-contain grid grid-cols-[1fr_auto] justify-between gap-[1.2rem] mt-8">
                    <div className="flex flex-wrap justify-start items-center -mr-[0.6rem]">
                        {scrollSnaps.map((_, index) => (
                            <DashButton
                                key={index}
                                onClick={() => onDotButtonClick(index)}
                                className={cn(
                                    "appearance-none bg-transparent touch-manipulation inline-flex no-underline cursor-pointer border-0 p-0 m-0 w-8 h-8 items-center justify-center rounded-full after:h-[2px] after:w-[1.25rem] after:rounded-[0.1rem] after:flex after:items-center after:content-[''] after:shadow-[inset_0_0_0_0.2rem_rgb(255,255,255,0.5)]",
                                    {
                                        "after:w-[2.5rem] after:shadow-[inset_0_0_0_0.2rem_white]":
                                            index === selectedIndex,
                                    },
                                )}
                            />
                        ))}
                    </div>

                    <div className="grid grid-cols-2 gap-[0.6rem] items-center">
                        <PrevButton
                            onClick={onPrevButtonClick}
                            disabled={prevBtnDisabled}
                        />
                        <NextButton
                            onClick={onNextButtonClick}
                            disabled={nextBtnDisabled}
                        />
                    </div>
                </div>
            )}
        </section>
    );
};

export default Carousel;

/** @type {import('motion/react').Variants} */
// const containerVariantsWithExit = {
//     ...containerVariants(0.1),
//     exit: {
//         opacity: 0,
//         transition: {
//             when: "afterChildren",
//             delayChildren: stagger(0.05, { from: "last" }),
//         },
//     },
// };
