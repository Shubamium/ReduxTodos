import { useEffect } from 'react';
import './App.css'
import { TodoAdder } from './components/TodoAdder'
import { TodoView } from './components/TodoView'
import { useSelector } from 'react-redux';

function App() {
  const listData = useSelector(state => state.list);

  return (
    <div>
        <h1>Redux Toolkit - Todo List/Crud App Example</h1>
        <TodoAdder/>
        {listData &&  <TodoView list={listData.todos}/>}
    </div>
  )
}

export default App
