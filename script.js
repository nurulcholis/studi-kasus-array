var penumpang = ['Shandika',undefined,'Galih'];

var tambahPenumpang = function(namaPenumpang,penumpang){
	//	jika angkot kosong
	if(penumpang.length == 0){
		//	tambah penumpang
		penumpang.push(namaPenumpang);
		//	kembalikan isi array & keluar dr function
		return penumpang;
	//	else
	}else{
		//	telusuri seluruh kursi dari awal
		for(var i = 0; i < penumpang.length; i++){
			//	jika ada kursi kosong
			if(penumpang[i] == undefined){
				//	tambah penumpang di kursi kosong tersebut
				penumpang[i] = namaPenumpang;
				//	kembalikan isi array & keluar dari function
				return penumpang;
			//	jika sudah ada nama yg sama
			}else if(penumpang[i] == namaPenumpang){
				//	tampilkan pesan kesalahan
				console.log(namaPenumpang + ' sudah ada');
			    //	kembalikan nilai array & keluar dari function
			    return penumpang;
			//	jika seluruh kursi terisi penuh
			}else if(i == (penumpang.length-1)){
				//	tambah penumpang di akhir array
				penumpang.push(namaPenumpang);
				//	kembalikan isi array & keluar dari function
				return penumpang;
			}
		}
	}
}

var hapusPenumpang = function(namaPenumpang, penumpang){
	// jika angkot kosong 
	if(penumpang.length == 0){
		// tampilkan pesan bahwa angkot kosong
		console.log('Angkot kosong, tidak ada penumpang');
		//	kembalikan isi array & keluar dari function
		return penumpang;
	}
	//	else
	else {
		//	telusuri seluruh kursi dari awal
		for(var i = 0; i < penumpang.length; i++){
			// jika ada nama penumpang yg namanya sesuai,
			if(penumpang[i] == namaPenumpang){
				//	hapus penumpang dengan mengubah namanya
				penumpang[i] = undefined;
				//  menjadi undefined
				return penumpang;
				//  kembalikan isi array & keluar dari function
			//  jika tidak ada nama yg sesuai
			}else if(i == penumpang.length-1){
				//  tampilkan pesan kesalahannya
				console.log(namaPenumpang + ' tidak ada');
				//  kembalikan isi array & keluar dr function
				return penumpang;
			}
		}
	}
	
}
















