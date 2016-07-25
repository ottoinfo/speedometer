import React from "react"
import svgDrag from "./svgDrag"

const paper = Raphael(20, 20, 500, 250)
const path = paper.circle(125, 125, 100).attr({
  "stroke-width": 8,
})
const startPoint = path.getPointAtLength(0)
const circle = paper.ellipse(startPoint.x, startPoint.y, 10, 10).attr({ 
  stroke: "none", 
  fill: "#f00",
})
const text = paper.text().attr({
  x : 135,
  y : 125,
  "font-size": 36, 
  "font-family": "Arial, Helvetica, sans-serif",
  text: "0%",
})

const drag = new svgDrag(path, circle, (percent)=>{
  text.attr({ text: percent + "%" })
})