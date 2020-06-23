
$(document).ready(function(){
	Swal.fire({
		title: 'Please Acknowledge',
		text: 'This site is for education use only and is not the real site, please see the real NCWNZ website at www.ncwnz.org.nz. This site was created for a Yoobee Colleges assignment by Yana Brewster',
		confirmButtonText: 'I understand that this is not the real site'
	})
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
