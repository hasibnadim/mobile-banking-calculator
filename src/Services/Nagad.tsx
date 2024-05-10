import { useEffect, useState } from "react";
import { Card, Form, Tab, Tabs } from "react-bootstrap"; 
function CashOut() {
  const [mainBalance, setMainBalance] = useState(0);
  const [isIslamiAcc, setIsIslamiAcc] = useState(false);
  const [cashoutRate, setCashoutRate] = useState(0);
  const [fee, setFee] = useState(0);
  const [cashOutBal, setCashOutBal] = useState(0);
  const [isFullCashOut, setIsFullCashOut] = useState(false);
  useEffect(() => {
    if (isIslamiAcc) {
      setCashoutRate(1.5);
    } else {
      setCashoutRate(1.25);
    }
  }, [isIslamiAcc]);
  useEffect(() => {
    let cashOutBalx = cashOutBal;
    if (isFullCashOut) {
      cashOutBalx = mainBalance / (1 + cashoutRate / 100);
      setCashOutBal(Number(cashOutBalx.toFixed(2)));
    }
    let feex = (cashOutBalx * cashoutRate) / 100;
    setFee(feex);
  }, [mainBalance, cashoutRate, cashOutBal, isFullCashOut]);

  return (
    <div className="p-1">
      <>
        <label>Account Balance:</label>
        <input
          onFocus={(e) =>
            Number(e.currentTarget.value) === 0 && e.target.select()
          }
          type="number"
          className="form-control"
          value={mainBalance}
          onChange={(e) => setMainBalance(parseFloat(e.target.value))}
        />
      </>
      <>
        <label>Cash Out Balance: </label>
        <input
          onFocus={(e) =>
            Number(e.currentTarget.value) === 0 && e.target.select()
          }
          type="number"
          className="form-control"
          value={cashOutBal}
          disabled={isFullCashOut}
          onChange={(e) => setCashOutBal(parseFloat(e.target.value))}
        />
      </>
      <Form.Check
        type="checkbox"
        id={`default-checkbox1`}
        label="Full Cashout"
        defaultChecked={isFullCashOut}
        onChange={() => setIsFullCashOut((pv) => !pv)}
      />
      <Form.Check
        type="checkbox"
        id={`default-checkbox`}
        label="Islami Account"
        defaultChecked={isIslamiAcc}
        onChange={() => setIsIslamiAcc((pv) => !pv)}
      />
      <p className="d-flex justify-content-between mb-0 fs-6">
        <span>Current Cashout rate is {cashoutRate}% </span>
      </p>
      <br />
      <Card body className="">
        Current Balance :{" "}
        {Number((mainBalance - (fee + cashOutBal)).toFixed(2))} &#2547;
        <br />
        Fee : {fee.toFixed(4)} &#2547;
        <br />
        You Will Receive : {cashOutBal.toFixed(2)} &#2547;
      </Card>
    </div>
  );
}
function CashOutEdge() {
  const [mainBalance, setMainBalance] = useState(0);
  const [isIslamiAcc, setIsIslamiAcc] = useState(false);
  const [cashoutRate, setCashoutRate] = useState(0);
  const [fee, setFee] = useState(0);
  const [cashOutBal, setCashOutBal] = useState(0);
  const [currentBal, setCurrentBal] = useState(0);
  useEffect(() => {
    if (isIslamiAcc) {
      setCashoutRate(1.5);
    } else {
      setCashoutRate(1.25);
    }
  }, [isIslamiAcc]);
  useEffect(() => {
    var tmp = mainBalance - currentBal;
    let feex = (tmp * cashoutRate) / 100;

    setFee(feex);
    setCashOutBal(tmp / (1 + cashoutRate / 100));
  }, [mainBalance, cashoutRate, currentBal]);

  return (
    <div className="p-1">
      <>
        <label>Account Balance:</label>
        <input
          onFocus={(e) =>
            Number(e.currentTarget.value) === 0 && e.target.select()
          }
          type="number"
          className="form-control"
          value={mainBalance}
          onChange={(e) => setMainBalance(parseFloat(e.target.value))}
        />
      </>
      <>
        <label>Current Balance: </label>
        <input
          onFocus={(e) =>
            Number(e.currentTarget.value) === 0 && e.target.select()
          }
          type="number"
          className="form-control"
          value={currentBal}
          onChange={(e) => setCurrentBal(parseFloat(e.target.value))}
        />
      </>

      <Form.Check
        type="checkbox"
        id={`default-checkbox2`}
        label="Islami Account"
        defaultChecked={isIslamiAcc}
        onChange={() => setIsIslamiAcc((pv) => !pv)}
      />
      <p className="d-flex justify-content-between mb-0 fs-6">
        <span>Current Cashout rate is {cashoutRate}% </span>
      </p>
      <br />
      <Card body className="">
        Current Balance : {Number(currentBal).toFixed(2)} &#2547;
        <br />
        Fee : {fee.toFixed(4)} &#2547;
        <br />
        You Will Receive : {cashOutBal.toFixed(2)} &#2547;
      </Card>
    </div>
  );
}
function Nagad() {
  useEffect(() => {
    document.title = "Nagad Cashout Calculator";
  }, []);
  return (
    <>
      <h5>Nagad </h5>

      <Tabs
        defaultActiveKey="cashout"
        id="cashoutTabs"
        className="d-flex flex-nowrap overflow-x-auto overflow-y-hidden"
      >
        <Tab eventKey="cashout" title="Cashout" className="p-0">
          <CashOut />
        </Tab>
        <Tab eventKey="availablebalance" title="Cashout Edge">
          <CashOutEdge />
        </Tab>
      </Tabs>
    </>
  );
}

export default Nagad;
