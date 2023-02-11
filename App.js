import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

export default function App() {
  const [frase, setFrase] = useState('Todo mundo odeia o Chris - App');
  const [img, setImg] = useState(require('./src/images/ebhc.png'));

  function escolherPersonagem() {
    let numeroAleatorio = Math.floor(Math.random() * frases.length)
    /*let numeroAleatorio = 5*/

    setImg(imgs[numeroAleatorio])
    setFrase(`"${frases[numeroAleatorio]}" - ${ autor[numeroAleatorio]}`)
    console.log(numeroAleatorio)
  }

  function home() {
    setFrase('Todo mundo odeia o Chris - App');
    setImg(require('./src/images/ebhc.png'));
  }
  let frases = [
    /*Frases do Julius*/
    'Tire esse relógio da tomada, garoto. Você não consegue ver a hora enquanto dorme! São 2 centavos a hora!',
	  'Aceita vale-refeição?',
	  'Acha que eu estou brincando? Quando estiver no chuveiro, eu vou estar lá. Quando estiver vendo TV, eu vou estar lá. Quando estiver sonhando, eu vou estar lá.',
	  'São 49 centavos de leite derramado em toda a mesa. Alguém vai ter que beber esse leite!',
	  'Uma coisa que aprendi em relação às mulheres é que mesmo quando você tá certo, você tá errado',
	  'Por que eu vou sair pra relaxar se eu posso relaxar em casa, que é grátis?',
	  'Se eu não comprar nada, o desconto é maior',
	  'Dirigir? Claro que pode. Depois que fizer 16, for pra autoescola, tirar sua carteira, se formar no colégio, arranjar um emprego, sair da minha casa, comprar um carro, pagar o seguro, aí vai',

    /*Drew*/
    'Cara ainda bem que eu não sou voce',
	  'Não fui eu',

    /*Greg*/
    'Cara, ela está tão na sua!',
	  'Conhecer um cara em que o irmão mais novo já tenha beijado é o mais perto que eu ja cheguei de uma garota.',

    /*Golpe-Baixo*/
    'Um adam doze, um adam doze, façam uma busca de Chris e Drew, façam uma busca de Chris e Drew.',

    /*Jerome*/
    'Carinhaa que mora logo alí.. passa um dolar!',

    /*Malvo*/
    'É dureza assaltar uma loja de armas,... tem armas lá',
    'Paaai?',

    /*Perigo*/
    'Olha, vocês podem adotar uma dessas crianças africanas por 17 centavos por dia. E o melhor: não vão morar com vocês!',

    /*Thurman*/
    'Por acaso eu estou com um óculos de sol e um piano??',

    /*Cara da pedrinha*/
    'Aí desculpa ai policial, é que eu quero dar uma queixa. Sabe, roubaram a minha pedrinha',

    /*Chris*/
    'Aprendemos que a razão da minha mãe gritar não era porque ela gostava. Era porque se ela não gritasse, ninguém a ouviria.',
	  'Meu pai não era do tipo que dizia "eu te amo". Ele era um dos 4 pais do quarteirão. "Te vejo pela manhã" significava que ele ia voltar pra casa. Voltar pra casa era a maneira dele de dizer "eu te amo". ',
	  'Ah! Sabe como é, né? ',
	  'Ver a minha mãe tão feliz assim fez tudo valer a pena.',

    /*Senhorita Morelo*/
    'Chris, você pode ser negro, mas não é a prova de fogo!',
    'Chris, se você tivesse um pai.',
    'O povo do Chris tem o costume acordar com o canto do galo para ir trabalhar no campo.',
    'Chris, eu estou muito decepcionada com você! Eu sei que nicotina, torresmo e bebidas fortes são vícios dos negros! Mas por que infectar o Greg?'
  ]
  let imgs = [
    /*Julius*/
    require('./src/images/julius/j1.png'),
    require('./src/images/julius/j2.png'),
    require('./src/images/julius/j3.png'),
    require('./src/images/julius/j4.png'),
    require('./src/images/julius/j5.png'),
    require('./src/images/julius/j6.png'),
    require('./src/images/julius/j7.png'),
    require('./src/images/julius/j8.png'),
    /*Drew*/
    require('./src/images/d1.png'),
    require('./src/images/d2.png'),
    /*Greg*/
    require('./src/images/g1.png'),
    require('./src/images/g2.png'),
    /*Golpe-Baixo*/
    require('./src/images/gb.png'),
    /*Jerome*/
    require('./src/images/j1.png'),
    /*Malvo*/
    require('./src/images/m1.png'),
    require('./src/images/m2.png'),
    /*Perigo*/
    require('./src/images/p1.png'),
    /*Thurman*/
    require('./src/images/t1.png'),
    /*Cara da pedrinha*/
    require('./src/images/pd1.png'),
    /*Chris*/
    require('./src/images/chris/c1.png'),
    require('./src/images/chris/c2.png'),
    require('./src/images/chris/c3.png'),
    require('./src/images/chris/c4.png'),
    /*Senhorita Morelo*/
    require('./src/images/prof/s1.png'),
    require('./src/images/prof/s2.png'),
    require('./src/images/prof/s3.png'),
    require('./src/images/prof/s4.png')
  ]

  let autor = [
    /*Julius*/
    'Julius',
    'Julius',
    'Julius',
    'Julius',
    'Julius',
    'Julius',
    'Julius',
    'Julius',
    /*Drew*/
    'Drew',
    'Drew',
    /*Greg*/
    'Greg',
    'Greg',
    /*Golpe-Baixo*/
    'Golpe-Baixo',
    /*Jerome*/
    'Jerome',
    /*Malvo*/
    'Malvo',
    'Malvo',
    /*Perigo*/
    'Perigo',
    /*Thurman*/
    'Thurman',
    /*Cara da pedrinha*/
    'Cara da pedrinha',
    /*Chris*/
    'Chris',
    'Chris',
    'Chris',
    'Chris',
    /*Senhorita Morelo*/
    'Senhorita Morelo',
    'Senhorita Morelo',
    'Senhorita Morelo',
  ]
  return (
    <View style={styles.container}>
      <Image source={img} style={{width: 300, height: 200, borderRadius: 10}}/>
      
      <View style={{width: 310}}>
        <Text style={{marginTop: 20, fontSize: 17, color: '#FFF', textAlign: 'center'}}>{frase}</Text>
      </View>

      <TouchableOpacity onPress={escolherPersonagem} style={{marginTop: 30, width: 150, height: 40, borderWidth: 2, borderColor: '#12fb21', alignItems: 'center', justifyContent: 'center', borderRadius: 20}}>
        <Text style={{textAlign: 'center', fontSize: 17, color: 'orange'}}>Nova frase</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={home} style={{marginTop: 30, width: 150, height: 40, borderWidth: 2, borderColor: '#fff', alignItems: 'center', justifyContent: 'center', borderRadius: 20}}>
        <Text style={{textAlign: 'center', fontSize: 17, color: '#fff'}}>Home</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#151515',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
