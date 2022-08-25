import React from 'react'
import '../styles/Progress.css'

function Progress({ progress }) {


  return (
    <div className="progress_container">
        <div className="progress_fill" style={{width: `${progress}%`}}>
            <span className="progress_label">{progress}%</span>
        </div>
    </div>
  )
}

export default Progress