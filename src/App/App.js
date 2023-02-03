import React, { useEffect, useState } from "react";
import { MdSportsCricket } from "react-icons/md";
import { FiTarget } from "react-icons/fi";
import { AiTwotoneQuestionCircle } from "react-icons/ai";
import "./App.css";

export default function App() {
  const handleChange = (name) => (event) => {
    setNewData({ ...newData, [name]: event.target.value });
  };

  const [data, setData] = useState({
    teamName: "India",
    teamScore: 0,
    wicket: 0,
    balls: "0.0",
    target: "",
    message: "",
  });

  const [newData, setNewData] = useState({
    teamName: "India",
    teamScore: 0,
    Wicket: 0,
    over: "0.0",
    message: "TeamB needs 12 runs from 6 balls",
    target: 100,
  });

  const performUpdate = (e) => {
    localStorage.setItem("obj", JSON.stringify(newData));
    setData({
      teamName: newData.teamName,
      teamScore: newData.teamScore,
      wicket: newData.Wicket,
      balls: newData.over,
      target: newData.target,
      message: newData.message,
    });
    // e.preventDefault();
  };

  const UI = () => {
    return (
      <>
        {data.teamName && (
          <div className="container-fluid">
            <div className="row">
              <div
                className="col-12 text-dark py-2 mx-auto "
                style={{ backgroundColor: "black" }}
              >
                <p className="border border-dark rounded-pill text-center pb-3 mb-4 mt-2 pt-1 bg-light col-6 mx-auto">
                  <i
                    className="text-danger my-0 py-0"
                    style={{
                      fontSize: "15px",
                    }}
                  >
                    <AiTwotoneQuestionCircle className="blink"></AiTwotoneQuestionCircle>
                    <span className="pl-2 font-weight-bold">LIVE</span>
                  </i>
                  <p className="my-0">
                    <span className="border border-light px-2 py-3 ">
                      <small
                        className="font-weight-bold"
                        style={{
                          fontSize: "40px",
                        }}
                      >
                        <i className="pr-2 text-info">
                          <MdSportsCricket
                            style={{
                              fontSize: "35px",
                            }}
                          ></MdSportsCricket>
                        </i>
                        {data.teamName}
                      </small>{" "}
                      <small
                        className=""
                        style={{
                          fontSize: "30px",
                        }}
                      >
                        {" "}
                        : {data.teamScore}/{data.wicket} ({data.balls})
                      </small>
                    </span>{" "}
                    <span className="border border-light px-4 py-3">
                      {data.target && (
                        <small>
                          <b
                            style={{
                              fontSize: "40px",
                            }}
                            className="ml-2"
                          >
                            <i
                              className="pr-2 text-danger"
                              style={{
                                fontSize: "40px",
                              }}
                            >
                              <FiTarget></FiTarget>
                            </i>
                            Target
                          </b>{" "}
                          <small
                            className=""
                            style={{
                              fontSize: "37px",
                            }}
                          >
                            {" "}
                            : {data.target}
                          </small>
                        </small>
                      )}
                    </span>
                  </p>

                  {data.message && (
                    <p className="py-1 my-1">
                      <small
                        style={{ fontSize: "20px" }}
                        className="font-weight-bold"
                      >
                        {data.message}
                      </small>
                    </p>
                  )}
                </p>
              </div>
            </div>
          </div>
        )}

        <div className="container mb-5" style={{ marginTop: "200px" }}>
          <form className="">
            <div className="row">
              <div className="col-3">
                <div class="form-group">
                  <label for="exampleInputEmail1">Team Name</label>
                  <input
                    type="text"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    value={newData.teamName}
                    onChange={handleChange("teamName")}
                  />
                </div>
              </div>
              <div className="col-3">
                <div class="form-group">
                  <label for="exampleInputPassword1">Runs</label>
                  <input
                    type="text"
                    class="form-control"
                    id="exampleInputPassword1"
                    value={newData.teamScore}
                    onChange={handleChange("teamScore")}
                  />
                </div>
              </div>
              <div className="col-3">
                <div class="form-group">
                  <label for="exampleInputPassword1">Wicket</label>
                  <input
                    type="text"
                    class="form-control"
                    id="exampleInputPassword1"
                    value={newData.Wicket}
                    onChange={handleChange("Wicket")}
                  />
                </div>
              </div>

              <div className="col-3">
                <div class="form-group">
                  <label for="exampleInputPassword1">Over</label>
                  <input
                    type="text"
                    class="form-control"
                    id="exampleInputPassword1"
                    value={newData.over}
                    onChange={handleChange("over")}
                  />
                </div>
              </div>
              <div className="col-3">
                <div class="form-group">
                  <label for="exampleInputPassword1">Target</label>
                  <input
                    type="text"
                    class="form-control"
                    id="exampleInputPassword1"
                    value={newData.target}
                    onChange={handleChange("target")}
                  />
                </div>
              </div>
              <div className="col-9">
                <div class="form-group">
                  <label for="exampleInputPassword1">
                    {JSON.parse(localStorage.getItem("obj"))?.message}
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="exampleInputPassword1"
                    // value={JSON.parse(localStorage.getItem("obj"))?.message}
                    onChange={handleChange("message")}
                  />
                </div>
              </div>
            </div>

            <button
              type="button"
              onClick={performUpdate}
              class="btn btn-primary"
            >
              Update
            </button>
          </form>
        </div>

        <p>{localStorage.getItem("obj")}</p>
      </>
    );
  };

  useEffect(() => {
    UI();
  });

  return <>{UI()}</>;
}
