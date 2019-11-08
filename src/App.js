import React from 'react';
import MockMenu from './MockMenu';
import Buttons from './Buttons';
import './App.css';

const pictures = [
  { id: 1, src: 'http://via.placeholder.com/200x100', special: 'first' },
  { id: 2, src: 'http://via.placeholder.com/400x200', special: 'second' },
  { id: 3, src: 'http://via.placeholder.com/200x100', special: 'third' },
  { id: 4, src: 'http://via.placeholder.com/200x100', special: 'fourth' },
  { id: 5, src: 'http://via.placeholder.com/400x200', special: 'fifth' },
  { id: 6, src: 'http://via.placeholder.com/200x100', special: 'sixth' },
]

const buttons = (props) => <Buttons buttonType={props}/>


function App() {
  return (
    <div className="App">
      <MockMenu
        items={pictures}
        buttons={buttons}
      />
    </div>
  );
}

export default App;
