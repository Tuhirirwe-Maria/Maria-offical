import React, {  useState } from "react";

  import Link from 'next/link'
  import { BsSearch } from 'react-icons/bs';



function NavBar() {

  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const [showMe, setShowMe] = useState(false);
  function toggle(){
    setShowMe(!showMe);
  }

    return (
<div id="header" className="sticky-top d-flex align-items-center justify-content-center " style={{backgroundColor:"#000"}}>
<div className="container d-flex align-items-center justify-content-between">
 
    <Link href= "/">
    <a className="text-decoration-none text-light">
    <h1 style={{fontSize: "4rem"}} className="text-light">Maria</h1>
    </a>
    </Link>

<nav id="navbar"  className={click ? "nav-options active " : "nav-options "}>
      
  <ul className=" m-0 p-1  navigationBar" style={{listStyle: "none", color:"#556270" }}>
    <li className="option " onClick={closeMobileMenu}>
    <Link href="/#hero">
      <a className="text-decoration-none text-light">Home</a>
    </Link>
    </li>

   

    <li className="option" onClick={closeMobileMenu}>
    <Link href="/#about">
      <a className="text-decoration-none text-light"> About</a>
    </Link>
    </li>

    <li className="thedropdown option"  onClick={closeMobileMenu}>
    <Link href="/#work">
      <a className="thedropdown text-light ">
        <span className="thedropdown ">Projects</span> 
      </a>
      </Link>
            </li>

    <li className="option" onClick={closeMobileMenu}>
    <Link href="/#more">
      <a className="text-decoration-none text-light">More about me</a>
    </Link>
    </li>

    <li className="option" onClick={closeMobileMenu}>
    <Link href="/#contact">
      <a className="text-decoration-none text-light">Contact</a>
    </Link>
    </li>
 


  </ul>
  </nav>

<div className="mobile-menu " onClick={handleClick}>
  {click ? (
    <i className="menu-icon text-light bi bi-x-lg animate__animated animate__fadeInLeft fw-bolder fs-1"></i>
  ) : (
    <i className=" menu-icon bi bi-list text-light animate__animated animate__fadeInLeft fw-bolder fs-1"></i>

  )}
</div>
</div>
</div>
    )
}

export default NavBar
