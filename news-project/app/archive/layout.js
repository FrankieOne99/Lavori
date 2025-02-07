import React from 'react';

const ArchiveLayout = ({archive, latest}) => {
  return (
    <div>
        <h1>News Article </h1>
        <section id="archive-filter">{archive}</section>
        <section id="archive-latest">{latest}</section>
    </div>
  );
};

export default ArchiveLayout;