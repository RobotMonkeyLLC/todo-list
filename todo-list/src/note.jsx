import React, { useState } from 'react'

export default function Note({ list, setList, deleteItem}) {      
    const [style, setStyle] = useState({display: 'none'})

    return (
        <div className='row'>
            {list.map((task) => (
            <div 
              className='row note' 
              key={task.id} 
              id={task.id}
              onMouseEnter={(e) => {
                e.target.querySelector('button').style.display = 'block'
                console.log('enter')
              }}
                onMouseLeave={(e) => {
                    e.target.querySelector('button').style.display = 'none'
                    console.log('leave')
                }}
              >
                
                <p className='col-10 note-text'>{task.text}</p>
                <button className='btn col-2' onClick={(e) => deleteItem(e)}>-</button>
            </div>
          ))
        }
      </div>
    )
}