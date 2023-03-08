import React,{useState} from 'react'
import './nav.css'
import coin_pic from '../../assets/cube_score.png'

export default function Nav () {
  const [score, setScore] = useState(0);
  
  return (
    <div className='nav_area'>
        <div className='nv-options'>
          <button className='Add-hand'> Buy One More Hand</button>
          </div>
        <div className='coins'>
          <div className='score'>
              <img src={coin_pic} alt='coin' className='coin_pic' />
              <span className='coin_count'>{score}</span>
          </div>

          <div className='settings'>
            <span className="material-icons-sharp">settings</span>
          </div>
        </div>
    </div>
  )
}