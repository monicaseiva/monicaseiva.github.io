// A $( document ).ready() block.
$( document ).ready(function() {
    // do some interactions
    var $btns =  $('.category').click(function(){
        //do whatever you want done when clicked
        if(this.id == 'all') {    
    $('#basket > div').show();
        }
        else{
    // show only the elements with the id matching the class
    var $el = $('.' + this.id).show();
    $('#basket > div').not($el).hide();
        }
    });
    });