import { postData } from 'https://bukulapak.github.io/api/process.js';
import { onClick, getValue } from 'https://bukulapak.github.io/element/process.js';
import { urlPOST, AmbilResponse } from '../config/url_post-nilai.js';

function pushDataNilai() {
//   if (getValue('nama_mhs') == '' || getValue('nama_matkul') == '' || getValue('nilai_akhir') == '' || getValue('grade') == '' || getValue('tahun_ajaran') == ''){
//     alert('data gaboleh kosong!!!')
//     return
//   }
  let data = {
      npm_ms: {
        nama_mhs: getValue("nama_mhs"),
        npm: getValue("npm"),
        jurusan: getValue("jurusan"),
        email: getValue("email"),
      },
    presensi: {
        nama_mk: {
            nama_matkul: getValue("nama_matkul"),
            sks: getValue("sks"),
            dosen_pengampu: getValue("dosen_pengampu"),
            email: getValue("email_dosen"),
        },
        tanggal: getValue("tanggal"),
        checkin: getValue("checkin"),
    },
    nilai_akhir: getValue("nilai_akhir"),
    grade: getValue("grade"),
    tahun_ajaran: getValue("tahun_ajaran"),
  };
  postData(urlPOST, data, AmbilResponse);
}

onClick("button", pushDataNilai);
