(window["webpackJsonpmy-web-page"]=window["webpackJsonpmy-web-page"]||[]).push([[0],Array(24).concat([function(e,a,t){e.exports=t.p+"static/media/gui-1.3cfce942.jpg"},function(e,a,t){e.exports=t.p+"static/media/gui-2.9c67b042.jpg"},function(e,a,t){e.exports=t.p+"static/media/gui-3.89ba92f8.jpg"},function(e,a,t){e.exports=t.p+"static/media/mision-1.694a5f78.jpg"},function(e,a,t){e.exports=t.p+"static/media/mision-4.df6b0b7a.jpg"},function(e,a,t){e.exports=t.p+"static/media/mision-5.cae990cb.jpg"},function(e,a,t){e.exports=t.p+"static/media/fm-2.ecf8f644.png"},function(e,a,t){e.exports=t.p+"static/media/fm-3.45ab7d0a.png"},function(e,a,t){e.exports=t.p+"static/media/cocrealab-1.1457e06a.png"},function(e,a,t){e.exports=t.p+"static/media/cocrealab-2.b5d15ac1.png"},function(e,a,t){e.exports=t.p+"static/media/cocrealab-3.13faad0d.png"},function(e,a,t){e.exports=t.p+"static/media/cocrealab-4.00ffe69d.png"},function(e,a,t){e.exports=t.p+"static/media/cocrealab-5.97943e83.png"},function(e,a,t){e.exports=t.p+"static/media/foto-felipe-1.6ae1369d.jpg"},function(e,a,t){e.exports=t.p+"static/media/facebook-icon.6b1dfcae.svg"},function(e,a,t){e.exports=t.p+"static/media/linkedin-icon.7519f354.svg"},function(e,a,t){e.exports=t.p+"static/media/github-icon.37d4630d.svg"},function(e,a,t){e.exports=t.p+"static/media/cocrealab-1.1cd7f29a.jpg"},function(e,a,t){e.exports=t.p+"static/media/cocrealab-2.58b09a1e.jpg"},function(e,a,t){e.exports=t.p+"static/media/cocrealab-3.14192313.jpg"},function(e,a,t){e.exports=t.p+"static/media/game-done.7e9ab35b.jpg"},function(e,a,t){e.exports=t.p+"static/media/fm-1.5ca9f80d.jpg"},function(e,a,t){e.exports=t.p+"static/media/cocrealab-0.390bfb7b.png"},function(e,a,t){e.exports=t.p+"static/media/foto-felipe-2.30335b2e.jpg"},function(e,a,t){e.exports=t.p+"static/media/rock-music.9bac06c9.jpg"},function(e,a,t){e.exports=t.p+"static/media/riding-on-bike.fe5b2e7d.jpg"},function(e,a,t){e.exports=t.p+"static/media/hatos-reservoir.07d4029c.jpg"},function(e,a,t){e.exports=t(76)},,,,,function(e,a,t){},,,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),c=t(16),i=t.n(c),r=t(7),s=t(13),o=t(1),m=t(2),d=t(4),u=t(3),p=t(5);t(56);var E=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"bkg-7 full-page"},l.a.createElement("div",{className:"bkg-rec full-page"},l.a.createElement("div",{className:"main-content"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-xs-12 center-xs"},l.a.createElement("h1",{className:"error-404"},"404"))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-xs-12 center-xs"},l.a.createElement("p",{className:"error-message"},"This is not the web page you are looking for"))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-xs-12 center-xs"},l.a.createElement(r.b,{to:"./"},l.a.createElement("button",{className:"btn-primary"},"GO TO HOME"))))))))},g=(t(62),function(e){function a(e){var t;return Object(o.a)(this,a),(t=Object(d.a)(this,Object(u.a)(a).call(this,e))).onChangeSlide=function(e){var a=t.state.slideIndex;t.setState({slideIndex:a+=e})},t.currentSlide=function(e){t.setState({slideIndex:e})},t.showSlides=function(){var e,a=document.getElementsByClassName("slide"),n=document.getElementsByClassName("dot"),l=t.state.slideIndex;for(l>a.length&&(l=1,t.setState({slideIndex:1})),l<1&&(l=a.length,t.setState({slideIndex:a.length})),e=0;e<a.length;e++)a[e].style.display="none";for(e=0;e<n.length;e++)n[e].className=n[e].className.replace(" active","");a[l-1].style.display="block",n[l-1].className+=" active"},t.state={slideIndex:1},t}return Object(p.a)(a,e),Object(m.a)(a,[{key:"componentDidMount",value:function(){this.showSlides()}},{key:"componentDidUpdate",value:function(e){this.showSlides()}},{key:"render",value:function(){var e=this;return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-xs-12"},l.a.createElement("br",null),l.a.createElement("div",{className:"slideshow-container"},this.props.images.map((function(a,t){return l.a.createElement("div",{className:"slide fade",key:a.id},l.a.createElement("div",{className:"numbertext"},t+1," / ",e.props.images.length),l.a.createElement("img",{src:a.src,alt:a.src}),l.a.createElement("div",{className:"slide-caption"},a.alt))})),l.a.createElement("button",{className:"prev",onClick:function(){return e.onChangeSlide(-1)}},"\u276e"),l.a.createElement("button",{className:"next",onClick:function(){return e.onChangeSlide(1)}},"\u276f")))),l.a.createElement("br",null),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-xs-12"},l.a.createElement("div",{className:"dots-container"},this.props.images.map((function(a,t){return l.a.createElement("span",{key:a.id,className:"dot",onClick:function(){return e.currentSlide(t+1)}})}))))))}}]),a}(l.a.Component)),v=t(24),f=t.n(v),h=t(25),b=t.n(h),N=t(26),k=t.n(N),x=t(27),y=t.n(x),w=t(28),j=t.n(w),C=t(29),O=t.n(C),I=t(30),S=t.n(I),M=t(31),F=t.n(M),P=t(32),A=t.n(P),D=t(33),L=t.n(D),U=t(34),B=t.n(U),G=t(35),H=t.n(G),R=t(36),T=t.n(R),q=function(e){function a(e){var t;return Object(o.a)(this,a),(t=Object(d.a)(this,Object(u.a)(a).call(this,e))).onNextProject=function(){},t.fetchData=function(){var e={1:{name:"Philip's Adventure",description:"In association with Diego Mellizo we developed a videogame as a support tool for English teaching. It was installed on computers of a school in Ubat\xe9 (Cund. - Colombia).",specs:[{id:"1",name:"Videogame Engine: Unity"},{id:"2",name:"Programming language: C#"},{id:"3",name:"GUI: Unity Asset Store"}],images:[{id:"1",src:f.a,alt:"Philip's Adventure - GUI"},{id:"2",src:b.a,alt:"Philip's Adventure - GUI"},{id:"3",src:k.a,alt:"Philip's Adventure - GUI"},{id:"4",src:y.a,alt:"Philip's Adventure - Misions"},{id:"5",src:j.a,alt:"Philip's Adventure - Misions"},{id:"6",src:O.a,alt:"Philip's Adventure - Misions"}]},2:{name:"Web plug-in for GDA",description:"In association with Diego Mellizo and Eforcers we developed a file manager plug-in for GDA's HumHub social network.",specs:[{id:"1",name:"Programming language: PHP using Yii (framework based on MVC)"},{id:"2",name:"GUI: Bootstrap"},{id:"3",name:"Server: Apache Tomcat"}],images:[{id:"1",src:S.a,alt:"File Manager - GUI"},{id:"2",src:F.a,alt:"File Manager - GUI"}]},3:{name:"Web application",description:"I contributed in development of a web application for visualizing Colombia's coverage and quality in terms of higher education.",specs:[{id:"1",name:"Programming language: PHP using CodeIgniter (framework based on MVC)"},{id:"2",name:"GUI: Materializecss"},{id:"3",name:"Server: Apache Tomcat"},{id:"4",name:"Database engine: MySQL"}],images:[{id:"1",src:A.a,alt:"Stats"},{id:"2",src:L.a,alt:"Programs - CRUD"},{id:"3",src:B.a,alt:"Stats"},{id:"4",src:H.a,alt:"Coverage of higher education"},{id:"5",src:T.a,alt:"Admin panel"}]}}[t.props.match.params.projectId];t.setState({projectData:e})},t.state={projectData:void 0},t}return Object(p.a)(a,e),Object(m.a)(a,[{key:"componentDidMount",value:function(){this.fetchData()}},{key:"render",value:function(){var e=this.state.projectData;return e?l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{id:"",className:"bkg-img bkg-5 full-page"},l.a.createElement("div",{className:"bkg-rec full-page"},l.a.createElement("div",{className:"main-content"},l.a.createElement("div",{className:"row"},l.a.createElement(r.b,{className:"left-arrow",to:"/portfolio"},l.a.createElement("i",null)),l.a.createElement("div",{className:"col-xs-12 center-xs"},l.a.createElement("h2",null,e.name))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-xs-12"},l.a.createElement(g,{images:e.images}))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-xs-12"},l.a.createElement("h4",null,"DESCRIPTION"),l.a.createElement("p",null,e.description))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-xs-12"},l.a.createElement("h4",null,"SPECS"),l.a.createElement("ul",{className:"blue-bullets"},e.specs.map((function(e){return l.a.createElement("li",{key:e.id},e.name)}))))))))):l.a.createElement(E,null)}}]),a}(l.a.Component),z=(t(63),t(37)),J=t.n(z),W=t(38),V=t.n(W),Q=t(39),Y=t.n(Q),_=t(40),X=t.n(_),K=function(e){function a(){return Object(o.a)(this,a),Object(d.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(p.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{id:"home",className:"bkg-img bkg-1 full-page"},l.a.createElement("div",{className:"bkg-rec full-page"},l.a.createElement("div",{className:"main-content"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-xs-12"},l.a.createElement("div",{className:"photo-circle"},l.a.createElement("img",{src:J.a,alt:"Felipe L\xf3pez"})))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-xs-12 center-xs"},l.a.createElement("h1",null,"I",l.a.createElement("span",{className:"marks"},"'"),"m"),l.a.createElement("h1",null,"Felipe L\xf3pez",l.a.createElement("span",{className:"marks"},".")),l.a.createElement("h4",{className:"align-center"},"Frontend developer - React developer"))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-xs-12 center-xs"},l.a.createElement("div",{className:"icons-container"},l.a.createElement("a",{href:"https://www.linkedin.com/in/felipe-andres-lopez",target:"_blank",rel:"noopener noreferrer"},l.a.createElement("img",{src:Y.a,alt:"linkedin-icon"})),l.a.createElement("a",{href:"https://github.com/FelipeAndresLopez",target:"_blank",rel:"noopener noreferrer"},l.a.createElement("img",{src:X.a,alt:"github-icon"})),l.a.createElement("a",{href:"https://www.facebook.com/felipeandreslopezm",target:"_blank",rel:"noopener noreferrer"},l.a.createElement("img",{src:V.a,alt:"facebook-icon"})))))))))}}]),a}(l.a.Component);t(64);var Z=function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"row skill-container"},l.a.createElement("div",{className:"col-lg-offset-1 col-md-offset-1 col-lg-2 col-md-2 col-sm-12 col-xs-12 start-sm start-xs end-lg end-md"},l.a.createElement("label",{className:"skill-name"},e.name)),l.a.createElement("div",{className:"col-lg-6 col-md-6 col-sm-11 col-xs-10"},l.a.createElement("div",{className:"progressbar-border"},l.a.createElement("div",{className:"progressbar-fill filling-".concat(e.percent)}))),l.a.createElement("div",{className:"col-lg-1 col-md-1 col-sm-1 col-xs-2 start-lg start-md center-xs "},l.a.createElement("label",{className:"skill-percent"},e.percent,"%"))))},$=function(e){function a(e){var t;return Object(o.a)(this,a),(t=Object(d.a)(this,Object(u.a)(a).call(this,e))).state={devSkills:[{id:"1",name:"Html",percent:"80"},{id:"2",name:"Js",percent:"70"},{id:"3",name:"Css",percent:"70"},{id:"4",name:"React js",percent:"70"},{id:"5",name:"Mysql",percent:"70"},{id:"6",name:"Redux",percent:"70"},{id:"7",name:"Git",percent:"60"},{id:"8",name:"Scrum",percent:"80"},{id:"9",name:"Google Apis",percent:"70"}],desSkills:[{id:"1",name:"Adobe Xd",percent:"60"},{id:"2",name:"Photoshop",percent:"30"},{id:"3",name:"Illustrator",percent:"30"}],softSkills:[{id:"1",name:"Teamwork",percent:"80"},{id:"2",name:"Leadership",percent:"80"},{id:"3",name:"Commitment",percent:"100"},{id:"4",name:"Communication",percent:"80"},{id:"5",name:"Empathy",percent:"100"}]},t}return Object(p.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{id:"skills",className:"bkg-img bkg-2 full-page"},l.a.createElement("div",{className:"bkg-rec full-page"},l.a.createElement("div",{className:"main-content"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-xs-12 center-xs"},l.a.createElement("h1",null,l.a.createElement("span",{className:"text"},"Development")," skills"))),l.a.createElement("div",{className:"row skills-container"},l.a.createElement("div",{className:"col-xs-12 center-xs"},this.state.devSkills.map((function(e){return l.a.createElement(Z,{key:e.id,name:e.name,percent:e.percent})})))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-xs-12 center-xs"},l.a.createElement("h1",null,l.a.createElement("span",{className:"text"},"Design")," skills"))),l.a.createElement("div",{className:"row skills-container"},l.a.createElement("div",{className:"col-xs-12 center-xs"},this.state.desSkills.map((function(e){return l.a.createElement(Z,{key:e.id,name:e.name,percent:e.percent})})))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-xs-12 center-xs"},l.a.createElement("h1",null,l.a.createElement("span",{className:"text"},"Soft")," skills"))),l.a.createElement("div",{className:"row skills-container"},l.a.createElement("div",{className:"col-xs-12 center-xs"},this.state.softSkills.map((function(e){return l.a.createElement(Z,{key:e.id,name:e.name,percent:e.percent})}))))))))}}]),a}(l.a.Component);t(65);var ee=function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"event-container ".concat(e.align)},l.a.createElement("div",{className:"event-content"},l.a.createElement("h5",null,e.date),l.a.createElement("h4",null,e.company),l.a.createElement("p",{className:"job-title"},e.title),l.a.createElement("p",null,e.description))))},ae=function(e){function a(e){var t;return Object(o.a)(this,a),(t=Object(d.a)(this,Object(u.a)(a).call(this,e))).state={experiences:[{id:"0",date:"dec. 2019 - continue",company:"TempEdge",title:"React developer (Remote)",description:"Development of components for applications using technologies such as React Js, Redux, Css, Html, Bootstrap and API REST.",align:"right"},{id:"1",date:"nov. 2015 - apr. 2019",company:"Sinova",title:"Full stack developer",description:"Development and design of web applications and plugins, using technologies such as Apps Script, Javascript, Css, Html, jQuery, MySQL and Bootstrap; for automating workflows.",align:"left"},{id:"2",date:"feb. 2017 - aug. 2017",company:"Cocrealab",title:"Full stack developer",description:"Development and design of a web application, for visualizing the coverage of higher education in Colombia, by city and region.",align:"right"},{id:"3",date:"aug. 2015 - oct. 2015",company:"Eforcers",title:"Full stack developer",description:"Development and deployment of a file manager plug-in for an internal social network of Grupo de Diarios de Am\xe9rica.",align:"left"}]},t}return Object(p.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{id:"experience",className:"bkg-img bkg-3 full-page"},l.a.createElement("div",{className:"bkg-rec full-page"},l.a.createElement("div",{className:"main-content"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-xs-12 center-xs"},l.a.createElement("h1",null,"Experience"))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-xs-12 center-xs"},l.a.createElement("h3",{className:"quotes"},l.a.createElement("span",{className:"marks"},'"'),"Do Your Best Work Ever",l.a.createElement("span",{className:"marks"},'"')))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-xs-12"},l.a.createElement("div",{className:"timeline"},this.state.experiences.map((function(e){return l.a.createElement(ee,{key:e.id,align:e.align,date:e.date,company:e.company,title:e.title,description:e.description})})))))))))}}]),a}(l.a.Component),te=function(e){function a(e){var t;return Object(o.a)(this,a),(t=Object(d.a)(this,Object(u.a)(a).call(this,e))).state={titles:[{id:"1",date:"jun. 2019 - Continue",company:"Platzi",title:"Frontend developer",description:"Frontend developer and architect career.",align:"left"},{id:"2",date:"jul. 2018 - Continue",company:"Passport Language Centers",title:"English language",description:"English program intermediate and advanced (B1 - B2).",align:"right"},{id:"3",date:"feb. 2010 - oct. 2015",company:"Universidad de Cundinamarca",title:"Software engineer",description:"I finished my software engineering degree at this college. I completed successfully all the credits without any fallout.",align:"left"},{id:"4",date:"feb. 2014 - dec. 2015",company:"Escuela Nacional de Inform\xe1tica",title:"Computing technician",description:"There, I improved my programming skills and I got an honorary mention for my performance and commitment.",align:"right"},{id:"5",date:"jan. 2003 - dec. 2008",company:"Escuela Normal Superior",title:"High school diploma",description:"These kind of schools are focused on training teachers, however I decided to be an engineer.",align:"left"}]},t}return Object(p.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{id:"education",className:"bkg-img bkg-4 full-page"},l.a.createElement("div",{className:"bkg-rec full-page"},l.a.createElement("div",{className:"main-content"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-xs-12 center-xs"},l.a.createElement("h1",null,"Education"))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-xs-12 center-xs"},l.a.createElement("h3",{className:"quotes"},l.a.createElement("span",{className:"marks"},'"'),"Never Stop Learning",l.a.createElement("span",{className:"marks"},'"')))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-xs-12"},l.a.createElement("div",{className:"timeline"},this.state.titles.map((function(e){return l.a.createElement(ee,{key:e.id,align:e.align,date:e.date,company:e.company,title:e.title,description:e.description})})))))))))}}]),a}(l.a.Component),ne=t(15),le=(t(66),function(e){function a(e){var t;return Object(o.a)(this,a),(t=Object(d.a)(this,Object(u.a)(a).call(this,e))).onOpenModal=function(){document.getElementById("modalImage").style.display="block",document.getElementById("image").src=t.props.imageSrc,document.getElementById("caption").innerHTML=t.props.imageAlt},t.onCloseModal=function(){document.getElementById("modalImage").style.display="none"},t.state={},t}return Object(p.a)(a,e),Object(m.a)(a,[{key:"componentDidUpdate",value:function(){this.props.isOpen&&this.onOpenModal()}},{key:"render",value:function(){return i.a.createPortal(l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{id:"modalImage",className:"modal"},l.a.createElement("span",{className:"close",onClick:this.onCloseModal},"\xd7"),l.a.createElement("img",{className:"modal-content",alt:"Imagen modal",id:"image"}),l.a.createElement("div",{id:"caption"}))),document.getElementById("modal-images"))}}]),a}(l.a.Component)),ce=(t(67),t(68),t(41)),ie=t.n(ce),re=t(42),se=t.n(re),oe=t(43),me=t.n(oe),de=t(44),ue=t.n(de),pe=t(45),Ee=t.n(pe),ge=t(46),ve=t.n(ge),fe=function(e){function a(e){var t;return Object(o.a)(this,a),(t=Object(d.a)(this,Object(u.a)(a).call(this,e))).handleOpenModal=function(e){t.setState({modalImageIsOpen:!0,imageSrc:e.target.src,imageAlt:e.target.alt})},t.state={modalImageIsOpen:!1,imageSrc:"",imageAlt:"",desProjects:[{id:"1",src:ie.a,alt:"Cocrealab 1"},{id:"2",src:se.a,alt:"Cocrealab 2"},{id:"3",src:me.a,alt:"Cocrealab 3"}],devProjects:[{id:"1",src:ue.a,alt:"Philip's Adventure",name:"Philip's Adventure"},{id:"2",src:Ee.a,alt:"File manager on Hum-Hub",name:"Web plug-in"},{id:"3",src:ve.a,alt:"Cocrealab",name:"Web application"}]},t}return Object(p.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){var e=this;return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{id:"",className:"bkg-img bkg-5 full-page"},l.a.createElement("div",{className:"bkg-rec full-page"},l.a.createElement("div",{className:"main-content"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-xs-12 center-xs"},l.a.createElement("h1",null,"Portfolio"))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-xs-12 center-xs"},l.a.createElement("h3",{className:"quotes small-quotes"},l.a.createElement("span",{className:"marks"},'"'),"Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. And the only way to do great work is to love what you do. If you haven\u2019t found it yet, keep looking and don\u2019t settle.",l.a.createElement("span",{className:"marks"},'"')),l.a.createElement("h4",{className:"marks small"},"Steve Jobs"))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-xs-12 center-xs"},l.a.createElement(ne.d,null,l.a.createElement(ne.b,null,l.a.createElement(ne.a,null,"Development"),l.a.createElement(ne.a,null,"Design")),l.a.createElement(ne.c,null,l.a.createElement("p",null,"Development of applications"),l.a.createElement("div",{className:"row"},this.state.devProjects.map((function(a){return l.a.createElement("div",{key:a.id,className:"col-lg-4 col-md-6 col-sm-6 col-xs-12"},l.a.createElement(r.b,{to:"/portfolio/".concat(a.id),className:"linkUnstyled"},l.a.createElement("div",{className:"dev-portfolio-container"},l.a.createElement("img",{className:"dev-portfolio-image",src:a.src,alt:a.alt,onClick:e.handleOpenModal}),l.a.createElement("p",null,a.name))))})))),l.a.createElement(ne.c,null,l.a.createElement("p",null,"Design of applications"),l.a.createElement("div",{className:"row"},this.state.desProjects.map((function(a){return l.a.createElement("div",{key:a.id,className:"col-lg-4 col-md-6 col-sm-6 col-xs-12"},l.a.createElement("img",{className:"design-portfolio-image",src:a.src,alt:a.alt,onClick:e.handleOpenModal}))}))),l.a.createElement(le,{isOpen:this.state.modalImageIsOpen,imageSrc:this.state.imageSrc,imageAlt:this.state.imageAlt})))))))))}}]),a}(l.a.Component);t(69);var he=function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-xs-12"},l.a.createElement("div",{className:"card"},l.a.createElement("div",{className:"card-photo"},l.a.createElement("img",{src:e.photo,alt:e.alt}),l.a.createElement("div",{className:"text-block"},l.a.createElement("p",null,e.caption))),l.a.createElement("div",{className:"card-content"},e.children)))))},be=(t(70),t(47)),Ne=t.n(be),ke=t(48),xe=t.n(ke),ye=t(49),we=t.n(ye),je=t(50),Ce=t.n(je),Oe=function(e){function a(e){var t;return Object(o.a)(this,a),(t=Object(d.a)(this,Object(u.a)(a).call(this,e))).state={},t}return Object(p.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{id:"blog",className:"bkg-img bkg-6 full-page"},l.a.createElement("div",{className:"full-page"},l.a.createElement("div",{className:"main-content"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-xs-12 center-xs"},l.a.createElement("h1",null,"Blog"))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-xs-12 col-md-8 col-md-offset-2"},l.a.createElement("div",{className:"card gratefulness-card"},l.a.createElement("div",{className:"blog-photo-circle"},l.a.createElement("img",{src:Ne.a,alt:"Felipe L\xf3pez - Foto"})),l.a.createElement("div",{className:"card-content"},l.a.createElement("h3",{className:"quotes small-quotes white"},l.a.createElement("span",{className:"marks"},'"'),"First of all, thank you from my heart for dedicating a bit of your time to visit this web site and read this blog, I'm sure we have interests in common and It would be great share something of them together.",l.a.createElement("span",{className:"marks"},'"')))))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-xs-12"},l.a.createElement("h3",null,"Interests"))),l.a.createElement(he,{photo:xe.a,alt:"Rock music",caption:"Rock band"},l.a.createElement("h4",null,"Do you like rock music?"),l.a.createElement("p",null,"Play the guitar is one of things that I enjoy to do. Did you know that play an instrument, gives you some skills?"),l.a.createElement("ul",{className:"blue-bullets"},l.a.createElement("li",null,"Improve memory"),l.a.createElement("li",null,"Acquire discipline"),l.a.createElement("li",null,"Reduce stress"),l.a.createElement("li",null,"Acquire cordination"))),l.a.createElement(he,{photo:we.a,alt:"Neusa's reservoir",caption:"Neusa's reservoir"},l.a.createElement("h4",null,"Let's ride on bike together"),l.a.createElement("p",null,"On bike I've gone through some towns:"),l.a.createElement("ul",{className:"blue-bullets three-colums"},l.a.createElement("li",null,"Villa de Leyva"),l.a.createElement("li",null,"S\xe1chica"),l.a.createElement("li",null,"Sutamarch\xe1n"),l.a.createElement("li",null,"Tinjac\xe1"),l.a.createElement("li",null,"R\xe1quira"),l.a.createElement("li",null,"Chiquinquir\xe1"),l.a.createElement("li",null,"Guachet\xe1"),l.a.createElement("li",null,"Cucunub\xe1"),l.a.createElement("li",null,"Carmen de Carupa"),l.a.createElement("li",null,"Lenguazaque"),l.a.createElement("li",null,"Suesca"),l.a.createElement("li",null,"Chocont\xe1"),l.a.createElement("li",null,"Neusa's reservoir"),l.a.createElement("li",null,"Hato's reservoir"),l.a.createElement("li",null,"Guargua's wasteland"),l.a.createElement("li",null,"F\xfaquene"),l.a.createElement("li",null,"Susa"),l.a.createElement("li",null,"Capellan\xeda"))),l.a.createElement(he,{photo:Ce.a,alt:"Hato's reservoir",caption:"Hato's reservoir"},l.a.createElement("h4",null,"Discover unbelievable places "),l.a.createElement("p",null,"The hiking takes you to the most beautiful landscapes that you can't imagine. I invite you to visit the Hato's reservoir. There, you will be able to:"),l.a.createElement("ul",{className:"blue-bullets"},l.a.createElement("li",null,"Camping"),l.a.createElement("li",null,"Sail on a boat"),l.a.createElement("li",null,"Make a picnic"))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-xs-12"},l.a.createElement("h3",null,"Contact"))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-xs-12 col-md-6"},l.a.createElement("p",null,"Let me know if I can help you with something, or you would like to work together in some amazing projects."))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-xs-12 col-md-6"},l.a.createElement("p",null,"E-mail:",l.a.createElement("b",null," felipeandreslopez91@gmail.com"))))))))}}]),a}(l.a.Component),Ie=(t(71),function(e){function a(){var e,t;Object(o.a)(this,a);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(t=Object(d.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(l)))).hideMenu=function(){var e=document.getElementById("menu-btn");!0===e.checked&&(e.checked=!1)},t}return Object(p.a)(a,e),Object(m.a)(a,[{key:"componentWillUnmount",value:function(){document.addEventListener("click",this.hideMenu)}},{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("header",null,l.a.createElement("input",{className:"menu-btn",type:"checkbox",id:"menu-btn"}),l.a.createElement("label",{className:"menu-icon",htmlFor:"menu-btn"},l.a.createElement("span",{className:"navicon"})),l.a.createElement("nav",{className:"menu"},l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement(r.c,{to:"/",activeClassName:"active",exact:!0,onClick:this.hideMenu},"HOME")),l.a.createElement("li",null,l.a.createElement(r.c,{to:"/skills",activeClassName:"active",onClick:this.hideMenu},"SKILLS")),l.a.createElement("li",null,l.a.createElement(r.c,{to:"/experience",activeClassName:"active",onClick:this.hideMenu},"EXPERIENCE")),l.a.createElement("li",null,l.a.createElement(r.c,{to:"/education",activeClassName:"active",onClick:this.hideMenu},"EDUCATION")),l.a.createElement("li",null,l.a.createElement(r.c,{to:"/portfolio",activeClassName:"active",onClick:this.hideMenu},"PORTFOLIO")),l.a.createElement("li",null,l.a.createElement(r.c,{to:"/blog",activeClassName:"active",onClick:this.hideMenu},"BLOG"))))))}}]),a}(l.a.Component));var Se=function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement(Ie,null),e.children)};var Me=function(){return l.a.createElement(r.a,null,l.a.createElement(Se,null,l.a.createElement(s.c,null,l.a.createElement(s.a,{exact:!0,path:"/",component:K}),l.a.createElement(s.a,{exact:!0,path:"/home",component:K}),l.a.createElement(s.a,{exact:!0,path:"/skills",component:$}),l.a.createElement(s.a,{exact:!0,path:"/experience",component:ae}),l.a.createElement(s.a,{exact:!0,path:"/education",component:te}),l.a.createElement(s.a,{exact:!0,path:"/portfolio",component:fe}),l.a.createElement(s.a,{exact:!0,path:"/portfolio/:projectId",component:q}),l.a.createElement(s.a,{exact:!0,path:"/blog",component:Oe}),l.a.createElement(s.a,{component:E}))))},Fe=(t(72),t(73),t(74),t(75),document.getElementById("app"));i.a.render(l.a.createElement(Me,null),Fe)}]),[[51,1,2]]]);
//# sourceMappingURL=main.56b68748.chunk.js.map