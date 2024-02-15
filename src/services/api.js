import axios from "axios";

const BASE_URL = "https://api.punkapi.com/v2/beers";
const BEER_PER_PAGE = 3;

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
