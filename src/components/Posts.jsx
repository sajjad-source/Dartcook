import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import useMainStore from '../store/store';
import SearchBar from './SearchBar';

function Posts() {
  const { all, fetchAllMeals, deletedMeals } = useMainStore((state) => ({
    all: state.all,
    fetchAllMeals: state.fetchAllMeals,
    deletedMeals: state.deletedMeals,
  }));

  const [searchTerm, setSearchTerm] = useState('');
  const [filteredMeals, setFilteredMeals] = useState([]);

  useEffect(() => {
    fetchAllMeals();
  }, [fetchAllMeals]);

  const handleSearch = (search) => {
    const filtered = all.filter((meal) => !deletedMeals.has(meal.idMeal)
      && (
        meal.strMeal.toLowerCase().includes(search.toLowerCase())
        || (meal.strTags && meal.strTags.toLowerCase().includes(search.toLowerCase()))
      ));
    setFilteredMeals(filtered);
  };

  useEffect(() => {
    handleSearch(searchTerm);
  }, [all, searchTerm]);

  return (
    <div className="px-4 py-6 font-montserrat">
      {/* Existing UI structure */}
      <div className="mb-2 px-4 xl:w-[1200px]">
        <div className="relative w-full mb-6 mt-5">
          <div className=" p-5 flex flex-row items-center justify-end gap-10">
            <div className="mb-6 flex w-full flex-col space-y-6 lg:w-7/12">
              <h1 className="text-5xl font-bold">
                The people platform—Where your cravings become reality.
              </h1>
              <p>Whether you are a culinary enthusiast or a beginner cook, our recipe API app connects you with thousands of like-minded food lovers. Discover new recipes, share your own, and explore a world of flavors every day. Sign up now and join our vibrant community.</p>
              <div>
                <button
                  className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-[#85ACBB] text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
                  type="button"
                >
                  <a className="inline-block  hover:no-underline" href="/">Join Dartcook</a>
                </button>
              </div>
            </div>
            <div className="">
              <img src="/hero.svg" alt="Dartmeet" className="w-96 h-96 rounded-full" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center mb-6">
        <SearchBar handleSearch={setSearchTerm} />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredMeals.map((meal) => (
          <div key={meal.idMeal} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img src={meal.strMealThumb} alt={meal.strMeal} className="w-full h-56 object-cover" />
            <div className="p-4">
              <h2 className="font-semibold text-xl mb-2">{meal.strMeal}</h2>
              <p className="text-gray-600 mb-4">{meal.strTags ? meal.strTags.split(',').map((tag) => `#${tag.trim()}`).join(' ') : ''}</p>
              <NavLink to={`/meals/${meal.idMeal}`} className="text-blue-600 hover:text-blue-800">Read More</NavLink>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Posts;
