import React, {Component} from 'react'
import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding:0;
    box-sizing: border-box;
  }
  body{
    background-color:#d78d9a;
  }
`

const Container = styled.div`
  margin: 3vw;
  padding: 3vw;
  height: 88vh;
  background-color: #11574c;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  color:#d78d9a;
  font-size: 1.3vw;
`

const Tittle = styled.h1`
  font-size: 3vw;
  text-decoration: underline #b04e77;
`

const Inputs = styled.div`
  display: flex;
  width: 50%;
  justify-content: space-around;
`

const Input = styled.input`
  background-color: #d78d9a;
  color:#11574c;
  font-weight: 900;
  border: 2px solid #b04e77; 
`

const Buttons = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-evenly;
`

const Button = styled.button`
  width: 12%;
  height: 2.5vw;
  font-size: 1.5vw;
  background-color: #d78d9a;
  color:#11574c;
  font-weight: 900;
  border: none;

  &:hover{
    border: 3px solid #b04e77;
  }
`

export default class Calc extends Component{

  state = {
    result: null,
    n1: "",
    n2: "",
    signal: "",
    msg: "Digite os números do cálculo que queira fazer!"
  }

  add = () => {
    let {result, n1, n2} = this.state
    if(n1 && n2 !== ""){
      this.setState({
        result: n1 + n2,
        msg: "",
        signal: "+"
      })
    } else {
      this.setState({
        msg: "Você precisa escrever os dois números!"
      })
    }
  }

  remove = () => {
    let {result, n1, n2} = this.state
    if(n1 && n2 !== ""){
      this.setState({
        result: n1 - n2,
        msg: "",
        signal: "-"
      })
    } else {
      this.setState({
        msg: "Você precisa escrever os dois números!"
      })
    }
  }
  
  divide = () => {
    let {result, n1, n2} = this.state
    if(n1 && n2 !== ""){
      this.setState({
        result: n1 / n2,
        msg: "",
        signal: "/"
      })
    } else {
      this.setState({
        msg: "Você precisa escrever os dois números!"
      })
    }
  }
  
  multiply = () => {
    let {result, n1, n2} = this.state
    if(n1 && n2 !== ""){
      this.setState({
        result: n1 * n2,
        msg: "",
        signal: "*"
      })
    } else {
      this.setState({
        msg: "Você precisa escrever os dois números!"
      })
    }
  }
  
  clear = () => {
    this.setState({
      n1: "",
      n2: "",
      result: null,
      signal: "",
      msg: "Digite os números do cálculo que queira fazer!"
    })
  }
  
  handleChange = (e) => {
    let {n1} = this.state
    this.setState({
      n1: Number(e.target.value)
    })
  }

  handleChange2 = (e) => {
    let {n2} = this.state
    this.setState({
      n2: Number(e.target.value)
    })
  }

  render(){
    let {result, signal, msg, n1, n2} = this.state
    let {add, remove, divide, multiply, clear, handleChange, handleChange2} = this
    
    return(
      <Container>
        <GlobalStyle/>
        <Tittle>Calc 2.0</Tittle>
        <h2>{result} {msg}</h2>
        <Inputs>
          <Input onChange={handleChange} value={n1}/>
          <h2>{signal}</h2>
          <Input onChange={handleChange2} value={n2}/>
        </Inputs>
        <Buttons>
          <Button onClick={add}> + </Button>
          <Button onClick={remove}> - </Button>
          <Button onClick={divide}> / </Button>
          <Button onClick={multiply}> * </Button>
          <Button onClick={clear}> Clear </Button>
        </Buttons>
      </Container>
    )
  }
}