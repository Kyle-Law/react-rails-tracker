import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchRecords } from "../actions";

function Records({ records = [], fetchRecords, user }) {
  useEffect(() => {
    fetchRecords(user.id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="records-container">
      <h2>All Records</h2>
      <div>
        <div className="record-header">
          <p>No</p>
          <p>Portfolio($)</p>
          <p>Emotion</p>
          <p>Description</p>
        </div>
        {records &&
          records.map((record, index) => (
            <div key={record.id} className="record-item">
              <p>{index + 1}</p>
              <p>${record.portfolio}</p>
              <p>{record.emotion}</p>
              <p>{record.description}</p>
            </div>
          ))}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  records: state.records,
  user: state.user,
});

const mapDispatchToProps = () => ({
  fetchRecords,
});

export default connect(mapStateToProps, mapDispatchToProps())(Records);
