$(document).ready(function() {

   $(window).scroll(function(){
       //changes navbar colour + contents when scrolled
       $('nav, svg, a').toggleClass('scrolled', $(this).scrollTop() > 250);
   })


   //handles the form submission - prevents page change and gives user feedback on submit
   $('#subscribeForm').submit(function(e){
    var emailInput = $('#exampleInputEmail1').val();
    e.preventDefault();
       if (emailInput == ''){
        alert("Make sure the input box is filled");
       } else {
        alert("Thanks For Subscribing!");
        //closes the modal box on submit
       $('#modal').modal('toggle');
       }
   });
});