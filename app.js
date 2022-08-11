console.log("Hey Back to School DS23")
let viz;
// Create variable to store viz container
// Create variable to store the dashboard options
// Create variable to store the URL
const vizContainer = document.getElementById("vizContainer");
const option = {
    device:"desktop",
    height:"1200px",
    width:"1100px",
    hideToolbar: true
};
const url= "https://public.tableau.com/views/Pagoda/Dashboard1";

function initViz(){
    viz = new tableau.Viz(vizContainer, url, option)
}

// Listeners go here

document.addEventListener("DOMContentLoaded", initViz);

// Buttons go here
const ExportPDFButton = document.getElementById("exportPDF");
ExportPDFButton.addEventListener("click", exportPDFfunction);
function exportPDFfunction() {
    viz.showExportPDFDialog();
}

const ExportPPTButton = document.getElementById("exportPPT");
ExportPPTButton.addEventListener("click", exportPowerPointfunction);
function exportPowerPointfunction() {
    viz.showExportPowerPointDialog();
}

const RefreshData = document.getElementById("refreshData");
ExportPPTButton.addEventListener("click", refreshDatafunction);
function refreshDatafunction() {
    viz.refreshDataAsync();
}

//Filter Function
document.getElementById("filterButton").addEventListener("click", applyfilterFunction);
function applyfilterFunction(){
    console.log("test")
    const minValue =  document.getElementById("minValue").value;
    const maxValue = document.getElementById("maxValue").value;
    console.log(minValue, maxValue);
    const workbook = viz.getWorkbook();
    const activeSheet = workbook.getActiveSheet();
    console.log(activeSheet);
    const sheets = activeSheet.getWorksheets();
    console.log(sheets)
    const sheettofilter = sheets[0];
    sheettofilter.applyRangeFilterAsync("x_rotated",
    {min:minValue, max:maxValue}).then(alert("viz is filtered"));
}