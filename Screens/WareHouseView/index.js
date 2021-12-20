import React from "react";
import { View, Text } from "react-native";
import Header from "../../components/Header";
import ItemView from "./ItemView";

const WareHouseView = ({
  navigation,
  route: {
    params: { item },
  },
}) => {
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <Header
        label="Warehouse view"
        goBack={() => navigation.pop()}
        onEdit={() => navigation.navigate("EditWareHouse", { item })}
      />

      <View
        style={{
          flex: 1,
          paddingHorizontal: 10,
          paddingTop: 20,
        }}
      >
        <View>
          <Text
            style={{
              fontSize: 22,
              fontWeight: "600",
              color: "#0899f8",
            }}
          >
            {item?.name}{" "}
          </Text>
        </View>

        <ItemView name="Code" des={item?.code} />
        <ItemView name="City" des={item?.city} />
        <ItemView name="Space availability" des={item?.space_available} />

        <ItemView name="Type" des={item?.type} />
        <ItemView name="Cluster" des={item?.cluster} />
        <ItemView name="Registered" des={item?.is_registered ? "Yes" : "No"} />
        <ItemView name="Live" des={item?.is_live ? "Yes" : "No"} />
      </View>
    </View>
  );
};

export default WareHouseView;
