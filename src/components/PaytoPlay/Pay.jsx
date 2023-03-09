import React,{useState} from 'react'
import './pay.css'

export default function Pay () {
    const [content, setContent] = useState("Upgrade");

  return (
    <div className='pay_holder'>
        <div className='logo'></div>
        <div className="list_of_options">
            <button
            className="option-btn active"
            onClick={(e) => {
                setContent("Upgrade");
                e.target.classList.add("active");
                e.target.parentElement.children[1].classList.remove("active");
                e.target.parentElement.children[2].classList.remove("active");

            }}
            data-content="project"
            value={content}
            >
            Upgrade
            </button>

            <button
            className="option-btn"
            onClick={(e) =>{
                setContent("magic trick");
                e.target.classList.add("active");
                e.target.parentElement.children[0].classList.remove("active");
                e.target.parentElement.children[2].classList.remove("active");

            }}
            data-content="skill"
            value={content}
            >
            magic trick
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
        
        {content === "Upgrade" ? <h1>hh</h1> : null}
        {content === "magic trick" ? <h1>hh2</h1> : null}
        {content === "report" ? <h1>hh3</h1> : null}
    </div>
  )
}
