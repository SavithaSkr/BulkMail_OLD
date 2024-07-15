import React, { useState } from "react";
import axios from "axios";
import "./App.css";
const App = () => {
  const [msg, setMsg] = useState("");
  const [status, setStatus] = useState(false);

  const handlemsg = (e) => {
    setMsg(e.target.value);
  };

  const send = () => {
    setStatus(true);
    axios.post("http://localhost:5000/sendemail", { msg: msg }).then((data) => {
      if (data.true) {
        alert("Email Sent Successfully");
      } else {
        alert(" Problem in sending the Email");
      }
    });
  };

  return (
    <>
      <div className="bg-sky-950 text-white text-center">
        <h2 className="text-2xl font-medium px-5 py-5"> Bulk Mail </h2>
      </div>
      <div className="bg-sky-800 text-white text-center">
        <h2 className="text-2xl font-medium px-5 py-5">
          We can Help your Business Sending Mulitiple Email
        </h2>
      </div>
      <div className="bg-sky-600 text-white text-center">
        <h2 className="text-2xl font-medium px-5 py-5">Drag and Drop</h2>
      </div>
      <div className="bg-sky-400 flex flex-col text-black items-center px-5 py-5">
        <textarea
          className="w-[80%] h-32 py-2 outline-none px-10 border rounded-md"
          name=""
          id=""
          placeholder="enter your mail text..."
          onChange={handlemsg}
          value={msg}
        ></textarea>
        <div className="bg-sky-400 flex flex-col text-black items-center px-5 py-5">
          <input
            type="file"
            className=" border rounded-md py-4 px-4 mt-5 mb-5"
            name=""
            id=""
            placeholder="enter your mail text..."
          ></input>
        </div>
        <p>Total emails in the file : 0</p>

        <div className="bg-sky-400 text-white text-center mt-5">
          <button
            className="bg-sky-950 text-white py-2 px-4 font-medium rounded-md w-fit"
            onClick={send}
          >
            {status ? "Sending..." : "Send"}
          </button>
        </div>
      </div>
      <div className="bg-sky-300 text-white text-center p-8"></div>
      <div className="bg-sky-200 text-white text-center p-8"></div>
    </>
  );
};

export default App;
