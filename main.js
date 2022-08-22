console.info("Hello world!");

const isiBukuTamu = () => {
    let tbody = document.getElementById("tbody");

    let namaLengkap = prompt("Masukkan Nama Lengkap :");
    let alamat = prompt("Masukkan Alamat :");
    let keterangan = prompt("Masukkan Keterangan :");

    console.log(namaLengkap, alamat, keterangan);

    let totalData = tbody.childElementCount;

    tbody.innerHTML += `
    <tr>
        <td>${totalData + 1}</td>
        <td>${namaLengkap}</td>
        <td>${alamat}</td>
        <td style="text-align: center">${keterangan}</td>
    </tr>
`;
};