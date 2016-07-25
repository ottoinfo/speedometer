/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";var _svgDrag=__webpack_require__(1);var _svgDrag2=_interopRequireDefault(_svgDrag);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}// Circle Example
	var paper=Raphael(20,20,500,250);// import React from "react"
	var path=paper.circle(125,125,100).attr({"stroke-width":8});var startPoint=path.getPointAtLength(0);var circle=paper.ellipse(startPoint.x,startPoint.y,10,10).attr({stroke:"none",fill:"#f00"});var text=paper.text().attr({x:135,y:125,"font-size":36,"font-family":"Arial, Helvetica, sans-serif",text:"0%"});new _svgDrag2.default(path,circle,function(percent){text.attr({text:percent+"%"});});// Curve Line Example
	var paper2=Raphael(20,250,500,350);var path2=paper2.path(["M",50,330,"Q",225,20,400,330]).attr({"stroke-width":8});var startPoint2=path2.getPointAtLength(0);var circle2=paper2.ellipse(startPoint2.x,startPoint2.y,10,10).attr({stroke:"none",fill:"#f00"});var text2=paper2.text().attr({x:205,y:150,"font-size":36,"font-family":"Arial, Helvetica, sans-serif",text:"0%"});new _svgDrag2.default(path2,circle2,function(percent){text2.attr({text:percent+"%"});});

/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";Object.defineProperty(exports,"__esModule",{value:true});function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}var svgDrag=function svgDrag(path,dragItem,cb){var _this=this;_classCallCheck(this,svgDrag);this.click=function(ev){console.log("Jump to Place",ev.x,ev.y);};this.start=function(){_this.originalX=_this.dragItem.attr("cx");_this.originalY=_this.dragItem.attr("cy");_this.dragItem.attr({opacity:1});};this.move=function(distanceX,distanceY){var tempPoint={x:_this.originalX+distanceX,y:_this.originalY+distanceY};_this.position=_this.gradualSearch(_this.position,tempPoint);var point=_this.path.getPointAtLength(_this.position);_this.dragItem.attr({cx:point.x,cy:point.y});};this.up=function(){_this.dragItem.attr({opacity:1});};this.gradualSearch=function(position,tempPoint){position=position+_this.totalLength;var currentPostion=position;var distanceStart=_this.distance(_this.path.getPointAtLength(position%_this.totalLength),tempPoint);var distanceEnd=null;var direction=null;if(_this.distance(_this.path.getPointAtLength((position-_this.searchDistanceLength)%_this.totalLength),tempPoint)>_this.distance(_this.path.getPointAtLength((position+_this.searchDistanceLength)%_this.totalLength),tempPoint)){direction=_this.searchDistanceLength;}else{direction=-_this.searchDistanceLength;}currentPostion+=direction;distanceEnd=_this.distance(_this.path.getPointAtLength(currentPostion%_this.totalLength),tempPoint);while(distanceEnd<distanceStart){distanceStart=distanceEnd;currentPostion+=direction;distanceEnd=_this.distance(_this.path.getPointAtLength(currentPostion%_this.totalLength),tempPoint);}currentPostion-=direction;_this.callback(parseInt(currentPostion/_this.totalLength*100)-100);return currentPostion%_this.totalLength;};this.distance=function(tempPoint1,tempPoint2){var distanceX=tempPoint1.x-tempPoint2.x;var distanceY=tempPoint1.y-tempPoint2.y;return Math.sqrt(distanceX*distanceX+distanceY*distanceY);};if(!path||!dragItem)throw new Error("You need to pass in a `PATH` and `DRAG ITEM`");// Setup
	this.path=path;this.dragItem=dragItem;this.position=0;this.totalLength=0;this.searchDistanceLength=1;this.totalLength=this.path.getTotalLength();this.callback=cb;// Events
	this.path.click(this.click);this.dragItem.drag(this.move,this.start,this.up);};exports.default=svgDrag;

/***/ }
/******/ ]);