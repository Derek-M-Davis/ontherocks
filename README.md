# ontherocks

<!-- link to hosted app -->
#[Ontherocks App](http://ontherocks.herokuapp.com/)

#### Original Goal:
> Having an website that is usable on mobile to help those decesion shy people with narrowing their adult beverage choices. After choosing your beverage a seperate tab of news stories, talking point while out with friends, coworkers and strangers to avoid akward silence. If you actually like the people around you and trust them not to drop your phone without a case, a game revolving around the jeopardy api we worked with earlier would be an option for additional screen time without sacrificing the inclusion of people around you.

#### Technologies Used

-MVC Structure  
-MEAN Stack(MongoDB, Express.js, Angular.js, Node.js)     
-ThecocktailDB (https://www.thecocktaildb.com/api.php)  
-Jeopardy Api (http://jservice.io/)  
-CSS - Bootstrap  
-Heroku Hosting application and CLI  

#### Approach Taken
>Primary goal was to make a robust interface that is intuative to make the decision process as quick as possible weither you are ordering out or looking for ideas to make at home. Seeding the data with our ajax calls then designing around partials to make the webpage clean and distraction free. 

#### Challenges
>Working within branches as a team for the first time we quickly found a flaw in our process of not pushing to our master branch when utilizing Heroku. While we reached out to the internet, classmates, our trusty TA and project leader we soon found ourselfes six hours into debugging order, talking, and referring to past projects that worked. We eventually did start from scratch unknowingly our only issue was Heroku not caring about other branches besides the master. It takes from master reguardless of your changes being pushed from our dev branch. Being behind by almost a day and being extremly frustrated with out oversight we did move forward. 

>Working with an api that has different levels of information made displaying anything besides the item id, name, and image very difficult. Making our saved drink list provided us with some wild ideas and thinking our original plan to be sunk. Erik being very tired he eventually tried nesting a second AJAX call inside the original using the id of the first call into the second to have acccess to the ingredients, measurements and instructions. Wizardry on our part allowed us to show even more information in our original show routes for the type of alcohol on the home page. This wild approach to our nested objects in arrays on users provided us with breakthroughs on our delete drink from saved and edit notes on saved drinks. 

#### Wireframes /  User Stories
![Wireframe Image 1]( https://res.cloudinary.com/dcgapn1j0/image/upload/v1574708125/First_heroku_load_h9a6mw.png "First Successfull Heroku Upload")
![Wireframe Image 2]( https://res.cloudinary.com/dcgapn1j0/image/upload/v1574708106/api_populating_data_endrhb.png "Api integrated using static list")
![Wireframe Image 3]( https://res.cloudinary.com/dcgapn1j0/image/upload/v1574708134/navbar_with_relationship_c2zbmb.png "SignIn/Log Out with Nav Bar")
![Wireframe Image 4]( https://res.cloudinary.com/dcgapn1j0/image/upload/v1574709615/img_2811_uhvcsw.jpg "Orginal Home page/Saved Drinks wireframe")
![Wireframe Image 5]( https://res.cloudinary.com/dcgapn1j0/image/upload/v1574708777/saved_drink_array_m9qzp6.png "Saved Drinks array with basic layout")
![Wireframe Image 6]( https://res.cloudinary.com/dcgapn1j0/image/upload/v1574797084/hero_image_and_basic_styling_gme3tq.png "Hero Image and basic styling")


#### Goals/Future Plans
> Integrate the news app for the more relaxed crowd so that it fits and not feel like a copy paste job.


#### Unsolved Problems
> Weird bug when we remove a saved drink. Initially it is removed from the saved drinks page but if you click back to the saved drinks after going to another partial a new item is there at the end of the array. it is only fully removed when we log out. 

