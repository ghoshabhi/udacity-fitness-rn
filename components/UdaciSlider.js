import React from "react";
import { View, Slider, Text } from "react-native";

export default function UdaciSlider({ max, unit, step, value, onChange }) {
  return (
    <View>
      <Slider
        value={value}
        step={step}
        onValueChange={onChange}
        minimumValue={0}
        maximumValue={max}
      />
      <View>
        <Text>{value}</Text>
        <Text>{unit}</Text>
      </View>
    </View>
  );
}
