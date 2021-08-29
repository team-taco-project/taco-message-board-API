# Message Board: A Description
The app is a message board that allows the user to make, update and delete posts.  It also lets the user make, update and delete comments.  This is the code for the server side.
# IMPORTANT LINKS
- Other Repo [CLIENT REPO](https://github.com/team-taco-project/taco-message-board-client)
- Deployed Client [DEPLOYED CLIENT](https://team-taco-project.github.io/taco-message-board-client/)
- Deployed API 
# PLANNING STORY
The group met on the first day and planned what app the group would make, and decided on a message board app.  We planned to code the backend first then the frontend, leaving the styling for last.  The group drew up user stories.  They used the user stories to draw up the ERD and wire-frame models.  The group also decided to pair/mob program all of the code.
# ERD
[ERD](https://i.imgur.com/sDVpBZ4.jpg)
# POST ROUTE PATHS AND METHODS
|HTTP METHOD |URL PATH        |RESULT           |ACTION |
|:-----------|:---------------|:----------------|-------|
|GET         |/posts-all      |list of all posts|index or list|
|GET         |/post/:id       |read single post |show |
|POST        |/create-post    |create post      |create |
|PATCH       |/update-post/:id|update post      |update |
|DELETE      |/post/:id       |delete post      |destroy |
# USER ROUTE PATHS AND METHODS
|HTTP METHOD |URL PATH        |RESULT           |ACTION |
|:-----------|:---------------|:----------------|-------|
|GET         | /sign-in       |get one user     |sign-in|
|POST        |/sign-up        |create user      |create |
|PATCH       |/change-password|update password  |update |
|DELETE      |/sign-out       |sign-out         |destroy |
# COMMENT ROUTE PATHS AND METHODS
|HTTP METHOD |URL PATH                |RESULT           |ACTION |
|:-----------|:-----------------------|:----------------|-------|
|POST        |/post/:id               |create comment   |create |
|PATCH       |/post/:postId/:commentId|update comment   |update |
|DELETE      |/post/:postId/:commentId|delete comment   |destroy |
# TECHNOLOGIES USED
- Javascript
- jQuery
- Mongoose
- Express
- MongoDB
# UNSOLVED PROBLEMS
- Working on comment update end-point
