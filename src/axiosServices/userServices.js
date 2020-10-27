import axios from 'axios'

//const baseURL = "/api/" **not working
const baseURL = "http://localhost:3001/api/"

const addNewUser = (newUser) => {
    axios.post(baseURL + "users", newUser)
    console.log(newUser)
}

const followUser = (userToFollow, user) => {
    user.follows.push(userToFollow.username)
    axios.put(baseURL + "users/" + user.id + "follows", user)
}

const unfollowUser = (userToFollow, user) => {
    const index = user.follows.indexOf(userToFollow.username)
    user.follows.splice(index, 1)
    axios.put(baseURL + "users/" + user.id + "follows", user)
}

const addWatched = (titleid, user) => {
    user.watched.push(titleid)
    axios.put(baseURL + "users/" + user.id + "watched", user)
}

const addToWatch = (titleid, user) => {
    user.toWatch.push(titleid)
    axios.put(baseURL + "users/" + user.id + "toWatch", user)
}

export default {addNewUser, followUser, unfollowUser, addWatched, addToWatch}