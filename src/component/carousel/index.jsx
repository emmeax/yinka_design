import useEmblaCarousel from "embla-carousel-react";
import { cn } from "../../lib/utils";
import { NextButton, PrevButton } from "./CarouselArrowButtons";
import { DashButton } from "./CarouselDashButton";
import { useDotButton, usePrevNextButtons } from "./hooks";

const Carousel = (props) => {
    const {
        className,
        children,
        options,
        plugins,
        showControls = true,
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
