import { useState, useCallback, useEffect, useRef } from "react";
import "./App.css";

function App() {
  const [length, setlength] = useState(8);
  const [number, setnumber] = useState(false);
  const [character, setcharacter] = useState(false);
  const [password, setpassword] = useState("");

  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (number) str += "0123456789";
    if (character) str += "!@#$%^&*()_+~`|}{[]:;?><,./-=";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }

    setpassword(pass);
  }, [length, number, character]);

const copyToClipboard = useCallback(() => {
  window.navigator.clipboard.writeText(password);
  window.alert("Copied to clipboard");
}, [password]);

  useEffect(() => {
    passwordGenerator();
  }, [passwordGenerator]);

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-800 h-60 pt-5">

        <h1
          style={{
            fontSize: "30px",
            display: "flex",
            justifyContent: "center"
          }}
        >
          Password Generator
        </h1>

        <div
          style={{
            marginTop: "35px",
            border: "1px solid gray",
            borderRadius: "5px"
          }}
          className="flex items-center justify-between bg-gray-800"
        >
          <input
            type="text"
            value={password}
            readOnly
            placeholder="Password"
            className="outline-none w-full py-1 px-3 bg-white"
            ref={passwordRef}
          />

          <button
            style={{
              backgroundColor: "gray",
              marginLeft: "2px",
              marginTop: "1px",
              borderRadius: "5px",
              paddingTop: "0px",
              marginRight: "2px"
            }}
            onClick={copyToClipboard}
            className="bg-gray-500 text-white py-1 px-3"
          >
            Copy
          </button>
        </div>

        <div className="flex items-center justify-between mt-4">

          <label className="flex items-center">
            <input
              type="checkbox"
              checked={number}
              onChange={(e) => setnumber(e.target.checked)}
              className="mr-2"
            />
            Include Numbers
          </label>

          <label className="flex items-center">
            <input
              type="checkbox"
              checked={character}
              onChange={(e) => setcharacter(e.target.checked)}
              className="mr-2"
            />
            Include Special Characters
          </label>

        </div>

        <div className="mt-4">

          <label htmlFor="length" className="mr-2">
            Length:
          </label>

          <input
            type="number"
            id="length"
            value={length}
            onChange={(e) => setlength(Number(e.target.value))}
            min={1}
            max={20000}
            className="w-16 py-1 px-2 border rounded"
          />

        </div>

      </div>
    </>
  );
}

export default App;