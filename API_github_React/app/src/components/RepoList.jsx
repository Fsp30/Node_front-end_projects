import React from "react";

const RepoList = ({ repos }) => {
  if (repos.length === 0)
    return <p className="text-center text-gray-500">Nenhum repositório encontrado.</p>

  return (
    <ul className="mt-4 space-y-2">
      {repos.map((repo) => (
        <li key={repo.id} className="bg-gray-100 p-4 rounded-lg shadow-md">
          <a
            href={repo.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 font-semibold hover:underline"
          >
            {repo.name}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default RepoList
