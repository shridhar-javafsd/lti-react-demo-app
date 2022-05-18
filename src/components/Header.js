const Header = () => {

  return (
    <div>
      <header class="header sticky-top">
        <nav class="navbar navbar-fixed-top navbar-expand-lg navbar-dark bg-dark text-muted">
          <div class="container">
            <span className="navbar-brand" to="#">
              <img src="https://www.bisinfotech.com/wp-content/uploads/2020/02/LTI-Logo.jpg"
                height="24px" alt="LTI" />
            </span>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarResponsive">
              <ul class="navbar-nav ml-auto">
                <li className="nav-item">
                  <span className="nav-span" to="#" > EmpData </span>

                </li>
                <li className="nav-item">
                  <span className="nav-span" to="#" > link2 </span>
                </li>
                <li className="nav-item">
                  <span className="nav-span" to="#" > link3 </span>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Header;




// const Header = () => {

//   return (
//     <div>
//       <header className="header">
//         <nav className="navbar navbar-dark bg-dark text-light">
//           <div className="container">
//             <span>
//               <img height="24px" src="https://www.bisinfotech.com/wp-content/uploads/2020/02/LTI-Logo.jpg"></img> </span>
//             <span >abc</span>
//             <span>def</span>
//             <span>ghi</span>
//           </div>
//         </nav>
//       </header>
//     </div>
//   );
// }

// export default Header;
