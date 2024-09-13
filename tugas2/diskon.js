function diskon(harga, diskonPersen) {
   let hargadiskon = (harga * diskonPersen) / 100;
   let hargasetelahdiskon = harga - hargadiskon;
   return hargasetelahdiskon;
  }
  let harga= 100000;
  let diskonPersen = 10;
  let hargaAkhir = diskon(harga, diskonPersen);
  console.log ("Rp." , hargaAkhir);

 
  