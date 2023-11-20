import { StyleSheet } from "react-native";

export const iconSize = 30;
export const iconColor = "black";

const styles = StyleSheet.create({
	//Contenedores
	container_login: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		padding: 20,
		backgroundColor: "#255399",
	},
	container_login_2: {
		flex: 1,
		justifyContent: "center",
		padding: 20,
		backgroundColor: "#255399",
	},
	container_inicio: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		padding: 20,
		backgroundColor: "#255399",
	},
	button_rectangle_container: {
		flexDirection: "column",
		justifyContent: "space-around",
		width: "100%",
		marginTop: 20,
		borderRadius: 15,
		overflow: "hidden",
	},
	button_rectangle_container_encuesta: {
		flexDirection: "column",
		justifyContent: "space-around",
		width: "100%",
		marginTop: 20,

		overflow: "hidden",
	},
	button_round_container: {
		flexDirection: "row",
		justifyContent: "space-around",
		width: "100%",
		marginTop: 20,
		borderRadius: 15,
		overflow: "hidden",
	},
	container_images: {
		flex: 1,
	},
	container_chatbot: {
		backgroundColor: "#255399",
		flex: 1,
	},
	//Texto
	text: {
		fontSize: 28,
		marginBottom: 10,
		color: "white",
	},
	countdown_text: {
		fontSize: 30,
		fontWeight: "bold",
		marginBottom: 20,
		color: "white",
	},
	hour_text: {
		fontSize: 30,
		fontWeight: "bold",
		marginBottom: 20,
		color: "white",
	},
	//Botones
	button_round: {
		width: 100,
		height: 100,
		justifyContent: "center",
		alignItems: "center",
		padding: 10,
		borderRadius: 50,
		backgroundColor: "orange",
		margin: 10,
	},
	button_round_deshabilitado: {
		width: 100,
		height: 100,
		justifyContent: "center",
		alignItems: "center",
		padding: 10,
		borderRadius: 50,
		backgroundColor: "black",
		margin: 10,
	},
	button_rectangle: {
		backgroundColor: "orange",
		borderRadius: 10,
		paddingVertical: 15,
		marginBottom: 15,
	},
	button_text: {
		textAlign: "center",
		color: "black",
		fontSize: 18,
		fontWeight: "bold",
	},
	//Inputs
	input: {
		height: 50,
		marginBottom: 15,
		borderWidth: 1,
		borderColor: "gray",
		borderRadius: 15,
		paddingHorizontal: 20,
		backgroundColor: "white",
		fontSize: 16,
	},
	//Imagenes
	backgroundImage: {
		flex: 1,
		resizeMode: "cover",
		justifyContent: "flex-end",
		alignItems: "flex-start",
	},
	backgroundImageChatbot: {
		flex: 1,
	},
	smallImage: {
		width: 100,
		height: 100,
		marginBottom: 20,
		marginLeft: 20,
	},
	image: {
		flex: 1,
		resizeMode: "cover",
		justifyContent: "center",
	},
	logo_image: {
		flex: 1,
		resizeMode: "contain",
		justifyContent: "center",
	},
});

const images = {
	logo: require("../assets/logo.png"),
	chatbot: require("../assets/chatbot.png"),
	paciente: require("../assets/paciente.png"),
	voluntario: require("../assets/voluntario.png"),
	recompensaa: require("../assets/recompensas.png"),
	calendario: require("../assets/calendario.png"),
};

export { styles, images };
