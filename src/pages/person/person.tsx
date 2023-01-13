import React from "react";
import { View, Text } from "@tarojs/components";
import { $baseLayoutPageBuilder } from "@/layout/baseLayout";

export default $baseLayoutPageBuilder(class Person extends React.Component<{}, PageIndexState> {
  constructor(props) {
    super(props);
  }

  state = {
    counter: 0,
  };


  mounted() {

  }


  ui()  {
    // if (this.state.counter === 2) {
    //   // 模拟 JS 报错
    //   throw new Error("I crashed!");
    // }
    // const { state } = this.store

    return (
      <View className="index">
        <Text>这是Person的内容！！</Text>
      </View>
    );
  }
})
