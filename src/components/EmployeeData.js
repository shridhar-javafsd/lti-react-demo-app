
// state - 

import { useEffect, useState } from "react";

const EmployeeData = (props) => {

    const [num, setNum] = useState(0); // number 
    const [myName, setMyName] = useState(''); // string 
    const [isIndian, setIsIndian] = useState(false); // boolean
    const [phones, setPhones] = useState([]); // array
    const [empObj, setEmpObj] = useState({}); // object 

    // useEffect(callback, array);
    // useEffect(() => {}, []);

    useEffect(() => {
        setNum(5);
        setMyName('Sonu');
        setIsIndian(true);
        setPhones([9876543210, 741850960]);
        setEmpObj({
            eid: 101,
            firstName: 'Monu',
            salary: 50000
        });
    }, []);

    return (
        <div>
            <h1>Employee Component</h1>
            <p> {num} </p>
            <p> {myName} </p>
            <p> {isIndian} </p>
            <p> {phones[0]} </p>
            <p> {empObj.firstName} </p>
        </div>
    );
}

export default EmployeeData;
