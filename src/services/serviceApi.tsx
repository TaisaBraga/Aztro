import axios, { AxiosResponse } from "axios";

export interface IreturnSignDetails {
  current_date: string;
  compatibility: string;
  lucky_number: string;
  lucky_time: string;
  color: string;
  date_range: string;
  mood: string;
  description: string;
}

const baseUrl: string = "https://aztro.sameerkumar.website";

const mapToSignDetails = (signs: IreturnSignDetails) => {
  return {
    current_date: signs.current_date,
    compatibility: signs.compatibility,
    lucky_number: signs.lucky_number,
    lucky_time: signs.lucky_time,
    color: signs.color,
    date_range: signs.date_range,
    mood: signs.mood,
    description: signs.description,
  };
}

export async function returnSignDetails(
  day: string,
  signName?: string
): Promise<any> {
  return await axios
    .post<IreturnSignDetails>(`${baseUrl}/?sign=${signName}&day=${day}`)
    .then((response: AxiosResponse) => {
      return  mapToSignDetails(response.data)
    })
    .catch((err) => console.log(err));
}
