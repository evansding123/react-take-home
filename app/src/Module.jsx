import React, { useState, useEffect } from 'react';
import IconName from './IconName.jsx';
import Carasoul from './Carasoul.jsx';

import styled, { css } from 'styled-components';

//import { Text, View } from 'react-native';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  overflow: hidden;
  align-items: baseline;
  justify-content: space-between;
`;

const Module = (props) => {


  return(
    <div>
      <IconName info = {props.info}/>
      <Container>
        {props.info.medias.map((item, index) => {
          if(index < 5) {
            return(
              <Carasoul media = {item} key = {index}/>
            )
          }

        })}
      </Container>

    </div>
  )
}


export default Module;