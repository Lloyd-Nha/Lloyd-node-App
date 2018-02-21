 
 var result14;	
 var result15;	
 var result16;	
 
 $.ajax({
	             async: false,
				 type: 'GET',	
                 url: '/banks/v/gettwentyforteen',
				 datatype: "json",
				 success: function(data){
                             result14 = data;
				   //console.log(result); 
				 }     
                 
          });

$.ajax({
	             async: false,
				 type: 'GET',	
                 url: '/banks/v/gettwentyfifteen',
				 datatype: "json",
				 success: function(data){
                             result15 = data;
				   //console.log(result); 
				 }     
                 
          });		  
		  
  	  
$.ajax({
				 async: false,
				 type: 'GET',	
                 url: '/banks/v/gettwentysxteen',
				 datatype: "json",
                 success: function(data){
                             result16 = data;
				   //console.log(result); 
				 }     
          });		  
		  		  
  var chart = c3.generate({
	bindto: '#chart',
	x: 'x',
    data: {
        columns: [
		     
            ['Wrote', result14[0].Total, result15[0].Total, result16[0].Total],
			['Passed', result14[0].Pass, result15[0].Pass, result16[0].Pass],
            ['Failed', result14[0].Failed, result15[0].Failed, result16[0].Failed]
        ],
        type: 'bar',
		colors: {
               Wrote: '#0000ff',
               Passed: '#02e800',
               Failed: '#ff0000'
        },
	color: function (color, d) {
            // d will be 'id' when called for legends
            return d.id && d.id === 'data3' ? d3.rgb(color).darker(d.value / 150) : color;
        }	
    },
	
	 axis: {
        x: {
            type: 'category',
            categories: ['Year 2014', 'Year 2015', 'Year 2016']
        }
    },
    bar: {
        width: {
            ratio: 0.5 // this makes bar width 50% of length between ticks
        }
        // or
        //width: 100 // this makes bar width 100px
    }
	
});





		  




		  

		  
   
	 



      
		  
