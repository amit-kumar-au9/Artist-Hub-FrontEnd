import axios from "axios";
import { useState } from "react";
import { base_url } from "../../../Redux/config";
const configHeader = {
  headers: {
    "Content-Type": "application/json",
    "auth-token":
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwNTE3MTY0YTg3NDI4MDAxNTdlODRkZCIsImlhdCI6MTYxNjQzMjI5OCwiZXhwIjoxNjE2NTE4Njk4fQ.TRS66ShvnOsYsoNJTjc5oat3M5WPu4Du2TGknjcs70s",
  },
};
const Detail = (props) => {
  const [name, setName] = useState(props.Name);
  const [occassion, setOccassion] = useState(
    props.Occassion ? props.Occassion[0] : ""
  );
  const [occassion2, setOccassion2] = useState(
    props.Occassion ? props.Occassion[1] : ""
  );
  const [occassion3, setOccassion3] = useState(
    props.Occassion ? props.Occassion[2] : ""
  );
  const [shortDesc, setshortDesc] = useState(props.Desc);
  const saveData = () => {
    var Occassion = [];
    Occassion.push(occassion);
    Occassion.push(occassion2);
    Occassion.push(occassion3);

    const data = {
      name: name,
      occassion: Occassion,
      shortDesc: shortDesc,
    };
    console.log(data, "data");
    axios
      .post(`${base_url}/artist/editDetails`, data, configHeader)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
  const renderOccassion = (data) => {
    if (data) {
      data.map((val, idx) => {
        return <p key={idx}>{val}</p>;
      });
    }
  };
  console.log(props.followingDetail, "detailS");
  return (
    <div className="container d-flex flex-row align-items-center justify-content-around">
      <div className="d-flex flex-column">
        <h1 className="text-muted">{props.Name}</h1>
        <p>{renderOccassion(props.Occassion)}</p>
        <h6 className="text-center">{props.Desc}</h6>
      </div>
      <div className="d-flex flex-row">
        <h5>{props.followerCount}</h5>
        <h5
          className="text-muted"
          type="button"
          data-bs-toggle="modal"
          data-bs-target="#ModalBoxFollow"
        >
          follower
        </h5>
      </div>
      <div className="d-flex flex-row">
        <h5>{props.followingCount}</h5>
        <h5
          className="text-muted"
          type="button"
          data-bs-toggle="modal"
          data-bs-target="#ModalBoxFollow"
        >
          following
        </h5>
      </div>
      <button
        type="button"
        data-bs-toggle="modal"
        data-bs-target="#ModalBoxDetail"
        className="btn btn-danger"
      >
        Edit
      </button>
      <div
        className="modal fade"
        id="ModalBoxDetail"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Edit Detail
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <input
                onChange={(e) => {
                  setName(e.target.value);
                }}
                name="name"
                type="text"
                placeholder="name"
                className="form-control mb-2"
              />
              <div class="form-check form-check-inline">
                <input
                  onChange={(e) => {
                    setOccassion2(e.target.value);
                  }}
                  class="form-check-input"
                  type="checkbox"
                  id="inlineCheckbox1"
                  value="Birthday"
                />
                <label class="form-check-label" for="inlineCheckbox1">
                  Birthday
                </label>
              </div>
              <div class="form-check form-check-inline">
                <input
                  onChange={(e) => {
                    setOccassion3(e.target.value);
                  }}
                  class="form-check-input"
                  type="checkbox"
                  id="inlineCheckbox2"
                  value="Wedding"
                />
                <label class="form-check-label" for="inlineCheckbox2">
                  Wedding
                </label>
              </div>
              <div class="form-check form-check-inline">
                <input
                  onChange={(e) => {
                    setOccassion(e.target.value);
                  }}
                  class="form-check-input"
                  type="checkbox"
                  id="inlineCheckbox3"
                  value="Outing"
                />
                <label class="form-check-label" for="inlineCheckbox3">
                  Outing
                </label>
              </div>
              <input
                onChange={(e) => {
                  setshortDesc(e.target.value);
                }}
                type="text"
                name="detail"
                placeholder="details"
                className="form-control"
              />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                onClick={saveData}
                type="button"
                className="btn btn-primary"
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="ModalBoxFollow"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Follow
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              {props.followerDetail.map((val, idx) => {
                return <p key={idx}>{val.userId1}</p>;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
