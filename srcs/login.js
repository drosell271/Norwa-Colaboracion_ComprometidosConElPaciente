import React, { useState } from "react";
import {
	View,
	TextInput,
	Text,
	Image,
	TouchableOpacity,
	Alert,
	Dimensions,
} from "react-native";
import { styles, images, iconSize, iconColor } from "../config/theme";
import users from "../database/users.json";

const screenWidth = Dimensions.get("window").width;

function Login({ navigation }) {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const handleLogin = () => {
		const user = users.find(
			(u) => u.username === username && u.password === password
		);

		if (user) {
			navigation.navigate("Menu", { user: user });
		} else {
			Alert.alert("Error", "Usuario o contraseña incorrectos");
		}
	};

	return (
		<View style={styles.container_login}>
			<Image
				source={images.logo}
				style={{
					width: screenWidth,
					height: screenWidth * (250 / 250),
				}}
			/>

			<View style={styles.button_rectangle_container}>
				<TextInput
					style={styles.input}
					placeholder="Nombre de usuario"
					value={username}
					onChangeText={setUsername}
				/>
				<TextInput
					style={styles.input}
					placeholder="Contraseña"
					value={password}
					onChangeText={setPassword}
					secureTextEntry
				/>
				<TouchableOpacity
					style={styles.button_rectangle}
					onPress={handleLogin}
				>
					<Text style={styles.button_text}>Iniciar Sesión</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
}

export default Login;
