import React from "react";
import { Group, Div, Button, Panel, PanelHeader } from "@vkontakte/vkui";
import connect from "@vkontakte/vk-bridge";
import "./main.css";
import axios from "axios";

let user_id_db = 1;
let balance = 1;
let bonusbalance = 1;
async function get() {
  let user_id = await connect.sendPromise("VKWebAppGetUserInfo").catch((e) => {
    user_id_db = "error";
  });
  console.log(user_id);
  user_id_db = user_id;
  let getbal = await axios({
    method: "POST",
    url: `https://lucky-coin.ru/user/balance`,
    headers: {
      "Content-Type": "application/json",
    },
    data: {
      id: Number(user_id),
    },
  });
  balance = getbal.data.response.balance;
  bonusbalance = getbal.data.response.bonusbalance;
}

const main = (props) => (
  <Panel id={props.id}>
    <PanelHeader>Баланс</PanelHeader>
    <Group style={{ height: "500px" }}>
      <Div align="center"></Div>
      <br></br>
      <br></br>
      <p align="center" class="t1">
        Ваш Баланс ({user_id_db})
      </p>
      <p align="center" class="t2">
        {parseFloat(balance).toFixed(0)}
      </p>
      <p align="center" class="t3">
        {parseFloat(bonusbalance).toFixed(0)}
      </p>
      <center>
        <Button size="xl" level="2" onClick={() => get()}>
          Обновить
        </Button>
      </center>
      <br></br>
      <br></br>
    </Group>
  </Panel>
);

export default main;
