import ky from "ky";

const BASE_URL = "https://icherniakov.ru/yt-course";

export const jsonApiInstance = async (
  url: string,
  options?: RequestInit,
  signal?: AbortSignal,
) => {
  try {
    const response = await ky.post(`${BASE_URL}${url}`, options);

    if (response.ok) {
      return response.json();
    } else {
      throw new Error(response.statusText);
    }
  } catch (e) {
    console.log(e);
  }
};
