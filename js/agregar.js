$(document).ready(function() {
    //obtenemos el valor de los input
    
    $('#agregar').click(function() {
      var alumno = document.getElementById("alumno").value;
      var n1 = document.getElementById("n1").value;
      var n2 = document.getElementById("n2").value;
      var n3 = document.getElementById("n3").value;
      var n4 = document.getElementById("n4").value;
      var n5 = document.getElementById("n5").value;
      var resultado = parseFloat(n1) + parseFloat(n2) + parseFloat(n3) + parseFloat(n4) + parseFloat(n5);
      var promedio = parseFloat(Math.round(resultado/5)).toFixed(2) ;

      if( promedio>= 7){
        alert("Aprobado");
      }else if(4>= promedio<7){
        alert("Regular");
      } else {
        alert("Reprobado")
      }
    
      var i = 1; //contador para asignar id al boton que borrara la fila
      var fila = '<tr id="row' + i + '"><td>' + alumno + '</td><td>' + n1 + '</td><td>' + n2 + '</td><td>' + n3 + '</td><td>' + n4 + '</td><td>' + n5 + '</td><td>' + promedio + '</td><td><button type="button" name="remove" id="' + i + '" class="btn btn-danger btn_remove">Quitar</button></td></tr>'; //esto seria lo que contendria la fila
    
      i++;
    
      $('#tabla tr:first').after(fila);
        $("#agregados").text(""); //esta instruccion limpia el div adicioandos para que no se vayan acumulando
        var nFilas = $("#tabla tr").length;
        $("#agregados").append(nFilas - 1);
        //le resto 1 para no contar la fila del header
        document.getElementById("n1").value = "";
        document.getElementById("n2").value = "";
        document.getElementById("n3").value = "";
        document.getElementById("n4").value = "";
        document.getElementById("n5").value = "";
        document.getElementById("alumno").value = "";
        document.getElementById("alumno").focus();
      });
    $(document).on('click', '.btn_remove', function() {
      var button_id = $(this).attr("id");
        //cuando da click obtenemos el id del boton
        $('#row' + button_id + '').remove(); //borra la fila
        //limpia el para que vuelva a contar las filas de la tabla
        $("#agregados").text("");
        var nFilas = $("#tabla tr").length;
        $("#agregados").append(nFilas - 1);
        });


        $('#imprimir').click(function(){
        var mayor =0;
        for(x=0;x<promedio.length;x++){
          if(promedio[x]>mayor){
            mayor=promedio[x];
          }
        }
         alert("EL numero mayor es: " +mayor );})


});
 
