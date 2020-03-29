import React, { Component } from 'react'

import './App.css'
import Controls from './components/Controls'
import InputItem from './components/InputItem'
import ItemLine from './components/Itemline'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      todoList: [],
      activTodoList: [],
      CompleatedTodoList: [],
      todoListToDisplay: [],
      newItem: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleClickAddTodo = this.handleClickAddTodo.bind(this)
    this.deleteItemLine = this.deleteItemLine.bind(this)
    this.changeIsCompleated = this.changeIsCompleated.bind(this)
    this.todoCount = this.todoCount.bind(this)
    this.displayCompleated = this.displayCompleated.bind(this)
  }

  //--Update new Item in state--//
  handleChange (event) {
    const textInput = document.querySelector('.input-item input')
    textInput.style.opacity = 1
    console.log('Change')
    this.setState({
      newItem: event.target.value
    })
  }

  createNewItem () {
    return {
      id: 1 + Math.random(),
      description: this.state.newItem,
      isCompleated: false
    }
  }

  //--Add a new todo item--//
  handleClickAddTodo (event) {
    if (this.state.newItem === '') {
      return
    }

    const textInput = document.querySelector('.input-item input')
    textInput.style.opacity = 0.3

    const newAddedItem = this.createNewItem()

    const itemsList = [...this.state.todoList]
    itemsList.push(newAddedItem)

    this.setState({
      todoList: itemsList,
      todoListToDisplay: itemsList,
      newItem: ''
    })
  }

  //--Delete an item from todo list--//
  deleteItemLine = event => {
    let itemsList = [...this.state.todoList]
    let updatedItemsList = []
    itemsList.map(item => {
      if (item.id != event.target.name) {
        updatedItemsList.push(item)
      }
    })
    this.setState({
      todoList: updatedItemsList,
      todoListToDisplay: updatedItemsList
    })
  }

  //--uptade compleated todo--//
  changeIsCompleated = event => {
    let itemsList = [...this.state.todoList]
    let updatedItemsList = []
    itemsList.map(item => {
      if (item.id == event.target.name) {
        item.isCompleated = !item.isCompleated
        console.log('Is completed is: ', item.isCompleated)
        updatedItemsList.push(item)
      } else {
        updatedItemsList.push(item)
        console.log(updatedItemsList)
      }
      this.setState({
        todoList: updatedItemsList
      })
    })
  }

  //--display all todo items--//
  veiwAll = () => {
    let itemsList1 = [...this.state.todoList]
    this.setState({
      todoListToDisplay: itemsList1
    })
  }

  //--display Active todo items--//
  displayActive = () => {
    let itemsList = [...this.state.todoList]
    let updatedItemsList = []
    itemsList.map(item => {
      if (item.isCompleated === false) updatedItemsList.push(item)
    })
    this.setState({
      todoListToDisplay: updatedItemsList
    })
  }

  //--display Compleated todo items--//
  displayCompleated = () => {
    let itemsList = [...this.state.todoList]
    let updatedItemsList = []
    console.log('displayCompleated')
    itemsList.map(item => {
      if (item.isCompleated === true) {
        updatedItemsList.push(item)
      }
    })
    this.setState({
      todoListToDisplay: updatedItemsList
    })
  }

  //--Clear Compleated todo items--//
  clearCompleated = () => {
    let itemsList = [...this.state.todoList]
    let updatedItemsList = []
    itemsList.map(item => {
      if (item.isCompleated === false) {
        updatedItemsList.push(item)
      }
    })
    this.setState({
      todoList: updatedItemsList,
      todoListToDisplay: updatedItemsList
    })
  }

  todoCount = () => {
    return <span>iteme left</span>
  }

  //-----------------------------------------------------------------
  render () {
    return (
      <div className='main-container'>
        <h1>My Todo list</h1>
        <div>
          <InputItem
            value={this.state.newItem}
            onChange={this.handleChange}
            onClick={this.handleClickAddTodo}
          />
        </div>

        <div className='item-line-wraper'>
          {this.state.todoListToDisplay.map(item => {
            return (
              <ItemLine
                key={item.id}
                description={item.description}
                deleteItemLine={this.deleteItemLine}
                name={item.id}
                changeIsCompleated={this.changeIsCompleated}
                checked={item.isCompleated}
              />
            )
          })}
        </div>
        <Controls
          veiwAll={this.veiwAll}
          displayActive={this.displayActive}
          displayCompleated={this.displayCompleated}
          clearCompleated={this.clearCompleated}
          todoCount={this.todoCount}
        />
        {/* <Button variant="outlined">Default</Button>  */}
      </div>
    )
  }
}
export default App
