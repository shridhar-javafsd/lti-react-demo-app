
const Register = () => {

    return (
        <div className="container">
            <div className="col-4 bg-white shadow mt-3 mb-3 pt-3 pb-3">
                <p className="display-4 text-primary">Register</p>
                <form className="form form-group" >
                    <div>
                        <input
                            type="text"
                            id="userName"
                            className="form-control mb-3"
                            value=""
                            onChange={(e) => { console.log(e.target.value); }}
                            placeholder="Enter username"
                        />
                        <input
                            type="password"
                            id="password"
                            className="form-control mb-3"
                            value=""
                            onChange={(e) => { console.log(e.target.value); }}
                            placeholder="Enter password"
                        />
                        <input
                            type="submit"
                            id="submit"
                            className="form-control mb-3 btn btn-success"
                            value="Register"
                            onClick={(e) => { alert('done!'); }}
                        />
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Register;