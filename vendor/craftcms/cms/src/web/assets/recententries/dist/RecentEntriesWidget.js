!function(){var t;t=jQuery,Craft.RecentEntriesWidget=Garnish.Base.extend({params:null,$widget:null,$body:null,$container:null,$tbody:null,hasEntries:null,init:function(i,e){this.params=e,this.$widget=t("#widget"+i),this.$body=this.$widget.find(".body:first"),this.$container=this.$widget.find(".recententries-container:first"),this.$tbody=this.$container.find("tbody:first"),this.hasEntries=!!this.$tbody.length,this.$widget.data("widget").on("destroy",this.destroy.bind(this)),Craft.RecentEntriesWidget.instances.push(this)},addEntry:function(i){this.$container.css("margin-top",0);var e=this.$container.height();if(!this.hasEntries){var n=t('<table class="data fullwidth"/>').prependTo(this.$container);this.$tbody=t("<tbody/>").appendTo(n)}this.$tbody.prepend('<tr><td><a href="'+i.url+'">'+Craft.escapeHtml(i.title)+'</a> <span class="light">'+Craft.escapeHtml((i.dateCreated?Craft.formatDate(i.dateCreated):"")+(i.dateCreated&&i.username&&Craft.edition==Craft.Pro?", ":"")+(i.username&&Craft.edition==Craft.Pro?i.username:""))+"</span></td></tr>");var s=this.$container.height()-e;this.$container.css("margin-top",-s);var a={"margin-top":0};this.hasEntries||(a["margin-bottom"]=-e,this.hasEntries=!0),this.$container.velocity(a)},destroy:function(){Craft.RecentEntriesWidget.instances.splice(t.inArray(this,Craft.RecentEntriesWidget.instances),1),this.base()}},{instances:[]})}();
//# sourceMappingURL=RecentEntriesWidget.js.map