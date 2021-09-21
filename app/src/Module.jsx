import React, { useState, useEffect } from 'react';
import { getReq } from './api/getReq';
import { Text, View } from 'react-native';

const Module = (props) => {



  useEffect(() => {
    console.log(getReq());
  })





  return(
    <div>module</div>
  )
}


export default Module;