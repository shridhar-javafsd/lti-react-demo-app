import axios from "axios";
import { useEffect, useState } from "react";

// axios guide - https://www.npmjs.com/package/axios 
// json-server guide - https://www.npmjs.com/package/json-server
// quick guide - json-server.txt file in public folder 

const Register = () => {

    const [userData, setUserData] = useState({});
    const [displayUserName, setDisplayUserName] = useState('');

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

        axios.post('http://localhost:9999/users/', userData)
            .then((response) => {
                alert(`User ${response.data.userName} with id ${response.data.id} registered successfully.`);
            })
            .catch((error) => {
                alert(error.message);
            });

        evt.preventDefault();
    }

    return (
        <div className="container">
            <div className="col-4 bg-white shadow mt-3 mb-3 pt-3 pb-3">
                <p className="display-4 text-primary">Register</p>
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
                            type="number"
                            id="phone"
                            name="phone"
                            value={userData.phone}
                            className="form-control mb-3"
                            onChange={handleUser}
                            placeholder="Enter phone"
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
                            value="Register"
                            onClick={submitUser}
                            s />
                    </div>
                </form>
            </div>
            <div className="col-4 bg-white shadow mt-3 mb-3 pt-3 pb-3">
                <p className="lead text-primary">Registered User Data</p>
                <p>{userData.userName}</p>
                <p>{userData.phone}</p>
                <p>{displayUserName}</p>
            </div>
        </div>
    );
}

export default Register;