const omtrekBtn = document.getElementById("omtrek-submit");
const oppervlakteBtn = document.getElementById("oppervlakte-submit");
const inputOmtrek = document.getElementById("input-omtrek");
const inputOppervlakte = document.getElementById("input-oppervlakte");
const omtrekResult = document.getElementById("omtrek-result");
const oppervlakteResult = document.getElementById("oppervlakte-result");
const formuleSelect = document.getElementById("formule");
const omtrekDiv = document.querySelector(".omtrek");
const oppervlakteDiv = document.querySelector(".oppervlakte");

function updateFormula() {
    const selectedFormule = formuleSelect.value;
    if (selectedFormule === 'omtrek') {
        omtrekDiv.style.display = 'block';
        oppervlakteDiv.style.display = 'none';
        omtrekResult.textContent = ''; // Clear previous result
        oppervlakteResult.textContent = ''; // Clear previous result
    } else if (selectedFormule === 'oppervlakte') {
        omtrekDiv.style.display = 'none';
        oppervlakteDiv.style.display = 'block';
        omtrekResult.textContent = ''; // Clear previous result
        oppervlakteResult.textContent = ''; // Clear previous result
    }
}

// Attach change event listener to the dropdown
formuleSelect.addEventListener('change', updateFormula);

// Initial call to display the correct input based on the default selected option
updateFormula();


omtrekBtn.onclick = function(){
 let radius = inputOmtrek.value;
 let calculate1 = Math.floor(radius * Math.PI * 2);
 omtrekResult.textContent = "Omtrek: " + calculate1;
}

oppervlakteBtn.onclick = function(){
    let radius1 = inputOppervlakte.value;
    let calculate2 = Math.floor(radius1 * radius1 * Math.PI);
    omtrekResult.textContent = "Oppervlakte: " + calculate2;
}
  