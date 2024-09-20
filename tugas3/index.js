const cars = [
    {
        no_plat: "DN 3456 ROW",
        nama: "avanza",
        brand: "daihatsu",
        warna: ["hijau", "kuning"],
        bahan_bakar: ["bensin"],
        maksimal_penumpang: 5
    },
    {
        no_plat : "B 383 KH",
        nama : "ioniq",
        brand : "hyundai",
        warna : ["putih", "biru"],
        bahan_bakar : ["listrik"],
        maksimal_penumpang : 5 
    },
    {
        no_plat : "A 53 EM",
        nama : "innova",
        brand : "toyota",
        warna : ["hitam","kuning","hijau"],
        bahan_bakar : ["solar"],
        maksimal_penumpang : 7
    },
    {
        no_plat : "B 15 PAK",
        nama : "pajero",
        brand : "mitsubishi",
        warna : ["abu-abu" , "putih"],
        bahan_bakar : ["dexlite"],
        maksimal_penumpang : 7
    },
    {
        no_plat : "L 444 PAR",
        nama : "corolla cross",
        brand : "toyota",
        warna : ["putih" , "hijau"],
        bahan_bakar : ["hybrid"],
        maksimal_penumpang : 5
    }
];

const listElement = document.getElementById('mobil-list');

cars.forEach(m => {
    const warnaOutput = m.warna.length === 2 ? m.warna.join(" dan ") : m.warna.join(", ");
    const bahanBakarOutput = m.bahan_bakar.length === 2 ? m.bahan_bakar.join(" dan ") : m.bahan_bakar.join(", ");
    
    listElement.innerHTML += `
        <li>
            <b>No Plat:</b> ${m.no_plat} <br>
            <b>Nama:</b> ${m.nama} <br>
            <b>Brand:</b> ${m.brand} <br>
            <b>Warna:</b> ${warnaOutput} <br>
            <b>Bahan Bakar:</b> ${bahanBakarOutput} <br>
            <b>Maksimal Penumpang:</b> ${m.maksimal_penumpang} <br>
            <hr>
        </li>
    `;
});