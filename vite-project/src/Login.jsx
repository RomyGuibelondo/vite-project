import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
    const [value, setValue] = useState({
        email: "",
        password: "",
    });
    
    const navigate = useNavigate()

    const [error, setError] = useState("");
    const handleSubmit = (event) => {
        event.preventDefault();
        axios
            .post("http://localhost:8081/login", value)
            .then((res) => {
                if (res.data.Status === "Success") {
                    navigate('/')
                } else {
                    setError(res.data.Error);
                }
            })
            .catch((err) => console.log(err));
    };
    return (
        <div>
            <div>
                <div>{error && error} </div>
                <h2>Login</h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input onChange={(e) => setValue({ ...value, email: e.target.value })} type="email" placeholder="Enter Email" name="email" />
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input onChange={(e) => setValue({ ...value, password: e.target.value })} type="password" placeholder="Enter Password" name="password" />
                    </div>
                    <button type="submit">Log in</button>
                    <p>You are agree to aour terms and policies</p>
                </form>
            </div>
        </div>
    );
}

export default Login;
