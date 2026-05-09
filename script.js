let totalPendaftar = 0;
let totalLulus = 0;
let totalTidakLulus = 0;

// Array menyimpan semua data
let dataPendaftar = [];

// ===============================
// TEMPAT TES OTOMATIS
// ===============================
function cekTempatTes(){

    let kode = document.getElementById("kode").value.toUpperCase();
    let tempatTes = "";

    let awalKode = kode.charAt(0);

    if(awalKode == "A"){

        tempatTes = "Gedung A";

    }
    else if(awalKode == "B"){

        tempatTes = "Gedung B";

    }
    else if(awalKode == "V"){

        tempatTes = "Viktor";

    }
    else{

        tempatTes = "Kode Tidak Valid";

    }

    document.getElementById("tempat").value = tempatTes;

}

// ===============================
// SUBMIT FORM
// ===============================
document.getElementById("formPendaftaran")
.addEventListener("submit", function(e){

    e.preventDefault();

    // Ambil data input
    let kode = document.getElementById("kode").value;
    let nama = document.getElementById("nama").value;
    let ttl = document.getElementById("ttl").value;
    let ortu = document.getElementById("ortu").value;
    let tempat = document.getElementById("tempat").value;

    let mat = parseFloat(document.getElementById("mat").value);
    let ing = parseFloat(document.getElementById("ing").value);
    let umum = parseFloat(document.getElementById("umum").value);

    let jk = document.querySelector('input[name="jk"]:checked');

    // Validasi
    if(kode === "" || nama === ""){

        alert("Data masih kosong!");
        return;

    }

    if(jk == null){

        alert("Pilih jenis kelamin!");
        return;

    }

    // ===============================
    // HITUNG RATA-RATA
    // ===============================
    let rata = (mat + ing + umum) / 3;

    let ket = "";
    let kelas = "";

    // Penentuan hasil
    if(rata >= 70){

        ket = "LULUS";
        kelas = "lulus";

        totalLulus++;

    }
    else if(rata >= 60){

        ket = "CADANGAN";
        kelas = "cadangan";

    }
    else{

        ket = "TIDAK LULUS";
        kelas = "gagal";

        totalTidakLulus++;

    }

    // Tambah total pendaftar
    totalPendaftar++;

    // ===============================
    // SIMPAN KE ARRAY
    // ===============================
    dataPendaftar.push({

        kode,
        nama,
        jk: jk.value,
        ttl,
        ortu,
        tempat,
        mat,
        ing,
        umum,
        rata,
        ket,
        kelas

    });

    // ===============================
    // MEMBUAT ISI TABEL
    // ===============================
    let isiTabel = "";

    dataPendaftar.forEach((data, index) => {

        isiTabel += `

        <tr>

            <td>${index + 1}</td>
            <td>${data.kode}</td>
            <td>${data.nama}</td>
            <td>${data.jk}</td>
            <td>${data.ttl}</td>
            <td>${data.ortu}</td>
            <td>${data.tempat}</td>
            <td>${data.mat}</td>
            <td>${data.ing}</td>
            <td>${data.umum}</td>
            <td>${data.rata.toFixed(2)}</td>

            <td class="${data.kelas}">
                ${data.ket}
            </td>

        </tr>

        `;

    });

    // ===============================
    // TAMPILKAN HASIL
    // ===============================
    document.getElementById("hasil").innerHTML = `

    <div class="hasil">

        <h2>Data Hasil Pendaftaran Mahasiswa</h2>

        <table class="tabel-hasil">

            <thead>

                <tr>

                    <th>No</th>
                    <th>Kode</th>
                    <th>Nama</th>
                    <th>JK</th>
                    <th>Tgl Lahir</th>
                    <th>Pekerjaan Ortu</th>
                    <th>Tempat Tes</th>
                    <th>MAT</th>
                    <th>ING</th>
                    <th>UMUM</th>
                    <th>Rata-rata</th>
                    <th>Keterangan</th>

                </tr>

            </thead>

            <tbody>

                ${isiTabel}

            </tbody>

        </table>

        <!-- Statistik -->
        <div class="statistik">

            <h2>Statistik Pendaftaran</h2>

            <table class="tabel-statistik">

                <tr>

                    <th>Jumlah Pendaftar</th>
                    <th>Jumlah Peserta Lulus</th>
                    <th>Jumlah Peserta Tidak Lulus</th>

                </tr>

                <tr>

                    <td>${totalPendaftar}</td>
                    <td>${totalLulus}</td>
                    <td>${totalTidakLulus}</td>

                </tr>

            </table>

        </div>

    </div>

    `;

    // Reset form
    document.getElementById("formPendaftaran").reset();

    // Kosongkan tempat tes
    document.getElementById("tempat").value = "";

    // Alert
    alert("Data berhasil disimpan!");

});