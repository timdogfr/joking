import React, { useState } from 'react'
import { HeroContainer, HeroBg,ImageBg, VideoBg, HeroContent,HeroH1,HeroP,HeroBtnWrapper,ArrowForward,ArrowRight,Button } from './HeroSection.elements';
function HeroSection() {


    const [hover,setHover]= useState(false);
    const onHover = () => {
        setHover(!hover);
    }
    return (
        <>
           <HeroContainer id="home">
                <HeroBg>
                    <ImageBg src={"config/images/bg.png"} />
                </HeroBg>
                <HeroContent>
                    <HeroH1>Official Mutant Age Camel Club Mint Page</HeroH1>
                    <HeroP>Mint your Official Mutant Age Camel Club NFT Below  </HeroP>
                </HeroContent>
           </HeroContainer> 
        </>
    )
}

export default HeroSection
