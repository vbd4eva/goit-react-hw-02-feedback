(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{1:function(e,t,a){e.exports={container:"Statistics_container__3EfgV",positivePercentage:"Statistics_positivePercentage__pGTUH",results:"Statistics_results__EOrQM",value:"Statistics_value__kXS6f",total:"Statistics_total__15B-u"}},10:function(e,t,a){e.exports={btn:"FeedbackOptions_btn__16kzW"}},20:function(e,t,a){},21:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a(2),s=a.n(c),r=a(5),i=a.n(r),o=a(6),l=a(7),u=a(8),d=a(12),j=a(11),b=a(4),v=a.n(b);function h(e){var t=e.title,a=e.rank,c=s.a.createElement("h"+a,{className:"h"+a},t);return Object(n.jsx)(n.Fragment,{children:c})}h.defaultProps={rank:2},h.propTypes={title:v.a.string.isRequired,rank:v.a.string.isRequired};var p=h,O=a(9),k=a.n(O);var m=function(e){var t=e.title,a=e.headerRank,c=e.children;return Object(n.jsxs)("section",{className:k.a.section,children:[Object(n.jsx)(p,{title:t,rank:a}),c]})},x=a(10),f=a.n(x);var g=function(e){var t=e.options,a=e.onLeaveFeedback;return Object(n.jsx)("div",{children:t.map((function(e){return Object(n.jsx)("button",{className:f.a.btn,name:e,onClick:a,children:e},e)}))})},_=a(1),N=a.n(_);var F=function(e){var t=e.good,a=e.neutral,c=e.bad,s=e.total,r=e.positivePercentage;return Object(n.jsxs)("div",{className:N.a.container,children:[Object(n.jsxs)("div",{class:N.a.results,children:[Object(n.jsxs)("p",{className:N.a.name,children:["Good: ",Object(n.jsx)("span",{className:N.a.value,children:t})]}),Object(n.jsxs)("p",{className:N.a.name,children:["Neutral: ",Object(n.jsx)("span",{className:N.a.value,children:a})]}),Object(n.jsxs)("p",{className:N.a.name,children:["Bad: ",Object(n.jsx)("span",{className:N.a.value,children:c})]})]}),Object(n.jsxs)("p",{className:N.a.total,children:["Total: ",Object(n.jsx)("span",{className:N.a.value,children:s})]}),t>0&&Object(n.jsxs)("p",{className:N.a.positivePercentage,children:["Positive feedback: ",Object(n.jsx)("span",{className:N.a.value,children:r}),"%"]})]})};var P=function(e){var t=e.message;return Object(n.jsx)("p",{className:"messageNotification",children:t})},S=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={good:0,neutral:0,bad:0},e.voteFeedback=function(t){var a=e.state[t.currentTarget.name]+1;e.setState(Object(o.a)({},t.currentTarget.name,a))},e.countTotalFeedback=function(){return Object.keys(e.state).reduce((function(t,a){return t+e.state[a]}),0)},e.countPositiveFeedbackPercentage=function(){return Math.round(100*e.state.good/e.countTotalFeedback())},e}return Object(u.a)(a,[{key:"render",value:function(){var e=this.countTotalFeedback(),t=this.countPositiveFeedbackPercentage(),a=this.state,c=a.good,s=a.neutral,r=a.bad,i=Object.keys(this.state);return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(m,{title:"Please leave feedback",headerRank:"1",children:Object(n.jsx)(g,{options:i,onLeaveFeedback:this.voteFeedback})}),Object(n.jsx)(m,{title:"Statistic",headerRank:"2",children:e>0?Object(n.jsx)(F,{good:c,neutral:s,bad:r,total:e,positivePercentage:t}):Object(n.jsx)(P,{message:"No feedback given"})})]})}}]),a}(c.Component);var T=function(){return Object(n.jsx)(S,{})};a(20);i.a.render(Object(n.jsx)(s.a.StrictMode,{children:Object(n.jsx)(T,{})}),document.getElementById("root"))},9:function(e,t,a){e.exports={section:"Section_section__1CWkn"}}},[[21,1,2]]]);
//# sourceMappingURL=main.c2016cdb.chunk.js.map