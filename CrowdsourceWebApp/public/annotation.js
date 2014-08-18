// get references to the canvas and its context
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

// get the offset position of the kinetic container
var $canvas = $("#myCanvas");
var Offset = $canvas.offset();
var offsetX = Offset.left;
var offsetY = Offset.top;


// select all .tool's
var $tools = $(".tool");


// make all .tool's draggable
$tools.draggable({
    helper: 'clone',
});


// assign each .tool its index in $tools
$tools.each(function (index, element) {
    $(this).data("toolsIndex", index);
});


// make the canvas a dropzone
$canvas.droppable({
    drop: dragDrop,
});


// handle a drop into the canvas
function dragDrop(e, ui) {

    // get the drop point (be sure to adjust for border)
    var x = parseInt(ui.offset.left - offsetX) - 1;
    var y = parseInt(ui.offset.top - offsetY);

    // get the drop payload (here the payload is the $tools index)
    var theIndex = ui.draggable.data("toolsIndex");

    // drawImage at the drop point using the dropped image 
    ctx.drawImage($tools[theIndex], x, y, 32, 32);

}