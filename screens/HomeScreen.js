import React from "react";
import { SafeAreaView, StyleSheet, Platform, View } from "react-native";
import Swiper from "react-native-deck-swiper";
import { Button } from "react-native-elements";
import { Card } from "../components/Card";
import { HomeScreenPics } from "../constants/Pics";

import { FontAwesome } from "@expo/vector-icons";

// tempo definition of colors , should be donne in constants/colors.js
const colors = {
	red: "#EC2379",
	blue: "#0070FF",
	gray: "#777777",
	white: "#ffffff",
	black: "#000000",
};
class HomeScreen extends React.Component {
	render() {
		return (
			<SafeAreaView style={styles.container}>
				<View style={styles.swiperContainer}>
					<Swiper
						cards={HomeScreenPics}
						renderCard={Card}
						infinite // keep looping cards infinitely
						backgroundColor={"transparent"}
						cardHorizontalMargin={0}
						stackSize={4} // number of cards shown in background
						useViewOverflow={Platform.OS === "ios"}
						animateOverlayLabelsOpacity
						animateCardOpacity
						disableTopSwipe
						disableBottomSwipe
						overlayLabels={{
							left: {
								title: "NOPE",
								style: {
									label: {
										backgroundColor: colors.red,
										borderColor: colors.red,
										color: colors.white,
										borderWidth: 1,
										fontSize: 24,
									},
									wrapper: {
										flexDirection: "column",
										alignItems: "flex-end",
										justifyContent: "flex-start",
										marginTop: 20,
										marginLeft: -20,
									},
								},
							},
							right: {
								title: "LIKE",
								style: {
									label: {
										backgroundColor: colors.blue,
										borderColor: colors.blue,
										color: colors.white,
										borderWidth: 1,
										fontSize: 24,
									},
									wrapper: {
										flexDirection: "column",
										alignItems: "flex-start",
										justifyContent: "flex-start",
										marginTop: 20,
										marginLeft: 20,
									},
								},
							},
						}}
					/>
				</View>
				<View style={styles.bottomContainerButtons}>
					<Button
						style={styles.bottons}
						type="clear"
						icon={<FontAwesome name="close" size={30} color="red" />}
					/>
					<Button type="clear" icon={<FontAwesome name="heart-o" size={30} color="blue" />} />
				</View>
			</SafeAreaView>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "transparent",
	},
	swiperContainer: {
		flex: 0.93,
	},
	bottomContainerButtons: {
		flex: 0.07,
		justifyContent: "space-evenly",
		flexDirection: "row",
	},
	bottons: {
		backgroundColor: "white",
	},
});

export default HomeScreen;
