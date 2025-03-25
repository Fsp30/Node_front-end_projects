import React, { useState } from "react";
import axios from "axios";
import SearchBar from "./SearcheBar";
import RepoList from "./RepoList";

const App = () => {
  const [username, setUsername] = useState("")
  const [repos, setRepos] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const fetchRepos = async () => {
    if (!username) return;

    setLoading(true)
    setError("");

    try {
      const response = await axios.get(
        `https://api.github.com/users/${username}/repos`
      );
      setRepos(response.data);
    } catch (err) {
      setError("Usuário não encontrado ou erro na requisição.")
      setRepos([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-semibold text-center mb-4">
        Buscar Repositórios do GitHub
      </h2>
      <SearchBar username={username} setUsername={setUsername} fetchRepos={fetchRepos} />

      {loading && <p className="text-center text-gray-600">Carregando...</p>}
      {error && <p className="text-center text-red-500">{error}</p>}

      <RepoList repos={repos} />
    </div>
  );
};

export default App
