/* https://www.kevinleary.net/jquery-parse-url/ */
function url_query( query ) {
    query = query.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
    var expr = "[\\?&]"+query+"=([^&#]*)";
    var regex = new RegExp( expr );
    var results = regex.exec( window.location.href );
    if ( results !== null ) {
        return results[1];
    } else {
        return false;
    }
}

$(document).ready(function(){
   for (var i = 65; i <= 90; i++) {
        if (i === 75 || i === 81 || (i > 87 && i < 91)) {
            $("#alpha-buttons").append('<li><span class="no-data">' + String.fromCharCode(i) + '</span></li>')
        } else if (i > 67) {
            $("#alpha-buttons").append('<li><a href="javascript:void(0)" onclick="out(' + "'" + 'A' + "'" + ')">' + String.fromCharCode(i) + '</a></li>');
        } else {
            $("#alpha-buttons").append('<li><a href="javascript:void(0)" onclick="out(' + "'" + String.fromCharCode(i) + "'" + ')">' + String.fromCharCode(i) + '</a></li>');
        }
    }
    $("#alpha-buttons").append('<li><a href="javascript:void(0)" onclick="out(' + "'" + 'All' + "'" + ')">All</a></li>');

    var url_param = url_query('fclt');
    if( url_param ) {
        /* alert(url_param); // "yes" */
        $('#faculty-list').val(url_param);
    }

    url_param = url_query('degr');
    if( url_param ) {
        $('#degree-list').val(url_param);
    }

    /*$("a:contains('Apple Picking')").addClass("invisible");*/
});

function out( letter ) {
    var url = window.location.href.split("/");
    if (letter === 'All') {
        url[url.length-1] = 'full_prog_list.html';
    } else {
        url[url.length-1] = 'prog_list_' + letter + '.html';
    }
    url = url.join("/");
    url = url + '?fclt=' + $("#faculty-list").val() + '&degr=' + $("#degree-list").val();
    window.location.href = url;
}