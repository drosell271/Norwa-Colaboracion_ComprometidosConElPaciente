// Inicio.js
import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, Alert } from "react-native";
import moment from "moment";
import { styles, images, iconSize, iconColor } from "../config/theme";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

function Inicio({ route, navigation }) {
	const { user } = route.params;
	const format = "HH:mm";
	const [countdown, setCountdown] = useState({
		time: "",
		isDescending: false,
	});
	const originalColor = styles.countdown_text.color; // Asegúrate de que styles.countdown_text.color esté definido en tus estilos
	const [color, setColor] = useState(originalColor);
	const [icono, setIcono] = useState("");
	const [habilitado, setHabilitado] = useState(false);

	const selectAction = () => {
		if (icono == "exclamation") {
			Alert.alert("Notificada la ausencia del usuario");
		} else {
			navigation.navigate("Llamada", { user: user });
		}
	};

	const calculateCountdown = (currentCountdown) => {
		const currentTime = moment();
		let userTime = moment(user.Hora, format);

		if (userTime.isBefore(currentTime) && currentCountdown.isDescending) {
			userTime = userTime.add(1, "days");
		}

		const diffTime = userTime.diff(currentTime);
		const diffMinutes = userTime.diff(currentTime, "minutes");

		if (currentCountdown.isDescending) {
			if (diffMinutes >= 1435) {
				return { time: "hola", isDescending: false };
			} else if (diffMinutes < 1430) {
				setHabilitado(false);
				setIcono("");
				setColor(originalColor);
				return {
					time: moment.utc(diffTime).format("HH:mm"),
					isDescending: true,
				};
			} else {
				setHabilitado(true);
				setIcono("exclamation");
				setColor("yellow");

				return {
					time: moment.utc(diffTime).format("HH:mm"),
					isDescending: true,
				};
			}
		} else {
			const positiveTime = Math.abs(diffTime);
			if (positiveTime > 300000) {
				return {
					time: moment.utc(positiveTime).format("HH:mm"),
					isDescending: true,
				};
			} else {
				setIcono("video");
				setColor("red");
				setHabilitado(true);
				return {
					time: moment.utc(positiveTime).format("HH:mm"),
					isDescending: false,
				};
			}
		}
	};

	useEffect(() => {
		const timer = setInterval(() => {
			const newCountdown = calculateCountdown(countdown);
			setCountdown(newCountdown);
		}, 1000);

		return () => clearInterval(timer);
	}, [countdown]);

	return (
		<View style={styles.container_inicio}>
			<Text style={styles.text}>
				Bienvenido/a, {user.username}
				{"\n"}Su próxima toma es en:{" "}
			</Text>
			<Text style={[styles.countdown_text, { color }]}>
				{countdown.time}
			</Text>
			<Text style={styles.text}>A las:</Text>
			<Text style={styles.hour_text}>{user.Hora}</Text>

			<View style={styles.button_round_container}>
				{user.Voluntario && (
					<TouchableOpacity
						style={
							habilitado
								? styles.button_round
								: styles.button_round_deshabilitado
						}
						onPress={habilitado ? () => selectAction() : null}
					>
						<Icon name={icono} size={iconSize} color={iconColor} />
					</TouchableOpacity>
				)}
				<TouchableOpacity
					style={styles.button_round}
					onPress={() =>
						navigation.navigate("Chatbot", { user: user })
					}
				>
					<Icon name="help" size={iconSize} color={iconColor} />
				</TouchableOpacity>
			</View>
			<View style={styles.button_round_container}>
				<TouchableOpacity
					style={styles.button_round}
					onPress={() =>
						navigation.navigate("Calendario_imagen", { user: user })
					}
				>
					<Icon name="calendar" size={iconSize} color={iconColor} />
				</TouchableOpacity>
			</View>
		</View>
	);
}

export default Inicio;
