import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import ExerciseContainer from './components/ExerciseContainer/ExerciseContainer';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <ExerciseContainer></ExerciseContainer>
    </div>
  );
}

export default App;
