import SearchForm from "../sections/SearchForm";
import petInventory from "../utilities/petInventory";
import Inven from "../sections/Inven";

const Inventory = () => {
    const allPetComponents = petInventory.map((pet) => (
        <Inven
            key={pet.id}
            img={pet.img}
            name={pet.name}
            age={pet.age}
            gender={pet.gender}
            breed={pet.breed}
        />
    ));

    return (
        <main>
            <SearchForm />
            <section className="products">
                <div className="container">
                    <div className="section-intro">
                        <h4>All Pals</h4>
                    </div>

                    <div className="inventory full-inventory">
                        {allPetComponents}
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Inventory;
