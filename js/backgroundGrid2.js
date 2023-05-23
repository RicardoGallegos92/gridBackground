$(document).ready(function(){
    const DIMENSION_CASILLA = 300;
    const wrapper = document.getElementById("grillado");
    let filas =
    Math.round(parseInt($('body').css('height')) / DIMENSION_CASILLA);
    let columnas =
    Math.round(parseInt( $('body').css('width')) / DIMENSION_CASILLA );

//------------------------------------------------------------------------------
    const entranding = index => {
        console.log("Holita");
        $(this).css('background-color',"#e0353542");
        //$(this).animate({
        wrapper.children().animate({
            "border-width" : '8'
            }, 250
        );
    }
//------------------------------------------------------------------------------
    const desPintarCasilla = index => {
        console.log("Xaito");
        wrapper.children[index].removeAttribute("style");
    }

    const pintarCasilla = index => {
        console.log("Holita");
//        console.log("index: "+index);
//        console.log(wrapper.children[0]);
        wrapper.children[index].style.backgroundColor = "#e0353542";
    }

// casilla = tile
    const crearCasilla = index => {
        const tile = document.createElement("div");
        tile.classList.add("casilla");

        // tile.onmouseenter = e => entranding(index);
        // tile.onmouseleave = e => desPintarCasilla(index);

        tile.addEventListener("mouseenter",entranding(index));
        tile.addEventListener("mouseleave",desPintarCasilla(index));

        return tile;
    }

// casillas = tiles
    const crearCasillas = cantidad =>{
        Array.from(Array(cantidad)).map((tile, index) =>{
            wrapper.appendChild(crearCasilla(index));
        });
    }
    
    // grilla = grid
    const crearGrilla = () => {
        wrapper.innerHTML = "";

        filas =
            Math.round(parseInt($('body').css('height')) / DIMENSION_CASILLA);
        columnas =
            Math.round(parseInt( $('body').css('width')) / DIMENSION_CASILLA );

        wrapper.style.setProperty("--columnas", columnas);
        wrapper.style.setProperty("--filas", filas);

        crearCasillas(filas * columnas);
    }



    window.onresize = () => crearGrilla();

    crearGrilla();
    console.log("Filas: "+filas);
    console.log("Columas: "+columnas);
});