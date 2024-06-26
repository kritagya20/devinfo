import React, { useState } from 'react';

const Searchbar = () => {
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [data, setData] = useState(null);

  const handleSearch = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      const data = await fetchDataFromAPI(searchQuery);
      setData(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
        console.log(data);
      setLoading(false);
    }
  };

  const fetchDataFromAPI = async (query) => {
    const response = await fetch(`https://api.github.com/users/${query}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  };

  return (
    <>
      <form className="max-w-md mx-auto" onSubmit={handleSearch}>
        <label
          htmlFor="default-search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-teal-500 focus:border-teal-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-teal-500 dark:focus:border-teal-500"
            placeholder="Search GitHub Username..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            required=""
          />
          <button
            type="submit"
            className="text-white absolute end-2.5 bottom-2.5 bg-teal-700 hover:bg-teal-800 focus:ring-4 focus:outline-none focus:ring-teal-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-teal-600 dark:hover:bg-teal-700 dark:focus:ring-teal-800"
            disabled={loading}
          >
            {loading ? (
              <svg
                className="animate-spin h-5 w-5 mr-3 ..."
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291a7.962 7.962 0 01-2-5.291H0c0 2.042.832 3.904 2.194 5.291L6 17.291z"
                ></path>
              </svg>
            ) : (
              'Search'
            )}
          </button>
        </div>
      </form>
      {data && (
        <div className="mt-4">
          <h2 className="text-lg font-bold">User Information</h2>
          <p>Username: {data.login}</p>
          <p>Name: {data.name}</p>
          <p>Bio: {data.bio}</p>
          <p>Location: {data.location}</p>
        </div>
      )}
    </>
  );
};

export default Searchbar;
