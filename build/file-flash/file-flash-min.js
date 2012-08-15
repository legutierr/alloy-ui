/*
Copyright (c) 2010, Yahoo! Inc. All rights reserved.
Code licensed under the BSD License:
http://developer.yahoo.com/yui/license.html
version: 3.6.0
build: 3.6.0
*/
YUI.add("file-flash",function(b){var a=function(c){a.superclass.constructor.apply(this,arguments);};b.extend(a,b.Base,{initializer:function(c){if(!this.get("id")){this._set("id",b.guid("file"));}},_swfEventHandler:function(c){if(c.id===this.get("id")){switch(c.type){case"uploadstart":this.fire("uploadstart",{uploader:this.get("uploader")});break;case"uploadprogress":this.fire("uploadprogress",{originEvent:c,bytesLoaded:c.bytesLoaded,bytesTotal:c.bytesTotal,percentLoaded:Math.min(100,Math.round(10000*c.bytesLoaded/c.bytesTotal)/100)});this._set("bytesUploaded",c.bytesLoaded);break;case"uploadcomplete":this.fire("uploadfinished",{originEvent:c});break;case"uploadcompletedata":this.fire("uploadcomplete",{originEvent:c,data:c.data});break;case"uploadcancel":this.fire("uploadcancel",{originEvent:c});break;case"uploaderror":this.fire("uploaderror",{originEvent:c,status:c.status,statusText:c.message,source:c.source});}}},startUpload:function(d,f,h){if(this.get("uploader")){var e=this.get("uploader"),c=h||"Filedata",i=this.get("id"),g=f||null;this._set("bytesUploaded",0);e.on("uploadstart",this._swfEventHandler,this);e.on("uploadprogress",this._swfEventHandler,this);e.on("uploadcomplete",this._swfEventHandler,this);e.on("uploadcompletedata",this._swfEventHandler,this);e.on("uploaderror",this._swfEventHandler,this);e.callSWF("upload",[i,d,g,c]);}},cancelUpload:function(){if(this.get("uploader")){this.get("uploader").callSWF("cancel",[this.get("id")]);this.fire("uploadcancel");}}},{NAME:"file",TYPE:"flash",ATTRS:{id:{writeOnce:"initOnly",value:null},size:{writeOnce:"initOnly",value:0},name:{writeOnce:"initOnly",value:null},dateCreated:{writeOnce:"initOnly",value:null},dateModified:{writeOnce:"initOnly",value:null},bytesUploaded:{readOnly:true,value:0},type:{writeOnce:"initOnly",value:null},uploader:{writeOnce:"initOnly",value:null}}});b.FileFlash=a;},"3.6.0",{requires:["base"]});