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

A movie card displays all information about a researched movie, as seen in the above screenshot. Included in this component is a button that will make PUT request to the database which updates a logged in users `watched` or `toWatch` list. If the movie already belongs to a list, this button will reflect that. You can also select the "review" button which will display the modal for writing a review. Code for this component can be seen from `MovieCard.js` file.

#### _Review Card_
![reviewCard](screenshots/reviewCard.png "Review Card")

Similar to a movie card, a review card shows some information on a movie, and a users rating and review of the movie. Other users can comment and like the review, and those changes are made through a PUT request to the database which updates the `likes` and `comments` property on the review. You can access a users profile by selecting their name on the review card. You can also add the movie to you "To Watch" list from the review card. Code for this component can be seen from `ReviewCard.js` file.

#### _Navigation and Search Bar_
![navbar](screenshots/navbar.png "Navigation Bar")

From the navigation bar you can access the home feed, your profile, list of your watched and to-watch movies, your reviews and the about page. The navigation bar also has functionality that allows you to search for movies in the OMDB database. When performing a search, the search button will redirect you to a blank page containing a movie card with the closest movie title of your search (successful search shown in image below). A GET request is performed to access to OMDB database. On the far right of the navigation bar is an image containing a users avatar. This also works as a react-bootstrap Dropdown menu, where you have access to your profile, writing a review on any movie, and logging out. This navigation bar appears on each page besides `login` and `register`. 

Because the search bar had a lot of it's own functionality, it was seperated into another component called `SearchBar.js`. The remainder of the code for the navigation bar can be found in `NavBar.js`.

![searching](screenshots/searching.png "Search Bar")

#### _Write Review Modal_
![EmptyReview](screenshots/emptyReview.png "Empty Write Review Modal")
![writeReview](screenshots/writeReview.png "Write Review Modal")

There are various buttons across the website that unhide the "Write Review" modal, namely the one on the "My Reviews" page, and on the Dropdown menu in the navbar. There are two modes for the write review button. You either decide to write a review without disclosing the movie - in this case, you can search for the movie you want within the modal. The other case is if the "Review" button is selected on a movie card - in this case, the `movie` field is auto-filled with the movie on the card. This from performs a POST request to the MongoDB database, only if there is content within the review field. 

The functionality for this code is split across two files: `ReviewForm.js` and `ReviewModal.js`. The form information is within `ReviewForm` which makes both GET and POST requests to both our database, and the OMDB database. The `ReviewModal` file calls the `ReviewForm` component to display this form within a modal rather than within the web page.

#### _Home Feed_
![Feed](screenshots/feed.png "Feed")

The home feed contains review cards of all the reviews by users that you follow. These are orded by date. As a stretch goal, we would have liked to have included functionality that allowed users to sort the list in various ways (e.g. by rating, date reviewed, name etc.) Since it was not a vital feature for our "proof-of-concept" application, we prioritised other features. Code for this component can be seen from `Home.js` and the `Feed.js` file. The `Home` file provides the structure for the page, and the `Feed` component creates a stream of `ReviewCard`'s of users that you follow.

#### _Profile_
![profile](screenshots/profile.png "Profile Page")
![otherProfile](screenshots/otherProfile.png "Other Profile Page")

There are two modes for the profile page. First mode is reviewing your own profile. On this page you can view your profile information, and view a collage of movie posters from a users `watched` list. When you select any of these movie posters, a Modal will appear containing further information about that movie. This functionality comes from the `MoviePoster.js` file. 

The profile page also has an `edit` feature that was going to reveal a Modal form for updating a users avatar and bio. Unfortunately, due to time constraints thie feature was not included. The second mode is reviewing another users profile. The setup of the page is mostly the same, except instead of an `edit` button, users will see either a `follow` or `unfollow` button, depending on whether you currently follow that user. This button makes a PUT request that adds the users name to the list of follower on the profile users entry in the database. All code for this page is in the `Profile.js` file, and various conditionals are used for displaying either your data, or the data of the users profile you are viewing.

#### _My Movies_
![myMovies](screenshots/myMovies.png "My Movies Page")

"My Movies" is a page containing a feed of `movieCard`'s that belong to a users `watched` or `to-watch` lists. At the top of the page is a toggle that allows you to switch between the two views. A state variable `watched` contains true or false, depending on which list you wish to view. The code for this field exists in `CardList.js`.

#### _My Reviews_
![myReviews](screenshots/myReviews.png "My Reviews Page")

"My Reviews" is a page containing a feed of `reviewCard`'s of all the reviews made by the logged in user. The state variable from the `App` component is passed into the `ReviewCardList` component and is filtered to contain just reviews made by the logged in user. All code for this feature exists in the `ReviewCardList.js` file. If time had permitted, it would have been nice to refactor our code from the `ReviewCardList.js` and `Feed.js` file, since they contain mostly the same structure, but just a different filter of lists.

#### _About_
![AboutPage](screenshots/about.png "About Page")

The About page contains a small statement describing our website and a react-bootstrp carousel containing some of our featured/favourite movies with our favourite actors/actress'. The code for this page can be found in `About.js` and `PosterCarousel.js`.

## Future work	
A summary of what your next steps would be if you were to continue the project

## Roles/Contributions	
Each group member contributed to various elements of the project. This differed from what we initially planned in our Project Proposal. As we each picked up tasks, we took on responsibilities for different elements of the project.

### Team Roles
#### _Bradley:_
* Bradley's role was  had prior experience using React.js, and was able to perform a lot of troubleshooting of issues from other group members.

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
