import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import "./style/home.css";
import { useUserAuth } from "../context/UserAuthContext";

function Home() {
  const { user, logOut } = useUserAuth();
  const handleLogout = async () => {
    try {
      await logOut();
    } catch (err) {
      console.log(err.message);
    }
  };
  return (
    <div className="main-box">
      <div className="popup-box">
        <p>Successfully Login</p>
        <p>{`Welcome ${user.email}`}</p>
        <Link style={{ width: "50px", backgroundColor: "blue" }} to="/">
          <Button onClick={handleLogout}>Logout</Button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
