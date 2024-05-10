
import axios from "axios";


export const postRequest = async (url,data) => {

    try {
        const response = await axios.post(url,data,{
            headers: {
              'Content-Type': 'application/json'
            }
          })
        return response;
    }
    catch (err) {
        console.log(err);
    }
}


export const getRequest = async (url) => {
    try {
        const token = localStorage.getItem('token');
      
        const response = await axios.get(url,{
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
        return response
    }
    catch (err) {
        console.log(err)
    }
}