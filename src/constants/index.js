import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "Sobre",
  },
  {
    id: "work",
    title: "Projetos",
  },
  {
    id: "contact",
    title: "Contato",
  },
];

const services = [
  {
    title: " Developer Senior Full Stack",
    icon: web,
  },
  {
    title: ".NET SENIOR",
    icon: mobile,
  },
  {
    title: "JAVA SENIOR",
    icon: backend,
  },
  {
    title: "ANGULAR,REACT , NODE",
    icon: creator,
  },
];

const technologies = [
  {
    name: "C#",
    icon: html,
  },
  {
    name: "JAVA",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "ANGULAR",
    icon: redux,
  },
  {
    name: "BANCOS RELACIONAIS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "FLUTTER",
    icon: mongodb,
  },
  {
    name: "KOLTLIN",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
 
];

const experiences = [
  {
    title: "Full stack Developer",
    company_name: "Wipro,Stoque",
    icon: starbucks,
    iconBg: "#383E56",
    dateWipro: "SETEMBRO 2021 - JUNHO 2022 / dateStoque:JUNHO 2021 - AGOSTO 2021",
    points: [
      "Devoloper full stack, trabalho com desenvolvimento a 17 anos linguagem principal a família Microsoft, seguido por Java ao longo do tempo acabei", 
      "aprendendo as outras linguagens e frameworks creio que tirando os recente desenvolvo em todos , front meu fotte seria Angular seguido de React, Mobile serião 3",
      "apenas Flutter,Koltlin e React Native analogia",
      "Trabalhei na wipro desenvolvendo e aprimorando sistema de uma corretora de seguros React.js Front, Back .Net core",
      "Na Stoque migrando sistema de MVC para .NETcORE Api rest com transição de dados pela AWS S3"
    ]
  },

  {
    title: "Full stack Developer",
    company_name: "VDG SISTEMAS",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points:[ 
      "Atuando no sistema desde o 0 ,começamos com delphi, em 2015 migrei para C#  banco mysql, em 2018 migrei novamente para .NET MVC RAZOR, banco cliente servidor e alguns ",
      "clientes optaram por loca na azure, 2020 encerrando minha passagem pela empresa desenvolvi sistema para android e ios em react native , nao gostei mudei para koltlin,",
      "e deixei ele no ar com flutter em 2021 onde encerrei minha passagem pela empresa sistema RP desktop, o frente emissor de cupons fiscais, e em 2020 retaguarda web com Angular."
    ]  
  },
  {
    title: "Full stack Developer",
    company_name: "Dimensa",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Atuei em um sistema cor bancario onde eu corrigia os erros do sistema feito em Java 11,desenvolvia melhorias  e novas funcionalidades",
      "atuava na performasse das resposta da transição de dados e treinava os estagiários, lá utilizei java,js,Angular,Html,Css,Wildflay,Jboos,eclipse como IDE, Banco ORACLE,",
      "kafka como mensageria e api de transição de dados"
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "AEC",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "JMarço 2023 - Julho 2023",
    points: [
      "Atuando atendendo todas as operadoras telefonicas com um VB banco sql server locado na Azure, correção e inicio de migração para tecnologia atual",
      "Automação com selennium em todas as operadoras,cofre de senha e monitoriamento em tempo real dos operadores",
      "Manutenção em diversos sistema da empresa desde VB ate java praticamente um multi tarefaz"
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Sempre prezando pela qualidade e agilidade nos processos de nosso sistema Fabiano esta de parabens.",
    name: "Patricia Santos",
    designation: "CFO",
    company: "Argo Seguros",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "Nunca conheci um desenvolvedor da Web que realmente se preocupasse com o sucesso de seus clientes como Veloso..",
    name: "Lucas Lima",
    designation: "COO",
    company: "VF Sistemas",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "Entrega do sistema na data sempre dando feedback pos venda",
    name: "Monica Santos",
    designation: "CTO",
    company: "Juarez Delivery",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Plataforma interativa e agradavel ao nossos clientes para esta utilizando retornando sempre mensagens positivas.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
    name: "RS EMPREGOS",
    description:"Aplicativo da Web que permite aos usuários pesquisar vagas de emprego, visualizar faixas salariais estimadas para cargos e localizar empregos disponíveis com base em sua localização atual.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Boate do Tião",
    description:
      "Sistema de facil utilização com resultados reais , relatorios perfeitos e a facilidade de usar no mobile.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
