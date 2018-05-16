var minecraft = {};
var enabled= 0 ;
var map = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 7, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 7, 7, 7, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 7, 7, 7, 7, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 4, 4, 4, 4, 4, 0, 0, 0, 7, 7, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 4, 4, 4, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 4, 4, 4, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 4, 4, 4, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 4, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 5, 5, 0, 0, 0],
    [0, 0, 4, 4, 4, 0, 6, 0, 0, 3, 0, 0, 0, 0, 5, 5, 5, 5, 0, 0],
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
];



minecraft.start = function () {
    minecraft.layOut();
    minecraft.features();
    minecraft.featuresGround();
    minecraft.featuresGroundHerb();
    minecraft.featuresStone();
    minecraft.featuresWood();
    minecraft.featuresGreen();
}

minecraft.layOut = function () {
    for (var i = 0; i < map.length; i++) {
        for (var j = 0; j < map[i].length; j++) {
            if (map[i][j] == 1) {
                var ground = document.createElement('div');
                $('#board').append($(ground));
                $(ground).addClass('ground');
            }
            else if (map[i][j] == 2) {
                var floor = document.createElement('div');
                $('#board').append($(floor));
                $(floor).addClass('groundHerb');
            }
            else if (map[i][j] == 0) {
                var blueSky = document.createElement('div');
                $('#board').append($(blueSky));
                $(blueSky).addClass("blueSky");
            } else if (map[i][j] == 3) {
                var wood = document.createElement('div');
                $('#board').append($(wood));
                $(wood).addClass("wood");
            } else if (map[i][j] == 4) {
                var green = document.createElement('div');
                $('#board').append($(green));
                $(green).addClass("green");
            } else if (map[i][j] == 5) {
                var stone = document.createElement('div');
                $('#board').append($(stone));
                $(stone).addClass("stone");
            } else if (map[i][j] == 6) {
                var batman = document.createElement('div');
                $('#board').append($(batman));
                $(batman).addClass("batman");
            } else if (map[i][j] == 7) {
                var cloud = document.createElement('div');
                $('#board').append($(cloud));
                $(cloud).addClass("cloud");
            }
        }
    }
}

minecraft.features = function () {
    $(`#shovel`).on('click', function () {
        enabled = 1;
    })

    $(`#axe`).on('click', function () {
        enabled = 2
    })

    $(`#pioche`).on('click', function () {
        enabled = 3
    })
}


minecraft.featuresGround = function () {
        $(`.ground`).on('click', function () {
            if (enabled == 1) {
            $(this).addClass("blueSky");
            $(this).removeClass('ground');
            document.getElementById('objects').className= 'ground';
            }
        })
    }

minecraft.featuresGroundHerb = function () {
        $(`.groundHerb`).on('click', function () {
            if (enabled == 1) {
            $(this).addClass("blueSky");
            $(this).removeClass('groundHerb');
            document.getElementById('objects').className= 'groundHerb';
        }
    })
}

minecraft.featuresStone = function () {
        $(`.stone`).on('click', function () {
            if (enabled == 3) {
            $(this).addClass("blueSky");
            $(this).removeClass('stone');
            document.getElementById('objects').className= 'stone';
        }
    })
}

minecraft.featuresWood = function () {
        $(`.wood`).on('click', function () {
            if (enabled == 2) {
            $(this).addClass("blueSky");
            $(this).removeClass('wood');
            document.getElementById('objects').className= 'wood';
        }
    })
}
minecraft.featuresGreen = function () {
        $(`.green`).on('click', function () {
            if (enabled == 2) {
            $(this).addClass("blueSky");
            $(this).removeClass('green');
            document.getElementById('objects').className= 'green';
        }
    })
}




minecraft.start();


