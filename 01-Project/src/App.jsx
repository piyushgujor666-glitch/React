import { useState } from "react";

function App() {
  const [color, setColor] = useState();

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 gap-20">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl w-20 ">
          <button className="bg-red-500 text-white px-4 py-2 rounded-full" onClick={() => setColor("red")}>
            Red
          </button>
        </div>
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl w-20 ">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-full" onClick={() => setColor("blue")}>
            Blue
          </button>
        </div>
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl w-21 ">
          <button className="bg-green-500 text-white px-4 py-2 rounded-full" onClick={() => setColor("green")}>
            Green
          </button>
        </div>
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl w-20 ">
          <button className="bg-black text-white px-4 py-2 rounded-full" onClick={() => setColor("black")}>
            Black
          </button>
        </div><div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl w-23 ">
          <button className="bg-purple-500 text-white px-4 py-2 rounded-full" onClick={() => setColor("purple")}>
            Purple
          </button>
        </div>
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl w-20 ">
          <button className="bg-gray-500 text-white px-4 py-2 rounded-full" onClick={() => setColor("gray")}>
            Gray
          </button>
        </div>
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl w-25 ">
          <button className="bg-orange-500 text-white px-4 py-2 rounded-full" onClick={() => setColor("orange")}>
            Orange
          </button>
        </div>
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl w-22 ">
          <button className="bg-yellow-500 text-white px-4 py-2 rounded-full" onClick={() => setColor("yellow")}>
            Yellow
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;