import { useState } from "react";
import "./gallery.scss";

function Gallery({ pictures }: { pictures: string[] }) {
    const [pictureDisplayedNumber, setPictureDisplayedNumber] = useState(0);

    const displayNextPhoto = () =>
        setPictureDisplayedNumber((prevValue) => (prevValue + 1 === pictures.length ? 0 : prevValue + 1));

    const displayPreviousPhoto = () =>
        setPictureDisplayedNumber((prevValue) => (prevValue - 1 < 0 ? pictures.length - 1 : prevValue - 1));

    return (
        <div className="locationImages">
            <img src={pictures[pictureDisplayedNumber]} className="locationCover" />
            {pictures.length > 1 && (
                <>
                    <img src="/Next.png" className="beforeArrow arrow" onClick={displayPreviousPhoto} />
                    <img src="/Next.png" className="nextArrow arrow" onClick={displayNextPhoto} />
                    <div className="pictureNumber">
                        {pictureDisplayedNumber + 1}/{pictures.length}
                    </div>
                </>
            )}
        </div>
    );
}

export default Gallery;
