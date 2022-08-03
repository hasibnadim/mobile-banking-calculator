import React from "react";
import { Container, Tab, Tabs } from "react-bootstrap";
import AvailableBalAC from "./components/AvailableBalAC";
import CashoutForFixedB from "./components/CashoutForFixedB";
import FullCashout from "./components/FullCashout";

function Body() {
  return (
    <Container className="me-auto">
      <img src="bkash.png" alt="Bkash" height="100" className="p-2"/>
      <Tabs
        defaultActiveKey="fullcashout"
        id="uncontrolled-tab-example"
        className="mb-3"
      >
        <Tab eventKey="fullcashout" title="Full Cashout">
          <FullCashout />
        </Tab>
        <Tab eventKey="availablebalance" title="Available Balance">
          <AvailableBalAC />
        </Tab>
        <Tab eventKey="fixedbalance" title="Fixed Balance">
          <CashoutForFixedB />
        </Tab>
      </Tabs>
    </Container>
  );
}

export default Body;
