
//  arrow function 

const App = () => {

  const num = 10;
  const firstName = 'Sonu';

  return (
    <div>
      <h1>LTI React App</h1>
      <p>Welcome to LTI demo react application.</p>
      <p> {num} </p>
      <p> {firstName} </p>
      <p> {10 + num} </p>
    </div>
  );
}

export default App;

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
