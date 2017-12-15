describe("Consulta", function() {

    it('não deve cobrar nada se a consulta for um retorno', function() {
        var guilherme = new Paciente("Guilherme", 28, 72, 1.80);
        var consulta = new Consulta(guilherme, [], true, true);

        expect(consulta.preco()).toEqual(0);
    });

    it('deve cobrar 25 por cada procedimento comum', function() {
        var guilherme = new Paciente("Guilherme", 28, 72, 1.80);
        var consulta = new Consulta(guilherme, ['proc1', 'proc2'], false, false);

        expect(consulta.preco()).toEqual(50);
    });

    it('deve dobrar o preço da consulta particular', function() {
        var guilherme = new Paciente("Guilherme", 28, 72, 1.80);
        var consulta = new Consulta(guilherme, ['proc1', 'proc2'], true, false);

        expect(consulta.preco()).toEqual(50 * 2);
    });

    it('deve dobrar o preço da consulta particular, mesmo com procedimentos especiais', function() {
        var guilherme = new Paciente("Guilherme", 28, 72, 1.80);
        var consulta = new Consulta(guilherme, ['proc1', 'raio-x'], true, false);

        expect(consulta.preco()).toEqual(2 * (25 + 55));
    });

    it('deve cobrar preço específico dependendo do procedimento', function() {
        var guilherme = new Paciente('Guilherme', 28, 72, 1.80);
        var consulta = new Consulta(guilherme, ['procedimento-comum', 'raio-x', 'procedimento-comum2', 'gesso'], false, false);

        expect(consulta.preco()).toEqual(25 + 55 + 25 + 32);
    });

    it('deve cobrar 0 para retornos', function() {
        var guilherme = new Paciente('Guilherme', 28, 72, 1.80);
        var consulta = new Consulta(guilherme, ['proc1'], false, true);

        expect(consulta.preco()).toEqual(0);
    });
});