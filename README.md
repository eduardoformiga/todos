# TODOs

> Aplicação de TODOs.

Link: https://todo-guava.herokuapp.com/

## Nuxt - Server Side Render (SSR)
A aplicação foi desenvolvida utilizando Vue.js, mais precisamente utilizando o [Nuxt](https://nuxtjs.org/) em modo universal para obter os benefícios do Server Side Render (SSR). O Nuxt é um framework open source que traz simplicidade e poderes ao desenvolvimento web em Vue.js.

Alguns Benefícios: 
- Arquitetura modular: com mais de 50 módulos que facilitam o desenvolvimento.
- Otimizações em performance: utilizando as melhores práticas e mantendo um bundle final comprimido, removendo partes desnecessárias do pacote.
- Server Side Render:
  - Primeira renderização mais rápida entregando o html baseado nos componentes Vue ao browser, ao invés de javascript puro.
  - Ganhos com melhorias de SEO, UX e outras oportunidades (em comparação com um Vue SPA tradicional).
  - Code splitting automático para carregamento de páginas mais rapidamente.
  - Configurações customizáveis de Babel e Webpack com suporte a HMR (Hot Module Replacement).


## CSS e Atomic Design
- [SASS](https://sass-lang.com/) como pré processador de CSS, o que dá mais poderes ao CSS e possibilita uma melhor experiência de desenvolvimento.
- [PostCSS](https://postcss.org/) autoprefixer, para adicionar os vendors dos browsers automaticamente.
- [Atomic Design](https://bradfrost.com/blog/post/atomic-web-design/) como metodologia de desenho da interface, onde Átomos e Moléculas foram pensados como componentes stateless, enquanto Organismos, Templates e Pages como componentes statefull.
- Layout responsivo utilizando Grid, Flexbox, Media Queries (auxílio do módulo nuxt-mq) e da tag [Picture](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/picture) com media queries para auxiliar no carregamento de imagens menores no mobile (visando performance).


## Firebase - Cloud Firestore
Aplicação utiliza o serviço de database [Cloud Firestore](https://firebase.google.com/docs/firestore) para sincronização das tasks.

Obs: a aplicação funciona offline através de Service Workers. Neste caso, a sincronização com o firebase fica comprometida.

## Features adicionais
- Modal de confirmação de exclusão customizado.
- Estado de carregamento e transições adicionados.

## Auditoria - LightHouse 
Durante o desenvolvimento, o LightHouse foi utilizado para realizar auditorias com a finalidade de identificar problemas que afetam performance, acessibilidade e experiência do usuário, servindo como guia para realizar os ajustes necessários.

Os seguintes critérios foram levados em consideração, utilizando uma rede simulada lenta 4G:

- Performance
- Acessibilidade
- Melhores práticas
- SEO
- PWAs

Resultados:

<b>Web</b> - Relatório detalhado em: https://lighthousetodo.netlify.com/
![LightHouse Web](https://lighthousetodo.netlify.com/img/web.png)

<b>Mobile</b> - Relatório detalhado em: https://lighthousetodo.netlify.com/mobile
![LightHouse Mobile](https://lighthousetodo.netlify.com/img/mobile.png)


<b>PWA</b> - Adicionando o app com a opção "Adicionar à Tela de Início"

<p align="left">
  <img src="https://lighthousetodo.netlify.com/img/pwa1.png" alt="PWA option 1" width="200" height="350">
  <img src="https://lighthousetodo.netlify.com/img/pwa2.png" alt="PWA option 2" width="200" height="350">
</p>

Obs: o LightHouse pode ser acessado via a aba Audits do DevTools no Google Chrome.

## Build e Deploy 
A fim de obter os benefícios de SSR com o Nuxt.js necessitamos do Node.js. Desta forma, escolhemos o [Heroku](https://www.heroku.com/), como Plataforma como Serviço (Platform as a Service, ou PaaS). 

O Heroku é um serviço de computação na nuvem que nos proporciona um ambiente pronto para receber a aplicação com pouca configuração e totalmente integrado ao GitHub, bastando um push na branch remota do heroku para iniciar o fluxo de build e deploy da aplicação na Cloud.

link da aplicação: https://todo-guava.herokuapp.com/

## Build Setup

``` bash
# install dependencies
$ npm run install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start
```
