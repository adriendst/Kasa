import { useState } from "react";
import { Link } from "react-router-dom";

function LocationCard(location: any) {
    const [loc, setLoc] = useState(location.location);

    return (
        <div className="locationCard">
            <Link to={`/fiche/${loc.id}`}>
                <img src={`${loc.cover}`} className="locationImg" />
                <div className="linearBackground"></div>
                <h3 className="locationTitle">{loc.title}</h3>
            </Link>
        </div>
    );
}

export default LocationCard;
