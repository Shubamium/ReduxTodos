import { useEffect } from 'react';
import './App.css'
import { TodoAdder } from './components/TodoAdder'
import { TodoView } from './components/TodoView'
import { useSelector } from 'react-redux';

function App() {
  const listData = useSelector(state => state.list);

  return (
    <div>
        <TodoAdder/>
        {listData &&  <TodoView list={listData.todos}/>}
    </div>
  )
}

export default App
