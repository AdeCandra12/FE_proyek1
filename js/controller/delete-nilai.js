function deleteDataNilai(IDHAPUS) {
    var nilaiId = IDHAPUS;
    var target_url = "https://pemrog3-ulbi.herokuapp.com/delete-nilai/" + nilaiId;

    var requestOptions = {
        method: 'DELETE',
        redirect: 'follow'
    };

    fetch(target_url, requestOptions)
        .then(response => response.json())
        .then(result => {
            alert(result.message);
            location.reload();
        })
        .catch(error => console.log('Error:', error));
}