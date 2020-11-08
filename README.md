# Group Z Project - Movie Town

<!--Feel free to change the headings around, not sure what they should be set to.-->

## Outline	
<!--Copy this from project proposal I reckon-->
An outline of the application you were aiming to build, target users, data sources etc (similar to the proposal). Include link to Github

## What We've Achieved
Addressing milestones	A description of what you have been able to implement in this MVP, use your milestones to highlight what you've achieved

## Source Code

### Back End

#### _Database_
We have used a MongoDB database to store all user and review information. The two schemas are as follows:

```
const usersSchema = ({
	username: String,
	password: String,
	avatar: String,
	follows: Array, 
	watched: Array,
	toWatch: Array,
})
```
**NOTES:**
 
* The user password is hashed using the bcrypt library.
* Avatar is a user profile image stored in Flickr
* watched and toWatch are lists of movie ID's from OMDB.

```
const reviewSchema = ({
	username: String,
	titleid: String,
	timestamp: String,
	stars: Number,
	content: String,
	likes: Array,
	comments: Array,
})
```
**Notes**

* Username is the user who wrote the review
* titleid is the id of the movie from OMDB
* stars is the users rating of the movie from 0-5.

#### _User Services_

#### _Review Services_

#### _OMDB Services_


### Front End
#### _App Component_
The `App.js` component contains various state variables that are passed through other components:

* `user`: the current user logged into the website. This is an object that contains all user information (i.e. username, avatar, followers, password, watch lists) 
* `users`: a list of all usernames signed up for the web application
* `reviews`: a list of all reviews made by all users
* `review`: an object containing information about a review if the review modal is active. This object gets posted to the database
* `movie`: contains movie information if there is a movie currently searched in the search bar. 
* `show`: a state variable that determines whether a "Write Review" modal is visable or not. If `show` is false, the modal is hidden from view.

The App component contains a router that creates the routes to each of the pages in our application. If the user state variable is empty or null, the user is re-routed to the login page, since only authenticated users can use this application.

#### _Login/Registration_
![Login](screenshots/Login.png "Login Page")

The login page allows users to log into their account before access the page. The code for this exists in `Login.js` Once details are entered and submited, they are cross checked with the database before a user is re-navigated to the home page. A user will be alerted if they have successfully entered the correct or incorrect password and username. 

![register](screenshots/register.png "Register Page")

From the login page, a user also has the option to register an account. This will route users to a new page, featuring code from the `Register.js` file, which will submit a POST request to the database. The object will only be posted if the submitted username is available; part of the register file checks if there is a user with the same username, and stops the creation of accounts with duplicate usernames. This is achieved with the following boolean:

`(users.map(u => u.username).includes(value) === true)`

#### _Movie Card_
![movieCard](screenshots/movieCard.png "Movie Card")

A movie card displays all information about a researched movie, as seen in the above screenshot. Included in this component is a button that will 

#### _Review Card_
![reviewCard](screenshots/reviewCard.png "Review Card")
#### _Navigation Bar_
![navbar](screenshots/navbar.png "Navigation Bar")
#### _Search Bar_
![searching](screenshots/searching.png "Search Bar")
#### _Write Review Modal_
![EmptyReview](screenshots/emptyReview.png "Empty Write Review Modal")
![writeReview](screenshots/writeReview.png "Write Review Modal")
#### _Home Feed_
![Feed](screenshots/feed.png "Feed")
#### _Profile_
![profile](screenshots/profile.png "Profile Page")
![otherProfile](screenshots/otherProfile.png "Other Profile Page")
#### _My Movies_
![myMovies](screenshots/myMovies.png "My Movies Page")
#### _My Reviews_
![myReviews](screenshots/myReviews.png "My Reviews Page")
#### _About_
![AboutPage](screenshots/about.png "About Page")

## Future work	
A summary of what your next steps would be if you were to continue the project

## Roles/Contributions	
Each group member contributed to various elements of the project. This differed from what we initially planned in our Project Proposal. As we each picked up tasks, we took on responsibilities for different elements of the project.

### Team Roles
#### _Bradley:_
* Brad did this

#### _Cecilia:_
* Cece did that

#### _George:_
* George is the coolest

#### _Sophie:_
* Sophie did things too

### Communication/Interactions
* Each week in our weekly COMP3120 workshop, our group would work together to decide what each member would work on for the week. This was also a time where we could assist each other with any errors we had come across, or discuss ideas for the project.
* We used Facebook Messenger to communicate throughout the project and to suggest ideas and improvement.
* We utilised pull requests in [GitHub](https://github.com/MQCOMP3120-2020/group-project-group-z) so any new functionality is reviewed by another group member before that code is merged into the master branch. This also helped with testing functionality so we didn't introduce too much bugs.
* A [Google Sheets Spreadsheet](https://docs.google.com/spreadsheets/d/1DTJB87OywgLXMo6mj35LikxVFykVOYqeornXXZ_rcb8/edit?usp=sharing) was used to keep track of what tasks members were responsible for that week. It included a section called "small tasks", so any members who had extra time in the week could pick up smaller tasks to implement into the project. This worked well, because if anyone had any new ideas, they could add it into the smaller tasks section for later. This also helped us keep track of bugs.
