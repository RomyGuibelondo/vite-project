import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
    const [value, setValue] = useState({
        email: "",
        password: "",
    });
    const navigate = useNavigate();
    const [error, setError] = useState("");
    const handleSubmit = (event) => {
        event.preventDefault();
        axios
            .post("http://localhost:8081/login", value)
            .then((res) => {
                if (res.data.Status === "Success") {
                    navigate("/");
                } else {
                    setError(res.data.Error);
                }
            })
            .catch((err) => console.log(err));
    };
    return (
        <div className="grid" >
            <div className="shadow bg-sky-500 border p-5 grid grid-flow-row gap-5 justify-self-center mt-20">
                <div>{error && error} </div>
                <h1 className="justify-self-center">Login</h1>
                <form className="grid gap-5" onSubmit={handleSubmit}>
                    <div className="grid">
                        <label className="pe-3" htmlFor="email">Email</label>
                        <input className="border" onChange={(e) => setValue({ ...value, email: e.target.value })} type="email" placeholder="Enter Email" name="email" />
                    </div>
                    <div className="grid" >
                        <label className="" htmlFor="password">Password</label>
                        <input className="border" onChange={(e) => setValue({ ...value, password: e.target.value })} type="password" placeholder="Enter Password" name="password" />
                    </div>
                    <button className="bg-sky-600" type="submit">Log in</button>
                    
                    <p>You are agree to aour terms and policies</p>
                </form>
            </div>
        </div>
    );
}
export default Login;
