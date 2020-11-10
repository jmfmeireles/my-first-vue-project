import { httpCall } from "./api.service";

export async function getMusics() {
  const url =
    "https://itunes.apple.com/search?term=rock&entity=musicTrack&limit=200";
  try {
    const result = await httpCall("get", url);
    return result.data.results;
  } catch (error) {
    console.log(`getMusics() failed: ${error.message}`);
    return [];
  }
}
