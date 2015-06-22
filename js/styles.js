$('#edit-header').html('The jQuery Challenge');

$('#box1').css('background', 'green');

$('#para1').css({
    'font-size': '40px',
    'font-weight': 'bolder'
});

$('#button1').click(function() {
    alert('you have been alerted!');
});

$('#box2').hover(function(){
	$(this).addClass('spin');
},function(){
	$(this).removeClass('spin');
});





$('#box3').hover(function() {
    $(this).css('background-color', 'green');
}, function() {
    $(this).css('background-color', 'red');
});

$('#input1').keyup(function() {
    var x = $('#input1').val();
    console.log(x);

});

$('#box4').click(function() {
    $(this).animate({'left': '+= 50px','top': '+= 50px'}, '2000');
});

// $( "#box4" ).click(function() {
//   $( ".box4" ).animate({ "left": "+=50px" }, "slow" );
// });
