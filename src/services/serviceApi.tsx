import axios from "axios";

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

export async function returnSignDetails(signName: string, day: string) {
  return await axios
    .post<IreturnSignDetails[]>(`${baseUrl}/?sign=${signName}&day=${day}`)
    .then((response) => {
      const signs: IreturnSignDetails[] = response.data;
      return {
        current_date: signs,
        compatibility: signs,
        lucky_number: signs,
        lucky_time: signs,
        color: signs,
        date_range: signs,
        mood: signs,
        description: signs,
      };
    })
    .catch((err) => console.log(err));
}
