
$(document).ready(function() {
    //obtenemos el valor de los input
    
    $('#adicionar').click(function() {
      
      var sucursales = document.getElementById("txtsucursales").value;
      var empleados = document.getElementById("txtempleados").value;
      var ganancias = document.getElementById("txtganancias").value;
      var i = 1; //contador para asignar id al boton que borrara la fila
      var fila = '<tr id="row' + i + '"><td>' + sucursales + '</td><td>' + empleados + '</td><td>' + ganancias + '</td><td><button type="button" name="remove" id="' + i + '" class="btn btn-danger btn_remove">Quitar</button></td></tr>'; //esto seria lo que contendria la fila

      if (ganancias >=30000) {
        alert("EXCELENTE TRABAJO");
      } else {
        alert("BUEN TRABAJO");
      }

      i++;
    
      $('#mytable tr:first').after(fila);
        $("#adicionados").text(""); //esta instruccion limpia el div adicioandos para que no se vayan acumulando
        var nFilas = $("#mytable tr").length;
        $("#adicionados").append(nFilas - 1);
        //le resto 1 para no contar la fila del header
        document.getElementById("txtempleados").value ="";
        document.getElementById("txtganancias").value = "";
        document.getElementById("txtsucursales").value = "";
        document.getElementById("txtsucursales").focus();
      });

    $(document).on('click', '.btn_remove', function() {
      var button_id = $(this).attr("id");
        //cuando da click obtenemos el id del boton
        $('#row' + button_id + '').remove(); //borra la fila
        //limpia el para que vuelva a contar las filas de la tabla
        $("#adicionados").text("");
        var nFilas = $("#mytable tr").length;
        $("#adicionados").append(nFilas - 1);
      });


      $('#imprimir').click(function() {
      
        

        var ganancias = document.getElementById("txtganancias").value;
      
        var cont1=0;
        var cont2=0;
        var total=0;
       var x=ganancias;
          while(x)
          {
          if (1000<=ganancias<=25000)
          {
            cont1=cont1+1;
          }
          else
          {
            cont2=cont2+1;
          }
          total=total+ganancias;
          x=x+1;
        }
        document.write('Las sucursales entre $1000 y $25,000  :$'+cont1);
        document.write('<br>');
        document.write('Sucursales con ganancias mas de $25,000  :$'+cont2);
        document.write('<br>');
        document.write('Ganancia Total :$'+total);
        

      });
    });
  



