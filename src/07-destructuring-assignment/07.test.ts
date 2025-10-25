import {beforeEach, expect, test} from "vitest";
import type {ManType} from "./07.tsx";



let props: ManType
beforeEach(() => {
    props = {
        name: "John",
        age: 42,
        lessons: [{title: '1'}, {title: '2'}, {title: '3', name: 'react'}],
        address: {
            street: {
                title: 'Ocean str',
            }
        }
    }
})

test('', () => {

    // const age = props.age;
    // const lessons = props.lessons;
    const {age, lessons} = props;

    // const title = props.address.street.title;
    const {title}= props.address.street;


    expect(age).toBe(42)
    expect(lessons.length).toBe(3)

    expect(title).toBe('Ocean str')
})

test('', () => {
    // const lesson1 = props.lessons[0];
    // const lesson2 = props.lessons[1];
    const [lesson1, lesson2] = props.lessons;

    // const [ls1] = props.lessons;
    // const [ , ls2] = props.lessons;
    // const [ , ,ls3] = props.lessons;
    const [ls1, ...restLessons] = props.lessons;

    expect(lesson1.title).toBe(('1'))
    expect(lesson2.title).toBe(('2'))

    expect(ls1.title).toBe(('1'))
    // expect(ls2.title).toBe(('2'))
    // expect(ls3.title).toBe(('3'))

    expect(restLessons.length).toBe(2)
    expect(restLessons[0].title).toBe('2')

    expect(restLessons[1].name).toBe('react')

    expect(restLessons[1]).toStrictEqual({title: '3', name: 'react'})
    expect(restLessons[1]).toStrictEqual({name: 'react', title: '3'})
})