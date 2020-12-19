async function getData() {
    let url = 'http://localhost/pinjol/nasabah';
    try {
        let res = await fetch(url);
        return await res.json();
    } catch (error) {
        console.log(error);
    }
}

async function renderData() {
    let json = await getData();
    let html = '';

    console.log(json);
    json.data.forEach(data => {
        let htmlSegment = `
            <div class="card mr-4 mb-4 bg-dark" style="width: 18rem; " >
                <div class="card-body">
                    <h5 class="card-title text-white">${data.nama_depan}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">ID : ${data.id}</h6>
                    <br>
                    <button class="card-link btn btn-info" id="set-detail" data-target="#modal-detail" data-toggle="modal" data-namadepan="${data.nama_depan}" data-id="${data.id}" data-alamat="${data.alamat}" data-pekerjaan="${data.pekerjaan}" data-namabelakang="${data.nama_belakang}">Detail</button>
                </div>
            </div>
                        `;

        html += htmlSegment;
    });

    let container = document.querySelector('#tampil');
    container.innerHTML = html;
}

renderData();

$(document).ready(function () {
    $(document).on('click', '#set-detail',function () {
        var nama_depan = $(this).data('namadepan');
        var nama_belakang = $(this).data('namabelakang');
        var id = $(this).data('id');
        var alamat = $(this).data('alamat');
        var pekerjaan = $(this).data('pekerjaan');

        $('#modal-namadepan').html(nama_depan);     
        $('#modal-nama').html(nama_depan); 
        $('#modal-namabelakang').html(nama_belakang);     
        $('#modal-id').html(id);     
        $('#modal-alamat').html(alamat);     
        $('#modal-pekerjaan').html(pekerjaan);     
    });
});

