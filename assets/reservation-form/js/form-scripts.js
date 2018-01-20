$("#reservationForm").validator().on("submit", function (event) {
    if (event.isDefaultPrevented()) {
        // handle the invalid form...
        formError();
        submitMSG(false, "Did you fill in the form properly?");
    } else {
        // everything looks good!
        event.preventDefault();
        submitForm();
    }
});


function submitForm(){
    // Initiate Variables With Form Content
    var name = $("#name").val();
    var numberpeople = $("#numberpeople").val();
    var smoke = $("#smoke").val();
    var dinehour = $("#dinehour").val();
    var dinedate = $("#dinedate").val();
    var email = $("#email").val();

    $.ajax({
        type: "POST",
        url: "assets/reservation-form/php/form-process.php",
        data: "name=" + name + "&numberpeople=" + numberpeople + "&smoke=" + smoke + "&dinehour=" + dinehour + "&dinedate=" + dinedate + "&email=" + email,
        success : function(text){
            if (text == "success"){
                formSuccess();
            } else {
                formError();
                submitMSG(false,text);
            }
        }
    });
}

function formSuccess(){
    $("#reservationForm")[0].reset();
    submitMSG(true, "Message Submitted!")
}

function formError(){
    $("#reservationForm").removeClass().addClass('shake animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
        $(this).removeClass();
    });
}

function submitMSG(valid, msg){
    if(valid){
        var msgClasses = "h3 text-center tada animated text-success";
    } else {
        var msgClasses = "h3 text-center text-danger";
    }
    $("#msgSubmit").removeClass().addClass(msgClasses).text(msg);
}
