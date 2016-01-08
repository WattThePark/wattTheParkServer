
//top score
$(function(){
	$.ajax({
			url: 'http://192.168.12.249/top/10',
            type: 'get',
            dataType: 'json', // JSON
            success: function(json,status) {
				if(json)
				{
					var res = JSON.parse(JSON.stringify(json));
					if(res[0].score) document.getElementById('score').innerHTML = res[0].score;
					if(res[0].name) document.getElementById('pseudo').innerHTML = res[0].name;
					if(res[0].feedback) document.getElementById('fb').innerHTML = res[0].feedback;
				}
            },
			error: function(json,status){
				alert(status);
			},
			
        });
	});

//top n score
//$('#b_topn').click(function(){
$(document).on("click", "#b_topn", function (ev){

	var n=document.getElementById('t_topn').value;
		console.log(n);
	$.ajax({
			url: 'http://192.168.12.249/top/'+n,
            type: 'get',
            dataType: 'json', // JSON
            success: function(json,status) {
				if(json)
				{
					var res = JSON.parse(JSON.stringify(json)), affich = document.getElementById('affich_topn');
	
					string = "<TABLE BORDER=\"1\">"
								+"<TR><TD> N° </TD>"
									+"<TD> Nom </TD>"
									+"<TD> Score </TD>"
									+"<TD> Feedback </TD>"
									+"<TD> Temps </TD>"
									+"<TD> Courant généré </TD></TR>";

					for(var i=0, len= res.length; i<len;i++)
					{
						string+= "<TR><TD> "+ i + " </TD>"
									+"<TD> "+ ((res[i].nameUser==null || res[i].nameUser == "")? "anonyme":res[i].nameUser)+     " </TD>"
									+"<TD> "+ ((res[i].score==null || res[i].score == "")? "0":res[i].score)+     " </TD>"
									+"<TD> "+ ((res[i].feedback==null || res[i].feedback == "")? "----------":res[i].feedback)+     " </TD>"
									+"<TD> "+ ((res[i].time==null || res[i].time == "")? "0":res[i].time)+     " </TD>"
									+"<TD> "+ ((res[i].currentGenerated==null || res[i].currentGenerated == "")? "0":res[i].currentGenerated)+     " </TD>"

					}
					string +="</TABLE>";
					affich.innerHTML=string;
				}
            },
			error: function(json,status){
				alert(status);
			},
			
        });
	});
	
//insertion
//$('#b_send_in').click(function(){
$(document).on("click", "#b_send_in", function (ev){

	var idMachine = document.getElementById('t_id_in').value,
	time = document.getElementById('t_time_in').value,
	feedback = document.getElementById('t_fb_in').value,
	currentGenerated = document.getElementById('t_courant_in').value,
	score = document.getElementById('t_score_in').value,
	nameUser = document.getElementById('t_pseudo_in').value,
	dateEnd = document.getElementById('t_date_in').value,
	send = document.getElementById('b_send_in').value;
	aff = document.getElementById('t_aff_in');
	
	$.ajax({
		
			url: 'http://192.168.12.249/insert/result?',
			data: 'idMachine=' + idMachine + '&time=' + time + '&feedback=' + feedback + '&currentGenerated=' +
					currentGenerated + '&score=' + score + '&nameUser=' + nameUser +'&dateEnd=' + dateEnd,
            type: 'get',
            dataType: 'text', // JSON
            success: function(json,status) {
				//alert('Success'+status+' '+JSON.stringify(json));
			aff.innerHTML="données insérées";
            },
			error: function(json,status){
				//alert('Erreur: '+status);
			},
			
        });
	});



