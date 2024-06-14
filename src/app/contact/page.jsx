"use client"

import React,{useState} from "react";
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
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const page = () => {
  const [formdata, setformdata] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

  const validateForm = () => {
    const { name, Phone, email, subject, message } = formdata;
    if (!name || !Phone || !email || !subject || !message) {
      // toast.error("Please fill out all fields.");
      alert("invalid fields")
      return false;

    }
    return true;
  };

  const submitForm = () => {
    // if (validateForm()) {
      
      axios
        .post("http://localhost:8000/mail", formdata)
        .then((response) => {
          console.log(response.data);
          setformdata({
            name: "",
            Phone: "",
            email: "",
            subject: "",
            message: "",
          });

          toast.success("Form submitted successfully!");
        })
        .catch((error) => {
          console.error("There was an error submitting the form!", error);
          toast.error("Failed to submit the form. Please try again.");
        });
    // }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setformdata({
      ...formdata,
      [name]: value,
    });
  };
  return (
    <>
      <section style={{ overflow: "hidden", paddingTop: "100px" }}>
        <div className="wavebgbanner">
          <div className="main-width">
            <div>
              <div>
                <div className="under1320width">
                  <div className="all-padding">
                    <div className="contact-container">
                      <div className="contact-flex">
                        <div className="contact-left">
                          <div className="left-container">
                            <div className="information-p">
                              <p className="contact-info">
                                Contact Information
                              </p>
                              <p className="contact-info-para">
                                Bring the table winwin survival strateges ensure
                                proactive domination the end of the day going
                                real times multiple touchpoints.
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
                        <form onSubmit={submitForm}>

                          <div className="input-row">
                            <input
                              type="text"
                              className="input-box"
                              placeholder="Name"
                              name="name"
                              value={formdata.name}
                              onChange={handleChange}
                              required
                            />
                            <input
                              type="text"
                              className="input-box"
                              placeholder="Email"
                              name="email"
                              value={formdata.email}
                              onChange={handleChange}
                              required
                            />
                          </div>

                          <div
                            style={{ margin: "24px 0" }}
                            className="input-row"
                          >
                            <input
                              type="text"
                              className="input-box"
                              placeholder="Subject"
                              name="subject"
                              value={formdata.subject}
                              onChange={handleChange}
                              required
                            />
                            <input
                              type="text"
                              className="input-box"
                              placeholder="Phone"
                              name="phone"
                              value={formdata.Phone}
                              onChange={handleChange}
                              required
                            />
                          </div>
                          <div className="text-area">
                            <textarea
                              name="message"
                              id=""
                              className="textarea"
                              placeholder="Message"
                          
                              value={formdata.message}
                              onChange={handleChange}
                              required
                            ></textarea>
                          </div>
                          <div className="button-container">
                            <div className="button-padding">
                              <button className="contact-button" type="submit" >SUBMIT</button>
                            </div>
                          </div>
                        </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ToastContainer />
    </>
  );
};

export default page;
