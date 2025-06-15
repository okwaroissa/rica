import React from "react"
import { useLocation } from "react-router-dom"
import { member } from "../types/types"
const Member = () => {
    const location = useLocation()
    const data = location.state as member
    return (
        <div className='rica-page'>
            <h4 className="member-bio-title">{data.name} ({data.title})</h4>
            <div className="member-bio">
                {data.bio.map((d,i)=>(<p>{d}</p>))}
            </div>
        </div>
    )
}
export default Member