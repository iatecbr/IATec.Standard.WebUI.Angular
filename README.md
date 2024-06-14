# IATec Standard WebUI Angular

Este projeto, gerado com [Angular CLI](https://github.com/angular/angular-cli) versão 18.0.2 e baseado no design system do [IATec Nephos](#), é parte do projeto de padronização de desenvolvimento de aplicações web da IATec. Ele serve como guia ou ponto de partida inicial para o desenvolvimento.

## Implicações Legais

Este projeto é destinado exclusivamente para uso interno da IATec e não deve ser usado fora deste contexto. Ele inclui várias bibliotecas externas que exigem licenciamento, e o uso indevido dessas bibliotecas pode resultar em ações legais.

Antes de usar qualquer parte deste projeto, certifique-se de entender completamente as licenças de todas as bibliotecas incluídas e de que você tem permissão para usá-las no contexto desejado. Se você não tem certeza, consulte o time de arquitetura da IATec.

O uso deste projeto sem a devida autorização pode resultar em ações legais. Se você é um membro da IATec e está inseguro sobre como usar este projeto, por favor, entre em contato com o departamento jurídico da IATec para orientação.

A IATec não se responsabiliza por qualquer uso indevido deste projeto ou de qualquer ação legal que possa resultar desse uso indevido.

## Antes de Começar

### Credenciais NPM IATec

Este template consome pacotes privados da IATec, para isso é necessário configurar as credenciais do npm para o usuário IATec. Para isso, copie e renomeie o arquivo [`.npmrc.pipeline`](.npmrc.pipeline) para `.npmrc` e insira as credenciais de seu usuário IATec. 

***Não compartilhe ou envie o arquivo ao repositório git, cada desenvolvedor deve configurar as suas credências.***

Consulte a documentação do [IATec Artefatos](https://dev.azure.com/sda-iatec/7You/_artifacts/feed/IATec.Community/connect) e escolha npm para mais informações. Caso não tenha acesso, solicite ao time de arquitetura da IATec.

### O que alterar?

- [ ] Alterar o nome do projeto no arquivo [`angular.json`](angular.json) na propriedade `projects->IATec.Standard.WebUI.Angular` para o nome do projeto.
- [ ] Alterar a pasta de destino do build do projeto no arquivo [`angular.json`](angular.json) na propriedade `projects->IATec.Standard.WebUI.Angular->architect->build->options->outputPath` para um output compatível com o nome inserido no passo anterior e no arquivo [`azure-pipelines.yml`](azure-pipelines.yml) na propriedade `PathtoPublish` na task `PublishBuildArtifacts@1` para um output compatível com o nome inserido no passo anterior.
- [ ] Alterar o nome do projeto no arquivo [`package.json`](package.json) na propriedade `name` para o nome do projeto.
- [ ] Alterar o nome do projeto no arquivo [`public/favicons/manifest.webmanifest`](public/favicons/manifest.webmanifest) na propriedade `name` para o nome do projeto.
- [ ] Alterar as cores de tema do navegador no arquivo [`public/favicons/manifest.webmanifest`](public/favicons/manifest.webmanifest) nas propriedades `theme_color` e `background_color` para a cor do tema do projeto.
- [ ] Alterar a cor do título do navegador no arquivo [`src/index.html`](src/index.html) na propriedade `theme-color` para a cor do tema do projeto.
- [ ] Alterar o título do projeto no arquivo [`src/index.html`](src/index.html) na propriedade `title` para o nome do projeto.
- [ ] Gerar novos ícones do favicon neste site [favicon.io](https://favicon.io/favicon-generator/) e substituir os ícones gerados na pasta [`public/favicons`](public/favicons). **Substitua somente os arquivos .png.**

### Personalização do Tema

É possível personalizar o tema do projeto alterando as variáveis de cor nos arquivos CSS localizados em [`public/layout/styles`](public/layout/styles). Para mais informações sobre as variáveis de cor disponíveis, consulte a documentação do [IATec Nephos](#).

### Variáveis de Ambiente

As variáveis de ambiente do projeto estão localizadas no arquivo [`src/environments/environment.ts`](src/environments/environment.ts). Porém, os valores são definidos nos arquivos [`public/environments/environment.js`](public/environments/environment.js) para desenvolvimento local e [`public/environments/environment.prod.js`](public/environments/environment.prod.js) para ambientes de produção, com substituição de variáveis.

O arquivo [`public/environments/environment.js`](public/environments/environment.js) é carregado pelo arquivo [`public/index.html`](public/index.html) e o arquivo [`public/environments/environment.prod.js`](public/environments/environment.prod.js) é carregado pelo arquivo [`src/index.html`](src/index.html) quando o projeto é iniciado. No arquivo [`src/environments/environment.ts`](src/environments/environment.ts) as variáveis são importadas através das variáveis `env['variavel']`.

### Configuração do Azure DevOps

Este projeto inclui 3 arquivos de pipeline de CI/CD para o Azure DevOps, sendo eles:
- [`azure-pipelines.yml`](azure-pipelines.yml) - Pipeline de CI/CD para o ambiente de produção.
- [`azure-pipelines-test.yml`](azure-pipelines-test.yml) - Pipeline de CI/CD para testes unitários, este deve ser incluído nas regras de pull request.
- [`azure-pipelines-sonar.yml`](azure-pipelines-sonar.yml) - Pipeline de CI/CD para análise de qualidade de código, este deve ser executado após novos códigos serem enviados para a branch main do projeto.

Em todos os casos, é necessário configurar as credenciais do npm na library do Azure DevOps com as variáveis que estão no arquivo [`.npmrc.pipeline`](.npmrc.pipeline).

O nome da library do Azure DevOps deve ser `nuget-credentials`, não esqueça de vincular a library ao pipeline.

## Servidor de Desenvolvimento

Execute `ng serve` para um servidor de desenvolvimento. Navegue até `http://localhost:4200/`. O aplicativo será recarregado automaticamente se você alterar qualquer um dos arquivos de origem.

## Mock de Dados

Os dados do projeto são mockados e estão localizados na pasta [`public/mock`](public/mock). Para alterar os dados, basta editar o arquivo. Caso os dados venham de uma API, basta alterar a URL nos serviços que consomem os dados localizados em [`src/app/core/services`](src/app/core/services).

## Executando Testes Unitários

Execute `ng test` para realizar os testes unitários via [Karma](https://karma-runner.github.io).

## Ajuda Adicional

Para obter mais ajuda sobre o Angular CLI, use `ng help` ou confira a página [Visão Geral e Referência de Comandos do Angular CLI](https://angular.dev/tools/cli).

Caso ainda tenha dúvidas, consulte a documentação do [IATec Nephos](#) ou procure ajuda com o time de arquitetura da IATec.

## Contribuições

Sinta-se à vontade para contribuir com o template, abrindo uma issue ou enviando um pull request.
