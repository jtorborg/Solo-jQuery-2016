//console.log("app.js is working");

$(document).ready(function() {

    //console.log("jQuery is working");

//========GLOBAL VARIABLES==========//
    var redCount = 0;
    var yellowCount = 0;
    var greenCount = 0;
    var blueCount = 0;


    //event listener
    $('.color-button').click(clickHandler);

    function clickHandler() {

        //console.log("clickHandler works");

        console.log(this);

        console.log($(this).data('color'));

        if ($(this).data('color') == 'red') {

            redCount++;
            console.log(redCount);
            $('#red').text('Total red: ' + redCount);
          $('.container').append('<div class = "color-cube red"></div>');//remember equals sign


        } else if ($(this).data('color') == 'yellow') {

            yellowCount++;
            console.log(yellowCount);
            $('#yellow').text('Total yellow: ' + yellowCount);
            $('.container').append('<div class = "color-cube yellow"></div>');//remember equals sign



        } else if ($(this).data('color') == 'green') {

            greenCount++;
            console.log(greenCount);
            $('#green').text('Total green: ' + greenCount);
            $('.container').append('<div class = "color-cube green"></div>');//remember equals sign



        } else if ($(this).data('color') == 'blue') {

            blueCount++;
            console.log(blueCount);
            $('#blue').text('Total blue: ' + blueCount);
            $('.container').append('<div class = "color-cube blue"></div>');//remember equals sign


        }
    } //end of clickHandler function
}); //end of doc ready function
