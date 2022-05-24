
function reiniciarCarrito() {
  document.getElementById("totalApagar").innerHTML = "Total a pagar: $";
  document.getElementById("cantTickets")
  document.getElementById("catComprador")
 
}
function calcularTotal(precio) {
cantidad = document.getElementById("cantTickets").value;
categoria = document.getElementById("catComprador").value;

total= (precio * cantidad)-(precio * cantidad *categoria);

console.log(total);

document.getElementById("totalApagar").innerHTML= "Total a pagar: $" + total;

}