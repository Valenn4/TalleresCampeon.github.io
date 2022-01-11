
(function(){

    /* QUIZ1 */
    var click = function (){
        Swal.fire({
            title:'¡Respuesta incorrecta!',
            icon: 'error',
        })
    }

    var opcion = document.getElementById("opcion1");
    opcion1.addEventListener("click", click);

    /* ---------- */
    var quiz = document.getElementsByClassName("quiz")[0].parentNode;
    var quizElemento = document.getElementsByClassName("quiz")[0];
    var quiz2 = document.getElementsByClassName("quiz2")[0];

    var click = function (){
        Swal.fire({
            title:'¡Respuesta correcta!',
            icon: 'success',
        })
        quiz.replaceChild(quiz2, quizElemento);
        quiz2.className = "block"

        
    }
    var opcion = document.getElementById("opcion2");
    opcion2.addEventListener("click", click);



    /* ---------- */


    var click = function (){
        Swal.fire({
            title:'¡Respuesta incorrecta!',
            icon: 'error',
        })
    }

    var opcion = document.getElementById("opcion3");
    opcion3.addEventListener("click", click);


    /* ---------- */


    var click = function (){
        Swal.fire({
            title:'¡Respuesta incorrecta!',
            icon: 'error',
        })
    }

    var opcion4 = document.getElementById("opcion4");
    opcion4.addEventListener("click", click);

    

    /* QUIZ 2 */

    var click = function (){
        Swal.fire({
            title:'¡Respuesta incorrecta!',
            icon: 'error',
        })
    }

    var opcion = document.getElementById("opcion11");
    opcion11.addEventListener("click", click);

    /* ---------- */
    var quiz = document.getElementsByClassName("quiz")[0].parentNode;
    var quizElemento = document.getElementsByClassName("quiz")[0];
    var quiz2 = document.getElementsByClassName("quiz2")[0];


    var click = function (){
        Swal.fire({
            title:'¡Respuesta incorrecta!',
            icon: 'error',
        })
        
    }
    
    var opcion = document.getElementById("opcion22");
    opcion22.addEventListener("click", click);
    


    /* ---------- */


    var click = function (){
        Swal.fire({
            title:'¡Respuesta incorrecta!',
            icon: 'error',
        })
    }

    var opcion = document.getElementById("opcion33");
    opcion33.addEventListener("click", click);


    /* ---------- */


    var click = function (){
        Swal.fire({
            title:'¡Respuesta correcta!',
            icon: 'success',
        })
    }

    var opcion4 = document.getElementById("opcion44");
    opcion44.addEventListener("click", click);
}())


