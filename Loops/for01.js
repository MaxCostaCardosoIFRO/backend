let fibonacci = [0, 1]; 
for (let i = 2; i < 20; i++) {
    fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
}

console.log("Os primeiros 20 números da sequência de Fibonacci são:");
for (let i = 0; i < 20; i++) {
    console.log(fibonacci[i]); 
}
