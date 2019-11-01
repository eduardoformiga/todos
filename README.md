# TODOs

> Aplicação de TODOs.

Link: https://todo-guava.herokuapp.com/

## Nuxt - Server Side Render (SSR)
A aplicação foi desenvolvida utilizando Vue.js, mais precisamente utilizando o Nuxt em modo universal para obter os benefícios do Server Side Render (SSR). O Nuxt é um framework open source que traz simplicidade e poderes ao desenvolvimento web em Vue.js.
Alguns Benefícios: 
- Arquitetura modular: com mais de 50 modulos que facilitam o desenvolvimento.
- Otimizações em performance: utilizando as melhores práticas e mantendo um bundle final comprimido, removendo partes desnecessárias do pacote.
- Server Side Render:
  - Primeira renderização mais rápida entregando o html baseado nos componentes Vue ao browser, ao invés de javascript puro.
  - Ganhos com melhorias de SEO, UX e outras oportunidades (em comparação com um Vue SPA tradicional).
  - Code splitting automático para carregamento de páginas mais rapidamente.
  - Configurações customizáveis de Babel e Webpack com suporte a HMR (Hot Module Replacement).

Mais detalhes do nuxt: https://nuxtjs.org/

## CSS e Atomic Design
No CSS foi utilizado o SASS como pré processador, e ainda o postcss autoprefixer, para adicionar os vendors dos browsers.

Atomos, Moleculas, Organismos, Templates e Pages. Sendo Atomos e moleculas componentes stateless e os demais statefull 

Layout responsivo

Mobile - Picture com media, performance etc

## Backend Firebase
Aplicação utiliza o FireStore ...
Aplicação funciona offline, através de Service Workers. Neste caso a sincronização com o firebase fica comprometida.

## Features adicionais
- Modal de confirmação de exclusão customizado;
- Estado de carregamento e transições adicionados

## Audit - LightHouse 
### Performance
### Acessibilidade
### Melhores práticas
### SEO
### PWAs


## Build e Deploy 
Heroku, SSR exige um servidor Node.
link: https://todo-guava.herokuapp.com/

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

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).
