import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./Pages/About/About";
import Apointment from "./Pages/Apointment/Apointment";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import RequireAuth from "./Pages/Login/RequireAuth";
import SignUp from "./Pages/Login/SignUp";
import Navbar from "./Pages/Shared/Navbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DashBoard from "./Pages/DashBoard/DashBoard";
import MyAppointment from "./Pages/DashBoard/MyAppointment";
import MyReview from "./Pages/DashBoard/MyReview";
import Users from "./Pages/DashBoard/Users";
import RequireAdmin from "./Pages/Login/RequireAdmin";
import ManageDoctors from "./Pages/DashBoard/MangeDoctors";
import AddDoctor from "./Pages/DashBoard/AddDoctor";
import Payment from "./Pages/DashBoard/Payment";

function App() {
  return (
    <div className="mx-w-7xl mx-auto px-12">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route
          path="/appointment"
          element={
            <RequireAuth>
              <Apointment />
            </RequireAuth>
          }
        />
        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <DashBoard />
            </RequireAuth>
          }
        >
          <Route index element={<MyAppointment />}></Route>
          <Route path="review" element={<MyReview />}></Route>
          <Route path="payment/:id" element={<Payment />}></Route>
          <Route
            path="users"
            element={
              <RequireAdmin>
                <Users />
              </RequireAdmin>
            }
          ></Route>
          <Route
            path="addDoctor"
            element={
              <RequireAdmin>
                <AddDoctor />
              </RequireAdmin>
            }
          ></Route>
          <Route
            path="manageDoctor"
            element={
              <RequireAdmin>
                <ManageDoctors />
              </RequireAdmin>
            }
          ></Route>
        </Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
