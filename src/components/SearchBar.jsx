import React, { useState } from 'react';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function SearchBar({ handleSearch }) {
  const [search, setSearch] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch(search);
  };

  return (
    <header>
      <form className="flex-grow mx-auto max-w-md" onSubmit={handleSubmit} noValidate>
        <div className="relative w-full">
          <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3 text-slate-500">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </div>
          <input
            type="search"
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-4 ps-10 text-sm text-slate-900 dark:placeholder-gray-800"
            placeholder="Search Events"
            required
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button
            type="submit"
            className="absolute bottom-2.5 end-2.5 rounded-lg px-4 py-2 text-sm font-medium text-slate-500"
            aria-label="Search"
          />
        </div>
      </form>
    </header>
  );
}

export default SearchBar;
