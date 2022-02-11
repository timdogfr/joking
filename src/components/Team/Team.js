import React from 'react'
import { TeamContainer, TeamMember, TeamImage, TeamContent, TeamName , TeamDesignation } from './Team.elements'

function Team() {
    return (
        <>
         <TeamContainer>
             <TeamMember>
                <TeamImage src={"/config/images/aiden.png"}></TeamImage>
                 <TeamContent>
                      <TeamName>Aiden Hosszu</TeamName>
                       <TeamDesignation>Founder</TeamDesignation>
                 </TeamContent>
             </TeamMember>
             <TeamMember>
                <TeamImage src={"/config/images/will.png"}></TeamImage>
                 <TeamContent>
                 <TeamName>Will DeVane</TeamName>
                       <TeamDesignation>Co-Founder</TeamDesignation>
                 </TeamContent>
             </TeamMember>
         </TeamContainer>   
        </>
    )
}

export default Team
