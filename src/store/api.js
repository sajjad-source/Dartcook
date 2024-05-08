/* eslint-disable consistent-return */
import axios from 'axios';

const API_KEY = '1'; // Test API Key provided by TheMealDB
const BASE_URL = 'https://www.themealdb.com/api/json/v1/1/';

const api = axios.create({
  baseURL: BASE_URL,
});

export const fetchMealByName = async (mealName) => {
  try {
    const response = await api.get(`search.php?s=${mealName}&apiKey=${API_KEY}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching meal by name:', error);
  }
};

export const fetchRandomMeal = async () => {
  try {
    const response = await api.get(`random.php?apiKey=${API_KEY}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching random meal:', error);
  }
};
