import React from "react";
import "./index.scss";
import { Typography } from "antd";
import IconSVG from "../../Icons/IconSVG";
export default function AccountName() {
  return (
    <div className="content--container">
      <div className="token--container">
      <div className="account--name">
          <p>Account Name</p>
          <Typography.Paragraph
            copyable={{
              tooltips: false,
              text: "0xb98Ef0896C9f1A175B97078f40097ea9fdf18588",
            }}
          >
            {"0xb98Ef0896C9f1A175B97078f40097ea9fdf18588".substring(0, 6)}...
          </Typography.Paragraph>
        </div>
      </div>
    </div>
  );
}
