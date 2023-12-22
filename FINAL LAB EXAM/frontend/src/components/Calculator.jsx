import React, { useState } from "react";

const Calculator = () => {
  const [number1, setNumber1] = useState("");
  const [number2, setNumber2] = useState("");
  const [operation, setOperation] = useState("");
  const [result, setResult] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (operation === "*") {
      setResult(number1 * number2);
      console.log("result: ", result);
    } else {
      setResult(number1 - number2);
      console.log("result: ", result);
    }

    // API Call
    const response = await fetch(
      "http://localhost:5000/api/calculator/create",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          operand1: number1,
          operand2: number2,
          operation: operation,
          result: result,
        }),
      }
    );

    const json = await response.json();
    console.log(json);
  };

  return (
    <div className="container">
      <form
        onSubmit={handleSubmit}
        className="d-flex justify-content-center flex-row"
      >
        <div className="col-md-6">
          <label for="inputCity" className="form-label">
            Operand 1
          </label>
          <input
            type="text"
            className="form-control"
            id="inputNumber"
            name="number"
            value={number1}
            onChange={(event) => {
              setNumber1(event.target.value);
            }}
          />
        </div>
        <div class="mb-3 mx-3">
          <label for="inputState" className="form-label">
            Operation
          </label>
          <select
            id="inputState"
            className="form-select"
            name="order"
            onChange={(event) => {
              setOperation(event.target.value);
              console.log("operation: ", operation);
            }}
          >
            <option value="+">+</option>
            <option value="-">-</option>
            <option value="*">*</option>
            <option value="/">/</option>
          </select>
        </div>
        <div className="col-md-6">
          <label for="inputCity" className="form-label">
            Operand 2
          </label>
          <input
            type="text"
            className="form-control"
            id="inputNumber"
            name="number"
            value={number2}
            onChange={(event) => {
              setNumber2(event.target.value);
            }}
          />
        </div>
        <div className="">
          <button type="submit" className="btn btn-primary">
            Calculate
          </button>
        </div>
      </form>
    </div>
  );
};

export default Calculator;