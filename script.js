function calculate() {
  let credits = document.getElementById("credits").value.split(',').map(Number);
  let grades  = document.getElementById("grades").value.split(',').map(Number);

  if (credits.length !== grades.length) {
    document.getElementById("result").innerText =
      "⚠️ Credits & grades count must match";
    return;
  }

  let totalCredits = credits.reduce((a,b)=>a+b,0);
  let totalPoints = credits.reduce((sum,c,i)=>sum + c*grades[i],0);

  let cgpa = totalPoints / totalCredits;

  document.getElementById("result").innerText =
    "🌸 CGPA: " + cgpa.toFixed(2);
}