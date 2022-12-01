# Learning React
This project was created to learn React from Scrimba...

Write a section for each project:
-What is the proejct about
-How you finisehd the project, etc.
What you learned from the project

1) React Facts (Project 1 Tutorial)
2) Digital Business Card (Solo Project)
3) Jokes Page (Mini Project)
4) Airbnb Experience Clone (Project 2 Tutorial)
5) Travel Journal (Project 2 Solo)
6) Form Example (Mini Project)
7) Meme Generator (Project 3 Tutorial)
8) Notes Application (Mini Project)
9) Tenzies (Project 4 Tutorial)
10) Quizzical Trivia (Project 4 Solo)


// Extra Youtube Video Tutorial
11) React Router Tutorial



For this entire React Project:
-using typescript instead.
-using CSS modules instead.
-using react router
--types (typescript use custom types), useReducers (enums)


npx create-react-app . --template typescript





USED THIS FOR BACKGROUND PATTERNS
https://www.magicpattern.design/tools/css-backgrounds

USED THIS FOR HOME BACKGROUND
https://doodad.dev/pattern-generator/


# React Facts Project
The "React Facts" page is a static React page that contains basic facts about React JS.
It serves as practice for making a React page with a basic state (light/dark mode).

Compared to the original, the new page has a new design that I believed makes the page look sleeker.


## <ins>**Original React Facts**</ins>
<table>
<tr>
    <th>Light Mode</th>
    <th>Dark Mode</th>
</tr>
<tr>
    <td>
        <img src="https://user-images.githubusercontent.com/113395605/204915573-4487ff79-6ccd-4101-a7ba-eac83a0456bf.PNG" />
    </td>
    <td>
        <img src="https://user-images.githubusercontent.com/113395605/204915765-448ab46d-647c-4761-b74f-d0a5f8a6695d.PNG" />
    </td>
</tr>
</table>

## <ins>**New React Facts**</ins>
<table>
<tr>
    <th>Light Mode</th>
    <th>Dark Mode</th>
</tr>
<tr>
    <td>
        <img src="https://user-images.githubusercontent.com/113395605/204920821-372f3beb-606e-4246-9437-4c29db042d2b.png" />
    </td>
    <td>
        <img src="https://user-images.githubusercontent.com/113395605/204920917-fa1fa889-560b-4fe5-a961-3425c22f15cc.png" />
    </td>
</tr>
</table>



# Digital Business Card Project
The original "Digital Business Card" page is a static React page that serves as a blank business card.
The text in the page is hardcoded as a beginner example of a static page that focused on practicing CSS styles on div elements.

The new "Digital Business Card" page uses a split pane ([react-split library](https://www.npmjs.com/package/react-split)) to create the page with two panes:
* The Input Form (using the useReducer hook)
* The Business Card

The input form allows for users to create a custom card. The form uses text input boxes as well as a custom textarea element that allows for autosizing ([react-textarea-autosize](https://www.npmjs.com/package/react-textarea-autosize)).
It also has a save button and a reset button that uses icons from [flaticon](https://www.flaticon.coms).
* The save button is used to download the final product ([html-to-image library](https://www.npmjs.com/package/html-to-image)).
    * <a href="https://www.flaticon.com/free-icons/business-card-design" title="business card design icons">Business card design icons created by MEDZ - Flaticon</a>
* The reset button is used to reset the form data to the initial, default state.
    *<a href="https://www.flaticon.com/free-icons/restore" title="restore icons">Restore icons created by Pixelmeetup - Flaticon</a>

The business card itself is similar to the original card with an updated CSS style. It uses react icons ([react-icons library](https://react-icons.github.io/react-icons)) instead of images for the Email and LinkedIn.


<table>
<tr>
    <th>Original Card</th>
    <th>New Card with Form</th>
</tr>
<tr>
    <td>
        <img src="https://user-images.githubusercontent.com/113395605/204921447-145fde53-e331-4404-8c48-abead06d0d26.png" />
    </td>
    <td>
        <img src="https://user-images.githubusercontent.com/113395605/204921958-c2698303-b4f4-41c7-ba65-18a5165d442f.png" />
    </td>
</tr>
</table>

## <ins>**Example Digital Business Card**</ins>
Here is an example of a digital business card for a giant panda where I've added general information about the species onto the card.

<table>
<tr>
    <th>Example Page</th>
    <th>Business Card Example (Downloaded)</th>
</tr>
<tr>
    <td>
        <img src="https://user-images.githubusercontent.com/113395605/204925243-e0dee966-32d5-498a-9fdb-e67fb15599a2.png" />
    </td>
    <td>
        <img src="https://user-images.githubusercontent.com/113395605/204925139-189df29e-1b49-4d98-a925-52b4c9f25ba6.png" />
    </td>
</tr>
</table>


# Jokes and Puns Project
## <ins>**Original Jokes and Puns**</ins>
The original "Jokes" project was simply practice to create a custom card component and practice conditional rendering for the "Airbnb Experiences" project.
For my original "Jokes and Puns" page, I further practiced my HTML coding and CSS styling.
![image](https://user-images.githubusercontent.com/113395605/204926810-5af3bba4-1176-4505-aff3-4e376fc9c368.png)


## <ins>**New Jokes and Puns**</ins>
For the updated "Jokes and Puns" project, I created an entire page using React Bootstrap ([react-bootstrap library](https://react-bootstrap.github.io/)). Using the pre-built components (that I further styled) made it simpler to code in a light/dark mode that is easily done through the React Bootstrap component's API.
* <a href="https://www.flaticon.com/free-icons/joke" title="joke icons">Jokes and Pun Navbar Icon</a>

The only custom component in this project is the filter component that filters and sorts the jokes and puns (which I added more of). This is done by sorting or filtering out the original data array of jokes, which can also be cleared.

For the "Jokes and Puns" project, I used [fakerjs](https://fakerjs.dev/guide/) for ID generation to serve as a key for the jokes and puns. I also used the [underscore.js library](https://underscorejs.org/) to help the filter component sort the jokes.

<table>
<tr>
    <th>Light Mode</th>
    <th>Dark Mode</th>
</tr>
<tr>
    <td>
        <img src="https://user-images.githubusercontent.com/113395605/204926893-169d2ea5-3b9f-4d3b-acad-bfc8a58e7468.png" />
    </td>
    <td>
        <img src="https://user-images.githubusercontent.com/113395605/204926592-f5777c4d-adbd-4f16-a55e-327785a35c77.png" />
    </td>
</tr>
</table>


# Airbnb Experience Page Project
## <ins>**Original Airbnb Experience Page**</ins>
The original "Airbnb Experience Page" was built with a simple static layout where the lesson was focused on creating a resuable card component using props and the spread syntax.

**Static Top Portion**
![image](https://user-images.githubusercontent.com/113395605/204929580-0f4118e8-b7cb-457a-9f9a-c3a27f88b864.png)


**Card Container Component**

Given a data array of three card objects, we built each card by mapping the array of card data and passing each individual card object's information to the Card component that builds the card dynamically through the use of props.

Futhermore, based on the card data, each card can have a badge (SOLD OUT, ONLINE) that is part of conditional rendering.

![image](https://user-images.githubusercontent.com/113395605/204929713-302594a0-e5b3-415f-9883-eb63f6c962d7.png)


## <ins>**New Airbnb Experience Page**</ins>
The new "Airbnb Experience Page" has the same top static portion but has a revamped and randomized card container. While I improved the appearance of the card component, the main improvement is using [fakerjs](https://fakerjs.dev/guide/) to create 20 cards with random data.

![image](https://user-images.githubusercontent.com/113395605/204930640-f956baa7-0bb1-4625-b6aa-0a495cea62bc.png)


# Meme Generator Project
## <ins>**Original Meme Generator**</ins>

![image](https://user-images.githubusercontent.com/113395605/204931097-d15b1d10-8b04-45d4-8e77-032f4509b414.png)


## <ins>**New Meme Generator**</ins>
The new "Meme Generator" project appears to have the least improvements in its design, but I have heavily improved the underlying coding in regards to creating the meme.

The biggest change to the code here is that I have replaced the text inputs with the custom, autosizing textarea element ([react-textarea-autosize](https://www.npmjs.com/package/react-textarea-autosize)) that was previously used in the "Digital Business Card". 
This was done in order to have text rows for the meme's top and bottom text. I have also handled the text overflowing from the image with the use of the [use-fit-text library](https://www.npmjs.com/package/use-fit-text).

I also added a "Save Meme" button that downloads an image of the created meme ([html-to-image library](https://www.npmjs.com/package/html-to-image)), which was also previously used in the "Digital Business Card". 

<table>
<tr>
    <th>Example Meme Generator</th>
    <th>Meme Example (Downloaded)</th>
</tr>
<tr>
    <td>
        <img src="https://user-images.githubusercontent.com/113395605/204931954-44dde28c-9301-4534-9af2-fe1ab019af1f.png" />
    </td>
    <td>
        <img src="https://user-images.githubusercontent.com/113395605/204932185-58afd864-bbf6-4a08-b02d-ad0d1e1e0124.png" />
    </td>
</tr>
</table>

### <ins>**Text Overflow**</ins>

<table>
<tr>
    <th>Original Meme Generator Text Overflow</th>
    <th>New Meme Generator</th>
</tr>
<tr>
    <td>
        <img src="https://user-images.githubusercontent.com/113395605/204931878-acdd9a13-3da1-4d75-8a9c-8002cf06ebdf.png" />
    </td>
    <td>
        <img src="https://user-images.githubusercontent.com/113395605/204932361-2e5d30d5-f23c-48b4-b5e3-517a49dce7df.png" />
    </td>
</tr>
</table>

# Travel Journal Project
The original "Travel Journal" project was a small project that simply reassessed the basic React lessons:
* CSS styling
* A static navigation bar (a logo and the site name)
* A dynamic card component (array of card objects and the use of props)

The new version of the "Travel Journal" project was also built very quickly without any extra features. It was simply used as further practice for Typescript and some redesign.

<table>
<tr>
    <th>Original Travel Journal</th>
    <th>New Travel Journal</th>
</tr>
<tr>
    <td>
        <img src="https://user-images.githubusercontent.com/113395605/204933481-6f0d3a40-48bf-4596-a5a3-9b8c6ebba02e.png" />
</td>
    <td>
        <img src="https://user-images.githubusercontent.com/113395605/204933490-919c1120-4bff-4628-b00a-02210d2afcae.png" />
    </td>
</tr>
</table>


# Markdown Notes Project
## <ins>**Original Markdown Notes**</ins>
The original "Markdown Notes" project took some time to build even after following the tutorial as some of the libraries were outdated and depreciated. This project is also the original project that introduced a split pane ([react-split library](https://www.npmjs.com/package/react-split)) as well as the usage of [localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage) in order to save your notes.

The original tutorial had a markdown editor that used the following two packages:
* [ReactMde](https://www.npmjs.com/package/react-mde)
* [Showdown](https://www.npmjs.com/package/react-showdown)

I used the following libraries for my new markdown editor:
* [React Markdown Editor](https://www.npmjs.com/package/@uiw/react-md-editor)
* [rehype-sanitize](https://www.npmjs.com/package/rehype-sanitize)

Compared to the tutorial's "Notes App", I have improved the CSS styling as well as added a light/dark mode.
The new light/dark mode toggle uses images for the slider circle in comparison to previous projects.

<table>
<tr>
    <th>Original Markdown Notes - Light Mode</th>
    <th>Original Markdown Notes - Dark Mode</th>
</tr>
<tr>
    <td>
        <img src="https://user-images.githubusercontent.com/113395605/204936462-e53b0ebe-6797-4b44-8da2-83e0d15fa8b9.png" />
    </td>
    <td>
        <img src="https://user-images.githubusercontent.com/113395605/204936476-97d0ef1b-e2ac-4b3c-b10b-f0e822255f3d.png" />
    </td>
</tr>
</table>

## <ins>**New Markdown Notes**</ins>
For the Typescript version, I have improved the "Markdown Notes" project's CSS styling and have handled overflow:
* The Markdown Editor now handles overflow
* The title of the note (default: title) is now separate from the text (it used to be the first line of text of the editor) and can be edited by using the edit icon or double-clicking the note title.
* There are react-icons (edit and delete) on the side of the sidebar notes instead of having a CSS-created trash icon that appears on hover.

<table>
<tr>
    <th>New Markdown Notes - Light Mode</th>
    <th>New Markdown Notes - Dark Mode</th>
</tr>
<tr>
    <td>
        <img src="https://user-images.githubusercontent.com/113395605/204936094-64604d72-be01-4b4f-a8f8-edec71892748.png" />
    </td>
    <td>
        <img src="https://user-images.githubusercontent.com/113395605/204936082-af8cbdce-c16f-414d-8301-e9be060d2983.png" />
    </td>
</tr>
</table>

The "Markdown Notes" project used the following icons:
* <a href="https://www.flaticon.com/free-icons/paper" title="paper icons">Paper icons created by Freepik - Flaticon</a>
* <a href="https://www.flaticon.com/free-icons/sun" title="sun icons">Sun icons created by Freepik - Flaticon</a>
* <a href="https://www.flaticon.com/free-icons/moon" title="moon icons">Moon icons created by Freepik - Flaticon</a>


# Tenzies Project



Updated CSS
Rearranged some code

React confetti package: npm install react-confetti
https://www.npmjs.com/package/react-confetti

Dice Game
-Roll 10 dice.
You can hold a dice and make it not roll.
You win the game when all dice have the same number and is held.



# Quizzical Trivia Project
This was a solo project that I rebuilt.
I added some things for it...


Two screens:
-Home Screen
-Question Screen

API: https://opentdb.com/

Radio Button CSS:
https://markheath.net/post/customize-radio-button-css

Create Loader:
https://www.w3schools.com/howto/howto_css_loader.asp

Create Background Design CSS:
https://www.magicpattern.design/tools/css-backgrounds

Shuffle Array Code:
https://openjavascript.info/2022/03/14/how-to-shuffle-an-array-in-javascript/

NPM HTML ENTITIES ENCODE/DECODE
https://www.npmjs.com/package/html-entities


IMages:
<a href="https://www.flaticon.com/free-icons/wrong" title="wrong icons">Wrong icons created by Uniconlabs - Flaticon</a>
<a href="https://www.flaticon.com/free-icons/tick" title="tick icons">Tick icons created by Roundicons - Flaticon</a>

# React Router Example (Learning)
https://www.youtube.com/watch?v=Ul3y1LXxzdU





# Taskify (TYPESCRIPT TUTORIAL)

STUFF FOR THIS:
-TYPESCRIPT, CSS MODULES

What I improved:
-CSS Stylgin
- Code: Updated from tutorial :

UPDATED TO USE REDUCER ENUMS AND TYPES
- Updated to make todoLists and divide it up from one list two an object with an active list and a complete list
- 



Tutorial:
https://www.youtube.com/watch?v=FJDVKeh7RJI

learn react and typescript

React Icon Library
https://react-icons.github.io/react-icons/

React Beautiful DND
https://www.npmjs.com/package/react-beautiful-dnd
https://www.npmjs.com/package/@types/react-beautiful-dnd


I added the following features:
You can double=click to edit a todo item
When you do not focus on a todo item edit, it will submit it automatically
Added more css style to drag (active/completed containers)
You can reorder items in a container
WHen you add an item to the other container, it is pushed to where you dropped it
Make long todo item text wrap itself.

added alert when attempting to edit a completed task

When creating a new todo item, you cannot drag the existing items
-Removes styling for dragging during this time so it odesn't highlight over hover

CSS Modules LEANRIOGNS


Favicon:
<a href="https://www.flaticon.com/free-icons/to-do" title="to do icons">To do icons created by Freepik - Flaticon</a>



# Testing
https://reactjs.org/docs/testing.html
JEST https://jestjs.io/
React Testing Library https://testing-library.com/docs/react-testing-library/intro/s

Both installled by default in npx create-react-app


npm test 
-Jest Watch Mode

npm run coverage
-code coverage

SERIES FOR LEARNING
https://www.youtube.com/watch?v=W-dc5fpxUVs&list=PLC3y8-rFHvwirqe1KHFCHJ0RqNuN61SJd&index=14














# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
