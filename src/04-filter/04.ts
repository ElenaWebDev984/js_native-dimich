import type { CityType, GovernmentBuildingType, HouseType} from "../02-objects/02_02"

const ages = [18, 20, 22, 1, 100, 90, 14]

const predicate = (age: number) => {
    return age > 90
}

const oldAges = [100] // > 90


export type CourseType = {
    title: string
    price: number
}

const courses = [
    {title: 'CSS', price: 110},
    {title: 'JS', price: 200},
    {title: 'REACT', price: 150},
]

//  < 160
const cheapPredicate = (course: CourseType) => {
    return course.price < 160
}

const cheapCourses = [
    {title: 'CSS', price: 110},
    {title: 'REACT', price: 150},
]


export function demolishHouseOnTheStreet(city: CityType, street: string) {
    city.houses = city.houses.filter(h => h.address.street.title !== street)
}


export const getBuildingsWithStaffCountGreaterThen = (buildings: GovernmentBuildingType[], staffCount: number) => {
    return buildings.filter(b => b.staffCount > staffCount)
}