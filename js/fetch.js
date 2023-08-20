import { get } from "https://bukulapak.github.io/api/process.js";
import { setInner } from "https://bukulapak.github.io/element/process.js";
let urlAPI = "https://pemrog3-ulbi.herokuapp.com/all-nilai";
get(urlAPI,isiTableNilai);
function isiTableNilai(results){
    console.log(results);
    results.forEach(isiRow);
}
function isiRow(value){
    console.log(value)
}