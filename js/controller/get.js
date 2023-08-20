import { addInner } from "https://bukulapak.github.io/element/process.js";
import { getRandomColor, getRandomColorName } from "https://bukulapak.github.io/image/process.js";
import { isiTabel } from "../temp/table.js";
export function isiTabelNilai(results) {
    results.forEach(isiRow);
}
function isiRow(value) {
    let content = isiTabel
      .replace('#NAMAMHS#', value.npm_ms.nama_mhs ? value.npm_ms.nama_mhs : '#NAMAMHS#')
      .replace('#NPM#', value.npm_ms ? value.npm_ms.npm : '#NPM#')
      .replace('#JURUSAN#', value.npm_ms.jurusan ? value.npm_ms.jurusan : '#JURUSAN#')
      .replace('#EMAIL#', value.npm_ms.email ? value.npm_ms.email : '#EMAIL#')
      .replace('#NAMAMK#', value.presensi.nama_mk.nama_matkul ? value.presensi.nama_mk.nama_matkul : '#NAMAMK#')
      .replace('#SKS#', value.presensi.nama_mk.sks ? value.presensi.nama_mk.sks : '#SKS#')
      .replace('#DOSEN#', value.presensi.nama_mk.dosen_pengampu ? value.presensi.nama_mk.dosen_pengampu : '#DOSEN#')
      .replace('#EMAILDOSEN#', value.presensi.nama_mk.email ? value.presensi.nama_mk.email : '#EMAILDOSEN#')
      .replace('#TANGGAL#', value.presensi.tanggal ? value.presensi.tanggal : '#TANGGAL#')
      .replace('#CHECKIN#', value.presensi.checkin ? value.presensi.checkin : '#CHECKIN#')
      .replace('#NAKHIR#', value.nilai_akhir)
      .replace('#GRADE#', value.grade)
      .replace('#THAJARAN#', value.tahun_ajaran)
      .replace('#WARNA#', getRandomColor())
      .replace(/#WARNALOGO#/g, getRandomColorName());
    addInner("iniTabel", content);
}