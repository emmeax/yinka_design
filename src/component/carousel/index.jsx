import useEmblaCarousel from "embla-carousel-react";
import { NextButton, PrevButton } from "./CarouselArrowButtons";
import { DashButton } from "./CarouselDashButton";
import "./embla.css";
import { useDotButton, usePrevNextButtons } from "./hooks";

const Carousel = (props) => {
    const { slides, options } = props;
    const [emblaRef, emblaApi] = useEmblaCarousel(options);

    const { selectedIndex, scrollSnaps, onDotButtonClick } =
        useDotButton(emblaApi);

    const {
        prevBtnDisabled,
        nextBtnDisabled,
        onPrevButtonClick,
        onNextButtonClick,
    } = usePrevNextButtons(emblaApi);

    return (
        <section className="embla">
            <div className="embla__viewport" ref={emblaRef}>
                <div className="embla__container">
                    {slides.map(({ image, alt }, index) => (
                        <div className="embla__slide" key={index}>
                            <div className="embla__slide__content group">
                                <img
                                    src={image}
                                    alt={alt}
                                    className="size-full object-cover group-hover:scale-105 transition-transform duration-[600ms]"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="embla__controls w-contain">
                <div className="embla__dashes">
                    {scrollSnaps.map((_, index) => (
                        <DashButton
                            key={index}
                            onClick={() => onDotButtonClick(index)}
                            className={"embla__dash".concat(
                                index === selectedIndex
                                    ? " embla__dash--selected"
                                    : "",
                            )}
                        />
                    ))}
                </div>

                <div className="embla__buttons">
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
        </section>
    );
};

export default Carousel;
