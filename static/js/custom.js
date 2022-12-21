$( document ).ready(function() {
    $("#submitText").click(function(event) {
        requestObj = {"text" : $("#text2analyze").val()};
        $.post("/analyze", requestObj, function(data) {
            words = data.words;
            $("#outputDiv").html("<div class='btn-group' role='group' aria-label='Output text' id='outputGroup1'></div>");
            for (const word of words) {
                $("#outputGroup1").append("<button type='button' class='btn btn-primary'>" + word +"</button>");
            }
        });


    });
});