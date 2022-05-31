import React from 'react';
import Medicine from '../Component/Medicine';

function Medition(props) {


    const doctordata = [
        {
            id: "101",
            name: " Name :- Abacavir",
            quantity: "25",
            price: " price :- 150",
            expiry: " expiry :- 2022"
        },
        {
            id: "102",
            name: " Name :- Eltrombopag",
            quantity: "90",
            price: " price :- 550",
            expiry: " expiry :- 2021"
        },
        {
            id: "103",
            name: " Name :- Meloxicam",
            quantity: "85",
            price: " price :- 450",
            expiry: " expiry :- 2025"
        },
        {
            id: "104",
            name: " Name :- Allopuinol",
            quantity: "50",
            price: " price :- 600",
            expiry: " expiry :- 2023"
        },
        {
            id: "105",
            name: " Name :- Phenytoin",
            quantity: "63",
            price: " price :- 250",
            expiry: " expiry :- 2021"
        },
        {
            id: "106",
            name: " Name :- Avomine",
            quantity: "15",
            price: " price :- 150",
            expiry: " expiry :- 2023"
        },
    ]
    return (
        <div className="container">
            <div className="row my-3">
                <Medicine data={doctordata} />
            </div>
        </div>
    )
}
export default Medition;