import React, { useState } from "react"
import "bootstrap/dist/css/bootstrap.css"
import { Button, Form, FormControl } from "react-bootstrap"
import axios from "axios"
import MovieCard from "./MovieCard.js"
import { useHistory } from "react-router-dom"

const SearchBar = ({ history, movie, setMovie }) => {
	const [searched, setSearch] = useState([])
	// const history = useHistory()

	const search = () => {
		console.log("searched: ", searched)
		axios
			.get("http://localhost:3001/api/movie/title", {
				params: { title: searched },
			})
			.then((res) => {
				console.log(res)
				setMovie(res.data)
				//TODO: REDIRECT TO MOVIE CARD WITH RES AS MOVIE DATA
				//History.push ? {"/movie/" + res.data.imdbID}
				history.push("/movie/" + res.data.imdbID)
			})
			.catch((err) => console.log(err))
	}

	const handleSearchChange = (e) => {
		setSearch(e.target.value)
	}

	return (
		<Form inline>
			{/* TODO: MAKE SEARCH BAR BIGGER */}
			<FormControl
				onChange={handleSearchChange}
				type="text"
				placeholder="Search"
				className="mr-sm-2"
			/>
			<Button onClick={search}>Search</Button>
		</Form>
	)
}

export default SearchBar
