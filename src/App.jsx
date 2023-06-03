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


export const StyledButton = styled.button`
  padding: .2em 2em;
  border: none;
  transition:  all 250ms ease;
  font-size: 1.2rem;
  background-color:${props => props.bgColor || '#1b73e5'};
  color: white;
  box-shadow: 0px 0px 3px 2px #1717171c;
  outline: 2px solid white;
  margin: 0 1em;
  &:hover{
    cursor: pointer;
    scale: 1.02;
    outline: 4px solid black;
    box-shadow: 0px 0px 3px 0 #17171743;
  }
`
export default App
