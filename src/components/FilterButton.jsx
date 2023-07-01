import React from 'react';
// filter function to get the entered gender
export const FilterButton = (props) => {
  const handleGenderChange = (e) => {
    props.setFilterGender(e.target.value);
  };

  // filter function to get the entered title
  const handleTitleChange = (e) => {
    props.setFilterTitle(e.target.value);
  };

  return (
    
    <div className="filter-container">
      {/* droplist to filter according gender */}
      <select name="Choose Gender" className='filterInput' value={props.filterGender} onChange={handleGenderChange}>
        <option value="">All</option>
        <option value="Action">Action</option>
        <option value="Romance">Romance</option>
        <option value="Anime">Anime</option>
        <option value="Comedy">Comedy</option>
        <option value="Herror">Herror</option>
      </select>
      
            {/* input to filter according title */}
      <input
        className='filterInput'
        type="text"
        placeholder="Filter by title"
        value={props.filterTitle}
        onChange={handleTitleChange}
      />
    </div>
  );
};