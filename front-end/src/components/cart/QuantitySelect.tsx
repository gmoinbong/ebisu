import React, { useState } from 'react';

type QuantitySelectProps = {
  id: string
  onSelect: (id: string, quantity: number) => void
};

const QuantitySelect: React.FC<QuantitySelectProps> = ({ onSelect, id }) => {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newQuantity = parseInt(event.target.value, 10);
    setQuantity(newQuantity);
  };

  const handleConfirmClick = () => {
    onSelect(id, quantity);
  };

  return (
    <div>
      <select value={quantity} onChange={handleQuantityChange}>
        {[1, 2, 3, 4, 5].map((value) => (
          <option key={value} value={value}>
            {value}
          </option>
        ))}
      </select>
      <button onClick={handleConfirmClick}>Confirm</button>
    </div>
  );
};

export default QuantitySelect;
