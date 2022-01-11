(function (){

    /* ENTRADAS TRASPASO 1 */
    var padre = document.getElementsByClassName("traspaso1")[0].parentNode;
    var primerElemento = document.getElementsByClassName("traspaso1")[0];
    var padre2 = document.getElementsByClassName("traspaso2")[0];

    /* ENTRADAS TRASPASO 2 */
    var padre3 = document.getElementsByClassName("traspaso2")[0].parentNode;
    var primerElemento3 = document.getElementsByClassName("traspaso2")[0];
    var padre4 = document.getElementsByClassName("traspaso1")[0];

    /* traspaso 1 */

    var traspaso = function () {
        padre.replaceChild(padre2, primerElemento);
        padre2.className = "block"
    }
    
    var opcion = document.getElementsByClassName("derecha")[0].parentNode;
    derecha.addEventListener("click", traspaso);
    

    /* traspaso 2 */

    var traspaso2 = function () {
        padre3.replaceChild(padre4, primerElemento3);
    }
    
    var opcion = document.getElementsByClassName("izquierda2")[0].parentNode;
    izquierda2.addEventListener("click", traspaso2);

}())
