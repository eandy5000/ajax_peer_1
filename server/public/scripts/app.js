$(document).ready(function(){
    $.ajax({
        type : "GET",
        url  : "/data",
        success : function(data) {
            appendDom(data);
        }
    });

    $("button").on("click", function(){
        console.log(data);
    });

    function appendDom(data) {



        for(var i = 0; i < data.people.length; i++) {
            $(".employeeContainer").append("<div class='person'></div>")
            $(".person").last().append("<img src='" + data.people[i].imageURL + "'></img>");
            $(".person").last().append("<p>" + data.people[i].name + "</p>");
            $(".person").last().append("<p>" + data.people[i].location + "</p>");
            $(".person").last().append("<p>" + data.people[i].position + "</p>");
        }
    }


});


