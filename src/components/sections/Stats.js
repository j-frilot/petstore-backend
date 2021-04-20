const Stats = () => {
    let rescueCount = 1;
    setInterval(() => {
        if (rescueCount < 342) {
            rescueCount++;
            document.querySelector(".rescue-num").innerHTML = rescueCount;
        }
    }, 3);

    let adoptCount = 1;
    setInterval(() => {
        if (adoptCount < 155) {
            adoptCount++;
            document.querySelector(".adopt-num").innerHTML = adoptCount;
        }
    }, 10);

    let volunteerCount = 1;
    setInterval(() => {
        if (volunteerCount < 50) {
            volunteerCount++;
            document.querySelector(".volunteer-num").innerHTML = volunteerCount;
        }
    }, 50);

    return (
        <section className="data">
            <div className="container">
                <h3>Interested In adoption?</h3>

                <div className="data-section">
                    <div className="data-block">
                        <i className="fas fa-dog"></i>
                        <h3>
                            <span className="rescue-num">0</span> rescued
                        </h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit.{" "}
                        </p>
                    </div>
                    <div className="data-block">
                        <i className="fas fa-heart"></i>
                        <h3>
                            <span className="adopt-num">0</span> adoptions
                        </h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit.
                        </p>
                    </div>
                    <div className="data-block">
                        <i className="fas fa-hands-helping"></i>
                        <h3>
                            <span className="volunteer-num">0</span> volunteers
                        </h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit.{" "}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Stats;

// let rescueNum = document.querySelector(".rescue-num");
// let adoptNum = document.querySelector(".adopt-num");
// let volunteerNum = document.querySelector(".volunteer-num");

// let rescueCount = 1;
// setInterval(() => {
//     if (rescueCount < 342) {
//         rescueCount++;
//         let rescueNum = (document.querySelector(
//             ".rescue-num"
//         ).innerText = rescueCount);
//     }
// }, 3);

// let adoptCount = 1;
// setInterval(() => {
//     if (adoptCount < 155) {
//         adoptCount++;
//         let adoptNum = (document.querySelector(
//             ".adopt-num"
//         ).innerText = adoptCount);
//     }
// }, 10);

// let volunteerCount = 1;
// setInterval(() => {
//     if (volunteerCount < 50) {
//         volunteerCount++;
//         let volunteerNum = (document.querySelector(
//             ".volunteer-num"
//         ).innerText = volunteerCount);
//     }
// }, 50);
