import { member } from "../types/types"
import { NavigateFunction} from "react-router-dom"

export const createmembers = (cont:HTMLDivElement, group:member[], title:string, navigate:NavigateFunction) => {
    let heading = document.createElement('h5')
    heading.classList.add('team-section-header')
    heading.innerHTML = title
    cont.appendChild(heading)

    let gbrow = document.createElement('div')
    gbrow.classList.add('row', 'team-row')
    group.forEach((b)=>{
        let bcard = document.createElement('div')
        bcard.classList.add('col-lg', 'card', 'team-card')
        let bimg = document.createElement('img')
        bimg.classList.add('card-img-top', 'img')
        bimg.src = b.photo
        bcard.appendChild(bimg)
        let bhead = document.createElement('span')
        bhead.classList.add('team-member-name', 'card-title')
        bhead.nodeValue = b.name
        bhead.innerHTML = b.name
        bcard.onclick = () => navigate('/member',{state:b})
        bcard.appendChild(bhead)
        let btitle = document.createElement('span')
        btitle.classList.add('team-member-title')
        btitle.innerHTML = b.title
        bcard.appendChild(btitle)
        gbrow.appendChild(bcard)
    })
    cont.appendChild(gbrow)
}