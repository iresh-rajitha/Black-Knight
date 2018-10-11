var correctCards = 0;
$( init );

function init() {

    // Hide the success message
    $('#successMessage').hide();
    $('#successMessage').css( {
        left: '580px',
        top: '250px',
        width: 0,
        height: 0
    } );

    // Reset the game
    correctCards = 0;
    $('#cardPile').html( '' );
    $('#cardSlots').html( '' );

    // Create the pile of shuffled cards
    var numbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
    numbers.sort( function() { return Math.random() - .5 } );

    for ( var i=0; i<10; i++ ) {
        $('<div>' + numbers[i] + '</div>').data( 'number', numbers[i] ).attr( 'id', 'card'+numbers[i] ).appendTo( '#cardPile' ).draggable( {
            containment: '#content',
            stack: '#cardPile div',
            cursor: 'move',
            revert: true
        } );
    }

    // Create the card slots
    var words = [ 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten' ];
    for ( var i=1; i<=10; i++ ) {
        $('<div>' + words[i-1] + '</div>').data( 'number', i ).appendTo( '#cardSlots' ).droppable( {
            accept: '#cardPile div',
            hoverClass: 'hovered',
            drop: handleCardDrop
        } );
    }

}