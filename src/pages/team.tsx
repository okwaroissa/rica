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
            createmembers(refBoard.current, team.board, 'BOARD OF DIRECTORS', navigate)
            createmembers(refMembers.current, team.members, 'TEAM MEMBERS', navigate)
        }
    },[])
    return (
        <div className='rica-page'>
            <div className='board-row' ref={refBoard}></div>
            <div className='members-row' ref={refMembers}></div>
        </div>
    )
}
export default Team