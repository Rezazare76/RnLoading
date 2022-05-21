import React, { useRef, useEffect,useState } from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { Platform, StyleSheet,Image,Text,View,ImageBackground, Dimensions,Animated, Easing } from 'react-native';
interface Route {
    origin: string;
    destination: string;
}
export default function Loading({origin,destination}:Route) {
  const {width,height} = Dimensions.get('window');

  // const imageHeight = Math.round(dimensions.width * 9 / 16);
  // const imageWidth = dimensions.width;
  let spinValue = new Animated.Value(0);
  Animated.loop(
    Animated.timing(
      spinValue,
      {
       toValue: 1,
       duration: 3000,
       easing: Easing.linear,
       useNativeDriver: false
      }
    )
   ).start();
const spin = spinValue.interpolate({
  inputRange: [0, 1],
  outputRange: ['0deg', '360deg']
})
  return (
    <View style={styles.container} >
      
      <View style={styles.loadingContainer}>
        <Image style={{ height:width, width: width,position:'absolute',opacity:0.52,}} source={require('./world-dotted-map.png')} />
        <Animated.View style={{transform: [{rotate: spin}] }} >
        <View style={[styles.border,{transform: [{ rotate: '1deg' }],width:width*0.5,height:width*0.5}]}>
        <FontAwesome
                name="plane"
                size={25}
                color='blue'
                style={{ position:'absolute',top:45,right:-2,transform:[{rotate:'113deg'}],color:'#079082' }}
              />
              <FontAwesome
                name="plane"
                size={25}
                color='blue'
                style={{ position:'absolute',left:0,bottom:45,transform:[{rotate:'289deg'}],color:'#079082' }}
              />
       </View>
      </Animated.View>
      
        <View  style={[styles.loading,{width:width*0.6}]}>
          <Text style={styles.text}>{origin}</Text>
          <Text style={styles.text}>{destination}</Text>
        </View>
      </View>
      
      <Image style={{width: width,flex:2}} source={require('./City.jpg')} resizeMode = 'cover'/>
    </View>
    
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'white',
  },
  loadingContainer: {

    alignItems: 'center',
    justifyContent: 'center',
    flexDirection:'column',
    flex:3,
    position:'relative',
    width:'100%'
  
  },

  wordDotted: {
    width:'100%',
    height:'80%',
    position:'absolute',
    opacity:0.2,
  },
  loading:{
    textAlign:'center',
    position:'absolute',
    display:'flex',
    justifyContent:'space-around',
    flexDirection:'row'
  },
  text:{
    fontSize: 20,
    fontWeight: 'bold',
    color:'#079082',
  },
  border:{
    borderTopWidth:2,
    borderBottomWidth:2,
    borderColor:'#079082',
    borderRadius:600,
    padding:50,
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    position:'relative',
    borderLeftWidth:0.1,
    borderLeftColor:'transparent',
    borderRightWidth:0.1,
    borderRightColor:'transparent',
  }
});


/**
world dotted : https://www.vecteezy.com/vector-art/640076-black-on-white-dotted-world-map-vector
liner city image : https://limooi.net/%D9%88%DA%A9%D8%AA%D9%88%D8%B1-%D8%B4%D9%85%D8%A7%D8%B1%D9%87-00047827/
responsive image solution : https://stackoverflow.com/questions/52675852/responsive-image-in-react-native
 */