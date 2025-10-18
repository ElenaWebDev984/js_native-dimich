import {type StudentType} from "../02-objects/02.ts";
import type { CityType, GovernmentBuildingType, HouseType} from "../02-objects/02_02.ts";

export const sum = (a: number, b: number) => {
    return a + b;
}

export function sum2(a: number, b: number) {
    return a + b;
}

const result = sum(2, 4)
const result2 = sum(sum(1, 2), sum(1, 3))

console.log(result)
console.log(result2)


export const addSkill = (student: StudentType, skill: string) => {
    student.technologies.push({
        id: new Date().getTime(),
        title: skill,
    })
}

export function addSkill2(student: StudentType, skill: string) {
    student.technologies.push({
        id: new Date().getTime(),
        title: skill,
    })
}

export function makeStudentActive(st: StudentType) {
    st.isActive = true
}

export const doesStudentLiveIn = (st: StudentType, cityName: string) => {
    return st.address.city.title === cityName
}


export const addMoneyToBudget = (building: GovernmentBuildingType, budget: number) => {
    building.budget += budget
}


export const repairHouse = (house: HouseType) => {
    house.repaired = true
}


export const toFireStaff = (building: GovernmentBuildingType, staffCountToFire: number) => {
    building.staffCount -= staffCountToFire
}

export const toHireStaff = (building: GovernmentBuildingType, staffCountToHire: number) => {
    building.staffCount += staffCountToHire
}

export function createMessage(city: CityType) {
    // return 'Hello ' + city.title + ' citizens. I want you be happy. All ' + city.citizensNumber + ' people'
    return `Hello ${city.title} citizens. I want you be happy. All ${city.citizensNumber} people`
}