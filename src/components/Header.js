import { Link } from "react-router-dom";

const Header = () => {

  return (
    <div>
      <header className="header sticky-top">
        <nav className="navbar navbar-fixed-top navbar-expand-lg navbar-dark bg-dark text-muted">
          <div className="container">
            <Link className="navbar-brand" to="/home">
              <img src="https://www.lntinfotech.com/wp-content/uploads/2017/06/LTI_Lets_solve.png"
                height="24px" alt="LTI" />
            </Link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarResponsive">
              <ul class="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link className="nav-span" to="/emp" > EmpData </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-span" to="/login" > Login </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-span" to="/register" > Register </Link>
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
