import React from 'react'
import styled from 'styled-components'


const TodoTemplate = ({children}) => {
  return (
    <TotoWrapper>
      <AppTitle>Todo List 📑</AppTitle>
      <Content>
        {children}
      </Content>
    </TotoWrapper>
  )
}

const TotoWrapper = styled.div`
  width : 512px;
  margin : 6rem auto 0;
  border-radius : 4px;
  overflow : hidden;
  box-shadow : 0 0 5px #fff;
`;

const AppTitle = styled.h1`
  background : #000;
  font-size : 25px;
  height : 4rem;
  display :flex;
  justify-content : center;
  align-items : center;
  color : #fff;
  font-weight : bold;
  border : 1px solid #fff;
  border-radius : 5px;
`;

const Content = styled.div`
  background : #000;
`;

export default TodoTemplate