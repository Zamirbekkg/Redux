import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addName, removeName } from './Redux/Actions';
import './App.scss';

const App = () => {
  const [name, setName] = useState('');
  const names = useSelector(state => state.names);
  const dispatch = useDispatch();

  const handleAddName = () => {
    if (name.trim()) {
      dispatch(addName(name));
      setName('');
    }
  };

  const handleRemoveName = (nameToRemove) => {
    dispatch(removeName(nameToRemove));
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleAddName();
    }
  };

  return (
    <div className='Conteiner'>
      <h1>Список имен</h1>
      <input 
        className='input'
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Введите имя"
      />
      <button className='btn' onClick={handleAddName}>Добавить</button>

      <ul>
        {names.map((name, index) => (
          <li key={index}>
            {name}
            <button className='btnDel' onClick={() => handleRemoveName(name)}>Удалить</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
