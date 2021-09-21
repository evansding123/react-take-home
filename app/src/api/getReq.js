import axios from 'axios';


export const getReq = async () => {

  try {
    const response = await axios.get('https://www.plugco.in/public/take_home_sample_feed');
    console.log(response.data);
  } catch (error) {
    console.log(error);
  }


}


