// import React from 'react'
import Navbar from "../Navbar"
import Footer from "../Footer"
// import { about } from '../../data/typewriter';
import { Container, Wrapper, Title, Desc, Img } from '../../Components/AboutStylee'
import {HeroRightContainer} from './HeroStyle'
import AboutImg from '../../images/AboutImg.webp';

const About = () => {
  return (
    <>
      <Navbar />
      <Container id="about">
        <Wrapper />
        <Title>About Me</Title>
        <Desc>
          I am Nabia Hani, a third-year Software Engineering student at Karachi University. My enthusiasm for web development is unwavering, and I am currently engaged in MERN stack development at SMIT. Having acquired proficiency in HTML and CSS & JS, I am actively advancing my skills in Reract.js. I am excited to embark on a journey of creativity and learning in the field of web development and look forward to sharing my progress with you..
        </Desc>
        <HeroRightContainer id="Right">
          <Img src={AboutImg} alt="about-image" />
        </HeroRightContainer>
      </Container>
      <Footer />
    </>
  )
}

export default About;