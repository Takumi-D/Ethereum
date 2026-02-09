import { memo, useEffect, useState, useRef } from "react";
import "./Card.scss";

interface CardProps {
    name: string;
    initialBid: number;
    auctionEndTime: number;
    currentTime: number;
    numberImg: number
}

const Card = memo(function Card({ name, initialBid, auctionEndTime, currentTime, numberImg }: CardProps) {
    const [bid, setBid] = useState(initialBid);
    const timeoutRef = useRef<number | null>(null);

    const timeLeftMs = Math.max(0, auctionEndTime - currentTime);
    const isExpired = timeLeftMs <= 0;

    const formatTime = (ms: number): string => {
        if (ms <= 0) return "Завершено";
        const totalSec = Math.floor(ms / 1000);
        const h = Math.floor(totalSec / 3600);
        const m = Math.floor((totalSec % 3600) / 60);
        const s = totalSec % 60;
        return `${h ? h + "h " : ""}${m}m ${s.toString().padStart(2, "0")}s`;
    };

    useEffect(() => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
            timeoutRef.current = null;
        }

        if (isExpired) {
            return;
        }

        const scheduleNext = () => {
            const growth = 0.3 + Math.random() * 7.7;
            setBid((prev) => Math.round(prev * (1 + growth / 100) * 100) / 100);

            const delay = 5000 + Math.random() * 13000;
            timeoutRef.current = setTimeout(scheduleNext, delay);
        };

        const initialDelay = 3000 + Math.random() * 7000;
        timeoutRef.current = setTimeout(scheduleNext, initialDelay);

        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
        };
    }, [isExpired]);

    return (
        <div className="card">
            <div className="card-top">
                <img className="card-img" src={`./img/scroll/scroll${numberImg}.jpg`} alt="img"/>

                <div className="wrapper-time-card">
                    <p className="time-card">{formatTime(timeLeftMs)}</p>
                </div>
            </div>
            <div className="card-content">
                <p className="card-name">{name}</p>

                <div className="card-bottom">
                    <div className="card-left-column">
                        <p className="bid-title">Current bid</p>
                        <div className="bid-current">
                            <img className="bid-current__img" src="./icon/bid.svg" alt="bid"/>
                            <p className="bid-current__number">{bid.toFixed(2)}</p>
                        </div>
                    </div>

                    <div className="card-right-column">
                        <button className="btn btn-card">PLACE BID</button>
                    </div>
                </div>
            </div>
        </div>
    );
});

export default Card;