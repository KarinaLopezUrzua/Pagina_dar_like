var x = 0;
var y = 0;
var z = 0;

function darLike(identificador_likes) {

    if (identificador_likes == "numero_likes_1") {
        x = x + 1;
        document.querySelector("#" + identificador_likes).innerHTML = x;
    }
    else if (identificador_likes == "numero_likes_2") {
        y = y + 1;
        document.querySelector("#" + identificador_likes).innerHTML = y;
    }
    else if (identificador_likes == "numero_likes_3") {
        z = z + 1;
        document.querySelector("#" + identificador_likes).innerHTML = z;
    }
}

