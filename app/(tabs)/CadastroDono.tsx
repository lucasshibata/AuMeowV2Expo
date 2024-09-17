import React from 'react';
import { Text, View, StyleSheet, TextInput, Alert } from 'react-native';
import BackGround from '../../components/BackGround';
import WhiteBox from '../../components/WhiteBox';
import RenderLogo from '../../components/RenderLogo';
import TitleBusiness from '../../components/TitleBusiness';
import Space from '../../components/Space';
import { useForm, Controller} from 'react-hook-form';
import BtnComp from '../../components/BtnComp';
import Auth from '@react-native-firebase/auth';
import Database from '@react-native-firebase/database';


export default function CadastroDono(props:any){
	const {navigation} = props;
	const { control, handleSubmit} = useForm({});

	function handleSign(data:any){
		Auth().createUserWithEmailAndPassword(data.userEmail, data.userPassword)
		.then(userCrendential =>{
			console.log('user: ', userCrendential);
			const userRef = Database().ref(`/users/${userCrendential.user.uid}`).push();
			userRef.set({
				...data,
				uid: userRef.key, // Adiciona o UID gerado pelo Firebase
			});
			navigation.navigate('Login');
		})
		.catch(error=>{
			if(error.code === 'auth/email-already-in-use'){
				console.log('email já existe');
				Alert.alert('email já existe');
			}
			if(error.code === 'auth/invalid-email'){
				Alert.alert('email inválido');
				console.log('email inválido');
			}
		});
	}
	return(
		<BackGround>
			<RenderLogo/>
			<TitleBusiness/>
			<WhiteBox>
				<Text>Encontre todos os serviços que seu Pet precisa</Text>
				<Space h={10}/>
				<View style={styles.container}>
					<Controller
						control={control}
						name="userName"
						render={({field:{onChange, value}})=>(
							<TextInput
								placeholder="Seu Nome:"
								style={[styles.txtInput, styles.flex]}
								onChangeText={onChange}
								value={value}
							/>
						)}
					/>
					<Controller
						control={control}
						name="userSurname"
						render={({field:{onChange, value}})=>(
							<TextInput
								placeholder="Seu Sobrenome:"
								style={[styles.txtInput, styles.flex]}
								onChangeText={onChange}
								value={value}
							/>
						)}
					/>
				</View>
				<Space h={10}/>
				<Controller
					control={control}
					name="userEmail"
					render={({field:{onChange, value}})=>(
						<TextInput
							placeholder="Email:"
							style={styles.txtInput}
							onChangeText={onChange}
							value={value}
						/>
					)}
				/>
				<Controller
					control={control}
					name="userPassword"
					render={({field:{onChange, value}})=>(
						<TextInput
							placeholder="Senha:"
							style={styles.txtInput}
							onChangeText={onChange}
							value={value}
						/>
					)}
				/>
				<Controller
					control={control}
					name="userConfirmPass"
					render={({field:{onChange, value}})=>(
						<TextInput
							placeholder="Confirme a senha:"
							style={styles.txtInput}
							onChangeText={onChange}
							value={value}
						/>
					)}
				/>
				<BtnComp labelButton="aperte" toPress={handleSubmit(handleSign)} bgColor={'blue'}/>
			</WhiteBox>
		</BackGround>
	);
}

const styles = StyleSheet.create({
	txtInput:{
		backgroundColor:'#EDEDED',
		width:'auto',
		borderRadius:15,
	},
	container:{
		flexDirection:'row',
		gap:10,
	},
	flex:{
		flex:1,
	},
});
