import axios from "axios";
import React, { useState } from "react";

function AddEmployee() {
    const [data, setData] = useState({
        name: "",
        email: "",
        password: "",
        address: "",
        image: "",
    });

    const handleSubmit = (event) => {
        event.preventDefault();
        const formdata = new formdata();
        formdata.append("name", data.name);
        formdata.append("email", data.email);
        formdata.append("password", data.password);
        formdata.append("image", data.image);
        axios.post('http://localhost:8081/create', formdata)
        .then(res => console.log(res))
        .catch(err => console.log(err));
    };

    return (
        <div className="container mx-auto p-8 grid justify-center bg-slate-300 ">
            <div className="border p-10 shadow-xl">
                <h1 className="text-2xl font-bold mb-4 justify-self-center">Add Employee</h1>
                <form className="space-y-4 grid  " onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                            Name
                        </label>
                        <input onChange={(e) => setData({ ...data, name: e.target.value })} className="mt-1 block w-full border  shadow-xl focus:ring-indigo-500 focus:border-indigo-500  " id="name" type="text" required />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Email
                        </label>
                        <input onChange={(e) => setData({ ...data, email: e.target.value })} className="mt-1 block w-full border  shadow-xl focus:ring-indigo-500 focus:border-indigo-500  " id="email" type="email" required />
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                            Password
                        </label>
                        <input onChange={(e) => setData({ ...data, password: e.target.value })} id="password" type="password"  className="mt-1 block w-full border  shadow-xl focus:ring-indigo-500 focus:border-indigo-500  " required />
                    </div>
                    <div>
                        <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                            Address
                        </label>
                        <input onChange={(e) => setData({ ...data, address: e.target.value })} id="address" type="text"  className="mt-1 block w-full border  shadow-xl focus:ring-indigo-500 focus:border-indigo-500 " required />
                    </div>
                    <div>
                        <label htmlFor="image" className="block text-sm font-medium text-gray-700">
                            Select Image
                        </label>
                        <input onChange={(e) => setData({ ...data, image: e.target.files[0] })} id="image" type="file" className="mt-1 block w-full border shadow-xl focus:ring-indigo-500 focus:border-indigo-500 " required />
                    </div>
                    <div className="flex justify-end">
                        <button type="submit" className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            Create
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default AddEmployee;
