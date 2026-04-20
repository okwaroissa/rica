
import {useRef, useEffect, useState} from 'react'
import Carousel from 'react-bootstrap/Carousel'
import { gallery } from '../utils/gallery'
const Gallery = () => {
    const [index, setIndex] = useState<number>(0)
    const carouselheading = useRef<HTMLHeadingElement>(null)
    const carouseldescription = useRef<HTMLParagraphElement>(null)
    useEffect(() => {
        if (carouselheading.current && carouseldescription.current) {
            carouselheading.current.textContent = gallery[index].heading
            carouseldescription.current.textContent = gallery[index].description
        }
    }, [index])
    return (
        <div className='rica-page'>
            <Carousel fade  variant='dark' indicators={false} className='rica-carousel' onSlide={(e) => setIndex(e)}>
                <Carousel.Item className='carousel-item'>
                    <div className='gallery-image-container'>
                        <img src={gallery[0].imageurl} alt="Community Members" className='gallery-image'/>
                    </div>
                </Carousel.Item>
                <Carousel.Item className='carousel-item'>
                    <div className='gallery-image-container'>
                        <img src={gallery[1].imageurl} alt="RICA Staff" className='gallery-image'/>
                    </div>
                </Carousel.Item>
                <Carousel.Item className='carousel-item'>
                    <div className='gallery-image-container'>
                        <img src={gallery[2].imageurl} alt="RICA Beneficiaries" className='gallery-image'/>
                    </div>
                </Carousel.Item>
                <Carousel.Item className='carousel-item'>
                    <div className='gallery-image-container'>
                        <img src={gallery[3].imageurl} alt="RICA Group Meeting" className='gallery-image'/>
                    </div>
                </Carousel.Item>
            </Carousel>
            <div className='rica-carousel-tracker'>
                <span ref={carouselheading} className='gallery-item-title'></span>
                <p ref={carouseldescription}></p>
            </div>
        </div>
    )
}
export default Gallery