// import { addInner } from "https://bukulapak.github.io/element/process.js";
// import { getRandomColor, getRandomColorName } from "https://bukulapak.github.io/image/process.js";
// import { isiTabel } from "../temp/table.js";
// export function isiTabelNilai(results) {
//     results.forEach(isiRow);
// }
// function isiRow(value) {
//     let content = isiTabel
//       .replace('#NAMAMHS#', value.npm_ms.nama_mhs ? value.npm_ms.nama_mhs : '#NAMAMHS#')
//       .replace('#NPM#', value.npm_ms ? value.npm_ms.npm : '#NPM#')
//       .replace('#JURUSAN#', value.npm_ms.jurusan ? value.npm_ms.jurusan : '#JURUSAN#')
//       .replace('#EMAIL#', value.npm_ms.email ? value.npm_ms.email : '#EMAIL#')
//       .replace('#NAMAMK#', value.presensi.nama_mk ? value.presensi.nama_mk.nama_matkul : '#NAMAMK#')
//       .replace('#SKS#', value.presensi.nama_mk ? value.presensi.nama_mk.sks : '#SKS#')
//       .replace('#DOSEN#', value.presensi.nama_mk ? value.presensi.nama_mk.dosen_pengampu : '#DOSEN#')
//       .replace('#EMAILDOSEN#', value.presensi.nama_mk ? value.presensi.nama_mk.email : '#EMAILDOSEN#')
//       .replace('#NAKHIR#', value.nilai_akhir)
//       .replace('#GRADE#', value.grade)
//       .replace('#THAJARAN#', value.tahun_ajaran)
//       .replace('#WARNA#', getRandomColor())
//       .replace(/#WARNALOGO#/g, getRandomColorName());
//     addInner('iniTabel', content);
// }
import { addInner } from "https://bukulapak.github.io/element/process.js";
import { getRandomColor, getRandomColorName } from "https://bukulapak.github.io/image/process.js";
import { isiTabel } from "../temp/table.js";
export function isiTabelNilai(results) {
    results.forEach(isiRow);
}
function isiRow(value) {
    let content =
        isiTabel.replace("#NAMAMHS#", value.npm_ms.nama_mhs)
            .replace("#NPM#", value.npm_ms.npm)
            .replace("#JURUSAN#", value.npm_ms.jurusan)
            .replace("#EMAIL#", value.npm_ms.email)
            .replace("#NAMAMK#", value.presensi.nama_mk.nama_matkul)
            .replace("#SKS#", value.presensi.nama_mk.sks)
            .replace("#DOSEN#", value.presensi.nama_mk.dosen_pengampu)
            .replace("#EMAILDOSEN#", value.presensi.nama_mk.email)
            .replace("#TANGGAL#", value.presensi.nama_mk.tanggal)
            .replace("#CHECKIN#", value.presensi.nama_mk.checkin)
            .replace("#NAKHIR#", value.presensi.nama_mk.sks)
            .replace("#GRADE#", value.presensi.grade)
            .replace("#THAJARAN#", value.presensi.tahun_ajaran)
            .replace("#WARNA#", getRandomColor())
            .replace(/#WARNALOGO#/g, getRandomColorName());
    addInner("iniTabel", content);
}
