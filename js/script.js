
$(document).ready(function(){

})


$('#about1').hide();
$('.btn-hide').hide();

$('.btn-show').click(function(){
	$('#about1').slideDown(1000);
	$('.btn-hide').show();
	$('.btn-show').hide();
});

$('.btn-hide').click(function(){
	$('#about1').slideUp();
	$('.btn-hide').hide();
	$('.btn-show').show();
});

$('#about2').hide();
$('.btn-hide').hide();

$('.btn-show').click(function(){
	$('#about2').slideDown(1000);
	$('.btn-hide').show();
	$('.btn-show').hide();
});

$('.btn-hide').click(function(){
	$('#about2').slideUp();
	$('.btn-hide').hide();
	$('.btn-show').show();
});

$('#about3').hide();
$('.btn-hide').hide();

$('.btn-show').click(function(){
	$('#about3').slideDown(1000);
	$('.btn-hide').show();
	$('.btn-show').hide();
});

$('.btn-hide').click(function(){
	$('#about3').slideUp();
	$('.btn-hide').hide();
	$('.btn-show').show();
});

$('#about4').hide();
$('.btn-hide').hide();

$('.btn-show').click(function(){
	$('#about4').slideDown(1000);
	$('.btn-hide').show();
	$('.btn-show').hide();
});

$('.btn-hide').click(function(){
	$('#about4').slideUp();
	$('.btn-hide').hide();
	$('.btn-show').show();
});

function showNav(){
    var menu = document.getElementById("navList-l");
    if(menu.style.display === 'block'){
        menu.style.display = 'none';
    } else {
        menu.style.display = 'block';
    }
}
