import React,{useState} from 'react'
import './pay.css'

export default function Pay () {
    const [content, setContent] = useState("project");

  return (
    <div className='pay_holder'>
        <div className="list_of_options">
            <button
            className="option-btn active"
            onClick={(e) => {
                setContent("project");
                e.target.classList.add("active");
                e.target.parentElement.children[1].classList.remove("active");
                e.target.parentElement.children[2].classList.remove("active");

            }}
            data-content="project"
            value={content}
            >
            Project
            </button>

            <button
            className="option-btn"
            onClick={(e) =>{
                setContent("skill");
                e.target.classList.add("active");
                e.target.parentElement.children[0].classList.remove("active");
                e.target.parentElement.children[2].classList.remove("active");

            }}
            data-content="skill"
            value={content}
            >
            Skill
            </button>

            <button
            className="option-btn"
            onClick={(e) => {
                setContent("report");
                e.target.classList.add("active");
                e.target.parentElement.children[0].classList.remove("active");
                e.target.parentElement.children[1].classList.remove("active");
            }}
            data-content="report"
            value={content}
            >
            Report
            </button>
        </div>
        
        {content === "project" ? <h1>hh</h1> : null}
        {content === "skill" ? <h1>hh2</h1> : null}
        {content === "report" ? <h1>hh3</h1> : null}
    </div>
  )
}
