import React from 'react';
import styled, { css } from 'styled-components';




const ImageDescrip = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  >div {
    margin: 3%;
  }
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: baseline;
`;

const Image = styled.img`
  width: 50px;
  border-radius: 15px;
`;

const Name = styled.div`
  font-weight: bold;
`;

const Pay = styled.div`
  color: green;

`;




const IconName = (props) => {

  const {campaign_icon_url, campaign_name, pay_per_install, medias} = props.info;

  return(
    <ImageDescrip>
      <Image src = {campaign_icon_url} alt = 'thumbnail'></Image>
      <Description>
        <Name>{campaign_name}</Name>
        <Pay>{pay_per_install} per install</Pay>
      </Description>
    </ImageDescrip>

  )
}

export default IconName;