function TelaDePacientes() {


    var clazz = {
        pegaPaciente: function() {
            return new Paciente(
                $("#nome").val(),
                $("#idade").val(),
                $("#peso").val(),
                $("#altura").val()
            );
        },

        exibeIMC: function(imc) {
            $("#resultado").val("O IMC é " + imc);
        }
    };

    return clazz;
}

var ui = new TelaDePacientes();

var paciente = ui.pegaPaciente();
var imc = paciente.imc();

ui.exibeIMC(imc);