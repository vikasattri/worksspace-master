import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { useDispatch } from "react-redux";
import Header from "../../components/Header";
import RadioSolidButtons from "../../components/RadioButtons";
import { SET_LIST } from "../../store/constants/Constants";
import wareHouseList from "../../warehouseList.json";

const { width } = Dimensions.get("window");

const EditWareHouse = ({
  navigation,
  route: {
    params: { item },
  },
}) => {
  const dispatch = useDispatch();

  const [name, setName] = useState(item?.name);
  const [city, setCity] = useState(item?.city);
  const [spaceAvailable, setSpaceAvailable] = useState(item?.space_available);
  const [liveStatus, setLiveStatus] = useState(item?.is_live ? "Yes" : "No");
  const [cluster, setCluster] = useState(item?.cluster);

  const liveList = [
    {
      id: "Yes",
      name: "Yes",
      color: "#0899f8",
    },
    {
      id: "No",
      name: "No",
      color: "#0899f8",
    },
  ];

  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <Header label="Edit warehouse" goBack={() => navigation.pop()} />

      <View
        style={{
          margin: 20,
        }}
      >
        <View
          style={{
            marginBottom: 10,
          }}
        >
          <Text>Name</Text>
          <TextInput
            value={name}
            onChangeText={(val) => {
              setName(val);
            }}
            placeholder="Enter name here"
            style={{
              height: 40,
              paddingLeft: 10,
              borderColor: "gray",
              borderWidth: 2,
              borderRadius: 10,
            }}
          />
        </View>

        <View
          style={{
            marginBottom: 10,
          }}
        >
          <Text>Cluster</Text>
          <TextInput
            value={cluster}
            onChangeText={(val) => {
              setCluster(val);
            }}
            placeholder="Enter cluster here"
            style={{
              height: 40,
              paddingLeft: 10,
              borderColor: "gray",
              borderWidth: 2,
              borderRadius: 10,
            }}
          />
        </View>
        <View
          style={{
            marginBottom: 10,
          }}
        >
          <Text>City</Text>
          <TextInput
            value={city}
            onChangeText={(val) => {
              setCity(val);
            }}
            placeholder="Enter city here"
            style={{
              height: 40,
              paddingLeft: 10,
              borderColor: "gray",
              borderWidth: 2,
              borderRadius: 10,
            }}
          />
        </View>

        <View
          style={{
            marginBottom: 10,
          }}
        >
          <Text>Space availability</Text>
          <TextInput
            value={`${spaceAvailable}`}
            onChangeText={(val) => {
              setSpaceAvailable(val);
            }}
            keyboardType="number-pad"
            placeholder="Enter name here"
            style={{
              height: 40,
              paddingLeft: 10,
              borderColor: "gray",
              borderWidth: 2,
              borderRadius: 10,
            }}
          />
        </View>

        <TouchableOpacity
          onPress={() => {
            const index = wareHouseList?.findIndex((p) => p?.id === item?.id);

            const selectedItem = wareHouseList[index];

            const pData = {
              ...selectedItem,
              name,
              cluster,
              city,
              space_available: spaceAvailable,
            };

            console.log(pData, "pDATA");

            wareHouseList[index] = pData;

            console.log(wareHouseList, "LIST");

            dispatch({
              type: SET_LIST,
              payload: [...wareHouseList],
            });

            navigation.navigate("Home");
          }}
        >
          <View
            style={{
              backgroundColor: "#0899f8",
              width: width * 0.9,
              height: 40,
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 20,
            }}
          >
            <Text>Save</Text>
          </View>
        </TouchableOpacity>

        {/* <View>
          <Text>Live status</Text>
          <RadioSolidButtons
            list={liveList}
            selected={liveStatus}
            setSelected={setLiveStatus}
          />
        </View> */}
      </View>
    </View>
  );
};

export default EditWareHouse;
