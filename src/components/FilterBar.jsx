import React, { useState } from "react";

const FilterBar = ({ onFilterChange }) => {
  const [category, setCategory] = useState("");
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");

  const handleFilter = () => {
    onFilterChange(category, location, date);
  };

  return (
    <div className="row mb-4">
      <div className="col-md-4">
        <select
          className="form-control"
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">Select Category</option>
          <option value="Music">Music</option>
          <option value="Movie">Movie</option>
          <option value="Technology">Technology</option>
          <option value="Sports">Sports</option>
          <option value="Entertainment">Entertainment</option>
          <option value="Photography">Photography</option>
          <option value="Literature">Literature</option>
          <option value="Art">Art</option>
          <option value="Business">Business</option>
        </select>
      </div>
      <div className="col-md-4">
        <select
          className="form-control"
          onChange={(e) => setLocation(e.target.value)}
        >
          <option value="">Select Location</option>
          <option value="New York">New York</option>
          <option value="Los Angeles">Los Angeles</option>
          <option value="San Francisco">San Francisco</option>
          <option value="Seattle">Seattle</option>
          <option value="Chicago">Chicago</option>
          <option value="Los Angeles">Los Angeles</option>
          <option value="Miami">Miami</option>
        </select>
      </div>
      <div className="col-md-4">
        <input
          type="date"
          className="form-control"
          onChange={(e) => setDate(e.target.value)}
        />
      </div>
      <div className="col-md-12 text-center mt-3">
        <button className="btn btn-success" onClick={handleFilter}>
          Apply Filters
        </button>
      </div>
    </div>
  );
};

export default FilterBar;
