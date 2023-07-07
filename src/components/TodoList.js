import React from 'react'
import TodoListItem from './TodoListItem'
import styled from 'styled-components'

const TodoList = ({todos, onRemove, onToggle}) => {
  return (
    <TodolistWrapper>
    {/* map을 사용하여 key props 전달해야 함 */}
    {todos.map( (todo) => (
      <TodoListItem 
      todo={todo} 
      key={todo.id} 
      onRemove={onRemove} 
      onToggle={onToggle} 
      />
      ))}
    </TodolistWrapper>
  )
}

const TodolistWrapper = styled.div`
  min-height : 320px;
  max-height : 513px;
  overflow : auto;
`;

export default TodoList