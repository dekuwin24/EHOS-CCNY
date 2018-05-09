$(document).ready(function() {
    $("#add_row1").on("click", function() {
        // Dynamic Rows Code

        // Get max row id and set new id
        var newid = 0;
        $.each($("#tab_logic1 tr"), function() {
            if (parseInt($(this).data("id")) > newid) {
                newid = parseInt($(this).data("id"));
            }
        });
        newid++;

        var tr = $("<tr></tr>", {
            id: "adddr"+newid,
            "data-id": newid
        });

        // loop through each td and create new elements with name of newid
        $.each($("#tab_logic1 tbody tr:nth(0) td"), function() {
            var cur_td = $(this);

            var children = cur_td.children();



            // add new td and element if it has a nane
            if ($(this).data("name") != undefined) {
                var td = $("<td></td>", {
                    "data-name": $(cur_td).data("it")
                });

                var c = $(cur_td).find($(children[0]).prop('tagName')).clone().val("");
                c.attr("maxlength", $(cur_td).data("it") + newid);
                c.appendTo($(td));
                td.appendTo($(tr));


            } else {
                var td = $("<td></td>", {
                    'text': $('#tab_logic1 tr').length
                }).appendTo($(tr));
            }
        });

        // add delete button and td
        /*
        $("<td></td>").append(
            $("<button class='btn btn-danger glyphicon glyphicon-remove row-remove'></button>")
                .click(function() {
                    $(this).closest("tr").remove();
                })
        ).appendTo($(tr));
        */

        // add the new row
        $(tr).appendTo($('#tab_logic1'));

        $(tr).find("td button.row-remove1").on("click", function() {
             $(this).closest("tr").remove();
        });
});




    // Sortable Code
    var fixHelperModified = function(e, tr) {
        var $originals = tr.children();
        var $helper = tr.clone();

        $helper.children().each(function(index) {
            $(this).width($originals.eq(index).width())
        });

        return $helper;
    };

    $(".table-sortable1 tbody").sortable({
        helper: fixHelperModified
    }).disableSelection();

    $(".table-sortable1 thead").disableSelection();



    $("#add_row1").trigger("click");
});
