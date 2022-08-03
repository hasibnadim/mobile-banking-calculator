import React, { useEffect, useState } from "react";
import { Card, Form, InputGroup } from "react-bootstrap";

function AvailableBalAC() {
  const [mainBalance, setMainBalance] = useState(0);
  const [isPriyoNumber, setIsPriyoNumber] = useState(false);
  const [cashoutRate, setCashoutRate] = useState();
  const [cashOutBal, setCashOutBal] = useState(0);
  const [availableBal, setAvailableBal] = useState(0);

  useEffect(() => {
    if (isPriyoNumber) {
      setCashoutRate(1.49);
    } else {
      setCashoutRate(1.85);
    }
  }, [isPriyoNumber]);

  useEffect(() => {
    setAvailableBal(mainBalance - (cashOutBal + (cashOutBal * cashoutRate) / 100));
  }, [mainBalance, cashOutBal, cashoutRate]);

  return (
    <div>
      <p>How much amount will available on you balance after cashout.</p>
      <InputGroup className="mb-3">
        <InputGroup.Text>Main Balance &#2547;</InputGroup.Text>
        <input
          type="number"
          className="form-control"
          value={mainBalance}
          onChange={(e) => setMainBalance(parseFloat(e.target.value))}
        />
      </InputGroup>
      <InputGroup className="mb-3">
        <InputGroup.Text>CashOut Balance &#2547;</InputGroup.Text>
        <input
          type="number"
          className="form-control"
          value={cashOutBal}
          onChange={(e) => setCashOutBal(parseFloat(e.target.value))}
        />
      </InputGroup>
      <Form.Check
        type="checkbox"
        id={`default-checkbox`}
        label="Cashout with 'Priyo Agent Number'"
        defaultChecked={isPriyoNumber}
        onChange={() => setIsPriyoNumber((pv) => !pv)}
      />
      <br />
      <p className="d-flex justify-content-between mb-0 fs-6"><span>Your available Balance:</span><span>Current CashOut rate is {cashoutRate}% </span></p>
      <Card body className={availableBal<0?"text-danger":"text-primary"}>
        &#2547; {availableBal}
      </Card>
    </div>
  );
}

export default AvailableBalAC;
