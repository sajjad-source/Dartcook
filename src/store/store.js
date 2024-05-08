import { create } from 'zustand';
import axios from 'axios';

const useMainStore = create((set, get) => ({
  all: [],
  current: {},
  deletedMeals: new Set(),

  fetchAllMeals: async () => {
    let localMeals = localStorage.getItem('meals');
    localMeals = localMeals ? JSON.parse(localMeals) : [];

    try {
      const response = await axios.get('https://www.themealdb.com/api/json/v1/1/search.php?s=');
      const fetchedMeals = response.data.meals || [];

      // Combine API meals and local meals while avoiding duplicates
      const combinedMeals = [...localMeals, ...fetchedMeals.filter((meal) => !localMeals.some((m) => m.idMeal === meal.idMeal))];
      set({ all: combinedMeals });
      localStorage.setItem('meals', JSON.stringify(combinedMeals)); // Update local storage
    } catch (error) {
      console.error('Failed to fetch meals:', error);
      set({ all: localMeals });
    }
  },

  fetchMealDetails: async (idMeal) => {
    try {
      const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`);
      set({ current: response.data.meals[0] || {} });
    } catch (error) {
      console.error('Failed to fetch meal details:', error);
      set({ current: {} });
    }
  },
  createMeal: (newMeal) => {
    if (!newMeal.idMeal) {
      newMeal.idMeal = `temp-${Date.now()}`;
    }
    const updatedMeals = [...get().all, newMeal];
    set({ all: updatedMeals });
    localStorage.setItem('meals', JSON.stringify(updatedMeals));
  },
  // Delete Meal is based on local storage since API doesnt support it
  deleteMeal: (idMeal) => {
    get().deletedMeals.add(idMeal);
    const updatedMeals = get().all.filter((meal) => !get().deletedMeals.has(meal.idMeal));
    set({ all: updatedMeals });
    if (get().current.idMeal === idMeal) {
      set({ current: {} });
    }
    localStorage.setItem('meals', JSON.stringify(updatedMeals)); // Update local storage too
  },

  updateMeal: (updatedMeal) => {
    const updatedMeals = get().all.map((meal) => (meal.idMeal === updatedMeal.idMeal ? { ...meal, ...updatedMeal } : meal));
    set({ all: updatedMeals });
    set({ current: updatedMeal });
  },
}));

export default useMainStore;
