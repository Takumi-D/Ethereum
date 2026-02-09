import "./Scroll.scss";
import Card from "../Card/Card.tsx";

import { useCallback, useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import useEmblaCarousel from "embla-carousel-react";

import type { AppDispatch } from "../../store/store.ts";
import { fetchData } from "../../store/reducers/main.reducer.ts";
import {apiSelector, errorSelector, loadingSelector} from "../../store/actions/actions.ts";

function Scroll() {
    const dispatch = useDispatch<AppDispatch>();
    const data = useSelector(apiSelector);
    const loading = useSelector(loadingSelector);
    const error = useSelector(errorSelector);

    const [now, setNow] = useState(() => Date.now());

    useEffect(() => {
        const id = setInterval(() => setNow(Date.now()), 1000);
        return () => clearInterval(id);
    }, []);


    const cardData = useMemo(() => {
        return data.map((item) => ({
            name: item.name,
            endTime: Date.now() + (120_0000 + Math.random() * 600_0000),
            initialBid: Math.floor(50 + Math.random() * 300),
            numberImg: Math.floor(1 + Math.random() * 5),
        }));
    }, [data.length]);

    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: true,
        align: "start",
        dragFree: false,
        skipSnaps: true,
    });

    const scrollPrev = useCallback(() => emblaApi?.goToPrev(), [emblaApi]);
    const scrollNext = useCallback(() => emblaApi?.goToNext(), [emblaApi]);

    useEffect(() => {
        dispatch(fetchData());
    }, [dispatch]);

    if (loading) {
        return <div className="text-center">Загрузка...</div>;
    }

    if (error) {
        return (
            <div className="text-center">{ error }</div>
        )
    }

    if (data.length === 0) {
        return (
            <div className="text-center">Нет данных</div>
        )
    }

    return (
        <div className="scroll">
            <p className="scroll-title">Weekly - Top NFT</p>
            <div className="embla">
                <div className="embla__viewport" ref={emblaRef}>
                    <div className="embla__container">
                        {cardData.map((card) => (
                            <div className="embla__slide" key={card.name}>
                                <Card
                                    name={card.name}
                                    initialBid={card.initialBid}
                                    auctionEndTime={card.endTime}
                                    currentTime={now}
                                    numberImg={card.numberImg}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="wrapper-embla-button">
                <button onClick={scrollPrev} className="embla-btn embla__prev">
                    <img src="./icon/left.svg" alt="embla__prev"/>
                </button>
                <span className="border-embla"></span>
                <button onClick={scrollNext} className="embla-btn embla__next">
                    <img src="./icon/right.svg" alt="embla__next"/>
                </button>
            </div>
        </div>
    );
}

export default Scroll;