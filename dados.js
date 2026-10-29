/* =====================================================================
   MANU CAAKES | ÚNICO ARQUIVO QUE VOCÊ PRECISA EDITAR
   - Fotos ficam na pasta img/. Para trocar, mude o nome do arquivo.
   - Adicionar produto: copie um bloco { ... } da lista e cole embaixo.
   - Esconder sem apagar: ativo:false
   - categoria pode ser: "bolos", "kits" ou "doces"
   ===================================================================== */
const f = (nome) => `img/${nome}.jpg`;   // caminho da foto (sem extensão)

const CONFIG = {
  nome: "Manu Caakes",
  whatsapp: "5500000000000",   // só números: 55 + DDD + número
  mensagemPedido: "Olá! Gostaria de fazer um pedido na Manu Caakes.",

  hero: {
    foto: f("manu1"),
    titulo: "Bolo Doces e Salgados",
    texto: "Mais que sabor, uma experiência.",
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
        descricao:"Em chantininho, de 10 a 100 fatias.",
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
            "Preços deste bolo válidos para cobertura em chantininho. A cobertura em ganache altera o valor; consulte antes de fazer o pedido.",
            "Topo de bolo não incluso; o valor varia de acordo com o modelo.",
            "Recheios tradicionais inclusos:",
            "Brigadeiro branco",
            "Beijinho (coco)",
            "Chocolate",
            "Doce de leite",
            "Sabores especiais (alteração no valor):",
            "Consulte as opções no card Recheios.",
            "De 10 a 30 fatias: duas camadas de recheio. De 35 a 75 fatias: três camadas.",
            "De R$ 3,00 a R$ 5,00 para incluir a base do bolo, sem devolução.",
          ],
        } },

      { ativo:true, categoria:"bolos", foto:f("boloquadrado"), nome:"Bolos Retangulares", preco:"A partir de R$ 150,00",
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
            "Preços deste bolo válidos para cobertura em chantininho. A cobertura em ganache altera o valor; consulte antes de fazer o pedido.",
            "Recheios tradicionais inclusos:",
            "Brigadeiro branco",
            "Beijinho (coco)",
            "Chocolate",
            "Doce de leite",
            "Sabores especiais (alteração no valor):",
            "Consulte as opções no card Recheios.",
          ],
        } },

      { ativo:true, categoria:"bolos", foto:f("2andares"), nome:"Bolos de 2 andares", preco:"A partir de R$ 210,00",
        descricao:"Em chantininho, de 30 a 110 fatias.",
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
            "Preços deste bolo válidos para cobertura em chantininho. A cobertura em ganache altera o valor; consulte antes de fazer o pedido.",
            "Topo de bolo não incluso; o valor varia de acordo com o modelo.",
            "Recheios tradicionais inclusos:",
            "Brigadeiro branco",
            "Beijinho (coco)",
            "Chocolate",
            "Doce de leite",
            "Sabores especiais (alteração no valor):",
            "Consulte as opções no card Recheios.",
            "Bolos de 3 andares ou mais: valores a consultar.",
          ],
        } },

      { ativo:true, categoria:"bolos", foto:f("3andares"), nome:"Bolos de 3 andares", preco:"A partir de R$ 370,00",
        descricao:"Em chantininho, de 50 a 200 fatias.",
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
            "Preços deste bolo válidos para cobertura em chantininho. A cobertura em ganache altera o valor; consulte antes de fazer o pedido.",
            "Topo de bolo não incluso; o valor varia de acordo com o modelo.",
            "Recheios tradicionais inclusos:",
            "Brigadeiro branco",
            "Beijinho (coco)",
            "Chocolate",
            "Doce de leite",
            "Sabores especiais (alteração no valor):",
            "Consulte as opções no card Recheios.",
            "Valor inclui entrega e finalização na nossa cidade; outras cidades têm alteração no valor.",
          ],
        } },

      { ativo:true, categoria:"bolos", foto:f("vulcao"), nome:"Bolos vulcão", preco:"A partir de R$ 45,00",
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
            "Preços do catálogo para bolos:",
            "Os valores consideram cobertura em chantininho. A cobertura em ganache altera o valor; consulte antes de fazer o pedido.",
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
            "2 amores",
            "Adicional de morango: R$ 5,00.",
            "Todos vão em embalagem plástica com tampa.",
            "Serve aproximadamente 8 a 10 fatias e pesa em média 1800g.",
          ],
        } },

      { ativo:true, categoria:"bolos", foto:f("recheios"), nome:"Recheios", preco:"Consulte",
        descricao:"Tradicionais, com geleia e especiais.",
        detalhes:{
          mostrarParcelamento:false,
          descricaoLonga:"Escolha dois sabores para cada bolo. O valor de alteração depende do tamanho do bolo.",
          observacoes:[
            "Preços do catálogo para bolos:",
            "Os valores consideram cobertura em chantininho. A cobertura em ganache altera o valor; consulte antes de fazer o pedido.",
            "Tradicionais (inclusos):",
            "Brigadeiro branco",
            "Beijinho (coco)",
            "Chocolate",
            "Doce de leite",
            "Sabores especiais com geleia e brigadeiro branco (alteração no valor):",
            "Maracujá",
            "Ameixa",
            "Morango",
            "Abacaxi",
            "Outros sabores especiais (alteração no valor):",
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

      { ativo:true, categoria:"kits", foto:f("kit"), nome:"Kit festa - 10 pessoas", preco:"R$ 120,00",
        descricao:"Bolo de 10 fatias, 50 salgados e 20 brigadeiros.",
        detalhes:{
          descricaoLonga:"Kit para 10 pessoas com bolo de 10 fatias, 50 salgados (pastel e coxinha) e 20 brigadeiros de chocolate.",
          valoresCartao:["R$ 132,00"],
        observacoes:["Preço do kit considera bolo com cobertura em chantininho. Cobertura em ganache altera o valor; consulte antes de pedir.","Topo de bolo não incluso; o modelo da foto é demonstrativo."],
        } },

      { ativo:true, categoria:"kits", foto:f("kit"), nome:"Kit festa - 15 pessoas", preco:"R$ 155,00",
        descricao:"Bolo de 15 fatias, 80 salgados e 25 brigadeiros.",
        detalhes:{
          descricaoLonga:"Kit para 15 pessoas com bolo de 15 fatias, 80 salgados (pastel e coxinha) e 25 brigadeiros de chocolate.",
          valoresCartao:["R$ 170,00"],
          observacoes:["Preço do kit considera bolo com cobertura em chantininho. Cobertura em ganache altera o valor; consulte antes de pedir.","Topo de bolo não incluso; o modelo da foto é demonstrativo."],
        } },

      { ativo:true, categoria:"kits", foto:f("kit"), nome:"Kit festa - 20 a 25 pessoas", preco:"R$ 200,00",
        descricao:"Bolo de 20-23 fatias, 100 salgados e 30 brigadeiros.",
        detalhes:{
          descricaoLonga:"Kit para 20 a 25 pessoas com bolo de 20-23 fatias, 100 salgados sortidos em 4 tipos e 30 brigadeiros.",
          valoresCartao:["R$ 220,00"],
          observacoes:["Preço do kit considera bolo com cobertura em chantininho. Cobertura em ganache altera o valor; consulte antes de pedir.","Topo de bolo não incluso; o modelo da foto é demonstrativo."],
        } },

      { ativo:true, categoria:"kits", foto:f("kit"), nome:"Kit festa - 30 a 35 pessoas", preco:"R$ 300,00",
        descricao:"Bolo de 30 fatias, 200 salgados e 40 doces.",
        detalhes:{
          descricaoLonga:"Kit para 30 a 35 pessoas com bolo de 30 fatias, 200 salgados sortidos em 4 tipos e 40 doces (20 brigadeiros brancos e 20 de chocolate).",
          valoresCartao:["R$ 335,00"],
          observacoes:["Preço do kit considera bolo com cobertura em chantininho. Cobertura em ganache altera o valor; consulte antes de pedir.","Topo de bolo não incluso; o modelo da foto é demonstrativo."],
        } },

      { ativo:true, categoria:"kits", foto:f("kit"), nome:"Kit festa - 50 a 60 pessoas", preco:"R$ 580,00",
        descricao:"Bolo de 2 andares, 350 salgados e 100 doces.",
        detalhes:{
          descricaoLonga:"Kit para 50 a 60 pessoas com bolo de 2 andares, 350 salgados sortidos em 4 tipos e 100 doces (50 beijinhos e 50 brigadeiros de chocolate).",
          valoresCartao:["R$ 640,00"],
          observacoes:["Preço do kit considera bolo com cobertura em chantininho. Cobertura em ganache altera o valor; consulte antes de pedir.","Topo de bolo não incluso; o modelo da foto é demonstrativo."],
        } },

      { ativo:true, categoria:"kits", foto:f("caseirinho"), nome:"Kit caseirinho", preco:"A partir de R$ 90,00",
        descricao:"Bolo vulcão, salgados e doces.",
        detalhes:{
          descricaoLonga:"Dois kits com bolo vulcão, salgados e doces para uma comemoração em casa.",
          colunas:["Kit","À vista"],
          tamanhos:[
            ["Kit 1: bolo vulcão simples, 40 salgados e 20 doces","R$ 90,00"],
            ["Kit 2: bolo vulcão premium, 50 salgados, 20 doces e morango ou brigadeiros","R$ 100,00"],
          ],
          valoresCartao:["R$ 100,00","R$ 110,00"],
          observacoes:[
            "O preço do kit considera bolo com cobertura em chantininho. Cobertura em ganache altera o valor; consulte antes de pedir.",
            "Todos vão em embalagem plástica com tampa.",
            "Serve aproximadamente 10 a 12 fatias.",
          ],
        } },

      { ativo:true, categoria:"kits", foto:f("festacaixa"), nome:"Festa na caixa", preco:"R$ 115,00",
        descricao:"Bolo, salgados, doces e refrigerantes na caixa.",
        detalhes:{
          descricaoLonga:"R$ 115,00 à vista. Em até 4x no cartão. Você escolhe o tema ou a cor.",
          valoresCartao:["R$ 125,00"],
          observacoes:["O preço do kit considera bolo com cobertura em chantininho. Cobertura em ganache altera o valor; consulte antes de pedir.","Bolo no acetato de 7 a 10 fatias.","30 salgados.","10 doces.","2 refrigerantes.","6 fotos.","Escolha de tema ou cor."],
        } },

      { ativo:true, categoria:"kits", foto:f("festapremium"), nome:"Festa na caixa premium", preco:"R$ 120,00 à vista",
        descricao:"Bolo de 10 a 12 fatias e 20 doces.",
        detalhes:{
          descricaoLonga:"Festa na caixa premium com bolo de sabores tradicionais e 20 doces.",
          valoresCartao:["R$ 130,00"],
          observacoes:[
            "Bolo de 10 a 12 fatias; sabores tradicionais.",
            "20 doces: brigadeiro branco ou de chocolate.",
            "O preço considera bolo com cobertura em chantininho. Cobertura em ganache altera o valor; consulte antes de pedir.",
            "Pagamento no cartão em até 4x.",
          ],
        } },

      { ativo:true, categoria:"kits", foto:f("marmita"), nome:"Marmitas", preco:"R$ 11,00 a unidade",
        descricao:"Bolo, doces e salgados individuais.",
        detalhes:{
          descricaoLonga:"Cada marmita traz 1 fatia de bolo (sabores tradicionais), 5 salgados misturados e 2 doces (beijinho e brigadeiro). Evita sujeira, controla a quantidade servida e é ideal para eventos fora de casa, como escola, restaurantes e piscinas.",
          observacoes:[
            "Quantidade mínima: 20 unidades.",
            "Podemos montar a marmita de acordo com a sua necessidade, dentro das nossas possibilidades.",
            "Podemos adicionar bolo fake para fotos, com valor externo.",
            "Não inclui adesivos ou laços.",
          ],
        } },

      { ativo:true, categoria:"doces", foto:f("brigadeiros"), nome:"Brigadeiros tradicionais e sabores", preco:"A partir de R$ 110,00",
        descricao:"100 unidades de sabores tradicionais ou outros sabores.",
        detalhes:{
          descricaoLonga:"Valores para 100 unidades. Em até 4x no cartão. Você pode dividir em até 4 tipos.",
          colunas:["Categoria","À vista"],
          tamanhos:[
            ["Tradicionais","R$ 110,00"],
            ["Sabores","R$ 140,00"],
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
            "A partir de 20 unidades de cada sabor. Peso de 18 a 22 g. Vão em embalagens brancas.",
          ],
        } },

      { ativo:true, categoria:"doces", foto:f("especiais"), nome:"Brigadeiros especiais", preco:"A partir de R$ 120,00",
        descricao:"100 unidades de brigadeiro branco colorido ou sabores especiais.",
        detalhes:{
          descricaoLonga:"Valores para 100 unidades. Em até 4x no cartão. Você pode dividir em até 4 tipos.",
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
            "A partir de 20 unidades de cada sabor. Peso de 18 a 22 g. Vão em embalagens brancas.",
          ],
        } },

      { ativo:true, categoria:"doces", foto:f("bemcasados"), nome:"Bem casados", preco:"R$ 4,00 cada",
        descricao:"Doce de leite e ninho.",
        detalhes:{
          descricaoLonga:"A partir de 20 unidades. Também chamados de bem vividos (aniversário), bem nascidos (nascimento), bem aventurados (religioso) e bem formandos (formaturas).",
          observacoes:["Sabores tradicionais:","Doce de leite","Ninho","Não inclui pérolas."],
        } },

      { ativo:true, categoria:"doces", foto:f("cupcakes"), nome:"Cupcakes", preco:"R$ 3,50 cada",
        descricao:"Em chantininho, sabores tradicionais.",
        detalhes:{
          mostrarParcelamento:false,
          descricaoLonga:"Cupcakes em chantininho, a partir de 10 unidades.",
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
            "Até 3 tipos a cada 100 unidades:",
            "Coxinha de frango",
            "Pastel de frango",
            "Pastel de pizza",
            "Pastel de calabresa",
            "Pastel de queijo",
            "Empada salgada de frango",
            "Empada doce de leite condensado",
            "Empada doce de chocolate",
            "Mini pizza de presunto com queijo",
            "Bolinha de queijo",
            "Bolinha de presunto",
            "Croquete de frango",
            "Risole de presunto com queijo",
            "Enroladinho de salsicha",
            "A partir de 50 unidades, divididas entre pastel e coxinha.",
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
            "Escolha 2 tipos a cada 100 unidades:",
            "Conoscópio doce de doce de leite",
            "Conoscópio doce de chocolate",
            "Conoscópio doce de brigadeiro branco",
            "Conoscópio salgado de frango",
            "Pastel agridoce de carne",
            "Pastel de forno de frango",
          ],
        } },
    ],
  },

  galeria: {
    titulo: "Galeria",
    fotos: [
      { foto:f("manu1")},  
      { foto:f("vulcao")},      
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
      { titulo:"Nossa história", texto:"Somos especialistas Nos Bolos em chantininho , atuando a mais de 8 anos na area da confeitaria, uma diversidade de produtos tais como: Doces e salgados em geral para sua comemoração, estamos prontos para qualquer ocasião(Aniversário, casamento, batizado) Trabalhamos com bolos de Andares e tambem realizamos entregas dos nossos produtos !" },
      { titulo:"Nossa missão",   texto:"Nossa missao e Fazer com que o contratante dos nossos serviços e convidados tenham uma otima experiência, Alem de se deliciarem com nossos Doces!" },
    ],
    fotos: [f("sobre2"), f("sobre1")],
  },

  feedbacks: {
    titulo: "O que nossos clientes dizem",
    lista: [   // foto é opcional: sem foto aparece a inicial do nome
      { ativo:true, foto:"", nome:"Cliente", estrelas:5, texto:"Foi tudo um sucesso! O bolo, os salgados, os doces e os pães estavam maravilhosos. Dá para sentir o carinho e o capricho em cada detalhe. Muito obrigada por fazer parte desse momento especial!" },
      { ativo:true, foto:"", nome:"Cliente", estrelas:5, texto:"Manu, seu bolo estava lindo e delicioso — superou minhas expectativas! Foi o melhor que já comi. Que Deus abençoe você e sua família. Em João Pessoa, não encontrei confeitaria com bolo tão gostoso quanto o seu." },
      { ativo:true, foto:"", nome:"Cliente", estrelas:5, texto:"Meus bolos ficaram perfeitos, exatamente como imaginei. Você é uma profissional maravilhosa! Que Deus abençoe você sempre." },
    ],
  },

  contato: {
    titulo: "Contato",
    whatsappExibido: "(00) 00000-0000",
    telefone: "(00) 00000-0000",
    instagram: "@manucaakes", instagramLink: "https://instagram.com/manucaakes",
    endereco: "Rua Exemplo, 000 - Cidade/UF",
    horario: "Seg a Sáb, 9h às 18h",
  },
};
