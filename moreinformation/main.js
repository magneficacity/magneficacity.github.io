const data = [
	'Announcement'
	
];


//selector
const btnSearch 	= document.getElementById('btnSearch');
const btnClear 		= document.getElementById('btnClear');
const search 		= document.getElementsByName('search')[0];
const data_section 	= document.getElementsByClassName('data')[0];

// Membuat event untuk handle tombol search ketika diklik
btnSearch.addEventListener('click', event => {
	searchData();
});

// Membuat event untuk handle tombol clear input diklik
btnClear.addEventListener('click', event => {
	search.value = "";
});

// Membuat event ketika menekan enter pada inputan search
search.addEventListener('keyup', event => {
	if (event.keyCode === 13) {
		searchData();
	}
});

// fungsi untuk melakukan pencarian data
function searchData() {
	const search_value 	= search.value.toLowerCase();

	// Copy array data ke variable data_filtered
	const data_filtered = data.slice(0);

	// Lakukan perulangan pada semua data untuk cek apakah ada yang mengandung "keyword" atau tidak
	data_section.innerHTML = "";
	for (var i = 0; i < data_filtered.length; i++) {
		if ( data_filtered[i].toLowerCase().includes(search_value) ) {			
			// Jika ada, Masukkan data ke list data pencarian yang didapat
			data_section.innerHTML += "<a href='#'>"+data_filtered[i]+"</a>";
		}
	}	
}