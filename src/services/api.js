import axios from "axios";
import { BASE_URL, BEER_PER_PAGE } from "../utils/constants";

export const fetchBeers = async (query, page) => {
  try {
    let beerUrl = `${BASE_URL}?page=${page}&per_page=${BEER_PER_PAGE}`;
    if (query !== "") {
      beerUrl += `&beer_name=${query}`;
    }
    const response = await axios.get(beerUrl);
    return response.data;
  } catch (error) {
    console.error("Error fetching beers:", error);
    throw error;
  }
};
