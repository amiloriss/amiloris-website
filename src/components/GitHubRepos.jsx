import React from 'react';

const GitHubRepos = ({ repo, key }) => {
  const { name } = repo;
  return <li key={key}>{name}</li>;
};

export default GitHubRepos;
