// Define the div for the tooltip
var div = d3.select("body").append("div")	
    .attr("class", "tooltip")				
    .style("opacity", 0);
var div2 = d3.select("body").append("div")
    .attr("class", "tooltip2")
    .style("opacity", 0);

d3.csv("college.csv", function(error, data) {
  if (error) throw error;
  var GroupByRegion = {};
  var GroupByLocale = {};
  var GroupByControl = {};
  var option = "Control";
  for (var i=0; i<data.length; ++i) {
	data[i].MedianDebt = Number(data[i].MedianDebt);
	data[i].Expenditure = Number(data[i].Expenditure);
	data[i].MedianFamilyIncome = Number(data[i].MedianFamilyIncome);
  data[i].FederalLoans = Number(data[i].FederalLoans);
  
  data[i].White = Number(data[i].White);
	data[i].Black = Number(data[i].Black);
	data[i].Asian = Number(data[i].Asian);
	data[i].Hispanic = Number(data[i].Hispanic);
  }
  GroupByControl['Private'] = data.filter(function(d){return d.Control == 'Private';});
  GroupByControl['Public'] = data.filter(function(d){return d.Control == 'Public';});
  var avgWhiteC = {}
  avgWhiteC['Private'] = GroupByControl['Private'].reduce((acc, curRow) => {return acc + (curRow.White.toFixed(4) / (GroupByControl['Private'].length).toFixed(4));},0);
  avgWhiteC['Public'] = GroupByControl['Public'].reduce((acc, curRow) => {return acc + (curRow.White.toFixed(4) / (GroupByControl['Public'].length).toFixed(4));},0);
  var avgBlackC = {}
  avgBlackC['Private'] = GroupByControl['Private'].reduce((acc, curRow) => {return acc + (curRow.Black.toFixed(4) / (GroupByControl['Private'].length).toFixed(4));},0);
  avgBlackC['Public'] = GroupByControl['Public'].reduce((acc, curRow) => {return acc + (curRow.Black.toFixed(4) / (GroupByControl['Public'].length).toFixed(4));},0);
  var avgHispanicC = {}
  avgHispanicC['Private'] = GroupByControl['Private'].reduce((acc, curRow) => {return acc + (curRow.Hispanic.toFixed(4) / (GroupByControl['Private'].length).toFixed(4));},0);
  avgHispanicC['Public'] = GroupByControl['Public'].reduce((acc, curRow) => {return acc + (curRow.Hispanic.toFixed(4) / (GroupByControl['Public'].length).toFixed(4));},0);
  var avgAsianC = {}
  avgAsianC['Private'] = GroupByControl['Private'].reduce((acc, curRow) => {return acc + (curRow.Asian.toFixed(4) / (GroupByControl['Private'].length).toFixed(4));},0);
  avgAsianC['Public'] = GroupByControl['Public'].reduce((acc, curRow) => {return acc + (curRow.Asian.toFixed(4) / (GroupByControl['Public'].length).toFixed(4));},0);
  

  GroupByLocale['MidC'] = data.filter(function(d){return d.Locale == "Mid-size City";});
  GroupByLocale['MidS'] = data.filter(function(d){return d.Locale == "Mid-size Suburb";});
  GroupByLocale['LargeC'] = data.filter(function(d){return d.Locale == "Large City";});
  GroupByLocale['SmallC'] = data.filter(function(d){return d.Locale == "Small City";});
  GroupByLocale['SmallS'] = data.filter(function(d){return d.Locale == "Small Suburb";});
  GroupByLocale['LargeS'] = data.filter(function(d){return d.Locale == "Large Suburb";});
  GroupByLocale['FringeT'] = data.filter(function(d){return d.Locale == "Fringe Town";});
  GroupByLocale['RemoteT'] = data.filter(function(d){return d.Locale == "Remote Town";});
  GroupByLocale['FringeR'] = data.filter(function(d){return d.Locale == "Fringe Rural";});
  GroupByLocale['RemoteR'] = data.filter(function(d){return d.Locale == "Remote Rural";});
  GroupByLocale['DistantT'] = data.filter(function(d){return d.Locale == "Distant Town";});
  GroupByLocale['DistantR'] = data.filter(function(d){return d.Locale == "Distant Rural";});
  
  var avgWhiteL = {}
  avgWhiteL['MidC'] = GroupByLocale['MidC'].reduce((acc, curRow) => {return acc + (curRow.White.toFixed(4) / (GroupByLocale['MidC'].length).toFixed(4));},0);
  avgWhiteL['MidS'] = GroupByLocale['MidS'].reduce((acc, curRow) => {return acc + (curRow.White.toFixed(4) / (GroupByLocale['MidS'].length).toFixed(4));},0);
  avgWhiteL['LargeC'] = GroupByLocale['LargeC'].reduce((acc, curRow) => {return acc + (curRow.White.toFixed(4) / (GroupByLocale['LargeC'].length).toFixed(4));},0);
  avgWhiteL['SmallC'] = GroupByLocale['SmallC'].reduce((acc, curRow) => {return acc + (curRow.White.toFixed(4) / (GroupByLocale['SmallC'].length).toFixed(4));},0);
  avgWhiteL['LargeS'] = GroupByLocale['LargeS'].reduce((acc, curRow) => {return acc + (curRow.White.toFixed(4) / (GroupByLocale['LargeS'].length).toFixed(4));},0);
  avgWhiteL['SmallS'] = GroupByLocale['SmallS'].reduce((acc, curRow) => {return acc + (curRow.White.toFixed(4) / (GroupByLocale['SmallS'].length).toFixed(4));},0);
  avgWhiteL['FringeT'] = GroupByLocale['FringeT'].reduce((acc, curRow) => {return acc + (curRow.White.toFixed(4) / (GroupByLocale['FringeT'].length).toFixed(4));},0);
  avgWhiteL['RemoteT'] = GroupByLocale['RemoteT'].reduce((acc, curRow) => {return acc + (curRow.White.toFixed(4) / (GroupByLocale['RemoteT'].length).toFixed(4));},0);
  avgWhiteL['FringeR'] = GroupByLocale['FringeR'].reduce((acc, curRow) => {return acc + (curRow.White.toFixed(4) / (GroupByLocale['FringeR'].length).toFixed(4));},0);
  avgWhiteL['RemoteR'] = GroupByLocale['RemoteR'].reduce((acc, curRow) => {return acc + (curRow.White.toFixed(4) / (GroupByLocale['RemoteR'].length).toFixed(4));},0);
  avgWhiteL['DistantT'] = GroupByLocale['DistantT'].reduce((acc, curRow) => {return acc + (curRow.White.toFixed(4) / (GroupByLocale['DistantT'].length).toFixed(4));},0);
  avgWhiteL['DistantR'] = GroupByLocale['DistantR'].reduce((acc, curRow) => {return acc + (curRow.White.toFixed(4) / (GroupByLocale['DistantR'].length).toFixed(4));},0);
  var avgBlackL = {};
  avgBlackL['MidC'] = GroupByLocale['MidC'].reduce((acc, curRow) => {return acc + (curRow.Black.toFixed(4) / (GroupByLocale['MidC'].length).toFixed(4));},0);
  avgBlackL['MidS'] = GroupByLocale['MidS'].reduce((acc, curRow) => {return acc + (curRow.Black.toFixed(4) / (GroupByLocale['MidS'].length).toFixed(4));},0);
  avgBlackL['LargeC'] = GroupByLocale['LargeC'].reduce((acc, curRow) => {return acc + (curRow.Black.toFixed(4) / (GroupByLocale['LargeC'].length).toFixed(4));},0);
  avgBlackL['SmallC'] = GroupByLocale['SmallC'].reduce((acc, curRow) => {return acc + (curRow.Black.toFixed(4) / (GroupByLocale['SmallC'].length).toFixed(4));},0);
  avgBlackL['LargeS'] = GroupByLocale['LargeS'].reduce((acc, curRow) => {return acc + (curRow.Black.toFixed(4) / (GroupByLocale['LargeS'].length).toFixed(4));},0);
  avgBlackL['SmallS'] = GroupByLocale['SmallS'].reduce((acc, curRow) => {return acc + (curRow.Black.toFixed(4) / (GroupByLocale['SmallS'].length).toFixed(4));},0);
  avgBlackL['FringeT'] = GroupByLocale['FringeT'].reduce((acc, curRow) => {return acc + (curRow.Black.toFixed(4) / (GroupByLocale['FringeT'].length).toFixed(4));},0);
  avgBlackL['RemoteT'] = GroupByLocale['RemoteT'].reduce((acc, curRow) => {return acc + (curRow.Black.toFixed(4) / (GroupByLocale['RemoteT'].length).toFixed(4));},0);
  avgBlackL['FringeR'] = GroupByLocale['FringeR'].reduce((acc, curRow) => {return acc + (curRow.Black.toFixed(4) / (GroupByLocale['FringeR'].length).toFixed(4));},0);
  avgBlackL['RemoteR'] = GroupByLocale['RemoteR'].reduce((acc, curRow) => {return acc + (curRow.Black.toFixed(4) / (GroupByLocale['RemoteR'].length).toFixed(4));},0);
  avgBlackL['DistantT'] = GroupByLocale['DistantT'].reduce((acc, curRow) => {return acc + (curRow.Black.toFixed(4) / (GroupByLocale['DistantT'].length).toFixed(4));},0);
  avgBlackL['DistantR'] = GroupByLocale['DistantR'].reduce((acc, curRow) => {return acc + (curRow.Black.toFixed(4) / (GroupByLocale['DistantR'].length).toFixed(4));},0);
  var avgHispanicL = {};
  avgHispanicL['MidC'] = GroupByLocale['MidC'].reduce((acc, curRow) => {return acc + (curRow.Hispanic.toFixed(4) / (GroupByLocale['MidC'].length).toFixed(4));},0);
  avgHispanicL['MidS'] = GroupByLocale['MidS'].reduce((acc, curRow) => {return acc + (curRow.Hispanic.toFixed(4) / (GroupByLocale['MidS'].length).toFixed(4));},0);
  avgHispanicL['LargeC'] = GroupByLocale['LargeC'].reduce((acc, curRow) => {return acc + (curRow.Hispanic.toFixed(4) / (GroupByLocale['LargeC'].length).toFixed(4));},0);
  avgHispanicL['SmallC'] = GroupByLocale['SmallC'].reduce((acc, curRow) => {return acc + (curRow.Hispanic.toFixed(4) / (GroupByLocale['SmallC'].length).toFixed(4));},0);
  avgHispanicL['LargeS'] = GroupByLocale['LargeS'].reduce((acc, curRow) => {return acc + (curRow.Hispanic.toFixed(4) / (GroupByLocale['LargeS'].length).toFixed(4));},0);
  avgHispanicL['SmallS'] = GroupByLocale['SmallS'].reduce((acc, curRow) => {return acc + (curRow.Hispanic.toFixed(4) / (GroupByLocale['SmallS'].length).toFixed(4));},0);
  avgHispanicL['FringeT'] = GroupByLocale['FringeT'].reduce((acc, curRow) => {return acc + (curRow.Hispanic.toFixed(4) / (GroupByLocale['FringeT'].length).toFixed(4));},0);
  avgHispanicL['RemoteT'] = GroupByLocale['RemoteT'].reduce((acc, curRow) => {return acc + (curRow.Hispanic.toFixed(4) / (GroupByLocale['RemoteT'].length).toFixed(4));},0);
  avgHispanicL['FringeR'] = GroupByLocale['FringeR'].reduce((acc, curRow) => {return acc + (curRow.Hispanic.toFixed(4) / (GroupByLocale['FringeR'].length).toFixed(4));},0);
  avgHispanicL['RemoteR'] = GroupByLocale['RemoteR'].reduce((acc, curRow) => {return acc + (curRow.Hispanic.toFixed(4) / (GroupByLocale['RemoteR'].length).toFixed(4));},0);
  avgHispanicL['DistantT'] = GroupByLocale['DistantT'].reduce((acc, curRow) => {return acc + (curRow.Hispanic.toFixed(4) / (GroupByLocale['DistantT'].length).toFixed(4));},0);
  avgHispanicL['DistantR'] = GroupByLocale['DistantR'].reduce((acc, curRow) => {return acc + (curRow.Hispanic.toFixed(4) / (GroupByLocale['DistantR'].length).toFixed(4));},0);
  var avgAsianL = {};
  avgAsianL['MidC'] = GroupByLocale['MidC'].reduce((acc, curRow) => {return acc + (curRow.Asian.toFixed(4) / (GroupByLocale['MidC'].length).toFixed(4));},0);
  avgAsianL['MidS'] = GroupByLocale['MidS'].reduce((acc, curRow) => {return acc + (curRow.Asian.toFixed(4) / (GroupByLocale['MidS'].length).toFixed(4));},0);
  avgAsianL['LargeC'] = GroupByLocale['LargeC'].reduce((acc, curRow) => {return acc + (curRow.Asian.toFixed(4) / (GroupByLocale['LargeC'].length).toFixed(4));},0);
  avgAsianL['SmallC'] = GroupByLocale['SmallC'].reduce((acc, curRow) => {return acc + (curRow.Asian.toFixed(4) / (GroupByLocale['SmallC'].length).toFixed(4));},0);
  avgAsianL['LargeS'] = GroupByLocale['LargeS'].reduce((acc, curRow) => {return acc + (curRow.Asian.toFixed(4) / (GroupByLocale['LargeS'].length).toFixed(4));},0);
  avgAsianL['SmallS'] = GroupByLocale['SmallS'].reduce((acc, curRow) => {return acc + (curRow.Asian.toFixed(4) / (GroupByLocale['SmallS'].length).toFixed(4));},0);
  avgAsianL['FringeT'] = GroupByLocale['FringeT'].reduce((acc, curRow) => {return acc + (curRow.Asian.toFixed(4) / (GroupByLocale['FringeT'].length).toFixed(4));},0);
  avgAsianL['RemoteT'] = GroupByLocale['RemoteT'].reduce((acc, curRow) => {return acc + (curRow.Asian.toFixed(4) / (GroupByLocale['RemoteT'].length).toFixed(4));},0);
  avgAsianL['FringeR'] = GroupByLocale['FringeR'].reduce((acc, curRow) => {return acc + (curRow.Asian.toFixed(4) / (GroupByLocale['FringeR'].length).toFixed(4));},0);
  avgAsianL['RemoteR'] = GroupByLocale['RemoteR'].reduce((acc, curRow) => {return acc + (curRow.Asian.toFixed(4) / (GroupByLocale['RemoteR'].length).toFixed(4));},0);
  avgAsianL['DistantT'] = GroupByLocale['DistantT'].reduce((acc, curRow) => {return acc + (curRow.Asian.toFixed(4) / (GroupByLocale['DistantT'].length).toFixed(4));},0);
  avgAsianL['DistantR'] = GroupByLocale['DistantR'].reduce((acc, curRow) => {return acc + (curRow.Asian.toFixed(4) / (GroupByLocale['DistantR'].length).toFixed(4));},0);
  
  GroupByRegion["Lakes"] = data.filter(function(d){return d.Region == 'Great Lakes';});
  GroupByRegion["Rocky"] = data.filter(function(d){return d.Region == 'Rocky Mountains';});
  GroupByRegion["Plains"] = data.filter(function(d){return d.Region == 'Great Plains';});
  GroupByRegion["England"] = data.filter(function(d){return d.Region == 'New England';});
  GroupByRegion["FarWest"] = data.filter(function(d){return d.Region == 'Far West';});
  GroupByRegion["Outlying"] = data.filter(function(d){return d.Region == 'Outlying Areas';});
  GroupByRegion["Atlantic"] = data.filter(function(d){return d.Region == 'Mid-Atlantic';});
  GroupByRegion["Southeast"] = data.filter(function(d){return d.Region == 'Southeast';});
  GroupByRegion["Southwest"] = data.filter(function(d){return d.Region == 'Southwest';});

  var avgWhiteR = {}
  avgWhiteR["Lakes"] = GroupByRegion["Lakes"].reduce((acc, curRow) => {return acc + (curRow.White.toFixed(4) / (GroupByRegion["Lakes"].length).toFixed(4)); },0);
  avgWhiteR["Rocky"] = GroupByRegion["Rocky"].reduce((acc, curRow) => {return acc + (curRow.White.toFixed(4) / (GroupByRegion["Rocky"].length).toFixed(4)); },0);
  avgWhiteR["Plains"] = GroupByRegion["Plains"].reduce((acc, curRow) => {return acc + (curRow.White.toFixed(4) / (GroupByRegion["Plains"].length).toFixed(4)); },0);
  avgWhiteR["England"] = GroupByRegion["England"].reduce((acc, curRow) => {return acc + (curRow.White.toFixed(4) / (GroupByRegion["England"].length).toFixed(4)); },0);
  avgWhiteR["FarWest"] = GroupByRegion["FarWest"].reduce((acc, curRow) => {return acc + (curRow.White.toFixed(4) / (GroupByRegion["FarWest"].length).toFixed(4)); },0);
  avgWhiteR["Outlying"] = GroupByRegion["Outlying"].reduce((acc, curRow) => {return acc + (curRow.White.toFixed(4) / (GroupByRegion["Outlying"].length).toFixed(4)); },0);
  avgWhiteR["Atlantic"] = GroupByRegion["Atlantic"].reduce((acc, curRow) => {return acc + (curRow.White.toFixed(4) / (GroupByRegion["Atlantic"].length).toFixed(4)); },0);
  avgWhiteR["Southeast"] = GroupByRegion["Southeast"].reduce((acc, curRow) => {return acc + (curRow.White.toFixed(4) / (GroupByRegion["Southeast"].length).toFixed(4)); },0);
  avgWhiteR["Southwest"] = GroupByRegion["Southwest"].reduce((acc, curRow) => {return acc + (curRow.White.toFixed(4) / (GroupByRegion["Southwest"].length).toFixed(4)); },0);

  var avgBlackR = {}
  avgBlackR["Lakes"] = GroupByRegion["Lakes"].reduce((acc, curRow) => {return acc + (curRow.Black.toFixed(4) / (GroupByRegion["Lakes"].length).toFixed(4)); },0);
  avgBlackR["Rocky"] = GroupByRegion["Rocky"].reduce((acc, curRow) => {return acc + (curRow.Black.toFixed(4) / (GroupByRegion["Rocky"].length).toFixed(4)); },0);
  avgBlackR["Plains"] = GroupByRegion["Plains"].reduce((acc, curRow) => {return acc + (curRow.Black.toFixed(4) / (GroupByRegion["Plains"].length).toFixed(4)); },0);
  avgBlackR["England"] = GroupByRegion["England"].reduce((acc, curRow) => {return acc + (curRow.Black.toFixed(4) / (GroupByRegion["England"].length).toFixed(4)); },0);
  avgBlackR["FarWest"] = GroupByRegion["FarWest"].reduce((acc, curRow) => {return acc + (curRow.Black.toFixed(4) / (GroupByRegion["FarWest"].length).toFixed(4)); },0);
  avgBlackR["Outlying"] = GroupByRegion["Outlying"].reduce((acc, curRow) => {return acc + (curRow.Black.toFixed(4) / (GroupByRegion["Outlying"].length).toFixed(4)); },0);
  avgBlackR["Atlantic"] = GroupByRegion["Atlantic"].reduce((acc, curRow) => {return acc + (curRow.Black.toFixed(4) / (GroupByRegion["Atlantic"].length).toFixed(4)); },0);
  avgBlackR["Southeast"] = GroupByRegion["Southeast"].reduce((acc, curRow) => {return acc + (curRow.Black.toFixed(4) / (GroupByRegion["Southeast"].length).toFixed(4)); },0);
  avgBlackR["Southwest"] = GroupByRegion["Southwest"].reduce((acc, curRow) => {return acc + (curRow.Black.toFixed(4) / (GroupByRegion["Southwest"].length).toFixed(4)); },0);
  
  var avgHispanicR = {}
  avgHispanicR["Lakes"] = GroupByRegion["Lakes"].reduce((acc, curRow) => {return acc + (curRow.Hispanic.toFixed(4) / (GroupByRegion["Lakes"].length).toFixed(4)); },0);
  avgHispanicR["Rocky"] = GroupByRegion["Rocky"].reduce((acc, curRow) => {return acc + (curRow.Hispanic.toFixed(4) / (GroupByRegion["Rocky"].length).toFixed(4)); },0);
  avgHispanicR["Plains"] = GroupByRegion["Plains"].reduce((acc, curRow) => {return acc + (curRow.Hispanic.toFixed(4) / (GroupByRegion["Plains"].length).toFixed(4)); },0);
  avgHispanicR["England"] = GroupByRegion["England"].reduce((acc, curRow) => {return acc + (curRow.Hispanic.toFixed(4) / (GroupByRegion["England"].length).toFixed(4)); },0);
  avgHispanicR["FarWest"] = GroupByRegion["FarWest"].reduce((acc, curRow) => {return acc + (curRow.Hispanic.toFixed(4) / (GroupByRegion["FarWest"].length).toFixed(4)); },0);
  avgHispanicR["Outlying"] = GroupByRegion["Outlying"].reduce((acc, curRow) => {return acc + (curRow.Hispanic.toFixed(4) / (GroupByRegion["Outlying"].length).toFixed(4)); },0);
  avgHispanicR["Atlantic"] = GroupByRegion["Atlantic"].reduce((acc, curRow) => {return acc + (curRow.Hispanic.toFixed(4) / (GroupByRegion["Atlantic"].length).toFixed(4)); },0);
  avgHispanicR["Southeast"] = GroupByRegion["Southeast"].reduce((acc, curRow) => {return acc + (curRow.Hispanic.toFixed(4) / (GroupByRegion["Southeast"].length).toFixed(4)); },0);
  avgHispanicR["Southwest"] = GroupByRegion["Southwest"].reduce((acc, curRow) => {return acc + (curRow.Hispanic.toFixed(4) / (GroupByRegion["Southwest"].length).toFixed(4)); },0);
  
  var avgAsianR = {}
  avgAsianR["Lakes"] = GroupByRegion["Lakes"].reduce((acc, curRow) => {return acc + (curRow.Asian.toFixed(4) / (GroupByRegion["Lakes"].length).toFixed(4)); },0);
  avgAsianR["Rocky"] = GroupByRegion["Rocky"].reduce((acc, curRow) => {return acc + (curRow.Asian.toFixed(4) / (GroupByRegion["Rocky"].length).toFixed(4)); },0);
  avgAsianR["Plains"] = GroupByRegion["Plains"].reduce((acc, curRow) => {return acc + (curRow.Asian.toFixed(4) / (GroupByRegion["Plains"].length).toFixed(4)); },0);
  avgAsianR["England"] = GroupByRegion["England"].reduce((acc, curRow) => {return acc + (curRow.Asian.toFixed(4) / (GroupByRegion["England"].length).toFixed(4)); },0);
  avgAsianR["FarWest"] = GroupByRegion["FarWest"].reduce((acc, curRow) => {return acc + (curRow.Asian.toFixed(4) / (GroupByRegion["FarWest"].length).toFixed(4)); },0);
  avgAsianR["Outlying"] = GroupByRegion["Outlying"].reduce((acc, curRow) => {return acc + (curRow.Asian.toFixed(4) / (GroupByRegion["Outlying"].length).toFixed(4)); },0);
  avgAsianR["Atlantic"] = GroupByRegion["Atlantic"].reduce((acc, curRow) => {return acc + (curRow.Asian.toFixed(4) / (GroupByRegion["Atlantic"].length).toFixed(4)); },0);
  avgAsianR["Southeast"] = GroupByRegion["Southeast"].reduce((acc, curRow) => {return acc + (curRow.Asian.toFixed(4) / (GroupByRegion["Southeast"].length).toFixed(4)); },0);
  avgAsianR["Southwest"] = GroupByRegion["Southwest"].reduce((acc, curRow) => {return acc + (curRow.Asian.toFixed(4) / (GroupByRegion["Southwest"].length).toFixed(4)); },0);
  
  var debtExtent = d3.extent(data, function(row) { return row.MedianDebt;});
  var expenditureExtent = d3.extent(data, function(row) { return row.Expenditure;});
  var incomeExtent = d3.extent(data,  function(row) { return row.MedianFamilyIncome;});
  var loansExtent = d3.extent(data,  function(row) {return row.FederalLoans;}); 

  var width = 500;
  var height = 510;
 
  var size = 160;
  var padding = 30;
  var x = d3.scale.linear().range([padding/2, size - padding / 2]);

  var y = d3.scale.linear().range([size - padding / 2, padding / 2]);

  var xAxis = d3.svg.axis().scale(x).orient("bottom").ticks(6);
  xAxis.tickFormat(function(d){
    if (parseInt(d)<1000){
      return d;}
    return (parseInt(d)/1000).toString() + "k";
  });

  var yAxis = d3.svg.axis().scale(y).orient("left").ticks(6);
  yAxis.tickFormat(function(d){
    if (parseInt(d)<1000){
      return d;}
    return (parseInt(d)/1000).toString() + "k";
  });

  var color = d3.scale.ordinal().range(["#98abc5", "#8a89a6", "#7b6888", "#6b486b"]);
  var color_scatter = d3.scale.ordinal().range(["#b3ff66","#00FA9A","#00BFFF","#80ced6","#778899","#e0a4f4","#a845bf","#A52A2A","#B8860B","#f18973","#feb236","#f2f24c"]);
  var color_scatter1 = d3.scale.ordinal().range(["#ccff33","#99cc00","#208000","#80ffaa","#0088cc","#4db8ff","#ccb3ff","#ff66cc","#ff8080"]);
  var color_scatter2 = d3.scale.ordinal().range(["#66d9ff", "#6699ff"]);



  
  var domainByTrait = {},
      traits = d3.keys(data[0]).filter(function(d){return d=="MedianDebt"||d=="Expenditure"||d=="MedianFamilyIncome";}),
      n = traits.length;
  domainByTrait["FederalLoans"] = loansExtent;
  domainByTrait["MedianFamilyIncome"] = incomeExtent;
  domainByTrait["Expenditure"] = expenditureExtent;
  domainByTrait["MedianDebt"] = debtExtent;

//   traits.forEach(function(trait) {
// 	  console.log(trait);
// 	domainByTrait[trait] = d3.extent(data, function(d) {return d[trait];});
// 	//domainByTrait[trait] = [d3.min(data, trait)-1, d3.max(data, trait)+1];
//   });

  xAxis.tickSize(size * n);
  yAxis.tickSize(-size * n);

  var brush = d3.svg.brush()
      .x(x)
      .y(y)
      .on("brushstart", brushstart)
      .on("brush", brushmove)
      .on("brushend", brushend);

  var svg = d3.select("#scatter").append("svg")
      //.attr("width", size * n + padding)
      //.attr("height", size * n + padding)
	  .attr("width", width)
	  .attr("height", height)
	  .append("g")
      .attr("transform", "translate(" + padding + "," + padding / 2 + ")");
	  
  svg.selectAll(".x.axis")
      .data(traits)
      .enter().append("g")
      .attr("class", "x axis")
      .attr("transform", function(d, i) { return "translate(" + (n - i - 1) * size + ",0)"; })
      .each(function(d) {x.domain(domainByTrait[d]); d3.select(this).call(xAxis); });

  svg.selectAll(".y.axis")
      .data(traits)
      .enter().append("g")
      .attr("class", "y axis")
      .attr("transform", function(d, i) { return "translate(0," + i * size + ")"; })
      .each(function(d) {y.domain(domainByTrait[d]); d3.select(this).call(yAxis); });
	
  var cell = svg.selectAll(".cell")
      .data(cross(traits, traits))
      .enter().append("g")
      .attr("class", "cell")
      .attr("transform", function(d) { return "translate(" + (n - d.i - 1) * size + "," + d.j * size + ")"; });

  var brush_cell = cell.append('g');
  brush_cell.call(brush);
  var circles;
  cell.each(plot);
  // Titles for the diagonal.
  cell.filter(function(d) { return d.i === d.j; }).append("text")
      .attr("x", padding)
      .attr("y", padding)
      .attr("dy", ".71em")
      .text(function(d) { return d.x; });

  function plot(p) {
    var cell = d3.select(this);
    x.domain(domainByTrait[p.x]);
	  y.domain(domainByTrait[p.y]);

    cell.append("rect")
        .attr("class", "frame")
        .attr("x", padding / 2)
        .attr("y", padding / 2)
        .attr("width", size - padding)
        .attr("height", size - padding);

    circles = cell.selectAll("circle")
        .data(data)
        .enter().append("circle")
        .attr("id",function(d,i) {return 'a' + i;} )
        .attr("cx", function(d) { return x(d[p.x]); })
        .attr("cy", function(d) { return y(d[p.y]); })
        .attr("r", 2.5)
        .style("fill", function(d) { return color_scatter2(d.Control); })
        .on("mouseover", function(d){
          div2.transition()		
                  .duration(200)		
                  .style("opacity", .9);		
          div2.html("Name: " + d.Name + "<br/>"  + option + ": " + d[option])	
                  .style("left", (d3.event.pageX) + "px")		
                  .style("top", (d3.event.pageY - 28) + "px");	
        })					
        .on("mouseout", function(d) {		
              div2.transition()		
                  .duration(500)		
                  .style("opacity", 0);	
        });
  }
  

  var brushCell;

  // Clear the previously-active brush, if any.
  function brushstart(p) {
    if (brushCell !== this) {
      d3.select(brushCell).call(brush.clear());
      x.domain(domainByTrait[p.x]);
      y.domain(domainByTrait[p.y]);
      brushCell = this;
    }
  }

  // Highlight the selected circles.
  function brushmove(p) {
    var e = brush.extent();
    svg.selectAll("circle").classed("hidden", function(d) {
      return e[0][0] > d[p.x] || d[p.x] > e[1][0]
          || e[0][1] > d[p.y] || d[p.y] > e[1][1];
    });
  }

  // If the brush is empty, select all circles.
  function brushend() {
    if (brush.empty()){ svg.selectAll(".hidden").classed("hidden", false);
      if (option == "Control") UpdateRaceByControl_noBrush();
      else if (option == "Locale") UpdateRaceByLocale_noBrush();
      else UpdateRaceByRegion_noBrush();
    }
    else{
      if (option == "Control") UpdateRaceByControl();
      else if (option == "Locale") UpdateRaceByLocale();
      else UpdateRaceByRegion();
    }
  }

  var width2 = 400;
  var height2 = 430;
  var svg2 = d3.select("#bar").append("svg")
  .attr("width", width2)
  .attr("height", height2)
  .append("g")
  .attr("transform", "translate(" + 0 + "," + 0 + ")");

  // Legend for bar chart
  var legendVals = ["% White", "% Black", "% Hispanic", "% Asian"];
  var mylegend_container = d3.select("#legend").append('svg').attr("width", 100).attr("height", height2/2);
  var mylegend = mylegend_container.selectAll("#legend")
      .data(legendVals).enter().append('g')
      .attr("class", 'legend')
      .attr("transform", function (d, i) {return "translate(0," + (i * 20+padding*2) + ")"});
  mylegend.append('rect').attr("x", 0).attr("y", 0)
      .attr("width", 10)
      .attr("height", 10)
      .style("fill", function (d, i) {return color(i)});
        
  mylegend.append('text').attr("x", 20).attr("y", 10)
        //.attr("dy", ".35em")
      .text(function (d, i) {return d})
      .attr("class", "textselected")
      .style("text-anchor", "start")
      .style("font-size", 15);
  //var mylegend = d3.select('#legend').selectAll("legend").data(legendVals)
        
  //mylegend.enter().append("div").attr("class","legend");
  
  // var p = mylegend.append("p").attr("class","country-name");
  // p.append("span").attr("class","key-dot").style("background",function(d,i) { return color(i) } ) 
  // p.insert("text").text(function(d,i) { return d } ) 

  // Legend for scatter plot
  var scatter_legend_container = d3.select("#scatter_legend").append("svg").attr("width", 150).attr("height", height);
  var scatter_legend = scatter_legend_container.selectAll('#scatter_legend')
      .data(d3.set(data.map( function(d) { return d.Control } ) ).values())
      .enter().append('g')
      .attr("class", "legend")
      .attr("transform", function (d, i) {return "translate(0," + (i * 20+padding*2) + ")"});
  scatter_legend.append('rect').attr("x", 0).attr("y", 0)
      .attr("width", 10)
      .attr("height", 10)
      .style("fill", function (d, i) {return color_scatter2(i)});
        
  scatter_legend.append('text').attr("x", 20).attr("y", 10)
        //.attr("dy", ".35em")
      .text(function (d, i) {return d})
      .attr("class", "textselected")
      .style("text-anchor", "start")
      .style("font-size", 15);
            

  // Three buttons
  d3.select("#button").append('g').append('button')
    .attr("class", "button")
    .attr("id", "buttonL")
    .attr("transform", "translate(0,20)")
    .text('Summarize Race by Locality')
    .on('click', function(){ 
        d3.select(this).style("background-color", "#e6f2ff"); 
        d3.select("#buttonC").style("background-color", "white");
        d3.select("#buttonR").style("background-color", "white");
        UpdateRaceByLocale(); });
  d3.select("#button").append('g').append('button')
    .attr("class", "button")
    .attr("id", "buttonR")
    .attr("transform", "translate(0,20)")
    .text('Summarize Race by Region')
    .on('click', function(){ 
        d3.select(this).style("background-color", "#e6f2ff"); 
        d3.select("#buttonC").style("background-color", "white");
        d3.select("#buttonL").style("background-color", "white");
        UpdateRaceByRegion(); });
  d3.select("#button").append('g').append('button')
    .attr("class", "button")
    .attr("id", "buttonC")
    .attr("transform", "translate(0,20)")
    .text('Summarize Race by Control')
    .on('click', function(){ 
        d3.select(this).style("background-color", "#e6f2ff"); 
        d3.select("#buttonL").style("background-color", "white");
        d3.select("#buttonR").style("background-color", "white");
        UpdateRaceByControl(); });
  
  // Update By Control ////////////////////////////////////////////////////////////////////////////////////////////////////
  function UpdateRaceByControl_noBrush(){
    svg2.selectAll("*").remove();  
    option = "Control";
    cell.selectAll("circle").style("fill", function(d) { return color_scatter2(d.Control); });
    
    d3.select("#scatter_legend").selectAll('*').remove();
    var scatter_legend_container = d3.select("#scatter_legend").append("svg").attr("width", 150).attr("height", height);
    var scatter_legend = scatter_legend_container.selectAll('#scatter_legend')
        .data(d3.set(data.map( function(d) { return d.Control } ) ).values())
        .enter().append('g')
        .attr("class", "legend")
        .attr("transform", function (d, i) {return "translate(0," + (i * 20+padding*2) + ")"});
    scatter_legend.append('rect').attr("x", 0).attr("y", 0)
        .attr("width", 10)
        .attr("height", 10)
        .style("fill", function (d, i) {return color_scatter2(i)});
          
    scatter_legend.append('text').attr("x", 20).attr("y", 10)
          //.attr("dy", ".35em")
        .text(function (d, i) {return d})
        .attr("class", "textselected")
        .style("text-anchor", "start")
        .style("font-size", 15);

    var x2 = d3.scale.linear().range([0, width2-padding]);
    var y2 =d3.scale.ordinal().rangeRoundBands([height2-padding, padding], .1);
    var xAxis2 = d3.svg.axis().scale(x2).orient("bottom");
    var yAxis2 = d3.svg.axis().scale(y2).orient("left");

    var factorsB = [[avgWhiteC, "White"], [avgBlackC, "Black"], [avgHispanicC, "Hispanic"], [avgAsianC, "Asian"]];
    var controls = ["Private", "Public"];
    var layers = d3.layout.stack()(factorsB.map(function(f){
      return controls.map(function(r){
        return {x: [r, f[1]], y: f[0][r]};
      });
    }));

    x2.domain([0,1]).nice();
    y2.domain(layers[0].map(function(d) { return d.x[0]; }));
    var layer = svg2.selectAll(".layers")
      .data(layers)
      .enter().append("g")
      .attr("class", "layer")
      .style("fill", function(d,i){ return color(i); });

    layer.selectAll("rect")
      .data(function(d){ return d; })
      .enter().append("rect")
      .attr("y", function(d) { return y2(d.x[0]); })
      .attr("x", function(d) { return x2(d.y0); })
      .attr("width", function(d) { return x2(d.y); })
      .attr("height", y2.rangeBand())
      .attr("transform", "translate(" + padding*2 + "," + 0 + ")")
      .on("mouseover", function(d){
        div.transition()		
                .duration(200)		
                .style("opacity", .9);		
        div.html("Proportion of " + d.x[1] + " student: " + (d.y*100).toFixed(2) + "%")	
                .style("left", (d3.event.pageX) + "px")		
                .style("top", (d3.event.pageY - 28) + "px");	
      })					
      .on("mouseout", function(d) {		
            div.transition()		
                .duration(500)		
                .style("opacity", 0);	
      });

    svg2.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(" + padding*2 + "," + (height2-padding*1.5) + ")")
      .call(xAxis2);

    svg2.append("g")
      .attr("class", "y axis")
      .attr("transform", "translate(" + padding*2 + "," + 0 + ")")
      .call(yAxis2);

    svg2.append("text")
      .attr("class", "label")
      .attr("x", width2-padding*2.5)
      .attr("y", height2)
      .style("text-anchor", "end")
      .style("font-size", "14px")
      .text("X-axis: Race Distribution");

  }

  // --------------------------------------------------------------------------------------------------------------
  function UpdateRaceByControl(){
    if (brush.empty()){
      UpdateRaceByControl_noBrush();
      return;
    }
    var GroupByControl = {}
    GroupByControl['Private'] = data.filter(function(d,i){return (svg.select('#a' + i)[0][0].className.baseVal != "hidden") && d.Control == 'Private';});
    GroupByControl['Public'] = data.filter(function(d,i){return (svg.select('#a' + i)[0][0].className.baseVal != "hidden") && d.Control == 'Public';});
    var avgWhiteC = {}
    avgWhiteC['Private'] = GroupByControl['Private'].reduce((acc, curRow) => {return acc + (curRow.White.toFixed(4) / (GroupByControl['Private'].length).toFixed(4));},0);
    avgWhiteC['Public'] = GroupByControl['Public'].reduce((acc, curRow) => {return acc + (curRow.White.toFixed(4) / (GroupByControl['Public'].length).toFixed(4));},0);
    var avgBlackC = {}
    avgBlackC['Private'] = GroupByControl['Private'].reduce((acc, curRow) => {return acc + (curRow.Black.toFixed(4) / (GroupByControl['Private'].length).toFixed(4));},0);
    avgBlackC['Public'] = GroupByControl['Public'].reduce((acc, curRow) => {return acc + (curRow.Black.toFixed(4) / (GroupByControl['Public'].length).toFixed(4));},0);
    var avgHispanicC = {}
    avgHispanicC['Private'] = GroupByControl['Private'].reduce((acc, curRow) => {return acc + (curRow.Hispanic.toFixed(4) / (GroupByControl['Private'].length).toFixed(4));},0);
    avgHispanicC['Public'] = GroupByControl['Public'].reduce((acc, curRow) => {return acc + (curRow.Hispanic.toFixed(4) / (GroupByControl['Public'].length).toFixed(4));},0);
    var avgAsianC = {}
    avgAsianC['Private'] = GroupByControl['Private'].reduce((acc, curRow) => {return acc + (curRow.Asian.toFixed(4) / (GroupByControl['Private'].length).toFixed(4));},0);
    avgAsianC['Public'] = GroupByControl['Public'].reduce((acc, curRow) => {return acc + (curRow.Asian.toFixed(4) / (GroupByControl['Public'].length).toFixed(4));},0);
    
    svg2.selectAll("*").remove();  
    option = "Control";
    cell.selectAll("circle").style("fill", function(d) { return color_scatter2(d.Control); });

    d3.select("#scatter_legend").selectAll('*').remove();
    var scatter_legend_container = d3.select("#scatter_legend").append("svg").attr("width", 150).attr("height", height);
    var scatter_legend = scatter_legend_container.selectAll('#scatter_legend')
        .data(d3.set(data.map( function(d) { return d.Control } ) ).values())
        .enter().append('g')
        .attr("class", "legend")
        .attr("transform", function (d, i) {return "translate(0," + (i * 20+padding*2) + ")"});
    scatter_legend.append('rect').attr("x", 0).attr("y", 0)
        .attr("width", 10)
        .attr("height", 10)
        .style("fill", function (d, i) {return color_scatter2(i)});
          
    scatter_legend.append('text').attr("x", 20).attr("y", 10)
          //.attr("dy", ".35em")
        .text(function (d, i) {return d})
        .attr("class", "textselected")
        .style("text-anchor", "start")
        .style("font-size", 15);

    var x2 = d3.scale.linear().range([0, width2-padding]);
    var y2 =d3.scale.ordinal().rangeRoundBands([height2-padding, padding], .1);
    var xAxis2 = d3.svg.axis().scale(x2).orient("bottom");
    var yAxis2 = d3.svg.axis().scale(y2).orient("left");

    var factorsB = [[avgWhiteC, "White"], [avgBlackC, "Black"], [avgHispanicC, "Hispanic"], [avgAsianC, "Asian"]];
    var controls = ["Private", "Public"];
    var layers = d3.layout.stack()(factorsB.map(function(f){
      return controls.map(function(r){
        return {x: [r, f[1]], y: f[0][r]};
      });
    }));
    x2.domain([0,1]).nice();
    y2.domain(layers[0].map(function(d) { return d.x[0]; }));
    var layer = svg2.selectAll(".layers")
      .data(layers)
      .enter().append("g")
      .attr("class", "layer")
      .style("fill", function(d,i){ return color(i); });

    layer.selectAll("rect")
      .data(function(d){ return d; })
      .enter().append("rect")
      .attr("y", function(d) { return y2(d.x[0]); })
      .attr("x", function(d) { return x2(d.y0); })
      .attr("width", function(d) { return x2(d.y); })
      .attr("height", y2.rangeBand())
      .attr("transform", "translate(" + padding*2 + "," + 0 + ")")
      .on("mouseover", function(d){
        div.transition()		
                .duration(200)		
                .style("opacity", .9);		
        div.html("Proportion of " + d.x[1] + " student: " + (d.y*100).toFixed(2) + "%")	
                .style("left", (d3.event.pageX) + "px")		
                .style("top", (d3.event.pageY - 28) + "px");	
      })					
      .on("mouseout", function(d) {		
            div.transition()		
                .duration(500)		
                .style("opacity", 0);	
      });

    svg2.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(" + padding*2 + "," + (height2-padding*1.5) + ")")
      .call(xAxis2);

    svg2.append("g")
      .attr("class", "y axis")
      .attr("transform", "translate(" + padding*2 + "," + 0 + ")")
      .call(yAxis2);
      
    svg2.append("text")
      .attr("class", "label")
      .attr("x", width2-padding*2.5)
      .attr("y", height2)
      .style("text-anchor", "end")
      .style("font-size", "14px")
      .text("X-axis: Race Distribution");
  }

  // Update by Locale ////////////////////////////////////////////////////////////////////////////////////////////
  function UpdateRaceByLocale_noBrush(){
    svg2.selectAll("*").remove();  
    option = "Locale";
    cell.selectAll("circle").style("fill", function(d) { return color_scatter(d.Locale); });

    d3.select("#scatter_legend").selectAll('*').remove();
    var scatter_legend_container = d3.select("#scatter_legend").append("svg").attr("width", 150).attr("height", height);
    var scatter_legend = scatter_legend_container.selectAll('#scatter_legend')
        .data(d3.set(data.map( function(d) { return d.Locale } ) ).values())
        .enter().append('g')
        .attr("class", "legend")
        .attr("transform", function (d, i) {return "translate(0," + (i * 20+padding*2) + ")"});
    scatter_legend.append('rect').attr("x", 0).attr("y", 0)
        .attr("width", 10)
        .attr("height", 10)
        .style("fill", function (d, i) {return color_scatter(i)});
          
    scatter_legend.append('text').attr("x", 20).attr("y", 10)
          //.attr("dy", ".35em")
        .text(function (d, i) {return d})
        .attr("class", "textselected")
        .style("text-anchor", "start")
        .style("font-size", 15); 

    var x2 = d3.scale.linear().range([0, width2-padding]);
    var y2 =d3.scale.ordinal().rangeRoundBands([height2-padding*1.5, padding], .1);
    var xAxis2 = d3.svg.axis().scale(x2).orient("bottom");
    var yAxis2 = d3.svg.axis().scale(y2).orient("left");
    var factorsL = [[avgWhiteL, "White"], [avgBlackL, "Black"], [avgHispanicL, "Hispanic"], [avgAsianL, "Asian"]];
    var locales = ['MidC', 'MidS', 'LargeC', 'LargeS', 'SmallC', 'SmallS', 'FringeT', 'RemoteT', 'FringeR', 'RemoteR', 'DistantT', 'DistantR'];

    var layers = d3.layout.stack()(factorsL.map(function(f){
      return locales.map(function(r){
        return {x: [r,f[1]], y: f[0][r]};
      });
    }));
    x2.domain([0,1]).nice();
    y2.domain(layers[0].map(function(d) { return d.x[0]; }));
    var layer = svg2.selectAll(".layers")
      .data(layers)
      .enter().append("g")
      .attr("class", "layer")
      .style("fill", function(d,i){ return color(i); });

    layer.selectAll("rect")
      .data(function(d){ return d; })
      .enter().append("rect")
      .attr("y", function(d) { return y2(d.x[0]); })
      .attr("x", function(d) { return x2(d.y0); })
      .attr("width", function(d) { return x2(d.y); })
      .attr("height", y2.rangeBand())
      .attr("transform", "translate(" + padding*2 + "," + 0 + ")")
      .on("mouseover", function(d){
        div.transition()		
                .duration(200)		
                .style("opacity", .9);		
        div.html("Proportion of " + d.x[1] + " student: " + (d.y*100).toFixed(2) + "%")	
                .style("left", (d3.event.pageX) + "px")		
                .style("top", (d3.event.pageY - 28) + "px");	
      })					
      .on("mouseout", function(d) {		
            div.transition()		
                .duration(500)		
                .style("opacity", 0);	
      });

    svg2.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(" + padding*2 + "," + (height2-padding*1.5) + ")")
      .call(xAxis2);

    svg2.append("g")
      .attr("class", "y axis")
      .attr("transform", "translate(" + padding*2+ "," + 0 + ")")
      .call(yAxis2);

    svg2.append("text")
      .attr("class", "label")
      .attr("x", width2-padding*2.5)
      .attr("y", height2)
      //.attr("transform", "translate(0,5)")
      .style("text-anchor", "end")
      .style("font-size", "14px")
      .text("X-axis: Race Distribution");
  }
  
  // -------------------------------------------------------------------------------------------------------------------
  function UpdateRaceByLocale(){
    if (brush.empty()){
      UpdateRaceByLocale_noBrush();
      return;
    }

    option = "Locale";
    cell.selectAll("circle").style("fill", function(d) { return color_scatter(d.Locale); });

    d3.select("#scatter_legend").selectAll('*').remove();
    var scatter_legend_container = d3.select("#scatter_legend").append("svg").attr("width", 150).attr("height", height);
    var scatter_legend = scatter_legend_container.selectAll('#scatter_legend')
        .data(d3.set(data.map( function(d) { return d.Locale } ) ).values())
        .enter().append('g')
        .attr("class", "legend")
        .attr("transform", function (d, i) {return "translate(0," + (i * 20+padding*2) + ")"});
    scatter_legend.append('rect').attr("x", 0).attr("y", 0)
        .attr("width", 10)
        .attr("height", 10)
        .style("fill", function (d, i) {return color_scatter(i)});
          
    scatter_legend.append('text').attr("x", 20).attr("y", 10)
          //.attr("dy", ".35em")
        .text(function (d, i) {return d})
        .attr("class", "textselected")
        .style("text-anchor", "start")
        .style("font-size", 15);

    var GroupByLocale = {}
    GroupByLocale['MidC'] = data.filter(function(d,i){return (svg.select('#a' + i)[0][0].className.baseVal != "hidden") && d.Locale == "Mid-size City";});
    GroupByLocale['MidS'] = data.filter(function(d,i){return (svg.select('#a' + i)[0][0].className.baseVal != "hidden") && d.Locale == "Mid-size Suburb";});
    GroupByLocale['LargeC'] = data.filter(function(d,i){return (svg.select('#a' + i)[0][0].className.baseVal != "hidden") && d.Locale == "Large City";});
    GroupByLocale['SmallC'] = data.filter(function(d,i){return (svg.select('#a' + i)[0][0].className.baseVal != "hidden") && d.Locale == "Small City";});
    GroupByLocale['SmallS'] = data.filter(function(d,i){return (svg.select('#a' + i)[0][0].className.baseVal != "hidden") && d.Locale == "Small Suburb";});
    GroupByLocale['LargeS'] = data.filter(function(d,i){return (svg.select('#a' + i)[0][0].className.baseVal != "hidden") && d.Locale == "Large Suburb";});
    GroupByLocale['FringeT'] = data.filter(function(d,i){return (svg.select('#a' + i)[0][0].className.baseVal != "hidden") && d.Locale == "Fringe Town";});
    GroupByLocale['RemoteT'] = data.filter(function(d,i){return (svg.select('#a' + i)[0][0].className.baseVal != "hidden") && d.Locale == "Remote Town";});
    GroupByLocale['FringeR'] = data.filter(function(d,i){return (svg.select('#a' + i)[0][0].className.baseVal != "hidden") && d.Locale == "Fringe Rural";});
    GroupByLocale['RemoteR'] = data.filter(function(d,i){return (svg.select('#a' + i)[0][0].className.baseVal != "hidden") && d.Locale == "Remote Rural";});
    GroupByLocale['DistantT'] = data.filter(function(d,i){return (svg.select('#a' + i)[0][0].className.baseVal != "hidden") && d.Locale == "Distant Town";});
    GroupByLocale['DistantR'] = data.filter(function(d,i){return (svg.select('#a' + i)[0][0].className.baseVal != "hidden") && d.Locale == "Distant Rural";});

    var avgWhiteL = {}
    avgWhiteL['MidC'] = GroupByLocale['MidC'].reduce((acc, curRow) => {return acc + (curRow.White.toFixed(4) / (GroupByLocale['MidC'].length).toFixed(4));},0);
    avgWhiteL['MidS'] = GroupByLocale['MidS'].reduce((acc, curRow) => {return acc + (curRow.White.toFixed(4) / (GroupByLocale['MidS'].length).toFixed(4));},0);
    avgWhiteL['LargeC'] = GroupByLocale['LargeC'].reduce((acc, curRow) => {return acc + (curRow.White.toFixed(4) / (GroupByLocale['LargeC'].length).toFixed(4));},0);
    avgWhiteL['SmallC'] = GroupByLocale['SmallC'].reduce((acc, curRow) => {return acc + (curRow.White.toFixed(4) / (GroupByLocale['SmallC'].length).toFixed(4));},0);
    avgWhiteL['LargeS'] = GroupByLocale['LargeS'].reduce((acc, curRow) => {return acc + (curRow.White.toFixed(4) / (GroupByLocale['LargeS'].length).toFixed(4));},0);
    avgWhiteL['SmallS'] = GroupByLocale['SmallS'].reduce((acc, curRow) => {return acc + (curRow.White.toFixed(4) / (GroupByLocale['SmallS'].length).toFixed(4));},0);
    avgWhiteL['FringeT'] = GroupByLocale['FringeT'].reduce((acc, curRow) => {return acc + (curRow.White.toFixed(4) / (GroupByLocale['FringeT'].length).toFixed(4));},0);
    avgWhiteL['RemoteT'] = GroupByLocale['RemoteT'].reduce((acc, curRow) => {return acc + (curRow.White.toFixed(4) / (GroupByLocale['RemoteT'].length).toFixed(4));},0);
    avgWhiteL['FringeR'] = GroupByLocale['FringeR'].reduce((acc, curRow) => {return acc + (curRow.White.toFixed(4) / (GroupByLocale['FringeR'].length).toFixed(4));},0);
    avgWhiteL['RemoteR'] = GroupByLocale['RemoteR'].reduce((acc, curRow) => {return acc + (curRow.White.toFixed(4) / (GroupByLocale['RemoteR'].length).toFixed(4));},0);
    avgWhiteL['DistantT'] = GroupByLocale['DistantT'].reduce((acc, curRow) => {return acc + (curRow.White.toFixed(4) / (GroupByLocale['DistantT'].length).toFixed(4));},0);
    avgWhiteL['DistantR'] = GroupByLocale['DistantR'].reduce((acc, curRow) => {return acc + (curRow.White.toFixed(4) / (GroupByLocale['DistantR'].length).toFixed(4));},0);
    var avgBlackL = {};
    avgBlackL['MidC'] = GroupByLocale['MidC'].reduce((acc, curRow) => {return acc + (curRow.Black.toFixed(4) / (GroupByLocale['MidC'].length).toFixed(4));},0);
    avgBlackL['MidS'] = GroupByLocale['MidS'].reduce((acc, curRow) => {return acc + (curRow.Black.toFixed(4) / (GroupByLocale['MidS'].length).toFixed(4));},0);
    avgBlackL['LargeC'] = GroupByLocale['LargeC'].reduce((acc, curRow) => {return acc + (curRow.Black.toFixed(4) / (GroupByLocale['LargeC'].length).toFixed(4));},0);
    avgBlackL['SmallC'] = GroupByLocale['SmallC'].reduce((acc, curRow) => {return acc + (curRow.Black.toFixed(4) / (GroupByLocale['SmallC'].length).toFixed(4));},0);
    avgBlackL['LargeS'] = GroupByLocale['LargeS'].reduce((acc, curRow) => {return acc + (curRow.Black.toFixed(4) / (GroupByLocale['LargeS'].length).toFixed(4));},0);
    avgBlackL['SmallS'] = GroupByLocale['SmallS'].reduce((acc, curRow) => {return acc + (curRow.Black.toFixed(4) / (GroupByLocale['SmallS'].length).toFixed(4));},0);
    avgBlackL['FringeT'] = GroupByLocale['FringeT'].reduce((acc, curRow) => {return acc + (curRow.Black.toFixed(4) / (GroupByLocale['FringeT'].length).toFixed(4));},0);
    avgBlackL['RemoteT'] = GroupByLocale['RemoteT'].reduce((acc, curRow) => {return acc + (curRow.Black.toFixed(4) / (GroupByLocale['RemoteT'].length).toFixed(4));},0);
    avgBlackL['FringeR'] = GroupByLocale['FringeR'].reduce((acc, curRow) => {return acc + (curRow.Black.toFixed(4) / (GroupByLocale['FringeR'].length).toFixed(4));},0);
    avgBlackL['RemoteR'] = GroupByLocale['RemoteR'].reduce((acc, curRow) => {return acc + (curRow.Black.toFixed(4) / (GroupByLocale['RemoteR'].length).toFixed(4));},0);
    avgBlackL['DistantT'] = GroupByLocale['DistantT'].reduce((acc, curRow) => {return acc + (curRow.Black.toFixed(4) / (GroupByLocale['DistantT'].length).toFixed(4));},0);
    avgBlackL['DistantR'] = GroupByLocale['DistantR'].reduce((acc, curRow) => {return acc + (curRow.Black.toFixed(4) / (GroupByLocale['DistantR'].length).toFixed(4));},0);
    var avgHispanicL = {};
    avgHispanicL['MidC'] = GroupByLocale['MidC'].reduce((acc, curRow) => {return acc + (curRow.Hispanic.toFixed(4) / (GroupByLocale['MidC'].length).toFixed(4));},0);
    avgHispanicL['MidS'] = GroupByLocale['MidS'].reduce((acc, curRow) => {return acc + (curRow.Hispanic.toFixed(4) / (GroupByLocale['MidS'].length).toFixed(4));},0);
    avgHispanicL['LargeC'] = GroupByLocale['LargeC'].reduce((acc, curRow) => {return acc + (curRow.Hispanic.toFixed(4) / (GroupByLocale['LargeC'].length).toFixed(4));},0);
    avgHispanicL['SmallC'] = GroupByLocale['SmallC'].reduce((acc, curRow) => {return acc + (curRow.Hispanic.toFixed(4) / (GroupByLocale['SmallC'].length).toFixed(4));},0);
    avgHispanicL['LargeS'] = GroupByLocale['LargeS'].reduce((acc, curRow) => {return acc + (curRow.Hispanic.toFixed(4) / (GroupByLocale['LargeS'].length).toFixed(4));},0);
    avgHispanicL['SmallS'] = GroupByLocale['SmallS'].reduce((acc, curRow) => {return acc + (curRow.Hispanic.toFixed(4) / (GroupByLocale['SmallS'].length).toFixed(4));},0);
    avgHispanicL['FringeT'] = GroupByLocale['FringeT'].reduce((acc, curRow) => {return acc + (curRow.Hispanic.toFixed(4) / (GroupByLocale['FringeT'].length).toFixed(4));},0);
    avgHispanicL['RemoteT'] = GroupByLocale['RemoteT'].reduce((acc, curRow) => {return acc + (curRow.Hispanic.toFixed(4) / (GroupByLocale['RemoteT'].length).toFixed(4));},0);
    avgHispanicL['FringeR'] = GroupByLocale['FringeR'].reduce((acc, curRow) => {return acc + (curRow.Hispanic.toFixed(4) / (GroupByLocale['FringeR'].length).toFixed(4));},0);
    avgHispanicL['RemoteR'] = GroupByLocale['RemoteR'].reduce((acc, curRow) => {return acc + (curRow.Hispanic.toFixed(4) / (GroupByLocale['RemoteR'].length).toFixed(4));},0);
    avgHispanicL['DistantT'] = GroupByLocale['DistantT'].reduce((acc, curRow) => {return acc + (curRow.Hispanic.toFixed(4) / (GroupByLocale['DistantT'].length).toFixed(4));},0);
    avgHispanicL['DistantR'] = GroupByLocale['DistantR'].reduce((acc, curRow) => {return acc + (curRow.Hispanic.toFixed(4) / (GroupByLocale['DistantR'].length).toFixed(4));},0);
    var avgAsianL = {};
    avgAsianL['MidC'] = GroupByLocale['MidC'].reduce((acc, curRow) => {return acc + (curRow.Asian.toFixed(4) / (GroupByLocale['MidC'].length).toFixed(4));},0);
    avgAsianL['MidS'] = GroupByLocale['MidS'].reduce((acc, curRow) => {return acc + (curRow.Asian.toFixed(4) / (GroupByLocale['MidS'].length).toFixed(4));},0);
    avgAsianL['LargeC'] = GroupByLocale['LargeC'].reduce((acc, curRow) => {return acc + (curRow.Asian.toFixed(4) / (GroupByLocale['LargeC'].length).toFixed(4));},0);
    avgAsianL['SmallC'] = GroupByLocale['SmallC'].reduce((acc, curRow) => {return acc + (curRow.Asian.toFixed(4) / (GroupByLocale['SmallC'].length).toFixed(4));},0);
    avgAsianL['LargeS'] = GroupByLocale['LargeS'].reduce((acc, curRow) => {return acc + (curRow.Asian.toFixed(4) / (GroupByLocale['LargeS'].length).toFixed(4));},0);
    avgAsianL['SmallS'] = GroupByLocale['SmallS'].reduce((acc, curRow) => {return acc + (curRow.Asian.toFixed(4) / (GroupByLocale['SmallS'].length).toFixed(4));},0);
    avgAsianL['FringeT'] = GroupByLocale['FringeT'].reduce((acc, curRow) => {return acc + (curRow.Asian.toFixed(4) / (GroupByLocale['FringeT'].length).toFixed(4));},0);
    avgAsianL['RemoteT'] = GroupByLocale['RemoteT'].reduce((acc, curRow) => {return acc + (curRow.Asian.toFixed(4) / (GroupByLocale['RemoteT'].length).toFixed(4));},0);
    avgAsianL['FringeR'] = GroupByLocale['FringeR'].reduce((acc, curRow) => {return acc + (curRow.Asian.toFixed(4) / (GroupByLocale['FringeR'].length).toFixed(4));},0);
    avgAsianL['RemoteR'] = GroupByLocale['RemoteR'].reduce((acc, curRow) => {return acc + (curRow.Asian.toFixed(4) / (GroupByLocale['RemoteR'].length).toFixed(4));},0);
    avgAsianL['DistantT'] = GroupByLocale['DistantT'].reduce((acc, curRow) => {return acc + (curRow.Asian.toFixed(4) / (GroupByLocale['DistantT'].length).toFixed(4));},0);
    avgAsianL['DistantR'] = GroupByLocale['DistantR'].reduce((acc, curRow) => {return acc + (curRow.Asian.toFixed(4) / (GroupByLocale['DistantR'].length).toFixed(4));},0);
    
    svg2.selectAll("*").remove();  
    var x2 = d3.scale.linear().range([0, width2-padding]);
    var y2 =d3.scale.ordinal().rangeRoundBands([height2-padding*1.5, padding], .1);
    var xAxis2 = d3.svg.axis().scale(x2).orient("bottom");
    var yAxis2 = d3.svg.axis().scale(y2).orient("left");

    var factorsL = [[avgWhiteL, "White"], [avgBlackL, "Black"], [avgHispanicL, "Hispanic"], [avgAsianL, "Asian"]];
    var locales = ['MidC', 'MidS', 'LargeC', 'LargeS', 'SmallC', 'SmallS', 'FringeT', 'RemoteT', 'FringeR', 'RemoteR', 'DistantT', 'DistantR'];

    var layers = d3.layout.stack()(factorsL.map(function(f){
      return locales.map(function(r){
        return {x:[r,f[1]], y: f[0][r]};
      });
    }));
    x2.domain([0,1]).nice();
    y2.domain(layers[0].map(function(d) { return d.x[0]; }));
    var layer = svg2.selectAll(".layers")
      .data(layers)
      .enter().append("g")
      .attr("class", "layer")
      .style("fill", function(d,i){ return color(i); });

    layer.selectAll("rect")
      .data(function(d){ return d; })
      .enter().append("rect")
      .attr("y", function(d) { return y2(d.x[0]); })
      .attr("x", function(d) { return x2(d.y0); })
      .attr("width", function(d) { return x2(d.y); })
      .attr("height", y2.rangeBand())
      .attr("transform", "translate(" + padding*2 + "," + 0 + ")")
      .on("mouseover", function(d){
        div.transition()		
                .duration(200)		
                .style("opacity", .9);		
        div.html("Proportion of " + d.x[1] + " student: " + (d.y*100).toFixed(2) + "%")	
                .style("left", (d3.event.pageX) + "px")		
                .style("top", (d3.event.pageY - 28) + "px");	
      })					
      .on("mouseout", function(d) {		
            div.transition()		
                .duration(500)		
                .style("opacity", 0);	
      });

    svg2.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(" + padding*2 + "," + (height2-padding*1.5) + ")")
      .call(xAxis2);

    svg2.append("g")
      .attr("class", "y axis")
      .attr("transform", "translate(" + padding*2+ "," + 0 + ")")
      .call(yAxis2);

    svg2.append("text")
      .attr("class", "label")
      .attr("x", width2-padding*2.5)
      .attr("y", height2)
      .style("text-anchor", "end")
      .style("font-size", "14px")
      .text("X-axis: Race Distribution");
  }

  // Update by Region ////////////////////////////////////////////////////////////////////////////////////////////
  function UpdateRaceByRegion_noBrush(){
    svg2.selectAll("*").remove(); 
    option = "Region";
    cell.selectAll("circle").style("fill", function(d) { return color_scatter1(d.Region); }); 

    d3.select("#scatter_legend").selectAll('*').remove();
    var scatter_legend_container = d3.select("#scatter_legend").append("svg").attr("width", 150).attr("height", height);
    var scatter_legend = scatter_legend_container.selectAll('#scatter_legend')
        .data(d3.set(data.map( function(d) { return d.Region } ) ).values())
        .enter().append('g')
        .attr("class", "legend")
        .attr("transform", function (d, i) {return "translate(0," + (i * 20+padding*2) + ")"});
    scatter_legend.append('rect').attr("x", 0).attr("y", 0)
        .attr("width", 10)
        .attr("height", 10)
        .style("fill", function (d, i) {return color_scatter1(i)});
          
    scatter_legend.append('text').attr("x", 20).attr("y", 10)
          //.attr("dy", ".35em")
        .text(function (d, i) {return d})
        .attr("class", "textselected")
        .style("text-anchor", "start")
        .style("font-size", 15);

    var x2 = d3.scale.linear().range([0, width2-padding]);
    var y2 =d3.scale.ordinal().rangeRoundBands([height2-padding*1.5, padding], .1);
    var xAxis2 = d3.svg.axis().scale(x2).orient("bottom");
    var yAxis2 = d3.svg.axis().scale(y2).orient("left");

    var factorsR = [[avgWhiteR, "White"], [avgBlackR, "Black"], [avgHispanicR, "Hispanic"], [avgAsianR, "Asian"]];
    var regions = ["Lakes", "Rocky", "Plains", "England", "FarWest", "Outlying", "Atlantic", "Southeast", "Southwest"];
    var layers = d3.layout.stack()(factorsR.map(function(f){
      return regions.map(function(r){
        return {x: [r,f[1]], y: f[0][r]};
      });
    }));
    x2.domain([0,1]).nice();
    y2.domain(layers[0].map(function(d) { return d.x[0]; }));
    var layer = svg2.selectAll(".layers")
      .data(layers)
      .enter().append("g")
      .attr("class", "layer")
      .style("fill", function(d,i){ return color(i); });

    layer.selectAll("rect")
      .data(function(d){ return d; })
      .enter().append("rect")
      .attr("y", function(d) { return y2(d.x[0]); })
      .attr("x", function(d) { return x2(d.y0); })
      .attr("width", function(d) { return x2(d.y); })
      .attr("height", y2.rangeBand())
      .attr("transform", "translate(" + padding*2 + "," + 0 + ")")
      .on("mouseover", function(d){
        div.transition()		
                .duration(200)		
                .style("opacity", .9);		
        div.html("Proportion of " + d.x[1] + " student: " + (d.y*100).toFixed(2) + "%")	
                .style("left", (d3.event.pageX) + "px")		
                .style("top", (d3.event.pageY - 28) + "px");	
      })					
      .on("mouseout", function(d) {		
            div.transition()		
                .duration(500)		
                .style("opacity", 0);	
      });

    svg2.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(" + padding*2 + "," + (height2-padding*1.5) + ")")
      .call(xAxis2);

    svg2.append("g")
      .attr("class", "y axis")
      .attr("transform", "translate(" + padding*2+ "," + 0 + ")")
      .call(yAxis2);

    svg2.append("text")
      .attr("class", "label")
      .attr("x", width2-padding*2.5)
      .attr("y", height2)
      .style("text-anchor", "end")
      .style("font-size", "14px")
      .text("X-axis: Race Distribution");
  }

  // -------------------------------------------------------------------------------------------------------------
  function UpdateRaceByRegion(){
    if (brush.empty()){
      UpdateRaceByRegion_noBrush();
      return;
    }
    var GroupByRegion = {}
    GroupByRegion["Lakes"] = data.filter(function(d,i){return (svg.select('#a' + i)[0][0].className.baseVal != "hidden") && d.Region == 'Great Lakes';});
    GroupByRegion["Rocky"] = data.filter(function(d,i){return (svg.select('#a' + i)[0][0].className.baseVal != "hidden") && d.Region == 'Rocky Mountains';});
    GroupByRegion["Plains"] = data.filter(function(d,i){return (svg.select('#a' + i)[0][0].className.baseVal != "hidden") && d.Region == 'Great Plains';});
    GroupByRegion["England"] = data.filter(function(d,i){return (svg.select('#a' + i)[0][0].className.baseVal != "hidden") && d.Region == 'New England';});
    GroupByRegion["FarWest"] = data.filter(function(d,i){return (svg.select('#a' + i)[0][0].className.baseVal != "hidden") && d.Region == 'Far West';});
    GroupByRegion["Outlying"] = data.filter(function(d,i){return (svg.select('#a' + i)[0][0].className.baseVal != "hidden") && d.Region == 'Outlying Areas';});
    GroupByRegion["Atlantic"] = data.filter(function(d,i){return (svg.select('#a' + i)[0][0].className.baseVal != "hidden") && d.Region == 'Mid-Atlantic';});
    GroupByRegion["Southeast"] = data.filter(function(d,i){return (svg.select('#a' + i)[0][0].className.baseVal != "hidden") && d.Region == 'Southeast';});
    GroupByRegion["Southwest"] = data.filter(function(d,i){return (svg.select('#a' + i)[0][0].className.baseVal != "hidden") && d.Region == 'Southwest';});
    var avgWhiteR = {}
    avgWhiteR["Lakes"] = GroupByRegion["Lakes"].reduce((acc, curRow) => {return acc + (curRow.White.toFixed(4) / (GroupByRegion["Lakes"].length).toFixed(4)); },0);
    avgWhiteR["Rocky"] = GroupByRegion["Rocky"].reduce((acc, curRow) => {return acc + (curRow.White.toFixed(4) / (GroupByRegion["Rocky"].length).toFixed(4)); },0);
    avgWhiteR["Plains"] = GroupByRegion["Plains"].reduce((acc, curRow) => {return acc + (curRow.White.toFixed(4) / (GroupByRegion["Plains"].length).toFixed(4)); },0);
    avgWhiteR["England"] = GroupByRegion["England"].reduce((acc, curRow) => {return acc + (curRow.White.toFixed(4) / (GroupByRegion["England"].length).toFixed(4)); },0);
    avgWhiteR["FarWest"] = GroupByRegion["FarWest"].reduce((acc, curRow) => {return acc + (curRow.White.toFixed(4) / (GroupByRegion["FarWest"].length).toFixed(4)); },0);
    avgWhiteR["Outlying"] = GroupByRegion["Outlying"].reduce((acc, curRow) => {return acc + (curRow.White.toFixed(4) / (GroupByRegion["Outlying"].length).toFixed(4)); },0);
    avgWhiteR["Atlantic"] = GroupByRegion["Atlantic"].reduce((acc, curRow) => {return acc + (curRow.White.toFixed(4) / (GroupByRegion["Atlantic"].length).toFixed(4)); },0);
    avgWhiteR["Southeast"] = GroupByRegion["Southeast"].reduce((acc, curRow) => {return acc + (curRow.White.toFixed(4) / (GroupByRegion["Southeast"].length).toFixed(4)); },0);
    avgWhiteR["Southwest"] = GroupByRegion["Southwest"].reduce((acc, curRow) => {return acc + (curRow.White.toFixed(4) / (GroupByRegion["Southwest"].length).toFixed(4)); },0);

    var avgBlackR = {}
    avgBlackR["Lakes"] = GroupByRegion["Lakes"].reduce((acc, curRow) => {return acc + (curRow.Black.toFixed(4) / (GroupByRegion["Lakes"].length).toFixed(4)); },0);
    avgBlackR["Rocky"] = GroupByRegion["Rocky"].reduce((acc, curRow) => {return acc + (curRow.Black.toFixed(4) / (GroupByRegion["Rocky"].length).toFixed(4)); },0);
    avgBlackR["Plains"] = GroupByRegion["Plains"].reduce((acc, curRow) => {return acc + (curRow.Black.toFixed(4) / (GroupByRegion["Plains"].length).toFixed(4)); },0);
    avgBlackR["England"] = GroupByRegion["England"].reduce((acc, curRow) => {return acc + (curRow.Black.toFixed(4) / (GroupByRegion["England"].length).toFixed(4)); },0);
    avgBlackR["FarWest"] = GroupByRegion["FarWest"].reduce((acc, curRow) => {return acc + (curRow.Black.toFixed(4) / (GroupByRegion["FarWest"].length).toFixed(4)); },0);
    avgBlackR["Outlying"] = GroupByRegion["Outlying"].reduce((acc, curRow) => {return acc + (curRow.Black.toFixed(4) / (GroupByRegion["Outlying"].length).toFixed(4)); },0);
    avgBlackR["Atlantic"] = GroupByRegion["Atlantic"].reduce((acc, curRow) => {return acc + (curRow.Black.toFixed(4) / (GroupByRegion["Atlantic"].length).toFixed(4)); },0);
    avgBlackR["Southeast"] = GroupByRegion["Southeast"].reduce((acc, curRow) => {return acc + (curRow.Black.toFixed(4) / (GroupByRegion["Southeast"].length).toFixed(4)); },0);
    avgBlackR["Southwest"] = GroupByRegion["Southwest"].reduce((acc, curRow) => {return acc + (curRow.Black.toFixed(4) / (GroupByRegion["Southwest"].length).toFixed(4)); },0);
    
    var avgHispanicR = {}
    avgHispanicR["Lakes"] = GroupByRegion["Lakes"].reduce((acc, curRow) => {return acc + (curRow.Hispanic.toFixed(4) / (GroupByRegion["Lakes"].length).toFixed(4)); },0);
    avgHispanicR["Rocky"] = GroupByRegion["Rocky"].reduce((acc, curRow) => {return acc + (curRow.Hispanic.toFixed(4) / (GroupByRegion["Rocky"].length).toFixed(4)); },0);
    avgHispanicR["Plains"] = GroupByRegion["Plains"].reduce((acc, curRow) => {return acc + (curRow.Hispanic.toFixed(4) / (GroupByRegion["Plains"].length).toFixed(4)); },0);
    avgHispanicR["England"] = GroupByRegion["England"].reduce((acc, curRow) => {return acc + (curRow.Hispanic.toFixed(4) / (GroupByRegion["England"].length).toFixed(4)); },0);
    avgHispanicR["FarWest"] = GroupByRegion["FarWest"].reduce((acc, curRow) => {return acc + (curRow.Hispanic.toFixed(4) / (GroupByRegion["FarWest"].length).toFixed(4)); },0);
    avgHispanicR["Outlying"] = GroupByRegion["Outlying"].reduce((acc, curRow) => {return acc + (curRow.Hispanic.toFixed(4) / (GroupByRegion["Outlying"].length).toFixed(4)); },0);
    avgHispanicR["Atlantic"] = GroupByRegion["Atlantic"].reduce((acc, curRow) => {return acc + (curRow.Hispanic.toFixed(4) / (GroupByRegion["Atlantic"].length).toFixed(4)); },0);
    avgHispanicR["Southeast"] = GroupByRegion["Southeast"].reduce((acc, curRow) => {return acc + (curRow.Hispanic.toFixed(4) / (GroupByRegion["Southeast"].length).toFixed(4)); },0);
    avgHispanicR["Southwest"] = GroupByRegion["Southwest"].reduce((acc, curRow) => {return acc + (curRow.Hispanic.toFixed(4) / (GroupByRegion["Southwest"].length).toFixed(4)); },0);
    
    var avgAsianR = {}
    avgAsianR["Lakes"] = GroupByRegion["Lakes"].reduce((acc, curRow) => {return acc + (curRow.Asian.toFixed(4) / (GroupByRegion["Lakes"].length).toFixed(4)); },0);
    avgAsianR["Rocky"] = GroupByRegion["Rocky"].reduce((acc, curRow) => {return acc + (curRow.Asian.toFixed(4) / (GroupByRegion["Rocky"].length).toFixed(4)); },0);
    avgAsianR["Plains"] = GroupByRegion["Plains"].reduce((acc, curRow) => {return acc + (curRow.Asian.toFixed(4) / (GroupByRegion["Plains"].length).toFixed(4)); },0);
    avgAsianR["England"] = GroupByRegion["England"].reduce((acc, curRow) => {return acc + (curRow.Asian.toFixed(4) / (GroupByRegion["England"].length).toFixed(4)); },0);
    avgAsianR["FarWest"] = GroupByRegion["FarWest"].reduce((acc, curRow) => {return acc + (curRow.Asian.toFixed(4) / (GroupByRegion["FarWest"].length).toFixed(4)); },0);
    avgAsianR["Outlying"] = GroupByRegion["Outlying"].reduce((acc, curRow) => {return acc + (curRow.Asian.toFixed(4) / (GroupByRegion["Outlying"].length).toFixed(4)); },0);
    avgAsianR["Atlantic"] = GroupByRegion["Atlantic"].reduce((acc, curRow) => {return acc + (curRow.Asian.toFixed(4) / (GroupByRegion["Atlantic"].length).toFixed(4)); },0);
    avgAsianR["Southeast"] = GroupByRegion["Southeast"].reduce((acc, curRow) => {return acc + (curRow.Asian.toFixed(4) / (GroupByRegion["Southeast"].length).toFixed(4)); },0);
    avgAsianR["Southwest"] = GroupByRegion["Southwest"].reduce((acc, curRow) => {return acc + (curRow.Asian.toFixed(4) / (GroupByRegion["Southwest"].length).toFixed(4)); },0);
    
    svg2.selectAll("*").remove(); 
    option = "Region";
    cell.selectAll("circle").style("fill", function(d) { return color_scatter1(d.Region); }); 

    d3.select("#scatter_legend").selectAll('*').remove();
    var scatter_legend_container = d3.select("#scatter_legend").append("svg").attr("width", 150).attr("height", height);
    var scatter_legend = scatter_legend_container.selectAll('#scatter_legend')
        .data(d3.set(data.map( function(d) { return d.Region } ) ).values())
        .enter().append('g')
        .attr("class", "legend")
        .attr("transform", function (d, i) {return "translate(0," + (i * 20+padding*2) + ")"});
    scatter_legend.append('rect').attr("x", 0).attr("y", 0)
        .attr("width", 10)
        .attr("height", 10)
        .style("fill", function (d, i) {return color_scatter1(i)});
          
    scatter_legend.append('text').attr("x", 20).attr("y", 10)
          //.attr("dy", ".35em")
        .text(function (d, i) {return d})
        .attr("class", "textselected")
        .style("text-anchor", "start")
        .style("font-size", 15);

    var x2 = d3.scale.linear().range([0, width2-padding]);
    var y2 =d3.scale.ordinal().rangeRoundBands([height2-padding*1.5, padding], .1);
    var xAxis2 = d3.svg.axis().scale(x2).orient("bottom");
    var yAxis2 = d3.svg.axis().scale(y2).orient("left");
    
    var factorsR = [[avgWhiteR, "White"], [avgBlackR, "Black"], [avgHispanicR, "Hispanic"], [avgAsianR, "Asian"]];
    var regions = ["Lakes", "Rocky", "Plains", "England", "FarWest", "Outlying", "Atlantic", "Southeast", "Southwest"];
    var layers = d3.layout.stack()(factorsR.map(function(f){
        return regions.map(function(r){
        return {x: [r,f[1]], y: f[0][r]};
      });
    }));
    x2.domain([0,1]).nice();
    y2.domain(layers[0].map(function(d) { return d.x[0]; }));
    var layer = svg2.selectAll(".layers")
      .data(layers)
      .enter().append("g")
      .attr("class", "layer")
      .style("fill", function(d,i){ return color(i); });
  
    layer.selectAll("rect")
      .data(function(d){ return d; })
      .enter().append("rect")
      .attr("y", function(d) { return y2(d.x[0]); })
      .attr("x", function(d) { return x2(d.y0); })
      .attr("width", function(d) { return x2(d.y); })
      .attr("height", y2.rangeBand())
      .attr("transform", "translate(" + padding*2 + "," + 0 + ")")
      .on("mouseover", function(d){
        div.transition()		
            .duration(200)		
            .style("opacity", .9);		
        div.html("Proportion of " + d.x[1] + " student: " + (d.y*100).toFixed(2) + "%")	
            .style("left", (d3.event.pageX) + "px")		
            .style("top", (d3.event.pageY - 28) + "px");	
      })					
      .on("mouseout", function(d) {		
        div.transition()		
            .duration(500)		
            .style("opacity", 0);	
      });
    
    svg2.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(" + padding*2 + "," + (height2-padding*1.5) + ")")
      .call(xAxis2);
    
    svg2.append("g")
      .attr("class", "y axis")
      .attr("transform", "translate(" + padding*2+ "," + 0 + ")")
      .call(yAxis2);

    svg2.append("text")
      .attr("class", "label")
      .attr("x", width2-padding*2.5)
      .attr("y", height2)
      .style("text-anchor", "end")
      .style("font-size", "14px")
      .text("X-axis: Race Distribution");
  }
});

function cross(a, b) {
  var c = [], n = a.length, m = b.length, i, j;
  for (i = -1; ++i < n;) for (j = -1; ++j < m;) c.push({x: a[i], i: i, y: b[j], j: j});
  return c;
}


