

// import {createRoot} from "react-dom/client"


// const root = createRoot(document.getElementById("root"))

// function MainReturn(){
//     return(
//         <h1>Headr by me</h1>

//     );
    
// }



// root.render(
//     <div>
//         <MainReturn />
//     </div>
// )


import { createRoot } from "react-dom/client";

// Define the root element
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

// Corrected Function Component
function MainReturn() {
    return (
        <h1>Header by me</h1> // Fixed typo and removed extra semicolon
    );
}

// Rendering the component correctly
root.render(
    <div>
        <MainReturn />
    </div>
);
