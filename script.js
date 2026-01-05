function login() {
    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;
    let error = document.getElementById("loginError");

    if (user === "admin" && pass === "123") {
        window.location.href = "beranda.html";
    } else {
        error.innerText = "Username atau password salah!";
    }
    return false;
}

function tambahTransaksi() {
    let nama = document.getElementById("nama").value;
    let jumlah = document.getElementById("jumlah").value;
    let kategori = document.getElementById("kategori").value;
    let tanggal = document.getElementById("tanggal").value;

    if (!nama || !jumlah || !kategori || !tanggal) {
        document.getElementById("error").innerText = "Semua field wajib diisi!";
        return false;
    }

    let tabel = document.getElementById("tabelTransaksi");
    tabel.innerHTML += `
        <tr>
            <td>${nama}</td>
            <td>${jumlah}</td>
            <td>${kategori}</td>
            <td>${tanggal}</td>
        </tr>
    `;
    return false;
}
// DAFTAR HARGA PRODUK
const hargaProduk = {
    Handphone: 3500000,
    Laptop: 8500000,
    Headphone: 750000,
    Monitor: 2300000
};

// Isi harga otomatis saat barang dipilih
function isiHarga() {
    let nama = document.getElementById("nama").value;
    document.getElementById("harga").value = hargaProduk[nama] || 0;
    hitungTotal();
}

// Hitung total otomatis
function hitungTotal() {
    let harga = document.getElementById("harga").value;
    let jumlah = document.getElementById("jumlah").value;
    document.getElementById("total").value = harga * jumlah;
}

// Simpan transaksi
function tambahTransaksi() {
    let nama = document.getElementById("nama").value;
    let jumlah = document.getElementById("jumlah").value;
    let harga = document.getElementById("harga").value;
    let total = document.getElementById("total").value;
    let tanggal = document.getElementById("tanggal").value;
    let error = document.getElementById("error");

    if (!nama || !jumlah || !tanggal) {
        error.innerText = "Semua field wajib diisi!";
        return false;
    }

    let tabel = document.getElementById("tabelTransaksi");
    tabel.innerHTML += `
        <tr>
            <td>${nama}</td>
            <td>${jumlah}</td>
            <td>Rp ${parseInt(harga).toLocaleString()}</td>
            <td>Rp ${parseInt(total).toLocaleString()}</td>
            <td>${tanggal}</td>
        </tr>
    `;

    return false;
}

