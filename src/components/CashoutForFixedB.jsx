import React, { useEffect, useState } from "react";
import { Card, Form, InputGroup } from "react-bootstrap";

function CashoutForFixedB() {
  const [mainBalance, setMainBalance] = useState(0);
  const [isPriyoNumber, setIsPriyoNumber] = useState(false);
  const [cashoutRate, setCashoutRate] = useState();
  const [keepBalInAcc, setKeepBalInAcc] = useState(0)
  const [cashOutBill, setCashOutBill] = useState(0);
  
  useEffect(() => {
    if (isPriyoNumber) {
      setCashoutRate(1.49);
    } else {
      setCashoutRate(1.85);
    }
  }, [isPriyoNumber]);

  useEffect(() => {
    var tmp=mainBalance-keepBalInAcc
    setCashOutBill(tmp / (1 + cashoutRate / 100))
  }, [mainBalance, keepBalInAcc, cashoutRate]);

  return (
    <div>
      <p>How much amount you will get for fixed Balance after cashout.</p>
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
        <InputGroup.Text>Keep in Acc &#2547;</InputGroup.Text>
        <input
          type="number"
          className={`form-control ${keepBalInAcc>mainBalance&&"text-danger"}`}
          value={keepBalInAcc}
          onChange={(e) => setKeepBalInAcc(parseFloat(e.target.value))}
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
      <p className="d-flex justify-content-between mb-0 fs-6 "><span>Your will pay:</span><span >Current CashOut rate is {cashoutRate}% </span></p>
      <Card body className="text-primary">
        &#2547; {cashOutBill}
      </Card>
    </div>
  )
}

export default CashoutForFixedB