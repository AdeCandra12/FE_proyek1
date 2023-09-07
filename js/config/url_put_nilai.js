const urlParams = new URLSearchParams(window.location.search);
const nilaiId = urlParams.get('nilaiId');

export let urlPUT = "https://pemrog3-ulbi.herokuapp.com/updnilai/" + nilaiId;

export function AmbilResponse(result) {
  console.log(result); // menampilkan response API pada console
  alert(result.message);
  window.location.href = "index.html";
}