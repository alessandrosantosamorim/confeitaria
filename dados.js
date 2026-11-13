/* =====================================================================
   MANU CAAKES | ÚNICO ARQUIVO QUE VOCÊ PRECISA EDITAR
   - As fotos ficam na pasta img/. Para trocar uma foto, altere o nome do arquivo.
   - Logo: altere o caminho em CONFIG.logo para o arquivo dentro de img/.
   - Para adicionar um produto, copie um bloco { ... } da lista e cole abaixo.
   - Para esconder sem apagar, use ativo:false.
   - A categoria pode ser: "bolos", "kits" ou "doces".
   ===================================================================== */
const f = (nome) => `img/${nome}.jpg`;   // caminho da foto (sem extensão)

const CONFIG = {
  nome: "Manu Caakes",
  logo: "img/logo.jpeg",
  whatsapp: "+5583981192781",   // só números: 55 + DDD + número
  mensagemPedido: "Olá! Gostaria de fazer um pedido na Manu Caakes.",

  hero: {
    foto: f("manu1"),
    titulo: "Bolos, doces e salgados",
    texto: "Mais que sabor, uma experiência!",
  },

  produtos: {
    titulo: "Destaques",
    categorias: [
      { id:"todos", nome:"Todos" },
      { id:"bolos", nome:"Bolos" },
      { id:"kits",  nome:"Kits" },
      { id:"doces", nome:"Doces e salgados" },
    ],
    lista: [
      { ativo:true, categoria:"bolos", foto:f("bolotradicional"), nome:"Bolos tradicionais", preco:"A partir de R$ 68,00",
        descricao:"Com cobertura de chantininho, de 10 a 100 fatias.",
        detalhes:{
          descricaoLonga:"Bolos em chantininho com recheios tradicionais. Em até 4x no cartão.",
          colunas:["Tamanho","À vista"],
          tamanhos:[
            ["10-12 fatias","R$ 68,00"], ["15-18 fatias","R$ 85,00"],
            ["20-23 fatias","R$ 115,00"], ["25-28 fatias","R$ 135,00"],
            ["30-33 fatias","R$ 150,00"], ["35-40 fatias","R$ 170,00"],
            ["40-50 fatias","R$ 205,00"], ["60-70 fatias","R$ 245,00"],
            ["80-85 fatias","R$ 310,00"], ["90-100 fatias","R$ 360,00"],
          ],
          valoresCartao:["R$ 75,00","R$ 94,00","R$ 125,00","R$ 148,00","R$ 165,00","R$ 185,00","R$ 225,00","R$ 270,00","R$ 350,00","R$ 395,00"],
          observacoes:[
            "Valores válidos para cobertura em chantininho. A cobertura em ganache altera o valor; consulte antes de fazer o pedido.",
            "Topo do bolo não incluído; o valor varia de acordo com o modelo.",
            "Recheios tradicionais incluídos:",
            "Brigadeiro branco",
            "Beijinho (coco)",
            "Chocolate",
            "Doce de leite",
            "Sabores especiais (há alteração no valor):",
            "Consulte as opções na seção “Recheios”.",
            "De 10 a 30 fatias: duas camadas de recheio. De 35 a 75 fatias: três camadas.",
            "A base do bolo custa de R$ 3,00 a R$ 5,00 e não é reembolsável.",
          ],
        } },

      { ativo:true, categoria:"bolos", foto:f("boloquadrado"), nome:"Bolos retangulares", preco:"A partir de R$ 150,00",
        descricao:"Bolos retangulares, de 25 a 60 fatias.",
        detalhes:{
          descricaoLonga:"Bolos retangulares. Em até 4x no cartão.",
          colunas:["Tamanho","À vista"],
          tamanhos:[
            ["20-22 fatias","R$ 120,00"],
            ["25-30 fatias","R$ 150,00"],
            ["40-45 fatias","R$ 190,00"],
            ["50-60 fatias","R$ 240,00"],
          ],
          valoresCartao:["R$ 130,00","R$ 165,00","R$ 265,00","R$ 265,00"],
          observacoes:[
            "Os valores deste bolo são válidos para cobertura em chantininho. A cobertura em ganache altera o valor; consulte antes de fazer o pedido.",
            "Recheios tradicionais incluídos:",
            "Brigadeiro branco",
            "Beijinho (coco)",
            "Chocolate",
            "Doce de leite",
            "Sabores especiais (há alteração no valor):",
            "Consulte as opções na seção “Recheios”.",
          ],
        } },

      { ativo:true, categoria:"bolos", foto:f("2andares"), nome:"Bolos de 2 andares", preco:"A partir de R$ 210,00",
        descricao:"Com cobertura de chantininho, de 30 a 110 fatias.",
        detalhes:{
          descricaoLonga:"Bolos de dois andares em chantininho. Em até 4x no cartão.",
          colunas:["Tamanho","À vista"],
          tamanhos:[
            ["30-35 fatias","R$ 210,00"], ["40-45 fatias","R$ 240,00"],
            ["50-60 fatias","R$ 280,00"], ["70-80 fatias","R$ 350,00"],
            ["90 fatias","R$ 390,00"], ["100-110 fatias","R$ 430,00"],
          ],
          valoresCartao:["R$ 230,00","R$ 265,00","R$ 305,00","R$ 385,00","R$ 430,00","R$ 470,00"],
          observacoes:[
            "Os valores deste bolo são válidos para cobertura em chantininho. A cobertura em ganache altera o valor; consulte antes de fazer o pedido.",
            "Topo do bolo não incluído; o valor varia de acordo com o modelo.",
            "Recheios tradicionais incluídos:",
            "Brigadeiro branco",
            "Beijinho (coco)",
            "Chocolate",
            "Doce de leite",
            "Sabores especiais (há alteração no valor):",
            "Consulte as opções na seção “Recheios”.",
          ],
        } },

      { ativo:true, categoria:"bolos", foto:f("3andares"), nome:"Bolos de 3 andares", preco:"A partir de R$ 370,00",
        descricao:"Com cobertura de chantininho, de 50 a 200 fatias.",
        detalhes:{
          descricaoLonga:"Bolos de três andares em chantininho. Em até 4x no cartão.",
          colunas:["Tamanho","À vista"],
          tamanhos:[
            ["50-60 fatias","R$ 370,00"], ["70-80 fatias","R$ 470,00"],
            ["100 fatias","R$ 550,00"], ["150 fatias","R$ 620,00"],
            ["200 fatias","R$ 750,00"],
          ],
          valoresCartao:["R$ 405,00","R$ 515,00","R$ 605,00","R$ 680,00","R$ 820,00"],
          observacoes:[
            "Os valores deste bolo são válidos para cobertura em chantininho. A cobertura em ganache altera o valor; consulte antes de fazer o pedido.",
            "Topo do bolo não incluído; o valor varia de acordo com o modelo.",
            "Recheios tradicionais incluídos:",
            "Brigadeiro branco",
            "Beijinho (coco)",
            "Chocolate",
            "Doce de leite",
            "Sabores especiais (há alteração no valor):",
            "Consulte as opções na seção “Recheios”.",
            "Valor inclui entrega e finalização na nossa cidade; outras cidades têm alteração no valor.",
          ],
        } },

      { ativo:true, categoria:"bolos", foto:f("bolo-vulcao"), nome:"Bolo vulcão", preco:"A partir de R$ 45,00",
        descricao:"Serve cerca de 8 a 10 fatias.",
        detalhes:{
          descricaoLonga:"Bolos vulcão, ideais para presentear. Não acompanham adicionais.",
          colunas:["Sabores","À vista"],
          tamanhos:[
            ["Sabores tradicionais","R$ 45,00"],
            ["Sabores especiais","R$ 50,00"],
          ],
          valoresCartao:["R$ 50,00","R$ 55,00"],
          observacoes:[
            "Sabores tradicionais:",
            "Brigadeiro",
            "Prestígio",
            "Choconinho",
            "Ninho",
            "Limão",
            "Cenoura com chocolate",
            "Sabores especiais:",
            "Ninho com Nutella",
            "Surpresa de uva",
            "Red velvet",
            "Dois amores",
            "Adicional de morango: R$ 5,00.",
            "São entregues em embalagem plástica com tampa.",
            "Serve de 8 a 10 fatias e pesa, em média, 1.800 g.",
          ],
        } },

      { ativo:true, categoria:"bolos", foto:f("recheio"), nome:"Recheios", preco:"Consulte", podePedir:false,
        descricao:"Tradicionais, com geleia e especiais.",
        detalhes:{
          mostrarParcelamento:false,
          descricaoLonga:"Escolha dois sabores para cada bolo. O valor adicional depende do tamanho do bolo.",
          observacoes:[
            "Massas disponíveis: tradicional, mista, chocolate (com alteração no valor) e red velvet.",
            "Sabores tradicionais incluídos:",
            "Brigadeiro branco",
            "Beijinho (coco)",
            "Chocolate",
            "Doce de leite",
            "Sabores especiais com geleia e brigadeiro branco (há alteração no valor):",
            "Maracujá",
            "Ameixa",
            "Morango",
            "Abacaxi",
            "Outros sabores especiais (há alteração no valor):",
            "Ninho com Nutella",
            "Leite moça cozido (bolos leves e pequenos)",
            "Crocante",
            "Oreo",
            "Ninho",
            "Brigadeiro de ninho com morangos (apenas acetato)",
            "Mousse de chocolate (apenas no acetato)",
            "Raspas de limão",
            "Abacaxi com coco",
            "Ferrero Rocher",
            "Doce de leite e ameixa",
            "Chocolate amargo",
          ],
        } },

      { ativo:true, categoria:"kits", foto:f("kit10"), nome:"Kit festa - 10 pessoas", preco:"R$ 120,00",
        descricao:"Bolo de 10 fatias, 50 salgados e 20 brigadeiros.",
        detalhes:{
          descricaoLonga:"Bolo; inclui 50 salgados (pastel e coxinha) e 20 brigadeiros de chocolate.",
          valoresCartao:["R$ 132,00"],
        observacoes:["Topo do bolo não incluído; o modelo da foto é apenas demonstrativo."],
        } },

      { ativo:true, categoria:"kits", foto:f("kit15"), nome:"Kit festa - 15 pessoas", preco:"R$ 155,00",
        descricao:"Bolo de 15 fatias, 80 salgados e 25 brigadeiros.",
        detalhes:{
          descricaoLonga:"Bolo; inclui 80 salgados (pastel e coxinha) e 25 brigadeiros de chocolate.",
          valoresCartao:["R$ 170,00"],
          observacoes:["Topo do bolo não incluído; o modelo da foto é apenas demonstrativo."],
        } },

      { ativo:true, categoria:"kits", foto:f("kit25"), nome:"Kit festa - 20 a 25 pessoas", preco:"R$ 200,00",
        descricao:"Bolo de 20-23 fatias, 100 salgados e 30 brigadeiros.",
        detalhes:{
          descricaoLonga:"Bolo; inclui 100 salgados sortidos em quatro tipos e 30 brigadeiros.",
          valoresCartao:["R$ 220,00"],
          observacoes:["Topo do bolo não incluído; o modelo da foto é apenas demonstrativo."],
        } },

      { ativo:true, categoria:"kits", foto:f("kit35"), nome:"Kit festa - 30 a 35 pessoas", preco:"R$ 300,00",
        descricao:"Bolo de 30 fatias, 200 salgados e 40 doces.",
        detalhes:{
          descricaoLonga:"Bolo; inclui 200 salgados sortidos em quatro tipos e 40 doces (20 brigadeiros brancos e 20 de chocolate).",
          valoresCartao:["R$ 335,00"],
          observacoes:["Topo do bolo não incluído; o modelo da foto é apenas demonstrativo."],
        } },

      { ativo:true, categoria:"kits", foto:f("kit60"), nome:"Kit festa - 50 a 60 pessoas", preco:"R$ 580,00",
        descricao:"Bolo de 2 andares, 350 salgados e 100 doces.",
        detalhes:{
          descricaoLonga:"Bolo de dois andares; inclui 350 salgados sortidos em quatro tipos e 100 doces (50 beijinhos e 50 brigadeiros de chocolate).",
          valoresCartao:["R$ 640,00"],
          observacoes:["Topo do bolo não incluído; o modelo da foto é apenas demonstrativo."],
        } },

      { ativo:true, categoria:"kits", foto:f("kit-caseirinho"), nome:"Kit caseirinho", preco:"A partir de R$ 90,00",
        descricao:"Bolo vulcão, salgados e doces.",
        detalhes:{
          descricaoLonga:"Bolo vulcão; são duas opções de kit com salgados e doces para comemorar em casa.",
          colunas:["Kit","À vista"],
          tamanhos:[
            ["Kit 1: bolo vulcão simples, 40 salgados e 20 doces","R$ 90,00"],
            ["Kit 2: bolo vulcão premium, 50 salgados, 20 doces e morangos ou brigadeiros","R$ 100,00"],
          ],
          valoresCartao:["R$ 100,00","R$ 110,00"],
          observacoes:[
            "São entregues em embalagem plástica com tampa.",
            "Serve de 10 a 12 fatias.",
          ],
        } },

      { ativo:true, categoria:"kits", foto:f("festacaixa"), nome:"Festa na caixa", preco:"R$ 115,00",
        descricao:"Bolo, salgados, doces e refrigerantes na caixa.",
        detalhes:{
          descricaoLonga:"Bolo no acetato, acompanhado de 30 salgados, 10 doces, dois refrigerantes e seis fotos. Escolha o tema ou a cor.",
          valoresCartao:["R$ 125,00"],
          observacoes:["Bolo no acetato de 7 a 10 fatias.","30 salgados.","10 doces.","2 refrigerantes.","6 fotos.","Escolha de tema ou cor."],
        } },

      { ativo:true, categoria:"kits", foto:f("festapremium"), nome:"Festa na caixa premium", preco:"R$ 120,00 à vista",
        descricao:"Bolo de 10 a 12 fatias e 20 doces.",
        detalhes:{
          descricaoLonga:"Bolo de sabor tradicional, acompanhado de 20 doces (brigadeiro branco ou de chocolate).",
          valoresCartao:["R$ 130,00"],
          observacoes:[
            "Bolo de 10 a 12 fatias; sabores tradicionais.",
            "20 doces: brigadeiro branco ou de chocolate.",
            "Pagamento no cartão em até quatro parcelas.",
          ],
        } },

      { ativo:true, categoria:"kits", foto:f("marmitas"), nome:"Marmitas", preco:"R$ 11,00 a unidade",
        descricao:"Bolo, doces e salgados individuais.",
        detalhes:{
          mostrarParcelamento:false,
          descricaoLonga:"Bolo de sabor tradicional. Cada marmita também contém cinco salgados variados e dois doces (beijinho e brigadeiro). Evita sujeira, ajuda a controlar a quantidade servida e é ideal para eventos fora de casa, como em escolas, restaurantes e piscinas.",
          observacoes:[
            "Quantidade mínima: 20 unidades.",
            "Podemos montar a marmita de acordo com a sua necessidade, dentro das nossas possibilidades.",
            "Podemos adicionar um bolo cenográfico para fotos, mediante valor adicional.",
            "Não inclui adesivos ou laços.",
          ],
        } },

      { ativo:true, categoria:"doces", foto:f("brigadeiros"), nome:"Brigadeiros tradicionais e sabores", preco:"A partir de R$ 110,00",
        descricao:"100 unidades.",
        detalhes:{
          descricaoLonga:"Valores para 100 unidades. Você pode escolher até quatro tipos.",
          colunas:["Categoria","À vista"],
          tamanhos:[
            ["Tradicionais","R$ 110,00"],
            ["Outros sabores","R$ 140,00"],
          ],
          valoresCartao:["R$ 120,00","R$ 155,00"],
          observacoes:[
            "Sabores tradicionais:",
            "Brigadeiro branco",
            "Beijinho (coco)",
            "Brigadeiro de chocolate",
            "Ninho",
            "Prestígio",
            "Outros sabores:",
            "Maracujá",
            "Chocolate e amendoim",
            "Bicho de pé",
            "Café",
            "Casadinho",
            "Paçoca",
            "Limão",
            "Pedido mínimo de 20 unidades por sabor. Peso entre 18 e 22 g. Os brigadeiros são entregues em embalagens brancas.",
          ],
        } },

      { ativo:true, categoria:"doces", foto:f("especiais"), nome:"Brigadeiros especiais", preco:"A partir de R$ 120,00",
        descricao:"100 unidades.",
        detalhes:{
          descricaoLonga:"Valores para 100 unidades. Você pode escolher até quatro tipos.",
          colunas:["Categoria","À vista"],
          tamanhos:[
            ["Brigadeiro branco colorido","R$ 120,00"],
            ["Especiais","R$ 170,00"],
          ],
          valoresCartao:["R$ 130,00","R$ 188,00"],
          observacoes:[
            "Brigadeiro branco colorido",
            "Sabores especiais:",
            "Kit Kat",
            "Confetes",
            "Oreo",
            "Ninho com Nutella",
            "Surpresa de uva",
            "Ferrero Rocher",
            "Romeu e Julieta",
            "Chocolate e morango",
            "Geleia de maracujá",
            "Pedido mínimo de 20 unidades por sabor. Peso entre 18 e 22 g. Os brigadeiros são entregues em embalagens brancas.",
          ],
        } },

      { ativo:true, categoria:"doces", foto:f("bem-casados"), nome:"Bem-casados", preco:"R$ 4,00 cada",
        descricao:"Doce de leite e ninho.",
        detalhes:{
          mostrarParcelamento:false,
          descricaoLonga: "Pedido mínimo de 20 unidades.\nTambém são chamados de\nBem-vividos (para aniversários),\nBem-nascidos (para nascimentos),\nBem-aventurados (para celebrações religiosas) e\nBem-formados (para formaturas).",
          observacoes:["Sabores tradicionais:","Doce de leite","Ninho","Não inclui pérolas."],
        } },

      { ativo:true, categoria:"doces", foto:f("cupcakes"), nome:"Cupcakes", preco:"R$ 3,50 cada",
        descricao:"Com cobertura de chantininho e sabores tradicionais.",
        detalhes:{
          mostrarParcelamento:false,
          descricaoLonga:"Cupcakes com cobertura de chantininho. Pedido mínimo de 10 unidades.",
          observacoes:["Sabores tradicionais:","Consulte os sabores tradicionais disponíveis.","Não inclui tag."],
        } },

      { ativo:true, categoria:"doces", foto:f("salgados"), nome:"Salgados tradicionais", preco:"R$ 55,00",
        descricao:"100 unidades de salgados tradicionais.",
        detalhes:{
          descricaoLonga:"100 unidades de salgados tradicionais por R$ 55,00 à vista ou R$ 59,00 no cartão.",
          colunas:["100 unidades","À vista"],
          tamanhos:[["Tradicionais","R$ 55,00"]],
          valoresCartao:["R$ 59,00"],
          observacoes:[
            "Escolha até três tipos para cada 100 unidades:",
            "Bolinha mista",
            "Coxinha de frango",
            "Pastel de frango",
            "Pastel de pizza",
            "Pastel de calabresa",
            "Pastel de queijo",
            "Empada salgada de frango",
            "Empada doce de leite condensado",
            "Empada doce de chocolate",
            "Mini pizza de presunto com queijo",
            "Medalhão de salsicha",
            "Bolinha de queijo",
            "Bolinha de presunto",
            "Croquete de frango",
            "Pedido mínimo de 50 unidades, que podem ser divididas entre pastéis e coxinhas.",
          ],
        } },

      { ativo:true, categoria:"doces", foto:f("salgadosespeciais"), nome:"Salgados especiais", preco:"R$ 75,00",
        descricao:"100 unidades de salgados especiais.",
        detalhes:{
          descricaoLonga:"100 unidades de salgados especiais por R$ 75,00 à vista ou R$ 80,00 no cartão.",
          colunas:["100 unidades","À vista"],
          tamanhos:[["Especiais","R$ 75,00"]],
          valoresCartao:["R$ 80,00"],
          observacoes:[
            "Escolha dois tipos para cada 100 unidades:",
            "Cone crocante de doce de leite",
            "Cone crocante de chocolate",
            "Cone crocante de brigadeiro branco",
            "Cone crocante salgado de frango",
            "Pastel agridoce de carne",
            "Pastel de forno de frango",
          ],
        } },

      { ativo:true, categoria:"bolos", foto:f("bento"), nome:"Bento Cake", preco:"R$ 35,00",
        descricao:"Mini bolo individual com cerca de 10 cm.",
        detalhes:{
          descricaoLonga:"Conhecido por bonecos engraçados, frases irônicas, românticas ou personalizadas.",
          colunas:["Tamanho","À vista"],
          tamanhos:[["Bento Cake","R$ 35,00"]],
          valoresCartao:["R$ 38,00"],
          observacoes:[
            "Ocasiões: ideal para presentes, mesversários, aniversários íntimos e datas comemorativas como o Dia dos Namorados e o Dia das Mães.",
            "Costuma vir acompanhado de uma velinha.",
          ],
        } },
    ],
  },

  galeria: {
    titulo: "Galeria",
    fotos: [
      { foto:f("manu1")},  
      { foto:f("bolo-vulcao")},      
      { foto:f("foto4")},
      { foto:f("foto2")},
      { foto:f("foto6")},
      { foto:f("cupcakes")},
      { foto:f("festacaixa")},
      { foto:f("foto8")},          
      { foto:f("foto5")},          
      { foto:f("bolochocolate")},          
      { foto:f("foto1")},          
      { foto:f("foto7")},          
      { foto:f("foto3")},          
    ],
  },

  sobre: {
    titulo: "Quem Somos",
    blocos: [
      { titulo:"Nossa história", texto:"Somos especialistas em bolos com chantininho e atuamos há mais de oito anos na área da confeitaria. Oferecemos uma grande variedade de produtos, como doces e salgados para a sua comemoração. Estamos à disposição para atender a qualquer ocasião, como aniversários, casamentos e batizados. Também fazemos bolos de andares e entregamos nossos produtos!" },
      { titulo:"Nossa missão",   texto:"Nossa missão é proporcionar uma ótima experiência aos clientes e aos seus convidados, que poderão se deliciar com nossos doces!" },
    ],
    fotos: [f("sobre2"), f("sobre1")],
  },

  feedbacks: {
    titulo: "O que nossos clientes dizem",
    lista: [   // foto é opcional: sem foto aparece a inicial do nome
      { ativo:true, foto:"", nome:"", estrelas:5, texto:"Foi tudo um sucesso! O bolo, os salgados, os doces e os pães estavam maravilhosos. Dá para sentir o carinho e o capricho em cada detalhe. Muito obrigada por fazer parte desse momento especial!" },
  { ativo:true, foto:"", nome:"Rosangela", estrelas:5, texto:"Manu, seu bolo estava lindo e delicioso — superou minhas expectativas! Foi o melhor que já comi. Que Deus abençoe você e sua família. Em João Pessoa, não encontrei confeitaria com bolo tão gostoso quanto o seu." },
      { ativo:true, foto:"", nome:"Jéssica", estrelas:5, texto:"Meus bolos ficaram perfeitos, exatamente como imaginei. Você é uma profissional maravilhosa! Que Deus abençoe você sempre." },
      { ativo:true, foto:"", nome:"Mayara", estrelas:5, texto:"Manu, muito obrigada por todo carinho e capricho! Estava tudo maravilhoso, do bolo aos salgados, doces e pães. Foi tudo um sucesso e só recebemos elogios! Mesmo levando tudo para Solânea, fiz questão de encomendar contigo, porque confio no seu trabalho. Que Deus continue abençoando suas mãos e sua padaria! ❤️" },
      { ativo:true, foto:"", nome:"Dayres", estrelas:5, texto:"Manu, o bolo estava delicioso, como sempre! Você arrasa no que faz. Obrigada por sempre atender meus pedidos, mesmo em cima da hora, e sempre dar um jeitinho de fazer acontecer. Gratidão por tudo, amiga! Tamo junto sempre! ❤️" },
    ],
  },

  contato: {
    titulo: "Contato",
    whatsappExibido: "(83) 98119-2781",
    instagram: "@manu_caakes", instagramLink: "https://www.instagram.com/manu_caakes?psln=MXh5N2F5NjduM2Ywdw==",
    endereco: "Panificadora São Bento, Casserengue/PB",
    horarioOrcamentosOnline: "De segunda a sexta-feira, das 9h às 19h.",
    atendimentoPresencial: "Mediante agendamento. Entre em contato para marcar um horário.",
    horarioRetirada: "De segunda-feira a sábado, das 10h às 19h; aos domingos, das 10h às 14h.",
    horarioEntrega: "Mediante combinação prévia, conforme a distância, para cálculo da taxa de entrega.",
  },
};
