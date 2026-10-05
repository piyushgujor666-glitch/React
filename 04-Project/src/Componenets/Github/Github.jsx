import React, { useEffect, useState } from "react";

function Github() {
    // const [data, setData] = useState({});

    // useEffect(() => {
    //     fetch("https://dummyjson.com/users/1")
    //         .then((response) => response.json())
    //         .then((data) => {
    //             setData(data);
    //         });
    // }, []);

    return (
        <div className="text-center m-5 bg-gray-600 text-white p-4">

            <img
                src={data.image}
                alt={data.firstName}
                className="w-40 h-40 rounded-full mx-auto"
            />

            <h1 className="text-3xl mt-4">
                {data.firstName} {data.lastName}
            </h1>

            <p className="text-xl">
                User ID: {data.id}
            </p>

            <p className="text-xl">
                Age: {data.age}
            </p>

        </div>
    );
}

export default Github;

export const githubinfoloader = async()=>{
  const response = await fetch('https://dummyjson.com/users/1')
  return response.json()
}