import React from 'react';

const Author = ({ name, date, avatar }) => {
  return (
    <div className="author">
      {/* Author's Avatar */}
      <img
        src={avatar}
        alt={`${name.toLowerCase()} avatar`}
        className="author-avatar"
      />
      <div className="author-info">
        {/* Author's Name */}
        <p className="author-name">{name}</p>
        {/* Date */}
        <p className="author-date">{date}</p>
      </div>
    </div>
  );
};

export default Author;
