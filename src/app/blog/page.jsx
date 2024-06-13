import React from "react";
import "../../Style/blog.css";
import Image from "next/image";
import blogcard from "../../images/blogcard.jpg";
import Arrow from "../../images/Arrow.png"
const page = () => {
  return (
    <>
      <section style={{ overflow: "hidden" }}>
        <div className="wavebgbanner">
          <div className="main-width">
            <div>
              <div>
                <div className="under1320width">
                  <div className="blog-container">
                    <div className="blog-img">
                      <Image src={blogcard} className="blogimg" />
                    </div>
                    <div className="blog-description">
                      <p className="health">
                        The Health Benefits of Freshly Squeezed Fruit Juices
                      </p>
                      <p className="maintaining">
                        Maintaining a healthy lifestyle can sometimes feel like
                        a challenge in our fast-paced world.
                      </p>
                      <div className="read-more">
                        <p className="read-more-p">Read More</p>
                        <Image src={Arrow} alt="" srcset="" className="arrow" />
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
