
import './App.css'

function App() {
    const names = ['Dimich', 'Sveta', 'Katya', 'Victor', 'Ignat']
    const users = [
        { id: 1, name: 'Dimich' },
        { id: 2, name: 'Sveta' },
        { id: 3, name: 'Katya' },
        { id: 4, name: 'Victor' },
        { id: 5, name: 'Ignat' },
    ]
    const mappedNames = names.map((name, index) => <div key={index}><li>{index} - {name}</li></div>)

    const mappedUsers = users.map(u => <li key={u.id}>{u.name}</li>)

  return (
     <div className='app'>
        <ul>
            {mappedNames}
            {mappedUsers}
        </ul>
     </div>
  )
}

export default App
