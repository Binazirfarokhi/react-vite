# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


what is difference between framework and Library ? 
library : collection of reusable code - reduce to read repatitve codes. 
Framework: predetermend code, and ask you fill the pattern, next . ja work with react 

-----
 component means a bunch of code that you can use again adn again, you can add componenets to your app by adding the name : <mycomponent/>
-------
react is declarative : we can write the code and react will say just tell me what needs to happen, and I will do that. 
root.render(
    <h1>Hello react </h1>
)
======
imperative means in each and all lines you have to say what you are looking for and what you need. 
document.hetegelementbyID
,innertext
.innerContent
appendchile 
All these steps needs to be doen.
we describe everything for browser to understand.
======
console.log(<h1> Hello world!</h1>) will show an object in the console. it means that react will use to fill in the view.
=====
what is composable ? we have small pieces that we can put together to make something larger or greater than the individual pieces themselves.