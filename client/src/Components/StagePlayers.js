import React from "react";

const StagePlayers = ({ stage, user }) => {
  if (!stage) {
    return <span>Loading...</span>;
  }
  return (
    <div style={{ margin: "20px", minWidth: "200px" }}>
      <h3>{user}</h3>
      <table style={{ border: "1px solid" }}>
        {stage.map((row) => {
          return (
            <tr style={{ height: "2px", padding: "0px", margin: "0px" }}>
              {row.map((cell, x) =>
                cell[0] === 0 ? (
                  <td
                    style={{
                      border: 0,
                      width: "27px",
                      padding: "0px",
                      margin: "0px",
                      height: "2px",
                      backgroundColor: "#7a0099",
                      opacity: "20%",
                    }}
                    key={x}
                    type={cell[0]}
                  ></td>
                ) : (
                  <td
                    style={{
                      border: 0,
                      width: "27px",
                      padding: "8px",
                      margin: "0px",
                      height: "2px",
                      backgroundColor: "#b3ffff",
                    }}
                    key={x}
                    type={cell[0]}
                  ></td>
                )
              )}
            </tr>
          );
        })}
      </table>
    </div>
  );
};

export default StagePlayers;
