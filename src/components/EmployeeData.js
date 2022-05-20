

// state - 

import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const EmployeeData = (props) => {

    const empDataFromStore = useSelector(state => state.emp.empData);

    useEffect(() => {

    }, []);

    return (
        <div className="container">
            <p className="display-4 text-primary">Employee component</p>
            <p>Data from store: </p>
            <p>{empDataFromStore.eid} {empDataFromStore.firstName} {empDataFromStore.salary}</p>
        </div>
    );
}

export default EmployeeData;




// // state -

// import { useEffect, useState } from "react";

// const EmployeeData = (props) => {

//     const [num, setNum] = useState(0); // number
//     const [myName, setMyName] = useState(''); // string
//     const [isIndian, setIsIndian] = useState(false); // boolean
//     const [phones, setPhones] = useState([]); // array
//     const [empObj, setEmpObj] = useState({}); // object

//     // useEffect(callback, array);
//     // useEffect(() => {}, []);

//     useEffect(() => {
//         setNum(5);
//         setMyName('Sonu');
//         setIsIndian(true);
//         setPhones([9876543210, 741850960]);
//         setEmpObj({
//             eid: 101,
//             firstName: 'Monu',
//             salary: 50000
//         });
//     }, []);

//     return (
//         <div className="container">
//             <p className="display-4 text-primary">Employee component</p>
//             <p> {num} </p>
//             <p> {myName} </p>
//             <p> {isIndian} </p>
//             <p> {phones[0]} </p>
//             <p> {empObj.firstName} </p>
//         </div>
//     );
// }

// export default EmployeeData;
