import React from 'react'
import "./skills.css";
const frontendSkills=[
    {
        title:'JavaScript',
        width:'85%',
        persantage:'85%'
    },
    {
        title:'CSS',
        width:'85%',
        persantage:'85%'
    },
    {
        title:'HTML',
        width:'100%',
        persantage:'100%'
    },
    {
        title:'REACT.JS',
        width:'90%',
        persantage:'90%'
    }
]
const backendSkills=[
    {
        title:'Java Spring',
        width:'85%',
        persantage:'85%'
    },
    {
        title:'SQL Server',
        width:'85%',
        persantage:'85%'
    },
    {
        title:'Postgre SQL',
        width:'100%',
        persantage:'100%'
    },
]
const Skills = () => {
  return(
    <div className='skills_wrapper d-flex gap-5'>
        <div className='frontend__skill'>
            {
                frontendSkills.map((item,index)=>{
                    <div className='skill__data'>
                        <div className='skill__title'>
                            <h6>{item.title}</h6>
                            <span>{item.width}</span>
                        </div>
                        <div className='skill__bar'>
                            <span>{item.persantage}</span>
                        </div>
                    </div>
                })
            }
        </div>
        <div className='backend__skill'>
            {backendSkills.map((item,index)=>{
                <div className='skill__data'>
                    <div className='skill__title'>
                        <h6>{item.title}</h6>
                        <span>{item.width}</span>
                    </div>
                    <div className='skill__bar'>
                        <span className='skill__persantage'>{item.persantage}</span>
                    </div>
                </div>
            })}
        </div>

    </div>
  )
}

export default Skills