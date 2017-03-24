/**
 * Created by Trevor Vanderee on 2017-03-08.
 */
jQuery(document).ready(function($) {
    //Set the active class

    $('[data-toggle="tooltip"]').tooltip();

    $('[data-toggle="popover"]').popover({
        container: "body"
    });

    $('#myCarousel').carousel({
        interval: 5000
    });

    //Handles the carousel thumbnails
    $('[id^=carousel-selector-]').click(function () {
        var id_selector = $(this).attr("id");
        try {
            var id = /-(\d+)$/.exec(id_selector)[1];
            console.log(id_selector, id);
            jQuery('#myCarousel').carousel(parseInt(id));
        } catch (e) {
            console.log('Regex failed!', e);
        }
    });
    // When the carousel slides, auto update the text
    $('#myCarousel').on('slid.bs.carousel', function (e) {
        var id = $('.item.active').data('slide-number');
        $('#carousel-text').html($('#slide-content-'+id).html());
    });

    $('[data-toggle="tooltip"]').tooltip();
});

function snackbar() {
    // Get the snackbar DIV
    var x = document.getElementById("snackbar")
    // Add the "show" class to DIV
    x.className = "show";
    // After 3 seconds, remove the show class from DIV
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}


function getEvents(){

    return [
        {
            id : 'E01',
            title : 'Meeting with BA',
            start : '27-10-2015 10:30:00',
            end : '27-10-2015 11:00:00',
            backgroundColor: '#443322',
            textColor : '#FFF'
        },
        {
            id : 'E01',
            title : 'Lunch',
            start : '27-10-2015 12:30:00',
            end : '27-10-2015 13:00:00',
            backgroundColor: '#12CA6B',
            textColor : '#FFF'
        },
        {
            id : 'E02',
            title : 'Customer Appointment',
            start : '29-10-2015 09:00:00',
            end : '29-10-2015 09:30:00',
            backgroundColor: '#34BB22',
            textColor : '#FFF'
        },
        {
            id : 'E03',
            title : 'Buddy Time',
            start : '30-10-2015 11:00:00',
            end : '30-10-2015 12:30:00',
            backgroundColor: '#AA3322',
            textColor : '#FFF'
        }
    ];}
