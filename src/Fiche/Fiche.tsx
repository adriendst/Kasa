import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Dropdown from "../Dropdown/Dropdown";
import Gallery from "../Gallery/gallery";
import Rating from "../Rating/rating";
import Tags from "../Tags/tags";
import "./Fiche.scss";

export type Location = {
    id: string;
    title: string;
    cover: string;
    pictures: string[];
    description: string;
    host: {
        name: string;
        picture: string;
    };
    rating: string;
    location: string;
    equipments: string[];
    tags: string[];
};

function Fiche() {
    const [location, setLocation] = useState<Location>({
        id: "",
        title: "",
        cover: "",
        pictures: [],
        description: "",
        host: {
            name: "",
            picture: "",
        },
        rating: "",
        location: "",
        equipments: [],
        tags: [],
    });

    const { ficheId } = useParams();

    const navigate = useNavigate();

    useEffect(() => {
        fetch("/data/data.json")
            .then((response) => response.json())
            .then((data) => {
                const foundLocation = data.find((item: any) => item.id === ficheId);
                if (!foundLocation) {
                    navigate("/error");
                } else {
                    setLocation(foundLocation);
                }
            })
            .catch(() => navigate("/error"));
    }, []);

    return (
        <div className="fiche">
            <Gallery pictures={location.pictures} />
            <div className="section">
                <div className="title">
                    <h3 className="locationTitle">{location.title}</h3>
                    <span className="locationLocation">{location.location}</span>
                    <Tags tags={location.tags} />
                </div>
                <div className="hostInfo">
                    <div className="host">
                        <span className="hostName">{location.host.name}</span>
                        <img className="hostPicture" src={location.host.picture} alt="" />
                    </div>
                    <Rating rating={location.rating} />
                </div>
            </div>
            <div className="section">
                <Dropdown label={"Description"} items={[location.description]} />
                <Dropdown label={"Equipements"} items={location.equipments} />
            </div>
        </div>
    );
}

export default Fiche;
