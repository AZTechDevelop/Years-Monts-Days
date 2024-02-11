import React, { useState } from 'react';
import './App.css'
function AgeCalculator() {
  const [birthdate, setBirthdate] = useState('');
  const [age, setAge] = useState('');

  const calculateAge = () => {
    if (!birthdate) return;
  
    const birthDate = new Date(birthdate);
    const today = new Date();
    
    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();
  
    if (months < 0 || (months === 0 && days < 0)) {
      years--;
      months += 12; 
    }
    if (days < 0) {
      const daysInPrevMonth = new Date(today.getFullYear(), today.getMonth(), 0).getDate();
      days += daysInPrevMonth; 
      months--;
    }
  
    setAge(`${years} years, ${months} months, ${days} days old`);
  };
  return (
    <div>
      <h2>Age Calculator</h2>
      <input
        type="date"
        value={birthdate}
        onChange={(e) => setBirthdate(e.target.value)}
      />
      <button onClick={calculateAge}>Calculate Age</button>
      {age && <p>You are {age}</p>}
    </div>
  );
}

export default AgeCalculator;
