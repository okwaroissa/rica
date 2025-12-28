import { member } from "../types/types"

export const groupedmembers = (members:member[]):member[][] => {
    let gmembers = []
    for (let i = 0; i < members.length; i += 4){
        gmembers.push(members.slice(i, i + 4))
    }
    return gmembers
}