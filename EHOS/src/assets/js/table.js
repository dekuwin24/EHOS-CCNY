$(document).ready(function () {

    var counter = 0;

    $("#addrow").on("click", function () {
        var newRow = $("<tr>");
        var cols = "";

        cols += '<td><div id="name' + counter + ' class="form-group "><select class="form-control" ><option *ngFor="let item of items ><span class="badge"></span> </option></select></div></td>';
        cols += '<td><div id="name' + counter + 'class="form-group "><select class="form-control selectContainer" ><option *ngFor="let item of items"><span class="badge">{{item.hazard}}</span> {{item.hazard}}</option></select></div></td>';
        cols += '<td><div id="name' + counter + ' class="input-group mb-3 "><input type="text" class="form-control" aria-label="Amount (to the nearest dollar)"><div class="input-group-append"><span class="input-group-text">kg</span></div></div></td>';

        cols += '<td><input type="button" class="ibtnDel btn btn-md btn-danger "  value="Delete"></td>';
        newRow.append(cols);
        $("table.order-list").append(newRow);
        counter++;

    });



    $("table.order-list").on("click", ".ibtnDel", function (event) {
        $(this).closest("tr").remove();
        counter -= 1
    });


});



function calculateRow(row) {
    var price = +row.find('div[id^="price"]').val();

}

function calculateGrandTotal() {
    var grandTotal = 0;
    $("table.order-list").find('div[id^="price"]').each(function () {
        grandTotal += +$(this).val();
    });
    $("#grandtotal").text(grandTotal.toFixed(2));
}
function deleteRow(r) {
    var i = r.parentNode.parentNode.rowIndex;
    document.getElementById("myTable").deleteRow(i);

}














$(document).ready(function() {
    $("#add_row").on("click", function() {
        // Dynamic Rows Code

        // Get max row id and set new id
        var newid = 0;
        $.each($("#tab_logic tr"), function() {
            if (parseInt($(this).data("id")) > newid) {
                newid = parseInt($(this).data("id"));
            }
        });
        newid++;

        var tr = $("<tr></tr>", {
            id: "addr"+newid,
            "data-id": newid
        });

        // loop through each td and create new elements with name of newid
        $.each($("#tab_logic tbody tr:nth(0) td"), function() {
            var cur_td = $(this);

            var children = cur_td.children();



            // add new td and element if it has a nane
            if ($(this).data("name") != undefined) {
                var td = $("<td></td>", {
                    "data-name": $(cur_td).data("name")
                });


                var c = $(cur_td).find($(children[0]).prop('tagName')).clone().val("");
                c.attr("name", $(cur_td).data("name") + newid);
                c.appendTo($(td));
                td.appendTo($(tr));
            } else {
                var td = $("<td></td>", {
                    'text': $('#tab_logic tr').length
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
        $(tr).appendTo($('#tab_logic'));

        $(tr).find("td button.row-remove").on("click", function() {
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

    $(".table-sortable tbody").sortable({
        helper: fixHelperModified
    }).disableSelection();

    $(".table-sortable thead").disableSelection();



    $("#add_row").trigger("click");
});
