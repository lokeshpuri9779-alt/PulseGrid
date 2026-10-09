// BMI is an adult screening measure, not a medical diagnosis.
function calc(){
  const weight=Number(document.querySelector('#w').value);
  const height=Number(document.querySelector('#h').value);
  const result=document.querySelector('#result');
  if(!Number.isFinite(weight)||!Number.isFinite(height)||weight<1||weight>500||height<30||height>300){
    result.textContent='Enter a weight from 1–500 kg and a height from 30–300 cm.';
    return;
  }
  const bmi=weight/((height/100)**2);
  const category=bmi<18.5?'Underweight':bmi<25?'Healthy range':bmi<30?'Overweight':'Obesity range';
  result.textContent=`BMI: ${bmi.toFixed(1)} · Adult category: ${category}. BMI is a screening measure, not a diagnosis.`;
}
calc();
document.querySelector('[data-pg-action="pg-0"]').addEventListener('click',calc);
