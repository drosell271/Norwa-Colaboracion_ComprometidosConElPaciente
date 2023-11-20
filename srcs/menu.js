// Inicio.js
import React, { useState, useEffect } from "react";
import {
	View,
	Text,
	TouchableOpacity,
	Alert,
	Image,
	Dimensions,
} from "react-native";
import moment from "moment";
import { styles, images, iconSize, iconColor } from "../config/theme";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Icon2 from "react-native-vector-icons/SimpleLineIcons";

const screenWidth = Dimensions.get("window").width;

function Menu({ route, navigation }) {
	const { user } = route.params;

	return (
		<View style={styles.container_inicio}>
			<Image
				source={images.voluntario}
				style={{
					width: screenWidth * 0.5,
					height: screenWidth * 0.5,
				}}
			/>
			<Text style={styles.text}>¡Hola!</Text>
			<Text style={styles.text}>Bienvenido/a, {user.username}</Text>

			<View style={styles.button_round_container}>
				<TouchableOpacity
					style={styles.button_round}
					onPress={() =>
						navigation.navigate("Recompensas", { user: user })
					}
				>
					<Icon2 name="present" size={iconSize} color={iconColor} />
				</TouchableOpacity>
				<TouchableOpacity
					style={styles.button_round}
					onPress={() =>
						navigation.navigate("Calendario", { user: user })
					}
				>
					<Icon name="pill" size={iconSize} color={iconColor} />
				</TouchableOpacity>
			</View>
		</View>
	);
}

export default Menu;
