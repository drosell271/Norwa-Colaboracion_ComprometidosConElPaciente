import React from "react";
import { TouchableOpacity, ImageBackground, StyleSheet } from "react-native";
import { styles, images, iconSize, iconColor } from "../config/theme";

const Chatbot = ({ route, navigation }) => {
	const { user } = route.params;
	const handlePress = () => {
		navigation.navigate("Calendario", { user: user });
	};

	return (
		<TouchableOpacity
			style={styles.container_chatbot}
			onPress={() => handlePress()}
		>
			<ImageBackground
				source={images.chatbot}
				style={styles.backgroundImageChatbot}
				resizeMode="contain"
			></ImageBackground>
		</TouchableOpacity>
	);
};

export default Chatbot;
