import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setStep(value); 
    if (value && isNaN(value)) {
        alert("Vui lòng nhập số");
      }
  };

  const handleIncrease = () => {
    const validStep = isNaN(step) || step === '' ? 1 : parseInt(step);
    setCount(count + validStep);
  };

  const handleDecrease = () => {
    const validStep = isNaN(step) || step === '' ? 1 : parseInt(step);
    setCount(count - validStep);
  };

  const handleReset = () => {
    setCount(0);
    setStep(""); 
  };

  return (
    <div className='container'>
      <h1>Số lần click là: {count}</h1>

      <h2>Số bước nhảy</h2>
      <input
        type="text"
        value={step}
        onChange={handleChange}
        placeholder="Nhập số phần tử muốn tăng hoặc giảm"
      />

      <button onClick={handleIncrease}>+</button>
      <button onClick={handleDecrease}>-</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

export default Counter;
