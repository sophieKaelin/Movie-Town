import axios from 'axios'

const baseURL = "/api/"

const addNewUser = (newUser) => {
    axios.post(baseURL + "users", newUser).then((response) => {
        console.log(response)
        setUsers([...users, response.data])
    })
}

const followUser = (user, loggedUser) => {
    loggedUser.follows.push(user.username)
    axios.put(baseURL + "users/" + loggedUser.id + "follows", loggedUser)
      .then(response => {
        setUser(response.data)
        setUsers(allUsers.map(u => u.id !== loggedUser.id ? u : response.data))
      })
}

const unfollowUser = (user, loggedUser) => {
    const index = loggedUser.follows.indexOf(user.username)
    loggedUser.follows.splice(index, 1)
    axios.put(baseURL + "users/" + loggedUser.id + "follows", loggedUser)
      .then(response => {
        setUser(response.data)
        setUsers(allUsers.map(u => u.id !== loggedUser.id ? u : response.data))
      })
}

export default {addNewUser, followUser, unfollowUser}