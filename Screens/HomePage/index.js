import React from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import Header from "../../components/Header";

import warehouseList from "../../warehouseList.json";

const HomePage = ({ navigation }) => {
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <Header label="Warehouse master" />

      <View
        style={{
          paddingHorizontal: 10,
        }}
      ></View>

      <ScrollView
        style={{
          flex: 1,
          marginTop: 10,
          marginHorizontal: 10,
        }}
      >
        {warehouseList?.map((item) => (
          <TouchableOpacity
            key={item?.id}
            onPress={() => {
              navigation.navigate("ViewWareHouse", { item });
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                borderRadius: 10,
                padding: 10,
                borderWidth: 1,
                borderColor: "#c1c1c1",
                marginBottom: 10,
              }}
            >
              <View>
                <Text
                  style={{
                    color: "#0899f8",
                    fontSize: 16,
                    fontWeight: "600",
                  }}
                >
                  {item?.name}
                </Text>

                <Text
                  style={{
                    marginTop: 4,
                    fontSize: 12,
                  }}
                >
                  City:{" "}
                  <Text
                    style={{
                      fontWeight: "500",
                      fontSize: 14,
                    }}
                  >
                    {item?.city}
                  </Text>
                </Text>

                <Text
                  style={{
                    marginTop: 4,
                    fontSize: 12,
                  }}
                >
                  Space availability:{" "}
                  <Text
                    style={{
                      fontWeight: "500",
                      fontSize: 14,
                    }}
                  >
                    {item?.space_available}
                  </Text>
                </Text>

                <Text
                  style={{
                    marginTop: 4,
                    fontSize: 12,
                  }}
                >
                  Type:{" "}
                  <Text
                    style={{
                      fontWeight: "500",
                      fontSize: 14,
                    }}
                  >
                    {item?.type}
                  </Text>
                </Text>

                <Text
                  style={{
                    marginTop: 4,
                    fontSize: 12,
                  }}
                >
                  Cluster:{" "}
                  <Text
                    style={{
                      fontWeight: "500",
                      fontSize: 14,
                    }}
                  >
                    {item?.cluster}
                  </Text>
                </Text>
              </View>

              <View>
                <Text
                  style={{
                    fontSize: 12,
                    fontWeight: "700",
                    textAlign: "right",
                  }}
                >
                  {item?.code}
                </Text>

                {item?.is_live && (
                  <View
                    style={{
                      padding: 2,
                      marginTop: 4,
                      textAlign: "center",
                      backgroundColor: "green",
                      alignItems: "center",
                      borderRadius: 10,
                    }}
                  >
                    <Text
                      style={{
                        color: "white",
                        fontSize: 12,
                      }}
                    >
                      Live
                    </Text>
                  </View>
                )}

                {item?.is_registered && (
                  <View
                    style={{
                      paddingHorizontal: 6,
                      marginTop: 4,
                      textAlign: "center",
                      backgroundColor: "orange",
                      alignItems: "center",
                      borderRadius: 12,
                    }}
                  >
                    <Text
                      style={{
                        color: "white",
                        fontSize: 14,
                      }}
                    >
                      Registered
                    </Text>
                  </View>
                )}
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default HomePage;
