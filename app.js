function setup(){

    $('.breaddd').hide();
    $('.Search').hide();

    var words = ["cat", "dog", "rat", "mouse", "hamster"]

    var random = words[Math.floor(Math.random() * 5)];



    $('#start').click(function(){

        $('.breaddd').show();

        $('#wordran').html(random);

        if (random === "cat") {
            $('#defini').html("Definition: a small domesticated carnivorous mammal with soft fur, a short snout and retractile claws. Normally kept as a pet.");
            $('#pronounce').html("Pronunciation: /kat/");
        }
        if (random === "dog") {
            $('#defini').html("Definition: a domesticated carnivorous mammal that typically has a long snout, an acute sense of smell, and a barking, howling, or whining voice. It is widely kept as a pet or for work or field sports.");
            $('#pronounce').html("Pronunciation: /dog/");
        }
        if (random === "hamster") {
            $('#defini').html("Definition: a solitary burrowing rodent with a short tail and large cheek pouches for carrying food, native to Europe and northern Asia.");
            $('#pronounce').html("Pronunciation: /hamster/");
        }
        if (random === 'mouse') {
            $('#defini').html("Definition: a small rodent that typically has a pointed snout, relatively large ears and eyes, and a long tail.");
            $('#pronounce').html("Pronunciation: /mous/");
        } if (random === "rat") {
            $('#defini').html("Definition: a rodent that resembles a large mouse, typically having a pointed snout and a long, sparsely haired tail. Some kinds have become cosmopolitan and are sometimes responsible for transmitting diseases.");
            $('#pronounce').html("Pronunciation: /rat/");
        }

        $('#start').hide();
    })

   
    $.ajax({
        url: 'https://od-api.oxforddictionaries.com:443/api/v1/entries/en/jaguar',
        
        success: function (data) {
            console.log(data);
        }
    });

    $('#practice').click(function(){
        $('#wordran').empty();
        $('#pronounce').empty();
        $('.Search').show();
    })

    $('#new').click(function () {
        var random = words[Math.floor(Math.random() * 5)];

        $('#wordran').html(random);

        if (random === "cat") {
            $('#defini').html("Definition: a small domesticated carnivorous mammal with soft fur, a short snout and retractile claws. Normally kept as a pet.");
            $('#pronounce').html("Pronunciation: /kat/");
        }
        if (random === "dog") {
            $('#defini').html("Definition: a domesticated carnivorous mammal that typically has a long snout, an acute sense of smell, and a barking, howling, or whining voice. It is widely kept as a pet or for work or field sports.");
            $('#pronounce').html("Pronunciation: /dog/");
        }
        if (random === "hamster") {
            $('#defini').html("Definition: a solitary burrowing rodent with a short tail and large cheek pouches for carrying food, native to Europe and northern Asia.");
            $('#pronounce').html("Pronunciation: /hamster/");
        }
        if (random === 'mouse') {
            $('#defini').html("Definition: a small rodent that typically has a pointed snout, relatively large ears and eyes, and a long tail.");
            $('#pronounce').html("Pronunciation: /mous/");
        } if (random === "rat") {
            $('#defini').html("Definition: a rodent that resembles a large mouse, typically having a pointed snout and a long, sparsely haired tail. Some kinds have become cosmopolitan and are sometimes responsible for transmitting diseases.");
            $('#pronounce').html("Pronunciation: /rat/");
        }

        $('.Search').hide();
    })
}



$(document).ready(setup);