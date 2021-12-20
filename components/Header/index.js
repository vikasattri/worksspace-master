import React from "react";
import {
  View,
  Pressable,
  Image,
  Dimensions,
  Text,
  TouchableOpacity,
} from "react-native";

const { width } = Dimensions.get("window");

const Header = ({ label, goBack }) => {
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        // justifyContent: "center",
        alignItems: "center",
        borderBottomColor: "#c1c1c1",
        borderBottomWidth: 1,
        paddingHorizontal: 5,
        marginTop: 20,
      }}
    >
      <View
        style={{
          paddingLeft: 4,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {goBack && (
            <TouchableOpacity onPress={goBack}>
              <View>
                <Image
                  style={{
                    height: 15,
                    width: 15,
                  }}
                  source={require("../../assets/leftIcon.png")}
                />
              </View>
            </TouchableOpacity>
          )}
          <View
            style={{
              paddingLeft: 4,
            }}
          >
            <Text
              style={{
                color: "black",
                fontSize: 20,
              }}
            >
              {label}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Header;
