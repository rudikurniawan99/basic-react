// everything you want to -import- from outside goes here
import './App.css'

function App() {
  // Your -Logic- goes here
  const student = {
    name : 'Alan Faza',
    age : 22
  }
  let name = 'Rudi Kurnaiwan'
  const nameCheck = true
  if(nameCheck){
    name = 'Bambang Sudarmo'
  }

  const link = 'https://github.com'

  // -endof logic

  return (
    // Your -Template- that you want to display on screen goes here
    <div className="App">
      {/* rendering a value that we define before on the logic */}
      <p>My name is <span className="font-bold"> {name} </span> </p>

      {/* adding rendering an object only can be done by rendering a value */}
      <p>My class mate is : <span> {student.name} </span> </p>

      {/* Rendering element directly */}
      <p> {'nama saya rudi Kurniawan'} </p>

      {/* Url Link with dynamic value */}
      <a target="_blank" href={link}>My Link</a>

    </div>
    // -endof template
  );
}

export default App;
