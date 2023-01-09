# Github Pages
This React project uses Github Pages as an environment, following the [gh-pages guide](https://github.com/gitname/react-gh-pages) where a `.nojekyll` file has been added to remove the need to handle a Jekyll theme.

# Learning React and TypeScript
This React project was created using the `create-react-app` command with `TypeScript` as a template.

The base of these projects was to learn React by following the [Scrimba Tutorial](https://scrimba.com/learn/learnreact). After learning how React works, I proceeded to follow a [Youtube tutorial](https://www.youtube.com/watch?v=FJDVKeh7RJI) in order to learn TypeScript and CSS modules with React.

This repository contains updated versions of all the projects I did under a single React application where each separate project has its own page (instead of each project being its own React application).

For each project, I have rewritten it in Typescript and CSS modules for styling while improving the project from the base tutorial I followed. I have also mainly replaced some states with reducers (useReducer hook) while using custom types and enums to make my code stricter.

## Running the Project
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

In the project directory, you can run the app in the development mode: 

`npm start` 

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

# Home Page
I created a home page that is used to navigate to all of my projects using a "React carousel" library ([react-multi-carousel](https://www.npmjs.com/package/react-multi-carousel)). The home page explains the basis of the project and what it entails.


![Learning React Home](https://user-images.githubusercontent.com/113395605/211108822-c26b4ddc-93c2-4dce-8779-085a31164300.gif)


# React Facts Project (Base Scrimba Tutorial)
The "React Facts" page is a static React page that contains basic facts about React JS.
It serves as practice for making a React page with a basic state (light/dark mode).

Compared to the original, the new "React Facts" page has an updated design and transitions for the light/dark mode toggle.

## <ins>**React Facts**</ins>
<table>
<tr>
    <th>Scrimba React Facts</th>
</tr>
<tr>
    <td>
        <img  src="https://user-images.githubusercontent.com/113395605/205385481-42277cf4-7089-4945-8b91-d0f1d05dd299.png" />
    </td>
</tr>
</table>

<table>
<tr>
    <th>My Original React Facts</th>
    <th>Updated React Facts</th>
</tr>
<tr>
    <td>
        <img src="https://user-images.githubusercontent.com/113395605/205371608-c2fecc0d-aa52-4ed4-9287-2e8ae618dfba.gif" />
    </td>
    <td>
        <img src="https://user-images.githubusercontent.com/113395605/205371736-531e877a-ed43-443b-9da7-e0c577c2df3e.gif" />
    </td>
</tr>
</table>

# Digital Business Card Project (Solo)
My first attempt at the "Digital Business Card" page is a static React page that serves as a blank business card.
The text in the page is hardcoded as a beginner example of a static page that focused on practicing CSS styles on div elements.

The updated "Digital Business Card" page uses a split pane ([react-split library](https://www.npmjs.com/package/react-split)) to create the page with two panes:
* The Input Form (using the useReducer hook)
* The Business Card

The input form allows for users to create a custom card. The form uses text input boxes as well as a custom textarea element that allows for autosizing ([react-textarea-autosize](https://www.npmjs.com/package/react-textarea-autosize)).
It also has a save button and a reset button that uses icons from [flaticon](https://www.flaticon.coms).
* The save button is used to download the final product ([html-to-image library](https://www.npmjs.com/package/html-to-image)).
    * <a href="https://www.flaticon.com/free-icons/business-card-design" title="business card design icons">Business card design icons created by MEDZ - Flaticon</a>
* The reset button is used to reset the form data to the initial, default state.
    *<a href="https://www.flaticon.com/free-icons/restore" title="restore icons">Restore icons created by Pixelmeetup - Flaticon</a>
Furthermore, the form allows for real-time updates to the card or using a submit button.

The business card itself is similar to the original card with an updated CSS style. It uses react icons ([react-icons library](https://react-icons.github.io/react-icons)) instead of images for the Email and LinkedIn.


<table>
<tr>
    <th>Scrimba Business Card Page</th>
    <th>My Original Business Card Page</th>
</tr>
<tr>
<td>
    <img src="https://user-images.githubusercontent.com/113395605/205384959-145e1514-7d43-4f6a-b163-b3476e1699f7.png" />
</td>
    <td>
        <img src="https://user-images.githubusercontent.com/113395605/204921447-145fde53-e331-4404-8c48-abead06d0d26.png" />
    </td>

</tr>
</table>

<table>
<tr>
    <th>Updated Business Card Page</th>
</tr>
<tr>
    <td>
        <img src="https://user-images.githubusercontent.com/113395605/205179298-35bc1615-8a62-45d6-821d-c5eaf907f292.png" />
    </td>
</tr>
</table>

## <ins>**Example Digital Business Card**</ins>
Here is an example of a digital business card for a giant panda where I've added general information about the species onto the card.

<table>
<tr>
    <th>Creating a Card in Real-Time</th>
    <th>Business Card Example (Downloaded)</th>
</tr>
<tr>
    <td>
        <span><b>Automatically Updates Card in Real-Time</b></span>
        <img src="https://user-images.githubusercontent.com/113395605/205374478-c5590def-ebab-4550-a3b7-1249a6cfd971.gif" />
        <br />
        <span><b>Input Data and Use Submit Button</b></span>
        <img src="https://user-images.githubusercontent.com/113395605/205374946-56f09683-6936-4fc2-b8ac-53b99418c06f.gif" />
    </td>
    <td>
        <img src="https://user-images.githubusercontent.com/113395605/205375289-10736c9b-bca1-459a-bbd9-3fc23ff62765.png" />
    </td>
</tr>
</table>


# Jokes and Puns Project (Base Scrimba Tutorial)
## <ins>**My Original Jokes and Puns Project**</ins>
The original "Jokes" project was simply practice to create a custom card component and practice conditional rendering for the "Airbnb Experiences" project.
For my original "Jokes and Puns" page, I further practiced my HTML coding and CSS styling.

## <ins>**Updated Jokes and Puns Project**</ins>
For the updated "Jokes and Puns" project, I created an entire page using React Bootstrap ([react-bootstrap library](https://react-bootstrap.github.io/)). Using the pre-built components (that I further styled) made it simpler to code in a light/dark mode that is easily done through the React Bootstrap component's API.
* <a href="https://www.flaticon.com/free-icons/joke" title="joke icons">Jokes and Pun Navbar Icon</a>

The only custom component in this project is the filter component that filters and sorts the jokes and puns (which I added more of). This is done by sorting or filtering out the original data array of jokes, which can also be cleared.

For the "Jokes and Puns" project, I used [fakerjs](https://fakerjs.dev/guide/) for ID generation to serve as a key for the jokes and puns. I also used the [underscore.js library](https://underscorejs.org/) to help the filter component sort the jokes.

<table>
<tr>
    <th>My Original Jokes and Puns Page</th>
    <th>Updated Jokes and Puns Page</th>
</tr>
<tr>
    <td>
        <img src="https://user-images.githubusercontent.com/113395605/205376332-33fc21ff-6a26-4787-9ecf-967b160039c5.gif" />
    </td>
    <td>
        <img src="https://user-images.githubusercontent.com/113395605/205376840-36b3db36-384c-4cfc-926a-6408c7d0c9f1.gif" />
    </td>
</tr>
</table>

### <ins>Project Filters</ins>
The Filter component is used to either filter out only one type (Joke or Pun) or sort the jokes and puns by upvotes and/or downvotes.
You can sort by only jokes, only puns, or both.

<table>
<tr>
    <th>Type Filters</th>
    <th>Sort Filters - Jokes and Puns</th>
</tr>
<tr>
    <td>
        <img src="https://user-images.githubusercontent.com/113395605/205377254-e49d804c-c10f-43b6-bd4d-a9e3eab6577d.gif" />
    </td>
    <td>
        <img src="https://user-images.githubusercontent.com/113395605/205378409-d33d1103-ae99-4438-b3f0-410aacf3bc94.gif" />
    </td>
</tr>
</table>

<table>
<tr>
    <th>Sort Filters - Jokes Only</th>
    <th>Sort Filters - Puns Only</th>
</tr>
<tr>
    <td>
        <img src="https://user-images.githubusercontent.com/113395605/205378932-a2b0edbd-b086-48b0-a98e-387e0ac9ffae.gif" />
    </td>
    <td>
        <img src="https://user-images.githubusercontent.com/113395605/205378557-3da52f03-b2a0-48ba-b735-285d8a6bbaaf.gif" />
    </td>
</tr>
</table>

# Airbnb Experiences Page Project (Base Scrimba Tutorial)
## <ins>**Original Airbnb Experience Page**</ins>
The original "Airbnb Experience Page" was built with a simple static layout where the lesson was focused on creating a resuable card component using props and the spread syntax. We were given an array of data that consisted of 3 card objects.

I built each card by mapping the array of card data and passing each individual card object's information to the Card component that builds the card dynamically through the use of props. Futhermore, based on the card data, each card can have a badge (SOLD OUT, ONLINE) that is part of conditional rendering.

<table>
<tr>
    <th>Scrimba Airbnb Experiences</th>
</tr>
<tr>
    <td>
        <img src="https://user-images.githubusercontent.com/113395605/205386181-27e6f717-34e9-43ad-a61f-84c273feb941.png" />
    </td>
</tr>
</table>

## <ins>**Updated Airbnb Experience Page**</ins>
The updated "Airbnb Experience Page" has the same top static portion but has a updated and randomized card container. 

While I improved the appearance of the card component, the main improvement is using [fakerjs](https://fakerjs.dev/guide/) to create 20 cards with random data.

<table>
<tr>
    <th>My Original Airbnb Experiences Page</th>
    <th>Updated Airbnb Experiences Page</th>
</tr>
<tr>
    <td>
        <img src="https://user-images.githubusercontent.com/113395605/205379675-bb3db2c7-a199-417c-9e8e-aa47d7bd24e5.gif" />
    </td>
    <td>
        <img src="https://user-images.githubusercontent.com/113395605/205380160-3040e513-97b6-4a31-ae97-9f1682cd66f4.gif" />
    </td>
</tr>
</table>

# Travel Journal Project (Solo Project)
The original "Travel Journal" project was a small project that simply reassessed the basic React lessons, making it a solo project with given requirements:
* CSS styling
* A static navigation bar (a logo and the site name)
* A dynamic card component (array of card objects and the use of props)

The new version of the "Travel Journal" project was also built very quickly without any extra features. It was simply used as further practice for Typescript and some redesign.

<table>
<tr>
    <th>Scrimba Travel Journal</th>
</tr>
<tr>
    <td>
        <img src="https://user-images.githubusercontent.com/113395605/205385794-b33108bb-68be-47c0-a6c8-63e0b93c83ab.png" />
    </td>
</tr>
</table>

<table>
<tr>
    <th>My Original Travel Journal</th>
    <th>Updated Travel Journal</th>
</tr>
<tr>
    <td>
        <img src="https://user-images.githubusercontent.com/113395605/205384013-43861551-bc9e-4663-81fe-0d2cb4904b20.gif" />
</td>
    <td>
        <img src="https://user-images.githubusercontent.com/113395605/205384018-2e83473c-4132-4535-8a3c-f81a00125019.gif" />
    </td>
</tr>
</table>

# Meme Generator Project (Base Scrimba Tutorial)
## <ins>**Original Meme Generator**</ins>
The original "Meme Generator" project was the first Scrimba tutorial to introduce the usage of forms, making it an interactive web app with React. All of the previous Scrimba tutorial projects were static websites that did not allow for user input.

This project introduced state, event listeners, forms, and hooks (useState, useEffect).

For this project, a working meme generator was created by fetching an image from an [API](https://api.imgflip.com/get_memes) and using two textboxes to added text to the top and bottom portion of the picture.

<table>
<tr>
    <th>Scrimba Meme Generator</th>
</tr>
<tr>
    <td>
        <img src="https://user-images.githubusercontent.com/113395605/205386366-74a1b5ea-e362-4b25-b611-b98b8b56a05f.png" />
    </td>
</tr>
</table>

<table>
<tr>
    <th>My Original Meme Generator</th>
</tr>
<tr>
    <td>
        <img src="https://user-images.githubusercontent.com/113395605/205383444-87c5e052-6873-48ac-94d1-d874c003b644.gif" />
    </td>
</tr>
</table>

## <ins>**Updated Meme Generator**</ins>
When rebuilding the "Meme Generator" project with Typescript, while I did not change the basic layout, I add a few new functionalities to the project: 

* First, I replaced the textbox inputs with the custom, autosizing textarea element ([react-textarea-autosize](https://www.npmjs.com/package/react-textarea-autosize)) that was previously used in the updated "Digital Business Card" project. This was done in order to have text rows for the meme's top and bottom text. 

* Secondly, I have also handled the text overflowing from the image with the use of the [use-fit-text library](https://www.npmjs.com/package/use-fit-text).

* Finally, I added a "Save Meme" button that downloads an image of the created meme ([html-to-image library](https://www.npmjs.com/package/html-to-image)), which was also previously used in the "Digital Business Card". 

<table>
<tr>
    <th>Updated Meme Generator</th>
    <th>Meme Example (Downloaded)</th>
</tr>
<tr>
    <td>
        <img src="https://user-images.githubusercontent.com/113395605/205382139-e457888d-6e35-471a-b95a-d95596b6dfe4.gif" />
    </td>
    <td>
        <img src="https://user-images.githubusercontent.com/113395605/205382246-aa275a3e-17e9-45b4-be81-c79bf584e06b.png" />
    </td>
</tr>
</table>

# Markdown Notes Project (Base Scrimba Tutorial)
## <ins>**My Original Markdown Notes**</ins>
The original "Markdown Notes" project took some time to build even after following the tutorial as some of the libraries were outdated and depreciated. This project is also the original project that introduced a split pane ([react-split library](https://www.npmjs.com/package/react-split)) as well as the usage of [localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage) in order to save your notes.

The original tutorial had a markdown editor that used the following two packages:
* [ReactMde](https://www.npmjs.com/package/react-mde)
* [Showdown](https://www.npmjs.com/package/react-showdown)

I used the following libraries for my new markdown editor:
* [React Markdown Editor](https://www.npmjs.com/package/@uiw/react-md-editor)
* [rehype-sanitize](https://www.npmjs.com/package/rehype-sanitize)

Compared to the tutorial's "Notes App", I have improved the CSS styling as well as added a light/dark mode.
The new light/dark mode toggle uses images for the slider circle in comparison to previous projects.

## <ins>**Updated Markdown Notes**</ins>
For the Typescript version, I have improved the "Markdown Notes" project's CSS styling and have handled overflow:
* The Markdown Editor now handles overflow
* The title of the note (default: title) is now separate from the text (it used to be the first line of text of the editor) and can be edited by using the edit icon or double-clicking the note title.
* There are react-icons (edit and delete) on the side of the sidebar notes instead of having a CSS-created trash icon that appears on hover.

<table>
<tr>
    <th>Scrimba Markdown Notes</th>
</tr>
<tr>
    <td>
        <img src="https://user-images.githubusercontent.com/113395605/205386851-f97fedf4-e813-4d3a-b36e-96e8958a6da1.png" />
    </td>
</tr>
</table>

<table>
<tr>
    <th>My Original Markdown Notes</th>
    <th>Updated Markdown Notes</th>
</tr>
<tr>
    <td>
        <img src="https://user-images.githubusercontent.com/113395605/205386718-ffdfe10d-751c-4427-984d-334e4373fc1d.gif" />
    </td>
    <td>
        <img src="https://user-images.githubusercontent.com/113395605/205387449-995cd67f-3513-435f-95ec-1a4f45e4b499.gif" />
    </td>
</tr>
</table>

The "Markdown Notes" project used the following icons:
* <a href="https://www.flaticon.com/free-icons/paper" title="paper icons">Paper icons created by Freepik - Flaticon</a>
* <a href="https://www.flaticon.com/free-icons/sun" title="sun icons">Sun icons created by Freepik - Flaticon</a>
* <a href="https://www.flaticon.com/free-icons/moon" title="moon icons">Moon icons created by Freepik - Flaticon</a>


# Tenzies Project (Base Scrimba Tutorial)
The "Tenzies" project focused on creating the dice game where you roll 10 dice until you get all of the faces to be the same value. In this game, you can hold a die, meaning you decide not to reroll that particular die. You win the game when all dice have the same face and is held. 

This project uses the [react-confetti library](https://www.npmjs.com/package/react-confetti) to shower confetti over the page when you win the game.

<table>
<tr>
    <th>Scrimba Tenzies</th>
</tr>
<tr>
    <td>
        <img src="https://user-images.githubusercontent.com/113395605/205387816-8e7fdf68-fa0c-4bd3-a693-b6877187949c.png" />
    </td>
</tr>
</table>

## <ins>**My Tenzies Project**</ins>
For my original "Tenzies" project, I followed the tutorial but changed up the design and some parts on how to implement the functionality in order to use the faces of a die instead of numbers.
For my updated "Tenzies" project, I updated the code functionality remained the same and I mostly updated the design.

<table>
<tr>
    <th>My Original Tenzies Project</th>
    <th>Updated Tenzies Project</th>
</tr>
<tr>
    <td>
        <img src="https://user-images.githubusercontent.com/113395605/205389944-95d004d6-67b0-4759-998f-9bb7b2ffde54.gif" />
</td>
    <td>
        <img src="https://user-images.githubusercontent.com/113395605/205389897-b3fe842e-835a-4dc7-8a1b-c9eacddbb774.gif" />
    </td>
</tr>
</table>


# Quizzical Trivia Project (Solo Project)
The "Quizzical Trivia" project was a solo project and was the first project to introduce [react-router-dom](https://www.npmjs.com/package/react-router-dom) in order to create two pages:
* A Home Page with a form to select the type of questions
* A Quiz Page with the loaded questions

The questions were retrieved from the [Open Trivia Database](https://opentdb.com/).

<table>
<tr>
    <th>Scrimba Quizzical</th>
</tr>
<tr>
    <td>
        <img src="https://user-images.githubusercontent.com/113395605/205388740-320f1f22-bf0c-47a5-b162-c741e48d7fa9.png" />
    </td>
</tr>
</table>

## <ins>**My Original Quizzical Trivia**</ins>
### <ins>Home Page</ins>
Building the home page consisted of creating a container to store the form component (reused in the quiz page) and styling the page. 

The states of this project were stored in a parent file of both the Home page and the Quiz page in which the Home page would pass the form data to build the API URL to fetch data from the database that is decoded from its html form using the [html-entities library](https://www.npmjs.com/package/html-entities).

For the home page, I also built a [CSS Loader](https://www.w3schools.com/howto/howto_css_loader.asp) in order to wait for the code to fetch the data.

### <ins>Quiz Page</ins>
The quiz page is where the bulk of my time was spent.

The main content of the quiz page are the questions, which were constructed from the fetched data. The question component's top portion is shared by both true/false and multiple choice questions, where I focused on styling the information about a question.

The complicated part of the component was creating the choices due to the different way it was structured between true/false and multiple choice question types. I created the choices using radio buttons [custom style](https://markheath.net/post/customize-radio-button-css).
* <b>True/False:</b> For true/false questions, I structured the choices so that "True" would always be the first choice and "False" would always be the second choice no matter which answer was correct.
* <b>Multiple Choice:</b> For multiple choice questions, I randomized the choices by placing all the choices in an array and shuffling the array ([shuffle array code](https://openjavascript.info/2022/03/14/how-to-shuffle-an-array-in-javascript/)).

The final implementation of the quiz page was to add a "Submit" button.

<table>
<tr>
    <th>My Original Quizzical Trivia - Home Page</th>
    <th>My Original Quizzical Trivia - Quiz Page</th>
</tr>
<tr>
    <td>
        <img src="https://user-images.githubusercontent.com/113395605/205183364-3df7ede2-bfc5-4a16-85fa-904c09103902.png" />
    </td>
    <td>
        <img src="https://user-images.githubusercontent.com/113395605/205183387-13b9376c-8c1b-42ad-ae46-352231c7b136.png" />
    </td>
</tr>
</table>


#### <ins>**Submitting Answers**</ins>
For the quiz, when you submit with unanswered questions, an alert message will pop up and all questions with no answers are highlighted red.

If you submit answers for all the questions, the quiz will rate your score and mark each question.
A form will appear below to decide which types of questions you would like for the new quiz along with a "New Quiz" button.

<table>
<tr>
    <th>Quiz Page - Incomplete Answers</th>
    <th>Quiz Page - Submitting Answers</th>
</tr>
<tr>
    <td>
        <img src="https://user-images.githubusercontent.com/113395605/205183471-33461710-8032-48d8-82c3-779132614694.png" />
    </td>
    <td>
        <img src="https://user-images.githubusercontent.com/113395605/205183491-70e855de-33e1-4ef3-9516-4a5b96dc7e8c.png" />
    </td>
</tr>
</table>



<table>
<tr>
    <th>Quiz Page - Complete Answers</th>
    <th>Quiz Page - Submitted Answers</th>
</tr>
<tr>
    <td>
        <img src="https://user-images.githubusercontent.com/113395605/205183117-87311392-ce47-454b-ac48-157a8cff59d0.png" />
    </td>
    <td>
        <img src="https://user-images.githubusercontent.com/113395605/205183174-2119aa42-599b-4eb2-8dad-f4f53f33b4e4.png" />
    </td>
</tr>
</table>


## <ins>**Updated Quizzical Trivia**</ins>
The new "Quizzical Trivia" project shares the same code functionality (written in Typescript and using the useReducer hook) as the original project with a sleeker interface.

<table>
<tr>
    <th>Updated Quizzical - Home and Quiz Page</th>
    <th>Updated Quizzical - Unanswered Quiz Page</th>
</tr>
<tr>
    <td>
        <img src="https://user-images.githubusercontent.com/113395605/205392910-f86c798d-82c8-40f9-bba8-8bc43daa33a3.gif" />
    </td>
    <td>
        <img src="https://user-images.githubusercontent.com/113395605/205393045-26e3a53e-bb59-41dc-8ef4-eb55067c2e9e.gif" />
    </td>
</tr>
</table>

Flat Icon Images:
* <a href="https://www.flaticon.com/free-icons/wrong" title="wrong icons">Incorrect</a>
* <a href="https://www.flaticon.com/free-icons/tick" title="tick icons">Correct</a>






# Taskify Project (Youtube Tutorial)
The Taskify Project is unrelated to the Scrimba tutorial as it was a [Youtube Tutorial](https://www.youtube.com/watch?v=FJDVKeh7RJI) that served as an introduction to TypeScript and CSS modules that I followed along before reworking all of my Scrimba projects into Typescript and CSS modules under one React App.

## <ins>**Updated Taskify Project**</ins>
While I followed the base tutorial, I came back to the project to customize the UI design as well as utilizes the useReducer hook instead of the useState hook. 

I also rewrote some code functionality in order to make it easier for me to read, such as dividing the original "todoList" from an array of "Todo" items to be an object that contained two "Todo" arrays (active: Todo[], complete: Todo[]).

I added some more functionality to the base tutorial:
* You can double-click on a task text in order to edit it.
* When you click away from a task that is being edited, it will automatically submit the editted changes.
* You can reorder tasks by dragging and dropping it at the preferred location.
* The task text will wrap around to the next row.
* Added an alert that appears when you attempt to edit a finished task item.
* When creating a task using the input field, disable the draggable nature of the task items and the hover styling.

### <ins>Taskify - Basic Features</ins>
Taskify is a simple todo list of custom tasks that can be incomplete (active) or complete. Each task item can be edited, deleted, and marked active or complete.

<table>
<tr>
    <th>Creating Tasks</th>
    <th>Marking Tasks - Done / Not Done</th>

</tr>
<tr>
    <td>
        <img src="https://user-images.githubusercontent.com/113395605/205367579-8b49a6d7-0b4b-4bc6-b7b9-78a82ede0929.gif" />
    </td>
    <td>
        <img src="https://user-images.githubusercontent.com/113395605/205368178-41ba9bff-7fff-4e1b-8263-12c331945890.gif" />
    </td>
</tr>
</table>

<table>
<tr>
    <th>Editing a Task</th>
    <th>Deleting a Task</th>
</tr>
<tr>
    <td>
        <img src="https://user-images.githubusercontent.com/113395605/205367733-fc2778d9-3dd9-4b3f-b011-9cd2f3271087.gif" />
    </td>
    <td>
        <img src="https://user-images.githubusercontent.com/113395605/205368047-6eca6fe0-c7d4-47ac-92b7-1d560a6f1cd5.gif" />
    </td>
</tr>
</table>

### <ins>Dragging Tasks</ins>
The main third-party library used in this project is the [react-beautiful-dnd library](https://www.npmjs.com/package/@types/react-beautiful-dnd), which is used to make the task items draggable and droppable.

<table>
<tr>
    <th>Drag Task in Same List</th>
    <th>Drag Task to Different List</th>
</tr>
<tr>
    <td>
        <img src="https://user-images.githubusercontent.com/113395605/205369252-9ee26fd3-e992-401f-b3b7-74cfcc98f24f.gif" />
    </td>
    <td>
        <img src="https://user-images.githubusercontent.com/113395605/205369731-fd631c23-efb9-4012-a10b-27cc0f2638f2.gif" />
    </td>
</tr>
</table>



Favicon:
* <a href="https://www.flaticon.com/free-icons/to-do" title="to do icons">To do icons created by Freepik - Flaticon</a>




