// PsuedoCode Baby
// create an event listener that will recongnize when the user clicks buttons
$("button").on("click" , function() {
    // define the variable activity
    var activity = $(this).attr("data-activity");
    // store the url for giphy to search for a specific "topic" set the limit to 10...shouldn't need to establish paramters for the ratings
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + activity + 
    "&api_key=Qjm8YG8TDr4sLhk6ALd24DSOtVcxixje&limit=10";
    // perform an AJAX request with the queryURL
    $.ajax({
        url: queryURL,
        method: "GET"
    })
    // need to access the data
    .then(function(response) {
        console.log(queryURL);

        console.log(response);



// store the results from the AJAX request
var results = response.data;
// loop through the results of each item
for (var v=0; v < results.length; v++) {
// create paragraph tag for the rating to be displayed
var p = $("<p>").text("Rating: " + results[v].rating);
// create and store an image tag for the results 
var activityImage = $("<img>");
// set the src attribute fof the image to a property pulled of the result item
activityImage.attr("src", results[v].images.fixed_height.url);
// append/prepend?? the paragraph and image tag to the images Div
$("#images").prepend(p);
$("#images").prepend(activityImage);

}
// save them to a variable called 'topics'
// take in the topics and create buttons; try to use a loop
// when user clicks the button, it should grab 10 static images and  place on the page
// when the user clicks on the image it should become ainmated, if they click again it becomes static again
// under each gif, display the rating
// add a form that takes a value from a user input box and adds it to your "topics" array then make a function call that takes each topc in the array and remakes the buttons on the page

// api key Qjm8YG8TDr4sLhk6ALd24DSOtVcxixje
})
});