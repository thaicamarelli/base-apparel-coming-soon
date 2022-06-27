function validateEmail(email){
    var result = /\S+@\S+\.\S+/;
    return result.test(email)
}

var counter = 0 

$("button").on("click",function(){
    if(counter < 1){
        var inputValue = $("input").val()
        if(!validateEmail(inputValue)){
            $("input").removeClass("email")
            $("input").addClass("email-error")
            $(".form-div").append("<p class='error-text'>Please provide a valid email</p>");
            counter = 1
        }  
    }     
})