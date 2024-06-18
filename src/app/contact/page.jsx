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
import leftleaf from "../../images/leftleaf.webp";
import bannerfullorange from "../../images/bannerfullorange.webp";
import doubleshapeborderbanner from "../../images/doubleshapeborderbanner.png";
import doubledot from "../../images/doubledot.webp";
import contactfruitbanner from "../../images/contactfruitbanner.png";
import bannerhalforange from "../../images/bannerhalforange.webp";
import underheading from "../../images/underheading.webp";

const page = () => {
  return (
    <>
    <section style={{ overflow: "hidden" }}>
                <div className="wavebgbanner">
                    <div className="main-width">
                        <div style={{ marginTop: "170px" }}>
                            <div className="leftleaf-container" style={{ position: "absolute", left:"-5px" }}>
                                <Image src={leftleaf} />
                            </div>
                            <div className="under1320width">
                                <div className="all-paddings">
                                    <div>
                                        <div className="frutzoo-flex">
                                            <div className="every-sip">
                                                <div className="orange-dot">
                                                    <div className="orange-dot-flex">
                                                        <Image
                                                            className="rotate-img"
                                                            src={bannerfullorange}
                                                            alt="Logo"
                                                            width={126}
                                                            height={126}
                                                        />
                                                        <Image
                                                            className=""
                                                            src={doubledot}
                                                            alt="Logo"
                                                            width={26}
                                                            height={26}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="banner-heading">
                                                    <p>Contact Us</p>
                                                </div>
                                            </div>
                                            <div className="big-bg">
                                                <div className="small-bg">

                                                    <Image
                                                        className="fruitzoom1"
                                                        src={doubleshapeborderbanner}
                                                        alt="Doubleshape Border Banner"
                                                    />
                                                    <Image
                                                       style={{height:"auto"}}
                                                        className="fruitzoom"
                                                        src={contactfruitbanner}
                                                        alt="Banner Fruit Zoom"
                                                    />

                                                </div>
                                            </div>
                                        </div>
                                        <div className="cut-orange-and-dot">
                                            <Image src={bannerhalforange} width={127} />
                                            <Image
                                                className=""
                                                src={doubledot}
                                                alt="Logo"
                                                width={26}
                                                height={26}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div class="carousel-wrapper">
                        <div class="carousel">
                            <div class="item">Be Healthier</div>
                            <div class="item"><Image className="item-image" src={bannerfullorange} /></div>
                            <div class="item stroke">Be Healthier</div>
                            <div class="item"><Image className="item-image" src={bannerfullorange} /></div>
                            <div class="item">Be Healthier</div>
                            <div class="item"><Image className="item-image" src={bannerfullorange} /></div>
                            <div class="item stroke">Be Healthier</div>
                            <div class="item"><Image className="item-image" src={bannerfullorange} /></div>
                            <div class="item">Be Healthier</div>
                            <div class="item"><Image className="item-image" src={bannerfullorange} /></div>
                            <div class="item stroke">Be Healthier</div>
                            <div class="item"><Image className="item-image" src={bannerfullorange} /></div>
                            <div class="item">Be Healthier</div>
                            <div class="item"><Image className="item-image" src={bannerfullorange} /></div>
                            <div class="item stroke">Be Healthier</div>
                            <div class="item"><Image className="item-image" src={bannerfullorange} /></div>
                            <div class="item">Be Healthier</div>
                            <div class="item"><Image className="item-image" src={bannerfullorange} /></div>
                            <div class="item stroke">Be Healthier</div>
                            <div class="item"><Image className="item-image" src={bannerfullorange} /></div>
                            <div class="item">Be Healthier</div>
                            <div class="item"><Image className="item-image" src={bannerfullorange} /></div>
                            <div class="item stroke">Be Healthier</div>
                            <div class="item"><Image className="item-image" src={bannerfullorange} /></div>
                            <div class="item">Be Healthier</div>
                            <div class="item"><Image className="item-image" src={bannerfullorange} /></div>
                            <div class="item stroke">Be Healthier</div>
                            <div class="item"><Image className="item-image" src={bannerfullorange} /></div>
                            <div class="item">Be Healthier</div>
                            <div class="item"><Image className="item-image" src={bannerfullorange} /></div>
                            <div class="item stroke">Be Healthier</div>
                            <div class="item"><Image className="item-image" src={bannerfullorange} /></div>


                        </div>
                    </div>
                </div>
            </section>
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
