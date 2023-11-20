import React, { useState, useEffect } from "react";
import {
	View,
	ImageBackground,
	Image,
	StyleSheet,
	TouchableOpacity,
	Text,
} from "react-native";
import { styles, images, iconSize, iconColor } from "../config/theme";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const Llamada = ({ route, navigation }) => {
	const { user } = route.params;
	const [silenciado, setSilenciado] = useState(false);
	const originalColor = styles.button_round.backgroundColor; // Usa backgroundColor en lugar de color
	const [color, setColor] = useState(originalColor);
	const [ImagenPrincipal, setImagenPrincipal] = useState("");
	const [ImagenSecundaria, setImagenSecundaria] = useState("");

	const toggleEstado = () => {
		setSilenciado(!silenciado);
		if (silenciado) {
			setColor(originalColor);
		} else {
			setColor("red");
		}
	};

	const handlePress = () => {
		navigation.navigate("Encuesta", { user: user });
	};

	return (
		<View style={styles.container_images}>
			<ImageBackground
				source={images.voluntario}
				style={styles.backgroundImage}
			>
				<Image source={images.paciente} style={styles.smallImage} />
				<View style={styles.button_round_container}>
					<TouchableOpacity
						style={[
							styles.button_round,
							{ backgroundColor: color },
						]}
						onPress={toggleEstado}
					>
						<Icon
							name={silenciado ? "microphone-off" : "microphone"}
							size={iconSize}
							color="black"
						/>
					</TouchableOpacity>
					<TouchableOpacity
						style={styles.button_round}
						onPress={handlePress}
					>
						<Icon
							name="phone-hangup"
							size={iconSize}
							color="black"
						/>
					</TouchableOpacity>
				</View>
			</ImageBackground>
		</View>
	);
};

export default Llamada;
