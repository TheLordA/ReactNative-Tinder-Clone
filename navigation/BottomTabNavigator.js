import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import * as React from "react";

import TabBarIcon from "../components/TabBarIcon";
import HomeScreen from "../screens/HomeScreen";
import MessagesScreen from "../screens/MessagesScreen";
import ProfileScreen from "../screens/ProfileScreen";
import TopPicksScreen from "../screens/TopPicksScreen";

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = "Home";

export default function BottomTabNavigator({ navigation, route }) {
	React.useLayoutEffect(() => {
		navigation.setOptions({ headerShown: false });
	}, [navigation, route]);

	return (
		<BottomTab.Navigator initialRouteName={INITIAL_ROUTE_NAME}>
			<BottomTab.Screen
				name="Home"
				component={HomeScreen}
				options={{
					title: "Home",
					tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} type="Ionicons" name="md-flame" />,
				}}
			/>
			<BottomTab.Screen
				name="Picks"
				component={TopPicksScreen}
				options={{
					title: "Top Picks",
					tabBarIcon: ({ focused }) => (
						<TabBarIcon focused={focused} type="FontAwesome" name="diamond" />
					),
				}}
			/>
			<BottomTab.Screen
				name="Messages"
				component={MessagesScreen}
				options={{
					title: "Messages",
					tabBarIcon: ({ focused }) => (
						<TabBarIcon focused={focused} type="FontAwesome" name="commenting-o" />
					),
				}}
			/>
			<BottomTab.Screen
				name="Profile"
				component={ProfileScreen}
				options={{
					title: "Profile",
					tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} type="Feather" name="user" />,
				}}
			/>
		</BottomTab.Navigator>
	);
}
