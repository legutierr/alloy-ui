/*
Copyright (c) 2010, Yahoo! Inc. All rights reserved.
Code licensed under the BSD License:
http://developer.yahoo.com/yui/license.html
version: 3.6.0
build: 3.6.0
*/
YUI.add("view-node-map",function(d){var c=d.namespace("View._buildCfg"),b={};function a(){}c.aggregates||(c.aggregates=[]);c.aggregates.push("getByNode");a.getByNode=function(f){var e;d.one(f).ancestor(function(g){return(e=b[d.stamp(g,true)])||false;},true);return e||null;};a._instances=b;a.prototype={initializer:function(){b[d.stamp(this.get("container"))]=this;},destructor:function(){var e=d.stamp(this.get("container"),true);if(e in b){delete b[e];}}};d.View.NodeMap=a;},"3.6.0",{requires:["view"]});