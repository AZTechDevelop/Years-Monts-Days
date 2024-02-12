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
    <>
  <header>
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" />
  <head>
<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.5.3/dist/umd/popper.min.js"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
      </head>
      </header>
    <div className="m-5 d-flex flex-column align-items-center justify-content-center" >
      
      <h1 className="text-primary m-4 ">Age Calculator</h1>
      
      <input
        type="date"
        value={birthdate}
        onChange={(e) => setBirthdate(e.target.value)}
      />
      <button onClick={calculateAge} className="m-3 btn btn-outline-primary">Calculate Age</button>
      {age && <p>You are {age}</p>}
    </div>
    </>
  );
}

export default AgeCalculator;
