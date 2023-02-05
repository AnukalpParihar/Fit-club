import React from 'react'
import './Programs.css'
import { programsData } from '../../data/programsData'
import RightArrow  from '../../assets/rightArrow.png'
const Programs = () => {
  return (
    <div className="Programs" id='programs'>
        {/* header */}

        <div className="programs-header">
            <span className='stroke-text'>Explore</span>
            <span>Programs</span>
            <span className='stroke-text'>to shape you</span>
        </div>

        {/* categories */}
        <div className='programs-categories'>
            {programsData.map((program)=>(
            <div className='category'>
                {program.image}
                <span>{program.heading}</span>
                <span>{program.details}</span>
                <div className='join-now'>
                    <span>Join Now</span>
                    <img src={RightArrow}/>
                </div>
            </div>
            ))}



        </div>



    </div>

  )
}

export default Programs