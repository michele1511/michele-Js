let montoInicial = 1000; 
let aporteMensual = 250;
let saldo = montoInicial;
let interesMensual = 0.0125; 
for (let i = 1; i <= 12; i++) {
  saldo += (saldo + aporteMensual) * interesMensual;
}
console.log("El saldo final de tu cuenta de fin de año es: " +saldo.toFixed(2) +' Bs');