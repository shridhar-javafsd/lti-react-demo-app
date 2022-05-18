
const Footer = () => {


    return (
        <div className="bg-dark text-muted text-center pb-1 pt-1">
            <p>&#169; LTI 2022 </p>
        </div>
    );
}

export default Footer;


// const Footer = (props) => {

//     const childNum = 20;

//     const passDataToParent = () => {
//         console.log(`passDataToParent`);
//         props.childToParent(childNum);
//     }

//     return (
//         <div>
//             <h1>Footer Component</h1>
//             <p>Parent data in Child: {props.dataToPass}</p>
//             <p>Child data in Child: {childNum}</p>
//             <p> {props.empData.firstName} </p>
//             <button onClick={props.passFun} >Click</button>
//             <br />
//             <br />
//             <button onClick={passDataToParent} >passDataToParent</button>
//         </div>
//     );
// }

// export default Footer;
