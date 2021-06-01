import './App.css';
import Title from './components/Title';
import InputTodo from './components/InputTodo';

function App() {
  return (
    <div className='App'>
      <Title type='h1' title='My To Do List !' />
      <Title type='h2' title='Things to do :' />
      <div>
        <InputTodo />
      </div>
    </div>
  );
}

export default App;
