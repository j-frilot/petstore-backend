import React, { useState, useEffect } from "react";

const PetInfo = () => {
    // https://random.dog/doggos
    // https://api.thedogapi.com/v1/images/search

    const [info, setInfo] = useState([]);

    useEffect(() => {
        fetch("https://random.dog/doggos")
            .then((response) => response.json())
            .then((response) => {
                // console.log(response);
                setInfo(response);
            });
    }, []);

    const dogPics = info.slice(0, 5);
    // console.log(dogPics);

    // console.log(dogPic);

    return (
        <div>
            {dogPics.map((pic, idx) => (
                <img src={`https://random.dog/${pic}`} alt="" key={idx} />
            ))}
            <h1>here</h1>
        </div>
    );
};

export default PetInfo;

// const PetInfo = () => {
//     // https://random.dog/doggos
//     // https://api.thedogapi.com/v1/images/search

//     const [info, setInfo] = useState([]);

//     useEffect(() => {
//         fetch("https://random.dog/doggos")
//             .then((response) => response.json())
//             .then((response) => {
//                 console.log(response.slice(0, 3));
//                 setInfo(response);
//             });
//     }, []);

//     return (
//         <div>
//             {info.slice(0, 3).map((doginfo, idx) => (
//                 <img
//                     src={`https://random.dog/${doginfo}`}
//                     alt="dog"
//                     key={idx}
//                 />
//             ))}
//             <h1>here</h1>
//         </div>
//     );
// };
