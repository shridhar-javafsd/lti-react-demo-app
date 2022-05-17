
const Footer = (props) => {

    return (

        <div>
            <h1>Footer Component</h1>
            <p>Parent data in Child: {props.dataToPass}</p>
            <p> {props.empData.firstName} </p>
            <button onClick={props.passFun} >Click</button>
        </div>

    );
}

export default Footer;
