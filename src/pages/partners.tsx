import reliant from '../images/reliant-logo.png'
import umass from '../images/ummh_logo_color.png'
const Partners = () => {
    return (
        <div className="rica-page">
            <h2 className='emphasize'>Our Partners</h2>
            <p>
                <strong>RICA</strong> is deeply grateful to all our partners for their generous support and unwavering commitment to our mission.
                Your collaboration is not simple a contribution - it is a statement of shared values and a belief that every refugee 
                and immigrant family deserves dignity, opportunity, and access to the care they need.
            </p>
            <p>
                Through your partnership, RICA has been able to strengthen and expand <strong>culturally responsive mental health and wellness services</strong>, 
                provide direct support to families navigating significant challenges, and build a more inclusive and compassionate Worcester community.
            </p>
            <p>
                The impact of your generosity is felt every day - in the lives of young people receiving mental health support, 
                in families finding stability, and in a community growing stronger together. <strong>we could not do this work without you</strong>.
            </p>
            <div className='rica-partners'>
                <a href="https://reliantfoundation.org/" target='_blank' className='partner'><img src={reliant} alt="reliant foundation" /></a>
                <a href="https://www.ummhealth.org/" target='_blank' className='partner'><img src={umass} alt="umass memorial health" /></a>
            </div>
        </div>
    )
}
export default Partners