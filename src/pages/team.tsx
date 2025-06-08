import React, {useRef, useEffect} from 'react'
import isaack from '../images/isaack.jpg'
import tshibangu from '../images/tshibangu.jpg'
import hussein from '../images/hussein.jpg'
import { team } from '../biopages/biographies'
import { groupedmembers } from '../utils/biography'
import { member } from '../types/types'
const Team = () => {
    const refTeam = useRef<HTMLDivElement>(null)
    const createmembers = (cont:HTMLDivElement, group:member[], title:string) => {
        let heading = document.createElement('h3')
        heading.classList.add('team-section-header')
        heading.innerHTML = title
        cont.appendChild(heading)
        let gboard = groupedmembers(group)
        gboard.forEach((gb)=>{
            let gbrow = document.createElement('div')
            gbrow.classList.add('row', 'team-row')
            gb.forEach((b)=>{
                let bcard = document.createElement('div')
                bcard.classList.add('col-md', 'card', 'team-card')
                let bimg = document.createElement('img')
                bimg.classList.add('card-img-top')
                bimg.src = b.photo
                bcard.appendChild(bimg)
                let bhead = document.createElement('h6')
                bhead.classList.add('team-member-name', 'card-title')
                bhead.innerHTML = b.name
                bcard.appendChild(bhead)
                let btitle = document.createElement('span')
                btitle.classList.add('team-member-title')
                btitle.innerHTML = b.title
                bcard.appendChild(btitle)
                gbrow.appendChild(bcard)
            })
            cont.appendChild(gbrow)
        })
    }
    useEffect(()=>{
        if (refTeam.current && refTeam.current.innerHTML == ''){
            createmembers(refTeam.current, team.board, 'BOARD OF DIRECTORS')
            createmembers(refTeam.current, team.members, 'TEAM MEMBERS')
        }
    },[])
    return (
        <div className='rica-page' ref={refTeam}>


            {/* <h3 className='team-section-header'>BOARD OF DIRECTORS</h3>
            <table className='table table-responsive table-striped table-bordered'>
                <thead>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>FUNCTION</th>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Maxwell Agyemang, PHD</td>
                        <td>Chairman</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Magdelene Njuguna, MSW</td>
                        <td>Vice-Chairman</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Ibrahim Muse</td>
                        <td>Treasurer</td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>Emma Karen Ankrah, MSW</td>
                        <td>Secretary</td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>Nuredin Adem</td>
                        <td>Board Member</td>
                    </tr>
                </tbody>
            </table>
            <h3 className='team-section-header'>TEAM MEMBERS</h3>
            <table className='table table-responsive table-striped table-bordered'>
                <thead>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>FUNCTION</th>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Hussein Mohamed, MSW</td>
                        <td>Executive Director</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Tshibangu Kalala, PHD</td>
                        <td>Director of Operations</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Nghia Nelson Le, MA, CAGS</td>
                        <td>Mental Health Program Coordinator</td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>Peter Ojukwu Bosire, JD</td>
                        <td>Legal and Rights Education Coordinator</td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>Khalid Herez</td>
                        <td>Community Advocate / Organizer</td>
                    </tr>
                    <tr>
                        <td>6</td>
                        <td>Isack Nyagweso</td>
                        <td>Youth Program Coordinator</td>
                    </tr>
                </tbody>
            </table>
            <h3 className='team-section-header'>TEAM BIOGRAPHY</h3>
            <div className='row team-row'>
                <div className='col-md card team-card'>
                    <img src={hussein} alt="Member Photo" className='card-img-top'/>
                    <div className='card-body'>
                        <h3 className='team-member-name card-title'>Hussein Mohamed</h3>
                        <div className='member-bio'>
                            <div className='member-details'>
                                <p>
                                    Hussein Mohamed is the visionary founder and executive director of the Refugee and Immigrant Community Advocate (RICA). 
                                    His remarkable journey—from being born in Somalia and raised in a Kenyan refugee camp to becoming a transformative leader in Worcester County, Massachusetts—embodies the resilience and untapped potential he champions in every community he serves.
                                </p>
                                <p>
                                    From over 16 years of distinguished experience across nonprofit leadership, healthcare advocacy, and international humanitarian initiatives, Hussein has pioneered innovative approaches to dismantling systemic barriers preventing refugees and immigrants from accessing life-changing services. 
                                    His groundbreaking methodology seamlessly weaves culturally responsive care, trauma-informed healing practices, and strategic systems-level advocacy.
                                </p>
                                <p>
                                    Hussein's international foundation was forged through extensive work with humanitarian organizations and refugee resettlement programs throughout East Africa. 
                                    This rich global perspective, uniquely combined with his personal refugee experience, has shaped RICA's revolutionary holistic service model that addresses root causes rather than symptoms.
                                </p>
                                <p>
                                    As a master navigator of complex systems, Hussein specializes in healthcare advocacy, educational empowerment, and comprehensive social service coordination. 
                                    He has successfully guided countless newcomers through challenging barriers involving trauma recovery, language acquisition, and immigration complexities. 
                                    His transformational leadership philosophy creates healing-centered sanctuaries where individuals and families don't just receive services—they discover their voices, reclaim their dignity, and rebuild their dreams.
                                </p>
                                <p>
                                    Under Hussein's dynamic leadership, RICA has evolved into the region's most trusted community cornerstone, serving as a vital bridge between vulnerable populations and the intricate systems that shape their futures. 
                                    His expansive vision transcends traditional service delivery, fostering genuine community empowerment through culturally responsive care, passionate advocacy, and unwavering solidarity that honors each person's unique journey.
                                </p>
                                <p>
                                    Hussein's academic foundation reflects his lifelong commitment to grassroots service and systemic transformation: an Associate's degree in Human Services from Quinsigamond Community College and a Master's in Social Work from Anna Maria College. 
                                    He is currently pursuing his Master's degree in International Development from Clark University. He continues expanding his expertise to tackle the global root causes of displacement and inequality, ensuring RICA's impact reaches far beyond Worcester County.
                                </p>
                            </div>
                            <a href="#" className='btn member-linkedin-profile' target='_blank'>Hussein's Profile</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className='row team-row'>
                <div className='col-md card team-card'>
                    <img src="" alt="Member Photo" className='card-img-top'/>
                    <div className='card-body'>
                        <h3 className='team-member-name card-title'>Ibrahim Muse</h3>
                        <div className='member-bio'>
                            <div className='member-details'>
                                <p>
                                    Ibrahim Muse is a dedicated social worker whose career exemplifies RICA&#39;s mission of providing holistic
                                    support and empowerment for refugee and immigrant communities. With over 10 years of distinguished
                                    experience delivering humanitarian services, Ibrahim brings both lived experience and professional
                                    expertise to advancing dignity, resilience, and meaningful integration for vulnerable populations.  
                                </p>
                                <p>
                                    Ibrahim&#39;s foundation was built in Kenyan refugee camps, where he provided critical support to children
                                    and adults displaced by conflicts and natural disasters. Working with various non-governmental
                                    organizations, he delivered comprehensive services, including education, housing, counseling, camp
                                    management, youth development, and child protection programs. He embodies RICA&#39;s holistic support
                                    framework, which addresses interconnected challenges facing displaced populations.
                                </p>
                                <p>
                                    Working as an independent contractor in Worcester, Massachusetts, Ibrahim is a vital bridge for
                                    immigrant communities, providing essential navigation services including interpretation, benefit
                                    applications, housing assistance, school enrollment support, and transportation coordination. His
                                    culturally responsive approach recognizes that successful integration requires addressing multiple needs
                                    simultaneously while honoring each individual&#39;s cultural identity and inherent strengths.
                                </p>
                                <p>
                                    Ibrahim&#39;s unique positioning—combining lived refugee experience with professional social work
                                    expertise—allows him to implement RICA&#39;s empowerment methodology, building upon the resilience
                                    and knowledge newcomers bring to their integration journeys. His trauma-informed approach creates
                                    healing-centered environments where individuals and families feel genuinely seen, heard, and
                                    supported throughout their transition.
                                </p>
                                <p>
                                    A committed advocate for educational pathways and lifelong learning, Ibrahim holds an associate&#39;s
                                    degree from Mount Kenya University, a Diploma in Education from Imara Teachers Training College, and
                                    a bachelor&#39;s degree from Worcester State University. He is currently pursuing his master&#39;s degree in
                                    social work at Anna Maria College, expanding his capacity to address systemic barriers and advance
                                    policy solutions that support community empowerment.
                                </p>
                                <p>
                                    Ibrahim&#39;s unwavering commitment to diversity, equity, and inclusion reflects RICA&#39;s vision of creating
                                    communities where refugees and immigrants can heal, grow, and thrive. His dedication to serving
                                    society&#39;s most vulnerable members demonstrates the transformative power of culturally responsive
                                    advocacy and the importance of centering community voices in the work of social justice.
                                </p>
                            </div>
                            <a href="#" className='btn member-linkedin-profile' target='_blank'>Ibrahim's Profile</a>
                        </div>
                    </div>
                </div>

                <div className='col-md card team-card'>
                    <img src="" alt="Member Photo" className='card-img-top'/>
                    <div className='card-body'>
                        <h3 className='team-member-name card-title'>Khalid Herez</h3>
                        <div className='member-bio'>
                            <div className='member-details'>
                                <p>
                                    Khalid Herez is a dedicated community leader and social services coordinator whose 17-year career
                                    exemplifies RICA&#39;s commitment to holistic support and empowerment for refugee and immigrant
                                    communities. With extensive experience spanning three countries and multiple humanitarian
                                    organizations, Khalid brings deep cultural understanding and practical expertise to serving vulnerable
                                    populations navigating complex resettlement challenges.
                                </p>
                                <p>
                                    Khalid&#39;s professional foundation was built through comprehensive work with prominent international
                                    organizations, including the International Rescue Committee, Save the Children, and the International
                                    Catholic Migration Commission in Jordan, where he provided direct family outreach services to refugee
                                    populations. His hands-on approach included conducting home visits to assess family needs,
                                    coordinating healthcare access, facilitating school enrollment for children, and providing essential
                                    supplies, embodying RICA&#39;s holistic support framework that addresses interconnected challenges.
                                </p>
                                <p>
                                    From 2017 to 2022, Khalid served as Social Services Coordinator and Property Manager at Worcester
                                    Islamic Center, where he implemented culturally responsive programs that supported refugee
                                    integration into the Worcester community. His comprehensive services included transportation
                                    coordination, assistance with Social Security and welfare applications, banking support, and community
                                    engagement programming, demonstrating his commitment to addressing practical and social
                                    integration needs.
                                </p>
                                <p>
                                    Khalid&#39;s educational background uniquely positions him to serve diverse populations with cultural
                                    sensitivity and religious understanding. He holds a Bachelor of Education from the University of Baghdad
                                    and a master&#39;s degree in Uloom Al Quran (Islamic Studies) from the World Islamic Sciences &amp; Education
                                    University in Jordan. His specialized religious certifications, including Ijaza Qiraat credentials, enable him
                                    to provide spiritual guidance alongside practical support services.
                                </p>
                                <p>
                                    Khalid has demonstrated expertise in community outreach, family support coordination, and cross-
                                    cultural communication throughout his career. His experience as both an educator in Iraq and a business
                                    owner has developed his skills in program development, resource management, and community
                                    relationship building. These capabilities allow him to effectively bridge newcomer families and the
                                    complex systems they must navigate.
                                </p>
                                <p>
                                    Currently volunteering with various refugee assistance organizations in Worcester, Khalid continues to
                                    empower immigrant communities through education, advocacy, and direct service provision. His
                                    multilingual abilities and deep understanding of Middle Eastern cultures and American systems position
                                    him as a vital resource for families seeking to rebuild their lives with dignity and purpose.
                                </p>
                                <p>
                                    Khalid&#39;s dedication to serving society&#39;s most vulnerable members reflects RICA&#39;s vision of creating
                                    inclusive communities where refugees and immigrants can heal, grow, and contribute to a more
                                    equitable society.
                                </p>
                            </div>
                            <a href="#" className='btn member-linkedin-profile' target='_blank'>Khalid's Profile</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className='row team-row'>
                <div className='col-md card team-card'>
                    <img src={isaack} alt="Member Photo" className='card-img-top'/>
                    <div className='card-body'>
                        <h3 className='team-member-name card-title'>Isaack Nyagweso</h3>
                        <div className='member-bio'>
                            <div className='member-details'>
                                <p>
                                    Isaack Okwaro Nyagweso is Geographical Information Systems Analyst &  Developer, with 15 years of experience in applications of geographic analytics in the health, infrastructure, land and the built environment industries.
                                </p>
                                <p>
                                    Ibrahim has been engaged with immigrant communities in Worcester, MA on voluntary grounds serving them with services such as Interpretation, benefit applications, Housing, school forms, and transportation to appointments. 
                                </p>
                                <p>
                                    He began his career by supporting and advocating for Refugee children and adults from diverse culture who were displaced by conflicts and natural disasters and lived in the refugee camp in Kenya. 
                                    Ibrahim worked with Various Non-governmental organizations operating in the Refugee camp delivering services such as Education, Housing, counselling services, camp management, youth training, and child protection.
                                </p>
                                <p>
                                    Mr. Muse believes that diversity, equity, and inclusion are the basic values for humanity. Willing to discuss and help the most vulnerable members in the society.
                                </p>
                                <p>
                                    Ibrahim has an associate degree from Mount Kenya University in Kenya, Diploma in Education from Imara teachers training college, and bachelor’s degree from Worcester State University. 
                                    He is currently Pursuing his master’s in social work at Anna Maria college.
                                </p>
                            </div>

                            <a href="https://www.linkedin.com/in/isaack-okwaro-656b534a/" className='btn member-linkedin-profile' target='_blank'>Isaack's Profile</a>
                        </div>
                    </div>
                </div>

                <div className='col-md card team-card'>
                    <img src={tshibangu} alt="Member Photo" className='card-img-top'/>
                    <div className='card-body'>
                        <h3 className='team-member-name card-title'>Tshibangu Kalala</h3>
                        <div className='member-bio'>
                            <div className='member-details'>
                                <p>
                                    Nghia Nelson Le is a Mental Health Bilingual Clinician at Community Healthlink in Worcester, Massachusetts, where he has served since 2019. 
                                    His work focuses on connecting Vietnamese communities with America's healthcare system, particularly in mental health services.
                                </p>
                                <p>
                                    Le began his career as an interpreter before transitioning to therapeutic practice. 
                                    He earned his Master's degree in Psychology Counseling from Anna Maria College in Paxton, Massachusetts, and completed his Certificate of Advanced Graduate Studies (CAGS). 
                                    His clinical expertise encompasses treating mental health and substance abuse disorders for both Vietnamese and English-speaking populations.
                                </p>
                                <p>
                                    Committed to community service and cultural inclusion, Le has contributed to several nonprofit organizations throughout Worcester. 
                                    He has served on advisory boards for the Southeast Asian Coalition, Worcester Senior Center, and the National Alliance on Mental Illness, bringing valuable perspective to these organizations' missions.
                                </p>
                                <p>
                                    Currently, Le specializes in serving Vietnamese elderly populations and Amerasian individuals who have recently settled in Worcester as they navigate their transition to life in the United States. 
                                    His work emphasizes helping new immigrants integrate into their communities, educating them about mental health resources, and supporting their journey toward becoming engaged citizens.
                                </p>
                                <p>
                                    Le's bilingual capabilities and cultural competency make him uniquely positioned to bridge gaps between traditional Vietnamese approaches to mental health and contemporary American therapeutic practices, ensuring culturally sensitive care for underserved populations.
                                </p>
                            </div>
                            <a href="https://www.linkedin.com/in/tshibangu-kalala-9442998/" className='btn member-linkedin-profile' target='_blank'>Tshibangu's Profile</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className='row team-row'>
                <div className='col-md card team-card'>
                    <img src="" alt="Member Photo" className='card-img-top'/>
                    <div className='card-body'>
                        <h3 className='team-member-name card-title'>Maxwell Agyemang, Ph.D.</h3>
                        <div className='member-bio'>
                            <div className='member-details'>
                                <p>
                                   Dr. Maxwell Agyemang is an economist and educator whose career exemplifies RICA&#39;s
                                    commitment to empowering immigrant communities. As a Ghanaian immigrant, he brings lived
                                    experience and academic expertise to advancing equity and opportunity for newcomers.
                                </p>
                                <p>
                                    Dr. Agyemang earned his Ph.D. in Economics from Clark University. His research on healthcare
                                    policy and socioeconomic disparities supports evidence-based approaches to addressing the
                                    interconnected challenges facing refugee and immigrant populations. His work illuminates
                                    systemic barriers and informs culturally responsive interventions.
                                </p>
                                <p>
                                    Currently serving as Director of the Teens Department at Faith Fellowship Ministry
                                    International, Dr. Agyemang embodies the empowerment methodology through
                                    comprehensive youth development programs that build upon young immigrants&#39; existing
                                    strengths and resilience. His programs integrate life skills training, academic support, and
                                    career preparation.
                                </p>
                                <p>
                                    With over a decade of teaching experience at institutions including Bronx Community College
                                    and the Fashion Institute of Technology, Dr. Agyemang has mentored hundreds of students
                                    from immigrant backgrounds toward academic and professional success. His strength-based
                                    pedagogy creates inclusive learning environments where students thrive while maintaining
                                    their cultural identities.
                                </p>
                                <p>
                                    Dr. Agyemang&#39;s data analysis and policy evaluation expertise enable him to translate
                                    community experiences into evidence-based recommendations for decision-makers. His
                                    bilingual skills and cultural responsiveness make him a bridge-builder between immigrant
                                    communities and complex institutional systems. He supports creating environments where
                                    refugees and immigrants can heal, grow, and contribute to a more equitable society.
                                </p>
                            </div>
                            <a href="#" className='btn member-linkedin-profile' target='_blank'>Maxwell's Profile</a>
                        </div>
                    </div>
                </div>

                <div className='col-md card team-card'>
                    <img src="" alt="Member Photo" className='card-img-top'/>
                    <div className='card-body'>
                        <h3 className='team-member-name card-title'>Nghia Nelson</h3>
                        <div className='member-bio'>
                            <div className='member-details'>
                                <p>
                                    Nghia Nelson Le is a Mental Health Bilingual Clinician at Community Healthlink in Worcester, Massachusetts, where he has served since 2019. 
                                    His work focuses on connecting Vietnamese communities with America's healthcare system, particularly in mental health services.
                                </p>
                                <p>
                                    Le began his career as an interpreter before transitioning to therapeutic practice. 
                                    He earned his Master's degree in Psychology Counseling from Anna Maria College in Paxton, Massachusetts, and completed his Certificate of Advanced Graduate Studies (CAGS). 
                                    His clinical expertise encompasses treating mental health and substance abuse disorders for both Vietnamese and English-speaking populations.
                                </p>
                                <p>
                                    Committed to community service and cultural inclusion, Le has contributed to several nonprofit organizations throughout Worcester. 
                                    He has served on advisory boards for the Southeast Asian Coalition, Worcester Senior Center, and the National Alliance on Mental Illness, bringing valuable perspective to these organizations' missions.
                                </p>
                                <p>
                                    Currently, Le specializes in serving Vietnamese elderly populations and Amerasian individuals who have recently settled in Worcester as they navigate their transition to life in the United States. 
                                    His work emphasizes helping new immigrants integrate into their communities, educating them about mental health resources, and supporting their journey toward becoming engaged citizens.
                                </p>
                                <p>
                                    Le's bilingual capabilities and cultural competency make him uniquely positioned to bridge gaps between traditional Vietnamese approaches to mental health and contemporary American therapeutic practices, ensuring culturally sensitive care for underserved populations.
                                </p>
                            </div>
                            <a href="#" className='btn member-linkedin-profile' target='_blank'>Nelson's Profile</a>
                        </div>
                    </div>
                </div>
            </div> */}
        </div>
    )
}
export default Team