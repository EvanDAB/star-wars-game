//maybe try using data balues here
var selection;
var selectionName;
var dispE = $('.enemies');

var health, attackPower, counterAP;

$('#attack-button').on('click', function (){
    var enemy = $('enemy');
    health = enemy.data('hp');
    alert(enemy[0].data('hp'));

    var enemyName = enemy.data('name');
    alert('You are facing ' + enemyName);
})

$(document).on('click', '.character', function () {
    selection = $(this).addClass('player').removeClass('character');
    selectionName = selection.data('name') 
    alert('You selected ' + selectionName);
    $('.character-selected').append(selection);
   
    dispE.append($('.character').removeClass('character').addClass('enemy').css({border: '10px red solid'}));
});

//player health goes down
