import {expect, test} from "vitest";
import type {CourseType} from "./04.ts";

test('should take people older then 90', () => {
    const ages = [18, 20, 22, 1, 100, 90, 14]

    const predicate = (age: number) =>  age > 90

    const oldAges = ages.filter(predicate)

    expect(oldAges.length).toBe(1)
    expect(oldAges[0]).toBe(100)
})


test('should take courses cheaper then 160', () => {
    const courses = [
        {title: 'CSS', price: 110},
        {title: 'JS', price: 200},
        {title: 'REACT', price: 150},
    ]

    const cheapPredicate = (course: CourseType) => course.price < 160

    const cheapCourses = courses.filter(cheapPredicate)

    expect(cheapCourses.length).toBe(2)
    expect(cheapCourses[0].title).toBe('CSS')
    expect(cheapCourses[1].title).toBe('REACT')
})