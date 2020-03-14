# Project Overview

## Project Schedule

This schedule will be used to keep track of your progress throughout the week and align with our expectations.  

You are **responsible** for scheduling time with your squad to seek approval for each deliverable by the end of the corresponding day, excluding `Saturday` and `Sunday`.

|  Day | Deliverable | Status
|---|---| ---|
|Day 1| Project Description | Complete
|Day 1| Wireframes / Priority Matrix / Timeline | Complete
|Day 3| Core Application Structure (HTML, CSS, etc.)/ transfere projects to codepen.  | Complete
|Day 4| MVP & Bug Fixes | complete
|Day 5| Final Touches | Complete
|Day 6| Present | Incomplete


## Project Description

My Portfolio is going to consist of Multiple Projects that we hvae completed over the course of the past couple weeks. It will also contain a sub directory to my repository to for additional information on the process of the porfolio and the repo's for the projects i have completed. All of the projects will be compied to codepen for easier acess for links. My networking will be a key factor in my portfolio, i will be providing social networking application links on my page along with an 'About Me' and 'Career Goals' section. 

## Google Sheet

Include link to your google sheet here.  Here is the sample [Joe had used in class]
https://docs.google.com/spreadsheets/d/1ABSg_gTOZEj4URDdodS6Mwx5crZhCtaIdlKaHnuZ57A/edit#gid=0

## Wireframes

Upload images of wireframe to cloudinary and add the link here with a description of the specific wireframe. Do not include the actual image and have it render on the page. 

Mobil Design - https://imgur.com/B2gFvzy
Tablet Design - https://imgur.com/qxSx8eB 
Desktop Design - https://imgur.com/kirjeC5
Desktop design - https://wireframepro.mockflow.com/editor.jsp?editor=off&publicid=M424d2232b53ba2a5a86a47925281e91b1583785947132&projectid=M8eac89c8b660adaea42c966aa1e2fccb1583620039911&perm=Owner#/page/39a2e12f2fd74b30838cc740ed062b0d

[https://www.figma.com/](https://www.figma.com/)
[https://mockflow.com/app/#Wireframe](https://mockflow.com/app/#Wireframe)

## Time/Priority Matrix 

Include a full list of features that have been prioritized based on the `Time and Priority` Matix.  This involves drawing a a square.  In the middle of the square, on the x axis draw a line.  The most left part of the line should start with 0hrs and the end of the line should include 2hrs.  This line will be used to estimate how much time any one feature will take to complete. 

Now draw a vertical line on the y axis.  The top of this line should have `High` and the bottom `Low`.  This line will be used to assign a priority to to each feature you wish to include in the project.  

Now create a separate list starting with A and assign it one of the features.  Continue to assign each feature a letter.  Once complete add each letter to the matrix assigning based on what your feel it's prioirty is an how long it will take to implement. If any one feature takes longer than 2hrs to complete than break it down into smaller tasks and reassign them a new letter. 

Once complete tally up the time and determine how long the project will take to complete. Now break those features into MVP and PostMVP so you can guarantee you will have a fully functioning project to demo. 

### MVP/PostMVP - 5min

The functionality will then be divided into two separate lists: MPV and PostMVP.  Carefully decided what is placed into your MVP as the client will expect this functionality to be implemented upon project completion.  

#### MVP (examples)

- Pull data using google json api
- Complete Responsive Design. 
- Use JQuery to create a more Special designs [hovers and click  event listeners] for portfolio. 


#### PostMVP 

- work with wireFrames a little more to create a more responsive deisgn. 
- try to furter javascript into my portfolio. 

## Functional Components

Based on the initial logic defined in the previous sections try and breakdown the logic further into functional components, and by that we mean functions.  Try and capture what logic would need to be defined if the game was broken down into the following categories.

Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe.

| Component | Priority | Estimated Time | Time Invetsted | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Adding Form | H | 3hrs| 3.5hrs | 3.5hrs |
| Working with API | H | 3hrs| 2.5hrs | 2.5hrs |
| WireFrame design | H | 2hrs | 3hrs | 3hrs |
|copy proj's to CodePen| H | 2hrs | 1hr | 1hr |
|Get Api Info on site | H | 3hrs | 3hrs | 3hrs |
|work with bootstrap | H | 2hrs | 2hr | 2hr |
|Page lay-out Mobile| H | 3.5hrs | 3hrs | 3hrs |
|page lay-out Tablet| H | 2hrs | | 2hrs | 2hrs |
|page lay-out Desktop | H | 2hrs | 1hr | 1hr |
|CSS design | H | 4hrs | 4hrs | 4hrs |
|Jquery event listeners | L | 2hrs | 2hrs | 2hrs |
|Re - orginizing | L | 1hr | tbd | tbd |
|Additional css | L | 2hrs | 2hrs | 2hrs |
| Final Touches | L | 2hrs | 1hr | 1hr |
| Total | H | 35.5hrs | 30.5hrs | 30.5hrs |


## Additional Libraries
 imgur - Used to host all of my local files, then referenced in html/css. 
 googleFonts - for most of my font families 

1. 
## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of an a brief description  

```
function projectData(){
    for(let i =0; i < projects.length; i++){
        let $article = $(`
        <article>
           <a class="project-titles" href="https://codepen.io/Scottie19">${projects[i].title}</a>
        <div class="project-image">
        <a href=${projects[i].url}>
             <img width= "100%" height="100%" src=${projects[i].image} alt="startup matchmaker"></a>
        </div>
        <div class= buttons>
        <button href = "${projects[i].url}"> Like </button>
        <button href = "https://github.com/ScottBeverly"> Share </button>
        </div>
        </article>`)

        $('.contentContainer').append($article)
    }
    I was Never good at template literals. I was in a zoom call with a bunch of students from class that rave over how much easier it is then writing all the code out for a for loop. so when i was creating this i was out of my comfort zone completely. but i was able to complete it witht the help of a few friends and i was proud of the end result(aka working)
```

## Issues and Resolutions
 Use this section to list of all major issues encountered and their resolution.

#### SAMPLE.....
app.js:51 Uncaught ReferenceError: projectData is not defined
    at app.js:51                               
**RESOLUTION**: Reviewed my functions and realized i was calling for data outside of the data function ....


function projectData(){
    for(let i =0; i < projects.length; i++){
        let $article = $(`
        <article>
           <a class="Project-titles" href="https://codepen.io/Scottie19">${projects[i].title}</a>
        <div class="project-image">
        <a href=${projects[i].url}>
             <img width= "100%" height="100%" src=${projects[i].image} alt="startup matchmaker"></a>
        </div>
        <div class= buttons>
        <button href = "${projects[i].url}"> Like </button>
        <button href = "https://github.com/ScottBeverly"> Share </button>
        </div>
        </article>`)

        $('contentContainer').append($article)
    }
  }

 }
  projectData()
 `

 references [

  bootstrap - https://getbootstrap.com/docs/4.1/components/navbar/
  Google/Fonts - https://fonts.google.com/



 ]
