// Calendar-based age with month-end clamping and local dates (no UTC date-string parsing).
function calc(){
  const value=document.querySelector('#dob').value;
  const result=document.querySelector('#result');
  const match=/^(\d{4})-(\d{2})-(\d{2})$/.exec(value);
  if(!match){result.textContent='Enter a valid date of birth.';return;}
  const [year,month,day]=match.slice(1).map(Number);
  const birth=new Date(year,month-1,day);
  const today=new Date();
  const end=new Date(today.getFullYear(),today.getMonth(),today.getDate());
  if(year<1900||birth.getFullYear()!==year||birth.getMonth()!==month-1||birth.getDate()!==day||birth>end){
    result.textContent='Enter a valid birth date between 1900 and today.';
    return;
  }
  function anniversary(months){
    const first=new Date(year,month-1+months,1);
    const last=new Date(first.getFullYear(),first.getMonth()+1,0).getDate();
    return new Date(first.getFullYear(),first.getMonth(),Math.min(day,last));
  }
  let years=end.getFullYear()-year;
  if(anniversary(years*12)>end)years--;
  let months=0;
  while(months<11&&anniversary(years*12+months+1)<=end)months++;
  const anchor=anniversary(years*12+months);
  const days=Math.round((Date.UTC(end.getFullYear(),end.getMonth(),end.getDate())-Date.UTC(anchor.getFullYear(),anchor.getMonth(),anchor.getDate()))/86400000);
  result.textContent=`${years} years, ${months} months, ${days} days`;
}
calc();
document.querySelector('[data-pg-action="pg-0"]').addEventListener('click',calc);
