import React, { useState } from "react";
import { View, TextInput, Text, TouchableOpacity, Alert } from "react-native";
import { styles, images, iconSize, iconColor } from "../config/theme";
import users from "../database/users.json";

function Encuesta({ route, navigation }) {
	const { user } = route.params;

	return (
		<View style={styles.container_login}>
			<Text style={styles.text}>¿Se ha tomado la pastilla?</Text>
			<View style={styles.button_rectangle_container_encuesta}>
				<TouchableOpacity
					style={styles.button_rectangle}
					onPress={() => navigation.navigate("Menu", { user: user })}
				>
					<Text style={styles.button_text}>SÍ</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={styles.button_rectangle}
					onPress={() => navigation.navigate("Menu", { user: user })}
				>
					<Text style={styles.button_text}>NO</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
}

export default Encuesta;
