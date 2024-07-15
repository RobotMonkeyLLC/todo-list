import { useState, useEffect } from 'react'
import './App.css'
import Note from './note'

function App() {
  const [list, setList] = useState([])
  const [style, setStyle] = useState({display: 'none'})

  const addItem = () => {
    const input = document.querySelector('input')
    if (input.value) {
      const newItem = {
        id: list.length,
        text: input.value
      }
      setList([...list, newItem])
      input.value
    }
  }

  const deleteItem = (e) => {
    const id = e.target.parentElement.id
    const newList = list.filter((task) => task.id !== parseInt(id))
    // Update the id of each task
    newList.map((task, index) => {
      task.id = index
    })
    console.log(newList)
    setList(newList)
  }

  return (
      <div >
        <h1>todos</h1>
        <div className="card col-12">
          <div className='row'>
            <input 
              className='col-10' 
              type="text" 
              placeholder="Add a new task" 
              onKeyDown={(e) => {if (e.key === 'Enter') addItem()}}/>
            <button 
              type='submit' 
              className='btn col-2' 
              onClick={() => addItem()}>+</button>
          </div>
          <Note 
            list={list} 
            setList={setList} 
            deleteItem={deleteItem}/>
          {/* <div className='row'
            onMouseEnter={(e) => {
              setStyle({display: 'block'}) 
            }}
            onMouseLeave={
              (e) => {
                setStyle({display: 'none'})
              }
            }>
            {list.map((task) => (
                <div 
                  className='row note' 
                  key={task.id} 
                  id={task.id}>
                    <p className='col-10 note-text'>{task.text}</p>
                    <button style={style} className='btn col-2' onClick={(e) => deleteItem(e)}>-</button>
                </div>
              ))
            }
          </div> */}
        </div>
      </div>
  )
}

export default App
