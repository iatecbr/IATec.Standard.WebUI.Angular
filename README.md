# IATec Product Buget WebUI Angular

Esta template, gerada com [Angular CLI](https://github.com/angular/angular-cli) versão 19 e baseada no design system
do [IATec Nephos](#), é parte do projeto de padronização de desenvolvimento de aplicações web da IATec. Ela serve como
guia ou ponto de partida inicial para o desenvolvimento.

## Implicações Legais

Esta template é destinado exclusivamente para uso interno da IATec e não deve ser usado fora deste contexto. Ela inclui
bibliotecas externas que exigem licenciamento, e o uso indevido pode resultar em ações legais.

O uso desta template sem a devida autorização pode resultar em ações legais. Se você é um membro da IATec e está
inseguro sobre como usar este projeto, por favor, entre em contato com o time de arquitetura do IATec para orientação.

O IATec não se responsabiliza por qualquer uso indevido desta template ou de qualquer ação legal que possa resultar
desse uso indevido.

## Antes de Começar

### Credenciais NPM

Esta template consome pacotes privados do artefatos no azure devops do IATec, portanto é necessário configurar as
credenciais do npm para com um personal access token. Para isso, copie e renomeie o arquivo [
`.npmrc.pipeline`](.npmrc.pipeline) para `.npmrc` e insira as credenciais geradas com seu usuário no azure devops, o
memso pode ser feito de modo global salvando na raiz da pasta do usuário logado.

***Não compartilhe ou envie o arquivo ao repositório git, cada desenvolvedor deve configurar as suas credências.***

Consulte a documentação
do [IATec Artefatos](https://dev.azure.com/sda-iatec/IATec.Services/_artifacts/feed/IATec.Community/connect) e escolha
npm para mais informações. Caso não tenha acesso, solicite ao time de arquitetura da IATec.

### O que alterar?

- [x] Alterar o nome do projeto no arquivo [`angular.json`](angular.json) na propriedade
  `projects->IATec.ProductBudget.WebUI` para o nome do projeto.
- [x] Alterar a pasta de destino do build do projeto no arquivo [`angular.json`](angular.json) na propriedade
  `projects->IATec.ProductBudget.WebUI->architect->build->options->outputPath` para um output compatível com o nome
  inserido no passo anterior e no arquivo [`azure-pipelines.yml`](azure-pipelines.yml) na propriedade `PathtoPublish` na
  task `PublishBuildArtifacts@1` para um output compatível com o nome inserido no passo anterior.
- [x] Alterar o nome do projeto no arquivo [`package.json`](package.json) na propriedade `name` para o nome do projeto.
- [x] Alterar o nome do projeto no arquivo [
  `public/favicons/manifest.webmanifest`](public/favicons/manifest.webmanifest) na propriedade `name` para o nome do
  projeto.
- [x] Alterar as cores de tema do navegador no arquivo [
  `public/favicons/manifest.webmanifest`](public/favicons/manifest.webmanifest) nas propriedades `theme_color` e
  `background_color` para a cor do tema do projeto.
- [x] Alterar a cor do título do navegador no arquivo [`src/index.html`](src/index.html) na propriedade `theme-color`
  para a cor do tema do projeto.
- [x] Alterar o título do projeto no arquivo [`src/index.html`](src/index.html) na propriedade `title` para o nome do
  projeto.
- [x] Gerar novos ícones do favicon neste site [favicon-generator](https://www.favicon-generator.org/) e substituir os
  ícones gerados na pasta [`public/favicons`](public/favicons). **Substitua somente os arquivos .png.**

### Personalização do Tema

Para personalizar o tema no seu projeto, você pode alterar as variáveis de cor substituindo as variáveis originais
dentro do bloco :root {} no arquivo styles.scss. Por exemplo:

```scss
  :root {
    --color-primary: #007bff;

    ect...
}
```

Essas variáveis podem ser usadas em todo o projeto para manter a consistência do tema. Para mais informações sobre as
variáveis de cor disponíveis, consulte a documentação do [`IATec Nephos`](#).

### Variáveis de Ambiente

As variáveis de ambiente da template estão localizadas no arquivo [
`src/app/app.environment.ts`](src/app/app.environment.ts). Porém, os valores são definidos nos arquivos [
`public/scripts/config.js`](public/scripts/config.js) para desenvolvimento local e [
`public/scripts/scripts.prod.js`](public/scripts/config.prod.js) para ambientes de produção, com substituição de
variáveis.

O arquivo [`public/scripts/config.js`](public/scripts/config.js) é carregado pelo arquivo [
`public/index.html`](public/index.html) quando o projeto é iniciado. No arquivo [
`src/app/app.environment.ts`](src/app/app.environment.ts) as variáveis são importadas através das variáveis
`env['variavel']`.

Para ambientes publicados, o arquivos [`public/scripts/scripts.prod.js`](public/scripts/config.prod.js) será renomeado
para `config.js` e substituído no build, as variaveis de ambiente devem ser substituídas na release do Azure DevOps.

### Configuração do Azure DevOps

Este projeto inclui 3 arquivos de pipeline de CI/CD para o Azure DevOps, sendo eles:

- [`azure-pipelines.yml`](azure-pipelines.yml) - Pipeline de CI/CD para o ambiente de produção.
- [`azure-pipelines-test.yml`](azure-pipelines-test.yml) - Pipeline de CI/CD para testes unitários, este deve ser
  incluído nas regras de pull request.
- [`azure-pipelines-sonar.yml`](azure-pipelines-sonar.yml) - Pipeline de CI/CD para análise de qualidade de código, este
  deve ser executado após novos códigos serem enviados para a branch main do projeto.

Em todos os casos, é necessário configurar as credenciais do npm na library do Azure DevOps com as variáveis que estão
no arquivo [`.npmrc.pipeline`](.npmrc.pipeline).

O nome da library do Azure DevOps deve ser `nuget-credentials`, não esqueça de criar e vincular a library ao pipeline.

## Servidor de Desenvolvimento

Execute `ng serve` para um servidor de desenvolvimento. Navegue até `http://localhost:4200/`. O aplicativo será
recarregado automaticamente se você alterar qualquer um dos arquivos de origem.

## Mock de Dados

Os dados do projeto são mockados e estão localizados na pasta [`public/mock`](public/mock). Para alterar os dados, basta
editar o arquivo. Caso os dados venham de uma API, basta alterar a URL nos serviços que consomem os dados localizados
em [`src/app/core/services`](src/app/core/services).

## Executando Testes Unitários

Execute `ng test` para realizar os testes unitários via [Karma](https://karma-runner.github.io).

## Ajuda Adicional

Para obter mais ajuda sobre o Angular CLI, use `ng help` ou confira a
página [Visão Geral e Referência de Comandos do Angular CLI](https://angular.dev/tools/cli).

Caso ainda tenha dúvidas, consulte a documentação do [IATec Nephos](#) ou procure ajuda com o time de arquitetura da
IATec.

## Contribuições

Sinta-se à vontade para contribuir com o template, abrindo uma issue ou enviando um pull request.

# Updates

## Angular 17 to 19

- [x] Criar o arquivo `tailwind.config.js`.
- [x] Instalar o pacotes `@primeng/themes`, `tailwindcss-primeui`, `tailwindcss --save-dev`,`@tailwindcss/postcss`,
  `postcss --save-dev`
- [x] Criar o arquivo `taildind.css` na pasta `src` e configurar o tema e dependências do tailwind.
- [x] Reeimportar os estilos no `src/styles.css`.
- [x] Remover do arquivo index.html o link para o arquivo de layout com tema.
- [x] Adicionar o link para a font `Lato` no arquivo index.html.
- [x] Configurar o provider para o layout no `app.config.ts`.
- [x] Configurar o parametros to tema Nephos na template
  `src/app/templates/main-template/component/main-template.component.ts`
- [x] Customizar o tema no arquivo `styles.scss` usendo :root e variáveis css.

```scss
  :root {
    --color-primary: #007bff;

    ect...
}
  ```

- [x] Reeimportar os components do Nephos, visto que os components agora são standalone.
- [x] Corrigir as `<component slot></component>` para `<ng-template #slot><component></ng-template>` em
  `src/app/templates/main-template/component/main-template.component.html` e
  `src/app/modules/main/example/example.component.html`
- [x] Ao buildar o projeto, ignorar os warnings de css.
