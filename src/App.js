import React from "react";
import { View, Group } from "@vkontakte/vkui";
import "@vkontakte/vkui/dist/vkui.css";
import bridge from "@vkontakte/vk-bridge";

import Main from "./panels/main/main.js";

bridge.send("VKWebAppInit", {});

let active = "main";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activePanel: "main",
    };
  }

  render() {
    return (
      <Group>
        <View activePanel={active}>
          <Main id="main" />
        </View>
      </Group>
    );
  }
}
export default App;
