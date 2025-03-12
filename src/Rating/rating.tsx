import starActive from "../assets/star-active.png";
import starInactive from "../assets/star-inactive.png";
import "./rating.scss";

function Rating({ rating }: { rating: string }) {
    return (
        <div className="rating">
            {Array.from({ length: 5 }, (_i, index) => {
                return <img src={index < parseInt(rating) ? starActive : starInactive} key={index} />;
            })}
        </div>
    );
}

export default Rating;
