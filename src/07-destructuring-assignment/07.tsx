import * as React from "react";


type StreetType = {
    title: string
}

type AddressType = {
    street: StreetType
}

type LessonsType = {
    title: string
    name?: string
}

export type ManType = {
    name: string
    age: number
    lessons: LessonsType[]
    address: AddressType
}

type ManComponentType = {
    title: string,
    man: ManType
    food: Array<string>
    car: {model: string}
}

function useDimichState(message: string) {
    return[message, function() {}]
}


// function useDimichState2(message: string) {
//     return[message, setMessage: function() {}]
// }


export const ManComponent: React.FC<ManComponentType> = ({title, man, ...props}: ManComponentType) => {
    // const {title, man: {name}} = props

    // const [message, setMessage] = useState<string>('hello')
    // const [message, setMessage] = useDimichState('dimich')
    // const {message, setMessage} = useDimichState2('dimich')
    useDimichState('a')

    return <div>
        <h1>{title}</h1>
        <div>{man.name}</div>
        <div>{props.car.model}</div>
    </div>
}