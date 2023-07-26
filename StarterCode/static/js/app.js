
// drop down section
// get the url
const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json"

// function buildCharts() {
//   d3.json(url)
//   let samples = data.samples;
//   let resultArray = samples.filter

//  // Call the buildCharts 
//  buildCharts(dataNames[0], data);

//  horizontal bar chart
function buildCharts(selectedSample, data) {
// Filter the data to get the information for the selected sample
let selectedData = data.samples.find(sample => sample.id === selectedSample);

// Get the top 10 OTUs for the selected sample
let sampleValues = selectedData.sample_values.slice(0, 10).reverse();
let otuIDs = selectedData.otu_ids.slice(0, 10).reverse().map(id => `OTU ${id}`);
let otuLabels = selectedData.otu_labels.slice(0, 10).reverse();

// Create the trace for the horizontal bar chart
let trace1 = {
  x: sampleValues,
  y: otuIDs,
  text: otuLabels,
  name: "OTUs",
  type: "bar",
  orientation: "h"
};

// Define the layout for the chart
let layout = {
  title: "Top 10 OTUs Found",
  xaxis: { title: "Sample Values" },
  yaxis: { title: "OTU IDs" },
};

// Plot the chart using Plotly
Plotly.newPlot("plot", [trace1], layout);
}

//  dropdown change
d3.select("#selDataset").on("change", function() {
// Get the selected value from the dropdown
let selectedSample = d3.select(this).property("value");

// Call the buildCharts 
buildCharts(selectedSample, data);
});



function init() {
  // grab the item to the dropdown section
    let selector = d3.select("#selDataset");

    //use sample name as a select option
    d3.json(url).then((data) => {

    let dataNames = data.names;
      
    for ( let i = 0; i< dataNames.length; i ++) {
      selector
        .append("option")
        .text(dataNames[i])
        .property("value", dataNames[i]);
    };

  });
}

init();

// d3.json(url).then(function(data){
//     console.log("button",data);
// });
// sort the data by otu value
// // let sortByOtu = data.sort((a,b) => b-a);
// let sortByOtu = data.sort((a,b) => b.sample_values-a.sample_values);
// //slice the first 10 objects
// slicedData = sortByOtu.slice(0,10);

// //reverse the array 
// reversedData = slicedData.reverse();


// //trace1 for the otu data
// let trace1 = {
//   x: 
//   y: dataNames,
//   // text: reversedData.map(object => object.),
//   name: "otu_ids",
//   type: "bar",
//   orientation: "h"
// };

// //apply the layout
// let layout = {
//   title: "belly-button-chart",
//   margin: {
//     l: 100,
//     r: 100,
//     t: 100,
//     b: 100
//   }
// };

// // let tracedata2 = [trace1]

// Plotly.newPlot("plot",trace1, layout);