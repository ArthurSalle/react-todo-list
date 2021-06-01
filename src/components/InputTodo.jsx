import { useState } from 'react';

const InputTodo = () => {
  const [todo, setTodo] = useState('');
  const [list, setList] = useState([]);

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  const addTodo = () => {
    if (todo !== '') {
      const todoList = {
        id: Math.floor(Math.random() * 100),
        value: todo,
        completed: false,
      };
      setList([...list, todoList]);
    }
  };

  const completeTodo = (e, id) => {
    e.preventDefault();
    const element = list.findIndex((elem) => elem.id === id);
    const newList = [...list];
    newList[element] = {
      ...newList[element],
      completed: true,
    };

    setList(newList);
  };

  const deleteTodo = (e, id) => {
    e.preventDefault();
    setList(list.filter((el) => el.id !== id));
  };

  return (
    <>
      <div>
        <input
          type='text'
          placeholder='Type here...'
          onChange={(e) => handleChange(e)}
        />
        <button onClick={addTodo}>Add</button>
      </div>
      <div>
        <ul>
          {list.map((el) => (
            <li key={el.id} className={el.completed ? 'line-through' : ''}>
              {el.value}
              <button type='button' onClick={(e) => completeTodo(e, el.id)}>
                ✅
              </button>
              <button type='button' onClick={(e) => deleteTodo(e, el.id)}>
                ❌
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default InputTodo;
