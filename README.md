# Twinkle_Tycho_NASA_Space_Apps_2022
![Imagem](https://github.com/MrVtR/Twinkle_Tycho_NASA_Space_Apps_2022/blob/main/src/Assets/images/logo1.png)
## Project concept
This project consists of performing the NASA Space Apps Marathon 2022 challenge, our team's theme is [TWINKLE, TWINKLE, LITTLE STAR](https://2022.spaceappschallenge.org/challenges/2022-challenges/twinkle-twinkle-little-star/teams/twinkle-tycho/project), we use ReactJS to perform the project, along with the help of libraries that will be listed below <br/>
The site created has Six main tabs planned:
1. **Home** - Página para introduzir o leitor ao conteúdo do site, onde fornecemos descrições de quais seções principais que poderão ser econtradas, todas estes textos possuem um redirecionamento para a respectiva seção.
2. **Visualizer** - Página destinada para apresentar o visualizador especial de estrelas adicionado pelo grupo, dentro dele, é possível pesquisar e escolher corpos celestes para verificar mais deatalhes sobre eles. Além disso, foi feito a inclusão de alguns exemplos e Estrelas Variáveis predizidos pelo grupo durante a etapa de inclusão de Machine Learning, para classificar estrelas, verificando se há ou não a presença de variações estelares. Por fim, esta aba também apresenta ao leitor uma legenda e quais funções estão presentes no visualizações, bem como a forma de usá-las.  
3. **Learn** - Esta página contém uma forma de ensinar o leitor sobre o assunto de Estrelas Variáveis, contando com uma série de videos educativos feitos pelo grupo durante o desafio, o leitor poderá assisí-los e ao final de todos os vídeos, testar seus conhecimentos obtidos em um quiz criado pelos membros.
4. **Start Simulation** - Nesta seção, há a inclusão de um jogo feito pela equipe, com o objetivo de permitir que o leitor tenha uma imersão no assunto, criando a sua própria estrela. A partir de opções dentro do jogo, um fluxo de programação é estabelecido e ao final, é mostrado para o leitor o resultado final gerado, sendo uma breve descrição da estrela criada e qual o seu comportamento variável que pode ser observado em forma de gif.
5. **Resources** - Nesta página, o leitor poderá conferir todos os dados que foram utilizados pelo grupo, bem como os softwares e bibliotecas usadas, ao final da página, há uma seção que informa como o grupo foi formado e fotos individuais de cada membro.
6. **Chatbot** - O chatbot não é uma página, mas sim uma função que está presente no site inteiro de forma interativa. O leitor pode fazer perguntas para uma inteligência artificial instanciada pelo grupo no site, que foi treinada com dados gerados de forma autoral, com isso, é possível aprender mais sobre o assunto do desafio e do funcionamento da aplicação, além de descobrir diversas curiosidades encontradas pelo grupo durante o projeto de uma forma lúdica e prática.

## Prerequisites and resources used
For the project to be realized, the following dependencies for ReactJS were used:
1. [ReactJS: 0.17.1](https://github.com/facebook/react/releases)
2. [React-router-dom: 5.2.0](https://reactrouter.com/web/guides/quick-start)
3. [Node Sass: 4.14.1](https://www.npmjs.com/package/node-sass/v/4.14.1)
4. [jQuery](https://jquery.com)
6. [Aladim Lite](https://aladin.u-strasbg.fr/AladinLite/)
7. [mapboxgl](https://www.mapbox.com)
8. [mapbox-gl-geocoder](https://github.com/mapbox/mapbox-gl-geocoder)
  
## Step by step
1. The team of 6 people met during 01/10/2022 and 02/10/2022, for 48 hours we collected data from NASA to feed our application
2. I created the project and mapped the routes through React-router-dom, and configured the API requests with Axios
3. I created the common components that could be used in the whole project
4. I researched the libraries that use geolocation to be included inside our site
5. During the middle of the competition, we finalized a game to make people aware of their actions by including it within the web application
6. Finally, we did predictive analysis on the increase of temperatures within our country, so that it may be possible to alert the population and suggest practices that decrease damage to their physiological systems

## Installation
To install the project dependencies locally, use the instruction below:
1. After downloading the project, type ``yarn install`` in terminal and wait for the dependencies to install, after that, go to the [Execution](#Execution) step

## Execution
To run the program you need to install the dependencies used, which are in the package.json and after that run the project,to be operations, use the commands below:
1. Type ``yarn start`` in the terminal to run the project in development mode.


## Web application authored in ReactJS
* Vítor Ribeiro ([MrVtR](https://github.com/MrVtR))
* João Pedro Cosso ([joaopedrocosso](https://github.com/joaopedrocosso))
