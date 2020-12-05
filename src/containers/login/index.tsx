import React, { useEffect, FC, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchData } from "../../store/action";
import { FETCH_LOGIN } from "./types";
import { Input, Button, Form, Statistic, Row, Col, Select } from "antd";
import { useHistory } from "react-router-dom";
import { Column } from "@ant-design/charts";

/**定义常量 */
export const KEY_REMPWD = "___REMPWD___";
export const KEY_USERINFO = "___USERINFO___";
export const KEY_TOKEN = "___KEY_TOKEN___";
export const USER_NAME = "___USER_NAME___";
const RATE = 9,
  WP = 60;

const Login: FC<any> = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [count, setCount] = useState<any>([{ label: "RR", value: 0 }]);
  const [textValue, setTextValue] = useState<any>(5);
  const [baseValue, setBaseValue] = useState<any>(500);
  const [timesValue, setTimesValue] = useState<any>(30);

  const [groupCount, setGroupCount] = useState<any>([
    {
      month: "04日晚",
      value: [
        { time: "01", value: 13, name: "盈利" },
        { time: "02", value: 11, name: "盈利" },
        { time: "03", value: 2, name: "盈利" },
        { time: "04", value: 2, name: "盈利" },
        { time: "05", value: 3, name: "盈利" },
        { time: "06", value: 21, name: "盈利" },
        { time: "07", value: 13, name: "盈利" },
        { time: "08", value: 10, name: "盈利" },
        { time: "09", value: 11, name: "盈利" },
        { time: "10", value: 5, name: "盈利" },
        { time: "11", value: 2, name: "盈利" },
        { time: "12", value: 17, name: "盈利" },
        { time: "13", value: 8, name: "盈利" },

        { time: "01", value: 18, name: "亏损" },
        { time: "02", value: 8, name: "亏损" },
        { time: "03", value: 13, name: "亏损" },
        { time: "04", value: 41, name: "亏损" },
        { time: "05", value: 28, name: "亏损" },
        { time: "06", value: 15, name: "亏损" },
        { time: "07", value: 25, name: "亏损" },
        { time: "08", value: 30, name: "亏损" },
        { time: "09", value: 10, name: "亏损" },
        { time: "10", value: 9, name: "亏损" },
      ],
      label: "盈利+118，亏损-197, 胜率56%， 手续费用$276",
    },
    {
      month: "12月份",
      value: [
        { time: "01", value: 1, name: "盈利" },
        { time: "02", value: 3, name: "盈利" },
        { time: "03", value: 2, name: "盈利" },
        { time: "04", value: 118, name: "盈利" },
        { time: "07", value: 2, name: "盈利" },
        { time: "08", value: 2, name: "盈利" },
        { time: "09", value: 1, name: "盈利" },
        { time: "10", value: 3, name: "盈利" },
        { time: "11", value: 1, name: "盈利" },
        { time: "14", value: 2, name: "盈利" },
        { time: "15", value: 1, name: "盈利" },
        { time: "16", value: 2, name: "盈利" },
        { time: "17", value: 2, name: "盈利" },
        { time: "18", value: 4, name: "盈利" },
        { time: "21", value: 2, name: "盈利" },
        { time: "22", value: 5, name: "盈利" },
        { time: "23", value: 1, name: "盈利" },
        { time: "24", value: 1, name: "盈利" },
        { time: "28", value: 2, name: "盈利" },
        { time: "29", value: 2, name: "盈利" },
        { time: "30", value: 1, name: "盈利" },
        { time: "31", value: 4, name: "盈利" },

        { time: "01", value: 1, name: "亏损" },
        { time: "02", value: 1, name: "亏损" },
        { time: "03", value: 2, name: "亏损" },
        { time: "04", value: 197, name: "亏损" },
        { time: "07", value: 4, name: "亏损" },
        { time: "08", value: 1, name: "亏损" },
        { time: "09", value: 1, name: "亏损" },
        { time: "10", value: 1, name: "亏损" },
        { time: "11", value: 4, name: "亏损" },
        { time: "14", value: 4, name: "亏损" },
        { time: "15", value: 4, name: "亏损" },
        { time: "16", value: 4, name: "亏损" },
        { time: "17", value: 4, name: "亏损" },
        { time: "18", value: 4, name: "亏损" },
        { time: "21", value: 4, name: "亏损" },
        { time: "22", value: 4, name: "亏损" },
        { time: "23", value: 4, name: "亏损" },
        { time: "24", value: 4, name: "亏损" },
        { time: "28", value: 4, name: "亏损" },
        { time: "29", value: 4, name: "亏损" },
        { time: "30", value: 2, name: "亏损" },
        { time: "31", value: 3, name: "亏损" },
      ],
      label: "统计： 500股, 盈利+200点, 亏损-160点, 实现盈利+$2200, 胜率60%",
    },
  ]);

  // const next = () => {
  //   history.push("/moneykeeper");
  // };

  // const handleSubmit = (val: any) => {
  //   console.log(val);
  //   const { username, password } = val;
  //   const payload = {
  //     username,
  //     password,
  //   };
  //   dispatch(
  //     fetchData(
  //       {
  //         type: FETCH_LOGIN,
  //         payload,
  //         url: "/login",
  //       },
  //       next
  //     )
  //   );
  // };
  useEffect(() => {
    handleCount();
  }, []);
  const handleCount = (e?: any) => {
    const s = e ? Number(e.target.value) : textValue;
    const list = [] as any;
    for (let i = 0; i <= 7; i++) {
      list.push({
        label:
          i < 2
            ? "-" + (2 - i) + "R"
            : i < 11
            ? "+" + (i - 1) + "R"
            : i - 1 + "R",
        value: (
          s *
          (i === 0
            ? 1 - (RATE / 100) * 2
            : i === 1
            ? 1 - RATE / 100
            : 1 + (RATE / 100) * (i - 1))
        ).toFixed(2),
      });
    }
    setCount(list);
  };

  const handleBaseSet = (e: any) => {
    setBaseValue(e.target.value);
  };

  const handleTimes = (e: any) => {
    setTimesValue(e.target.value);
  };

  const groupConfig = {
    xField: "time",
    yField: "value",
    isGroup: true,
    seriesField: "name",
    label: {
      position: "middle",
      style: {
        fill: "#333",
      },
    } as any,
    columnWidthRatio: 0.6,
    color: function color(_ref: any) {
      console.log(_ref);
      const name = _ref.name;
      if (name === "盈利") {
        return "#16c516";
      }
      return "red";
    },
  };
  const getDays = () => {
    for (let i = 0; i < 32; i++) {}
  };
  return (
    <div>
      <div style={{ marginTop: 20, marginLeft: 150 }}>
        <Row style={{ marginBottom: 10 }}>
          <Col span={3}>
            <Statistic title={"交易股数"} value={500} />
          </Col>
          <Col span={3}>
            <Statistic title={"预期盈利点数"} value={"1320"} />
          </Col>
          <Col span={3}>
            <Statistic title={"月计划交易次数"} value={"660"} />
          </Col>
          <Col span={3}>
            <Statistic title={"日计划交易次数"} value={"30"} />
          </Col>
          <Col span={3}>
            <Statistic title={"$预期盈利"} value={"6600"} />
          </Col>
          <Col span={3}>
            <Statistic title={"胜率"} value={"56%"} />
          </Col>
          <Col span={3}>
            <Statistic
              valueStyle={{
                color: "red",
              }}
              title={"最大止损点数"}
              value={"40"}
            />
          </Col>
          {/* {[1, 2, 3].map((item: any) => (
          <Col span={3}>
            <Statistic
              valueStyle={{
                color: item === 2 ? "#1ab31a" : "#333",
              }}
              title={"@" + item + "R"}
              value={(
                ((baseValue * RATE) / 100) *
                timesValue *
                (item * (WP / 100) - (100 - WP) / 100)
              ).toFixed(2)}
            />
          </Col>
        ))} */}
        </Row>
        <Row style={{ marginBottom: 10 }}>
          <Col span={3}>
            <Statistic title={"实际亏损点数"} value={"2640"} />
          </Col>
          <Col span={3}>
            <Statistic title={"实际盈利点数"} value={"3960"} />
          </Col>
          <Col span={3}>
            <Statistic title={"月实际交易次数"} value={"760"} />
          </Col>
          <Col span={3}>
            <Statistic title={"日实际交易次数"} value={"23"} />
          </Col>
          <Col span={3}>
            <Statistic
              valueStyle={{
                color: "#1ab31a",
              }}
              title={"$实现盈利"}
              value={512.68}
            />
          </Col>
          <Col span={3}>
            <Statistic
              valueStyle={{
                color: "#1ab31a",
              }}
              title={"昨日盈利点数"}
              value={"+118"}
            />
          </Col>
          <Col span={3}>
            <Statistic
              valueStyle={{
                color: "red",
              }}
              title={"昨日亏损点数"}
              value={"-197"}
            />
          </Col>
        </Row>
      </div>
      <div style={{ width: 500, margin: " 30px auto", position: "relative" }}>
        <Input
          prefix={"盈利 +"}
          addonAfter="点"
          type={"text"}
          size={"large"}
          style={{ width: 160, marginRight: 12 }}
          onChange={handleBaseSet}
          defaultValue={baseValue}
        />
        <Input
          prefix={"亏损 -"}
          addonAfter="点"
          type={"text"}
          size={"large"}
          style={{ width: 160 }}
          onChange={handleCount}
          defaultValue={textValue}
        />
        <div style={{ position: "absolute", right: 0, top: 0, fontSize: 16 }}>
          <Button type="primary" size={"large"} style={{ width: 120 }}>
            提交
          </Button>
        </div>
      </div>
      <div
        style={{
          marginBottom: 20,
        }}
      >
        <div
          style={{
            color: count === 2 ? "red" : "#1ab31a",
            padding: 12,
            width: 400,
            margin: "auto",
            marginBottom: 12,
            position: "relative",
          }}
        >
          <label style={{ marginRight: 20 }}>{"昨日盈利"}:</label>
          <span style={{ fontSize: 24, border: "dashed 1px grey", padding: 5 }}>
            {"$150"}
          </span>
          <label style={{ marginRight: 20, marginLeft: 30 }}>
            {"昨日点数"}:
          </label>
          <span style={{ fontSize: 24, border: "dashed 1px grey", padding: 5 }}>
            {"-81"}
          </span>
        </div>
        {/* {count.map((item: any, index: number) => (
          <div
            key={item.label}
            style={{
              color: index < 2 ? "red" : index > 7 ? "#999" : "#1ab31a",
              padding: 12,
              width: 160,
              marginBottom: 12,
              position: "relative",
            }}
          >
            <label style={{ marginRight: 20 }}>{item.label}:</label>
            <span
              style={{ fontSize: 24, border: "dashed 1px grey", padding: 5 }}
            >
              {item.value}
            </span>
            {index < 2 ? (
              <i
                style={{
                  display: "block",
                  position: "absolute",
                  bottom: -14,
                  left: 62,
                }}
              >
                -${(((baseValue * RATE) / 100) * (2 - index)).toFixed(0)}
              </i>
            ) : (
              <i
                style={{
                  display: "block",
                  position: "absolute",
                  bottom: -14,
                  left: 62,
                }}
              >
                ${(((baseValue * RATE) / 100) * (index - 1)).toFixed(0)}
              </i>
            )}
          </div>
        ))} */}
      </div>
      {/* <div style={{ height: 400, paddingLeft: 30, paddingRight: 30 }}>
        <Column
          {...config}
          columnStyle={{
            fill: "#1ab31a",
          }}
        />
      </div> */}
      {groupCount.map((item: any) => (
        <>
          <div
            style={{
              height: 200,
              paddingLeft: 30,
              paddingRight: 30,
              marginTop: 30,
            }}
          >
            <h3 style={{ margin: 0 }}>{item.month}</h3>
            <Column {...groupConfig} data={item.value} />
          </div>
          <div
            style={{
              marginTop: 30,
              left: "50%",
              transform: "translateX(-50%)",
              position: "relative",
              display: "inline-block",
            }}
          >
            {item.label}
          </div>
        </>
      ))}

      {/* <Form onFinish={handleSubmit}>
        <Form.Item label={"用户"} name={"username"}>
          <Input type={"text"} />
        </Form.Item>
        <Form.Item label={"密码"} name={"password"}>
          <Input.Password type={"password"} />
        </Form.Item>
        <Form.Item label={""}>
          <Button type={"primary"} htmlType={"submit"}>
            登录
          </Button>
        </Form.Item>
      </Form> */}
    </div>
  );
};

export default Login;
