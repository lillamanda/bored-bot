

function fetchActivity(){
    fetch("https://apis.scrimba.com/bored/api/activity")
    .then(response => response.json())
    .then(data => {
        document.getElementById("suggested-activity").textContent = `${data.activity.toLowerCase()}?`;
    })
}

fetchActivity();

document.addEventListener("click", function(e){
    if(e.target.id === "refresh-icon"){
        fetchActivity();
    }
})