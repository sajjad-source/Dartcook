import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import useMainStore from '../store/store';

export default function NewMeal() {
  const [inputName, setName] = useState('');
  const [inputInstructions, setInstructions] = useState('');
  const [inputTags, setTags] = useState('');
  const [inputImage, setImage] = useState('');
  const { createMeal } = useMainStore((state) => ({
    createMeal: state.createMeal,
  }));

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    createMeal({
      strMeal: inputName,
      strInstructions: inputInstructions,
      strTags: inputTags,
      strMealThumb: inputImage,
    });
    setName('');
    setInstructions('');
    setTags('');
    setImage('');
    navigate('/');
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg">
      <input
        type="text"
        value={inputName}
        onChange={(e) => setName(e.target.value)}
        placeholder="Meal Name"
        className="mb-4 w-full rounded border p-2 text-gray-700"
      />
      <input
        type="text"
        value={inputTags}
        onChange={(e) => setTags(e.target.value)}
        placeholder="Tags (comma-separated)"
        className="mb-4 w-full rounded border p-2 text-gray-700"
      />
      <input
        type="text"
        value={inputImage}
        onChange={(e) => setImage(e.target.value)}
        placeholder="Image URL"
        className="mb-4 w-full rounded border p-2 text-gray-700"
      />
      <textarea
        value={inputInstructions}
        onChange={(e) => setInstructions(e.target.value)}
        placeholder="Instructions"
        className="mb-4 block w-full rounded border p-2 text-gray-700"
      />
      <div className="flex justify-end space-x-4">
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Submit
        </button>
      </div>
    </form>
  );
}
