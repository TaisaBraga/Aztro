import axios from 'axios';

const baseUrl = "https://aztro.sameerkumar.website"


export function returnAllSigns(signName){
     return axios.post(`${baseUrl}/?sign=${signName}&day=today`).then(response => {
         const signs = response.data
         return {
             current_data: signs.current_data,
             compatibility: signs.compatibility,
             lucky_number: signs.lucky_number,
             lucky_time: signs.lucky_time,
             color: signs.color,
             date_range: signs.date_range,
             mood: signs.mood,
             description: signs.description
         }
    })
 }