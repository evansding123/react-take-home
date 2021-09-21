import React, { useState, useEffect } from 'react';
import IconName from './IconName.jsx';
//import { Text, View } from 'react-native';

const Module = (props) => {


  return(
    <div>
      <IconName info = {props.info}/>
    </div>
  )
}


export default Module;