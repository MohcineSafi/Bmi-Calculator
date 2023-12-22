const myPrefixBtnEl = document.getElementById("btn-my-prefix");
const myPrefixBmiInputEl = document.getElementById("bmi-result-my-prefix");
const myPrefixWeightConditionEl = document.getElementById("weight-condition-my-prefix");

function calculateMyPrefixBMI() {
  const heightValue = document.getElementById("height-my-prefix").value / 100;
  const weightValue = document.getElementById("weight-my-prefix").value;

  const bmiValue = weightValue / (heightValue * heightValue);

  myPrefixBmiInputEl.value = bmiValue;

  if (bmiValue < 18.5) {
    myPrefixWeightConditionEl.innerText = "Under weight";
  } else if (bmiValue >= 18.5 && bmiValue <= 24.9) {
    myPrefixWeightConditionEl.innerText = "Normal weight";
  } else if (bmiValue >= 25 && bmiValue <= 29.9) {
    myPrefixWeightConditionEl.innerText = "Overweight";
  } else if (bmiValue >= 30) {
    myPrefixWeightConditionEl.innerText = "Obesity";
  }
}
myPrefixBtnEl.addEventListener("click", calculateMyPrefixBMI);
