import { useState } from "react";
import { Link } from "react-router-dom";
import Popover from "@mui/material/Popover";
import Button from "@mui/material/Button";
import { Radio, Space, Input, Form, Row, Col } from "antd";
import { DeleteOutlined, DownOutlined } from "@ant-design/icons";
import IconSVG from "../../Icons/IconSVG";
import "./styles.scss"
import { log } from "console";

const HeaderMain = () => {
  const Networks = [
    {
      indexNetwork: 1,
      name: 'Ethereum Mainnet',
    },
    {
      indexNetwork: 1,
      name: 'Polygon Mainnet',
    },
    {
      indexNetwork: 1,
      name: 'BSC Mainnet',
    },
    {
      indexNetwork: 1,
      name: 'Avalanche Mainnet',
    },
    {
      indexNetwork: 1,
      name: 'Fantom Mainnet',
    },
    {
      indexNetwork: 1,
      name: 'Ethereum Mainnet',
    },
    {
      indexNetwork: 1,
      name: 'Ethereum Mainnet',
    },
    {
      indexNetwork: 1,
      name: 'Ethereum Mainnet',
    },
    {
      indexNetwork: 1,
      name: 'Ethereum Mainnet',
    },
  ]
  const eip155Addresses = [
    {
      address:'123',
      indexAccount: 1,
      name: 'Account',
    },
    {
      address: '123',
      indexAccount: 2,
      name: 'Account',
    },
    {
      address: '123',
      indexAccount: 3,
      name: 'Account',
    },
    {
      address: '123',
      indexAccount: 4,
      name: 'Account',
    },
    {
      address: '123',
      indexAccount: 5,
      name: 'Account',
    },
    {
      address: '123',
      indexAccount: 6,
      name: 'Account',
    },
    {
      address: '123',
      indexAccount: 7,
      name: 'Account',
    },    {
      address: '123',
      indexAccount: 12,
      name: 'Account',
    },
  ]
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
const [anchorEl2, setAnchorEl2] = useState<HTMLButtonElement | null>(null);
const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
  setAnchorEl(event.currentTarget);
};
const handleClick2 = (event: React.MouseEvent<HTMLButtonElement>) => {
  setAnchorEl2(event.currentTarget);
};
const handleClose = () => {
  setAnchorEl(null);
};
const handleClose2 = () => {
  setAnchorEl2(null);
};
const [form] = Form.useForm();
const open = Boolean(anchorEl);
const open2 = Boolean(anchorEl2);
const id1 = open ? "simple-popover" : undefined;
const id2 = open2 ? "simple-popover" : undefined;

  return (
    <header>
      <Link to="/" className="logo--container">
        <IconSVG iconName="header-main" />
      </Link>
      <div className="button--container">
        <div>
        <Button
            aria-describedby={id1}
            // variant="contained"
            onClick={handleClick}
          >
            <div className="account">Account</div>
            <DownOutlined />
          </Button>
          <Popover
           id={id1}
           open={open}
           anchorEl={anchorEl}
           onClose={handleClose}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'center',
            }}
                className="popup--header"
          >
            <div className="text--accounts">
              <h2 className="title title--accounts">Account</h2>
              <p className="text--desc">123</p>
            </div>
              <div className="search--bar">
              <Form form={form}>
                <Form.Item name="search">
                  <Input placeholder="Search accounts" />
                </Form.Item>
              </Form>
              <Radio.Group onChange={(e) => {
                console.log(e.target.value)
              }} >
                <Space direction="vertical" style={{
                  width: "100%",
                }}>
                  {eip155Addresses.map(
                  ({ address, name, indexAccount }, index: number) => {
                    if (indexAccount <= 9) {
                      return (
                        <div key={indexAccount} className="account--option">
                          <Radio value={indexAccount}>{name} </Radio>
                        </div>
                      );
                    } else if (indexAccount >= 10) {
                      return (
                        <Row
                          gutter={[12, 12]}
                          key={indexAccount}
                          className="account--option"
                        >
                          <Col xs={13} md={13}>
                            <Radio value={indexAccount}>{name}</Radio>
                          </Col>
                          <Col xs={8} md={8}>
                            <p>Imported</p>
                          </Col>
                          <Col xs={3} md={3}>
                            <DeleteOutlined
                              style={{
                                color: "white",
                                fontSize: "14px",
                                marginLeft: "5px",
                              }}
                            />
                          </Col>
                        </Row>
                      );
                    }
                  }
                )}
              </Space>
              </Radio.Group>
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <button className="btn--add btn--gray--default">
                <Link to="/account/import-account" style={{ color: "black" }}>
                  Import Accounts
                </Link>
              </button>
            </div>
          </Popover>
        </div>
        <div>
        <Button aria-describedby={id2} onClick={handleClick2}>
            <p style={{ marginRight: "5px", width: "75px", marginTop: "3px"  }}>
           Ethereum
            </p>
            <DownOutlined />
          </Button>

          <Popover
            id={id2}
            open={open2}
            anchorEl={anchorEl2}
            onClose={handleClose2}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            className="popup--header"
          >
              <h2 className="title title--networks">Networks</h2>
            <Radio.Group
              // defaultValue="Ethereum Mainnet"
      
              onChange={(e) => {
                console.log(e.target.value);
                
              }}
            >
              <Space direction="vertical" style={{ width: "100%" }}>
                {Networks.map(({ name,indexNetwork }: any, index: number) => {
                  return (
                    <Row
                      gutter={[12, 12]}
                      key={index}
                      className="account--option"
                    >
                      <Col xs={21} md={21}>
                        <Radio value={index}>{name}</Radio>
                      </Col>
                      <Col xs={3} md={3}>
                        {index > 0 && (
                          <DeleteOutlined
                            style={{ color: "white", fontSize: "14px" }}
                          />
                        )}
                      </Col>
                    </Row>
                  );
                })}
              </Space>
            </Radio.Group>
            <div style={{ textAlign: "center" }}>
              <Link
                to="/network/import-network"
                style={{ display: "flex", justifyContent: "center" }}
              >
                <button className="btn--add btn--gray--default">
                  Add Network
                </button>
              </Link>
            </div>
          </Popover>
        </div>
        </div>
    </header>
  );
};

export default HeaderMain;
