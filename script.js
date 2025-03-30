const nisabElement = document.getElementById('nisab');
const negeriSelect = document.querySelector('.select-negeri');

const nisabData = {
    johor: 35129.78,
    melaka: 29740.77,
    pahang: 29740.77,
    "negeri sembilan": 26844.82,
    selangor: 29961,
    perak: 35129.78,
    terengganu: 29376.08,
    kelantan: 29376.00,
    "pulau pinang": 31000,
    kedah: 32010.16,
    perlis: 35129.78,
    sabah: 29000,
    sarawak: 36060.02,
    "wilayah persekutuan": 29740.00
};

negeriSelect.addEventListener('change', () => {
    const selectedNegeri = negeriSelect.value;
    nisabElement.textContent = nisabData[selectedNegeri];
});

//zakat pendapatan
const pendapatanIn = document.getElementById("pendapatan-in");
const pendapatanLainIn = document.getElementById("pendapatan-lain-in");
const zakatPendapatanAkhir = document.getElementById("zakat-pendapatan-akhir");

function getSelectedNisab() {
    const selectedNegeri = negeriSelect.value;
    return nisabData[selectedNegeri] || 0;
}

function calculateZakatPendapatan() {
    const pendapatan = parseFloat(pendapatanIn.value) || 0;
    const pendapatanLain = parseFloat(pendapatanLainIn.value) || 0;
    const totalPendapatan = pendapatan + pendapatanLain;
    
    const nisab = getSelectedNisab();
    const zakat = totalPendapatan >= nisab ? (totalPendapatan * 0.025) : 0;
    zakatPendapatanAkhir.textContent = zakat.toFixed(2);
}

negeriSelect.addEventListener('change', calculateZakatPendapatan);
pendapatanIn.addEventListener("input", calculateZakatPendapatan);
pendapatanLainIn.addEventListener("input", calculateZakatPendapatan);

pendapatanIn.addEventListener("input", calculateZakatPendapatan);
pendapatanLainIn.addEventListener("input", calculateZakatPendapatan);

//zakat saham
const unitIn = document.getElementById("unit-in");
const hargaSahamSemasaIn = document.getElementById("harga-saham-semasa-in");
const dividenIn = document.getElementById("dividen-in");
const zakatSahamAkhir = document.getElementById("zakat-saham-akhir");

function calculateZakatSaham() {
    const unit = parseFloat(unitIn.value) || 0;
    const hargaSahamSemasa = parseFloat(hargaSahamSemasaIn.value) || 0;
    const dividen = parseFloat(dividenIn.value) || 0;
    const totalValue = (unit * hargaSahamSemasa) + dividen;
    const nisab = getSelectedNisab();
    const zakat = totalValue >= nisab ? (totalValue * 0.025) : 0;
    zakatSahamAkhir.textContent = zakat.toFixed(2);
}

negeriSelect.addEventListener('change', calculateZakatSaham);
unitIn.addEventListener("input", calculateZakatSaham);
hargaSahamSemasaIn.addEventListener("input", calculateZakatSaham);
dividenIn.addEventListener("input", calculateZakatSaham);

//zakat emas
const beratIn = document.getElementById("berat-in");
const hargaEmasSemasaIn = document.getElementById("harga-emas-semasa-in");
const zakatEmasAkhir = document.getElementById("zakat-emas-akhir");

function calculateZakatEmas() {
    const berat = parseFloat(beratIn.value) || 0;
    const hargaEmasSemasa = parseFloat(hargaEmasSemasaIn.value) || 0;
    const totalValue = berat * hargaEmasSemasa;
    const nisab = getSelectedNisab();
    const zakat = berat >= 85 ? (totalValue * 0.025) : 0;
    zakatEmasAkhir.textContent = zakat.toFixed(2);
}

negeriSelect.addEventListener('change', calculateZakatEmas);
beratIn.addEventListener("input", calculateZakatEmas);
hargaEmasSemasaIn.addEventListener("input", calculateZakatEmas);

//zakat perak
const beratPerakIn = document.getElementById("berat-perak-in");
const hargaPerakSemasaIn = document.getElementById("harga-perak-semasa-in");
const zakatPerakAkhir = document.getElementById("zakat-perak-akhir");

function calculateZakatPerak() {
    let beratPerak = parseFloat(beratPerakIn.value) || 0;
    if (beratPerak < 595) {
        zakatPerakAkhir.textContent = "0.00";
        return;
    }

    const hargaPerakSemasa = parseFloat(hargaPerakSemasaIn.value) || 0;
    const totalValue = beratPerak * hargaPerakSemasa;
    const zakat = beratPerak >= 595 ? (totalValue * 0.025) : 0;
    zakatPerakAkhir.textContent = zakat.toFixed(2);
}

negeriSelect.addEventListener('change', calculateZakatPerak);
beratPerakIn.addEventListener("input", calculateZakatPerak);
hargaPerakSemasaIn.addEventListener("input", calculateZakatPerak);

//zakat kwsp
const kwspType = document.getElementById("kwsp-type");
const kwspExclude = document.getElementById("kwsp-exclude");

kwspType.addEventListener("change", () => {
    if (kwspType.value === "0") {
        kwspExclude.style.display = "block";
    } else if (kwspType.value === "1") {
        kwspExclude.style.display = "none";
    }
});

const kwspIn = document.getElementById("kwsp-in");
const zakatKwspAkhir = document.getElementById("zakat-kwsp-akhir");

function calculateZakatKwsp() {
    const kwsp = parseFloat(kwspIn.value) || 0;
    const nisab = getSelectedNisab();
    const zakat = kwsp >= nisab && kwspType.value === "1" ? (kwsp * 0.025) : 0;
    zakatKwspAkhir.textContent = zakat.toFixed(2) ;
}

negeriSelect.addEventListener('change', calculateZakatKwsp);
kwspIn.addEventListener("input", calculateZakatKwsp);
kwspType.addEventListener("change", calculateZakatKwsp);

//zakat simpanan
const jumlahSimpananIn = document.getElementById("jumlah-simpanan-in");
const zakatSimpananAkhir = document.getElementById("zakat-simpanan-akhir");

function calculateZakatSimpanan() {
    const jumlahSimpanan = parseFloat(jumlahSimpananIn.value) || 0;
    const nisab = getSelectedNisab();
    const zakat = jumlahSimpanan >= nisab ? (jumlahSimpanan * 0.025) : 0;
    zakatSimpananAkhir.textContent = zakat.toFixed(2);
}

negeriSelect.addEventListener('change', calculateZakatSimpanan);
jumlahSimpananIn.addEventListener("input", calculateZakatSimpanan);

//zakat perniagaan
const hasilJualanIn = document.getElementById("hasil-jualan-in");
const tolakBelanjaIn = document.getElementById("tolak-belanja-in");
const zakatPerniagaanAkhir = document.getElementById("zakat-perniagaan-akhir");

function calculateZakatPerniagaan() {
    const hasilJualan = parseFloat(hasilJualanIn.value) || 0;
    const tolakBelanja = parseFloat(tolakBelanjaIn.value) || 0;
    const totalValue = hasilJualan - tolakBelanja;
    const nisab = getSelectedNisab();
    const zakat = totalValue >= nisab ? (totalValue * 0.025) : 0;
    zakatPerniagaanAkhir.textContent = zakat.toFixed(2);
}

negeriSelect.addEventListener('change', calculateZakatPerniagaan);
hasilJualanIn.addEventListener("input", calculateZakatPerniagaan);
tolakBelanjaIn.addEventListener("input", calculateZakatPerniagaan);
