describe('numeros romanos', function() {

    describe('deve converter numeros com I', function() {
        it('deve converter I em 1', function() {
            verificarConversaoEmArabico('I', 1);
        });

        it('deve converter II em 2', function() {
            verificarConversaoEmArabico('II', 2);
        });
    });

    describe('deve converter numeros com V', function() {
        it('deve converter IV em 4', function() {
            verificarConversaoEmArabico('IV', 4);
        });

        it('deve converter V em 5', function() {
            verificarConversaoEmArabico('V', 5);
        });

        it('deve converter VI em 6', function() {
            verificarConversaoEmArabico('VI', 6);
        });
    });

    describe('deve converter numeros com X', function() {
        it('deve converter IX em 9', function() {
            verificarConversaoEmArabico('IX', 9);
        });

        it('deve converter X em 10', function() {
            verificarConversaoEmArabico('X', 10);
        });

        it('deve converter XVI em 16', function() {
            verificarConversaoEmArabico('XVI', 16);
        });

        it('deve converter XXIX em 29', function() {
            verificarConversaoEmArabico('XXIX', 29);
        });
    });

    function verificarConversaoEmArabico(romano, arabicoEsperado) {
        var numerosRomanos = new NumerosRomanos();

        var arabicoCalculado = numerosRomanos.converterEmArabico(romano);
        expect(arabicoCalculado).toEqual(arabicoEsperado);
    }
});