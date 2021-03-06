import axios from "axios";
import { useEffect, useState } from "react";


const Login = () => {

    const [userData, setUserData] = useState({});

    useEffect(() => {
        setUserData({
            userId: '',
            password: ''
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

        axios.get(`http://localhost:9999/users/${userData.userId}`)
            .then((response) => {
                alert(`Login successful for userId ${response.data.id} and userName ${response.data.userName}!`);
            })
            .catch((error) => {
                alert(`${error.message} : wrong credentials!`);
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
                            type="number"
                            id="userId"
                            name="userId"
                            value={userData.userId}
                            className="form-control mb-3"
                            onChange={handleUser}
                            placeholder="Enter userId"
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