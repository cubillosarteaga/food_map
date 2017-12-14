$(document).ready(function(){
$(function(){
   setTimeout(function() {
      $('#splash').fadeOut(700);
   }, 3000);



});

$(document).ready(function(){
  $("#input-search").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#list li").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
      $('.table').show();
      $('#pizza').show();
      $('#sushi').show();
      

      $('.modal').modal({
      dismissible: true, // Modal can be dismissed by clicking outside of the modal
      opacity: .5, // Opacity of modal background
      inDuration: 300, // Transition in duration
      outDuration: 200, // Transition out duration
      startingTop: '4%', // Starting top style attribute
      endingTop: '10%', // Ending top style attribute
      ready: function(modal, trigger) { // Callback for Modal open. Modal and trigger parameters available.
      },
      complete: function() { 
      } // Callback for Modal close
    }
  );
      
    });
  });
});
});