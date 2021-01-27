import axios from 'axios'

//const baseURL = "/api/" **not working
const baseURL = "http://localhost:3001/api/"

const addNewUser = (newUser, users, setUsers) => {
    axios.post(baseURL + "users", newUser)
    .then(response => {
        console.log(response)
        setUsers([...users, response.data])
    })
}

const followUser = (userToFollow, user, users, setUser, setUsers) => {
    user.follows.push(userToFollow.username)
    axios.put(baseURL + "users/" + user.id + "follows", user)
    .then((response) => {
        setUser(response.data)
        setUsers(users.map((u) => (u.id !== user.id ? u : response.data)))
    })
}

const unfollowUser = (userToFollow, user, users, setUser, setUsers) => {
    const index = user.follows.indexOf(userToFollow.username)
    user.follows.splice(index, 1)
    axios.put(baseURL + "users/" + user.id + "follows", user)
    .then((response) => {
        setUser(response.data)
        setUsers(users.map((u) => (u.id !== user.id ? u : response.data)))
    })
}

const addWatched = (titleid, user, users, setUser, setUsers) => {
    user.watched.push(titleid)
    axios.put(baseURL + "users/" + user.id + "watched", user)
    .then((response) => {
        setUser(response.data)
        setUsers(users.map((u) => (u.id !== user.id ? u : response.data)))
    })
}

const addToWatch = (titleid, user, users, setUser, setUsers) => {
    user.toWatch.push(titleid)
    axios.put(baseURL + "users/" + user.id + "toWatch", user)
    .then((response) => {
        setUser(response.data)
        setUsers(users.map((u) => (u.id !== user.id ? u : response.data)))
    })
}

export default {addNewUser, followUser, unfollowUser, addWatched, addToWatch}