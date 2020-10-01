import React from 'react';

const GitHubRepos = ({ repo, isDark }) => {
  const { name, svn_url } = repo;
  if (repo.private === true || name === 'amiloriss.github.io') {
    return null;
  } else
    return (
      <li>
        <h5 style={{ transition: 'all 0.15s', color: isDark && '#a8dadc' }}>
          {name}
        </h5>
        <a target="blank" href={svn_url}>
          hit the link
        </a>
      </li>
    );
};

export default GitHubRepos;
