import React from 'react';

const Hero: React.FC = () => {
  const today = new Date();
  const options: Intl.DateTimeFormatOptions = { 
    weekday: 'long', 
    month: 'short', 
    day: 'numeric' 
  };
  const dateString = today.toLocaleDateString('en-US', options);

  const getGreeting = (): string => {
    const hour = today.getHours();
    if (hour < 12) return 'Good morning';
    if (hour < 17) return 'Good afternoon';
    return 'Good evening';
  };

  return (
    <section className="hero">
      <p className="hero-date">{dateString}</p>
      <h1 className="hero-greeting">{getGreeting()}</h1>
      <p className="hero-subtitle">What's on your stack today?</p>
    </section>
  );
};

export default Hero;
