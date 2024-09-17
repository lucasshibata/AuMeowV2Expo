import React from 'react';
import { ImageBackground, View, StyleSheet } from 'react-native';


export default (props:any)=>{
    const bgImg = require('../assets/images/bg_img.png');
    return(
        <View style={styles.container}>
            <ImageBackground  source={bgImg} style={styles.imgBg}>
                {props.children}
            </ImageBackground>
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    imgBg:{
        width:'100%',
        height:'100%',
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
});
