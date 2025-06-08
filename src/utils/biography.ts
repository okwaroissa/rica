import { member } from "../types/types"
// export const Member = (data:member, fullbio:boolean = false):HTMLDivElement => {
//     let biocard =  new HTMLDivElement()
//     biocard.classList.add('col-md', 'card', 'team-card')
//     if (data.photo){
//         let bioimg = new HTMLImageElement()
//         bioimg.classList.add('card-img-top')
//         bioimg.alt = 'Member Photo'
//         bioimg.src = data.photo
//         biocard.appendChild(bioimg)
//     }
//     let name = new HTMLSpanElement()
//     name.classList.add('team-member-name', 'card-title')
//     name.innerHTML = data.name

//     return biocard
// }

export const groupedmembers = (members:member[]):member[][] => {
    let gmembers = []
    for (let i = 0; i < members.length; i += 4){
        gmembers.push(members.slice(i, i + 4))
    }
    return gmembers
}