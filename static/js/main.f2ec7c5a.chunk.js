(this.webpackJsonpKomenteo=this.webpackJsonpKomenteo||[]).push([[0],{13:function(e,a,t){},14:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(6),s=t.n(r),c=(t(13),t(1)),o=t(2),i=t(4),m=t(3),d=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("nav",{id:"menu",className:"navbar navbar-default navbar-fixed-top"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"navbar-header"},l.a.createElement("button",{type:"button",className:"navbar-toggle collapsed","data-toggle":"collapse","data-target":"#bs-example-navbar-collapse-1"}," ",l.a.createElement("span",{className:"sr-only"},"Toggle navigation")," ",l.a.createElement("span",{className:"icon-bar"})," ",l.a.createElement("span",{className:"icon-bar"})," ",l.a.createElement("span",{className:"icon-bar"})," "),l.a.createElement("a",{className:"navbar-brand page-scroll",href:"#page-top"},l.a.createElement("img",{src:"img/komenteo.png",className:"img-responsive",width:"130",alt:""}))," "),l.a.createElement("div",{className:"collapse navbar-collapse",id:"bs-example-navbar-collapse-1"},l.a.createElement("ul",{className:"nav navbar-nav navbar-right"},l.a.createElement("li",null,l.a.createElement("a",{href:"#features",className:"page-scroll"},"Features")),l.a.createElement("li",null,l.a.createElement("a",{href:"#about",className:"page-scroll"},"About")),l.a.createElement("li",null,l.a.createElement("a",{href:"#services",className:"page-scroll"},"Services")),l.a.createElement("li",null,l.a.createElement("a",{href:"#team",className:"page-scroll"},"Team")),l.a.createElement("li",null,l.a.createElement("a",{href:"#contact",className:"page-scroll"},"Contact"))))))}}]),t}(n.Component),u=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("header",{id:"header"},l.a.createElement("div",{className:"intro"},l.a.createElement("div",{className:"overlay"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-8 col-md-offset-2 intro-text"},l.a.createElement("h1",null,this.props.data?this.props.data.title:"Loading",l.a.createElement("span",null)),l.a.createElement("p",null,this.props.data?this.props.data.paragraph:"Loading"),l.a.createElement("a",{href:"#features",className:"btn btn-custom btn-lg page-scroll"},"Learn More")," "))))))}}]),t}(n.Component),p=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{id:"features",className:"text-center"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"col-md-10 col-md-offset-1 section-title"},l.a.createElement("h2",null,"Features")),l.a.createElement("div",{className:"row"},this.props.data?this.props.data.map((function(e,a){return l.a.createElement("div",{key:"".concat(e.title,"-").concat(a),className:"col-md-4 col-sm-6 col-xs-12"}," ",l.a.createElement("i",{className:e.icon}),l.a.createElement("h3",null,e.title),l.a.createElement("p",null,e.text))})):"Loading...")))}}]),t}(n.Component),h=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{id:"about"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-xs-12 col-md-6"}," ",l.a.createElement("img",{src:"img/about.jpg",className:"img-responsive",alt:""})," "),l.a.createElement("div",{className:"col-xs-12 col-md-6"},l.a.createElement("div",{className:"about-text"},l.a.createElement("h2",null,"About Us"),l.a.createElement("p",null,this.props.data?this.props.data.paragraph:"loading..."),l.a.createElement("h3",null,"Why Choose Us?"),l.a.createElement("div",{className:"list-style"},l.a.createElement("div",{className:"col-lg-6 col-sm-6 col-xs-12"},l.a.createElement("ul",null,this.props.data?this.props.data.Why.map((function(e,a){return l.a.createElement("li",{key:"".concat(e,"-").concat(a)},e)})):"loading")),l.a.createElement("div",{className:"col-lg-6 col-sm-6 col-xs-12"},l.a.createElement("ul",null,this.props.data?this.props.data.Why2.map((function(e,a){return l.a.createElement("li",{key:"".concat(e,"-").concat(a)}," ",e)})):"loading"))))))))}}]),t}(n.Component),g=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{id:"services",className:"text-center"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"section-title"},l.a.createElement("h2",null,"Our Services"),l.a.createElement("p",null,this.props.data?this.props.data.Text:"Loading")),l.a.createElement("div",{className:"row"},this.props.data?this.props.data.all.map((function(e,a){return l.a.createElement("div",{key:"".concat(e.name,"-").concat(a),className:"col-md-4"}," ",l.a.createElement("i",{className:e.icon}),l.a.createElement("div",{className:"service-desc"},l.a.createElement("h3",null,e.name),l.a.createElement("p",null,e.text)))})):"loading")))}}]),t}(n.Component),E=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{id:"team",className:"text-center"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"col-md-8 col-md-offset-2 section-title"},l.a.createElement("h2",null,"Meet the Team"),l.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed dapibus leonec.")),l.a.createElement("div",{id:"row"},this.props.data?this.props.data.map((function(e,a){return l.a.createElement("div",{key:"".concat(e.name,"-").concat(a),className:"col-md-3 col-sm-6 team"},l.a.createElement("div",{className:"thumbnail"}," ",l.a.createElement("img",{src:e.img,alt:"...",className:"team-img"}),l.a.createElement("div",{className:"caption"},l.a.createElement("h4",null,e.name),l.a.createElement("p",null,e.job))))})):"loading")))}}]),t}(n.Component),f=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("div",{id:"contact"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"col-md-8"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"section-title"},l.a.createElement("h2",null,"Get In Touch"),l.a.createElement("p",null,"Please fill out the form below to send us an email and we will get back to you as soon as possible.")),l.a.createElement("form",{name:"sentMessage",id:"contactForm",noValidate:!0},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-6"},l.a.createElement("div",{className:"form-group"},l.a.createElement("input",{type:"text",id:"name",className:"form-control",placeholder:"Name",required:"required"}),l.a.createElement("p",{className:"help-block text-danger"}))),l.a.createElement("div",{className:"col-md-6"},l.a.createElement("div",{className:"form-group"},l.a.createElement("input",{type:"email",id:"email",className:"form-control",placeholder:"Email",required:"required"}),l.a.createElement("p",{className:"help-block text-danger"})))),l.a.createElement("div",{className:"form-group"},l.a.createElement("textarea",{name:"message",id:"message",className:"form-control",rows:"4",placeholder:"Message",required:!0}),l.a.createElement("p",{className:"help-block text-danger"})),l.a.createElement("div",{id:"success"}),l.a.createElement("button",{type:"submit",className:"btn btn-custom btn-lg"},"Send Message")))),l.a.createElement("div",{className:"col-md-3 col-md-offset-1 contact-info"},l.a.createElement("div",{className:"contact-item"},l.a.createElement("h3",null,"Contact Info"),l.a.createElement("p",null,l.a.createElement("span",null,l.a.createElement("i",{className:"fa fa-map-marker"})," Address"),this.props.data?this.props.data.address:"loading")),l.a.createElement("div",{className:"contact-item"},l.a.createElement("p",null,l.a.createElement("span",null,l.a.createElement("i",{className:"fa fa-phone"})," Phone")," ",this.props.data?this.props.data.phone:"loading")),l.a.createElement("div",{className:"contact-item"},l.a.createElement("p",null,l.a.createElement("span",null,l.a.createElement("i",{className:"fa fa-envelope-o"})," Email")," ",this.props.data?this.props.data.email:"loading"))),l.a.createElement("div",{className:"col-md-12"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"social"},l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("a",{href:this.props.data?this.props.data.facebook:"/"},l.a.createElement("i",{className:"fa fa-facebook"}))),l.a.createElement("li",null,l.a.createElement("a",{href:this.props.data?this.props.data.twitter:"/"},l.a.createElement("i",{className:"fa fa-twitter"}))),l.a.createElement("li",null,l.a.createElement("a",{href:this.props.data?this.props.data.youtube:"/"},l.a.createElement("i",{className:"fa fa-youtube"}))))))))),l.a.createElement("div",{id:"footer"},l.a.createElement("div",{className:"container text-center"},l.a.createElement("p",null,"\xa9 2020 Issaaf Kattan React Land Page Template. Design by"," ",l.a.createElement("a",{href:"http://www.templatewire.com",rel:"nofollow"},"TemplateWire")))))}}]),t}(n.Component),v=t(7),b=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(){var e;Object(c.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=a.call.apply(a,[this].concat(l))).state={landingPageData:{}},e}return Object(o.a)(t,[{key:"getlandingPageData",value:function(){this.setState({landingPageData:v})}},{key:"componentDidMount",value:function(){this.getlandingPageData()}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(d,null),l.a.createElement(u,{data:this.state.landingPageData.Header}),l.a.createElement(p,{data:this.state.landingPageData.Features}),l.a.createElement(h,{data:this.state.landingPageData.About}),l.a.createElement(g,{data:this.state.landingPageData.Services}),l.a.createElement(E,{data:this.state.landingPageData.Team}),l.a.createElement(f,{data:this.state.landingPageData.Contact}))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e){e.exports=JSON.parse('{"Header":{"title":"Komenteo","paragraph":"Comments matter"},"About":{"paragraph":"We drive new clients to your store and compensate them to leave trustful reviews.","Why":["Reach thousands of customers that live close to your store","Target customers based on their profile","Pay real clients to leave honest reviews"],"Why2":["We verify that the reviews come from real customers","Customers only get paid after they leave their review"]},"Services":{"Text":"Because comments matter.","all":[{"icon":"fa fa-plane","name":"Drive new customers to your store","text":"Komenteo sends special deals to customers from your area. Clients get paid after they published their reviews."},{"icon":"fa fa-cart-arrow-down","name":"Reward Customers for leaving public reviews","text":"Your customer receive a compensation after they left their review on your google page."},{"icon":"fa fa-pie-chart","name":"Target customers based on their profile","text":"Offer special discounts to customers that are known to \'drink wine\' or \'usually come in large group\'."},{"icon":"fa fa-wordpress","name":"Manage your only reputation","text":"Use Komenteo AI tool to automate customer support. Get alerts based on sentiment analysis."},{"icon":"fa fa-language","name":"See user reviews in your own language","text":"Komenteo can display user reviews in the language of your choice and translate your response back."}]},"Testimonials":[{"img":"img/testimonials/01.jpg","text":"\\"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at.\\"","name":"John Doe"},{"img":"img/testimonials/02.jpg","text":"\\"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at.\\"","name":"Johnathan Doe"},{"img":"img/testimonials/03.jpg","text":"\\"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at.\\"","name":"John Doe"},{"img":"img/testimonials/04.jpg","text":"\\"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at.\\"","name":"Johnathan Doe"},{"img":"img/testimonials/05.jpg","text":"\\"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at.\\"","name":"John Doe"},{"img":"img/testimonials/06.jpg","text":"\\"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at.\\"","name":"Johnathan Doe"}],"Team":[{"img":"img/team/01.jpg","name":"Dimitri Duval","job":"CEO"},{"img":"img/team/02.jpg","name":"Ugo Jardonnet","job":"CTO"},{"img":"img/team/03.jpg","name":"Jimmy Hoareau","job":"CMO"},{"img":"img/team/04.jpg","name":"Florent Regent","job":"Lead Business Development"}],"Contact":{"address":"1 avenue des Champs-Elys\xe9es, 75008 Paris","phone":"+33 1 23 45 67 89","email":"contact@komenteo.com","facebook":"fb.com","twitter":"twitter.com","youtube":"youtube.com"},"Features":[{"icon":"fa fa-group","title":"Get new customers","text":"Get new customers throught the Komenteo Platform."},{"icon":"fa fa-comments-o","title":"Get new user reviews","text":"Get verified reviews from real customers."},{"icon":"fa fa-bullhorn","title":"Get alerts","text":"Setup alerts on negative reviews and manage your online reputation."}]}')},8:function(e,a,t){e.exports=t(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.f2ec7c5a.chunk.js.map