


//function. Turn text in field to a variable. change element to be the variable.
function getMovie() {
    
    //get fields data
    var movie1 = document.getElementById("myMovie1").value;
    var movie2 = document.getElementById("myMovie2").value;
    var movie3 = document.getElementById("myMovie3").value;
    
    //add to list 
    listOfMovies = [movie1,movie2,movie3]

    //make random number between 0 and 3. 0 for the index of the movies
    var randomNumber = Math.floor(Math.random() * 3);

    //make variable for name 
    
    //change text in to show movie
    document.getElementById("movie").innerHTML = listOfMovies[randomNumber]




    

  }

