$(function () {
});

$('#aquivanlosnombres').hide();
$('#elcargador').hide();

recuperaDatos();

function llamaguardardatos(){

    var elnombre = $("#elnombred").val();

    if(elnombre==''){
        alert('El nombre no puede estar en vacío');
        return false;
    }

    $('#elcargador').show();

    guardardatos(elnombre);

}

function guardardatos(elnombre){

    return new Promise((tratardatos, reject) => {
        $.ajax({
            url: 'phps/nuevo.php',
            type: 'POST',
            data: {
                elnombre: elnombre
            },
            success: function (json) {
                
                console.log(json.data.info[0]);

                $("#modalpreguntaactivard").modal('hide');

                $("#aquivanlosnombres").animate({opacity: '0.25'}, 500, function(){

                    $(this).animate({opacity: '1'}, 750, function(){

                        $('#elcargador').hide();

                        recuperaDatos();

                    });
                });

                //tratardatos(json)
            },
            error: function (error) {
                console.log(error)
                //reject(error)
            },
        })
    });

}

function muestraguardardatos(){

    $("#modalpreguntaactivard").modal('show');

}

function llamaeditadatos(){

    var elid = $("#elidc").val();
    var elrenglon = $("#elrenglonc").val();
    var elnombre = $("#elnombrec").val();
    var elindex = $("#elindexc").val();

    if(elnombre==''){
        alert('El nombre no puede estar en vacío');
        return false;
    }

    $('#elcargador').show();

    editadatos(elid, elrenglon, elnombre, elindex);

}

function editadatos(elid, elrenglon, elnombre, elindex){

    return new Promise((tratardatos, reject) => {
        $.ajax({
            url: 'phps/edita.php',
            type: 'POST',
            data: {
                elid: elid,
                elrenglon: elrenglon,
                elnombre: elnombre
            },
            success: function (json) {
                
                console.log(json.data.info[0])

                var elE = json.data.info[0].renglon;

                //$(elE).hide();
                $("#modalpreguntaactivarc").modal('hide');

                $(elE).animate({opacity: '0.5'}, 250, function(){

                    $(elE).animate({opacity: '1'}, 500, function(){

                        var elE = `#aquivaelnombre${elindex}`;

                        $(elE).text(elnombre);

                        elE = `#opcionA${elindex}`;

                        $(elE).attr("data-elnombre", elnombre);

                        elE = `#opcionB${elindex}`;

                        $(elE).attr("data-elnombre", elnombre);

                        elE = `#opcionC${elindex}`;

                        $(elE).attr("data-elnombre", elnombre);

                        $('#elcargador').hide();

                        $(elE).removeClass("blur");

                        $('#elcargador').hide();

                    });
                });

                //tratardatos(json)
            },
            error: function (error) {
                console.log(error)
                //reject(error)
            },
        })
    });

}

function muestraeditar(obj){

    console.log(obj);

    var elnombre = obj.elnombre;

    $("#elrenglonc").val(obj.elrenglon);
    $("#elidc").val(obj.elid);
    $("#elnombrec").val(elnombre);
    $("#elindexc").val(obj.elindex);

    $(obj.elrenglon).addClass("blur");
    
    $("#modalpreguntaactivarc").modal('show');

}

function llamaeliminar(){

    var elid = $("#elidb").val();
    var elrenglon = $("#elrenglonb").val();

    $('#elcargador').show();

    elimina(elid, elrenglon);

}

function elimina(elid, elrenglon) {

    return new Promise((tratardatos, reject) => {
        $.ajax({
            url: 'phps/elimina.php',
            type: 'POST',
            data: {
                elid: elid,
                elrenglon: elrenglon
            },
            success: function (json) {
                
                //console.log(json.data.info[0])

                var elE = elrenglon;

                $("#modalpreguntaactivarb").modal('hide');

                $(elE).animate({opacity: '0', height: '0'}, 333, 'swing', function(){

                    $(elE).remove();

                    $('#elcargador').hide();

                });

                //tratardatos(json)
            },
            error: function (error) {
                console.log(error)
                //reject(error)
            },
        })
    });
}

function preguntaeliminar(obj){

    // console.log(obj);

    var elnombre = obj.elnombre;
    var pregunta = `Esta acción eliminara a <strong>${elnombre}.</strong> ¿Está usted seguro?`;

    $("#elrenglonb").val(obj.elrenglon);
    $("#elidb").val(obj.elid);

    $(obj.elrenglon).addClass("blur");
    
    $("#preguntaactivarb").html(pregunta);
    $("#modalpreguntaactivarb").modal('show');

}

function preguntaactivar(obj){

    console.log(obj);

    var activarodes = obj.estaactivo;
    var elnombre = obj.elnombre;
    var pregunta = `Realmente desea ${activarodes} a <strong>${elnombre}?</strong>`;

    $("#elrenglon").val(obj.elrenglon);
    $("#elid").val(obj.elid);
    $("#activodesactivo").val(obj.estaactivo);
    $("#elnombre").val(obj.elnombre);
    $("#elindex").val(obj.elindex);

    //var elEle = obj.elrenglon;
    $(obj.elrenglon).addClass("blur");
    
    $("#preguntaactivar").html(pregunta);
    $("#modalpreguntaactivar").modal('show');
    
    /* var activarodes = obj.estaactivo;
    var elnombre = obj.elnombre;
    var pregunta = `Realmente desea ${activarodes} a "${elnombre}" ?`;
    
    var activar = confirm(pregunta);
    
    if (activar) {
        //proceed
    } else {
        //don't proceed
    } */

}


function llamaactivar(){
    
    var elid = $("#elid").val();
    var elrenglon = $("#elrenglon").val();
    var activodesactivo = $("#activodesactivo").val();
    var elnombre = $("#elnombre").val();
    var elindex = $("#elindex").val();

    $('#elcargador').show();

    activa(elid, elrenglon, activodesactivo, elnombre, elindex);
}

function activa(elid, elrenglon, activodesactivo, elnombre, elindex) {

    return new Promise((tratardatos, reject) => {
        $.ajax({
            url: 'phps/activa.php',
            type: 'POST',
            data: {
                elid: elid,
                elrenglon: elrenglon,
                activodesactivo: activodesactivo,
                elnombre: elnombre
            },
            success: function (json) {
                
                console.log(json.data.info[0])

                var elE = json.data.info[0].renglon;

                //$(elE).hide();
                $("#modalpreguntaactivar").modal('hide');

                $(elE).animate({opacity: '0.5'}, 250, function(){

                    $(elE).animate({opacity: '1'}, 500, function(){

                        var estaactivo = ``;
                        var colorestaactivo = ``;
                        var iconestaactivo = ``;

                        if(activodesactivo=='Activar'){

                            estaactivo = `Desactivar`;
                            colorestaactivo = `text-success`;
                            iconestaactivo = `bi bi-check-circle`;

                        }
                        else{

                            estaactivo = `Activar`;
                            colorestaactivo = `text-danger`;
                            iconestaactivo = `bi bi-x-circle`;

                        }

                        var lacadena = `

                            <span><i class="${iconestaactivo} ${colorestaactivo}"></i> <span id="aquivaelnombre${elindex}">${elnombre}</span></span>

                            <div class="btn-group dropstart">

                                <button role="button" type="button" class="btn btn-sm btn-outline-dark" data-bs-toggle="dropdown"> 
                                    <i class="bi bi-list"></i>
                                </button>


                                <ul class="dropdown-menu">
                                    <li><a id="opcionA${elindex}" data-estaactivo = "${estaactivo}" data-elnombre = "${elnombre}" data-elindex="${elindex}" data-elrenglon="#renglon${elindex}" data-elid="${elid}" onclick="muestraeditar(this.dataset)" class="dropdown-item" href="#"><i class="bi bi-pencil-square"></i> Editar</a></li>
                                    <li><a id="opcionB${elindex}" data-elnombre = "${elnombre}" data-elindex="${elindex}" data-elrenglon="#renglon${elindex}" data-elid="${elid}" onclick="preguntaeliminar(this.dataset)" class="dropdown-item" href="#"><i class="bi bi-trash"></i> Eliminar</a></li>
                                    <li><a id="opcionC${elindex}" data-estaactivo = "${estaactivo}" data-elnombre = "${elnombre}" data-elindex="${elindex}" data-elrenglon="#renglon${elindex}" data-elid="${elid}" onclick="preguntaactivar(this.dataset)" class="dropdown-item" href="#"><i class="bi bi-record-circle"></i> ${estaactivo}</a></li>
                                </ul>

                            </div>

                        `;

                        $(elE).html(lacadena);

                        $('#elcargador').hide();

                        $(elE).removeClass("blur");

                    });
                });

                /* $(elE).fadeOut(250, 'swing', function () {

                    $(elE).fadeIn(1000, 'swing', function () {

                    });

                }); */

                //tratardatos(json)
            },
            error: function (error) {
                console.log(error)
                //reject(error)
            },
        })
    });
}

function recuperaDatos() {

    $('#elcargador').show();

    return new Promise((tratardatos, reject) => {
        $.ajax({
            url: 'phps/rdatos.php',
            type: 'POST',
            data: {
                x: false,
            },
            success: function (json) {
                //console.log(data)
                tratardatos(json)
            },
            error: function (error) {
                //console.log(error)
                reject(error)
            },
        })

        function tratardatos(json) {

            console.log(json);

            var lacadena = ``;

            json.data.nombres.forEach(function (item, index) {

                //console.log(item);

                var estaactivo = ``;
                var colorestaactivo = ``;
                var iconestaactivo = ``;

                if(item.activo==0){

                    estaactivo = `Activar`;
                    colorestaactivo = `text-danger`;
                    iconestaactivo = `bi bi-x-circle`;

                }
                else{

                    estaactivo = `Desactivar`;
                    colorestaactivo = `text-success`;
                    iconestaactivo = `bi bi-check-circle`;

                }

                lacadena += `

                    <li id="renglon${index}" class="list-group-item d-flex justify-content-between align-items-center">
                        
                        <span><i class="${iconestaactivo} ${colorestaactivo}"></i> <span id="aquivaelnombre${index}">${item.nombre}</span></span>

                        <div class="btn-group dropstart">

                            <button role="button" type="button" class="btn btn-sm btn-outline-dark" data-bs-toggle="dropdown"> 
                                <i class="bi bi-list"></i>
                            </button>


                            <ul class="dropdown-menu">
                                <li><a id="opcionA${index}" data-estaactivo = "${estaactivo}" data-elnombre = "${item.nombre}" data-elindex="${index}" data-elrenglon="#renglon${index}" data-elid="${item.elid}" onclick="muestraeditar(this.dataset)" class="dropdown-item" href="#"><i class="bi bi-pencil-square"></i> Editar</a></li>
                                <li><a id="opcionB${index}" data-elnombre = "${item.nombre}" data-elindex="${index}" data-elrenglon="#renglon${index}" data-elid="${item.elid}" onclick="preguntaeliminar(this.dataset)" class="dropdown-item" href="#"><i class="bi bi-trash"></i> Eliminar</a></li>
                                <li><a id="opcionC${index}" data-estaactivo = "${estaactivo}" data-elnombre = "${item.nombre}" data-elindex="${index}" data-elrenglon="#renglon${index}" data-elid="${item.elid}" onclick="preguntaactivar(this.dataset)" class="dropdown-item" href="#"><i class="bi bi-record-circle"></i> ${estaactivo}</a></li>
                            </ul>

                        </div>

                    </li>

                `;

                //console.log(index + ' - ' + (json.data.nombres.length-1));

                if (index == (json.data.nombres.length - 1)) {

                    //console.log(lacadena)

                    /* var cadenaFinal = `
                        <h6 class="border-bottom pb-2 mb-0">Nombres</h6>
                        ${lacadena}
                    `; */

                    $('#aquivanlosnombres').hide();
                    $("#aquivanlosnombres").empty();
                    $("#aquivanlosnombres").append(lacadena);
                    $('#aquivanlosnombres').fadeIn(1000, 'swing', function () {

                        /* json.data.nombres.forEach(function (itemb, indexb) {

                            var elE = `#btnid${indexb}`;
                            $(elE).bootstrapToggle();

                        }); */

                        var mensaje = `Se cargaron ${json.data.nombres.length} Nombres`;

                        $("#cuerpomensaje").text(mensaje);

                        $("#elmensaje").toast({
                            delay: 3000,
                            animation: true
                        });

                        /* $("#elmensaje").toast({
                            // delay: 6000,
                            animation: true,
                            autohide: false
                        }); */

                        $("#elmensaje").toast('show');

                        $('#elcargador').hide();

                    });

                }

            });
        }

        function reject(error) {

            console.log(error);
            $('#elcargador').hide();
            alert(error.responseText);

            //$("#btneviadatos").html('Enviar');
            //$("#btneviadatos").prop('disabled', false);

            /* $("#cuerpomensaje").html(error.responseText);

            $("#headertoast").removeClass("bg-secondary");
            $("#headertoast").addClass("bg-danger");
            $("#mensajeheadertoast").text("Error");

            $("#elmensaje").toast('show'); */

        }
    })
}

var myToastEl = document.getElementById('elmensaje');
myToastEl.addEventListener('hidden.bs.toast', function () {
    $("#btneviadatos").html('Enviar');
    $("#btneviadatos").prop('disabled', false);
})

$('#modalpreguntaactivar').on('show.bs.modal', function (e) {
    $("#modalcontenido").css({ opacity: 0.8 });
})
  
$('#modalpreguntaactivar').on('hidden.bs.modal', function (e) {
    $($("#elrenglon").val()).removeClass("blur");
    $("#modalcontenido").css({ opacity: 1 });
})

$('#modalpreguntaactivarb').on('show.bs.modal', function (e) {
    $("#modalcontenidob").css({ opacity: 0.8 });
})
  
$('#modalpreguntaactivarb').on('hidden.bs.modal', function (e) {
    $($("#elrenglonb").val()).removeClass("blur");
    $("#modalcontenidob").css({ opacity: 1 });
})

$('#modalpreguntaactivarc').on('show.bs.modal', function (e) {
    $("#modalcontenidoc").css({ opacity: 0.8 });
})
  
$('#modalpreguntaactivarc').on('hidden.bs.modal', function (e) {
    $($("#elrenglonc").val()).removeClass("blur");
    $("#modalcontenidoc").css({ opacity: 1 });
})

$('#modalpreguntaactivard').on('show.bs.modal', function (e) {
    $("#elnombred").val('');
    $("#modalcontenidod").css({ opacity: 0.8 });
})