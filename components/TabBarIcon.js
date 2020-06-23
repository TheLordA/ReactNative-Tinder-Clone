import {
	Ionicons,
	Feather,
	FontAwesome,
	FontAwesome5,
	MaterialIcons,
	MaterialCommunityIcons,
} from "@expo/vector-icons";

import * as React from "react";

import Colors from "../constants/Colors";

export default function TabBarIcon(props) {
	switch (props.type) {
		case "Ionicons":
			return (
				<Ionicons
					name={props.name}
					size={26}
					style={{ marginBottom: -3 }}
					color={props.focused ? Colors.tabIconSelected : Colors.tabIconDefault}
				/>
			);
		case "Feather":
			return (
				<Feather
					name={props.name}
					size={26}
					style={{ marginBottom: -3 }}
					color={props.focused ? Colors.tabIconSelected : Colors.tabIconDefault}
				/>
			);
		case "FontAwesome":
			return (
				<FontAwesome
					name={props.name}
					size={26}
					style={{ marginBottom: -3 }}
					color={props.focused ? Colors.tabIconSelected : Colors.tabIconDefault}
				/>
			);
		case "FontAwesome5":
			return (
				<FontAwesome5
					name={props.name}
					size={26}
					style={{ marginBottom: -3 }}
					color={props.focused ? Colors.tabIconSelected : Colors.tabIconDefault}
				/>
			);
		case "MaterialIcons":
			return (
				<MaterialIcons
					name={props.name}
					size={26}
					style={{ marginBottom: -3 }}
					color={props.focused ? Colors.tabIconSelected : Colors.tabIconDefault}
				/>
			);
		case "MaterialCommunityIcons":
			return (
				<MaterialCommunityIcons
					name={props.name}
					size={26}
					style={{ marginBottom: -3 }}
					color={props.focused ? Colors.tabIconSelected : Colors.tabIconDefault}
				/>
			);
	}
}
