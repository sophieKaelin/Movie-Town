import axios from "axios"

//const baseURL = "/api/" **not working
const baseURL = "http://localhost:3001/api/"

const addNewUser = (newUser, users, setUsers, setUser) => {
	axios.post(baseURL + "users", newUser).then((response) => {
		console.log(response)
		setUsers([...users, response.data])
		setUser(response.data)
	})
}

const followUser = (userToFollow, user, users, setUser, setUsers) => {
	const temp = user
	temp.follows.push(userToFollow) 
    axios.put(baseURL + "users/" + temp.username + "/follows", temp)
    .then((response) => {
        setUser(temp)
        setUsers(users.map((u) => (u._id !== response.data._id ? u : response.data)))
        console.log("followed", user.follows)
    })
}

const unfollowUser = (userToFollow, user, users, setUser, setUsers) => {
    const temp = user
    const index = temp.follows.indexOf(userToFollow)
	temp.follows.splice(index, 1)
    axios.put(baseURL + "users/" + temp.username + "/follows", temp)
    .then((response) => {
        setUser(temp)
        setUsers(users.map((u) => (u._id !== response._id ? u : response.data)))
        console.log("unfollowed", user.follows)
    })
}

const addWatched = (titleid, user, users, setUser, setUsers) => {
	if (!user.watched.includes(titleid)) {
		user.watched.push(titleid)
		axios
			.put(baseURL + "users/" + user._id + "/watched", user)
			.then((response) => {
				setUser(response.data)
				setUsers(
					users.map((u) =>
						u.username !== user.username ? u : response.data
					)
				)
			})
	}
}

const addToWatch = (titleid, user, users, setUser, setUsers) => {
	if (!user.toWatch.includes(titleid)) {
		user.toWatch.push(titleid)
		axios
			.put(baseURL + "users/" + user._id + "/toWatch", user)
			.then((response) => {
				setUser(response.data)
				setUsers(
					users.map((u) => (u.id !== user.id ? u : response.data))
				)
			})
	}
}

export default { addNewUser, followUser, unfollowUser, addWatched, addToWatch }
