import { useEffect, useState } from "react";

const Register = () => {

    const [userData, setUserData] = useState({});
    // const [userName, setUserName] = useState('');

    useEffect(() => {
        setUserData({
            userName: '',
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

    // const submitUser = (evt) => {
    //     setUserName();
    //     evt.preventDefault();
    // }

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
                            className="form-control mb-3"
                            value={userData.userName}
                            onChange={handleUser}
                            placeholder="Enter username"
                        />
                        <input
                            type="password"
                            id="password"
                            name="password"
                            className="form-control mb-3"
                            value={userData.password}
                            onChange={handleUser}
                            placeholder="Enter password"
                        />
                        <input
                            type="button"
                            id="submit"
                            className="form-control mb-3 btn btn-success"
                            value="Register"
                            onClick={(e) => { alert('done!'); }}
                        />
                    </div>
                </form>
            </div>
            <div className="col-4 bg-white shadow mt-3 mb-3 pt-3 pb-3">
                <p className="lead text-primary">Registered User Data</p>
                <p>{userData.userName}</p>
            </div>
        </div>
    );
}

export default Register;