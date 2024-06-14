"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import "../style/Navbar.css";
import mainicon from "../images/mainicon.webp";
import navbarleaf from "../images/navbarleaf.png";
import rightleaf from "../images/rightleaf.webp";

const Navbar = () => {
    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        setClicked(!clicked);
    };

    return ( 
        <nav className="sticky-top nav2 no-copy-text">
            <div className="under1320width">
                <div >
                    <div className="nav">
                        <Link href="/">
                            <Image className="desi-logo" src={mainicon} alt="Logo"   />
                        </Link>
                        <div>
                            <ul
                                id="navbar"
                                onClick={() => {
                                    setClicked(!clicked);
                                    window.scrollTo(0, 0);
                                }}
                                className={clicked ? "#navbar active" : "#navbar"}
                            >
                                <div className="under-nav-flex">
                                    <li className="naves">
                                        <Link href="/" className="under active">
                                            <span className="do">HOME</span>
                                        </Link>
                                    </li>
                                    <li className="naves">
                                        <Link href="/about" className="under">
                                            <span className="do">ABOUT US</span>
                                        </Link>
                                    </li>
                                    <li className="naves">
                                        <Link href="/Product" className="under">
                                            <span className="do">MENU</span>
                                        </Link>
                                    </li>
                                    <li className="naves">
                                        <Link href="/blog" className="under">
                                            <span className="do">BLOG</span>
                                        </Link>
                                    </li>
                                    <li className="naves">
                                        <Link href="/contact" className="under">
                                            <span className="do">CONTACT US</span>
                                        </Link>
                                    </li>
                                    
                                    
                                </div>
                                <li className="leaf-container">
                                        <Image className="leaf" src={navbarleaf} alt="" />
                                    </li>
                            </ul>
                        </div>
                        <div id="mobile" onClick={handleClick}>
                            <i id="bar" className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
                        </div>
                    </div>
                </div>
            </div>
            <li className="rightleaf-container" style={{position:"absolute",right:"0",top:"0"}}>
                <Image src={rightleaf} alt="" />
            </li>
        </nav>
    );
};

export default Navbar;
