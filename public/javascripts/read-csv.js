function handleFiles(files) {
      // Check for the various File API support.
      if (window.FileReader) {
          // FileReader are supported.
          getAsText(files[0]);
      } else {
          alert('FileReader are not supported in this browser.');
      }
    }

function getAsText(fileToRead) {
      var reader = new FileReader();
      // Read file into memory as UTF-8      
      reader.readAsText(fileToRead);
      // Handle errors load
      reader.onload = loadHandler;
      reader.onerror = errorHandler;
    }

function loadHandler(event) {
      var csv = event.target.result;
      processData(csv);
    }
// **********************************************************READING CSV AND CONVERTING IT TO JSON****************************************************************


function processData(csv){

       var lines=csv.split(/\r\n|\n/);
        // removed var to make it global
        result = [];
   
       var headers=lines[0].split(",");

       for(var i=1;i<lines.length;i++){

	     var obj = {};
	      var currentline=lines[i].split(",");

	       for(var j=0;j<headers.length;j++){
		     obj[headers[j]] = currentline[j];
		   }
		   
		   result.push(obj);
		   
		   
	    }

	   console.log(result[6223]);
}

    function errorHandler(evt) {
      if(evt.target.error.name == "NotReadableError") {
          alert("Canno't read file !");
      }
    }
	
	//***********************************************************WRITING TO THE DATABASE*******************************************************
	
	$(function(){  //document ready function

   // jQuery methods go here...
   $("button").click(function()  
	
	    { 
	         for (var j=0; j<result.length; j++){
		
		
			   var School_records = {  Centre_no: result[j].centre_no,
				                          name:     result[j].name,
										  
									};
			    $.ajax({
				 type: 'POST',	
                 url: '/banks/v1/createSchool',
                 data: School_records,
                 success: function(records){
					 alert(records);
					},
				 error: function(){
					
					alert('Error saving 2014 records');
				}	
				});				
									 
		     
			if (result[j].wrote_2014!==""){
				 
				 var twentyfourteen_records = {  
									   Centre_no: result[j].centre_no,
				                       wrote_2014: result[j].wrote_2014,
				                       passed:     result[j].passed_2014,
									   
									};
			  $.ajax({
				type: 'POST',  
                url: '/banks/v/twentyfourteen',
                
                data: twentyfourteen_records,
                success: function(record){
					 alert(record);
					},
				error: function(){
					
					alert('Error saving 2014 records');
				}	
				});				
									 
			}
			if(result[j].wrote_2015!==""){
				
				var twentyfifteen_records = {   Centre_no: result[j].centre_no,
									   wrote_2015: result[j].wrote_2015,
				                       passed:     result[j].passed_2015,
									};
			  $.ajax({
				type: 'POST',  
                url: '/banks/v/twentyfifteen',
                
                data: twentyfifteen_records,
                success: function(record){
					                       alert(record);
					                     },
				error: function(){
					
					              alert('Error saving 2015 records');
				                 }	
				});			
				
				
			}
			if(result[j].wrote_2016!==""){
				
				var twentysixteen_records = {   Centre_no: result[j].centre_no,
									            wrote_2016: result[j].wrote_2016,
				                                passed:     result[j].passed_2016,
									};
			  $.ajax({
				type: 'POST',  
                url: '/banks/v/twentysixteen',
                
                data: twentysixteen_records,
                success: function(record){
					                      alert(record);
					                     },
				error: function(){
					               alert('Error saving 2016 records');
				                 }	
				});			
				
				
			}
			
			
		        
				
		}
		
	     
		   		
 });

});
	
		
		
	
function SearchFunction(){
	var searchNumber = document.getElementById("Search_Number").value;
	
    //console.log(result[0]);
	
	for (var i=0; i<result.length; i++){
      if (result[i].centre_no == searchNumber){
		 
		  var table = document.getElementById("school_table");
		  var newRow = table.insertRow(1);
		  
		  var cel1 = newRow.insertCell (0);
		  var cel2 = newRow.insertCell (1);
		  var cel3 = newRow.insertCell (2);
		  var cel4 = newRow.insertCell (3);
		  
          cel1.innerHTML = result[i].name;
          cel2.innerHTML = result[i].wrote_2016;
		  cel3.innerHTML = result[i].passed_2016;
		  cel4.innerHTML = result[i].wrote_2016 - result[i].passed_2016;
		  
		}
	
	}
	
	
}	
	
	