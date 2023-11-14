import { useState, useEffect } from "react";


const FilterSortComponent = ({ filters, onFilterChange }) => {
  const [selectedFilters, setSelectedFilters] = useState({});

  useEffect(() => {
    // Invoke the callback when selectedFilters change
    onFilterChange(selectedFilters);
  }, [selectedFilters, onFilterChange]);

  const handleFilterChange = (filterId, optionValue) => {
    setSelectedFilters((prevFilters) => ({
      ...prevFilters,
      [filterId]: optionValue,
    }));
  };

  return (
    <div className="flex flex-col space-y-4">
      {filters?.map((filter) => (
        <div key={filter.id} className="space-y-2">
          <p className="text-lg font-semibold text-gray-800">{filter.name}</p>
          <div className="flex flex-col space-y-2">
            {filter?.options.map((option) => (
              <div key={option.value} className="flex items-center gap-2">
                <input
                  id={`filter-${filter.id}-${option.value}`}
                  name={`filter-${filter.id}`}
                  type="radio"
                  value={option.value}
                  checked={selectedFilters[filter.id] === option.value}
                  onChange={() => handleFilterChange(filter.id, option.value)}
                  className="sr-only"
                />
                <label
                  htmlFor={`filter-${filter.id}-${option.value}`}
                  className=
                    " mx-2 cursor-pointer flex items-center space-x-2 text-sm text-gray-600"
               
                >
                  <span className="w-4 h-4 mx-2 rounded-full border border-gray-300 flex items-center justify-center">
                    {selectedFilters[filter.id] === option.value && (
                      <span className="w-2 h-2  rounded-full bg-blue-500" />
                    )}
                  </span>
                  {option.label}
                </label>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default FilterSortComponent;
