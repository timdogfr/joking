import React from 'react'
import { BenefitsContainer, IconImage, IconText } from './benefits.elements' 

function Benefits(props) {
    return (
        <>
            <BenefitsContainer >
                <IconImage src={"../../config/images/"+props.image}></IconImage>
                <IconText>{props.text}</IconText>
            </BenefitsContainer>  
        </>
    )
}

export default Benefits
