import React from "react";

const SearchBar = ({ username, setUsername, fetchRepos }) => {
  return (
    <div className="flex flex-col items-center gap-4 p-4">
      <input
        type="text"
        placeholder="Digite o nome do usuário"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="px-4 py-2 border rounded-lg shadow-md w-72 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        onClick={fetchRepos}
        className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
      >
        Buscar
      </button>
    </div>
  );
};

export default SearchBar
