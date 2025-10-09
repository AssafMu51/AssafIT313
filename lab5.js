    function StudentMessage() {
        document.getElementById("Message").innerHTML = "Welcome Student";
    }

    function twoSum() {
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);
    let sum = Number(num1) + Number(num2);
    document.getElementById("result").innerHTML = "Result is = " + sum;

    
    alert("Calculation done!");
    }
    