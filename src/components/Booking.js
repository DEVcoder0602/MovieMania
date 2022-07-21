import React, { useState } from "react";

const Booking = (props) => {
  const submitHandler = () => {
    alert("Booked");
    sessionStorage.setItem("name", name);
    sessionStorage.setItem("tickets", tickets);
    sessionStorage.setItem("quality", quality);
  };

  const [name, setName] = useState();
  const [tickets, setTickets] = useState();
  const [quality, setQuality] = useState();

  return (
    <div className="container">
      <div className="mb-3 row">
        <label htmlFor="staticInput" className="col-sm-1 col-form-label">
          MOVIE :
        </label>
        <div className="col-sm-10">
          <input
            type="text"
            readOnly
            className="form-control-plaintext"
            id="staticInput"
            value={props.movie}
          />
        </div>
        <div className="w-50 text-center">
          <input
            className="form-control form-control-lg my-2"
            type="text"
            placeholder="Enter Name"
            onChange={(e) => {
              e.preventDefault();
              setName(e.target.value);
            }}
          />
          {/* <input
            className="form-control my-2"
            type="text"
            placeholder="Default input"
          />
          <input
            className="form-control form-control-sm my-2"
            type="text"
            placeholder=".form-control-sm"
          /> */}
          <div className="text-start mb-2">
            <span>Number of tickets: </span>
            <button
              className="btn btn-outline-primary mx-3"
              type="button"
              onClick={(a) => {
                a.preventDefault();
                setTickets(1);
              }}
            >
              1
            </button>
            <button
              className="btn btn-outline-primary me-3"
              type="button"
              onClick={(b) => {
                b.preventDefault();
                setTickets(2);
              }}
            >
              2
            </button>
            <button
              className="btn btn-outline-primary me-3"
              type="button"
              onClick={(c) => {
                c.preventDefault();
                setTickets(3);
              }}
            >
              3
            </button>
            <button
              className="btn btn-outline-primary me-3"
              type="button"
              onClick={(d) => {
                d.preventDefault();
                setTickets(4);
              }}
            >
              4
            </button>
            <button
              className="btn btn-outline-primary"
              type="button"
              onClick={(f) => {
                f.preventDefault();
                setTickets(4);
              }}
            >
              5
            </button>
          </div>
          <div className="dropdown text-start">
            <span>Choose Quality: </span>
            <button
              className="btn btn-outline-primary mx-3"
              type="button"
              onClick={(w) => {
                w.preventDefault();
                setQuality("SD");
              }}
            >
              SD
            </button>
            <button
              className="btn btn-outline-primary me-3"
              type="button"
              onClick={(x) => {
                x.preventDefault();
                setQuality("HD");
              }}
            >
              HD
            </button>
            <button
              className="btn btn-outline-primary me-3"
              type="button"
              onClick={(y) => {
                y.preventDefault();
                setQuality("2k");
              }}
            >
              2k
            </button>
            <button
              className="btn btn-outline-primary"
              type="button"
              onClick={(z) => {
                z.preventDefault();
                setQuality("4k");
              }}
            >
              4k
            </button>
          </div>
        </div>
        <div style={{ textAlign: "left" }}>
          <button
            type="button"
            className="btn btn-dark w-50 mt-3"
            onClick={submitHandler}
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Booking;
