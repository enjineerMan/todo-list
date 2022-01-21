import React, {useState} from 'react';
import './App.css';
import Form from './components/form.js';
import Main from './components/main.js';
import New from './components/new.js';
import { BrowserRouter, Routes, Route } from "react-router-dom";

export const Context = React.createContext();
function App() {
  const [listName, setListName] = useState("Shopping");
  console.log(listName);
  return (
    <Context.Provider value={listName}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main/>}/>
          <Route path="new" element={<New setListName={setListName}/>} />
          <Route path="todo-list" element={<Form />} />
        </Routes>
      </BrowserRouter>
    </Context.Provider>
  );
}

export default App;
