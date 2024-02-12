# Rick and Morty

## Description

The project was designed to retrieve data from the Rick and Morty API and display it in a web format. The web application showcases characters from the show, and upon selecting a character from the list, it displays the episodes in which that character appears. Additionally, a search bar is provided to allow users to easily select their favourite character.

## Deployment Link

[Page](https://showmewhatyougot.netlify.app)

## Getting Started / Code Installation

npm i
npm i sass
npm bootstrap
npm install react-bootstrap bootstrap

## Timeframe & Working Team

This was a pair team effort by Antonio Climent and Gilberto Carnieli.
2 days were given to build this project. 

## Techonologies Used

SASS 
REACT-ROUTER
REACT
GIT 
GITHUB
INSOMNIA


## Brief

# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) Project #2: Reacathon
​
## Overview
​
The second project is to **build a React application** that consumes a **public API**.
​
### Technical Requirements
​
Your app must:
​
* **Consume a public API** – this could be anything but it must make sense for your project.
* **Have several components**
* **The app can have a router** - with several "pages", this is up to you and if it makes sense for your project.
* **Include wireframes** - that you designed before building the app.
* **Be deployed online** and accessible to the public (hosted on your public github, not GA github!)
​
---
​
## Necessary Deliverables
​
* A **working application**, hosted somewhere on the internet
* A **link to your hosted working app** in the URL section of your Github repo
* A **git repository hosted on Github**, with a link to your hosted project, and frequent commits dating back to the _very beginning_ of the project
* **A `readme.md` file** with:
  * Explanations of the **technologies** used
    * A couple of paragraphs about the **general approach you took**
    * **Installation instructions** for any dependencies
    * Link to your **wireframes** – sketches of major views / interfaces in your application
   * Descriptions of any **unsolved problems** or **major hurdles** your team had to overcome
​
---
​
## Suggested Ways to Get Started
​
* **Don’t hesitate to write throwaway code** to solve short term problems.
* **Read the docs for whatever technologies / frameworks / APIs you use**.
* **Write DRY code**.
* **Be consistent with your code style.**
* **Commit early, commit often.** Don’t be afraid to break something because you can always go back in time to a previous version.
* **Keep user stories small and well-defined**, and remember – user stories focus on what a user needs, not what development tasks need accomplishing.
* **Write code another developer wouldn't have to ask you about**. Do your naming conventions make sense? Would another developer be able to look at your app and understand what everything is?
* **Make it all well-formatted.** Are you indenting, consistently? Can we find the start and end of every div, curly brace, etc?
* **Comment your code.** Will someone understand what is going on in each block or function? Even if it's obvious, explaining the what & why means someone else can pick it up and get it.
* **Write pseudocode before you write actual code.** Thinking through the logic of something helps.
​
---
​
## Sign Off Reqs
​
* A working request in Insomnia from the API you want to use, showing that you can access the dataset you need.
* A basic wireframe of your apps design + components
​
## Useful Resources
​
* **[React](https://reactjs.org/)**
* **[Some free APIs](https://apilist.fun/)**
* **[Some more free APIs](https://github.com/public-apis/public-apis)**
* **[Even more free APIs](https://dev.to/camerenisonfire/10-intriguing-public-rest-apis-for-your-next-project-2gbd)**
* **[The best free API Finder](https://www.google.com)**


## Planning

This was the wireframe that Antonio and I created before initiating our project. We were able to implement it as we had envisioned. Our basic wireframe outlined the various pages and routes we intended to incorporate.

<img width="426" alt="Screenshot 2024-02-09 at 12 16 54" src="https://github.com/gibacarnieli/SEI-P2/assets/113900097/00494ba5-04c5-44b3-9355-c8a5cd9aecf5">

Antonio handled coding and debugging, while I focused on researching potential issues and codes that would be necessary for the successful implementation of our project.

## Build / Code Process

Day 1 – We began the day by creating the wireframe. We searched for key elements from the API that we would need and then proceeded to coding. The initial code we wrote focused on selecting data from all 42 pages, as obtained from the return in Insomnia.

<img width="682" alt="Screenshot 2024-02-12 at 18 56 06" src="https://github.com/gibacarnieli/SEI-P2/assets/113900097/e195d08b-8b6e-4533-828a-c33f690dd61f">


Day 2 – We completed the remaining sections of the code, which included implementing the characters, enabling navigation to new pages upon clicking, and defining the stylistic elements for our web. We also worked on the logic to extract information for each individual character. 
The logic to get that single character 

<img width="766" alt="Screenshot 2024-02-12 at 18 56 43" src="https://github.com/gibacarnieli/SEI-P2/assets/113900097/b3d011ed-377c-41ba-9db2-a28e280bfabc">

Once we had that piece of code running, it was time to code the "/episode/:epid" route. 


In this section of the code, we load information for a single character using the base ID obtained from the API.
import { Link, useLoaderData } from "react-router-dom"export default function SingleChar(){

After completing all of the above, including a component for the Navbar that repeats on every page, we introduced an input on the homepage to enable users to search for any specific character they wish.

<img width="1083" alt="Screenshot 2024-02-12 at 18 57 22" src="https://github.com/gibacarnieli/SEI-P2/assets/113900097/30df93d9-9210-4bad-b85b-d51e8fd5630b">

Finally, we applied some styling. To be honest, the styling code is a bit scattered because we prioritised the logical aspects of the page. We incorporated a nice background picture and chose colours to resemble the aesthetics of the actual cartoon. We researched from the internet the colour palette from this cartoon so we will be able to use it. 

<img width="506" alt="Screenshot 2024-02-12 at 18 57 50" src="https://github.com/gibacarnieli/SEI-P2/assets/113900097/21d1744c-e420-4392-889e-1808d85ba123">


## Challenges

The most significant challenge we encountered was adapting to React. It was our first time using React for a project larger than a couple of documents, and navigating it without causing issues proved to be a learning curve. Debugging, in particular, was challenging.

During these two days of the project, I gained valuable insights from Antonio, who demonstrated a brilliant understanding of React. He patiently explained parts of the code that I initially found challenging.

The data structure from the API, while manageable, presented some difficulties. Retrieving all characters in a single request wasn't feasible since the API lacked an endpoint for it. Instead, we had to make individual requests for each page of characters (42 in total). Handling the promises from numerous requests added another layer of complexity.

## Wins

It was truly amazing to collaborate with Antonio; he proved to be an excellent partner for this project.
His calm and focused approach made problem-solving efficient, and he was always ready to assist in resolving any issues.

Each time our codes ran successfully, it felt like a victory. The project successfully showcased all the characters along with their respective episodes. 

## Bugs

The most persistent bug that posed a challenge was the error caused by our initial struggle with handling promises. Once we figured out how to manage promises effectively, this issue was resolved. 

Additionally, we encountered bugs related to route misconfigurations and instances where we forgot to import essential files. While these were teachable moments, none of them were entirely unexpected, and we were able to address them systematically.

## Future Improvements

What seems somewhat nonsensical at the moment is that the "All-characters" page has become redundant after developing the homepage. Given more time, we would eliminate all individual character pages in favour of an episode list.

However, the limitation lies in the API, which doesn't provide images or synopses for the episodes, offering only the character list, names, and episode numbers.

Despite these constraints, we believe there's still room for significant improvement and functionality in our project.


