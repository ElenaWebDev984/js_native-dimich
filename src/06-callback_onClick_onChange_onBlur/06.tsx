import type {ChangeEvent, MouseEvent} from "react";

const callback = () => {
    // alert('hey')
}

window.setTimeout(callback, 1000)


export const User = () => {
    const deleteUser = (event: MouseEvent<HTMLButtonElement>) => {

        alert(event.currentTarget.name)
    }

    const saveUser = () => {
        alert('user have been saved')
    }

    const onNameChanged = () => {
        console.log('name changed')
    }

    const onAgeChanged = (e: ChangeEvent<HTMLInputElement>) => {
        console.log('age changed ' + e.currentTarget.value)
    }

    const focusLostHandler = () => {
        console.log('focus lost')
    }


    return <div>
        <textarea onChange={onNameChanged}
                  onBlur={focusLostHandler}>
            Dimich
        </textarea>
        <input type='number' onChange={onAgeChanged}/>

        {/*<div tabIndex={2} onClick={deleteUser}>delete</div>*/}
        {/*<div tabIndex={1} onClick={saveUser}>save</div>*/}

        <button name='delete' onClick={deleteUser}>X</button>
        <button name='save' onClick={deleteUser}>X</button>

        <button name='save' onClick={saveUser}>save</button>
    </div>
}