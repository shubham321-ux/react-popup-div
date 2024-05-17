
import './App.css';
import { useState } from 'react';
import Popup from './Popup';

function App() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <div>
      <button onClick={openPopup}>Open Popup</button>
      {isPopupOpen && <Popup onClose={closePopup} />}
    </div>
  );
}

export default App;
