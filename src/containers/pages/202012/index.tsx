import React, { FC, useState } from "react";
import { Statistic, Row, Col } from "antd";
import { Column } from "@ant-design/charts";
import styles from "../index.module.scss";

const December: FC<any> = () => {
  const [statValue, setStatValue] = useState<any>(5);
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
      const name = _ref.name;
      if (name === "盈利") {
        return "#16c516";
      }
      return "red";
    },
  };
  return (
    <div>
      <div className={styles.stat}>
        <Row>
          <Col span={3}>
            <Statistic title={"交易股数"} value={500} />
          </Col>
          <Col span={4}>
            <Statistic title={"预期盈利点数"} value={"1320"} />
          </Col>
          <Col span={3}>
            <Statistic title={"月计划交易次数"} value={"660"} />
          </Col>
          <Col span={4}>
            <Statistic title={"日计划交易次数"} value={"30"} />
          </Col>
          <Col span={3}>
            <Statistic title={"$预期盈利"} value={"6600"} />
          </Col>
          <Col span={4}>
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
                color: "red",
              }}
              title={"最大止损点数"}
              value={"40"}
            />
          </Col>
        </Row>
        <Row>
          <Col span={3}>
            <Statistic title={"实际亏损点数"} value={"2640"} />
          </Col>
          <Col span={4}>
            <Statistic title={"实际盈利点数"} value={"3960"} />
          </Col>
          <Col span={3}>
            <Statistic title={"月实际交易次数"} value={"760"} />
          </Col>
          <Col span={4}>
            <Statistic title={"日实际交易次数"} value={"23"} />
          </Col>

          <Col span={3}>
            <Statistic title={"胜率"} value={"56%"} />
          </Col>
          <Col span={4}>
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
      <div className={styles.count}>
        <label>{"昨日盈利"}:</label>
        <span>{"$150"}</span>
        <label>{"昨日点数"}:</label>
        <span>{"-81"}</span>
      </div>

      {groupCount.map((item: any) => (
        <>
          <div className={styles.groupChat}>
            <h3>{item.month}</h3>
            <Column {...groupConfig} data={item.value} />
          </div>
          <div className={styles.chatStat}>{item.label}</div>
        </>
      ))}
    </div>
  );
};

export default December;
