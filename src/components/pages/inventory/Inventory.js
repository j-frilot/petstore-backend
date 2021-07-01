import SearchForm from "./SearchForm";
import PetSection from "./PetSection";
import Container from "react-bootstrap/Container";

const Inventory = () => {
    return (
        <main>
            <SearchForm />
            <Container className="p-5">
                <h3 className="display-4 text-center">All Pals</h3>

                <PetSection />
            </Container>
        </main>
    );
};

export default Inventory;
