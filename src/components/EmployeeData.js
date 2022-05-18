


const EmployeeData = (props) => {

    const eData = 25;

    return (
        <div>
            <h1>Employee Component</h1>
            <p>Parent data in Child: {props.dataToPass}</p>
            <p>Child data in Child: {eData}</p>
            <button onClick={props.passFun} >Click</button>
        </div>
    );
}

export default EmployeeData;
