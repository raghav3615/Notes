import React from 'react';
import { FilterType } from '../types';

interface FilterBarProps {
  filter: FilterType;
  onFilterChange: (filter: FilterType) => void;
  onClearCompleted: () => void;
  hasCompleted: boolean;
}

const FilterBar: React.FC<FilterBarProps> = ({
  filter,
  onFilterChange,
  onClearCompleted,
  hasCompleted,
}) => {
  return (
    <div className="filter-bar">
      <div className="filter-buttons">
        <button
          className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
          onClick={() => onFilterChange('all')}
        >
          All
        </button>
        <button
          className={`filter-btn ${filter === 'active' ? 'active' : ''}`}
          onClick={() => onFilterChange('active')}
        >
          Active
        </button>
        <button
          className={`filter-btn ${filter === 'completed' ? 'active' : ''}`}
          onClick={() => onFilterChange('completed')}
        >
          Done
        </button>
      </div>
      {hasCompleted && (
        <button className="clear-btn" onClick={onClearCompleted}>
          Clear completed
        </button>
      )}
    </div>
  );
};

export default FilterBar;
