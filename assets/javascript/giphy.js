// PsuedoCode Baby
// create an event listener that will recongnize when the user clicks buttons
// save them to a variable called 'topics'
// take in the topics and create buttons; try to use a loop
// when user clicks the button, it should grab 10 static images and  place on the page
// when the user clicks on the image it should become ainmated, if they click again it becomes static again
// under each gif, display the rating
// add a form that takes a value from a user input box and adds it to your "topics" array then make a function call that takes each topc in the array and remakes the buttons on the page



// Initial array of activites
var activities = ["Bike", "Hike", "Snorkel"];



// function to render onto the HTML- will need to uncomment this out
// function displayImages() {
    // define the variable activity
    // store the url for giphy to search for a specific "topic" set the limit to 10...shouldn't need to establish paramters for the ratings

    var activity = $(this).attr("data-name");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + activity + "&api_key=Qjm8YG8TDr4sLhk6ALd24DSOtVcxixje&limit=10";

    // perform an AJAX request with the queryURL
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {

        var results = response.data;
        console.log(results);
    });

    // render Buttons
    function renderButtons () {
        $("#buttons-holder").empty();

        for (let k=0; k < activities.length; k++);
        var a=$("<button>");
        a.addClass("#activity-button");
        a.attr("data-activity", activities[k]);
        a.text(activities[k]);
        $("#buttons-holder").append(a);
    }
