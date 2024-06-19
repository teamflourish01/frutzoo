import React from "react";
import Image from "next/image";
import Link from "next/link";
import "../style/Footer.css";
import mainicon from "../images/mainicon.png";
import footericon1 from "../images/footericon1.webp";
import footericon2 from "../images/footericon2.webp";
import footericon3 from "../images/footericon3.webp";
import fb from "../images/fb.webp";
import insta from "../images/insta.webp";
import wp from "../images/wp.webp";

const Footer = () => {
  return (
    <>
      <section style={{ paddingBottom: "100px" }}>
        <div className="">
          <div className="main-width">
            <div>
              <div className="under1320width">
                <div className="all-paddings">
                  <div className="mainicon-footer">
                    <Image src={mainicon} width={207} />
                  </div>
                  <div className="location-time-phone">
                    <div className="footer-flex">
                      <Image src={footericon1} width={15} />
                      <p>
                        SHOP NO. 003, SAMAN COMPLEX, MANSI CROSS ROAD,
                        SATELLITE, AHMEDABAD - 380015
                      </p>
                    </div>
                    <div className="footer-flex">
                      <Image src={footericon2} width={18} />
                      <p>09 : 00 AM to 02 : 00 AM (All Days)</p>
                    </div>
                    <div className="footer-flex">
                      <Image src={footericon3} width={16} />
                      <p>+91 85110 24422</p>
                    </div>
                    <div className="footer-flex1">
                        <Link href="/">
                      <p className="footer-bolds">HOME</p>
                      </Link>

                      <hr className="hrnone" />
                       <Link href="/about">
                      <p className="footer-bolds">ABOUT US</p>
                      </Link>
                      <hr className="hrnone" />
                      <Link href="/Product" >
                      <p className="footer-bolds">MENU</p>
                      </Link>
                      <hr className="hrnone" />
                      <Link href="/blog">
                      <p className="footer-bolds">BLOG</p>
                      </Link>
                      <hr className="hrnone" />
                      <Link href="/contact">
                      <p className="footer-bolds">CONTACT US</p>
                      </Link>
                    </div>
                  </div>
                  <div className="copyright-design-logo-flex">
                    <p className="box1">
                      Copyrights © 2024 Frutzoo All rights reserved.
                    </p>
                    <div className="nav-3-icon-flex box2">
                      <Image src={fb} width={50} />
                      <Image src={insta} width={50} />
                      <Image src={wp} width={50} />
                    </div>
                    <p className="box3">
                      Design & Developed By: FLOURISH CREATIONS PVT.LTD.{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
