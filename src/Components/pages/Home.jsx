import React from 'react'
import Navbar from "../../Components/Navbar";
import HeroBgAnimation from './HeroBgAnimation'
import { HeroContainer, HeroBg, HeroLeftContainer, Img, HeroRightContainer, HeroInnerContainer, TextLoop, Title, Span, SubTitle,SocialMediaIcons,SocialMediaIcon, HireMeButton } from './HeroStyle'
import HeroImg from '../../images/HeroImg.png';
import Typewriter from 'typewriter-effect';
import { Bio } from '../../data/typewriter';
import Footer from "../Footer"


function HeroSection() {
    return (
        <>
                <Navbar />
                <HeroContainer>
                    <HeroBg>
                        <HeroBgAnimation />
                    </HeroBg>
                    <HeroInnerContainer >
                        <HeroLeftContainer id="Left">
                            <Title>Hi, I am <br /> {Bio.name}</Title>
                            <TextLoop>
                                I am a
                                <Span>
                                    <Typewriter
                                        options={{
                                            strings: Bio.roles,
                                            autoStart: true,
                                            loop: true,
                                        }}
                                    />
                                </Span>
                            </TextLoop>
                            <SubTitle>{Bio.description}</SubTitle>
                            <HireMeButton href={Bio.resume} target='display'>Hire Me</HireMeButton>
                        </HeroLeftContainer>

                        <HeroRightContainer id="Right">

                            <Img src={HeroImg} alt="hero-image" />
                        </HeroRightContainer>
                    </HeroInnerContainer>

                </HeroContainer>
                <Footer />
        </>
    )
};

export default HeroSection