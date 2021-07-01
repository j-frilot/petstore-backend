import SearchForm from "./SearchForm";
import PetSection from "./PetSection";
import Container from "react-bootstrap/Container";

const Inventory = () => {
    return (
        <main>
            <SearchForm />
            <Container>
                <h3>All Pals</h3>

                <PetSection />
            </Container>
        </main>
    );
};

export default Inventory;
