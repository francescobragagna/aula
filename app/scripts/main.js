
var service='https://jsonplaceholder.typicode.com';

function getHttp() {
	var risorsa = $('#risorse').val();
	
	$.get(service+'/'+risorsa, function(risposta){
		console.log(risposta);
		
		var jsonString = JSON.stringify(risposta, null, 4)
		$('#rispo').text(jsonString);
	});

}





function loadUsers() {
	
	var funzioneGestioneRisposta = function(risposta){
		console.log(risposta);
//		var utente  = risposta[1];
		$('#utenti tbody').html("");
		
		//for (i=0; i< risposta.length; i++) {
		//	var utente = risposta[i];
		risposta.forEach(function(utente){
			
			var nome = utente.name;
			var username = utente.username;
			var città = utente.address.city;
			var riga = "<tr><td>"+nome+"</td> <td>"+username+"</td> <td>"+città+"</td>  </tr>";
			$('#utenti tbody').append(riga);
		}	
		)	
		
		//pippo;
	}
	
	$.get('https://jsonplaceholder.typicode.com/users', funzioneGestioneRisposta);

}
