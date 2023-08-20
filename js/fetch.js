import { get } from "https://bukulapak.github.io/api/process.js"; 
let urlAPI = "https://pemrog3-ulbi.herokuapp.com/mahasiswa";
get(urlAPI,isiTableMahasiswa);
function isiTableMahasiswa(results){
    console.log(results);
}