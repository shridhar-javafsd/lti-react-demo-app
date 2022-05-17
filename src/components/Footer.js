
const Footer = (props) => {

    const childNum = 20;

    const passDataToParent = () => {
        props.childToParent(childNum);
    }

    return (
        <div>
            <h1>Footer Component</h1>
            <p>Parent data in Child: {props.dataToPass}</p>
            <p>Child data in Child: {childNum}</p>
            <p> {props.empData.firstName} </p>
            <button onClick={props.passFun} >Click</button>
            <br />
            <br />
            <button onClick={passDataToParent} >passDataToParent</button>
        </div>
    );
}

export default Footer;
