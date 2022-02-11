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
                    <ImageBg src={"config/images/bg.jpg"} />
                </HeroBg>
                <HeroContent>
                    <HeroH1>Official Mutant Age Camel Club Mint Page</HeroH1>
                    <HeroP>Mint your Official Mutant Age Camel Club NFT Below  </HeroP>
                    {/* <HeroBtnWrapper>
                        <Button to="about" spy={true} smooth={true} offset={-80} duration={500} onMouseEnter={onHover} onMouseLeave={onHover}>
                            Mint
                        </Button>
                    </HeroBtnWrapper> */}
                </HeroContent>
           </HeroContainer> 
        </>
    )
}

export default HeroSection
