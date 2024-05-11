import axios, { AxiosResponse } from "axios";

const baseURL: string = import.meta.env.VITE_APP_BASE_URL as string;
const apiKey: string = import.meta.env.VITE_APP_X_RapidAPI_Key as string;
const host: string = import.meta.env.VITE_APP_X_RapidAPI_Host as string;

interface TranslationRequestBody {
  Text: string;
}
interface QAProps {
  text: string;
  target: string;
}

export const Translate = async ({ text, target }: QAProps): Promise<any> => {
  try {
    const requestBody: TranslationRequestBody[] = [{ Text: text }];
    const response: AxiosResponse = await axios.post(
      `${baseURL}/translate`,
      requestBody,
      {
        headers: {
          Accept: "application/json",
          "X-RapidAPI-Host": host,
          "X-RapidAPI-Key": apiKey,
        },
        params: {
          "api-version": 3.0,
          "to[0]": { target },
        },
      }
    );

    return response;
  } catch (error) {
    console.log("error", error);
    throw error;
  }
};

export const getLanguages = async (): Promise<any> => {
  try {
    const response: AxiosResponse = await axios.get(`${baseURL}/languages`, {
      params: {
        "api-version": "3.0",
      },
      headers: {
        "Content-Type": "application/json",
        "X-RapidAPI-Host": host,
        "X-RapidAPI-Key": apiKey,
      },
    });

    return response;
  } catch (error) {
    console.log("error", error);
    throw error;
  }
};
