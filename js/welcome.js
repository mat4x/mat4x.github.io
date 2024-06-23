// declared variables
// const dummyProp = {"dummy" : "0"}; // used for animation delays // is declared in index.js



//------------------------------------- screen size warning card
// hide card
$("#warn-overlay").click(function(e){
    $(this).css({
        "display": "",
        "background-color": "" });
});

// dismiss card event
$(".warn-small-screen").click( (e) =>{
    e.stopPropagation();
})

//------------------------------------- open envelope animation
$("#greeting-card").css("transition", "top 1s steps(6), rotate 0.2s");    // greeting-card animation timing
var envelope_open = false;
var envelope_anim_available = true; 

// to close envelope on click anywhere
$(".envelope").click( function(){if (envelope_open) $(".envelope-flap-icon").click()});

$(".envelope-flap-icon").on({
    "click" : function(e){
                e.stopPropagation();
                var reset = function(){
                    envelope_anim_available = true;
                    envelope_open = !envelope_open;
                    return;
                }

                if (!envelope_anim_available) return;
                envelope_anim_available = false;
                
                if (!envelope_open){        // opening
                    $(".envelope-flap-icon").css("transition", "transform 1s steps(6)");
                    var flap_props = {"transform":"scaleY(-1)", "top":"-1px"};
                    var card_props = {"top":"-110px", "animation":"card-shimmy 1s steps(1)"};

                    $(this).css(flap_props).animate(dummyProp, 1050, function(){
                        $(".envelope").css("rotate", "-=5deg");
                        $(this).css("z-index", "0");
                        $("#greeting-card").css(card_props).animate(dummyProp, 1000, reset); // time equal to transition duration above
                        $(".envelope-sides-icon").css("pointer-events", "none"); // allows clicks over the letter-side
                    });
                }

                else{                       // closing
                    $(".envelope-flap-icon").css("transition", "transform 0.5s steps(3)");
                    var flap_props = {"transform":"", "top":"", "z-index":""};
                    var card_props = {"top":"", "animation": "none"};

                    $("#greeting-card").css(card_props).animate(dummyProp, 1000, function(){
                        $(".envelope-flap-icon").css(flap_props).animate(dummyProp, 1000, reset);
                        $(".envelope").css("rotate", "+=5deg");
                        $(".envelope-sides-icon").css("pointer-events", ""); // previents clicks over the letter-side when envelope closed
                    } );
                }
    },
    
    "mouseenter" : function(){
                if(!envelope_anim_available) return;
                if (!envelope_open)
                    $(this).css("transform", "scaleY( 0.9)");
                else
                    $(this).css("transform", "scaleY(-0.9)");
                },

    "mouseleave" : function(){
                if(!envelope_anim_available) return;
                if (!envelope_open)
                    $(this).css("transform", "scaleY( 1)");
                else
                    $(this).css("transform", "scaleY(-1)");
                },
});

// $(".envelope-flap-icon").click(); // testing


//------------------------------------- show business card
var show_card_flipped = false;
var card_flip_anim_available = true;

// pull out card
$("#greeting-card").click(function(e){
    e.stopPropagation();

    $(".card-overlay").css({
        "display": "flex",
        "background-color": "rgba(0, 0, 0, 0.6)",
        "transition-duration": "2s"});
    
    // flip correct if previously closed without correct direction
    if (show_card_flipped)
        $(".card-back").css("display", "");
    
    show_card_flipped = false;
});

// hide overlay card
$(".card-overlay").click(function(e){
    $(".card-overlay").css({
        "display": "",
        "background-color": "" });
    
})

// flip overlay card
$(".show-card").click(function(e){
    e.stopPropagation();
    $(this).css({"transition-duration": "0.3s", "transition-timing-function": "ease-in"});

    var reset = function(){
        card_flip_anim_available = true; }

    if (!card_flip_anim_available) return;
    card_flip_anim_available = false
    
    // show back
    if (!show_card_flipped){
        show_card_flipped = true;
        card_flip_anim_available = false;
        
        $(this).css("transform", "scaleX(0.05) rotate(10deg)").animate(dummyProp, 320, function(){
            $(this).css("transition-timing-function", "ease-out");
            $(".card-back").css("display", "block");
            $(this).css("transform", "scaleX(1)").animate(dummyProp, 300, reset);
        });
    }
    
    // show front
    else{
        show_card_flipped = false;
        $(this).css("transform", "scaleX(0.05) rotate(10deg)").animate(dummyProp, 320, function(){
            $(this).css("transition-timing-function", "ease-out");
            // Revert content back
            $(".card-back").css("display", "");
            $(this).css("transform", "").animate(dummyProp, 300, reset);
        });
    }
})


//------------------------------------- roll dice
var dice_rolling_anim = false;
$("#dice").click(function(){
    if (dice_rolling_anim) return;
    dice_rolling_anim = true;
    var num = -1*$(this).height()*Math.floor(6*Math.random());
    var rot = -20*Math.random();
    $(this).css({"box-shadow": "6px 6px 5px 10px #0003", "scale":"0.7", "rotate":"10deg"})
    .effect( "shake", {times:4, distance:3}, 580 )
    .animate(dummyProp, 0, () => {
        $(".pips").css({"top": `${num}px`});
        $(this).css({"box-shadow": "", "scale":"", "rotate":rot+"deg"});
        dice_rolling_anim = false;  
    });
})
