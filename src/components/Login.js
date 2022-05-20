import axios from "axios";
import { useEffect, useState } from "react";


const Login = () => {

    const [userData, setUserData] = useState({});

    useEffect(() => {
        setUserData({
            userName: '',
            password: '',
            phone: ''
        });
    }, []);

    const handleUser = (evt) => {
        console.log(evt.target.value);
        setUserData({
            ...userData,
            [evt.target.name]: evt.target.value
        });
    }

    const submitUser = (evt) => {

        axios.get('http://localhost:9999/users/')
            .then((response) => {
                // logic to find registered user 
                alert(response.data.userName);
            })
            .catch((error) => {
                alert(error.message);
            });

        evt.preventDefault();
    }

    return (
        <div className="container">
            <div className="col-4 bg-white shadow mt-3 mb-3 pt-3 pb-3">
                <p className="display-4 text-primary">Login</p>
                <form className="form form-group" >
                    <div>
                        <input
                            type="text"
                            id="userName"
                            name="userName"
                            value={userData.userName}
                            className="form-control mb-3"
                            onChange={handleUser}
                            placeholder="Enter username"
                            autoFocus
                        />
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={userData.password}
                            className="form-control mb-3"
                            onChange={handleUser}
                            placeholder="Enter password"
                        />
                        <input
                            type="button"
                            id="submit"
                            className="form-control mb-3 btn btn-primary"
                            value="Login"
                            onClick={submitUser}
                            s />
                    </div>
                </form>
            </div>
        </div>
    );
}
export default Login;