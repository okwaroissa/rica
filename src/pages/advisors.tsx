import React, { useRef, useEffect } from "react"
import { team } from '../biopages/biographies'
import { useNavigate } from 'react-router-dom'
import { createmembers } from "../utils/utils"

const Advisors = () => {
    const refAdvisors = useRef<HTMLDivElement>(null)
    const navigate = useNavigate()
    useEffect(()=>{
        if (refAdvisors.current && refAdvisors.current.innerHTML === ''){
            createmembers(refAdvisors.current, team.advisors, 'BOARD OF ADVISORS', navigate)
        }
    },[])
    return (
        <div className="rica-page">
            <div className="advisors-row" ref={refAdvisors}></div>
        </div>
    )
}
export default Advisors