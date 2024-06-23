var ceiling_lamp_on = false;
$(".ceiling-lamp-icon").click(()=>{
    if (ceiling_lamp_on)
        $(".ceiling-lamp-icon").attr("src", "/images/ceiling-lamp.svg");
    else
        $(".ceiling-lamp-icon").attr("src", "/images/ceiling-lamp-glow.svg");
    ceiling_lamp_on = !ceiling_lamp_on;
});

// $(".ceiling-lamp-icon").attr("src", "/images/ceiling-lamp-glow.svg"); // testing
