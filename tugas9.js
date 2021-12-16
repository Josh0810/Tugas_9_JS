function covidDiKotaBandung() {
var Kasus = {
    // 10 KECAMATAN KONFIRMASI AKTIF TERTINGGI
    Kecamatan: {
        Andir: 14,
        Coblong: 13,
        Sukajadi: 8,
        KiaraCondong: 6,
        Cibiru: 4,
        Antapani: 4,
        Sukasari: 2,
        UjungBerung: 2,
        SumurBandung: 1,
        Mandalajati: 1
    },
    // Konfirmasi
    Aktif: 64,
    Sembuh: 42010,
    Meninggal: 1423,
    TotalKasus: 43497
}
for (var data in Kasus) {
    console.log(Kasus[data])
}
}
covidDiKotaBandung()