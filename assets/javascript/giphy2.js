var activities = ["ski", "swim", "bike", "snorkel"];
console.log(activities)

// adding changes below - function display Activity Images
function displayActivityImages() {
    var activity = $(this).attr("data-name");
    // console.log(this);
    var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=Qjm8YG8TDr4sLhk6ALd24DSOtVcxixje&q=" + activity + "&limit=10";
    // console.log(queryURL);
    // console.log(activity);



    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response);

        var results = response.data;

        for (var i = 0; i < results.length; i++) {

            var rating = results[i].rating;

            console.log(rating);
            // var images = results[i].images.fixed_height_small;


            var activityDiv = $("<div>");
            activityDiv.addClass("activity");
            // var rating = response.data.rating;
            // console.log(rating);

            var para = $("<p>").text("Rating: " + rating);

            //         // display the rating
            activityDiv.append(para);

            //         // retrieving the URL for the image
            var imageURL = results[i].images.fixed_height_still.url;

            //         // create an element to hold the image

            var image = $("<img>").attr("src", imageURL);

            //         // append the image
            activityDiv.append(image);

            //         // putting the activity and it's rating above the previous activiy
            $("#images-holder").prepend(activityDiv);

        }

    });
}
    // // function for displaying activity info
    function renderButtons() {

        $("#buttons-holder").empty();
        //     // loop through the array of movies
        for (let v = 0; v < activities.length; v++) {

            //         // dynamically generate the buttons for each activity in the array

            var a = $("<button>");
            //         // adding a class of activity-btn to my button
            a.addClass("activity-btn");
            //         // adding a data-attribute 
            a.attr("data-name", activities[v]);
            //         // providing the initial button text
            a.text(activities[v]);
            //         // adding the button to the buttons div
            $("#buttons-holder").append(a);


        }
    }


    // // this function handles events when an activity button is clicked
    $("#add-activity").on("click", function (event) {
        event.preventDefault();
        //     // this line grabs the input from the textbox
        var activity = $("#user-input").val().trim();

        //     // adding movie from the textbox to our array
        activities.push(activity);
        // $("#buttons-holder").empty();
        //     // calling renderButtons which handles the processing of the actiivty array
        renderButtons();

    });

    // // adding a clicked event listener to all elements with a class of "button"
    $(document).on("click", ".activity-btn", displayActivityImages);

    // // calling the renderButtons function to display the initial buttons
    renderButtons();

