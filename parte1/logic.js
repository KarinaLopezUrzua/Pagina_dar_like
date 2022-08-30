//que aumente de numero dando un click con document.querySelector();  ese es su nombre
//en el parentesis colocamos el elemento

var x = 0;

function darLike() {
        x = x + 1;
        document.querySelector(".like span").innerHTML = x;
}

