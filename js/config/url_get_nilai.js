//mendapatkan parameter dari url

const urlParams = new URLSearchParams(window.location.search);
const nilaiId = urlParams.get('nilaiId');

export let urlFetch = 'https://pemrog3-ulbi.herokuapp.com/nilai/' + nilaiId;