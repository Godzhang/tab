(function(){
	function Tab(options){
		this.opt = options || {};
		this.tabHead = this.opt.tabHead || "";
		this.tabHeadItem = this.opt.tabHeadItem || this.tabHead.getElementsByTagName("li");
		this.tabItem = this.opt.tabItem || "";
		this.headAct = this.opt.headAct || "act";
		this.itemAct = this.opt.itemAct || "act";
		this.event = this.opt.event || "click";
		this.init();
	}
	Tab.prototype.init = function(){
		var self = this;
		for(var i = 0, len = this.tabHeadItem.length; i < len; i++){
			this.addHandle(i);
		}
	},
	Tab.prototype.addHandle = function(i){
		var self = this;
		var item = this.tabHeadItem[i];
		item.addEventListener(this.event , function(){
			if(this.className.indexOf(self.headAct) > -1) return;
			self.changeTabHead(i);
			self.changeContent(i);
		}, false);
	},
	Tab.prototype.changeTabHead = function(i){
		this.changeClass(i, this.tabHeadItem, this.headAct);
	},
	Tab.prototype.changeContent = function(i){
		this.changeClass(i, this.tabItem, this.itemAct);
	},
	Tab.prototype.changeClass = function(i, elem, act){
		for(var j = 0, len = this.tabHeadItem.length; j < len; j++){
			var item = elem[j];
			if(item.className.indexOf(act) > -1){
				var reg = new RegExp("(^|\\s+)" + act + "(\\s+|$)");
				item.className = item.className.replace(reg, '');
			}
			if(j === i){
				item.className += ' ' + act;
			}
		}
	}
	window.Tab = Tab;
})();























