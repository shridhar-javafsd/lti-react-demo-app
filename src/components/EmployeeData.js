
// state - 

import { useEffect, useState } from "react";

const EmployeeData = (props) => {

    const [num, setNum] = useState(0); // number 
    const [myName, setMyName] = useState(''); // string 
    const [isIndian, setIsIndian] = useState(false); // boolean
    const [phones, setPhones] = useState([]); // array
    const [empObj, setEmpObj] = useState({}); // object 

    useEffect();

    return (
        <div>
            <h1>Employee Component</h1>
            <p> {num} </p>
            <p> {myName} </p>
            <p> {isIndian} </p>
        </div>
    );
}

export default EmployeeData;
