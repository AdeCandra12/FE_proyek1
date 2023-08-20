import { get } from "https://bukulapak.github.io/api/process.js";
import { setInner } from "https://bukulapak.github.io/element/process.js";
let urlAPI = "https://pemrog3-ulbi.herokuapp.com/mahasiswa";
get(urlAPI,isiTableMahasiswa);
function isiTableMahasiswa(results){
    console.log(results);
    results.forEach(isiRow);
}
function isiRow(value){
    console.log(value)
}