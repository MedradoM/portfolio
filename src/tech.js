/*-------------------------tecnologias-------------------------------------*/
const techBtn = document.querySelectorAll(".tecnologias button")
const techTxt = document.querySelector("#sobre_mim_texto")
const texth1 = document.getElementById("sobre_mim_h1")
const textp = document.getElementById("sobre_mim_p")
const textR = document.getElementById("rating")
let linha = []


for (let i = 0; i < techBtn.length; i++){
    let botao = techBtn[i]
    const idTecla = botao.classList[1]

    botao.addEventListener("mouseover", ()=>{
        switch(i){
            case 0:
                linha = ["GitHub", "<strong> GitHub </strong> é uma plataforma de hospedagem de código-fonte e arquivos com controle de versão usando o <strong> Git </strong>, permitindo que os programadores ou qualquer usuário da plataforma contribuam em projetos privados e/ou Open Source em qualquer lugar do mundo.", "rating: 9.0"]
                mudaTexto(linha)   
            break;
                case 1:
                linha = ["Java", "<strong>Java</strong> é uma linguagem de programação versátil e orientada a objetos que é amplamente usada para desenvolver aplicativos de software em diversas plataformas. É conhecida por sua portabilidade, segurança e robustez, tornando-a uma escolha popular para o desenvolvimento de aplicativos empresariais, aplicativos móveis e sistemas embutidos. <br/> <strong>(Primeira linguagem de programação que eu tive contato)<strong>", "rating: 6.5"]
                mudaTexto(linha)   
            break;
            case 2:
                linha = ["Javascript", "<strong>JavaScript</strong> é uma linguagem de programação amplamente usada para criar interatividade e funcionalidade em páginas da web. Ela é executada diretamente no navegador do usuário e permite a manipulação de elementos <strong>HTML</strong>, comunicação com servidores e criação de aplicativos web dinâmicos.", "rating: 8.5"]
                mudaTexto(linha)       
            break;
            case 3:
                linha = ["Typescript", "<strong>TypeScript</strong> é uma linguagem de programação que estende o <strong>JavaScript</strong>, adicionando tipagem estática opcional. Ela ajuda a evitar erros comuns no desenvolvimento de software, fornecendo um sistema de tipos que permite aos desenvolvedores detectar problemas antes do tempo de execução. O código <strong>TypeScript</strong> é posteriormente compilado em <strong>JavaScript</strong> para ser executado nos navegadores ou em servidores.", "rating: 8.5"]
                mudaTexto(linha)    
            break;
            case 4:
                linha =[ "React", "O <strong>React</strong> é uma biblioteca <strong>JavaScript</strong> de código aberto com foco em criar interfaces de usuário em páginas web. Este framework também permite a criação de componentes reutilizáveis para nossa aplicação e a composição de elementos que podem ser alterados, sem a necessidade de recarregar a página.", "rating: 8.0"]
                mudaTexto(linha)    
            break;
            case 5:
                linha = ["Node.js", "<strong>Node.js</strong> é um ambiente de tempo de execução de código <strong>JavaScript</strong> que permite aos desenvolvedores criar aplicativos de servidor altamente escaláveis e eficientes. Ele é conhecido por ser não bloqueante e orientado a eventos, o que o torna ideal para construir servidores e aplicativos de rede de alto desempenho. <strong>Node.js</strong> é amplamente usado no desenvolvimento de aplicativos web, API e sistemas em tempo real.", "rating: 7.0"]
                mudaTexto(linha)    
            break;
                case 6:
                linha = ["MySQL", "O <strong>MySQL</strong> é um sistema de gerenciamento de banco de dados relacional (RDBMS) de código aberto amplamente usado para armazenar, gerenciar e recuperar dados. Ele oferece uma estrutura confiável e escalável para organizar informações em tabelas relacionadas e é usado em uma variedade de aplicativos, desde sites simples até sistemas de gerenciamento de dados empresariais complexos.", "rating: 5.5"]
                mudaTexto(linha)      
            break;
        case 7:
                linha = ["Firebase", "O <strong>Firebase</strong> é uma plataforma de desenvolvimento de aplicativos móveis e web oferecida pelo Google. Ele fornece uma variedade de serviços e ferramentas, como autenticação de usuário, banco de dados em tempo real, hospedagem de sites, notificações em tempo real e análise de aplicativos. O <strong>Firebase</strong> simplifica o desenvolvimento de aplicativos, permitindo que os desenvolvedores se concentrem na criação de recursos em vez de se preocupar com a infraestrutura.", "rating: 8.5"]
                mudaTexto(linha)
        break;
        }


        
    })
}

function mudaTexto (linha,) {
    texth1.innerHTML = linha[0]
    textp.innerHTML = linha[1]
    textR.innerHTML = linha[2]
}

console.log("Olá :)")