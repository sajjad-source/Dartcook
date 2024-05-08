import React, { useState } from 'react';

function EditModal({
 isOpen, onClose, meal, onSave,
}) {
  if (!isOpen) return null;

  const [title, setTitle] = useState(meal.strMeal);
  const [instructions, setInstructions] = useState(meal.strInstructions);
  const [tags, setTags] = useState(meal.strTags);
  const [imageUrl, setImageUrl] = useState(meal.strMealThumb);

  const handleSave = (e) => {
    e.preventDefault();
    onSave({
      ...meal,
      strMeal: title,
      strInstructions: instructions,
      strTags: tags,
      strMealThumb: imageUrl,
    });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-4 rounded-lg max-w-lg w-full">
        <h2 className="text-lg font-bold">Edit Meal</h2>
        <form onSubmit={handleSave}>
          <label className="block text-sm font-medium text-gray-700">Meal Title</label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="w-full p-2 border border-gray-300 rounded mt-2" />

          <label className="block text-sm font-medium text-gray-700">Instructions</label>
          <textarea value={instructions} onChange={(e) => setInstructions(e.target.value)} className="w-full p-2 border border-gray-300 rounded mt-2" />

          <label className="block text-sm font-medium text-gray-700">Tags</label>
          <input type="text" value={tags} onChange={(e) => setTags(e.target.value)} className="w-full p-2 border border-gray-300 rounded mt-2" />

          <label className="block text-sm font-medium text-gray-700">Image URL</label>
          <input type="text" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} className="w-full p-2 border border-gray-300 rounded mt-2" />

          <div className="mt-4 flex justify-end gap-4">
            <button type="button" onClick={onClose} className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300">Cancel</button>
            <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Save</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditModal;
