// Learning Competencies

// Mampu memecahkan sebuah masalah dengan nested loop Mengerti logika nested loop Dapat melihat pola dari posisi baris dan kolom sebuah pola yang diberikan Mampu membuat array multidimensi dari sebuah string yang diberikan
// RESTRICTIONs
// Hanya boleh menggunakan built-in function .push()

// Directions
// Diberikan sebuah function ladder berisi satu parameter bertipe string. Dari itu, buatlah program yang menghasilkan gambar yang menyerupai tangga dengan pola sebagai berikut:

// kata yang paling atas adalah kata itu sendiri dengan catatan masing-masing huruf berada di indeks berbeda di satu array setiap turun, huruf akan berkurang 1 dari belakang (dari value kata awal)


let word = "developer"

function ladder(word) {
    let array2 = []
    for (let i = 0; i < word.length; i++) {
        let array1 = []
        for (let j = 0; j < word.length - i; j++) {
            array1.push(word[j])
        }
        array2.push(array1)
        
    }
    return  array2
}
console.log(ladder(word))



