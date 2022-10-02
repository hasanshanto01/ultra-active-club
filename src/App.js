import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import ExerciseContainer from './components/ExerciseContainer/ExerciseContainer';
import QuestionAnswer from './components/QuestionAnswer/QuestionAnswer';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <ExerciseContainer></ExerciseContainer>
      <QuestionAnswer></QuestionAnswer>
    </div>
  );
}

export default App;
