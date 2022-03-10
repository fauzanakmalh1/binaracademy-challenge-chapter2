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
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(angka);
};

const getInfoPenjualan = (dataPenjualan) => {
  if (dataPenjualan == null) return `Error: Bro where is the parameter?`;
  if (typeof dataPenjualan == "object") {
    totalKeuntungan = dataPenjualan
      .map((item) => (item.hargaJual - item.hargaBeli) * item.totalTerjual)
      .reduce((prev, curr) => prev + curr, 0);
    totalModal = dataPenjualan.reduce(
      (prev, curr) =>
        prev + curr.hargaBeli * (curr.totalTerjual + curr.sisaStok),
      0
    );
    persentaseKeuntungan = Math.round((totalKeuntungan / totalModal) * 100);

    const bukuTerbanyakDijual = dataPenjualan.reduce((prev, curr) =>
      prev.totalTerjual > curr.totalTerjual ? prev : curr
    );

    const penulisTerbanyak = Array.from(
      dataPenjualan.reduce(
        (newObject, { penulis, totalTerjual }) =>
          newObject.set(penulis, (newObject.get(penulis) || 0) + totalTerjual),
        new Map()
      ),
      ([penulis, totalTerjual]) => ({ penulis, totalTerjual })
    ).reduce((prev, curr) =>
      prev.totalTerjual > curr.totalTerjual ? prev : curr
    );

    return {
      totalKeuntungan: convertToRupiah(totalKeuntungan),
      totalModal: convertToRupiah(totalModal),
      persentaseKeuntungan: `${persentaseKeuntungan}%`,
      produkBukuTerlaris: bukuTerbanyakDijual.namaProduk,
      penulisTerlaris: penulisTerbanyak.penulis,
    };
  }
  return `Error: Data penjualan must array of object`;
};

console.log(getInfoPenjualan(dataPenjualanNovel));
