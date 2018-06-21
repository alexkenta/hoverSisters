$(document).ready(function(){

    $("img").hover(function(){
        console.log(this);
        $(this).attr("temp", $(this).attr("src"));
        $(this).attr("src", $(this).attr("other"));
        $(this).attr("other", $(this).attr("temp"));
        
    }
)

});
