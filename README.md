# Bellybutton Biodiversity Dashboard

This is an interactive web visualization dashboard that allows users to explore bellybutton biodiversity data. 
The dashboard displays bar charts and bubble charts for each selected sample, showing the top 10 Operational Taxonomic Units (OTUs) found and their corresponding sample values.

## Technologies Used

- HTML
- CSS
- JavaScript
- D3.js (Data-Driven Documents)
- Plotly.js (JavaScript charting library)

- Function Details
buildCharts(selectedSample)
This function is responsible for building the bar chart and bubble chart for the selected sample.
It fetches data from the provided URL using D3.js.
The bar chart displays the top 10 OTUs and their corresponding sample values in a horizontal bar chart.
The bubble chart displays all OTU IDs and sample values for the selected sample in a scatter plot.
The colorscale for the bubble chart is set to "Earth" to represent different OTU IDs with distinct colors.
The charts are created using Plotly.js.
