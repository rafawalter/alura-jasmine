function NumerosRomanos() {

    var clazz = {
        converterEmArabico: function(romano) {
            var arabico = 0;

            var SIMBOLOS_ROMANOS = [
                ['X', 10],
                ['IX', 9],
                ['V', 5],
                ['IV', 4],
                ['I', 1]
            ];

            arabico = SIMBOLOS_ROMANOS.reduce(function(acumulado, simboloRomano) {
                var simbolo = simboloRomano[0];
                var valor = simboloRomano[1];
                var regex = new RegExp('^' + simbolo);

                while (romano.match(regex) != null) {
                    acumulado += valor;
                    romano = romano.replace(regex, '');
                }

                return acumulado;
            }, 0);


            return arabico;
        }
    };

    return clazz;
}