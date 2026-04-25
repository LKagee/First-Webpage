const bulletPoints = document.querySelectorAll("li");
const button = document.querySelector("button");

    function doSomething(e) {
                if(e.target.className == "white") {                     // If 'e' has class "white" associated to it, then clicking 'e' will reset its class to "done". 
                    e.target.className = "done";                        // If it has "white" class, then give it class "done"
                } else {
                    e.target.className = "white";                       // If 'e' has a class, reset it back to "white"
                }
            }

    function changeHeaderColor() {

        const headers = document.querySelectorAll("h1");
        headers.forEach((item) => {
                if(item.className == "white") {
                    item.className = "change";
                } else {
                    item.className = "white";
                }
});
    }
    
bulletPoints.forEach((item) => {
                item.addEventListener("click", doSomething);
});

button.addEventListener("click", changeHeaderColor);
