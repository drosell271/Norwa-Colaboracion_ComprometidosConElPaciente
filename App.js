import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./srcs/login";
import Calendario from "./srcs/calendario";
import Llamada from "./srcs/llamada";
import ChatBot from "./srcs/chatbot";
import Encuesta from "./srcs/encuesta";
import Menu from "./srcs/menu";
import Recompensas from "./srcs/recompensas";
import Calendario_imagen from "./srcs/calendar_image";

const Stack = createNativeStackNavigator();

function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName="Login">
				<Stack.Screen name="Login" component={Login} />
				<Stack.Screen name="Calendario" component={Calendario} />
				<Stack.Screen name="Llamada" component={Llamada} />
				<Stack.Screen name="Chatbot" component={ChatBot} />
				<Stack.Screen name="Encuesta" component={Encuesta} />
				<Stack.Screen name="Menu" component={Menu} />
				<Stack.Screen name="Recompensas" component={Recompensas} />
				<Stack.Screen
					name="Calendario_imagen"
					component={Calendario_imagen}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
}

export default App;
