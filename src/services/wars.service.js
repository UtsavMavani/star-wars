import axios from "axios";
import { toast } from "react-toastify";

export const getStarWarsPeople = async (page) => {
  try {
    const response = await axios.get(
      `https://swapi.dev/api/people/?page=${page}`
    );
    return response.data;
  } catch (error) {
    toast.error(error);
    console.error("Error facthing start wars people: ", error);
  }
};
