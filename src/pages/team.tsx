import {useRef, useEffect} from 'react'
import { team } from '../biopages/biographies'
import { createmembers } from '../utils/utils'
import { useNavigate } from 'react-router-dom'

const Team = () => {
    const navigate = useNavigate()
    const refBoard = useRef<HTMLDivElement>(null)
    const refMembers = useRef<HTMLDivElement>(null)
    useEffect(()=>{
        if (refBoard.current && refBoard.current.innerHTML === '' && refMembers.current && refMembers.current.innerHTML === ''){
            createmembers(refBoard.current, team.board, navigate)
            createmembers(refMembers.current, team.members, navigate)
        }
    },[navigate])
    return (
        <div className='rica-page'>
            <div className='board-row'>
                <h5 className='team-section-header'>BOARD OF DIRECTORS</h5>
                <div className='board-members' ref={refBoard}></div>
            </div>
            <div className='members-row'>
                <h5 className='team-section-header'>TEAM MEMBERS</h5>
                <div className='team-members' ref={refMembers}></div>
            </div>
        </div>
    )
}
export default Team