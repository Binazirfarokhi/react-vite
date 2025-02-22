

import {createRoot} from "react-dom/client"


const root = createRoot(document.getElementById("root"))

function MainReturn(){
    return 
        <h1>Headr by me</h1>;
    
}



root.render(
    <div>
        <MainReturn />
    </div>
)