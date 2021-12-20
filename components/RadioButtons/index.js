/* eslint-disable react-native/no-inline-styles */
import React from "react";
import { TouchableOpacity, View, Text } from "react-native";

const RadioSolidButtons = ({ list, selected, setSelected }) => {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "row",
        backgroundColor: "red",
      }}
    >
      {list?.map(({ id, name, color }, index) => (
        <TouchableOpacity
          key={id}
          onPress={() => {
            setSelected(name);
          }}
        >
          <View
            style={{
              borderTopLeftRadius: index === 0 ? 10 : 0,
              borderBottomLeftRadius: index === 0 ? 10 : 0,
              borderTopRightRadius: index === list?.length - 1 ? 10 : 0,
              borderBottomRightRadius: index === list?.length - 1 ? 10 : 0,
              borderColor: "gray",
              borderWidth: 1,
              backgroundColor: selected === name ? color : "#fff",
              padding: 16,
            }}
          >
            <Text
              style={{
                fontSize: 16,
                paddingLeft: 10,
                paddingRight: 10,
                color: selected === name ? color : "#fff",
              }}
            >
              {name}
            </Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default RadioSolidButtons;
