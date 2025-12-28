import React from 'react'
import orientation from '../images/orientation.png'
import medical from '../images/medical-support.png'
import cultural from '../images/cultural-integration.png'
import career from '../images/career.png'
import support from '../images/support.png'
import immigration from '../images/immigration.png'
import housing from '../images/housing.png'
const Services = () => {
    return (
        <div className='rica-page'>
            <h3 className='section-heading'>CORE SERVICES</h3>
            <div className='rica-services'>
                <h4 className='service-area-heading'>Comprehensive Support Navigation</h4>
                <div className='rica-service-area row'>
                    <img src={support} alt="" className='service-area-image col-md-6'/>
                    <p className='col-md-6'>
                        Our signature program connects refugees and immigrants with essential resources and guidance throughout their integration journey. 
                        We help clients navigate complex systems, access public benefits, establish community connections, and develop self-sufficiency skills. 
                        Through personalized case management, multilingual support, and cultural brokering, we ensure newcomers can effectively access the full range of services available while preserving their dignity and autonomy.
                    </p>
                </div>

                <h4 className='service-area-heading'>Career Pathways Program</h4>
                <div className='rica-service-area row'>
                    <img src={career} alt="" className='service-area-image col-md-6'/>
                    <div className='col-md-6'>
                        <p>
                            We facilitate sustainable economic integration through a comprehensive employment and professional development approach. Our services include:
                        </p>
                        <ul>
                            <li>
                                <span className='service-area-item'>Customized Job Matching: </span> Connecting clients with employers seeking their unique skills and experiences.
                            </li>
                            <li>
                                <span className='service-area-item'>Career Navigation: </span> Guiding professional recertification, credential evaluation, and career advancement opportunities.
                            </li>
                            <li>
                                <span className='service-area-item'>Language for Employment: </span> Offering specialized English instruction focused on workplace communication and industry-specific terminology.
                            </li>
                            <li>
                                <span className='service-area-item'>Entrepreneurship Facilitation: </span> Supporting small business development through workshops, mentorship connections, and microenterprise resources.
                            </li>
                        </ul>
                    </div>
                </div>

                <h4 className='service-area-heading'>Youth Empowerment Initiative</h4>
                <div className='rica-service-area row'>
                    <img src={orientation} alt="" className='service-area-image col-md-6'/>
                    <p className='col-md-6'>
                        Our youth-centered program creates supportive environments where young refugees and immigrants can thrive academically, socially, and emotionally. 
                        Through peer mentorship, cultural identity affirmation, educational advocacy, and leadership development, we help young people navigate cross-cultural identities while building the skills needed for success. 
                        The program emphasizes immediate academic support and long-term personal development, creating pathways to college, careers, and civic engagement.
                    </p>
                </div>
                <h4 className='service-area-heading'>Immigration Legal Navigation</h4>
                <div className='rica-service-area row'>
                    <img src={immigration} alt="" className='service-area-image col-md-6'/>
                    <div className='col-md-6'>
                        <p>
                            We guide clients through complex immigration processes while connecting them with qualified immigration legal services. Our approach includes:
                        </p>
                        <ul>
                            <li>
                                <span className='service-area-item'>Legal Rights Education: </span> Empowering clients with knowledge about their rights and responsibilities.
                            </li>
                            <li>
                                <span className='service-area-item'>Document Preparation Assistance: </span> Supporting clients with gathering and organizing required documentation.
                            </li>
                            <li>
                                <span className='service-area-item'>Legal Referral Network: </span> Maintaining partnerships with reputable immigration attorneys and low-cost legal service providers.
                            </li>
                            <li>
                                <span className='service-area-item'>Family Reunification Support: </span> Guiding the complex family reunification process.
                            </li>
                        </ul>
                    </div>
                </div>
                <h4 className='service-area-heading'>Holistic Wellness Program</h4>
                <div className='rica-service-area row'>
                    <img src={medical} alt="" className='service-area-image col-md-6'/>
                    <p className='col-md-6'>
                        Our culturally responsive wellness program addresses the whole-person needs of refugees and immigrants, with a particular focus on mental health and trauma healing. 
                        Through community-based healing circles, evidence-based therapeutic referrals, and wellness workshops, we help clients build resilience while honoring their cultural understandings of well-being. 
                        The program integrates intergenerational approaches that recognize how historical and migration experiences affect families across generations.
                    </p>
                </div>
                <h4 className='service-area-heading'>Housing Stability Initiative</h4>
                <div className='rica-service-area row'>
                    <img src={housing} alt="" className='service-area-image col-md-6'/>
                    <div className='col-md-6'>
                        <p>
                            We address the critical housing challenges facing refugee and immigrant communities through a multi-faceted approach:
                        </p>
                        <ul>
                            <li>
                                <span className='service-area-item'>Housing Navigation: </span> Guiding clients through housing searches, application processes, and tenant rights education.
                            </li>
                            <li>
                                <span className='service-area-item'>Landlord Engagement: </span> Building relationships with property owners willing to work with newly arrived families.
                            </li>
                            <li>
                                <span className='service-area-item'>Financial Capability: </span> Offering workshops on building credit, budgeting for housing costs, and accessing housing subsidies.
                            </li>
                            <li>
                                <span className='service-area-item'>Community Advocacy: </span> Collaborating with housing organizations to address systemic barriers and expand affordable housing options.
                            </li>
                        </ul>
                    </div>
                </div>
                <h4 className='service-area-heading'>Cultural Connection Program</h4>
                <div className='rica-service-area row'>
                    <img src={cultural} alt="" className='service-area-image col-md-6'/>
                    <div className='col-md-6'>
                        <p>
                            Our newest initiative focuses on preserving cultural heritage while fostering integration through:
                        </p>
                        <ul>
                            <li>
                                <span className='service-area-item'>Agricultural Access: </span> Connecting clients with community gardens and farming opportunities.
                            </li>
                            <li>
                                <span className='service-area-item'>Cultural Exchange Events: </span> Creating spaces for newcomers and established residents to share traditions.
                            </li>
                            <li>
                                <span className='service-area-item'>Arts and Expression: </span> Supporting creative projects that preserve and celebrate diverse cultural expressions.
                            </li>
                            <li>
                                <span className='service-area-item'>Digital Storytelling: </span> Empowering community members to document their journeys and cultural knowledge.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Services