/*
 Select To Select2 Plugin Main.
 */

(function($){

    // For Page Load
    replaceAllSelect2();

    // For Ajax
    $(document).ajaxComplete(function(event){
        replaceAllSelect2();
    });

    // For GET,POST Request
    // For jQuery Version >= 3.X Redmine Version 5.0.2 4.2.7 3.4.13 OK
    $(window).on('load',function() {
        replaceAllSelect2();
    });

    // for all elements
    // $(document).click(function(event){
    //     replaceAllSelect2();
    // });

    // for all elements
    $(document).change(function(event){
        replaceAllSelect2();
    });


}(jQuery));

function replaceAllSelect2(){

    var elements = document.getElementsByTagName("select");


    for (i = 0; i < elements.length; i++) {

        if(elements[i].id == 's2id_issue_tag_list'){
            continue;
        }

        // For not woroking 「width:resolve」
        if(elements[i].id == 'year'
        || elements[i].id == 'month'
        || elements[i].id == 'columns'
        || elements[i].id == 'settings_issuequery_query_id'
        || elements[i].id == 'block-select'){

            $("#" + elements[i].id).selectB4({
                width:"175px",
                placeholder: "",
                allowClear: true
            });
        }
        else if (elements[i].id == 'available_c' || elements[i].id == 'selected_c') {
            //do nothing, fix incorrect display
        } else {
            // For All Pages
            $("#" + elements[i].id).selectB4({
                width:"resolve",
                placeholder: "",
                allowClear: true
            });
        }

    }

}
