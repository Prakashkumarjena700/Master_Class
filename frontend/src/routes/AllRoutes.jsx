import { Routes, Route } from "react-router";
import Home from "../page/Home";
import Login from "../page/Login";
import Register from "../page/Register";

const AllRoutes = () => {
  return (
    <Routes>
      <Route element={<Home />} path="/" />
      <Route element={<Login />} path="/login" />
      <Route element={<Register />} path="/register" />
    </Routes>
  );
};

export default AllRoutes;
