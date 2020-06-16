import React from "react";
import { SafeAreaView, StyleSheet, Platform } from "react-native";
import Swiper from "react-native-deck-swiper";
import { Card } from "../components/Card";
import { HomeScreenPics } from "../constants/Pics";

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
			</SafeAreaView>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "transparent",
	},
});

export default HomeScreen;
