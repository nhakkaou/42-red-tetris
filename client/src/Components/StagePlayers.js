import React from "react";
import { Col } from "reactstrap";
import { StyledSpecter } from "./styling/StyledStage";

const StagePlayers = ({ stage, user, score }) => {
  if (!stage) {
    return <span>Loading...</span>;
  }
  return (
    <StyledSpecter>
      <div className="flex align-center justify-sa">
        <h3 style={{ color: "#fff" }}>{user}</h3>
        <h2 style={{ color: "#fff" }}>{score}</h2>
      </div>
      <table style={{ border: "1px solid" }}>
        {stage.map((row, i) => {
          return (
            <tbody key={`s-${i}`}>
              <tr style={{ height: "15px", padding: "0px", margin: "0px" }}>
                {row.map((cell, x) =>
                  cell[0] === 0 ? (
                    <td
                      style={{
                        border: 0,
                        width: "15px",
                        padding: "0px",
                        margin: "0px",
                        height: "2px",
                        backgroundColor: "#000",
                        opacity: "30%",
                      }}
                      key={`col-${x}`}
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
            </tbody>
          );
        })}
      </table>
    </StyledSpecter>
  );
};

export default StagePlayers;
