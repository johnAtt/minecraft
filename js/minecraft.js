var minecraft = {};
var enabled = 0; var batmanItem = 0; var woodItem = 0; var stoneItem = 0; var groundItem = 0; var greenItem = 0; var groundHerbItem = 0;
var map = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 7, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 7, 7, 7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 7, 7, 7, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 7, 7, 7, 7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 7, 7, 7, 7, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 4, 4, 4, 4, 4, 0, 0, 0, 7, 7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 4, 4, 4, 0, 0, 0, 7, 7, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 4, 4, 4, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 4, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 4, 4, 4, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 4, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 4, 4, 4, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 4, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 4, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 5, 5, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 5, 5, 0, 0, 0],
    [0, 0, 4, 4, 4, 0, 0, 0, 0, 3, 0, 0, 0, 0, 5, 5, 5, 5, 0, 0, 0, 0, 4, 4, 4, 0, 6, 0, 0, 3, 0, 0, 0, 0, 5, 5, 5, 5, 0, 0],
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
];


minecraft.start = function () {
    minecraft.layOut();
    minecraft.newBg();
    minecraft.features();
    minecraft.inventory();
    minecraft.characters();
}

minecraft.layOut = function () {
    for (var i = 0; i < map.length; i++) {
        for (var j = 0; j < map[i].length; j++) {
            if (map[i][j] == 1) {
                var ground = document.createElement('div');
                $('#board').append($(ground));
                $(ground).addClass('ground');
                $(ground).addClass('draw');
                $(ground).data('Hcoordonate', i);
                $(ground).data('Vcoordonate', j);
                $(ground).attr('id', '' + i + '-' + j);

            }
            else if (map[i][j] == 2) {
                var floor = document.createElement('div');
                $('#board').append($(floor));
                $(floor).addClass('groundHerb');
                $(floor).addClass('draw');
                $(floor).data("Hcoordonate", i);
                $(floor).data("Vcoordonate", j);
                $(floor).attr('id', i + '-' + j);
            }
            else if (map[i][j] == 0) {
                var blueSky = document.createElement('div');
                $('#board').append($(blueSky));
                $(blueSky).addClass("blueSky");
                $(blueSky).addClass('draw');
                $(blueSky).data("Hcoordonate", i);
                $(blueSky).data("Vcoordonate", j);
                $(blueSky).attr('id', i + '-' + j);
            } else if (map[i][j] == 3) {
                var wood = document.createElement('div');
                $('#board').append($(wood));
                $(wood).addClass("wood");
                $(wood).addClass('draw');
                $(wood).data("Hcoordonate", i);
                $(wood).data("Vcoordonate", j);
                $(wood).attr('id', i + '-' + j);
            } else if (map[i][j] == 4) {
                var green = document.createElement('div');
                $('#board').append($(green));
                $(green).addClass("green");
                $(green).addClass('draw');
                $(green).data("Hcoordonate", i);
                $(green).data("Vcoordonate", j);
                $(green).attr('id', i + '-' + j);
            } else if (map[i][j] == 5) {
                var stone = document.createElement('div');
                $('#board').append($(stone));
                $(stone).addClass("stone");
                $(stone).addClass('draw');
                $(stone).data("Hcoordonate", i);
                $(stone).data("Vcoordonate", j);
                $(stone).attr('id', i + '-' + j);
            } else if (map[i][j] == 6) {
                var batman = document.createElement('div');
                $('#board').append($(batman));
                $(batman).addClass("batman");
                $(batman).addClass('draw');
                $(batman).data("Hcoordonate", i);
                $(batman).data("Vcoordonate", j);
                $(batman).attr('id', i + '-' + j);
            } else if (map[i][j] == 7) {
                var cloud = document.createElement('div');
                $('#board').append($(cloud));
                $(cloud).addClass("cloud");
                $(cloud).addClass('draw');
                $(cloud).data("Hcoordonate", i);
                $(cloud).data("Vcoordonate", j);
                $(cloud).attr('id', i + '-' + j);
            }
        }
    }
}

minecraft.features = function () {

    $(`#shovel`).on('click', function () {
        enabled = 1;
        $('#board').removeClass()
        $('#board').addClass("shovel")
    })

    $(`#axe`).on('click', function () {
        enabled = 2
        $('#board').removeClass();
        $('#board').addClass("axe");
    })

    $(`#pioche`).on('click', function () {
        enabled = 3;
        $('#board').removeClass();
        $('#board').addClass("pioche");
    })
    $(`#objects`).on('click', function () {
        $('#board').removeClass();
        $('#board').addClass("hand");
        enabled = 4
    })

    $(`#shear`).on('click', function () {
        enabled = 5;
        $('#board').removeClass()
        $('#board').addClass("shear")
    })

    $(`#gun`).on('click', function () {
        enabled = 6;
        $('#board').removeClass()
        $('#board').addClass("gun")
    })

    $(`.ground`).on('click', function () {
        if (enabled === 1) {
            $(this).addClass("blueSky");
            $(this).removeClass('ground');
            document.getElementById('objects').className = 'ground';
            document.getElementById('objects1').className = 'ground';
            groundItem++
            $(".text-content1").text(`${groundItem}`);
        }
    })

    $(`.groundHerb`).on('click', function () {
        if (enabled === 1) {
            $(this).addClass("blueSky");
            $(this).removeClass('groundHerb');
            document.getElementById('objects').className = 'groundHerb';
            document.getElementById('objects2').className = 'groundHerb';
            groundHerbItem++
            $(".text-content2").text(`${groundHerbItem}`);
        }
    })


    $(`.stone`).on('click', function () {
        if (enabled === 3) {
            $(this).addClass("blueSky");
            $(this).removeClass('stone');
            document.getElementById('objects').className = 'stone';
            document.getElementById('objects3').className = 'stone';
            stoneItem++
            $(".text-content3").text(`${stoneItem}`);
        }
    })



    $(`.wood`).on('click', function () {
        if (enabled === 2) {
            $(this).addClass("blueSky");
            $(this).removeClass('wood');
            document.getElementById('objects').className = 'wood';
            document.getElementById('objects4').className = 'wood';
            woodItem++;
            $(".text-content4").text(`${woodItem}`);
        }
    })

    $(`.green`).on('click', function () {
        if (enabled === 5) {
            $(this).addClass("blueSky");
            $(this).removeClass('green');
            document.getElementById('objects').className = 'green';
            document.getElementById('objects0').className = 'green';
            greenItem++
            $(".text-content0").text(`${greenItem}`);
        }
    })

    $(`.batman`).on('click', function () {
        if (enabled === 6) {
            $(this).addClass("blueSky");
            $(this).removeClass('batman');
            document.getElementById('objects').className = 'batman';
            document.getElementById('objects5').className = 'batman';
            batmanItem++
            $(".text-content5").text(`${batmanItem}`);
        }
    })

}

minecraft.newBg = function () {
    $(`.draw`).on('click', function () {
        if (enabled == 4 && this.className == "blueSky draw" || this.className == "draw blueSky") {
            var i = $(this).data("Hcoordonate");
            var j = $(this).data("Vcoordonate");
            if (!$("#" + (i + 1) + "-" + j).hasClass("blueSky")) {
                var bg = document.getElementById('objects').className;

                if (bg == "green" && greenItem > 0) {
                    $(this).removeClass("blueSky");
                    $(this).addClass(`${bg}`)
                    greenItem--
                    $(".text-content0").text(`${greenItem}`);

                    $(this).on('click', function () {
                        if (enabled === 5) {
                            $(this).addClass("blueSky");
                            $(this).removeClass('green');
                            document.getElementById('objects').className = 'green';
                            document.getElementById('objects0').className = 'green';
                            greenItem++
                            $(".text-content0").text(`${greenItem}`);
                        }
                    })

                } else if (bg == "ground" && groundItem > 0) {
                    $(this).removeClass("blueSky");
                    $(this).addClass(`${bg}`)
                    groundItem--
                    $(".text-content1").text(`${groundItem}`);

                    $(this).on('click', function () {
                        if (enabled === 1) {
                            $(this).addClass("blueSky");
                            $(this).removeClass('ground');
                            document.getElementById('objects').className = 'ground';
                            document.getElementById('objects1').className = 'ground';
                            groundItem++
                            $(".text-content1").text(`${groundItem}`);
                        }
                    })

                } else if (bg == "groundHerb" && groundHerbItem > 0) {
                    $(this).removeClass("blueSky");
                    $(this).addClass(`${bg}`)
                    groundHerbItem--
                    $(".text-content2").text(`${groundHerbItem}`);

                    $(this).on('click', function () {
                        if (enabled === 1) {
                            $(this).addClass("blueSky");
                            $(this).removeClass('groundHerb');
                            document.getElementById('objects').className = 'groundHerb';
                            document.getElementById('objects2').className = 'groundHerb';
                            groundHerbItem++
                            $(".text-content2").text(`${groundHerbItem}`);
                        }
                    })

                } else if (bg == "stone" && stoneItem > 0) {
                    $(this).removeClass("blueSky");
                    $(this).addClass(`${bg}`)
                    stoneItem--
                    $(".text-content3").text(`${stoneItem}`);

                    $(this).on('click', function () {
                        if (enabled === 3) {
                            $(this).addClass("blueSky");
                            $(this).removeClass('stone');
                            document.getElementById('objects').className = 'stone';
                            document.getElementById('objects3').className = 'stone';
                            stoneItem++
                            $(".text-content3").text(`${stoneItem}`);
                        }
                    })
                } else if (bg == "wood" && woodItem > 0) {
                    $(this).removeClass("blueSky");
                    $(this).addClass(`${bg}`)
                    woodItem--
                    $(".text-content4").text(`${woodItem}`);

                    $(this).on('click', function () {
                        if (enabled === 2) {
                            $(this).addClass("blueSky");
                            $(this).removeClass('wood');
                            document.getElementById('objects').className = 'wood';
                            document.getElementById('objects4').className = 'wood';
                            woodItem++;
                            $(".text-content4").text(`${woodItem}`);
                        }
                    })

                } else if (bg == "batman" && batmanItem > 0) {
                    $(this).removeClass("blueSky");
                    $(this).addClass(`${bg}`)
                    batmanItem--
                    $(".text-content5").text(`${batmanItem}`);

                    $(this).on('click', function () {
                        if (enabled === 6) {
                            $(this).addClass("blueSky");
                            $(this).removeClass('batman');
                            document.getElementById('objects').className = 'batman';
                            document.getElementById('objects5').className = 'batman';
                            batmanItem++;
                            $(".text-content5").text(`${batmanItem}`);
                        }
                    })

                }
            }
        }
    })
}

minecraft.inventory = function () {
    $('#objects5').on('click', function () {
        document.getElementById('objects').className = 'batman';
    })
    $('#objects4').on('click', function () {
        document.getElementById('objects').className = 'wood';
    })
    $('#objects3').on('click', function () {
        document.getElementById('objects').className = 'stone';
    })
    $('#objects2').on('click', function () {
        document.getElementById('objects').className = 'groundHerb';
    })
    $('#objects1').on('click', function () {
        document.getElementById('objects').className = 'ground';
    })
    $('#objects0').on('click', function () {
        document.getElementById('objects').className = 'green';
    })
}

minecraft.characters = function () {
    window.addEventListener('keydown', function (event) {
        var key = event.key;
        for (var i = 0; i < map.length; i++) {
            for (var j = 0; j < map[i].length; j++) {
                if (key === "ArrowLeft") {
                    if ($("#" + (i) + "-" + j).hasClass("batman draw")) {
                        $("#" + (i) + "-" + j).removeClass("batman draw");
                        if ($("#" + (i) + "-" + (j - 1)).hasClass("blueSky draw"));
                        $("#" + (i) + "-" + (j - 1)).removeClass("blueSky draw");
                        $("#" + (i) + "-" + (j - 1)).addClass("batman");
                        return;
                    }
                }
            }
        }
    })
}

$(`#startGame`).on('click', function () {
    $('.startPage').css({
        "display": "none"
    })
    $('.mainPage').css({
        "display": "block"
    })
    minecraft.start();
})