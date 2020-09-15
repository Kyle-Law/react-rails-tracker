/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchRecords } from "../actions";
import * as d3 from "d3";

function Chart({ records = [], fetchRecords, user }) {
  useEffect(() => {
    fetchRecords(user.id);
  }, []);

  useEffect(() => {
    addPortfolioChart();
    addEmotionChart();
  }, [records]);
  function addPortfolioChart() {
    document.getElementById("portfolio").innerHTML = "";

    //  the data that powers the bar chart, a simple array of numeric values
    const portfolioData = records.map((r) => r.portfolio);

    //  the size of the overall svg element
    const height = 200;
    const width = 400;

    //  the width of each bar and the offset between each bar
    const barWidth = 20;
    const barOffset = 5;
    d3.select("#portfolio")
      .append("svg")
      .attr("width", width)
      .attr("height", height)
      .attr("fill", "#4cb5e8")
      .selectAll("rect")
      .data(portfolioData)
      .enter()
      .append("rect")
      .attr("width", barWidth)
      .attr("height", function (data) {
        return data;
      })
      .attr("x", function (data, i) {
        return i * (barWidth + barOffset);
      })
      .attr("y", function (data) {
        return height - data;
      });
  }

  function addEmotionChart() {
    document.getElementById("emotion").innerHTML = "";

    //  the data that powers the bar chart, a simple array of numeric values
    const emotionData = records.map((r) => r.emotion * 10);

    //  the size of the overall svg element
    const height = 50;
    const width = 400;

    //  the width of each bar and the offset between each bar
    const barWidth = 20;
    const barOffset = 5;
    d3.select("#emotion")
      .append("svg")
      .attr("width", width)
      .attr("height", height)
      .attr("fill", "#4cb5e8")
      .selectAll("rect")
      .data(emotionData)
      .enter()
      .append("rect")
      .attr("width", barWidth)
      .attr("height", function (data) {
        return data;
      })
      .attr("x", function (data, i) {
        return i * (barWidth + barOffset);
      })
      .attr("y", function (data) {
        return height - data;
      });
  }
  return (
    <div className="chart-container">
      <h2>Portfolio Value</h2>
      <div id="portfolio" className="bar-chart"></div>
      <h2>Emotion Swings</h2>
      <div id="emotion" className="bar-chart"></div>
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

export default connect(mapStateToProps, mapDispatchToProps())(Chart);