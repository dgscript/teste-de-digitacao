const container = document.getElementById("container");
const wpmDisplay = document.getElementById("wpm");
const reiniciarButton = document.getElementById("reiniciarButton");
const pontuacoes = document.getElementById("pontuacoes");
const personalBestContainer = document.getElementById(
  "personal-best-container"
);
const textoPrincipal = document.getElementById("texto-principal");
/* let personalPoints = JSON.parse(localStorage.getItem("wpmCache")); */

const texts = [
  "casa sol lua estrela céu mar água terra fogo vento dia noite tempo vida amor paz bem mal bom ruim grande pequeno alto baixo longe perto dentro fora cima baixo antes depois agora sempre nunca talvez sim não quem que onde quando como porque para com sem sobre sob entre através contra desde até mesmo muito pouco mais menos tanto quanto algum nenhum todo cada outro mesmo novo velho primeiro último começo fim parte todo meio lado centro borda canto forma cor som cheiro gosto toque olho mão pé cabeça corpo coração mente alma espírito razão emoção sentimento pensamento ideia palavra frase texto livro página linha letra número conta medida peso força poder energia luz sombra calor frio",

  "homem mulher criança bebê pai mãe filho filha irmão irmã avô avó tio tia primo prima amigo amiga pessoa gente povo grupo família casa rua cidade país mundo lugar espaço região área zona campo cidade vila aldeia bairro praça parque jardim floresta mata bosque montanha colina vale rio lago mar oceano praia costa ilha porto estrada caminho trilha ponte túnel edifício prédio torre castelo palácio templo igreja capela mesquita sinagoga escola universidade hospital clínica farmácia mercado loja feira shopping centro hotel restaurante café bar padaria açougue peixaria verdura fruta legume grão cereal arroz feijão milho trigo pão massa leite queijo manteiga ovo carne peixe frango",

  "carro moto bicicleta ônibus trem avião barco navio lancha canoa jangada cavalo burro boi vaca porco ovelha cabra galinha pato ganso peru cachorro gato passarinho papagaio arara tucano sabiá bem-te-vi coruja águia falcão gavião urubu pomba andorinha beija-flor borboleta abelha vespa formiga mosca mosquito barata aranha escorpião cobra lagarto jacaré tartaruga sapo perereca peixe tubarão baleia golfinho polvo lula caranguejo camarão lagosta ostra mexilhão rato camundongo coelho lebre esquilo macaco gorila elefante rinoceronte hipopótamo girafa zebra leão tigre onça leopardo guepardo lobo raposa urso panda coala canguru",

  "prato copo garfo faca colher panela tigela jarra garrafa xícara caneca travessa assadeira forma peneira escorredor tábua ralador espremedor abridor saca-rolhas tesoura fósforo vela lampião lanterna tocha farol luz lâmpada interruptor tomada fio cabo plugue bateria pilha energia eletricidade gás água esgoto cano tubo torneira chuveiro vaso pia banheira espelho sabão xampu condicionador creme pasta escova pente toalha lençol cobertor travesseiro colchão cama sofá cadeira mesa estante armário guarda-roupa cômoda gaveta prateleira gancho prego parafuso martelo chave alicate serrote lima lixa furadeira broca arame corda barbante linha agulha tesoura botão zíper velcro",

  "livro caderno lápis caneta borracha régua compasso esquadro transferidor papel cartolina papelão revista jornal carta bilhete recado aviso placa cartaz banner faixa bandeira brasão símbolo marca logo ícone sinal código número letra palavra frase texto parágrafo capítulo título subtítulo nota rodapé margem linha coluna página folha capa contracapa lombada índice sumário prefácio prólogo epílogo apêndice anexo glossário referência bibliografia citação nota autor escritor poeta romancista contista cronista jornalista repórter editor revisor tradutor ilustrador desenhista pintor escultor artista músico cantor compositor instrumentista maestro regente dançarino coreógrafo ator atriz diretor produtor roteirista cenógrafo figurinista maquiador",

  "janela porta parede teto chão telhado telha calha cornija beirado varanda sacada terraço quintal jardim horta pomar cerca muro portão grade cancela corrente cadeado chave fechadura trinco maçaneta dobradiça puxador campainha interfone sino gong alarme sirene buzina apito corneta trombeta clarim tambor bombo caixa pandeiro tamborim chocalho maracas xilofone metalofone glockenspiel sino carrilhão gongo címbalo prato castanhola reco-reco cuíca berimbau agogô triângulo afoxé caxixi violão guitarra baixo bandolim cavaquinho ukulele harpa lira alaúde bandolim viola violino violoncelo contrabaixo piano teclado órgão acordeon sanfona gaita harmônica flauta clarinete",

  "médico enfermeiro dentista farmacêutico veterinário professor educador pedagogo psicólogo terapeuta assistente conselheiro orientador tutor instrutor treinador coach mentor guia monitor supervisor coordenador diretor gerente administrador executivo presidente vice secretário tesoureiro contador auditor analista consultor assessor assistente auxiliar ajudante servente faxineiro zelador porteiro segurança vigia guarda policial soldado cabo sargento tenente capitão major coronel general almirante marechal juiz desembargador promotor procurador advogado defensor tabelião escrivão oficial cartorário notário registrador arquivista bibliotecário documentalista curador conservador restaurador arqueólogo historiador antropólogo sociólogo filósofo teólogo padre pastor rabino imã monge freira missionário pregador evangelista profeta vidente oráculo",

  "manhã tarde noite madrugada amanhecer alvorada aurora crepúsculo entardecer anoitecer meia-noite meio-dia hora minuto segundo instante momento ocasião vez tempo época era período fase etapa estágio ciclo ritmo cadência compasso batida pulsação vibração oscilação movimento giro volta rotação translação órbita trajetória caminho percurso rota itinerário trajeto direção sentido rumo curso fluxo corrente torrente enxurrada enchente inundação dilúvio chuva chuvisco garoa temporal tempestade vendaval furacão tufão tornado ciclone tromba vento brisa aragem sopro rajada lufada baforada hálito respiração fôlego suspiro gemido lamento queixa reclamação protesto contestação objeção ressalva reparo crítica censura repreensão advertência aviso alerta",

  "pedra rocha mineral cristal gema joia diamante rubi esmeralda safira topázio ametista quartzo ágata jade turquesa coral pérola âmbar marfim ouro prata bronze cobre ferro aço alumínio chumbo estanho zinco níquel cromo titânio platina paládio tungstênio mercúrio arsênio enxofre carbono silício fósforo nitrogênio oxigênio hidrogênio hélio neônio argônio criptônio xenônio radônio cloro flúor bromo iodo astato boro alumínio gálio índio tálio germânio estanho chumbo bismuto polônio antimônio telúrio selênio cádmio zinco magnésio cálcio estrôncio bário rádio berílio escândio ítrio lantânio cério praseodímio neodímio promécio samário európio gadolínio térbio disprósio hólmio érbio túlio itérbio lutécio",

  "alegria tristeza raiva medo surpresa nojo vergonha orgulho culpa inveja ciúme gratidão admiração desprezo esperança desespero angústia ansiedade preocupação alívio conforto consolo ânimo desânimo coragem covardia bravura timidez ousadia prudência sabedoria ignorância inteligência burrice astúcia ingenuidade malícia inocência bondade maldade generosidade egoísmo altruísmo mesquinharia nobreza vileza dignidade indignidade honra desonra virtude vício mérito demérito valor desvalor qualidade defeito perfeição imperfeição beleza fealdade graça desgraça charme encanto fascínio atração repulsa aversão antipatia simpatia empatia apatia indiferença interesse curiosidade tédio enfado aborrecimento diversão entretenimento passatempo lazer ócio trabalho esforço fadiga cansaço exaustão esgotamento vigor vitalidade",
];

let currentSet = texts[Math.floor(Math.random() * texts.length)];

let currentSetArray = [];
for (let i = 0; i < currentSet.length; i++) {
  let x = i + 1;
  let startIndex = x - 1;
  let endIndex = i + 1;
  let currentChar = currentSet.slice(startIndex, endIndex);
  currentSetArray.push(currentChar);
}

currentSetArray.forEach((letter) => {
  const span = document.createElement("span");
  span.innerHTML = letter;
  container.appendChild(span);
});

let index = 0;
let wpm = 0;
let isTimerStarted = false;
let startTimerInterval;

function startTimer() {
  const timer = document.getElementById("timer");
  let minutes = 0;
  let seconds = 1;
  let seconds2nd = 0;

  startTimerInterval = setInterval(() => {
    let timerValue = `${minutes}:${seconds2nd}${seconds}`;
    seconds++;

    if (seconds > 9) {
      seconds2nd = "";
    } else {
      seconds2nd = 0;
    }

    if (seconds > 59) {
      seconds = "00";
      minutes++;
    }

    if (minutes > 0) {
      clearInterval(startTimerInterval);
      wpmDisplay.style.background = "lightblue";
      reiniciarButton.disabled = false;
      container.style.display = "none";

      /* let newWpm = [...JSON.parse(personalPoints), wpm];

      localStorage.setItem("wpmCache", JSON.stringify(newWpm)); */

      textoPrincipal.textContent =
        "Muito bem! Se quiser fazer o teste mais uma vez basta clicar no botão 'Reiniciar'!";
    }

    timer.innerHTML = timerValue;
  }, 1000);
}

container.addEventListener("keydown", (e) => {
  if (!isTimerStarted) {
    isTimerStarted = true;
    startTimer();
  }

  let currentChar = currentSetArray[index];
  if (e.key === currentChar) {
    index++;
    container.children[index - 1].style.color = "darkgreen";
    container.children[index - 1].style.background = "lightgreen";
  }

  if (e.key === "Dead" || e.key === "Shift") {
    container.children[index].style.color = "gray";
    container.children[index].style.background = "none";
  } else if (e.key !== currentChar) {
    container.children[index].style.color = "red";
    container.children[index].style.background = "pink";
  }

  if (e.key === " " && currentChar === " ") {
    wpm++;
    wpmDisplay.textContent = `WPM: ${wpm}`;
  }

  if (index === currentSetArray.length) {
    clearInterval(startTimerInterval);
  }
});

function reiniciar() {
  location.reload();
}
