var ranks=["a","b","c","d","e","f","g","h"];
var filles=[1,2,3,,4,5,,6,7,8];

var moveOwner="w";


$( function() {
    $( ".piece" ).draggable({

        helper:'clone',
        //revert:true
        containment:'.w'
    });

    $( ".black-sqr,.white-sqr" ).droppable({
        //activate:checkMove,
        drop:move,
        hoverClass:'hovered'
    });
    // $( ".white-sqr" ).droppable({
    //     drop:function (evt, ui) {
    //         var cellid=$(this).attr('id');
    //         //alert(cellid);
    //         $('#'+cellid).append(ui.draggable);
    //
    //     }
    // });

} );


function move(evt, ui) {
    var pieceid=$(ui.draggable).attr('id');
    //console.log(pieceid.toString().charAt(0));
     var color=pieceid.toString().charAt(0);


     // console.log("piece color :"+color);    //Test:Completed
     // console.log("move owner :"+moveOwner);    //Test:Completed
     // console.log("did matched the move :"+(moveOwner==color));    //Test:Completed
     // console.log("white or not :"+(moveOwner=="w"));    //Test:Completed

    if (moveOwner==color){

        var arguement=$(this).is(".wpiece");
        console.log(arguement);

        var cellid=$(this).attr('id');
        $('#'+cellid).append(ui.draggable);
        var pieceid=$(ui.draggable).attr('id');

        // var arguement=$(this).is(".wpiece");
        // console.log(arguement);

        if(moveOwner=="w"){
            $(this).children(".bpiece").remove();
        }else {
            $(this).children(".wpiece").remove();
        }

        //to change move owner
         if(moveOwner=="w"){
             moveOwner="b";
         }else {
             moveOwner="w"
         }
    }else {
        if("w"==moveOwner){
            alert("The move belongs to White");
        }else{
            alert("The move belongs to Black");
        }

    }



}
// function checkMove(ui) {
//     disabled:false;
//     console.log("checkMove");
//     //var cellid=$(this).attr('id');
//     var pieceid=$(ui.draggable).attr('id');
//     console.log(pieceid);
//     // var color=pieceid.charAt(0);
//     //console.log((""+moveOwner)===(""+color));
//
// }



