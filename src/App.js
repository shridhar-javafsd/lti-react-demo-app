import Routes from "./Routes";

const App = () => {

  return (
    <div>
      <Routes />
    </div>
  );
}

export default App;





// import { useState } from "react";
// import EmployeeData from "./components/EmployeeData";
// import Footer from "./components/Footer";
// import Header from "./components/Header";

// const App = () => {

//   const num = 11;
//   const emp = {
//     eid: 101,
//     firstName: 'Sonu'
//   }

//   let [dataFromChild, setDataFromChild] = useState(0);

//   const fun = () => {
//     console.log(`fun`);
//     alert('fun function invoked');
//   }

//   const getDataFromChild = (arg) => {
//     console.log(`getDataFromChild`);
//     setDataFromChild(arg);
//   }


//   return (
//     <div>
//       <Header />
//       <div className="container" >
//         <h1>App Component</h1>
//         <p>Parent data in Parent: {num} </p>
//         <p>Child data in Parent: {dataFromChild} </p>
//       </div>
//       {/* <Footer
//         dataToPass={num}
//         empData={emp}
//         passFun={fun}
//         childToParent={getDataFromChild}
//       /> */}
//       <EmployeeData
//         dataToPass={num}
//         empData={emp}
//         passFun={fun}
//         childToParent={getDataFromChild}
//       />
//     </div>
//   );
// }
// export default App;


// import Footer from "./components/Footer";
// import Header from "./components/Header";

// // bootstrap link - 
// // https://getbootstrap.com/docs/4.6/getting-started/introduction/ 


// const App = () => {

//   return (
//     <div className="container">
//       <Header />
//       <div className="container mt-3 mb-3 pt-3 pb-3 shadow bg-white">
//         <h1 className="display-4 text-primary">LTI React App</h1>
//         <p>Welcome to LTI demo react application.</p>
//       </div>
//       <Footer />
//     </div>
//   );
// }

// export default App;


// 
// component 
// state 
// props 
// JSX 

//  arrow function 
// const App = () => {

//    return (
//     <div>
//       <h1>LTI React App</h1>
//       <p>Welcome to LTI demo react application.</p>
//     </div>
//   );
// }

// export default App;

// old JS function 

// function App() {

//   return (
//     <div>
//       <h1>LTI React App</h1>
//       <p>Welcome to LTI demo react application.</p>
//     </div>
//   );

// }

// export default App;



// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
