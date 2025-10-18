import type {CityType} from "../02-objects/02_02.ts";
import {beforeEach, test, expect} from "vitest";
import {getStreetsTitlesOfGovermmentsBuildings, getStreetsTitlesOfHouses} from "./05_02.ts";
import {createMessage} from "./05_02.ts";


let city: CityType

beforeEach(() => {
    city = {
        title: 'New York',
        houses: [
            {
                id: 1,
                buildedAt: 2012,
                repaired: false,
                address: {
                    number: 100,
                    street: {
                        title: 'White street'
                    }
                }
            },
            {
                id: 2,
                buildedAt: 2008,
                repaired: false,
                address: {
                    number: 100,
                    street: {
                        title: 'Happy street'
                    }
                }
            },
            {
                id: 3,
                buildedAt: 2020,
                repaired: false,
                address: {
                    number: 100,
                    street: {
                        title: 'Happy street'
                    }
                }
            },
        ],
        governmentBuildings: [
            {
                type: 'HOSPITAL',
                budget: 200000,
                staffCount: 200,
                address: {
                    street: {
                        title: 'Central Str'
                    }
                }
            },
            {
                type: 'FIRE-STATION',
                budget: 500000,
                staffCount: 1000,
                address: {
                    street: {
                        title: 'South Str'
                    }
                }
            },
        ],
        citizensNumber: 100000,
    }
})


// 01. создайте в том же файле еще одну функцию, чтобы тесты прошли
test('list of streets titles of governments buildings', () => {
    const streetsNames = getStreetsTitlesOfGovermmentsBuildings(city.governmentBuildings)

    expect(streetsNames.length).toBe(2)
    expect(streetsNames[0]).toBe('Central Str')
    expect(streetsNames[1]).toBe('South Str')
})

// 01. создайте в том же файле еще одну функцию, чтобы тесты прошли
test('list of streets titles', () => {
    const streets = getStreetsTitlesOfHouses(city.houses)

    expect(streets.length).toBe(3)
    expect(streets[0]).toBe('White street')
    expect(streets[1]).toBe('Happy street')
    expect(streets[2]).toBe('Happy street')
})

test('create greeting messages for people from the streets', () => {
    const messages = createMessage(city.houses)

    expect(messages.length).toBe(3)
    expect(messages[0]).toBe('Hello, gays, from White street')
    expect(messages[1]).toBe('Hello, gays, from Happy street')
    expect(messages[2]).toBe('Hello, gays, from Happy street')
})