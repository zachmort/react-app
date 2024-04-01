import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.scss";

const Navbar = () => {
  const [active, setActive] = useState(false);
  const [open, setOpen] = useState(false);


  const isActive = ()=>{
    window.scrollY > 0 ? setActive(true) : setActive(false)
  }
  
  useEffect(()=>{
    window.addEventListener("scroll", isActive);
    return () => {
      window.removeEventListener("scroll", isActive);
    };
  }, []);

  const currentUser={
    id:1
    , username: "John"
    , isSeller:true
  }

  return (
    <div className={active ? "navbar active": "navbar"}>
      <div className="container">
        <div className="logo">
          {/* <link to="/home"> */}
            <span className='text'>NurseFinder</span>
          {/* </link> */}
          <span className='dot'>.</span>
        </div>
        <div className="links">
            <span>Explore</span>
            <span>Sign in</span>
            <span>Post</span>
            <span>English</span>
            {!currentUser?.isSeller && <span>Become a Poster</span>}
            {!currentUser&& <button>Join</button>}
            {currentUser && (
              <div className="user" onClick={()=>setOpen(!open)}>
                <img src="https://images.freeimages.com/image/previews/2b8/instaheart-png-design-5690394.png?fmt=webp&h=350" alt="" />
                <span>{currentUser?.username}</span>
                {open && <div className="options">
                  {currentUser?.isSeller && (
                    <>
                      <span>Gigs</span>
                      <span>Add New Job</span>
                    </>
                  )}
                    <span>Orders</span>
                    <span>Messages</span>
                    <span>Logout</span>
                </div>}
              </div>
            )}
        </div>
      </div>
      {active &&(
        <>
          <hr />
          <div className="menu">
            <span>Test</span>
            <span>Test2</span>
          </div>
        </>
      )}
    </div>
  )
}

export default Navbar