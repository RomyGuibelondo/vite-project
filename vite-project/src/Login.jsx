import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
    const [backgroundColor, setBackgroundColor] = useState("#ffffff");

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
    const handleColorChange = (event) => {
        const color = event.target.value;
        setBackgroundColor(color);
    };
    return (
        <>
            <div style={{ backgroundColor }} className="h-screen grid content-center justify-center bg-blueGray-100 ">
                <input className="absolute" type="color" value={backgroundColor} onChange={handleColorChange} />
                <div className="w-full  gap-5 grid text-xl bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-5 dark:bg-gray-800 p-6 dark:border-gray-700 ">
                    <div>{error && error} </div>
                    <h2 className="justify-self-center">Login</h2>
                    <form className="gap-5 grid" onSubmit={handleSubmit}>
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="email">
                                Email
                            </label>
                            <input className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={(e) => setValue({ ...value, email: e.target.value })} type="email" placeholder="Enter Email" name="email" />
                        </div>
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="password">
                                Password
                            </label>
                            <input className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={(e) => setValue({ ...value, password: e.target.value })} type="password" placeholder="Enter Password" name="password" />
                        </div>
                        <button className="font-medium text-primary-600 hover:underline dark:text-primary-500" type="submit">
                            Log in
                        </button>
                        <p>You are agree to aour terms and policies</p>
                    </form>
                </div>
            </div>
            
        </>
    );
}

export default Login;
