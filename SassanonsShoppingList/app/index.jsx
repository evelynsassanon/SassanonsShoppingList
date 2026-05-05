import { link } from 'expo-router';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function Welcome() {
  return (
    <View style={styles.container}>
      <View style={styles.containerImage}>
        <Image
        source={require('../assets/download.jpg')}
        style={styles.download}
        />
      </View>
      <View style={styles.content}>
        <Text style={styles.tittle}>Sassanon's Shopping List</Text>
        <Text style={styles.text}>
          Monte sua lista de compras e não esqueça mais o que precisa comprar ao sair de casa!!!
        </Text>
        <link style={styles.button} href={"/home"}>
         <Text style={style.buttonText}>Acessar</Text>
        </link>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  containerImage:{
    flex: 2,
    allignItems: 'center',
    justifyContent: 'center',
  },
  download: {
    width: 230,
    height: 230,
    resizeMode:'cover',
   borderRadius: 115,
  },
  content: {
    flex: 1,
    backgroundColor: '#dadada',
    borderTopStartRadius: 25,
    borderTopEndRadius: 25,
    paddingHorizontal: 5,
  },
  tittle:{
    fontsize: 30,
    fontWeight: 'bold',
    marginVertical: 20,
    textAllign:'center'
  },
  text:{
    fontsize: 16,
    color: 'gray'
  },
  button:{

  },
  buttonText:{

  },
});
