/*
Copyright (c) 2010, Yahoo! Inc. All rights reserved.
Code licensed under the BSD License:
http://developer.yahoo.com/yui/license.html
version: 3.6.0
build: 3.6.0
*/
YUI.add("dataschema-text",function(e){var c=e.Lang,a=c.isString,d=c.isUndefined,b={apply:function(h,i){var f=i,g={results:[],meta:{}};if(a(i)&&h&&a(h.resultDelimiter)){g=b._parseResults.call(this,h,f,g);}else{g.error=new Error("Text schema parse failure");}return g;},_parseResults:function(g,q,h){var o=g.resultDelimiter,n=a(g.fieldDelimiter)&&g.fieldDelimiter,p=g.resultFields||[],m=[],f=e.DataSchema.Base.parse,r,u,x,w,s,v,t,l,k;if(q.slice(-o.length)===o){q=q.slice(0,-o.length);}r=q.split(g.resultDelimiter);if(n){for(l=r.length-1;l>=0;--l){x={};w=r[l];u=w.split(g.fieldDelimiter);for(k=p.length-1;k>=0;--k){s=p[k];v=(!d(s.key))?s.key:s;t=(!d(u[v]))?u[v]:u[k];x[v]=f.call(this,t,s);}m[l]=x;}}else{m=r;}h.results=m;return h;}};e.DataSchema.Text=e.mix(b,e.DataSchema.Base);},"3.6.0",{requires:["dataschema-base"]});