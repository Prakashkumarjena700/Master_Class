import { useState } from "react";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const baseUrl = import.meta.env.VITE_BASE_URL;

  const handelRegister = async () => {
    try {
      const res = await axios.post(`${baseUrl}/user/login`, {
        email,
        password,
      });

      if (res?.data?.status) {
        alert(res?.data?.message);
        setEmail("");
        setPassword("");
      } else {
        alert(res?.data?.message);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="grid grid-cols-1 w-1/2 p-6 rounded shadow-xl m-auto gap-3 mt-16">
      <input
        type="email"
        placeholder="Enter email"
        value={email}
        className="border outline-none p-2"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter password"
        value={password}
        className="border outline-none p-2"
        onChange={(e) => setPassword(e.target.value)}
      />

      <button
        onClick={handelRegister}
        className="border bg-teal-600  text-white p-2 cursor-pointer hover:bg-teal-500 transition-all duration-700"
      >
        Login
      </button>
    </div>
  );
};

export default Login;
