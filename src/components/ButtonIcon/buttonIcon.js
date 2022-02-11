import React from 'react';
import {ButtonWithIcon,SocialIcon} from './buttonIcon.element';
import {AiFillTwitterCircle, AiFillFacebook, AiFillInstagram} from "react-icons/ai";
import { Link } from 'react-router-dom';
function ButtonIcon(props) {
    return (
        <>
              
            <ButtonWithIcon bg={props.bg}>
                <SocialIcon>
                    <props.Icon/>
                </SocialIcon>
                {props.Text}
            </ButtonWithIcon>
            
        </>
    )
}

export default ButtonIcon
