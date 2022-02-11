import React from 'react'
import { TimeLine, TimeLineContainerLeft,TimeLineContainerRight, TimeLineContent, Title, List, ListItem } from './Roadmap.elements'
function Roadmap() {
    return (
        <>
         <TimeLine>
             <TimeLineContainerLeft>
                 <TimeLineContent>
                    <Title>Q1 2022</Title>
                    <List>
                        <ListItem>Launch of our first collection.</ListItem>
                        <ListItem>First payouts of royalties for owners.</ListItem>
                        <ListItem>Establish meetup locations for Q3.</ListItem>
                        <ListItem>Launch of our first collection.</ListItem>
                        <ListItem>Meet with other NFT group’s/ real world brands on potential collabs. </ListItem>
                        <ListItem>Tease project that people in THE HUNDRED will be part of.</ListItem>
                    </List>
                 </TimeLineContent>
             </TimeLineContainerLeft>

             <TimeLineContainerRight >
                 <TimeLineContent>
                 <Title>Q2 2022</Title>
                 <List>
                        <ListItem>Discussion about second series of THE HUNDRED with owners, owners will get first priority in next drop.</ListItem>
                        <ListItem>First meetup with THE HUNDRED where there will be a giant announcement on the project.</ListItem>
                        <ListItem>ANNOUNCEMENT of the 2 projects that THE HUNDRED will be part of.</ListItem>
                        <ListItem>Plan more meetups with members of THE HUNDRED.</ListItem>
                        <ListItem>Establish a messenger app only for members in THE HUNDRED. </ListItem>
                    </List>
                 </TimeLineContent>
             </TimeLineContainerRight>
         </TimeLine>   
        </>
    )
}

export default Roadmap
