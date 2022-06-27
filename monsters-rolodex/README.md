# Getting Started with Create React App
The entry point for any react-app is index.js file inside src folder.
root -> index.html
Babel -> It takes the code and condenses the index.html into something that browser(very basic javascript) can understand.
WebPack -> Turns the javascript into smaller chunks so that whenever user demands a certain page, he only gets that chunk of javascript (modularising the code).
npm run eject -> we can modify the babel and webpack for certain usecases.

React is just a combination of components which are made of HTML, CSS and javascript.

HOOKS v/s CLASSES
Hooks -> react-specific
Classes -> mostly used in javascript.

setState takes 2 functions (parameters: state, props):
1. the object that we need to shallow merging in state.
2. callback function says that run me after you render everything.
   This callback function is gonna run after all state changes have been applied.
