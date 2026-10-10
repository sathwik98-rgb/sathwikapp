
import { useState } from 'react';
import './App.css';

import Navbar from './Components/Navbar';
import Textform from './Components/Textform';
import Alert from './Components/Alert';
import About from './Components/About';



function App() {
  const [mode, setmode] = useState({
    color: 'black',
    backgroundColor: 'white',
  });

  const [alert, setalert] = useState(null);
  const [text, settext] = useState('light');

  const showAlert = (msg, type) => {
    setalert({
      msg: msg,
      type: type,
    });
  };

  const fun = (event) => {
    if (event.target.checked) {
      setmode({
        color: 'white',
        backgroundColor: 'black',
      });

      showAlert('Dark mode enabled', 'success');
      settext('dark');
      document.body.style.backgroundColor = 'black';
    } else {
      setmode({
        color: 'black',
        backgroundColor: 'white',
      });

      showAlert('Light mode enabled', 'success');
      settext('light');
      document.body.style.backgroundColor = 'white';
    }
  };

  return (
      <div style={mode}>
        <Navbar
          mode={mode}
          setmode={setmode}
          fun={fun}
          text={text}
        />

        <Alert alert={alert} />

        <div className="container my-3">

           <Textform
                  showAlert={showAlert}
                  heading="Enter the text to analyze below"
                  mode={mode}
                />
        </div>
      </div>
    
  );
}

export default App;

