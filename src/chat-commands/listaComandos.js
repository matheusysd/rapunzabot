const colors = require('../colors/colors');
const light = require('../magic-home/magic-home');


const comandos = {
    bot: () => "/me O Rapunzel me criou pra ajudar aqui nessa stream mas tô com outros planos pro futuro 😈",
    cor: (cor) => {
        if (colors.hasOwnProperty(cor)) {
            light.setColor(colors[cor][0], colors[cor][1], colors[cor][2]).then((success) => (`/me Mudando a cor da luz para ${cor}.`)
            ).catch(error => console.log(error));
        }
        else {
            if (cor === 'preto' || cor === 'preta') {
                return ('/me Lá vai mais um bobo tentar desligar a lâmpada kkkkk comédia');
            }
            else if (cor === 'undefined') {
                return ("Pra utilizar esse comando vc precisa passar uma cor. Por exemplo: !cor azul")
            }
            else {
                return (`/me A cor ${cor} não está disponível, para saber quais as disponíveis, utilize o comando !cores.`);
            }
        }
    },
    cores: () => `/me As cores disponíveis no momento são: ${Object.keys(colors).join(', ')}. Se tem alguma sugestão fala ai.`,
    reyna: () => {
        light.setColor(127, 0, 255).then((success) => console.log(success)).catch(error => console.error(error));
        return "/me Eles vão temer 😈 "
    },
    headset: () => "/me Redragron Zeus Sakura",
    jazen: () => "/me Stream do jazen ~> https://www.twitch.tv/samueljazen",
    kev: () => "/me Stream do kev ~> https://www.twitch.tv/yzkev",
    monitor: () => `/me AOC HERO 24" 144Hz`,
    mouse: () => "/me Logitech G703 Lightspeed",
    nt: () => "/me nem tentou",
    operator: () => "/me rapunzel de operator 🤝 ganhamo",
    pc: () => "/me i5-10400F 16GB GTX 1660 SUPER mais informações na descrição do canal",
    rank: () => "/me PLAT 3",
    sociais: () => "/me Twitter ~> twitter.com/_rapunzelo Insta ~> instagram.com/matheus.yurisd/",
    twitter: () => "/me segue o pai lá https://twitter.com/_rapunzelo",
    voosm: () => "/me Da uma moral pro voosm lá ~> https://www.twitch.tv/vooosm",
    light: () => JSON.stringify(light),
}

module.exports = comandos;
