import React from "react";
import "./Table.css";

const MyTable = () => {
  const data = [
    {
      orderId: "#281209",
      orderDate: "7 July, 2023",
      orderInput: "₹1,278.23",
      transactionFees: "₹22",
    },
    {
      orderId: "#281209",
      orderDate: "7 July, 2023",
      orderInput: "₹1,278.23",
      transactionFees: "₹22",
    },
    {
      orderId: "#281209",
      orderDate: "7 July, 2023",
      orderInput: "₹1,278.23",
      transactionFees: "₹22",
    },
    {
      orderId: "#281209",
      orderDate: "7 July, 2023",
      orderInput: "₹1,278.23",
      transactionFees: "₹22",
    },
    {
      orderId: "#281209",
      orderDate: "7 July, 2023",
      orderInput: "₹1,278.23",
      transactionFees: "₹22",
    },
    {
      orderId: "#281209",
      orderDate: "7 July, 2023",
      orderInput: "₹1,278.23",
      transactionFees: "₹22",
    },
    {
      orderId: "#281209",
      orderDate: "7 July, 2023",
      orderInput: "₹1,278.23",
      transactionFees: "₹22",
    },
    {
      orderId: "#281209",
      orderDate: "7 July, 2023",
      orderInput: "₹1,278.23",
      transactionFees: "₹22",
    },
    {
      orderId: "#281209",
      orderDate: "7 July, 2023",
      orderInput: "₹1,278.23",
      transactionFees: "₹22",
    },
    {
      orderId: "#281209",
      orderDate: "7 July, 2023",
      orderInput: "₹1,278.23",
      transactionFees: "₹22",
    },
    {
      orderId: "#281209",
      orderDate: "7 July, 2023",
      orderInput: "₹1,278.23",
      transactionFees: "₹22",
    },
    {
      orderId: "#281209",
      orderDate: "7 July, 2023",
      orderInput: "₹1,278.23",
      transactionFees: "₹22",
    },
    {
      orderId: "#281209",
      orderDate: "7 July, 2023",
      orderInput: "₹1,278.23",
      transactionFees: "₹22",
    },
    {
      orderId: "#281209",
      orderDate: "7 July, 2023",
      orderInput: "₹1,278.23",
      transactionFees: "₹22",
    },
    {
      orderId: "#281209",
      orderDate: "7 July, 2023",
      orderInput: "₹1,278.23",
      transactionFees: "₹22",
    },
    {
      orderId: "#281209",
      orderDate: "7 July, 2023",
      orderInput: "₹1,278.23",
      transactionFees: "₹22",
    },
    {
      orderId: "#281209",
      orderDate: "7 July, 2023",
      orderInput: "₹1,278.23",
      transactionFees: "₹22",
    },
    {
      orderId: "#281209",
      orderDate: "7 July, 2023",
      orderInput: "₹1,278.23",
      transactionFees: "₹22",
    },
    {
      orderId: "#281209",
      orderDate: "7 July, 2023",
      orderInput: "₹1,278.23",
      transactionFees: "₹22",
    },
  ];

  const headers = [
    "Order ID",
    "Order date ▼",
    "Order amount",
    "Transaction fees ⓘ",
  ];

  return (
    <table>
      <thead>
        <tr>
          {headers.map((header) => (
            <th key={header}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row) => (
          <tr key={row.orderId}>
            <td className="orderId">{row.orderId}</td>
            <td>{row.orderDate}</td>
            <td>{row.orderInput}</td>
            <td>{row.transactionFees}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default MyTable;
