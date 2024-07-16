import React, { useState } from 'react'

export default function Note({ list, setList, deleteItem}) {
    return (
        <div className='w-100'>
            {list.map((task) => (
            <div 
              className='row note'
              key={task.id} 
              id={task.id}
              >
                <p className='col-10 note-text'>{task.text}</p>
                <button className='btn remove col-2  text-danger' onClick={(e) => deleteItem(e)}>X</button>
            </div>
          ))
        }
      </div>
    )
}