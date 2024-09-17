import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import BackGround from '../../components/BackGround';
import WhiteBox from '../../components/WhiteBox';
import BtnComp from '../../components/BtnComp';
import RenderLogo from '../../components/RenderLogo';
import Space from '../../components/Space';


export default function CreateUser({navigation}:any){
	return(
		<BackGround>
			<RenderLogo/>
			<Space h={10}/>
			<WhiteBox>
				<Text style={styles.title}>Bem-vindo ao AuMeow!</Text>
				<Space h={10}/>
				<Text style={styles.txt}>Escolha uma opção para se cadastrar:</Text>
				<Space h={10}/>
				<View style={styles.containerBtns}>
					<BtnComp
						labelButton="Dono de Pet"
						toPress={()=>navigation.navigate('CadastroDono')}
					/>
					<BtnComp
						labelButton="Prestador de Serviços"
						toPress={()=>navigation.navigate('CadastroPrestador')}
					/>
				</View>
			</WhiteBox>
		</BackGround>
	);
}

const styles = StyleSheet.create({
	title:{
		fontSize:30,
		color:'#7360DF',
	},
	txt:{
		fontSize:18,
		color:'#7360DF',
	},
	containerBtns:{
		flexDirection:'row',
		gap:10,
	},
});
