
// var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=Qjm8YG8TDr4sLhk6ALd24DSOtVcxixje&q=" + animal + "&limit=10";
 

// $.ajax({
//         url: queryURL,
//         method: "GET"
//     }).then(function (response) {
//         // var animalDiv = $("<div class='animal'>");
//         var results = response.data;
//         console.log(results);
//     })

//     var animal = cat;


    // add back to giphy.js

//     debugger;
       

//     // create a div to hold the images
//     var imageDiv = $("<div>");
//     // add a class to this div
//     imageDiv.addClass("image");

//     // store the results from the AJAX request
//     var results = response.data;


//     // create paragraph tag for the rating to be displayed
//     var p = $("<p>").text("Rating: " + results.rating);
//     imageDiv.append(p);
//     // create a variable that will retrieve the image from the response
//     var imageURL = results.images.fixed_height.url;
//     console.log(imageURL);
//     // create a image tag to hold the activityImage
//     var activityImage = $("<img>").attr("src", imageURL);
//     // set the src attribute fof the image to a property pulled of the result item
//     // activityImage results.images.fixed_height.url);
//     // add an alt to the image
//     activityImage.attr("alt", "original image");
//     // append/prepend?? the paragraph and image tag to the images Div
//     // $(".image").prepend(p);
//     // $(".image").prepend(activityImage);
//     imageDiv.append(activityImage);
//     $("#images-holder").prepend(imageDiv);
// });

// // } goes with the displayImages function



// // Function to display the activity response data
// function renderButtons() {
// // delete the activities prior to adding new activities.
// $("#buttons").empty();
// // loop through the results of each item
// for (var v = 0; v < activities.length; v++) {
//     // dynamically generate buttons for each item in the array
//     var b = $("<button>");
//     // add a class to the button
//     b.addClass("activity-btn");
//     // add a data attribute
//     b.attr("data-name", activities[v]);
//     // providing the initial button text
//     b.text(activities[v]);
//     // adding the buttons to the button div
//     $("#buttons").append(b);
// }
// }

// $("#user-idea").on("click", function (event) {
// event.preventDefault();
// var activity = $("#user-input").val().trim();
// // adding activities from text box to the array
// activities.push(activity);
// renderButtons();
// });

// $(document).on("click", "activity-btn", displayImages);

// renderButtons();


// can't tell if this works since it's not apending




// comment out everything below to see if this new variation works
// $("button").on("click", function () {










        // }

        // user needs to be able to add their own vaction ideas
        // $("#user-idea").on("click", function (event) {
            // prevent the buttons default behavior when clicked, which is submit the form
            // event.preventDefault();
            // grabs the user input from the text box
//                 var activity = $("#user-input").val().trim();
//                 console.log(activity)
//                 activity.attr("#button");