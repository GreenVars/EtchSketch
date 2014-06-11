function generate() {
    take();
    gridSize = prompt("Size")
    var dim = (900) / gridSize;
    for (i = 0; i < gridSize; i++) {
        $("table").append("<tr><div></div></tr>");
    }
    for (i = 0; i < gridSize; i++) {
        $("tr").append("<td class='cell'><div class='tileInt'></div></td>");
    }
    $('.tileInt', "td").css("height", dim);
    $('.tileInt', "td").css("width", dim);
}

function genBasic() {
    take();
    generate();
    $('.cell').hover(function () {
        $(this).css("background-color", "black");
    });
}

function genTrail() {
    take();
    generate();
    $('.cell').hover(function () {
        $(this).fadeTo(500, .4, function () {
            $(this).fadeTo("slow", 1);
        });
    });
}


function genColors() {
    take();
    generate();
    $('.cell').hover(function () {
        $(this).css("background-color", 'rgb(' + Math.floor(Math.random() * 255) + ',' + Math.floor(Math.random() * 255) + ',' + Math.floor(Math.random() * 255) + ')');
    });
}

function genOpacity() {
    take();
    generate();
    $('.cell').hover(function () {
        var currentOpa = $(this).css("opacity");
        if (currentOpa >= 0.1) {
            $(this).css("opacity", currentOpa - 0.1);
        } else {
            $(this).css("opacity", "0");
        }
    });
}

function take() {
    $('tr').remove();
}
console.log(dim);