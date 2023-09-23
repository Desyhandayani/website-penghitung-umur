function validasiForm() {
  //ini adalah untuk memanggil id inputUltah di js dari html
  // document.getElementById
  const inputUltah = document.getElementById("inputUltah");
  const inputUltahValue = inputUltah.value;

  //ini perhitungan untuk tahun sekarang secara realtime
  const tahunSekarang = new Date().getFullYear();

  //ini adalah perhitungan tahun sekarang dikurangi ulang tahun yang diinput oleh user
  const hasil = tahunSekarang - inputUltahValue;

  //  ini untuk memanggil id hasil di dalam <p> lalu menambahkan value dari <p> menggunakan inner.html = "value untuk <p>"
  //
  const hasilView = document.getElementById("hasil");

  //+ hasil dari pengurangan di atas
  hasilView.innerHTML = "Umur anda sekarang adalah: " + hasil + " tahun";

  //ini adalah penggunaan css di dlm js
  const peringatanView = document.getElementById("peringatan");
  peringatanView.innerHTML = "mohon isi tahun kelahiran anda";
  peringatanView.style = "color: red";

  //ini adalah logic ketika user menginput dengan nilai yang kosong

  if (inputUltahValue === "") {
    hasilView.style = "display: none;";
  } else {
    peringatanView.style = "display: none;";
  }

//   ini adalah logica untuk user ketika menginput setiap hasil umur anda sekarang adalah + dengan konten text tambahan (inner html +=) berupa golongan
  if (hasil <= 3 && hasil >= 1) {
    hasilView.innerHTML += " anda balita";
  } else if (hasil <= 11 && hasil >= 3) {
    hasilView.innerHTML += " anda anak-anak";
  } else if (hasil <= 21 && hasil >= 12) {
    hasilView.innerHTML += " anda remaja";
  } else if (hasil <= 59 && hasil >= 22) {
    hasilView.innerHTML += " anda dewasa";
  } else if (hasil <= 100 && hasil >= 60) { 
    hasilView.innerHTML += " anda lansia";
  } else {
    hasilView.innerHTML += " anda bayi";
  }

//   ini adalah sebuah logika ketika user menginput sebuah angka (inputUltahValue) lebih dari(>) tahun saat ini secara (realtime) dan mengubah content dari peringatan view menjadi tahun kelahiran tidak boleh melebihi tahun sekarang

  if (inputUltahValue > tahunSekarang) {
    hasilView.style = "display: none;";
    peringatanView.style = "display: block; color: red; width: 200px;";
    peringatanView.innerHTML =
      "tahun kelahiran anda tidak boleh melebihi tahun sekarang";
  }
}

//validasi onkeydown didlm input ketiks user meng enter lalu memnanggil logic yang ada di validasi form di dalam onclick <button> dengan value submit
function saatDienter(event) {
  if (event.key === "Enter") {
    validasiForm();
  }
}

//baris ini mengambil nilai dari input ultah.value di validasi menjadi user hanya memberikan value hanya 4 angka saja
function maksimumInput() {
  const inputUltah = document.getElementById("inputUltah");
  const inputUltahValue = inputUltah.value;

  inputUltah.value = inputUltahValue.slice(0, 4);
}
