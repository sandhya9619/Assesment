function Result() {

    let Date1 = document.getElementById("from");
    let Date2 = document.getElementById("to");
  
    // Total Days
    let a = new Date(Date1.value);
    let b = a.getDate();
    console.log(b);
  
    let c = new Date(Date2.value);
    let d = c.getDate();
    console.log(d);
  
    let totalDays = Math.abs(c - a) / (1000 * 60 * 60 * 24);
    console.log(totalDays);
    document.getElementById("R1").innerHTML = totalDays;
  
    // Total Months
    let e = new Date(Date1.value);
    let f = e.getMonth() + 1;
    console.log(f);
  
    let g = new Date(Date2.value);
    let h = g.getMonth() + 1;
    console.log(h);
  
    let totalMonths =
      (g.getFullYear() - e.getFullYear()) * 12 + (g.getMonth() - e.getMonth());
    console.log(totalMonths);
    document.getElementById("R2").innerHTML = totalMonths;
  
    // Total Years
    let i = new Date(Date1.value);
    let j = i.getFullYear();
    console.log(j);
  
    let k = new Date(Date2.value);
    let l = k.getFullYear();
    console.log(l);
  
    let totalYears = k.getFullYear() - i.getFullYear();
    console.log(totalYears);
    document.getElementById("R3").innerHTML = totalYears;
  
  }
  