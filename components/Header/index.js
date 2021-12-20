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

const Header = ({ label, goBack, onEdit }) => {
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottomColor: "#c1c1c1",
        borderBottomWidth: 1,
        paddingHorizontal: 5,
        marginTop: 20,
        paddingBottom: 10,
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
      {onEdit && (
        <TouchableOpacity onPress={onEdit}>
          <View
            style={{
              paddingRight: 10,
            }}
          >
            <Image
              style={{
                height: 15,
                width: 15,
              }}
              source={require("../../assets/editIcon.png")}
            />
          </View>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Header;
