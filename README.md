Este é um projeto Next.js inicializado com create-next-app.

# Começando

Primeiro, instale as dependências do seu projeto:

```bash
npm install
#ou
yarn install
```
Segundo, execute o servidor de desenvolvimento:

```bash
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) com seu navegador para ver o resultado.

# Atualização de projetos

É necessário as [instalações de Docker e WSL](https://docs.docker.com/desktop/install/windows-install/) no seu computador para o envio das alterações para [HOMOLOG](https://blink-site-web-hmg-docker.azurewebsites.net/) ou [PRODUÇÃO](https://blinkbiotech.com/).

## Comando docker para atualização de homolog

```bash
## projeto no git - branch homolog

# LOGIN:
docker login blinkdocker.azurecr.io -u blinkdocker -p DyVf+90Py7qRvAa45ge9IqDK24RMGezz

# BUILD
docker build -t blinkdocker.azurecr.io/blink-docker:latest .

# PUSH:
docker push blinkdocker.azurecr.io/blink-docker:latest
```

## Comando docker para atualização de produção

```bash
## projeto no git - branch master

# LOGIN:
docker login blinkdockerprod.azurecr.io -u blinkdockerprod -p mA05J8vPRWtq8CTlbK6aAFzpeas8pN4TG8dXeWTNyV+ACRABEY/E

# BUILD
docker build -t blinkdockerprod.azurecr.io/blink-docker:latest .

# PUSH:
docker push blinkdockerprod.azurecr.io/blink-docker:latest
```
