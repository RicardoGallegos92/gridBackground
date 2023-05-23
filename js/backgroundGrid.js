$(document).ready(function(){
    const DIMENSION_CASILLA = 40;
    const DELAY_ANIMACION = 125;
    const CASILLA = '<div class="casilla"></div>';

    function entranding(){
//        $(this).css('background-color',"#e0353542");
        $(this).animate({
            "border-width" : '6'
            }, DELAY_ANIMACION
        );
    }

    function saliending(){
        $(this).stop(false, true);
        $(this).animate({
                "border-width" : '2'
            }, DELAY_ANIMACION
            ,   function(){
                    $(this).removeAttr('style');
                }
        );
    }

    function ponerAnimacion() {
        $("#grillado").children().bind("mouseenter",entranding);
        $("#grillado").children().bind("mouseleave",saliending);
    }

    function borrarHijos() {
        $("#grillado").empty();
    }

    function asignarVariables(filas, columnas){
        $(":root").css('--filas', filas);
        $(":root").css('--columnas', columnas);

        console.log("Height :"+filas);
        console.log("Width :"+columnas);
        console.log("Casillas :"+columnas*filas);
    }

    function crearGrilla(filas, columnas){
        let cantidad = filas * columnas;
        for (let index = 0; index < cantidad; index++) {
            $("#grillado").append(CASILLA);
        }
//        console.log("Lizz Taylor");
    }

    function calcularGrilla(){
        const filas = Math.round(parseInt($('#grillado').css('height')) / DIMENSION_CASILLA);
        const columnas = Math.round(parseInt( $('#grillado').css('width')) / DIMENSION_CASILLA );
        return {filas, columnas};
    }

    function prepararTodo() {
        borrarHijos();
        let filCol = calcularGrilla();
        asignarVariables(filCol.filas, filCol.columnas);
        crearGrilla(filCol.filas, filCol.columnas);
        ponerAnimacion();
    }

    $(window).on('resize',function(){
        prepararTodo();
    });
    


    prepararTodo();

});
