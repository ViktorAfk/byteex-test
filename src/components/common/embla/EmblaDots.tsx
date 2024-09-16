import type { EmblaCarouselType } from 'embla-carousel';
import React, {
  ComponentPropsWithRef,
  useCallback,
  useEffect,
  useState,
} from 'react';

type UseDotButtonType = {
  selectedIndex: number;
  scrollSnaps: number[];
  onDotButtonClick: (index: number) => void;
};

export const useDotButton = (
  emblaApi: EmblaCarouselType | undefined,
): UseDotButtonType => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const onDotButtonClick = useCallback(
    (index: number) => {
      if (!emblaApi) return;
      emblaApi.scrollTo(index);
    },
    [emblaApi],
  );

  const onInit = useCallback((emblApi: EmblaCarouselType) => {
    setScrollSnaps(emblApi.scrollSnapList());
  }, []);

  const onSelect = useCallback((emblApi: EmblaCarouselType) => {
    setSelectedIndex(emblApi.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onInit(emblaApi);
    onSelect(emblaApi);
    emblaApi.on('reInit', onInit).on('reInit', onSelect).on('select', onSelect);
  }, [emblaApi, onInit, onSelect]);

  return {
    selectedIndex,
    scrollSnaps,
    onDotButtonClick,
  };
};

type PropType = ComponentPropsWithRef<'button'>;

export const DotButton: React.FC<PropType> = (props) => {
  const { children, ...restProps } = props;

  return (
    <button type={'button'} {...restProps}>
      {children}
    </button>
  );
};
