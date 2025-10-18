import {beforeEach, expect, test} from "vitest";
import type {StudentType} from "../02-objects/02.ts";
import {addSkill, doesStudentLiveIn, makeStudentActive} from "./03.ts";

let student: StudentType

beforeEach( () => {
    student = {
        id: 1,
        name: 'Dimich',
        age: 32,
        isActive: false,
        address: {
            streetTitle: 'Surganova 2',
            city: {
                title: 'Minsk',
                countryTitle: 'Belarus',
            },
        },
        technologies: [
            {
                id: 1,
                title: 'HTML',
            },
            {
                id: 2,
                title: 'CSS',
            },
            {
                id: 1,
                title: 'React',
            },
        ]
    }
})

test('new tech skill should be added to student', () => {
    expect(student.technologies.length).toBe(3)

    addSkill(student, 'JS')

    expect(student.technologies.length).toBe(4)
    expect(student.technologies[3].title).toBe('JS')
    expect(student.technologies[3].id).toBeDefined()
})

test('student should be active', () => {
    expect(student.isActive).toBe(false);

    makeStudentActive(student)

    expect(student.isActive).toBe(true)
})

test('does student live in city?', () => {
    const resalt1 = doesStudentLiveIn(student, 'Moscow')
    const resalt2 = doesStudentLiveIn(student, 'Minsk')

    expect(resalt1).toBe(false)
    expect(resalt2).toBe(true)
})