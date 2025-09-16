import React from "react";
// ["Dispute", "Accepted", "Rejected", "On-Hold"]
export default function BadgeStatus({ status }) {
  const temp = status.split("-").join("");
  const classes = {
    Dispute: "bg-dark",
    Accepted: "bg-success",
    Rejected: "bg-danger",
    OnHold: "bg-warning",
  };

  return (
    <td>
      <span class={`badge ${classes[temp]}`}>{status}</span>
    </td>
  );
}
