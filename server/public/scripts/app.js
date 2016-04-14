var callLimit = 0;

// functions
    function appendDom(data) {
        
      for (var i = 0; i < data.people.length; i++){
        $('.employeeContainer').append( '<div class ="person row well">'+
                    '<div class = "employee">'+
                    '<div class = "col-md-2">'+
                        '<img src = "' + data.people[i].imageURL +'"></img>'+
                    '</div>'+
                    '<div class="col-md-3">'+
                        '<h5>Name: '+data.people[i].name+'</h5>'+
                        '<h5>Position: '+data.people[i].position+'</h5>'+
                        '<h5>Location: '+data.people[i].location+'</h5>'+
                        '<button class = "remove btn btn-info">Remove</button>'+
                    '</div>'+
                    '</div>'+
                '</div>'); 
         } 
    }

function remove (self) {
    var item = $(self).parent().parent().parent();    
    $(item).remove();
}

function call () {
  
  if (callLimit < 1) {  
   
    $.ajax({
        type: "GET",
        url : "/data",
        success: function (data) {
           appendDom(data); 
           callLimit++;
        }
    });
  
  } else {
      return;
  }
}


$(document).ready(function(){
    // $.ajax({
    //     type : "GET",
    //     url  : "/data",
    //     success : function(data) {
    //         appendDom(data);
            
    //     }
    // });


//listeners
$('.employeeContainer').on('click', '.remove', function (){
    var self = this;
    remove(self);
});

$('.jumbotron').on('click', '#gen', function () {
   call(); 
});

//end jquery
});


