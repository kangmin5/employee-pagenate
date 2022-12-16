import React from 'react'
import { Link } from 'react-router-dom'

const Intro = () => {

  return (
    <div>
        <div className='mb-5'>
            <img src="corestone.png" alt="company" />
        </div>
        <Link to ="/employee" className='btn btn-info'>직원리스트</Link>
    </div>
  )
}

export default Intro