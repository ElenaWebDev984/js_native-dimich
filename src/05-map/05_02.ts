import type { GovernmentBuildingType, HouseType} from "../02-objects/02_02";

export const getStreetsTitlesOfGovermmentsBuildings = (buildings: GovernmentBuildingType[]) => {
    return buildings.map(b => b.address.street.title)
}

export const getStreetsTitlesOfHouses = (houses: HouseType[]) => {
    return houses.map(h => h.address.street.title)
}


export function createMessage(houses: HouseType[]) {
    return houses.map(h => `Hello, gays, from ${h.address.street.title}`)
}