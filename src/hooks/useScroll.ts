import {useEffect, useState} from "react";

export const useScroll = ($container: HTMLElement | null) => {
    let [oldScrollDirection, setOldScrollDirection] = useState<'up' | 'down' | 0>(0);
    let [scrollDirection, setScrollDirection] = useState<'up' | 'down' | 0>(0);
    let [scrollNumber, setScrollNumber] = useState<number>(0);
    let [internNbScroll, setInternNbScroll] = useState<number>(0);

    const onScroll = (event: WheelEvent) => {
        const isUp = event.deltaY < 0;
        const direction = isUp ? 'up' : 'down'

        if (direction !== oldScrollDirection) {
            internNbScroll = 0;
            oldScrollDirection = direction
            scrollDirection = direction

            setOldScrollDirection(direction)
            setScrollDirection(direction)
            setInternNbScroll(internNbScroll);
            return;
        }
        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
            internNbScroll++;
            scrollDirection = direction
            setInternNbScroll(internNbScroll);

            if (internNbScroll % 10 === 0) {
                scrollNumber++;
                setScrollNumber(scrollNumber);
            }
        }
    }

    useEffect(() => {
        if ($container) {
            $container.addEventListener('wheel', onScroll)
        }

        return () => {
            if ($container) {
                $container.removeEventListener('wheel', onScroll, true);
            }
        };
    }, [$container]);

    return {
        scrollDirection,
        scrollNumber
    }
}
