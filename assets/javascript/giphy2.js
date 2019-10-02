var animals = ["dog", "cat", "bird", "rabbit"];
console.log(animals)

// adding changes below - function display animal images
function displayAnimalImages() {
    var animal = $(this).attr("data-name");
    // console.log(this);
    var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=Qjm8YG8TDr4sLhk6ALd24DSOtVcxixje&q=" + animal + "&limit=10";
    // console.log(queryURL);
    // console.log(animal);



    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {

        var animalDiv = $("<div class='animal'>");
        var rating = response.data.rating;
        console.log(results);

        var para = $("<p>").text("Rating: " + rating);

        // display the rating
        animalDiv.append(para);

        // retrieving the URL for the image
        var imageURL = response.data.images.fixed_height_still.url;

        // create an element to hold the image

        var image = $("<img>").attr("src", imageURL);

        // append the image
        animalDiv.append(image);

        // putting the animal and it's rating above the previous animal
        $("#images-holder").prepend(animalDiv);
    });

}


// function for displaying animal info
function renderButtons() {

$("#buttons-holder").empty();
    // loop through the array of movies
    for (let v = 0; v < animals.length; v++) {

        // dynamically generate the uttons for each animal in the array

        var a = $("<button>");
        // adding a class of animal-btn to my button
        a.addClass("animal-btn");
        // adding a data-attribute 
        a.attr("data-name", animals[v]);
        // providing the initial button text
        a.text(animals[v]);
        // adding the button to the buttons div
        $("#buttons-holder").append(a);

        
    }
}


// this function handles events when an animal button is clicked
$("#user-idea").on("click", function (event) {
    event.preventDefault();
    // this line grabs the input from the textbox
    var animal = $("#user-input").val().trim();

    // adding movie from the textbox to our array
    animals.push(animal);
    $("#buttons-holder").empty();
    // calling renderButtons which handles the processing of the animal array
    renderButtons();
   
});

// adding a clicked event listener to all elements with a class of "animal-btn"
$(document).on("click", "animal-btn", displayAnimalImages);

// calling the renderButtons function to display the initial buttons
renderButtons();





// for (var a = 0; a < results.length; a++) {
//     var rating = results[a].rating;
// console.log(rating);


// console.log(p);

// animalDiv.append(p);
// console.log(animalDiv);

// var imageURL = results[a].images.fixed_height_still.url;
// console.log(imageURL);

// var image = $("<img>").attr("src", imageURL);
// console.log(image);

// animalDiv.append(image);
// console.log(animalDiv);

// $("#images-holder").prepend(animalDiv);
//         }

//     })
// }


// function renderButtons() {
//     $("#buttons-holder").empty();
//     // for (var i = 0; i < animals.length; i++); {
//     for (let i = 0; i < animals.length; i++) {
//         console.log(i);
//         console.log(animals[i]);
//         var b = $("<button>");

//         b.addClass("animal-button");

//         b.attr("data-name", animals[i]);

//         b.text(animals[i]);
//         console.log(b);
//         $("#buttons-holder").append(b);
//     }

// }

// $("user-idea").on("click", function (event) {
//     event.preventDefault();

//     var animal = $("#user-input").val().trim();

//     animals.push(animal);

//     // nothing happens...
//     renderButtons();

// });

// $(document).on("click", "animal-button", displayAnimalImages);
// renderButtons();