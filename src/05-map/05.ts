export type ManType = {
    name: string
    age: number
}

const people: ManType[] = [
    {name: 'Andrew Ivanov', age: 33},
    {name: 'Alexander Petrov', age: 24},
    {name: 'Dmitry Sidorov', age: 18},
]


const dimichTransformator = (man: ManType) => ({
        stack: ['css, html', 'js', 'tdd', 'react'],
        firstName: man.name.split(' ')[0],
        lastName: man.name.split(' ')[1],
    })


const devs = [
    {
        stack: ['css, html', 'js', 'tdd', 'react'],
        firstName: 'Andrew',
        lastName: 'Ivanov',
    },
    {
        stack: ['css, html', 'js', 'tdd', 'react'],
        firstName: 'Alexander',
        lastName: 'Petrov',
    },
    {
        stack: ['css, html', 'js', 'tdd', 'react'],
        firstName: 'Dmitry',
        lastName: 'Sidorov',
    },
]



// let d1 = dimichTransformator(people[0])
// let d2 = dimichTransformator(people[1])
// let d3 = dimichTransformator(people[2])
//
// const dev2 = [
//     d1, d2, d3,
// ]

const devs2 = [
    dimichTransformator(people[0]),
    dimichTransformator(people[1]),
    dimichTransformator(people[2]),
]

const devs3 = people.map(dimichTransformator)

const devs4 = people.map(man => ({
    stack: ['css, html', 'js', 'tdd', 'react'],
    firstName: man.name.split(' ')[0],
    lastName: man.name.split(' ')[1],
}))



const messages = people.map(man => `Hello ${man.name.split(' ')[0]}. Welcome to IT-Incubator`)

export const createGreatingMessage = (people: ManType[]) => {
    return people.map(man => `Hello ${man.name.split(' ')[0]}. Welcome to IT-Incubator`)
}