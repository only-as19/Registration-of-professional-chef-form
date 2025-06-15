let formCollector = document.getElementById("form-collector");
formCollector.addEventListener('submit', event => {
    event.preventDefault();
    console.log("event");
    let ourFormdata = new FormData(event.target);
    let userFirstName = ourFormdata.get("firstName");

    })