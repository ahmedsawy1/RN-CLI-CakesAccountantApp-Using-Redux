import React from "react";
import { StyleSheet, View, Image, Text, Dimensions } from "react-native";

const phoneWidth = Dimensions.get("screen").width;
const phoneHeight = Dimensions.get("screen").height;
function CakesCard({ image, title, cost, price, quantity }) {
  return (
    <View style={styles.con}>
      <View>
        <Image style={styles.image} source={image} />
        <View style={styles.priceCon}>
          <Text style={styles.price}>$ {price}</Text>
        </View>
        <View style={styles.detailsCon}>
          <Text style={styles.mainTitle}>{title}</Text>
          <Text style={styles.details}>Cost: ${cost}</Text>
          <Text style={styles.details}>Quantity: {quantity} Cakes</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  con: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    marginHorizontal: phoneWidth * 0.14,
  },
  iconCon: {
    height: 40,
    width: 40,
    backgroundColor: "red",
  },
  image: {
    height: 200,
    width: 200,
    marginHorizontal: 30,
    resizeMode: "contain",
  },
  detailsCon: {
    backgroundColor: "white",
    height: 120,
    width: 260,
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 24,
    borderRadius: 19,
  },
  priceCon: {
    backgroundColor: "#fa0e8f",
    height: 27,
    width: 52,
    borderRadius: 24,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 14,
  },
  price: {
    color: "white",
  },
  mainTitle: {
    color: "#0dddcb",
    fontSize: 18,
    marginBottom: 15,
  },
  details: {
    color: "#0dddcb",
    fontSize: 15,
  },
});
export default CakesCard;
