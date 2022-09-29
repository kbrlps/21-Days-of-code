var count = 0;

var value = document.getElementById("valor");
var btns = document.querySelectorAll(".btn");

console.log(btns);

btns.forEach(function(btns) {
   btns.addEventListener("click", function (e) {
        const styles = e.currentTarget.classList;
        if (styles.contains('subtrai')) {
            count--;
        }   else if (styles.contains('soma')) {
            count++;
        }
        else {
            count = 0;
        }
        value.textContent = count;
   });
})
