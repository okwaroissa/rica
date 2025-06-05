import React, {useEffect, useRef, useState} from 'react'
import { View } from 'ol'
import { olView } from '../utils/mapping'
import '../../node_modules/ol/ol.css'
const Location = () => {
    const olviewRef = useRef<HTMLDivElement>(null)
    const viewRef = useRef<View | null>(null)
    useEffect(()=>{
        if (olviewRef.current && viewRef.current == null){
            viewRef.current = olView(olviewRef.current)
        }
    },[])
    return (
        <div className="location-page">
            <div className='location-details'>
                <span className='rica-location-header'>Operation Area</span>
                <p>RICA is founded in Massachusetts, and serves refugee and immigrant communities across the state.</p>
                <p>
                    We currently operate from Worcester city, with outreaches to a number of Central Massachusetts cities / towns. 
                    We intend ton establish field offices across the state as we grow.
                </p>


                {/* <div className='row'>
                    <div className='col-md-10'>
                        <span className='rica-location-header'>Operation Area</span>
                        <p>RICA is founded in Massachusetts, and serves refugee and immigrant communities across the state.</p>
                        <p>
                            We currently operate from Worcester city, with outreaches to a number of Central Massachusetts cities / towns. 
                            We intend ton establish field offices across the state as we grow.
                        </p>
                    </div>
                    <div className='col-md-2'>
                        <span className='rica-location-header'>Office Address</span>
                        <div>
                            324 Grove Street, #2<br/>
                            Worcester, MA 01605<br/>
                            Phone: +1 214 799-8073
                        </div>
                    </div>
                </div> */}
            </div>
            <div className='ol-view' ref={olviewRef}></div>
        </div>
    )
}
export default Location