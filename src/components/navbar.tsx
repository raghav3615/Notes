import React from 'react';

interface NavbarProps {
  totalTasks: number;
  completedTasks: number;
}

const Navbar: React.FC<NavbarProps> = ({ totalTasks, completedTasks }) => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <span className="logo">⚡</span>
        <span className="brand-text">DevTodo</span>
      </div>
      <div className="navbar-stats">
        <div className="stat">
          <span className="stat-value">{completedTasks}</span>
          <span className="stat-label">done</span>
        </div>
        <div className="stat-divider">/</div>
        <div className="stat">
          <span className="stat-value">{totalTasks}</span>
          <span className="stat-label">total</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
