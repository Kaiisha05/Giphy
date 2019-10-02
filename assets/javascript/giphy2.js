var animals = ["dog", "cat", "bird", "rabbit"];
console.log(animals)

// adding changes below - function display animal images
function displayAnimalImages() {
    var animal = $(this).attr("data-name");
    console.log(this);
    var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=Qjm8YG8TDr4sLhk6ALd24DSOtVcxixje&q=" + animal + "&limit=10";
    console.log(queryURL);
    console.log(animal);

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        var animalDiv = $("<div class='animal'>");
        var results = response.data;
        console.log(results);
debugger;
        for (var a = 0; a < results.length; a++) {
            var rating = results[a].rating;
            console.log(rating);

            var p = $("<p>").text("Rating: " + rating);
            console.log(p);

            animalDiv.append(p);
            console.log(animalDiv);

            var imageURL = results[a].images.fixed_height_still.url;
            console.log(imageURL);

            var image = $("<img>").attr("src", imageURL);
            console.log(image);

            animalDiv.append(image);
            console.log(animalDiv);

            $("#images-holder").prepend(animalDiv);
        }
    
    })
}


function renderButtons () {
    $("#buttons-holder").empty();
    // for (var i = 0; i < animals.length; i++); {
    for (let i = 0; i < animals.length; i++) {
        console.log(i);
        console.log(animals[i]);
        var b = $("<button>");

        b.addClass("animal-button");

        b.attr("data-name", animals[i]);

        b.text(animals[i]);
        console.log(b);
        $("#buttons-holder").append(b);
    }
   
}

    $("user-idea").on("click", function (event) {
        event.preventDefault();

        var animal = $("#user-input").val().trim();

        animals.push(animal);

        // nothing happens...
        renderButtons();

    });

$(document).on("click", "animal-button", displayAnimalImages);
renderButtons();