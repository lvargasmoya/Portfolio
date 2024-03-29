import React from "react";
import home1 from "../img/home1.png";
//Style
import styled from "styled-components";
import { About, Description, Image, Hide } from "../styles";
const AboutSections = () => {
  return (
    <About>
      <Description>
        <div className="title">
          <Hide>
            <h2>We work to make</h2>
          </Hide>
          <Hide>
            <h2>
              your <span>dreams</span> come
            </h2>
          </Hide>
          <Hide>
            <h2>true.</h2>
          </Hide>
        </div>
        <p>
          Contact us for any photography or videography ideas that you have. We
          have professionals with amazing skills.
        </p>
        <button>Contact us</button>
      </Description>
      <Image>
        <img src={home1} alt="lad with a camera" />
      </Image>
    </About>
  );
};

export default AboutSections;
