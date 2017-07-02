$(document).ready(function() {
  var doSomeStuff = function(event) {
    // prevents form submission
    event.preventDefault();
    // reads user input which will be a city name
    var city = $('#city-type').val();
    // converts the city name to lowercase (so that we don't have to worry about case-sensitive)
    var lowerCase = city.toLowerCase();
    // check if city is 'nyc'
    if (lowerCase === "nyc" || lowerCase === "new york city") {
        $('body').css('background-image', 'url(images/nyc.jpg)');
        // In the DOM, there are two serpate and equally important groups. the Javascript, and the elements. These are their stories.
    } else if (lowerCase === "san francisco" || lowerCase === "sf" || lowerCase ==="Bay Area") {
        $('body').css('background-image', 'url(images/sf.jpg)');
        // If you're going to San Francisco, be sure to reference flowersinhair
    } else if (lowerCase === "atx" || lowerCase ==="austin")
      {  $('body').css('background-image', 'url(images/austin.jpg)');
    } // Austin Texas.
    else if (lowerCase === "la" || lowerCase ==="lax")
      {  $('body').css('background-image', 'url(images/la.jpg)');
    } //los angeles
    else if (lowerCase === "syd" || lowerCase ==="sydney")
      {  $('body').css('background-image', 'url(images/sydney.jpg)');
    } //sydney
    else {
        $('body').css('background-image','url(images/citipix_skyline.jpg)');
        //Reset to Default if the Use input isn't recognised
    }
    };

  $('form').submit(doSomeStuff);
});
