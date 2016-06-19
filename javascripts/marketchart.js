
function create_container(){
  var svg = d3.select("#externality").append("svg")
    .attr("width", 700)
    .attr("height", 500);
  draw_market(svg);
  return svg
}

function draw_market(svg){
  var demand = svg.append("line")
    .attr("x1", 50)
    .attr("y1", 80)
    .attr("x2", 650)
    .attr("y2", 420)
    .attr("stroke-width", 5)
    .attr("stroke", "#888");

  var supply = svg.append("line")
    .attr("x1", 50)
    .attr("y1", 420)
    .attr("x2", 620)
    .attr("y2", 120)
    .attr("stroke-width", 5)
    .attr("stroke", "#aa6765");

  svg.append("text")
    .attr("transform", "translate(550,180)")
    .attr("dy", "14px")
    .style("fill", "#aa6765")
    .style("font-weight", "bold")
    .text("Supply");
  
  svg.append("text")
    .attr("transform", "translate(80,60)")
    .attr("dy", "14px")
    .style("fill", "#888")
    .style("font-weight", "bold")
    .text("Demand");
  
  var yaxis = svg.append("line")
    .attr("x1", 30)
    .attr("y1", 40)
    .attr("x2", 30)
    .attr("y2", 470)
    .attr("stroke-width", 3)
    .attr("stroke", "#bbb");
  
  var xaxis = svg.append("line")
    .attr("x1", 30)
    .attr("y1", 470)
    .attr("x2", 690)
    .attr("y2", 470)
    .attr("stroke-width", 3)
    .attr("stroke", "#bbb");
  
  
  svg.append("text")
    .attr("transform", "translate(0,20)")
    .attr("dy", "14px")
    .style("fill", "#639B3D")
    .style("font-weight", "bold")
    .text("Price");
  
  svg.append("text")
    .attr("transform", "translate(620,475)")
    .attr("dy", "14px")
    .style("fill", "#4C3D99")
    .style("font-weight", "bold")
    .text("Quantity");
  
}

function draw_QP(svg){
  var quantity = svg.append("line")
    .attr("x1", 361)
    .attr("y1", 258)
    .attr("x2", 361)
    .attr("y2", 475)
    .attr("stroke-width", 6)
    .attr("stroke", "#D5B4B3");
  
  svg.append("text")
    .attr("transform", "translate(352,494)")
    .style("font-size", "24px")
    .style("fill", "#D5B4B3")
    .style("font-weight", "bold")
    .text("Q");

  var price = svg.append("line")
    .attr("x1", 28)
    .attr("y1", 258)
    .attr("x2", 361)
    .attr("y2", 258)
    .attr("stroke-width", 6)
    .attr("stroke", "#639B3D");
  
  svg.append("text")
    .attr("transform", "translate(0,266)")
    .style("font-size", "24px")
    .style("fill", "#639B3D")
    .style("font-weight", "bold")
    .text("P");

}

function draw_externality(svg){

  var supplyex = svg.append("line")
    .attr("x1", 50)
    .attr("y1", 350)
    .attr("x2", 620)
    .attr("y2", 50)
    .style("stroke-dasharray", ("3, 3"))
    .attr("stroke-width", 5)
    .attr("stroke", "#aa6765");    
}

function draw_exQP(svg){
  
  var quantityex = svg.append("line")
    .attr("x1", 298)
    .attr("y1", 220)
    .attr("x2", 298)
    .attr("y2", 475)
    .style("stroke-dasharray", ("3, 3"))
    .attr("stroke-width", 6)
    .attr("stroke", "#D5B4B3");
  
  
  svgCont.append("text")
    .attr("transform", "translate(289,494)")
    .style("font-size", "24px")
    .style("fill", "#D5B4B3")
    .style("font-weight", "bold")
    .text("Q*");
  
  var priceex = svg.append("line")
    .attr("x1", 28)
    .attr("y1", 220)
    .attr("x2", 298)
    .attr("y2", 220)
    .style("stroke-dasharray", ("3, 3"))
    .attr("stroke-width", 6)
    .attr("stroke", "#639B3D");
  
      
  svg.append("text")
    .attr("transform", "translate(0,226)")
    .style("font-size", "24px")
    .style("fill", "#639B3D")
    .style("font-weight", "bold")
    .text("P*");
}
