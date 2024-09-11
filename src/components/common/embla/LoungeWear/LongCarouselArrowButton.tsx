import type { EmblaCarouselType } from 'embla-carousel';
import React, {
  ComponentPropsWithRef,
  useCallback,
  useEffect,
  useState,
} from 'react';

type UsePrevNextButtonsType = {
  prevBtnDisabled: boolean;
  nextBtnDisabled: boolean;
  onPrevButtonClick: () => void;
  onNextButtonClick: () => void;
};

export const usePrevNextButtons = (
  emblaApi: EmblaCarouselType | undefined,
): UsePrevNextButtonsType => {
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);

  const onPrevButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollPrev();
  }, [emblaApi]);

  const onNextButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback((emblApi: EmblaCarouselType) => {
    setPrevBtnDisabled(!emblApi.canScrollPrev());
    setNextBtnDisabled(!emblApi.canScrollNext());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onSelect(emblaApi);
    emblaApi.on('reInit', onSelect).on('select', onSelect);
  }, [emblaApi, onSelect]);

  return {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  };
};

type PropType = ComponentPropsWithRef<'button'>;

export const PrevButton: React.FC<PropType> = (props) => {
  const { children, ...restProps } = props;

  return (
    <button
      className={'embla__button embla__button--prev'}
      type={'button'}
      {...restProps}
    >
      <svg
        width={'13'}
        height={'25'}
        viewBox={'0 0 13 25'}
        fill={'none'}
        xmlns={'http://www.w3.org/2000/svg'}
      >
        <title>{'next picture'}</title>
        <path
          d={'M11.4651 22.9255L1.00009 12.4634L11.4651 2.00006'}
          stroke={'#676869'}
          stroke-width={'2'}
          stroke-linecap={'square'}
          stroke-linejoin={'round'}
        />
      </svg>
      {children}
    </button>
  );
};

export const NextButton: React.FC<PropType> = (props) => {
  const { children, ...restProps } = props;

  return (
    <button
      className={'embla__button embla__button--next'}
      type={'button'}
      {...restProps}
    >
      <svg
        width={'14'}
        height={'25'}
        viewBox={'0 0 14 25'}
        fill={'none'}
        xmlns={'http://www.w3.org/2000/svg'}
      >
        <title>{'next picture'}</title>
        <path
          d={'M2 22.9255L12.465 12.4634L2 2.00006'}
          stroke={'#676869'}
          stroke-width={'2'}
          stroke-linecap={'square'}
          stroke-linejoin={'round'}
        />
      </svg>
      {children}
    </button>
  );
};
