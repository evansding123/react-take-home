import React from 'react';
import styled, { css } from 'styled-components';
import play from './pics/play.png';
import share from './pics/share.png';
import download from './pics/download.png';



const Image = styled.img`
  width: 125px;
  border-radius: 5px;

`;

const SmallImage = styled.img`
  width: 25%;
  color: grey;
  overflow: hidden;
`;




const PlayButton = styled.img`
  position: absolute;
  z-index: 2;
  opacity: 0.7;
  margin-top: 20%;
  margin-left: 10%;
  color: white;
  border-color: white;
`;

const InteractContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: 25px;
  >a {
    width: 100%;
    border-style: solid;
    border-color: grey;
    border-width: thin;
  }
`;





const Carasoul = (props) => {

  const {cover_photo_url, download_url, media_type, tracking_link} = props.media;


  return(
    <div>
      <Image src = {cover_photo_url} alt = 'coverphoto'></Image>
      {media_type === 'video' && <PlayButton src = {play} alt = 'playbutton'></PlayButton>}
      <InteractContainer>
        <a href = {tracking_link}>
          <SmallImage src = {share} alt = 'share'></SmallImage>
        </a>
        <a href = {download_url}>
          <SmallImage src = {download} alt = 'share'></SmallImage>
        </a>
      </InteractContainer>
    </div>
  )
}

export default Carasoul;