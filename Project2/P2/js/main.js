// **** Your JavaScript code goes here ****
//NOTE: this is the D3 v4 loading syntax. For more details, see https://piazza.com/class/jnzgy0ktwi34lk?cid=75.
d3.csv("./data/coffee_data.csv", function(error, data){
	if (error) throw error;
	var df = []
	for (var i=0; i<data.length; i++){
		df.push({"sales": parseInt(data[i].sales), "region": data[i].region, "category": data[i].category});
	}
	console.log(df[0]);
	var R = d3.nest().key(function(d) {return d.region;}).rollup(function(v) {return d3.sum(v,function(d) {return d.sales;});}).entries(df);
	console.log(R);
	var keys = []
	var values = []
	for (var i=0; i<R.length; i++){
		keys.push(R[i].key);
		values.push(R[i].value);
	}

	var width = 760;   
	var height = 600; 
	var svg = d3.select("body").append('svg').attr('width', width).attr('height', height).attr('style',"border: 1px solid #777;");
	var padding = {top: 100, right: 30, bottom: 100, left: 70};

	var xAxisWidth = 600;  
	var yAxisWidth = 400;  
	var xScale = d3.scaleOrdinal().domain(["Central","East","South","West"]).range([0,70, 140, 210]);
	//var xScale = d3.scaleOrdinal().domain(["Central","East","South","West"]).range([0,120,240,360]);
	var yScale = d3.scaleLinear().domain([0,d3.max(values)]).range([400,0]);
	var colors = d3.scaleOrdinal().range(["#336699", "darkorange", "#009900", "#cc0000"]);
	svg.append("g").selectAll("rect")
					.data(values)
					.enter()  
					.append("rect") 
					.attr("fill",function(d,i){
						return colors(i);
					})
					.attr("x",function(d,i){   
						// return padding.left + i * rectStep;
						return padding.left + 30 + xScale(i);

					})
					.attr("y",function(d,i){    
						// return height - padding.bottom - d;
						return padding.top + yScale(d);
					})
					.attr("width",40)   
					.attr("height",function(d){
						return 400 - yScale(d);
					})

	//var xAxis = d3.axisBottom().scale(xScale);
	//var yAxis = d3.axisLeft().scale(yScale);
    var customTickFormat = function (d){
		console.log("format" + d);
		console.log(parseInt(d)/1000);
		return (parseInt(d)/1000).toString() + "k";}
				
	svg.append("g")
	  .attr("class","axis")
	  .attr("transform","translate(" + (padding.left+47.5) + "," + (height - padding.bottom+10) + ")")
	  .call(d3.axisBottom(xScale).tickFormat(function(d) {return xScale.domain()[d];}))
	  .call(g => g.select(".domain").remove());

	svg.append("g")
	  .attr("class","axis")
	  .attr("transform","translate(" + padding.left + "," + (height - padding.bottom - yAxisWidth) + ")")
	  .call(d3.axisLeft(yScale).ticks(5).tickFormat(customTickFormat));

	svg.append("text")
		.attr("class", "label")
		.attr("transform", "translate(100,60)")
		.attr("font-weight", "bold")
		.text("Coffee Sales by Region (USD)");
	
	svg.append("text")
		.attr("class", "label")
		.attr("font-size", "12")
		.attr("font-weight", "bold")
		.attr("transform", "translate(20,350) rotate(270)")
		.text("Coffee Sales (USD)");

	svg.append("text")
		.attr("class", "label")
		.attr("font-size", "12")
		.attr("font-weight", "bold")
		.attr("transform", "translate(190,550)")
		.text("Region");

	var C = d3.nest().key(function(d) {return d.category;}).rollup(function(v) {return d3.sum(v,function(d) {return d.sales;});}).entries(df);
	var ckeys = []
	var cvalues = []
	for (var i=0; i<C.length; i++){
		ckeys.push(C[i].key);
		cvalues.push(C[i].value);
	}
	
	var cpadding = {top: 100, right: 30, bottom: 100, left: 450};
	var cxScale = d3.scaleOrdinal().domain(ckeys).range([0,70,140,210]);
	//var xScale = d3.scaleOrdinal().domain(["Central","East","South","West"]).range([0,120,240,360]);
	var cyScale = d3.scaleLinear().domain([0,d3.max(values)]).range([400,0]);
	var ccolors = d3.scaleOrdinal().range(["#663300", "firebrick", "#cc6600", "darkkhaki"]);
	
	svg.append("g")
		.selectAll("rect")
		.data(cvalues)
		.enter()
		.append("rect") 
		.attr("fill",function(d,i){
			return ccolors(i);
		})
		.attr("x",function(d,i){   
			// return padding.left + i * rectStep;
			return cpadding.left + 30 + cxScale(i);

		})
		.attr("y",function(d,i){   
			// return height - padding.bottom - d;
			return cpadding.top + cyScale(d);
		})
		.attr("width",40)    
		.attr("height",function(d){
			return 400 - cyScale(d);
		})
					
		
	svg.append("g")
	  .attr("class","x axis")
	  .attr("transform","translate(" + (cpadding.left+47.5) + "," + (height - cpadding.bottom +10) + ")")
	  .call(d3.axisBottom(cxScale).tickFormat(function(d){return cxScale.domain()[d];}))
	  .call(g => g.select(".domain").remove());

	svg.append("g")
	  .attr("class","axis")
	  .attr("transform","translate(" + cpadding.left + "," + (height - cpadding.bottom - yAxisWidth) + ")")
	  .call(d3.axisLeft(cyScale).ticks(5).tickFormat(customTickFormat));
	  
	
	svg.append("text")
	  .attr("class", "label")
	  .attr("transform", "translate(480,60)")
	  .attr("font-weight", "bold")
	  .text("Coffee Sales by Product (USD)");
	
	svg.append("text")
	  .attr("class", "label")
	  .attr("transform", "translate(400,350) rotate(270)")
	  .attr("font-size", "12")
	  .attr("font-weight", "bold")
	  .text("Coffee Sales (USD)");

    svg.append("text")
	  .attr("class", "label")
	  .attr("transform", "translate(570,550)")
	  .attr("font-size", "12")
	  .attr("font-weight", "bold")
	  .text("Product");
})
	