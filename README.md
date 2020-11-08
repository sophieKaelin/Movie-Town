# Group Z Project - Movie Town

<!--Feel free to change the headings around, not sure what they should be set to.-->

## Outline

<!--Copy this from project proposal I reckon-->

An outline of the application you were aiming to build, target users, data sources etc (similar to the proposal). Include link to Github

The purpose of our application is to create an intuitive [IMDb](https://www.imdb.com/) style website with a focus on social features. The application will allow users to keep track of what movies they have watched, want to watch and what movies their friends are watching.

The target user group are avid movie watchers, or those who want to keep track of what they have and haven’t seen. They will be able to mark which movies they have seen, what they would rate it, what their thoughts were, and see what other friends have watched.

We will be using the [OMDb API](http://www.omdbapi.com/) as our main data source for our application. We will also store user data in a [MongoDB](https://www.mongodb.com/) database.

### Target MVP Outline

The application we are aiming to build is a Minimum Viable Product (MVP) that will have enough functionality to show a proof of concept application. We have assigned target features that are planned for the MVP however we have also listed features that will we wish to include once the MVP tasks are completed.

#### Target/MVP Features

-   `User login/registration` : This feature is vital, because it will allow users to interact with the website. There will be no unauthorised view of the website.
-   `Marking shows as "Watched"` : A user should be able to mark shows as “watched” or “want-to-watch”, and then review the lists of shows and their ratings.
-   `View which shows they have watched` : A user should be able to review the list of shows they have watched and their ratings.
-   `Add details to shows` : A user should be able to rate a movie (out of 5 starts), leave a review of what they thought, and record the date they watched it.
-   `Follow friends accounts` : Following another account should allow a user to view all of their friends watchlists and reviews
-   `Liking reviews` : Users can like their friends reviews
-   `Searching` : A user can search for movies to read simple data (plot, year, name etc...)

#### Extra Features

-   `Sort "Watched" list by fields` : It would be nice for users to be able to sort their watchlist by different fields, including their rating, the IMDB average rating, date they watched it etc. This is more complex than a list of shows, and not a vital piece of functionality the application would be dependent on. Rather, it would be a handy feature. Since it is not vital, it is not part of our mandatory list of features.
-   `Creating lists of shows` : A User can create multiple lists of shows (e.g. want to watch, have watched, to watch with kids etc) . This feature will not be included because we are not using a relational database scheme. If we had chosen a different location for our database, this would have been achievable.
-   `Recording what episode you are currently on` : A user can record what episode they are up to in a TV show. This is highly complex and introduces a new purpose to the
-   `Commenting on a friends review` : This is an extension from liking a friends review, a user could also comment on their review. This could be achieved, but would require us to alter the data structure we had currently planned. This feature is one of our stretch goals - if time permits, we will include this.

## What We've Achieved

Addressing milestones A description of what you have been able to implement in this MVP, use your milestones to highlight what you've achieved

## Source Code

### Back End

#### _Database_

We have used a MongoDB database to store all user and review information. The two schemas are as follows:

```javascript
const usersSchema = {
	username: String,
	password: String,
	avatar: String,
	follows: Array,
	watched: Array,
	toWatch: Array,
}
```

**NOTES:**

-   The user password is hashed using the bcrypt library.
-   Avatar is a user profile image stored in Flickr
-   watched and toWatch are lists of movie ID's from OMDB.

```javascript
const reviewSchema = {
	username: String,
	titleid: String,
	timestamp: String,
	stars: Number,
	content: String,
	likes: Array,
	comments: Array,
}
```

**Notes**

-   Username is the user who wrote the review
-   titleid is the id of the movie from OMDB
-   stars is the users rating of the movie from 0-5.

#### _User Services_

#### _Review Services_

#### _OMDB Services_

### Front End

#### _App Component_

The `App.js` component contains various state variables that are passed through other components:

-   `user`: the current user logged into the website. This is an object that contains all user information (i.e. username, avatar, followers, password, watch lists)
-   `users`: a list of all usernames signed up for the web application
-   `reviews`: a list of all reviews made by all users
-   `review`: an object containing information about a review if the review modal is active. This object gets posted to the database
-   `movie`: contains movie information if there is a movie currently searched in the search bar.
-   `show`: a state variable that determines whether a "Write Review" modal is visable or not. If `show` is false, the modal is hidden from view.

The App component contains a router that creates the routes to each of the pages in our application. If the user state variable is empty or null, the user is re-routed to the login page, since only authenticated users can use this application.

#### _Login/Registration_

![Login](screenshots/Login.png "Login Page")

The login page allows users to log into their account before access the page. The code for this exists in `Login.js` Once details are entered and submited, they are cross checked with the database before a user is re-navigated to the home page. A user will be alerted if they have successfully entered the correct or incorrect password and username.

![register](screenshots/register.png "Register Page")

From the login page, a user also has the option to register an account. This will route users to a new page, featuring code from the `Register.js` file, which will submit a POST request to the database. The object will only be posted if the submitted username is available; part of the register file checks if there is a user with the same username, and stops the creation of accounts with duplicate usernames. This is achieved with the following boolean:

`(users.map(u => u.username).includes(value) === true)`

#### _Movie Card_

![movieCard](screenshots/movieCard.png "Movie Card")

A movie card displays all information about a researched movie, as seen in the above screenshot. Included in this component is a button that will make PUT request to the database which updates a logged in users `watched` or `toWatch` list. If the movie already belongs to a list, this button will reflect that. You can also select the "review" button which will display the modal for writing a review.

#### _Review Card_

![reviewCard](screenshots/reviewCard.png "Review Card")

Similar to a movie card, a review card shows some information on a movie, and a users rating and review of the movie. Other users can comment and like the review, and those changes are made through a PUT request to the database which updates the `likes` and `comments` property on the review.

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

-   Brad did this

#### _Cecilia:_

-   Cece did that

#### _George:_

-   George is the coolest

#### _Sophie:_

-   Sophie did things too

### Communication/Interactions

-   Each week in our weekly COMP3120 workshop, our group would work together to decide what each member would work on for the week. This was also a time where we could assist each other with any errors we had come across, or discuss ideas for the project.
-   We used Facebook Messenger to communicate throughout the project and to suggest ideas and improvement.
-   We utilised pull requests in [GitHub](https://github.com/MQCOMP3120-2020/group-project-group-z) so any new functionality is reviewed by another group member before that code is merged into the master branch. This also helped with testing functionality so we didn't introduce too much bugs.
-   A [Google Sheets Spreadsheet](https://docs.google.com/spreadsheets/d/1DTJB87OywgLXMo6mj35LikxVFykVOYqeornXXZ_rcb8/edit?usp=sharing) was used to keep track of what tasks members were responsible for that week. It included a section called "small tasks", so any members who had extra time in the week could pick up smaller tasks to implement into the project. This worked well, because if anyone had any new ideas, they could add it into the smaller tasks section for later. This also helped us keep track of bugs.
