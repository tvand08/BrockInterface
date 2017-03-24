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
    $("#alpha-buttons").append('<li><a href="javascript:void(0)" onclick="out(' + "'" + 'All' + "'" + ')">All</a></li>');
    for (var i = 65; i <= 90; i++) {
        if (i === 75 || i === 81 || (i > 87 && i < 91)) {
            $("#alpha-buttons").append('<li class="no-data"><span class="no-data">' + String.fromCharCode(i) + '</span></li>')
        } else if (i > 67) {
            $("#alpha-buttons").append('<li><a href="javascript:void(0)" onclick="out(' + "'" + 'A' + "'" + ')">' + String.fromCharCode(i) + '</a></li>');
        } else {
            $("#alpha-buttons").append('<li><a href="javascript:void(0)" onclick="out(' + "'" + String.fromCharCode(i) + "'" + ')">' + String.fromCharCode(i) + '</a></li>');
        }
    }
    
    var fclt = $('#faculty-list');
    var url_param = url_query('fclt');
    if( url_param ) {
        /* alert(url_param); // "yes" */
        fclt.val(url_param);
    }

    var degr= $('#degree-list');
    url_param = url_query('degr');
    if( url_param ) {
        degr.val(url_param);
    }

    var fval = parseInt(fclt.val());
    var dval = parseInt(degr.val());

    function doubleFilter() {
        $(".program-list a").addClass("invisible");
        switch (fval) {
            case 1:
                switch (dval) {
                    case 1:
                        $(".program-list a").removeClass("invisible");
                        break
                    case 2:
                        $(".program-list a:contains('Basket Weaving')").removeClass("invisible");
                        $(".program-list a:contains('Classics')").removeClass("invisible");
                        $(".program-list a:contains('Dinklage Appreciation')").removeClass("invisible");
                        break;
                    case 3:
                        $(".program-list a:contains('Accounting')").removeClass("invisible");
                        $(".program-list a:contains('Business Communication')").removeClass("invisible");
                        break;
                    case 4:
                        $(".program-list a:contains('Child Health')").removeClass("invisible");
                        $(".program-list a:contains('Concurrent Education')").removeClass("invisible");
                        $(".program-list a:contains('Developmental Pie-ology')").removeClass("invisible")
                        break;
                    case 5:
                        $(".program-list a:contains('Apple Picking')").removeClass("invisible");
                        $(".program-list a:contains('Demolition Expert')").removeClass("invisible");
                        $(".program-list a:contains('Donut Hole Planning')").removeClass("invisible");
                        $(".program-list a:contains('Elephant Trainer')").removeClass("invisible");
                        break;
                    case 6:
                        $(".program-list a:contains('Aquaponics')").removeClass("invisible");
                        $(".program-list a:contains('Biochemistry')").removeClass("invisible");
                        $(".program-list a:contains('Biomedical Sciences')").removeClass("invisible");
                        $(".program-list a:contains('Endocrinology')").removeClass("invisible");
                        break;
                }
                break;
            case 2:
                switch (dval) {
                    case 1:
                        $(".program-list a:contains('Child Health')").removeClass("invisible");
                        $(".program-list a:contains('Apple Picking')").removeClass("invisible");
                        $(".program-list a:contains('Donut Hole Planning')").removeClass("invisible");
                        $(".program-list a:contains('Elephant Trainer')").removeClass("invisible");
                        $(".program-list a:contains('Endocrinology')").removeClass("invisible");
                        break
                    case 4:
                        $(".program-list a:contains('Child Health')").removeClass("invisible");
                        break;
                    case 5:
                        $(".program-list a:contains('Apple Picking')").removeClass("invisible");
                        $(".program-list a:contains('Donut Hole Planning')").removeClass("invisible");
                        $(".program-list a:contains('Elephant Trainer')").removeClass("invisible");
                        break;
                    case 6:
                        $(".program-list a:contains('Endocrinology')").removeClass("invisible");
                        break;
                }
                break;
            case 3:
                switch (dval) {
                    case 1:
                        $(".program-list a:contains('Applied Linguistics')").removeClass("invisible");
                        $(".program-list a:contains('Concurrent Education')").removeClass("invisible");
                        $(".program-list a:contains('Developmental Pie-ology')").removeClass("invisible")
                        break
                    case 4:
                        $(".program-list a:contains('Concurrent Education')").removeClass("invisible");
                        $(".program-list a:contains('Developmental Pie-ology')").removeClass("invisible")
                        break;
                }
                break;
            case 4:
                switch (dval) {
                    case 1:
                        $(".program-list a:contains('Aboriginal Studies')").removeClass("invisible");
                        $(".program-list a:contains('Basket Weaving')").removeClass("invisible");
                        $(".program-list a:contains('Classics')").removeClass("invisible");
                        $(".program-list a:contains('Demolition Expert')").removeClass("invisible");
                        $(".program-list a:contains('Dinklage Appreciation')").removeClass("invisible");
                        break
                    case 2:
                        $(".program-list a:contains('Basket Weaving')").removeClass("invisible");
                        $(".program-list a:contains('Classics')").removeClass("invisible");
                        $(".program-list a:contains('Dinklage Appreciation')").removeClass("invisible");
                        break;
                    case 5:
                        $(".program-list a:contains('Demolition Expert')").removeClass("invisible");
                        break;
                }
                break;
            case 5:
                switch (dval) {
                    case 1:
                        $(".program-list a:contains('Aquaponics')").removeClass("invisible");
                        $(".program-list a:contains('Biochemistry')").removeClass("invisible");
                        $(".program-list a:contains('Biomedical Sciences')").removeClass("invisible");
                        break
                    case 6:
                        $(".program-list a:contains('Aquaponics')").removeClass("invisible");
                        $(".program-list a:contains('Biochemistry')").removeClass("invisible");
                        $(".program-list a:contains('Biomedical Sciences')").removeClass("invisible");
                        break;
                }
                break;
            case 6:
                
                switch (dval) {
                    case 1:
                        $(".program-list a:contains('Accounting')").removeClass("invisible");
                        $(".program-list a:contains('Business Communication')").removeClass("invisible");
                        break
                    case 3:
                        $(".program-list a:contains('Accounting')").removeClass("invisible");
                        $(".program-list a:contains('Business Communication')").removeClass("invisible");
                        break;
                }
                break;
        }
    }

    doubleFilter();

    fclt.on('change',function(){
        fval = parseInt(fclt.val());
        doubleFilter();
    });

    degr.on('change',function(){
        dval = parseInt(degr.val());
        doubleFilter();
    });
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