import {useState} from 'react'

const List = () => {

    const [list] = useState([ "1", "2", "3"])
    const [users, setUsers] = useState([
        {id:0, name: "Akira", age: 21},
        {id:1, name: "Yohji", age: 22},
        {id:2, name: "Hiro", age: 23}
    ])

    const deleteRandom = () => {
        const randomNumber = Math.floor(Math.random() * users.length)

        setUsers((prevUsers) => {
            return prevUsers.filter((user) => randomNumber !== user.id)
        })
    }

  return (
    <div>
        <ul>
            {list.map((item, i) => (
                <li key = {i}>{item}</li>
            ))}
        </ul>
        <ul>
            {users.map((user) => (
                <li key = {user.id}>{user.name} - {user.age}</li>
            ))}
        </ul>

        <button onClick = {deleteRandom}> Delete Random User</button>
    </div>
  )
}

export default List