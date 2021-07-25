import React, { useContext } from "react";
import { DataContext } from "../../../InventoryContext";
import PetCard from "../../sections/PetCard";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const PetSection = (props) => {
    // const [dogPic, setDogPic] = useState([]);

    // useEffect(() => {
    //     fetch("http://localhost:4002/petstore/inventory")
    //         .then((res) => res.json())
    //         .then((res) => {
    //             console.log(res);
    //             setDogPic(res);
    //         });
    // }, []);

    // useEffect(() => {
    //     fetch("https://melloman.live/petstore/inventory")
    //         .then((res) => res.json())
    //         .then((res) => {
    //             console.log(res);
    //             setDogPic(res);
    //         });
    // }, []);

    const dogInfo = useContext(DataContext);

    return (
        <Row lg={5}>
            {dogInfo.map((info) => (
                <Col sm={4} key={info.inventory_id} className="p-3">
                    <PetCard
                        picture={info.image}
                        name={info.name}
                        age="5"
                        gender={info.gender}
                        breed={info.breed}
                    />
                </Col>
            ))}
        </Row>
    );
};

export default PetSection;
