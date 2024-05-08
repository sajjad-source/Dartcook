import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import useMainStore from '../store/store';
import EditModal from './EditModal';

export default function Post() {
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const { mealID } = useParams();
  const {
    current, fetchMealDetails, deleteMeal, updateMeal,
  } = useMainStore((state) => ({
    current: state.current,
    fetchMealDetails: state.fetchMealDetails,
    deleteMeal: state.deleteMeal,
    updateMeal: state.updateMeal,
  }));

  useEffect(() => {
    fetchMealDetails(mealID);
  }, [fetchMealDetails, mealID]);

  const handleDelete = () => {
    deleteMeal(mealID);
    navigate('/');
  };

  const handleSave = (updatedMeal) => {
    updateMeal(updatedMeal);
    setIsEditing(false);
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg">
      <h1 className="font-bold text-3xl mb-3">{current.strMeal}</h1>
      <img src={current.strMealThumb} alt="Meal Cover" className="w-full h-auto rounded mb-2" />
      <p className="text-gray-700 text-lg">{current.strInstructions}</p>
      {isEditing ? (
        <EditModal isOpen={isEditing} onClose={() => setIsEditing(false)} meal={current} onSave={handleSave} />
      ) : (
        <div className="flex justify-between items-center mb-2">
          <button type="button" onClick={() => setIsEditing(true)} className="text-blue-500 hover:text-blue-600">
            <FontAwesomeIcon icon={faEdit} /> Edit
          </button>
          <button type="button" onClick={handleDelete} className="text-red-500 hover:text-red-600">
            <FontAwesomeIcon icon={faTrash} /> Delete
          </button>
        </div>
      )}
    </div>
  );
}
