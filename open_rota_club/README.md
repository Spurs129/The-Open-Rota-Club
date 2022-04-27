# The Open Rota Club

### Overview and Brief

This was an individual project. The brief was to create a full-stack app in 9 days, using React for the front-end and Python and Django for the back-end.

As a keen golfer, I decided to build an app that allowed golfers to compare their golf scores on the most prestigious golf courses in the UK, which make up the British Open rota. The British Open is held once a year and the venue rotates around these 10 golf courses.

The Open Rota club would be both a community for golfers, and a challenge to play all 10 of these golf courses. In addition, players would be able to compare their scores to other golfers, and appear in leaderboards etc.

I would not be able to achieve all of this in 9 days. I therefore developed a phase 1 and phase 2 to this build. Phase 1 would be completed in the allotted time for my General Assembly course. Phase two would be completed as a side project afterwards.


### Deployment Link
TBC


### Technologies Used

#### Back-end
Python, PostgreSQL, Django, JWT (jsonwebtoken)

#### Front-end
JSX (HTML5 in React), SCSS, JavaScript (ES6), Node.js, Bootstrap, Axios, Mapbox

#### Dev Tools
VScode, Yarn, Insomnia, Git, GitHub, Heroku (deployment), Figma (planning)
 
### Planning - Phase 1

#### Back-End

I used a tool called quick database diagrams to draw my back-end structure. The structure would be 3 apps with one-to-one and one-to-many relationships illustrated below. The apps are Venues, Users, and Reviews. 


![alt text](/client/assets/project4-1.png)


#### Front-end

I used figma to map out the front end of my site. The idea was to have a landing page with a nice photo and a link to a map of the UK with the golf course locations represented as flags. The map would be built with Mapbox.


![alt text](/client/assets/project4-2.png)


Clicking on one of the flags would then open up to a landing page for that venue. On this page you would have course information and a button linking to the review page, where the user can review the venue and register your score on this course, if they have played it. 

I also planned to build a register, login and profile page to display the users information.

Phase 2 would involve building a leaderboard system for users who have the lowest scores at each venue, the lowest average scores across all venues and various other statistical tools.


###Building the back-end 

Apps - I built 3 database applications - User, Venue and Reviews, as per the relational diagram in the planning phase. Each venue’s details were stored in the seed files. Images were saved from the website of each venue, and then hosted using Imgur. 


![alt text](/client/assets/project4-3.png)


Models - For each app, I built a model to define the relationships between apps. Below shows the code for my review model. Here, I have 2 foreign keys which link the review model to the user app and the venue app.


![alt text](/client/assets/project4-4.png)


Serializers - I built RESTful routes and serializers for each App, to convert the data into the required format. 


![alt text](/client/assets/project4-5.png)

 
### Building the front-end

Landing Page - I wanted a simple slick landing page with a striking golf image that complemented the colour scheme I had chosen. 


![alt text](/client/assets/project4-6.png)


I used a clear design and simple code in React, with an obvious link to my locations page that would introduce the venues and show them on the map.


![alt text](/client/assets/project4-7.png)


My venues page proved to be much more challenging. I wanted to produce a simple clean map using Mapbox that did not have any features such as roads and parks etc. I just wanted the outline of the UK, with each golf course location highlighted. I partially achieved this goal. The result is below.


![alt text](/client/assets/project4-8.png)


I found Mapbox difficult to use and over complicated for the simple map I needed, this was the simplest solution I could find.
An additional problem was caused by the geographical location of the courses. Many of them are very close together. Therefore display and user experience is hampered. I slightly altered the coordinates of 2 venues, to avoid overlap and make the map more readable. 

I hard coded the coordinates of each venue into my map page. In the future, I would like to instead store these coordinates in a back end database, to make the front-end simpler and cleaner. 


![alt text](/client/assets/project4-9.png)


Another issue I had was that the links to the golf course location were centred, so that the actual location of the golf course was appearing halfway along the golf course name. I wanted the course location to be where the flag emoji was located. In the example below, the exact location of St Andrews is under the ‘n’, not where the emoji is.


![alt text](/client/assets/project4-10.png)


Now St Andrews location is marked by the emoji. 
Each course had its own home page with info on the course retrieved from my back end database. Here is St Andrews. The page also shows previous reviews of this course. Phase 2 would also include average scores and average member ratings. 


![alt text](/client/assets/project4-11.png)


Clicking on the link here will open the review page so the user can post their score and review the course. Phase 2 will include more features such as a full scorecard to record the score for each hole played. 


![alt text](/client/assets/project4-12.png)


My login and register pages had similar CSS and colours. When signing up, players entered their current golf handicap. Handicaps range from 0 to 36. I used 18 as a placeholder.


![alt text](/client/assets/project4-13.png)


### Bugs

At the moment the handicap scale is not working as I hope. The scale is not ending at 36 and 0, which it should. 
 
### Wins and key learnings

Learning a different back-end system for this project made things more difficult, as it was the first time building using Python and Django. I used a similar structure to my classwork, which was maybe a little unambitious, but it allowed me to achieve what I wanted. Successfully building a back-end in a new language is a success.
Working with Mapbox was both a big challenge and a win to produce a workable map with the correct locations and workable links to my venue pages. I was pleased with the final outcome, even though it took up a lot of my time. I am in a better position now to use Mapbox in the future.

I was also very happy with the overall appearance of my website. This was by far my most visually appealing project, helped by high quality photos and a good colour scheme. 
Finally, the front-end build was much quicker and more efficient than with previous projects. This was my 3rd project using React, and I felt much more comfortable using this technology.
 
### Future Improvements

I want to build and implement phase 2 of the project. This will involve a new database to hold scores for each hole on each course, and new user features and leaderboards, as well as deeper statistical analysis and comparison for each user. 
