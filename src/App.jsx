import { useEffect } from 'react';
import './App.css'
import { TodoAdder } from './components/TodoAdder'
import { TodoView } from './components/TodoView'
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const StyledApp = styled.div`
  

  .content{
      display:grid;
      grid-template-columns: 1fr 1fr;
      gap:1em;
  }
`
function App() {
  const listData = useSelector(state => state.list);

  return (
    <StyledApp>
        <h1>Redux Toolkit - Todo List/Crud App Example</h1>
        <div className='content'>
          <TodoAdder/>
          {listData &&  <TodoView list={listData.todos}/>}
        </div>
    </StyledApp>
  )
}

export default App
