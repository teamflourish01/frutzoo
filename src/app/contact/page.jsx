import React from "react";
import "../../Style/contact.css";
import "../../Style/HomeSection.css";
import Image from "next/image";
import footericon1 from "../../images/footericon1.webp";
import footericon2 from "../../images/footericon2.webp";
import footericon3 from "../../images/footericon3.webp";
import mail from "../../images/mail.png";
import whatapp from "../../images/wp.webp";
import insta from "../../images/insta.webp";
import fb from "../../images/fb.Webp";

const page = () => {
  return (
    <>
      <section style={{ overflow: "hidden", paddingTop: "100px" }}>
        <div className="wavebgbanner">
          <div className="main-width">
            <div>
              <div>
                <div className="under1320width">
                  <div className="contact-container">
                    <div className="contact-flex">
                      <div className="contact-left">
                        <div className="left-container">
                          <div className="information-p">
                            <p className="contact-info">Contact Information</p>
                            <p className="contact-info-para">
                              Bring the table winwin survival strateges ensure
                              proactive domination the end of the day going real
                              times multiple touchpoints.
                            </p>
                          </div>

                          <div className="contact-no-mail">
                            <div className="contact-no">
                              <Image
                                src={footericon3}
                                width={16}
                                className="contact-icon"
                              />
                              <p className="color">+91 85110 24422</p>
                            </div>
                            <div className="contact-mail">
                              <Image
                                src={mail}
                                width={16}
                                className="contact-icon"
                              />
                              <p className="color">evanmattew@mail.com</p>
                            </div>
                            <div className="contact-location">
                              <Image
                                src={footericon1}
                                width={16}
                                className="contact-icon"
                              />
                              <p className="color">
                                SHOP NO. 003, SAMAN COMPLEX, MANSI CROSS ROAD,
                                SATELLITE, AHMEDABAD - 380015
                              </p>
                            </div>
                          </div>

                          <div className="icons">
                            <Image src={fb} />
                            <Image src={insta} />
                            <Image src={whatapp} />
                          </div>
                        </div>
                      </div>
                      <div className="contact-right">
                        <div className="input-row">
                          <input
                            type="text"
                            className="input-box"
                            placeholder="Name"
                          />
                          <input
                            type="text"
                            className="input-box"
                            placeholder="Email"
                          />
                        </div>

                        <div style={{ margin: "24px 0" }} className="input-row">
                          <input
                            type="text"
                            className="input-box"
                            placeholder="Subject"
                          />
                          <input
                            type="text"
                            className="input-box"
                            placeholder="Phone"
                          />
                        </div>
                        <div className="text-area">
                          <textarea
                            name=""
                            id=""
                            className="textarea"
                            placeholder="Message"
                          ></textarea>
                        </div>
                        <div className="button-container">
                        <div className="button-padding">
                          <button className="contact-button">SUBMIT</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
