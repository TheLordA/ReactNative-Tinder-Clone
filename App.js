import { AppLoading } from "expo";
//import * as Font from "expo-font";
//import { Asset } from "expo-asset";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";
import { Platform, StatusBar, StyleSheet, View } from "react-native";

import useCachedResources from "./hooks/useCachedResources";
import BottomTabNavigator from "./navigation/BottomTabNavigator";
import LinkingConfiguration from "./navigation/LinkingConfiguration";

const Stack = createStackNavigator();

export default function App(props) {
	const isLoadingComplete = useCachedResources();

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

/* _loadResourcesAsync = async () => {
	return Promise.all([
		Asset.loadAsync([require("./assets/images/splash.png"), require("./assets/images/icon.png")]),
		Font.loadAsync({
			// This is the font we're using for our tab bar
			...Icon.MaterialIcons.font,
			...Icon.MaterialCommunityIcons.font,
			...Icon.FontAwesome.font,
			...Icon.Feather.font,
		}),
	]);
};

_handleLoadingError = (error) => {
	// In this case, you might want to report the error to your error
	// reporting service, such as Sentry
	console.warn(error);
};

_handleFinishLoading = () => {
	isLoadingComplete = true;
};*/

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
	},
});
