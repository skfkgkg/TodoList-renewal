import React from 'react'
import{
  MdCheckBox,
  MdCheckBoxOutlineBlank,
  MdRemoveCircleOutline
} from 'react-icons/md'
import styled from 'styled-components'
import cn from 'classnames'


const TodoListItem = ({todo,onRemove,onToggle}) => {
  const {id, text, checked} = todo;
  return (
    <TodoItemWrapper>
      <CheckBox 
      className={cn('checkbox', {checked})}
      onClick={(() => onToggle(id))}
      >
        {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
        <div className='text'>{text}</div>
      </CheckBox>
      <Remove onClick={()=> onRemove(id)}>
        <MdRemoveCircleOutline />
      </Remove>
    </TodoItemWrapper>
  )
}

const TodoItemWrapper = styled.div`
  display : flex;
  align-items : center;
  padding : 1rem;
  border : 1px solid #fff;
  border-radius : 5px;
  & + & {
    border-top : 1px solid #dee2e6;
  }
`;

const CheckBox = styled.div`
  display : flex;
  align-items : center;
  cursor :pointer;
  flex : 1;
  
  svg{
    font-size : 1.3rem;
    color : #fff;
  }

  .text{
    margin-left : 10px;
    color : #fff;
  }

  &.checked{
    svg{
      border-radius : 50%;
      opacity : 0.3;
    }
    .text{
      text-decoration: line-through;
      opacity : 0.3;
    }
  }
`;

const Remove = styled.div`
  display : flex;
  align-items : center;
  font-size : 1.3rem;
  color : red;
  cursor :pointer;
  &:hover {
    color : #adb5bd;
  }
`;

export default TodoListItem