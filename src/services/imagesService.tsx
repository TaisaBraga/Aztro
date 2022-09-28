import axios, { AxiosResponse } from "axios";

const baseUrl =
  "https://capricho.abril.com.br/wp-content/plugins/abril-plugins/abril-horoscopo/templates/includes/images/signos";

export async function returnSignImages(signNamePt: string): Promise<AxiosResponse<any>> {
  return await axios
    .get(`${baseUrl}/${signNamePt}.png`)
    .then((response: AxiosResponse) => {
      return response.data;
    })
    .catch((err) => console.log(err));
}
