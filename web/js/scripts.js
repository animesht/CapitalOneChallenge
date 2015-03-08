var margin = {top: 20, right: 20, bottom: 30, left: 40},
    width = 600 - margin.left - margin.right,
    height = 300 - margin.top - margin.bottom;

var x = d3.scale.ordinal()
    .rangeRoundBands([0, width], .3);

var y = d3.scale.linear()
    .range([height, 0]);

var xAxis = d3.svg.axis()
    .scale(x)
    .orient("bottom");

var yAxis = d3.svg.axis()
    .scale(y)
    .orient("left")
    .ticks(10, "");

var svg = d3.select("#add").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

d3.tsv("data/data.tsv", type, function(error, data) {
  x.domain(data.map(function(d) { return d.letter; }));
  y.domain([0, d3.max(data, function(d) { return d.frequency; })]);

  svg.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis);

  svg.append("g")
      .attr("class", "y axis")
      .call(yAxis)
    .append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 6)
      .attr("dy", ".71em")
      .style("text-anchor", "end")
      .text("Tweets");

  svg.selectAll(".bar")
      .data(data)
    .enter().append("rect")
      .attr("class", "bar")
      .attr("x", function(d) { return x(d.letter); })
      .attr("width", x.rangeBand())
      .attr("y", function(d) { return y(d.frequency); })
      .attr("height", function(d) { return height - y(d.frequency); });

});

function type(d) {
  d.frequency = +d.frequency;
  return d;
}


	function tooltipHtml(n, d){	/* function to create html content string in tooltip div. */
		return "<h4>"+n+"</h4><br>"+
			+(d.tweets)+" tweets";
	}
	var sdata = {"GA": 1337, "WA": 2540, "DE": 229, "DC": 1624, "WI": 809, "WV": 161, "HI": 365, "FL": 2609, "WY": 60, "NH": 158, "NJ": 1783, "NM": 171, "TX": 5152, "LA": 1722, "NC": 1313, "ND": 402, "NE": 625, "TN": 1107, "NY": 11073, "PA": 1725, "RI": 420, "NV": 318, "VA": 1451, "CO": 971, "CA": 7408, "AL": 695, "AR": 718, "VT": 92, "IL": 2114, "AK": 130, "IN": 1427, "IA": 731, "OK": 580, "AZ": 830, "ID": 216, "CT": 666, "ME": 300, "MD": 1010, "MA": 1561, "OH": 1833, "UT": 411, "MO": 852, "MN": 980, "MI": 1303, "KS": 888, "MT": 140, "MS": 247, "SC": 575, "KY": 696, "OR": 949, "SD": 116}
	var sampleData ={};	/* Sample random data. */	
	["HI", "AK", "FL", "SC", "GA", "AL", "NC", "TN", "RI", "CT", "MA",
	"ME", "NH", "VT", "NY", "NJ", "PA", "DE", "MD", "WV", "KY", "OH", 
	"MI", "WY", "MT", "ID", "WA", "DC", "TX", "CA", "AZ", "NV", "UT", 
	"CO", "NM", "OR", "ND", "SD", "NE", "IA", "MS", "IN", "IL", "MN", 
	"WI", "MO", "AR", "OK", "KS", "LS", "VA"]
		.forEach(function(d){ 
			var tweets = sdata[d];
				/*low=Math.round(100*Math.random()), 
				mid=Math.round(100*Math.random()), 
				high=Math.round(100*Math.random());*/
			sampleData[d]={tweets:tweets, color:d3.interpolate("#C4F2FF", "#05A9DA")(tweets/1500)}; 
		});
	
	uStates.draw("#statesvg", sampleData, tooltipHtml);

InitChart();

function InitChart() {

  var lineData = [
{'x': 130,'y': 6},
{'x': 131,'y': 2},
{'x': 132,'y': 4},
{'x': 133,'y': 3},
{'x': 134,'y': 2},
{'x': 135,'y': 2},
{'x': 136,'y': 2},
{'x': 137,'y': 5},
{'x': 138,'y': 3},
{'x': 139,'y': 2},
{'x': 140,'y': 8},
{'x': 141,'y': 17},
{'x': 142,'y': 7},
{'x': 143,'y': 2},
{'x': 144,'y': 4},
{'x': 146,'y': 1},
{'x': 147,'y': 5},
{'x': 148,'y': 2},
{'x': 149,'y': 2},
{'x': 150,'y': 3},
{'x': 151,'y': 1},
{'x': 152,'y': 2},
{'x': 153,'y': 2},
{'x': 154,'y': 4},
{'x': 156,'y': 4},
{'x': 158,'y': 2},
{'x': 159,'y': 5},
{'x': 200,'y': 2},
{'x': 202,'y': 3},
{'x': 203,'y': 3},
{'x': 204,'y': 2},
{'x': 205,'y': 1},
{'x': 206,'y': 1},
{'x': 207,'y': 2},
{'x': 208,'y': 4},
{'x': 209,'y': 2},
{'x': 210,'y': 2},
{'x': 212,'y': 1},
{'x': 213,'y': 1},
{'x': 214,'y': 16},
{'x': 215,'y': 20},
{'x': 216,'y': 28},
{'x': 217,'y': 16},
{'x': 218,'y': 6},
{'x': 219,'y': 10},
{'x': 220,'y': 4},
{'x': 221,'y': 7},
{'x': 222,'y': 3},
{'x': 223,'y': 1},
{'x': 224,'y': 4},
{'x': 225,'y': 3},
{'x': 226,'y': 2},
{'x': 227,'y': 1},
{'x': 228,'y': 1},
{'x': 229,'y': 4},
{'x': 230,'y': 5},
{'x': 232,'y': 1},
{'x': 233,'y': 2},
{'x': 234,'y': 1},
{'x': 235,'y': 1},
{'x': 237,'y': 5},
{'x': 238,'y': 3},
{'x': 239,'y': 9},
{'x': 240,'y': 4},
{'x': 241,'y': 9},
{'x': 242,'y': 30},
{'x': 243,'y': 106},
{'x': 244,'y': 81},
{'x': 245,'y': 43},
{'x': 246,'y': 30},
{'x': 247,'y': 18},
{'x': 248,'y': 13},
{'x': 249,'y': 19},
{'x': 250,'y': 6},
{'x': 251,'y': 20},
{'x': 252,'y': 10},
{'x': 253,'y': 21},
{'x': 254,'y': 20},
{'x': 255,'y': 9},
{'x': 256,'y': 10},
{'x': 257,'y': 10},
{'x': 258,'y': 10},
{'x': 259,'y': 12},
{'x': 300,'y': 5},
{'x': 301,'y': 3},
{'x': 302,'y': 2},
{'x': 303,'y': 7},
{'x': 304,'y': 4},
{'x': 305,'y': 1},
{'x': 306,'y': 4},
{'x': 308,'y': 2},
{'x': 309,'y': 2},
{'x': 310,'y': 1},
{'x': 311,'y': 2},
{'x': 312,'y': 2},
{'x': 313,'y': 2},
{'x': 314,'y': 2},
{'x': 315,'y': 1},
{'x': 316,'y': 3},
{'x': 317,'y': 1},
{'x': 318,'y': 5},
{'x': 319,'y': 2},
{'x': 320,'y': 3},
{'x': 321,'y': 2},
{'x': 322,'y': 1},
{'x': 323,'y': 4},
{'x': 324,'y': 15},
{'x': 325,'y': 109},
{'x': 326,'y': 158},
{'x': 327,'y': 89},
{'x': 328,'y': 54},
{'x': 329,'y': 42},
{'x': 330,'y': 34},
{'x': 331,'y': 32},
{'x': 332,'y': 20},
{'x': 333,'y': 18},
{'x': 334,'y': 10},
{'x': 335,'y': 7},
{'x': 336,'y': 7},
{'x': 337,'y': 9},
{'x': 338,'y': 5},
{'x': 339,'y': 8},
{'x': 340,'y': 7},
{'x': 341,'y': 4},
{'x': 342,'y': 5},
{'x': 343,'y': 4},
{'x': 344,'y': 4},
{'x': 345,'y': 11},
{'x': 346,'y': 13},
{'x': 347,'y': 11},
{'x': 348,'y': 9},
{'x': 349,'y': 4},
{'x': 350,'y': 5},
{'x': 351,'y': 6},
{'x': 352,'y': 4},
{'x': 353,'y': 3},
{'x': 354,'y': 6},
{'x': 355,'y': 6},
{'x': 356,'y': 1},
{'x': 357,'y': 9},
{'x': 358,'y': 8},
{'x': 359,'y': 7},
{'x': 400,'y': 3},
{'x': 401,'y': 3},
{'x': 402,'y': 1},
{'x': 403,'y': 3},
{'x': 404,'y': 4},
{'x': 405,'y': 3},
{'x': 406,'y': 7},
{'x': 407,'y': 6},
{'x': 408,'y': 1},
{'x': 409,'y': 7},
{'x': 410,'y': 2},
{'x': 411,'y': 5},
{'x': 412,'y': 5},
{'x': 413,'y': 3},
{'x': 415,'y': 3},
{'x': 416,'y': 1},
{'x': 417,'y': 1},
{'x': 418,'y': 1},
{'x': 419,'y': 2},
{'x': 420,'y': 3},
{'x': 421,'y': 2},
{'x': 422,'y': 1},
{'x': 423,'y': 3},
{'x': 424,'y': 7},
{'x': 425,'y': 5},
{'x': 426,'y': 5},
{'x': 427,'y': 3},
{'x': 428,'y': 4},
{'x': 430,'y': 56},
{'x': 431,'y': 234},
{'x': 432,'y': 210},
{'x': 433,'y': 158},
{'x': 434,'y': 102},
{'x': 435,'y': 68},
{'x': 436,'y': 31},
{'x': 437,'y': 24},
{'x': 438,'y': 24},
{'x': 439,'y': 28},
{'x': 440,'y': 15},
{'x': 441,'y': 13},
{'x': 442,'y': 46},
{'x': 443,'y': 171},
{'x': 444,'y': 154},
{'x': 445,'y': 112},
{'x': 446,'y': 81},
{'x': 447,'y': 72},
{'x': 448,'y': 65},
{'x': 449,'y': 33},
{'x': 450,'y': 24},
{'x': 451,'y': 24},
{'x': 452,'y': 27},
{'x': 453,'y': 25},
{'x': 454,'y': 12},
{'x': 455,'y': 18},
{'x': 456,'y': 15},
{'x': 457,'y': 15},
{'x': 458,'y': 10},
{'x': 459,'y': 15},
{'x': 500,'y': 13},
{'x': 501,'y': 13},
{'x': 502,'y': 9},
{'x': 503,'y': 19},
{'x': 504,'y': 96},
{'x': 505,'y': 576},
{'x': 506,'y': 618},
{'x': 507,'y': 415},
{'x': 508,'y': 312},
{'x': 509,'y': 250},
{'x': 510,'y': 206},
{'x': 511,'y': 157},
{'x': 512,'y': 160},
{'x': 513,'y': 126},
{'x': 514,'y': 115},
{'x': 515,'y': 102},
{'x': 516,'y': 81},
{'x': 517,'y': 64},
{'x': 518,'y': 67},
{'x': 519,'y': 64},
{'x': 520,'y': 51},
{'x': 521,'y': 45},
{'x': 522,'y': 46},
{'x': 523,'y': 35},
{'x': 524,'y': 47},
{'x': 525,'y': 39},
{'x': 526,'y': 27},
{'x': 527,'y': 38},
{'x': 528,'y': 29},
{'x': 529,'y': 23},
{'x': 530,'y': 24}];

  var vis = d3.select("#visualization"),
    WIDTH = 600,
    HEIGHT = 500,
    MARGINS = {
      top: 20,
      right: 20,
      bottom: 20,
      left: 50
    },
    xRange = d3.scale.linear().range([MARGINS.left, WIDTH - MARGINS.right]).domain([d3.min(lineData, function (d) {
        return d.x;
      }),
      d3.max(lineData, function (d) {
        return d.x;
      })
    ]),

    yRange = d3.scale.linear().range([HEIGHT - MARGINS.top, MARGINS.bottom]).domain([d3.min(lineData, function (d) {
        return d.y;
      }),
      d3.max(lineData, function (d) {
        return d.y;
      })
    ]),

    xAxis = d3.svg.axis()
      .scale(xRange)
      .tickSize(5)
      .tickSubdivide(true),

    yAxis = d3.svg.axis()
      .scale(yRange)
      .tickSize(5)
      .orient("left")
      .tickSubdivide(true);


  vis.append("svg:g")
    .attr("class", "x axis")
    .attr("transform", "translate(0," + (HEIGHT - MARGINS.bottom) + ")")
    .call(xAxis);

  vis.append("svg:g")
    .attr("class", "y axis")
    .attr("transform", "translate(" + (MARGINS.left) + ",0)")
    .call(yAxis);

  var lineFunc = d3.svg.line()
  .x(function (d) {
    return xRange(d.x);
  })
  .y(function (d) {
    return yRange(d.y);
  })
  .interpolate('linear');

vis.append("svg:path")
  .attr("d", lineFunc(lineData))
  .attr("stroke", "blue")
  .attr("stroke-width", 2)
  .attr("fill", "none");

}

