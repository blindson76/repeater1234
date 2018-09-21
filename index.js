const req = require("request");

let options = {
    url: 'https://ogrenci.gazi.edu.tr/ogrenci/htmlNavigate.php?ReqID=DERS_KAYIT_EKR&myID=ed3bc00396ab8b013deb6e2eec810d03',
    headers: {
        'Host': 'ogrenci.gazi.edu.tr',
        'Cache-Control': 'max-age=0',
        'Origin': 'https://ogrenci.gazi.edu.tr',
        'Upgrade-Insecure-Requests': '1',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/69.0.3497.100 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
        'Referer': 'https://ogrenci.gazi.edu.tr/ogrenci/htmlNavigate.php?ReqID=DERS_KAYIT_EKR&myID=ed3bc00396ab8b013deb6e2eec810d03',
        'Accept-Language': 'en-US,en;q=0.9,tr;q=0.8',
        'Cookie': '_ga=GA1.3.624036529.1525297426; _gid=GA1.3.1521778215.1537517042',
    },
    form:{
    	'ReqID' : 'DERS_KAYIT',
		'myID' : 'ed3bc00396ab8b013deb6e2eec810d03',
		'myData2' : '',
		'txtFakulte' : '11',
		'txtBolum' : '80',
		'txtDersListesi[]' : 'CENG372=:=880016429'
    }
}
let doit=()=>{	
	req.post(options,function(err,res,body){
		if(body.indexOf("kontenjan")==2880){
			console.log("repeating...")
			setTimeout(doit, 1000*5);
		}else{
			console.log("OK")
		}
	})
}

doit()