(this.webpackJsonpskillhiring=this.webpackJsonpskillhiring||[]).push([[0],{41:function(e,t,a){e.exports=a(62)},47:function(e,t,a){},48:function(e,t,a){},62:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(22),i=a.n(r),s=(a(46),a(47),a(48),a(9)),c=a(10),o=a(24),m=a(17),p=a(18),u=a(7),d=a(19),h=a(20),g=a(63),E=a(64),b=a(65),y=a(66),f=a(67),v=a(68),w=a(69),k=a(21),j=a(32),N="https://harshitanandgupta.github.io/SkillHiring/",C=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).state={isNavOpen:!1},n.toggleNav=n.toggleNav.bind(Object(u.a)(n)),n}return Object(p.a)(a,[{key:"toggleNav",value:function(){this.setState({isNavOpen:!this.state.isNavOpen})}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(g.a,{dark:!0,expand:"md"},l.a.createElement("div",{className:"container"},l.a.createElement(E.a,{onClick:this.toggleNav}),l.a.createElement(b.a,{className:"mr-auto ml-auto",href:"/"},l.a.createElement("img",{src:"assets/images/logo2.png",height:"50",width:"60",alt:"Job"})),l.a.createElement(y.a,{isOpen:this.state.isNavOpen,navbar:!0},l.a.createElement(f.a,{navbar:!0,className:"ml-auto"},l.a.createElement(v.a,null,l.a.createElement(k.b,{className:"nav-link",to:"".concat(N,"/home")},l.a.createElement("span",{className:"fa fa-home fa-lg"})," Home")),l.a.createElement(v.a,null,l.a.createElement(k.b,{className:"nav-link",to:"".concat(N,"/register")},l.a.createElement("span",{className:"fa fa-user-plus fa-lg"})," Register")))))),l.a.createElement(w.a,null,l.a.createElement("div",{className:"justify-content-center"},l.a.createElement("h1",{className:"text-center"},l.a.createElement(j.a,{steps:["Search Employees By Skill",1e3,"Hire Now!!",1e3],loop:1/0,wrapper:"p"})),l.a.createElement("h6",{className:"text-center"},l.a.createElement(j.a,{steps:["",5e3,"Hire Employees based on the skill set you need!",200],loop:1,wrapper:"p"})))))}}]),a}(n.Component),x=a(70),O=a(71),S=a(31);function D(e){var t=e.employee;return l.a.createElement(S.Fade,{in:!0},l.a.createElement("div",{key:t.id,className:"w3-container w3-margin-bottom empmedia mb-4"},l.a.createElement("div",{className:"w3-quarter mt-3"},l.a.createElement("img",{src:N+t.image,alt:t.name,className:"empimg rounded-circle w3-card-4 ml-3"})),l.a.createElement("div",{className:"w3-threequarter"},l.a.createElement("div",{className:"w3-half mb-2"},l.a.createElement("h3",null,t.name),l.a.createElement("h5",null,"Top Skills of the employee"),l.a.createElement("ul",{className:"empskill"},l.a.createElement("li",null,l.a.createElement("strong",null,t.skills[0].type.toUpperCase())),t.skills[1]?l.a.createElement("li",null,l.a.createElement("strong",null,t.skills[1].type.toUpperCase())):{},t.skills[2]?l.a.createElement("li",null,l.a.createElement("strong",null,t.skills[2].type.toUpperCase())):{})),l.a.createElement("div",{className:"w3-half"},l.a.createElement(k.b,{to:"".concat(N,"profile/").concat(t.id)},l.a.createElement("button",{className:"button m-2 mt-5 mr-4 w3-right"},l.a.createElement("span",null,"View Profile")))))))}var _=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(p.a)(a,[{key:"isanyFilter",value:function(e){var t=!1;return Object.keys(e).forEach((function(a){!0===e[a]&&(t=!0)})),t}},{key:"matchedSkillCount",value:function(e,t){var a=0;return Object.keys(t).forEach((function(n){!0===t[n]&&e.forEach((function(e){e.type===n&&(a+=1)}))})),a}},{key:"compare",value:function(e,t){return e.count>t.count?-1:1}},{key:"render",value:function(){var e=this,t=Object.keys(this.props.skills).map((function(t){return!0===e.props.skills[t]?l.a.createElement("h3",{className:"pr-2"},l.a.createElement(x.a,{color:"info",pill:!0},t.toUpperCase())):l.a.createElement("div",null)}));console.log(this.isanyFilter(this.props.skills));var a,n=[];return!0===this.isanyFilter(this.props.skills)?(this.props.employee.forEach((function(t){var a=e.matchedSkillCount(t.skills,e.props.skills);a>0&&n.push(Object(c.a)({},t,{count:a}))})),n.sort(this.compare)):n=this.props.employee,a=0===n.length?l.a.createElement("h3",null,"Sorry , No Registered Employee has this skill!"):n.map((function(e){return l.a.createElement(D,{employee:e})})),l.a.createElement("div",null,l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row pt-4"},l.a.createElement("span",{className:"plus"},l.a.createElement("i",{className:"fa fa-plus-circle plus-1",onClick:this.props.toggleModal}),"    Add skills to filter"))),l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row pt-1"},t)),l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row row-content pt-1"},l.a.createElement("div",{className:"col-12"},l.a.createElement(S.Stagger,{in:!0},l.a.createElement(O.a,{list:!0},a))))))}}]),a}(n.Component),I=a(76),F=a(72),P=a(73),T=a(74),J=a(75);var L=function(e){var t=e.emp,a=t.skills.map((function(e){return l.a.createElement("div",{className:"mt-2"},l.a.createElement("p",null,e.type.toUpperCase()),l.a.createElement("div",{className:"w3-light-grey w3-round-xlarge w3-small mt-2"},l.a.createElement("div",{className:"w3-container w3-center w3-round-xlarge w3-teal",style:{width:"".concat(e.rating,"%")}},e.rating,"%")))})),n=t.experience.map((function(e){return l.a.createElement("div",{className:"w3-container"},l.a.createElement("h5",{className:"w3-opacity"},l.a.createElement("b",null,e.name)),l.a.createElement("h6",{className:"w3-text-teal"},l.a.createElement("i",{className:"fa fa-calendar fa-fw w3-margin-right"}),e.startyear," - ",e.endyear),l.a.createElement("p",null,e.description),l.a.createElement("hr",null))})),r=t.education.map((function(e){return l.a.createElement("div",{className:"w3-container"},l.a.createElement("h5",{className:"w3-opacity"},l.a.createElement("b",null,e.name)),l.a.createElement("h6",{className:"w3-text-teal"},l.a.createElement("i",{className:"fa fa-calendar fa-fw w3-margin-right"}),e.startyear," - ",e.endyear),l.a.createElement("p",null,e.degree),l.a.createElement("hr",null))})),i=t.projects.map((function(e){return l.a.createElement("div",{className:"w3-container"},l.a.createElement("h5",{className:"w3-opacity"},l.a.createElement("b",null,e.name)),l.a.createElement("h6",null,l.a.createElement("span",{className:"w3-opacity"},"Repository Link : "),l.a.createElement("a",{href:e.link},l.a.createElement("span",{className:"w3-text-blue"},e.link))),l.a.createElement("p",null,e.description),l.a.createElement("hr",null))}));return l.a.createElement("div",null,l.a.createElement("div",{className:"w3-content w3-margin-top",style:{maxWidth:"1400px"}},l.a.createElement("div",{className:"w3-row-padding"},l.a.createElement("div",{className:"w3-third"},l.a.createElement("div",{className:"w3-white w3-text-grey w3-card-4"},l.a.createElement("div",{className:"w3-display-container"},l.a.createElement("img",{src:N+t.image,style:{width:"100%",height:"350px"},alt:"Avatar"}),l.a.createElement("div",{className:"w3-display-bottomleft w3-container w3-text-black"},l.a.createElement("strong",null,l.a.createElement("h2",null,t.name)))),l.a.createElement("div",{className:"w3-container mt-2"},l.a.createElement("p",null,l.a.createElement("i",{className:"fa fa-briefcase fa-fw w3-margin-right w3-large w3-text-teal"}),t.designation),l.a.createElement("p",null,l.a.createElement("i",{className:"fa fa-home fa-fw w3-margin-right w3-large w3-text-teal"}),t.address),l.a.createElement("p",null,l.a.createElement("i",{className:"fa fa-envelope fa-fw w3-margin-right w3-large w3-text-teal"}),t.email),l.a.createElement("p",null,l.a.createElement("i",{className:"fa fa-phone fa-fw w3-margin-right w3-large w3-text-teal"}),t.phone),l.a.createElement("p",null,l.a.createElement("strong",null,"About Me:"),t.bio),l.a.createElement("hr",null),l.a.createElement("p",{className:"w3-large"},l.a.createElement("b",null,l.a.createElement("i",{className:"fa fa-asterisk fa-fw w3-margin-right w3-text-teal"}),"Skills")),a,l.a.createElement("br",null),l.a.createElement("p",{className:"w3-large w3-text-theme"},l.a.createElement("b",null,l.a.createElement("i",{className:"fa fa-globe fa-fw w3-margin-right w3-text-teal"}),"Languages")),l.a.createElement("p",null,"English"),l.a.createElement("div",{className:"w3-light-grey w3-round-xlarge"},l.a.createElement("div",{className:"w3-round-xlarge w3-teal",style:{height:"24px",width:"100%"}})),l.a.createElement("p",null,"Hindi"),l.a.createElement("div",{className:"w3-light-grey w3-round-xlarge"},l.a.createElement("div",{className:"w3-round-xlarge w3-teal",style:{height:"24px",width:"55%"}})),l.a.createElement("p",null,"Bengali"),l.a.createElement("div",{className:"w3-light-grey w3-round-xlarge"},l.a.createElement("div",{className:"w3-round-xlarge w3-teal",style:{height:"24px",width:"25%"}})),l.a.createElement("br",null))),l.a.createElement("br",null)),l.a.createElement("div",{className:"w3-twothird"},l.a.createElement("div",{className:"w3-container w3-card w3-white w3-margin-bottom"},l.a.createElement("h2",{className:"w3-text-grey w3-padding-16"},l.a.createElement("i",{className:"fa fa-suitcase fa-fw w3-margin-right w3-xxlarge w3-text-teal"}),"Work Experience"),n),l.a.createElement("div",{className:"w3-container w3-card w3-white w3-margin-bottom"},l.a.createElement("h2",{className:"w3-text-grey w3-padding-16"},l.a.createElement("i",{className:"fa fa-certificate fa-fw w3-margin-right w3-xxlarge w3-text-teal"}),"Education"),r),l.a.createElement("div",{className:"w3-container w3-card w3-white"},l.a.createElement("h2",{className:"w3-text-grey w3-padding-16"},l.a.createElement("i",{className:"fa fa-tasks fa-fw w3-margin-right w3-xxlarge w3-text-teal"}),"Projects"),i)))))},H=a(25);var M=function(){return l.a.createElement("footer",{className:"navbar-dark pt-4"},l.a.createElement("div",{className:"text-center nav-item foot"},"\xa9 2020 Copyright : Harshit Gupta"))},A=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).state={name:"",address:"",email:"",phone:"",designation:"",bio:"",skills:{default:50},experience:{exp1:{orgname:"",startyear:"",endyear:"",description:""}},education:{edu1:{name:"",startyear:"",endyear:"",degree:""}},projects:{pro1:{name:"",link:"",description:""},pro2:{name:"",link:"",description:""}}},n.skillonClick=n.skillonClick.bind(Object(u.a)(n)),n.skillselectchange=n.skillselectchange.bind(Object(u.a)(n)),n.skillsliderchange=n.skillsliderchange.bind(Object(u.a)(n)),n.nameInputChange=n.nameInputChange.bind(Object(u.a)(n)),n.exponClick=n.exponClick.bind(Object(u.a)(n)),n.orgCross=n.orgCross.bind(Object(u.a)(n)),n.handleInputChange=n.handleInputChange.bind(Object(u.a)(n)),n.eduonClick=n.eduonClick.bind(Object(u.a)(n)),n.eduCross=n.eduCross.bind(Object(u.a)(n)),n.proonClick=n.proonClick.bind(Object(u.a)(n)),n.proCross=n.proCross.bind(Object(u.a)(n)),n.skillCross=n.skillCross.bind(Object(u.a)(n)),n.register=n.register.bind(Object(u.a)(n)),n}return Object(p.a)(a,[{key:"compare",value:function(e,t){return parseInt(e.rating)>parseInt(t.rating)?-1:1}},{key:"register",value:function(){var e=this,t=void 0;""!==this.state.name&&""!==this.state.address&&""!==this.state.email&&""!==this.state.bio&&""!==this.state.phone&&""!==this.state.designation||(t="\nPersonal Info Missing");var a=[],n=[],l=[],r=[],i=0;if(Object.keys(this.state.skills).forEach((function(n){if("default"!==n&&void 0!==e.state.skills[n]){var l={id:++i,type:n,rating:e.state.skills[n]};a.push(l)}0===a.length&&(t+=" \nAdd a skill")})),a.sort(this.compare),Object.keys(this.state.experience).forEach((function(a){if(void 0!==e.state.experience[a]){var l={name:e.state.experience[a].orgname,startyear:e.state.experience[a].startyear,endyear:e.state.experience[a].endyear,description:e.state.experience[a].description};""!==l.orgname&&""!==l.startyear&&""!==l.endyear&&""!==l.description?n.push(l):t+=" \nExpirence info missing"}})),Object.keys(this.state.education).forEach((function(a){if(void 0!==e.state.education[a]){var n={name:e.state.education[a].name,startyear:e.state.education[a].startyear,endyear:e.state.education[a].endyear,degree:e.state.education[a].degree};""!==n.name&&""!==n.startyear&&""!==n.endyear&&""!==n.degree?l.push(n):t+=" \nEducational Details Missing"}})),Object.keys(this.state.projects).forEach((function(a){if(void 0!==e.state.projects[a]){var n={name:e.state.projects[a].name,link:e.state.projects[a].link,description:e.state.projects[a].description};""!==n.name&&""!==n.link&&""!==n.description?r.push(n):t+=" \nProject Details Missing"}})),console.log(r),t)alert("Please!Fill in all the feilds "+t);else{var s={name:this.state.name,address:this.state.address,email:this.state.email,phone:this.state.phone,bio:this.state.bio,designation:this.state.designation,skills:a,projects:r,education:l,experience:n};this.props.signup(s),console.log(s),alert("User Successfully Registered...Go to Home Page to filter Employees")}}},{key:"skillonClick",value:function(){this.setState({skills:Object(c.a)({},this.state.skills,{default:"50"})})}},{key:"skillselectchange",value:function(e){var t=this.state.skills;delete t.default,t[e.target.value]="50",t[e.target.id]=void 0,this.setState({skills:t})}},{key:"skillsliderchange",value:function(e){var t=this.state.skills;t[e.target.id]=e.target.value,this.setState({skills:t})}},{key:"nameInputChange",value:function(e){this.setState(Object(s.a)({},e.target.name,e.target.value))}},{key:"exponClick",value:function(){var e="exp"+(Object.keys(this.state.experience).length+1).toString();this.setState({experience:Object(c.a)({},this.state.experience,Object(s.a)({},e,{orgname:"",startyear:"",endyear:"",description:""}))})}},{key:"orgCross",value:function(e){this.setState({experience:Object(c.a)({},this.state.experience,Object(s.a)({},e.target.id,void 0))})}},{key:"eduonClick",value:function(){var e="edu"+(Object.keys(this.state.education).length+1).toString();this.setState({education:Object(c.a)({},this.state.education,Object(s.a)({},e,{name:"",startyear:"",endyear:"",degree:""}))})}},{key:"eduCross",value:function(e){this.setState({education:Object(c.a)({},this.state.education,Object(s.a)({},e.target.id,void 0))})}},{key:"proCross",value:function(e){this.setState({projects:Object(c.a)({},this.state.projects,Object(s.a)({},e.target.id,void 0))})}},{key:"skillCross",value:function(e){this.setState({skills:Object(c.a)({},this.state.skills,Object(s.a)({},e.target.id,void 0))})}},{key:"proonClick",value:function(){var e="pro"+(Object.keys(this.state.projects).length+1).toString();this.setState({projects:Object(c.a)({},this.state.projects,Object(s.a)({},e,{name:"",link:"",description:""}))})}},{key:"handleInputChange",value:function(e){var t=e.target.id.split("_");if("org"===t[0]){var a="exp"+t[2].toString(),n=t[1];this.setState({experience:Object(c.a)({},this.state.experience,Object(s.a)({},a,Object(c.a)({},this.state.experience[a],Object(s.a)({},n,e.target.value))))})}if("edu"===t[0]){var l="edu"+t[2].toString(),r=t[1];this.setState({education:Object(c.a)({},this.state.education,Object(s.a)({},l,Object(c.a)({},this.state.education[l],Object(s.a)({},r,e.target.value))))})}if("pro"===t[0]){var i="pro"+t[2].toString(),o=t[1];this.setState({projects:Object(c.a)({},this.state.projects,Object(s.a)({},i,Object(c.a)({},this.state.projects[i],Object(s.a)({},o,e.target.value))))})}}},{key:"render",value:function(){var e=this;console.log(this.state.experience);var t=Object.keys(this.state.skills).map((function(t){return void 0!==e.state.skills[t]?l.a.createElement("div",null,l.a.createElement("i",{className:"fa fa-times plus-2 pull-right fa-lg",style:{color:"red"},id:t,onClick:e.skillCross}),l.a.createElement("div",{className:"w3-row-padding"},l.a.createElement("div",{className:"w3-third"},l.a.createElement("select",{className:"w3-select",name:"option",value:t,onChange:e.skillselectchange,id:t},l.a.createElement("option",{value:"default",disabled:!0},"Choose"),l.a.createElement("option",{value:"c"},"C"),l.a.createElement("option",{value:"cpp"},"C++"),l.a.createElement("option",{value:"java"},"Java"),l.a.createElement("option",{value:"python"},"Python"),l.a.createElement("option",{value:"nodejs"},"Node JS"),l.a.createElement("option",{value:"reactjs"},"React JS"),l.a.createElement("option",{value:"rubyonrails"},"RubyOnRails"),l.a.createElement("option",{value:"angularjs"},"Angular JS"),l.a.createElement("option",{value:"devops"},"DevOps"))),l.a.createElement("div",{className:"w3-twothird pl-2 pt-2"},l.a.createElement("p",null,"Rating : ",l.a.createElement("input",{type:"range",min:"1",max:"100",value:e.state.skills[t],id:t,onChange:e.skillsliderchange}))))):l.a.createElement("div",null)})),a=0,n=Object.keys(this.state.experience).map((function(t){if(void 0!==e.state.experience[t]){var n=t.charAt(t.length-1);return a++,l.a.createElement("div",{className:"mb-4"},l.a.createElement("i",{className:"fa fa-times plus-2 pull-right fa-lg",style:{color:"red"},id:t,onClick:e.orgCross}),l.a.createElement("label",{htmlFor:"org_orgname_".concat(n)},l.a.createElement("b",null,a,". Organisation Name ")),l.a.createElement("input",{id:"org_orgname_".concat(n),className:"w3-input w3-animate-input",type:"text",style:{width:"50%"},placeholder:"Company Name",value:e.state.experience[t].orgname,onChange:e.handleInputChange}),l.a.createElement("br",null),l.a.createElement("div",{className:"w3-half"},l.a.createElement("label",{htmlFor:"org_startyear_".concat(n)},l.a.createElement("b",null,"Start Year")),l.a.createElement("input",{name:"org_startyear_".concat(n),id:"org_startyear_".concat(n),className:"w3-input w3-animate-input",type:"text",placeholder:"Month,Year",value:e.state.experience[t].startyear,style:{width:"60%"},onChange:e.handleInputChange})),l.a.createElement("div",{className:"w3-half"},l.a.createElement("label",{htmlFor:"org_endyear_".concat(n)},l.a.createElement("b",null,"End Year")),l.a.createElement("input",{name:"org_endyear_".concat(n),id:"org_endyear_".concat(n),className:"w3-input w3-animate-input",type:"text",placeholder:"Month,Year",value:e.state.experience[t].endyear,style:{width:"60%"},onChange:e.handleInputChange}),l.a.createElement("br",null)),l.a.createElement("label",{htmlFor:"org_description_".concat(n)},l.a.createElement("b",null,"Description")),l.a.createElement("textarea",{id:"org_description_".concat(n),className:"w3-input w3-animate-input",type:"text",placeholder:"Describe Your Role",value:e.state.experience[t].description,name:"org_description_year".concat(n),onChange:e.handleInputChange}),l.a.createElement("hr",null))}return l.a.createElement("div",null)})),r=0,i=Object.keys(this.state.education).map((function(t){if(void 0!==e.state.education[t]){var a=t.charAt(t.length-1);return r++,l.a.createElement("div",{className:"mb-4"},l.a.createElement("i",{className:"fa fa-times plus-2 pull-right fa-lg",id:t,onClick:e.eduCross,style:{color:"red"}}),l.a.createElement("label",{htmlFor:"edu_name_".concat(a)},l.a.createElement("b",null,r,". Institute  Name ")),l.a.createElement("input",{id:"edu_name_".concat(a),className:"w3-input w3-animate-input",type:"text",style:{width:"50%"},placeholder:"Institue Name",value:e.state.education[t].name,onChange:e.handleInputChange}),l.a.createElement("br",null),l.a.createElement("div",{className:"w3-half"},l.a.createElement("label",{htmlFor:"edu_startyear_".concat(a)},l.a.createElement("b",null,"Start Year")),l.a.createElement("input",{name:"edu_startyear_".concat(a),id:"edu_startyear_".concat(a),className:"w3-input w3-animate-input",type:"text",placeholder:"Year",value:e.state.education[t].startyear,style:{width:"60%"},onChange:e.handleInputChange})),l.a.createElement("div",{className:"w3-half"},l.a.createElement("label",{htmlFor:"edu_endyear_".concat(a)},l.a.createElement("b",null,"End Year")),l.a.createElement("input",{name:"edu_endyear_".concat(a),id:"edu_endyear_".concat(a),className:"w3-input w3-animate-input",type:"text",placeholder:"Year",value:e.state.education[t].endyear,style:{width:"60%"},onChange:e.handleInputChange}),l.a.createElement("br",null)),l.a.createElement("label",{htmlFor:"edu_degree_".concat(a)},l.a.createElement("b",null,"Degree")),l.a.createElement("input",{id:"edu_degree_".concat(a),className:"w3-input w3-animate-input",type:"text",placeholder:"Degree Awarded",value:e.state.education[t].degree,name:"edu_degree_".concat(a),onChange:e.handleInputChange}),l.a.createElement("hr",null))}return l.a.createElement("div",null)})),s=0,c=Object.keys(this.state.projects).map((function(t){if(void 0!==e.state.projects[t]){var a=t.charAt(t.length-1);return s++,l.a.createElement("div",{className:"mb-4"},l.a.createElement("i",{className:"fa fa-times plus-2 pull-right fa-lg",id:t,onClick:e.proCross,style:{color:"red"}}),l.a.createElement("label",{htmlFor:"pro_name_".concat(a)},l.a.createElement("b",null,s,". Project Name ")),l.a.createElement("input",{id:"pro_name_".concat(a),className:"w3-input w3-animate-input",type:"text",style:{width:"50%"},placeholder:"Project Name",value:e.state.projects[t].name,onChange:e.handleInputChange}),l.a.createElement("br",null),l.a.createElement("label",{htmlFor:"pro_link_".concat(a)},l.a.createElement("b",null,"Link")),l.a.createElement("input",{name:"pro_link_".concat(a),id:"pro_link_".concat(a),className:"w3-input w3-animate-input",type:"text",placeholder:"Paste Link",value:e.state.projects[t].link,style:{width:"60%"},onChange:e.handleInputChange}),l.a.createElement("br",null),l.a.createElement("label",{htmlFor:"pro_description_".concat(a)},l.a.createElement("b",null,"Description")),l.a.createElement("textarea",{id:"pro_description_".concat(a),className:"w3-input w3-animate-input",type:"text",placeholder:"Describe Your Project",value:e.state.projects[t].description,name:"pro_description_".concat(a),onChange:e.handleInputChange}),l.a.createElement("hr",null))}return l.a.createElement("div",null)}));return l.a.createElement("div",{className:"w3-container"},l.a.createElement("h2",{className:"w3-text-black w3-center m-4"},"Employee Registration Form"),l.a.createElement("div",{className:"w3-third"},l.a.createElement("div",{className:"w3-card-4 w3-margin-right w3-margin-bottom p-3"},l.a.createElement("h2",{className:"w3-text-grey w3-padding-16"},l.a.createElement("i",{className:"fa fa-user fa-fw w3-margin-right w3-xxlarge w3-text-teal"}),"Personal Info"),l.a.createElement("label",{htmlFor:"name"},l.a.createElement("b",null,"Name")),l.a.createElement("input",{name:"name",id:"name",className:"w3-input w3-animate-input",type:"text",style:{width:"50%"},placeholder:"Enter Your Name",value:this.state.name,onChange:this.nameInputChange}),l.a.createElement("br",null),l.a.createElement("label",{htmlFor:"address"},l.a.createElement("b",null,"Address")),l.a.createElement("input",{name:"address",id:"address",className:"w3-input w3-animate-input",value:this.state.address,type:"text",style:{width:"80%"},placeholder:"Enter Your Place",onChange:this.nameInputChange}),l.a.createElement("br",null),l.a.createElement("label",{htmlFor:"email"},l.a.createElement("b",null,"Email")),l.a.createElement("input",{name:"email",id:"email",className:"w3-input w3-animate-input",type:"text",style:{width:"80%"},value:this.state.email,placeholder:"Enter Your Email",onChange:this.nameInputChange}),l.a.createElement("br",null),l.a.createElement("label",{htmlFor:"phone"},l.a.createElement("b",null,"Phone Number")),l.a.createElement("input",{name:"phone",id:"phone",className:"w3-input w3-animate-input",type:"text",style:{width:"50%"},value:this.state.phone,placeholder:"Enter Your Phone",onChange:this.nameInputChange}),l.a.createElement("br",null),l.a.createElement("label",{htmlFor:"designation"},l.a.createElement("b",null,"Designation")),l.a.createElement("input",{name:"designation",id:"designation",className:"w3-input w3-animate-input",type:"text",style:{width:"30%"},value:this.state.designation,placeholder:"Designation",onChange:this.nameInputChange}),l.a.createElement("br",null),l.a.createElement("label",{htmlFor:"bio"},l.a.createElement("b",null,"Bio")),l.a.createElement("textarea",{name:"bio",id:"bio",className:"w3-input w3-animate-input",style:{width:"100%"},value:this.state.bio,placeholder:"Describe Yourself",onChange:this.nameInputChange})),l.a.createElement("div",{className:"w3-card-4  w3-margin-right w3-margin-bottom p-3"},l.a.createElement("h2",{className:"w3-text-grey w3-padding-16"},l.a.createElement("i",{className:"fa fa-asterisk  fa-fw w3-margin-right w3-xxlarge w3-text-teal"}),"Skills ",l.a.createElement("i",{className:"fa fa-plus-circle plus-2 pull-right",onClick:this.skillonClick})),t)),l.a.createElement("div",{className:"w3-third"},l.a.createElement("div",{className:"w3-card-4 w3-margin-bottom w3-margin-right p-3"},l.a.createElement("h2",{className:"w3-text-grey w3-padding-16"},l.a.createElement("i",{className:"fa fa-suitcase fa-fw w3-margin-right w3-xxlarge w3-text-teal"}),"Work Experience ",l.a.createElement("i",{className:"fa fa-plus-circle plus-2 pull-right",onClick:this.exponClick})),n),l.a.createElement("div",{className:"w3-card-4 w3-margin-bottom w3-margin-right p-3"},l.a.createElement("h2",{className:"w3-text-grey w3-padding-16"},l.a.createElement("i",{className:"fa fa-certificate fa-fw w3-margin-right w3-xxlarge w3-text-teal"}),"Education ",l.a.createElement("i",{className:"fa fa-plus-circle plus-2 pull-right",onClick:this.eduonClick})),i)),l.a.createElement("div",{className:"w3-third"},l.a.createElement("div",{className:"w3-card-4 w3-margin-bottom w3-margin-right p-3"},l.a.createElement("h2",{className:"w3-text-grey w3-padding-16"},l.a.createElement("i",{className:"fa fa-tasks fa-fw w3-margin-right w3-xxlarge w3-text-teal"}),"Projects",l.a.createElement("i",{className:"fa fa-plus-circle plus-2 pull-right",onClick:this.proonClick})),c),l.a.createElement("button",{type:"submit",className:"button pull-right mb-3 p-2",onClick:this.register},"Register Now")))}}]),a}(n.Component),R=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).state={ishomeModalOpen:!1,skills:{c:!1,cpp:!1,java:!1,python:!1,nodejs:!1,reactjs:!1,rubyonrails:!1,angularjs:!1,devops:!1},employee:[{id:1,name:"Harshit Gupta",image:"assets/images/3.png",address:"Kolkata,India",phone:"+917003214924",email:"harshitanandgupta@gmail.com",designation:"Software Developer",experience:[{name:"XYZ Limited",startyear:"Jan 2016",endyear:"Current",description:"Lorem ipsum dolor sit amet. Praesentium magnam consectetur vel in deserunt aspernatur est reprehenderit sunt hic. Nulla tempora soluta ea et odio, unde doloremque repellendus iure, iste."},{name:"TechSolutions Limited",startyear:"Jun 2014",endyear:"Jan 2016",description:"Lorem ipsum dolor sit amet. Praesentium magnam consectetur vel in deserunt aspernatur est reprehenderit sunt hic. Nulla tempora soluta ea et odio, unde doloremque repellendus iure, iste."}],projects:[{name:"Weather App",link:"https://link1.com",description:"Describing the project...Describing the project...Describing the project...Describing the project..."},{name:"Health Shopping",link:"https://link2.com",description:"Describing the project...Describing the project...Describing the project...Describing the project..."}],education:[{name:"Delhi Public School",degree:"High School",startyear:"2014",endyear:"2016"},{name:"Techology of College",degree:"BTech",startyear:"2016",endyear:"2020"}],bio:"This is a test bio of a Employee.This is a test bio of a Employee.This is a test bio of a Employee.",skills:[{id:1,type:"nodejs",rating:90},{id:2,type:"reactjs",rating:40},{id:3,type:"angularjs",rating:30}]},{id:2,name:"John Snow",image:"assets/images/2.png",address:"Delhi,India",phone:"+917743214924",email:"hanhgmnandgupta@gmail.com",designation:"Software Developer",experience:[{name:"XYZ Limited",startyear:"Jan 2016",endyear:"Current",description:"Lorem ipsum dolor sit amet. Praesentium magnam consectetur vel in deserunt aspernatur est reprehenderit sunt hic. Nulla tempora soluta ea et odio, unde doloremque repellendus iure, iste."},{name:"TechSolutions Limited",startyear:"Jun 2014",endyear:"Jan 2016",description:"Lorem ipsum dolor sit amet. Praesentium magnam consectetur vel in deserunt aspernatur est reprehenderit sunt hic. Nulla tempora soluta ea et odio, unde doloremque repellendus iure, iste."}],projects:[{name:"Weather App",link:"https://link1.com",description:"Describing the project...Describing the project...Describing the project...Describing the project..."},{name:"Health Shopping",link:"https://link2.com",description:"Describing the project...Describing the project...Describing the project...Describing the project..."}],education:[{name:"Delhi Public School",degree:"High School",startyear:"2014",endyear:"2016"},{name:"Techology of College",degree:"BTech",startyear:"2016",endyear:"2020"}],bio:"This is a test bio of a Employee.This is a test bio of a Employee.This is a test bio of a Employee.",skills:[{id:1,type:"cpp",rating:90},{id:2,type:"java",rating:40},{id:3,type:"reactjs",rating:30}]},{id:3,name:"Mary Rose",image:"assets/images/1.png",address:"Kolkata,India",phone:"+91453214924",email:"dfsfdfndgupta@gmail.com",designation:"Software Developer II",experience:[{name:"XYZ Limited",startyear:"Jan 2016",endyear:"Current",description:"Lorem ipsum dolor sit amet. Praesentium magnam consectetur vel in deserunt aspernatur est reprehenderit sunt hic. Nulla tempora soluta ea et odio, unde doloremque repellendus iure, iste."},{name:"TechSolutions Limited",startyear:"Jun 2014",endyear:"Jan 2016",description:"Lorem ipsum dolor sit amet. Praesentium magnam consectetur vel in deserunt aspernatur est reprehenderit sunt hic. Nulla tempora soluta ea et odio, unde doloremque repellendus iure, iste."}],projects:[{name:"Cab App",link:"https://link1.com",description:"Describing the project...Describing the project...Describing the project...Describing the project..."},{name:"Health Shopping",link:"https://link2.com",description:"Describing the project...Describing the project...Describing the project...Describing the project..."}],education:[{name:"National Public School",degree:"High School",startyear:"2014",endyear:"2016"},{name:"College of Engginering",degree:"BTech",startyear:"2016",endyear:"2020"}],bio:"This is a test bio of a Employee.This is a test bio of a Employee.This is a test bio of a Employee.",skills:[{id:1,type:"c",rating:90},{id:2,type:"cpp",rating:40},{id:3,type:"python",rating:30}]},{id:4,name:"Josepina Albert",image:"assets/images/4.png",address:"Kolkata,India",phone:"+911403214924",email:"harhiupta@gmail.com",designation:"Software Developer",experience:[{name:"XYZ Limited",startyear:"Jan 2016",endyear:"Current",description:"Lorem ipsum dolor sit amet. Praesentium magnam consectetur vel in deserunt aspernatur est reprehenderit sunt hic. Nulla tempora soluta ea et odio, unde doloremque repellendus iure, iste."},{name:"TechSolutions Limited",startyear:"Jun 2014",endyear:"Jan 2016",description:"Lorem ipsum dolor sit amet. Praesentium magnam consectetur vel in deserunt aspernatur est reprehenderit sunt hic. Nulla tempora soluta ea et odio, unde doloremque repellendus iure, iste."}],projects:[{name:"Weather App",link:"https://link1.com",description:"Describing the project...Describing the project...Describing the project...Describing the project..."},{name:"Health Shopping",link:"https://link2.com",description:"Describing the project...Describing the project...Describing the project...Describing the project..."}],education:[{name:"Delhi Public School",degree:"High School",startyear:"2014",endyear:"2016"},{name:"Techology of College",degree:"BTech",startyear:"2016",endyear:"2020"}],bio:"This is a test bio of a Employee.This is a test bio of a Employee.This is a test bio of a Employee.",skills:[{id:1,type:"devops",rating:90},{id:2,type:"rubyonrails",rating:40},{id:3,type:"C",rating:30}]},{id:5,name:"Doe Bravo",image:"assets/images/5.png",address:"Kolkata,India",phone:"+917003214924",email:"harshitanandgupta@gmail.com",designation:"Software Developer",experience:[{name:"XYZ Limited",startyear:"Jan 2016",endyear:"Current",description:"Lorem ipsum dolor sit amet. Praesentium magnam consectetur vel in deserunt aspernatur est reprehenderit sunt hic. Nulla tempora soluta ea et odio, unde doloremque repellendus iure, iste."},{name:"TechSolutions Limited",startyear:"Jun 2014",endyear:"Jan 2016",description:"Lorem ipsum dolor sit amet. Praesentium magnam consectetur vel in deserunt aspernatur est reprehenderit sunt hic. Nulla tempora soluta ea et odio, unde doloremque repellendus iure, iste."}],projects:[{name:"Weather App",link:"https://link1.com",description:"Describing the project...Describing the project...Describing the project...Describing the project..."},{name:"Health Shopping",link:"https://link2.com",description:"Describing the project...Describing the project...Describing the project...Describing the project..."}],education:[{name:"Delhi Public School",degree:"High School",startyear:"2014",endyear:"2016"},{name:"Techology of College",degree:"BTech",startyear:"2016",endyear:"2020"}],bio:"This is a test bio of a Employee.This is a test bio of a Employee.This is a test bio of a Employee.",skills:[{id:1,type:"nodejs",rating:90},{id:2,type:"reactjs",rating:40},{id:3,type:"angularjs",rating:30}]}]},n.changeSkill=n.changeSkill.bind(Object(u.a)(n)),n.toggleHomeModal=n.toggleHomeModal.bind(Object(u.a)(n)),n.handleInputChange=n.handleInputChange.bind(Object(u.a)(n)),n.register=n.register.bind(Object(u.a)(n)),n}return Object(p.a)(a,[{key:"register",value:function(e){e.id=this.state.employee.length+1,e.image="assets/images/default.png",this.setState({employee:[].concat(Object(o.a)(this.state.employee),[e])})}},{key:"changeSkill",value:function(e){this.setState({skills:e})}},{key:"toggleHomeModal",value:function(){this.setState({ishomeModalOpen:!this.state.ishomeModalOpen})}},{key:"handleInputChange",value:function(e){var t=e.target,a=t.checked,n=t.name;this.changeSkill(Object(c.a)({},this.state.skills,Object(s.a)({},n,a)))}},{key:"handleSubmit",value:function(e){this.toggleHomeModal(),e.preventDefault(),this.render()}},{key:"render",value:function(){var e=this;return l.a.createElement("div",null,l.a.createElement(C,null),l.a.createElement(I.a,{isOpen:this.state.ishomeModalOpen,toggle:this.toggleHomeModal},l.a.createElement(F.a,{toggle:this.toggleHomeModal},"ADD SKILLS"),l.a.createElement(P.a,{className:"modal-bdy"},l.a.createElement(T.a,{className:"form",onSubmit:function(t){return e.handleSubmit(t)}},l.a.createElement("div",null,l.a.createElement("div",{className:"inputGroup"},l.a.createElement("input",{id:"c",name:"c",type:"checkbox",onChange:this.handleInputChange,defaultChecked:this.state.skills.c}),l.a.createElement("label",{htmlFor:"c"},"C")),l.a.createElement("div",{className:"inputGroup"},l.a.createElement("input",{id:"cpp",name:"cpp",type:"checkbox",onChange:this.handleInputChange,defaultChecked:this.state.skills.cpp}),l.a.createElement("label",{htmlFor:"cpp"},"C++")),l.a.createElement("div",{className:"inputGroup"},l.a.createElement("input",{id:"python",name:"python",type:"checkbox",onChange:this.handleInputChange,defaultChecked:this.state.skills.python}),l.a.createElement("label",{htmlFor:"python"},"Python")),l.a.createElement("div",{className:"inputGroup"},l.a.createElement("input",{id:"java",name:"java",type:"checkbox",onChange:this.handleInputChange,defaultChecked:this.state.skills.java}),l.a.createElement("label",{htmlFor:"java"},"Java")),l.a.createElement("div",{className:"inputGroup"},l.a.createElement("input",{id:"reactjs",name:"reactjs",type:"checkbox",onChange:this.handleInputChange,defaultChecked:this.state.skills.reactjs}),l.a.createElement("label",{htmlFor:"reactjs"},"React JS")),l.a.createElement("div",{className:"inputGroup"},l.a.createElement("input",{id:"angularjs",name:"angularjs",type:"checkbox",onChange:this.handleInputChange,defaultChecked:this.state.skills.angularjs}),l.a.createElement("label",{htmlFor:"angularjs"},"Angular JS")),l.a.createElement("div",{className:"inputGroup"},l.a.createElement("input",{id:"nodejs",name:"nodejs",type:"checkbox",onChange:this.handleInputChange,defaultChecked:this.state.skills.nodejs}),l.a.createElement("label",{htmlFor:"nodejs"},"Node JS")),l.a.createElement("div",{className:"inputGroup"},l.a.createElement("input",{id:"devops",name:"devops",type:"checkbox",onChange:this.handleInputChange,defaultChecked:this.state.skills.devops}),l.a.createElement("label",{htmlFor:"devops"},"DevOps")),l.a.createElement("div",{className:"inputGroup"},l.a.createElement("input",{id:"rubyonrails",name:"rubyonrails",type:"checkbox",onChange:this.handleInputChange,defaultChecked:this.state.skills.rubyonrails}),l.a.createElement("label",{htmlFor:"rubyonrails"},"Ruby on Rails"))),l.a.createElement(J.a,{type:"submit",color:"primary"},"Add")))),l.a.createElement(H.Switch,null,l.a.createElement(H.Route,{path:"/home",component:function(){return l.a.createElement(_,{skills:e.state.skills,employee:e.state.employee,changeSkill:e.changeSkill,toggleModal:e.toggleHomeModal,isModalopen:e.state.ishomeModalOpen})}}),l.a.createElement(H.Route,{exact:!0,path:"/profile/:id",component:function(t){var a=t.match;return l.a.createElement(L,{emp:e.state.employee.filter((function(e){return e.id===parseInt(a.params.id,10)}))[0]})}}),l.a.createElement(H.Route,{exact:!0,path:"/register",component:function(){return l.a.createElement(A,{signup:e.register})}}),l.a.createElement(H.Redirect,{to:"/home"})),l.a.createElement(M,null))}}]),a}(n.Component);var Y=function(){return l.a.createElement(k.a,null,l.a.createElement("div",null,l.a.createElement(R,null)))},q=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function G(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}i.a.render(l.a.createElement(Y,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/SkillHiring",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("/SkillHiring","/service-worker.js");q?(!function(e){fetch(e).then((function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):G(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")}))):G(e)}))}}()}},[[41,1,2]]]);
//# sourceMappingURL=main.e4f33d10.chunk.js.map