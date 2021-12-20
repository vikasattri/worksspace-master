import React from "react";
import { View, Text } from "react-native";

const ItemView = ({ name, des }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        // paddingHorizontal: 10,
        paddingVertical: 10,
        borderBottomColor: "#c1c1c1",
        borderBottomWidth: 1,
      }}
    >
      <View>
        <Text
          style={{
            fontWeight: "600",
          }}
        >
          {name}
        </Text>
      </View>
      <View>
        <Text
          style={{
            color: "gray",
          }}
        >
          {des}
        </Text>
      </View>
    </View>
  );
};

export default ItemView;
