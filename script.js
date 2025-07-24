// Desafio Classificador de nivel de Heroi

// Se XP for menor do que 1.000 = Ferro
// Se XP for entre 1.001 e 2.000 = Bronze
// Se XP for entre 2.001 e 5.000 = Prata
// Se XP for entre 5.001 e 7.000 = Ouro
// Se XP for entre 7.001 e 8.000 = Platina
// Se XP for entre 8.001 e 9.000 = Ascendente
// Se XP for entre 9.001 e 10.000= Imortal
// Se XP for maior ou igual a 10.001 = Radiante

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function iniciarCadastro() {
  rl.question('Deseja cadastrar um herói? (Sim ou Nao): ', (respostaCadastro) => {
    const entrada = respostaCadastro.trim().toLowerCase();

    if (entrada === 'nao') {
      console.log('Encerrando o programa.');
      rl.close();
      return;
    }

    if (entrada !== 'sim') {
      console.log('Digite apenas "Sim" ou "Nao".\n');
      iniciarCadastro(); // volta para o cadastro
      return;
    }

    rl.question('Digite o nome do herói: ', (nomeHeroi) => {
      rl.question('Digite a quantidade de XP que ele possui: ', (respostaXp) => {
        let xpHeroi = parseFloat(respostaXp);
        let rankHeroi = '';

        if (xpHeroi < 1000) {
          rankHeroi = 'Ferro';
        } else if (xpHeroi <= 2000) {
          rankHeroi = 'Bronze';
        } else if (xpHeroi <= 5000) {
          rankHeroi = 'Prata';
        } else if (xpHeroi <= 7000) {
          rankHeroi = 'Ouro';
        } else if (xpHeroi <= 8000) {
          rankHeroi = 'Platina';
        } else if (xpHeroi <= 9000) {
          rankHeroi = 'Ascendente';
        } else if (xpHeroi <= 10000) {
          rankHeroi = 'Imortal';
        } else {
          rankHeroi = 'Radiante';
        }

        console.log(`O herói de nome ${nomeHeroi} está no rank: ${rankHeroi}\n`);
        iniciarCadastro(); // repete o cadastro
      });
    });
  });
}

iniciarCadastro();
