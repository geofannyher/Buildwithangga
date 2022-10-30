const fruit = {
    name: "nanas",
    description: "buah yang saya suka",
    warna: ["nanas", "cherry"],
    harga: 15000,
}

//  mengubah data object menjadi array sepasang key dan values
const val = Object.entries(fruit)
    // mengubah array menjadi hanya key saja
const hasil = Object.keys(fruit)
    // mengubah array menjadi hanya values
const value = Object.values(fruit)

console.log(fruit)
console.log(val)
console.log(hasil)
console.log(value)