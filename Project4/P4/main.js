var width =500;
var height= 500;

d3.csv("calvinCollegeSeniorScores.csv", function(csv) {
    for (var i=0; i<csv.length; ++i) {
		csv[i].GPA = Number(csv[i].GPA);
		csv[i].SATM = Number(csv[i].SATM);
		csv[i].SATV = Number(csv[i].SATV);
		csv[i].ACT = Number(csv[i].ACT);
    }
    var satmExtent = d3.extent(csv, function(row) { return row.SATM; });
    var satvExtent = d3.extent(csv, function(row) { return row.SATV; });
    var actExtent = d3.extent(csv,  function(row) { return row.ACT;  });
    var gpaExtent = d3.extent(csv,  function(row) {return row.GPA;   });    

    
    var satExtents = {
	"SATM": satmExtent,
	"SATV": satvExtent
    }; 


    // Axis setup
    var xScale = d3.scaleLinear().domain(satmExtent).range([50, 470]);
    var yScale = d3.scaleLinear().domain(satvExtent).range([470, 30]);
 
    var xScale2 = d3.scaleLinear().domain(actExtent).range([50, 470]);
    var yScale2 = d3.scaleLinear().domain(gpaExtent).range([470, 30]);
     
    var xAxis = d3.axisBottom().scale(xScale);
    var yAxis = d3.axisLeft().scale(yScale);
  
    var xAxis2 = d3.axisBottom().scale(xScale2);
    var yAxis2 = d3.axisLeft().scale(yScale2);

    //Create SVGs for charts
    var chart1 = d3.select("#chart1")
					.append("svg:svg")
	                .attr("width",width)
	                .attr("height",height);

    var chart2 = d3.select("#chart2")
					.append("svg:svg")
	                .attr("width",width)
	                .attr("height",height);

		
	// add brush code HERE	
	var brush = d3.brush().extent([[0,0], [width, height]]);
	var brush2 = d3.brush().extent([[0,0], [width, height]]);

	brush.on('start', handleStart1)
		.on('brush', handleMove1)
		.on('end', handleEnd1);
	brush2.on('start', handleStart2)
		.on('brush', handleMove2)
		.on('end', handleEnd2);

	var b1 = chart1.append('g');
	b1.call(brush);
	var b2 = chart2.append('g');
	b2.call(brush2);

	function rectContains(selection, x ,y){
		//console.log("selection = ", selection)
		var brushx0 = selection.selection[0][0];
		var brushx1 = selection.selection[1][0];
		var brushy0 = selection.selection[0][1];
		var brushy1 = selection.selection[1][1];
		if (x<=brushx1 && x>=brushx0 && y<=brushy1 && y>=brushy0){
			return true;
		}
		return false;
	}
	function handleStart1(){
		b2.call(brush2.move, null);
		b1.call(brush);
		if (!d3.event.selection){
			clear1();
		}
		
	}
	function handleStart2(){
		b1.call(brush.move, null);
		b2.call
		if (!d3.event.selection){
			clear2();
		}
		
	}
	
	function handleMove1(p){
		var selection = d3.event;
		//chart2.selectAll('.selected2').classed('selected2', false);
		if (selection.selection != null){
			chart2.selectAll("circle").classed('selected2', function(d){
				var x1 = xScale(d.SATM);
				var y1 = yScale(d.SATV);
				return rectContains(selection, x1, y1);
			});
		}
	}
	function handleMove2(p){
		var selection = d3.event;
		//chart1.selectAll('.selected').classed('selected', false);
		if (selection.selection != null){
			chart1.selectAll("circle").classed('selected', function(d){
				var x2 = xScale2(d.ACT);
				var y2 = yScale2(d.GPA);
				return rectContains(selection, x2, y2);
			});
		}
	}
	function handleEnd1(){
		if (!d3.event.selection){
			clear1();
		}
	}
	function handleEnd2(){
		if (!d3.event.selection){
			clear2();
		}
	}
	function clear1(){
		chart1.selectAll('.selected').classed('selected', false);
		chart2.selectAll('.selected2').classed('selected2', false);
	}
	function clear2(){
		chart1.selectAll('.selected').classed('selected', false);
		chart2.selectAll('.selected2').classed('selected2', false);
	}
	 //add scatterplot points
	var text = d3.select('#chart3');
	var temp1= chart1
	   .selectAll("circle")
	   //.append('g')
	   .data(csv)
	   .enter()
	   
	   .append("circle")
	   .attr("id",function(d,i) {return 'a' + i;} )
	   .attr("cx", function(d) { return xScale(d.SATM); })
	   .attr("cy", function(d) { return yScale(d.SATV); })
	   .attr("r", 5)
	   .attr('stroke', 'black')
	   .attr('fill', 'black')
	   	.on('click', function(d,i){
		   chart1.selectAll('circle').classed('clicked', false);
		   chart2.selectAll('circle').classed('clicked', false);
		   chart2.select('#b' + i).classed('clicked', true);
		   text.select("#satm").html(d.SATM);
		   text.select("#satv").html(d.SATV);
		   text.select("#act").html(d.ACT);
		   text.select("#gpa").html(d.GPA);
	   });

	var temp2= chart2
	   .selectAll("circle")
	   //.append('g')
	   .data(csv)
	   .enter()
	   .append("circle")
	   .attr("id",function(d,i) {return 'b' + i;} )
	   .attr("stroke", "black")
	   .attr('fill', 'black')
	   .attr("cx", function(d) { return xScale2(d.ACT); })
	   .attr("cy", function(d) { return yScale2(d.GPA); })
	   .attr("r", 5)
	   .on('click', function(d, i) {
		   chart1.selectAll('circle').classed('clicked', false);
		   chart2.selectAll('circle').classed('clicked', false);
		   chart1.select("#a" + i).classed("clicked", true);
		   text.select("#satm").html(d.SATM);
		   text.select("#satv").html(d.SATV);
		   text.select("#act").html(d.ACT);
		   text.select("#gpa").html(d.GPA);
	   });

    chart1 // or something else that selects the SVG element in your visualizations
		.append("g") // create a group node
		.attr("transform", "translate(0,"+ (width -30)+ ")")
		.call(xAxis); // call the axis generator
	chart1.append("text")
		.attr("class", "label")
		.attr("x", width-16)
		.attr("y", height)
		.style("text-anchor", "end")
		.text("SATM");

    chart1 // or something else that selects the SVG element in your visualizations
		.append("g") // create a group node
		.attr("transform", "translate(50, 0)")
		.call(yAxis);
	chart1.append("text")
		.attr("class", "label")
		.attr("transform", "rotate(-90)")
		.attr("y", 10)
		.attr("dy", ".71em")
		.style("text-anchor", "end")
		.text("SATV");

    chart2 // or something else that selects the SVG element in your visualizations
		.append("g") // create a group node
		.attr("transform", "translate(0,"+ (width -30)+ ")")
		.call(xAxis2);
	chart2.append("text")
		.attr("class", "label")
		.attr("x", width-16)
		.attr("y", height)
		.style("text-anchor", "end")
		.text("ACT");

    chart2 // or something else that selects the SVG element in your visualizations
		.append("g") // create a group node
		.attr("transform", "translate(50, 0)")
		.call(yAxis2);
	chart2.append("text")
		.attr("class", "label")
		.attr("transform", "rotate(-90)")
		.attr("y", 10)
		//.attr("x", 250)
		.attr("dy", ".71em")
		.style("text-anchor", "end")
		.text("GPA");

	});
