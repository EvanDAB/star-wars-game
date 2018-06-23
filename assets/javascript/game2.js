//No Array
var dispE, health, attackPower, counterAP, rey, mace, kylo, star, playerH, playerA, defenderC, defenderH, fightProgress;

$(document).ready(function () {
    dispE = $('.enemies');
    image = $('.character');
    attackPower = 0;
    rey = $('#rey').attr('data-hp');
    $('#rey').text(rey);
    console.log(rey);
    mace = $('#mace-windu').attr('data-hp');
    $('#mace-windu').text(mace);
    kylo = $('#kylo-ren').attr('data-hp');
    $('#kylo-ren').text(kylo);
    star = $('#starKiller').attr('data-hp');
    $('#starKiller').text(star);
    // playerH = $('.player').contents().filter('p').attr('data-hp'); -doesnt do anything to solve the problem
})


$(document).on('click','.character', function assignCharacter () {
    var player = $(this);
    player.removeClass('character');
    player.addClass('player');
    player.attr('data-hp');
    playerH = $('.player').contents().filter('p').attr('data-hp');
    
    if($('.character-selected').text() == '') $('.character-selected').append(player);
    if (dispE.text() == '') {
        dispE.append($('.character'));
        $('.character').addClass('enemy');
    }

});

$(document).on('click', '.enemy', function assignDefender() {
    var defender = $(this).addClass('defender');
    // took away the player class from defender
    defender.removeClass('player');
    //
    if ($("#defender").text() == '') {
        $("#defender").append(defender);
    }  
    defenderH = $('.defender').contents().filter('p').attr('data-hp');
    playerA = $('.player').contents().filter('p').attr('data-attack');
    defenderC = $('.defender').contents().filter('p').attr('data-counter');
    defenderN = $('.defender').contents().filter('p').attr('data-name');
    
});

$(document).on('click', '#attack-button', function (){
    //player and defender health
    playerH = parseInt(playerH) - parseInt(defenderC);
    
    // $('.player').contents().filter('p').attr('data-hp', playerH);
    attackPower = parseInt(attackPower) + parseInt(playerA);
    defenderH = parseInt(defenderH) - parseInt(attackPower);
     
    fightProgress = $('#fightProgress');
    fightProgress.html(
        'You attacked ' + defenderN + ' for ' + attackPower + ' points.' + '<br>' +
         defenderN + ' counterattacked for ' + defenderC + ' points.'
        );
    if(defenderH <= 0) {
        alert(`You killed ${defenderN}`);
        $('.defender').remove('.defender');
        fightProgress.html(
            'You killed ' + defenderN + ' for ' + attackPower + ' points. ' + '<br>' +
             defenderN + `'s final counter attack was ` + defenderC + ' points. ' + '<br>' +
             "Who's Next?"
            );
        }
        $('.player').contents().filter('p').attr('data-hp', playerH);
        $('.player').contents().filter('p').text(playerH);
        $('.defender').contents().filter('p').text(defenderH);  
    //now make sure player health doubles everytime you click it

});



