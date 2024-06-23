// declared variables
const root = $(":root");
var scroll_y, scroll_y_rel;
const dummyProp = {"dummy" : "0"}; // used for animation delays


// scroll_values
var scrollMaxY = $(document).height() - document.documentElement.clientHeight;

$(document).scroll(function(){
    scroll_y = $(document).scrollTop();
    
    scroll_y_rel = scroll_y/scrollMaxY;
    
    set_letter_angle();
    // set_nav_wave();
    // set_pen_pos();
});


//------------------------------------- scroll dependent atributes
// function set_nav_wave(){
//     $("#nav-wave").css({"transform": "translate(" + -scroll_y/200 +"%, 95%)"});
// }

function set_letter_angle(){
    var letter_angle = 3*Math.sin(scroll_y/500);
    root.css({"--letter-angle": letter_angle + "deg"});
}

// var pen_travel = 3600;
// var max_pen_x  = 350;
// var line_height = 31.5;
// function set_pen_pos(){
//     new_x = ((pen_travel*scroll_y_rel) % max_pen_x ) + "px";
//     new_y = ( Math.floor((pen_travel*scroll_y_rel) / max_pen_x ) * line_height ) + "px"

//     console.log()

//     root.css({"--pen_pos_x": new_x});
//     root.css({"--pen_pos_y": new_y});
//     // console.log(root.css("--pen_pos_x"), scroll_y_rel)

    
// }




//------------------------------------- doc

warn = function(){
    var height = $(document).height();
    var width  = $(document).width();
    if (width < 1024)
        $("#warn-overlay").css({"display": "flex", "position": "fixed"})
    else
    $("#warn-overlay").css({"display": "", "position": ""})
}

$(window).resize(function() {
    warn();
});

$(document).ready(function(){

    // play music
    // const audio = document.querySelector("audio");
    // audio.volume = 0.2;
    // audio.play();

    // Set letter date
    const fullDate = new Date()
    const currentDate = fullDate.getDate() + "/" + (fullDate.getMonth()+1) + "/" + fullDate.getFullYear();
    $("#letter-date").text(currentDate);
    
    // set letter exclaimation
    const exclaimations = ["Hello There,", "Hi!", "Hello,", "Hey There!", "Heyo,"];
    $("#letter-exclaim").text(exclaimations[Math.floor(Math.random() * exclaimations.length)]);

    warn();

    
})
