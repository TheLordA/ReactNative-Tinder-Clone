import { AppLoading } from "expo";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";
import { Platform, StatusBar, StyleSheet, View } from "react-native";

import useCachedResources from "./hooks/useCachedResources";
import BottomTabNavigator from "./navigation/BottomTabNavigator";
import LinkingConfiguration from "./navigation/LinkingConfiguration";
import * as Font from "expo-font";

const Stack = createStackNavigator();

export default function App(props) {
	const isLoadingComplete = useCachedResources();

	React.useEffect(() => {
		Font.loadAsync({
			"tinderclone": require("./assets/fonts/tinderclone.ttf"),
		});
	}, []);

	if (!isLoadingComplete) {
		return <AppLoading />;
	} else {
		return (
			<View style={styles.container}>
				{Platform.OS === "ios" && <StatusBar barStyle="dark-content" />}
				<StatusBar hidden />
				<NavigationContainer linking={LinkingConfiguration}>
					<Stack.Navigator>
						<Stack.Screen name="Root" component={BottomTabNavigator} />
					</Stack.Navigator>
				</NavigationContainer>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
	},
});
