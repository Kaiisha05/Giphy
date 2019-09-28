// PsuedoCode Baby
// create an event listener that will recongnize when the user clicks buttons
$("button").on("click" , function() {
    // define the variable vacation
    var vacation = $(this).attr("data-vacation");
    // store the url for giphy to search for a specific "topic" set the limit to 10...shouldn't need to establish paramters for the ratings
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + vacation + 
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

    })
});
// create an array of strings each on a topic that interests me.
// var vacation = [snorkel, mountains, lakehouse, snow, romantic];
// function to display the array on buttons
// function renderButtons () {
    // to avoide repeat buttons
    // $("#search-buttons").empty();
    // loop through the array
    // for (var v=0; v < vacation.length; v++) {
        // use jquery to create the buttons
        // var t = $("<button>");
        // add a class to the button
        // t.addClass("vacations");
        // add a data attribute
        // t.attr("data-theme", vacation[v]);
        // provide the text for the button 
        // t.text(vacation[v]);
        // apend the button to the html
//         $("#pre-set-themes").append(t);
//     }
// }
// save them to a variable called 'topics'
// take in the topics and create buttons; try to use a loop
// when user clicks the button, it should grab 10 static images and  place on the page
// when the user clicks on the image it should become ainmated, if they click again it becomes static again
// under each gif, display the rating
// add a form that takes a value from a user input box and adds it to your "topics" array then make a function call that takes each topc in the array and remakes the buttons on the page

// api key Qjm8YG8TDr4sLhk6ALd24DSOtVcxixje