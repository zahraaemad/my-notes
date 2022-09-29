import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Note from './components/Note';
import CreateArea from './components/CreateArea';
import './App.css';
import './css/styles.css';

function App() {


  const [noteArray, setNoteArray] = useState(() => {
    const saved = localStorage.getItem("Note");
    const initialValue = JSON.parse(saved);
    return initialValue || [];
  });

  function onAdd(addNote) {
    setNoteArray(prevValue => {
      return [...prevValue, addNote]
    })
  
  }

  useEffect(() => {
    localStorage.setItem("Note", JSON.stringify(noteArray));
}, [noteArray]);


  function toDelete(id) {
    setNoteArray(prevItems => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }


  return (
    <div>
      <Header />
      <CreateArea onAddd={onAdd} />
      <div>
        {noteArray.map((item, index) => <Note
          id={index}
          key={index}
          title={item.title}
          content={item.content}
          toDelete={toDelete} />)}
      </div>

      {/* <Footer /> */}
    </div>
  );
}

export default App;
