import React from "react";
import "./container.css";
import MailIcon from "@material-ui/icons/Mail";

export default function Container() {
  return (
    <div className="container">
      <div className="left">
        <h1 className="left-header">Play Ground Desing</h1>
        <p>Join the fun</p>
      </div>
      <div className="right">
        <div className="wrapper">
          <div className="header-wrapper">
            <p className="right-paragraph">Welcome!</p>
            <h1 className="right-header">Join The Community</h1>
          </div>
          <form action="" className="right-form">
            <label htmlFor="">E-mail or Username</label>
            <input
            className='input'
              type="text"
              placeholder={"e.g: carlos@gmail.com"}
              startAdornment={<MailIcon />}
            ></input>
            <label htmlFor="">Password</label>
            <input 
            className='input'
            type="text" placeholder="eg: X Æ A-12" />
            <button>Sing Up</button>
            <span>Already a member?<a href='/'>Login</a></span>
          </form>
        </div>
      </div>
    </div>
  );
}
