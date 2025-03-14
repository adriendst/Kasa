import { useEffect, useState } from "react";
import banner from "../assets/background.jpg";
import Banner from "../Banner/Banner";
import "./home.scss";
import LocationCard from "./LocationCard/locationCard";
import { Location } from "../Fiche/Fiche";

function Home() {
    const [locations, setLocations] = useState<Location[]>([]);

    useEffect(() => {
        fetch("/data/data.json")
            .then((response) => response.json())
            .then((data) => setLocations(data));
    }, []);

    return (
        <div className="home">
            <Banner banner={banner} alt={"Bannière page accueil"} text="Chez vous, partout et ailleurs" />

            <div className="locations">
                {locations.map((location) => (
                    <LocationCard key={location.id} location={location} />
                ))}
            </div>
        </div>
    );
}

export default Home;
