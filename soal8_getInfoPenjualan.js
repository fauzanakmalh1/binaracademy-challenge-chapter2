const dataPenjualanNovel = [
  {
    idProduct: "BOOK002421",
    namaProduk: "Pulang - Pergi",
    penulis: "Tere Liye",
    hargaBeli: 60000,
    hargaJual: 86000,
    totalTerjual: 150,
    sisaStok: 17,
  },
  {
    idProduct: "BOOK002351",
    namaProduk: "Selamat Tinggal",
    penulis: "Tere Liye",
    hargaBeli: 75000,
    hargaJual: 103000,
    totalTerjual: 171,
    sisaStok: 20,
  },
  {
    idProduct: "BOOK002941",
    namaProduk: "Garis Waktu",
    penulis: "Fiersa Besari",
    hargaBeli: 67000,
    hargaJual: 99000,
    totalTerjual: 213,
    sisaStok: 5,
  },
  {
    idProduct: "BOOK002941",
    namaProduk: "Laskar Pelangi",
    penulis: "Andrea Hirata",
    hargaBeli: 55000,
    hargaJual: 68000,
    totalTerjual: 20,
    sisaStok: 56,
  },
];

const convertToRupiah = (angka) => {
  const format = angka.toString().split("").reverse().join("");
  const convert = format.match(/\d{1,3}/g);
  return "Rp. " + convert.join(".").split("").reverse().join("");
};

const getInfoPenjualan = (dataPenjualan) => {
  if (dataPenjualan == null) {
    return `Error: Bro where is the parameter?`;
  } else if (typeof dataPenjualan == "object") {
    totalKeuntungan = dataPenjualan
      .map((item) => item.hargaJual * item.totalTerjual)
      .reduce((prev, curr) => prev + curr, 0);
    totalModal = dataPenjualan
      .map((item) => item.hargaBeli * (item.totalTerjual + item.sisaStok))
      .reduce((prev, curr) => prev + curr, 0);
    persentaseKeuntungan = Math.round((totalModal / totalKeuntungan) * 100);

    let terbanyakDijual = dataPenjualan.reduce((prev, curr) =>
      prev.totalTerjual > curr.totalTerjual ? prev : curr
    );
    return {
      totalKeuntungan: convertToRupiah(totalKeuntungan),
      totalModal: convertToRupiah(totalModal),
      persentaseKeuntungan: `${persentaseKeuntungan}%`,
      produkBukuTerlaris: terbanyakDijual.namaProduk,
      penulisTerlaris: terbanyakDijual.penulis,
    };
  } else {
    return `Error: Data penjualan must array of object`;
  }
};

console.log(getInfoPenjualan(dataPenjualanNovel));
