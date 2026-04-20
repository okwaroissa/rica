import React from 'react'
import positive from '../images/rica-logo.png'
import reliant from '../images/reliant-logo.png'
import umass from '../images/ummh_logo_color.png'

const Home = () =>{
    return (
        <div className='rica-page'>
            <img src={positive} alt="" className='home-back'/>
            <h2 className='emphasize'>Welcome to RICA</h2>
            <div>
                <p>At RICA, we believe in the power of dignity, inclusion, and opportunity. As a trusted voice and ally for refugees and immigrants, we are committed to supporting individuals and families as they rebuild their lives in a new home.</p>
                <p>
                    Through direct services, advocacy, and community partnerships, RICA empowers newcomers with access to housing, legal assistance, education, employment resources, and cultural orientation. 
                    We work hand in hand with local leaders, volunteers, and organizations to create welcoming spaces where every individual feels valued and equipped to thrive
                </p>
                <p>Whether you are seeking support, looking to volunteer, or want to learn more about the immigrant experience, RICA is here to connect, uplift, and stand with you.</p> 
            </div>
            <h6 className='motto'>Together, we build stronger communities.</h6>
            <h2 className='emphasize'>Our Partners</h2>
            <div className='rica-partners'>
                <a href="https://reliantfoundation.org/" target='_blank' className='partner'><img src={reliant} alt="reliant foundation" /></a>
                <a href="https://www.ummhealth.org/" target='_blank' className='partner'><img src={umass} alt="umass memorial health" /></a>
            </div>
        </div>
    )
}
export default Home