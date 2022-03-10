import React, { useEffect, useState } from 'react'
import AddNewTodo from './AddNewTodo'

const TodoList = () => {
  const [todos, setTodos] = useState([
    { text: 'Pay bills', id: 1 },
    { text: 'Do you homework', id: 2 },
    { text: 'Feed the dog', id: 3 },
  ])

  const [count, setCount] = useState(0)

  const addTodo = (text) => {
    setTodos([
      ...todos,
      {
        text,
        id: window.crypto.getRandomValues(new Uint32Array(1))[0],
      },
    ])
  }

  useEffect(() => {
    console.log('useEffect', todos)
  }, [todos])

  useEffect(() => {
    console.log('useEffect', count)
  }, [count])

  return (
    <div>
      <ul>
        {todos.map((todo) => {
          return <li key={todo.id}>{todo.text}</li>
        })}
      </ul>
      <AddNewTodo addTodo={addTodo} />
      <button
        onClick={() => {
          setCount(count + 1)
        }}
      >
        Score: {count}
      </button>
    </div>
  )
}

export default TodoList
