import React, { useEffect, useState } from "react";
import { Card, Form, InputGroup } from "react-bootstrap";

function FullCashout() {
  const [mainBalance, setMainBalance] = useState(0);
  const [isPriyoNumber, setIsPriyoNumber] = useState(false);
  const [cashoutRate, setCashoutRate] = useState();
  const [cashOutBill, setCashOutBill] = useState(0);
  useEffect(() => {
    if (isPriyoNumber) {
      setCashoutRate(1.49);
    } else {
      setCashoutRate(1.85);
    }
  }, [isPriyoNumber]);
  useEffect(() => {
    setCashOutBill(mainBalance / (1 + cashoutRate / 100));
  }, [mainBalance, cashoutRate]);

  return (
    <div>
      <p>How much amount you will get after full cashout.</p>
      <InputGroup className="mb-3">
        <InputGroup.Text>Main Balance &#2547;</InputGroup.Text>
        <input
          type="number"
          className="form-control"
          value={mainBalance}
          onChange={(e) => setMainBalance(parseFloat(e.target.value))}
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
      <p className="d-flex justify-content-between mb-0 fs-6"><span>You will pay:</span><span>Current CashOut rate is {cashoutRate}% </span></p>
      <Card body className="text-primary">
        &#2547; {cashOutBill}
      </Card>
    </div>
  );
}

export default FullCashout;
