(this["webpackJsonpplaten-project"]=this["webpackJsonpplaten-project"]||[]).push([[0],{111:function(e,t,a){e.exports=a.p+"static/media/bruno-emmanuelle-Gi6-m_t_W-E-unsplash.8547f1f5.jpg"},127:function(e,t,a){},225:function(e,t,a){e.exports=a(431)},230:function(e,t,a){},231:function(e,t,a){},253:function(e,t,a){},255:function(e,t,a){},256:function(e,t,a){},430:function(e,t,a){},431:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),l=a(23),c=a.n(l),o=(a(230),a(19)),s=(a(231),a(58)),m=a.n(s),i="https://de-platenkoffer.herokuapp.com/api",u=(a(248),a(127),a(441));function d(e){return e.show?(console.log(e.artists),r.a.createElement("div",{className:"artistList"},e.artists?e.artists.map((function(t,a){return r.a.createElement("a",{style:{cursor:"pointer"},className:"artistBtn",onClick:function(){e.chooseArtist(t)},key:"artist"+a},r.a.createElement(u.a,{style:{width:"18rem"}},t.images.length?r.a.createElement(u.a.Img,{variant:"top",src:t.images[0].url}):r.a.createElement(u.a.Img,{variant:"top",src:e.DefaultImg}),r.a.createElement(u.a.Body,null,r.a.createElement(u.a.Title,null,t.name))))})):r.a.createElement("p",null,"Search for an artist"))):r.a.createElement(r.a.Fragment,null)}var E=a(10);function p(e){return e.toMyList?r.a.createElement(E.a,{to:"/myhome"}):e.show?r.a.createElement("div",{className:"artistList"},e.albums?e.albums.map((function(t,a){return r.a.createElement("a",{id:"add-card",style:{cursor:"pointer"},className:"artistBtn",onClick:function(){e.addAlbum(t)},key:"albums"+a},r.a.createElement(u.a,{style:{width:"18rem"}},t.images.length?r.a.createElement(u.a.Img,{variant:"top",src:t.images[0].url}):r.a.createElement(u.a.Img,{variant:"top",src:e.DefaultImg}),r.a.createElement(u.a.Body,null,r.a.createElement(u.a.Title,null,t.name))))})):r.a.createElement(r.a.Fragment,null)):r.a.createElement(r.a.Fragment,null)}var h=a(437),f=a(442),b=a(176);a(253);function g(e){var t=Object(n.useState)(null),a=Object(o.a)(t,2),l=a[0],c=a[1];return r.a.createElement(h.a,null,r.a.createElement(f.a,{type:"text",placeholder:"What is the artists name?",name:"artistName",onChange:function(e){var t=e.currentTarget.value;c(t)}}),r.a.createElement(h.a.Append,null,r.a.createElement(b.a,{onClick:function(){return e.onSearch(l)}},"Search artist")))}var y=a(111),v=a.n(y),k=a(439),A=a(440),S=a(12);function w(){return r.a.createElement(k.a,{sticky:"top",variant:"dark",style:{height:"50px",backgroundColor:"#3baada"}},r.a.createElement(A.a,{className:"mr-auto"},r.a.createElement(A.a.Item,null,r.a.createElement(S.b,{to:"/"},r.a.createElement("img",{src:"".concat("https://de-platenkoffer.herokuapp.com/","/vinyl.png"),style:{width:"40px",height:"auto"}}))),r.a.createElement(A.a.Item,null,r.a.createElement(S.b,{to:"/myhome"},r.a.createElement(b.a,{style:{border:"none",backgroundColor:"transparent",color:"white"}},"My LP's"))),r.a.createElement(A.a.Item,null,r.a.createElement(S.b,{to:"/add-album"},r.a.createElement(b.a,{style:{border:"none",backgroundColor:"transparent",color:"white"}},"Add LP"))),r.a.createElement(A.a.Item,null,r.a.createElement(S.b,{to:"/stats"},r.a.createElement(b.a,{style:{border:"none",backgroundColor:"transparent",color:"white"}},"Stats")))))}function C(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(w,null),r.a.createElement("div",null,r.a.createElement(g,{onSearch:e.handleArtistSearch}),r.a.createElement(d,{artists:e.artists,chooseArtist:e.handlePickArtist,show:e.showArtists,DefaultImg:v.a}),r.a.createElement(p,{show:e.showAlbums,albums:e.albums,addAlbum:e.handleAdd,toMyList:e.toMyList,DefaultImg:v.a,myAlbums:e.myAlbums})))}var x=a(178),I=a.n(x),j=(a(255),a(438));a(256);function O(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("input",{type:"text",onChange:e.searchMyAlbums,className:"search-input",placeholder:"Search by artist or album name"}),r.a.createElement(j.a,{className:"dropdowner"},r.a.createElement(j.a.Toggle,{id:"dropdown-basic",className:"dropDown-btn"},"Sort by genre"),r.a.createElement(j.a.Menu,null,r.a.createElement(j.a.Item,{onClick:e.sortGenre},"Show All"),r.a.createElement(j.a.Item,{onClick:e.sortGenre},"Blues"),r.a.createElement(j.a.Item,{onClick:e.sortGenre},"Classic"),r.a.createElement(j.a.Item,{onClick:e.sortGenre},"Disco"),r.a.createElement(j.a.Item,{onClick:e.sortGenre},"Electronic"),r.a.createElement(j.a.Item,{onClick:e.sortGenre},"Hiphop"),r.a.createElement(j.a.Item,{onClick:e.sortGenre},"Jazz"),r.a.createElement(j.a.Item,{onClick:e.sortGenre},"Soul"),r.a.createElement(j.a.Item,{onClick:e.sortGenre},"Soundtrack"),r.a.createElement(j.a.Item,{onClick:e.sortGenre},"Pop"),r.a.createElement(j.a.Item,{onClick:e.sortGenre},"Rock"))))}function N(e){return e.myAlbums?r.a.createElement(r.a.Fragment,null,r.a.createElement(w,null),r.a.createElement("div",{style:{display:"flex"},className:"home-myAlbums"},r.a.createElement("div",null,r.a.createElement(O,{searchMyAlbums:e.searchMyAlbums,sortGenre:e.sortGenre}),r.a.createElement("div",{className:"myAlbumsList"},e.myAlbums.map((function(e,t){return r.a.createElement(u.a,{key:"myalbum"+t,style:{width:"18rem"}},r.a.createElement(u.a.Img,{src:e.image}),r.a.createElement(u.a.Body,{className:"card-body"},r.a.createElement(u.a.Title,null,e.name),r.a.createElement(u.a.Subtitle,{className:"mb-2 text-muted"},e.artist.map((function(e,t){return r.a.createElement("p",{key:"arti"+t},e.name)}))),r.a.createElement(u.a.Text,{style:{fontSize:"12px"}},r.a.createElement("br",null),"Release: ",I()(e.release_date).format("MMMM YYYY"))))})))),r.a.createElement("div",{style:{width:"10%",display:"flex",flexDirection:"column",justifyContent:"space-around",marginRight:"10px"}},["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"].map((function(e,t){return r.a.createElement(b.a,{key:"letter"+t},e.toUpperCase())}))))):r.a.createElement("p",null,"Loading...")}var M=a(49),L=function(e){var t=Math.PI/180,a=e.cx,n=e.cy,l=e.midAngle,c=e.innerRadius,o=e.outerRadius,s=e.startAngle,m=e.endAngle,i=e.fill,u=e.payload,d=e.percent,E=e.value,p=Math.sin(-t*l),h=Math.cos(-t*l),f=a+(o+10)*h,b=n+(o+10)*p,g=a+(o+30)*h,y=n+(o+30)*p,v=g+22*(h>=0?1:-1),k=y,A=h>=0?"start":"end";var S,w=(S=u.name).charAt(0).toUpperCase()+S.slice(1);return r.a.createElement("g",null,r.a.createElement(M.d,{cx:a,cy:n,innerRadius:c,outerRadius:o,startAngle:s,endAngle:m,fill:i}),r.a.createElement(M.d,{cx:a,cy:n,startAngle:s,endAngle:m,innerRadius:o+6,outerRadius:o+10,fill:i}),r.a.createElement("path",{d:"M".concat(f,",").concat(b,"L").concat(g,",").concat(y,"L").concat(v,",").concat(k),stroke:i,fill:"none"}),r.a.createElement("circle",{cx:v,cy:k,r:2,fill:i,stroke:"none"}),r.a.createElement("text",{x:v+12*(h>=0?1:-1),y:k,textAnchor:A,fill:"#333"},"".concat(w,": ").concat(E)),r.a.createElement("text",{x:v+12*(h>=0?1:-1),y:k,dy:18,textAnchor:A,fill:"#eeeeee"},"(Rate ".concat((100*d).toFixed(2),"%)")))};function F(e){var t=Object(n.useState)(0),a=Object(o.a)(t,2),l=a[0],c=a[1];if(!e.myAlbums)return r.a.createElement("p",null,"Loading...");var s=e.myAlbums.reduce((function(e,t){return t.genres.forEach((function(t){e.filter((function(e){return e.name===t})).length>0?e.forEach((function(e){e.name===t&&e.value++})):e.push({name:t,value:1})})),e}),[]),m=["#0088FE","#00C49F","#FFBB28","#FF8042"];return r.a.createElement(r.a.Fragment,null,r.a.createElement(w,null),r.a.createElement("h4",null,"Total number of LP's: ",e.myAlbums.length),r.a.createElement("p",null,"Genres:"),r.a.createElement(M.c,{width:750,height:300},r.a.createElement(M.b,{data:s,cx:200,cy:150,labelLine:!1,outerRadius:80,fill:"#8884d8",dataKey:"value",activeIndex:l,activeShape:L,onMouseEnter:function(e,t){c(t)}},s.map((function(e,t){return r.a.createElement(M.a,{key:"cell-".concat(t),fill:m[t%m.length]})})))))}function G(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"signin"},r.a.createElement("form",{className:"form-signin",onSubmit:e.onSignIn},r.a.createElement("input",{type:"email",name:"email",placeholder:"Enter your email"}),r.a.createElement("input",{type:"password",name:"password",placeholder:"Choose a password"}),r.a.createElement("button",{type:"submit"},"Sign In")),r.a.createElement(S.b,{to:"/signup"},"Sign Up")))}function T(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"signup"},r.a.createElement("form",{className:"form-signup",onSubmit:e.onSignUp},r.a.createElement("input",{type:"text",name:"username",placeholder:"Choose a username"}),r.a.createElement("input",{type:"email",name:"email",placeholder:"Enter your email"}),r.a.createElement("input",{type:"password",name:"password",placeholder:"Choose a password"}),r.a.createElement("button",{type:"submit"},"Sign Up")),r.a.createElement(S.b,{to:"/signin"},"Sign In")))}a(430);function R(){return r.a.createElement("div",{className:"home"},r.a.createElement("div",{className:"text"},r.a.createElement("h3",null,"De Platenkoffer helps you keep track of your LP-collection"),r.a.createElement("br",null),r.a.createElement("p",null,r.a.createElement(S.b,{to:"/signin"},"Sign In")," or ",r.a.createElement(S.b,{to:"/signup"},"Sign Up")," to use the app")))}var U=Object(E.g)((function(){var e=Object(n.useState)(null),t=Object(o.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)(null),s=Object(o.a)(c,2),u=s[0],d=s[1],p=Object(n.useState)(!0),h=Object(o.a)(p,2),f=h[0],b=h[1],g=Object(n.useState)(null),y=Object(o.a)(g,2),v=y[0],k=y[1],A=Object(n.useState)(null),S=Object(o.a)(A,2),w=S[0],x=S[1],I=Object(n.useState)(!0),j=Object(o.a)(I,2),O=j[0],M=j[1],L=Object(n.useState)(!1),U=Object(o.a)(L,2),B=U[0],P=U[1],D=Object(n.useState)(null),J=Object(o.a)(D,2),_=J[0],z=J[1];Object(n.useEffect)((function(){m.a.get("".concat(i,"/my-albums")).then((function(e){var t=W(e.data);k(t),x(t)})).catch((function(e){}))}),[]);var W=function(e){return e.sort((function(e,t){var a=e.artist[0].name.toUpperCase(),n=t.artist[0].name.toUpperCase();return a.includes("THE ",0)&&(a=a.substring(4)),n.includes("THE ",0)&&(n=n.substring(4)),a<n?-1:a>n?1:0}))},Y=function(e){b(!0),M(!1),m.a.post("".concat(i,"/artist-search"),{artistName:e}).then((function(e){l(e.data)})).catch((function(e){console.log(e)}))},H=function(e){},q=function(e){b(!1),M(!0),z(e.genres),m.a.get("".concat(i,"/albums/").concat(e.id)).then((function(e){console.log(e.data),d(e.data)})).catch((function(e){console.log(e)}))},K=function(e){P(!0),d(null),l(null);var t=e.artists,a=e.id,n=e.images,r=e.name,c=e.release_date,o=t.reduce((function(e,t){var a={name:t.name,id:t.id};return e.push(a),e}),[]);m.a.post("".concat(i,"/add-album"),{artists:o,id:a,image:n[0].url,name:r,release_date:c,genres:_}).then((function(e){var t=JSON.parse(JSON.stringify(v)),a=JSON.parse(JSON.stringify(w));t.push(e.data),a.push(e.data);var n=W(t),r=W(a);x(r),k(n),z(null),P(!1)})).catch((function(e){}))},$=function(e){var t=e.currentTarget.value.toUpperCase(),a=v.filter((function(e){var a=e.name.toUpperCase(),n=e.artist[0].name.toUpperCase();return a.includes(t)||n.includes(t)}));console.log(a),x(a)},Q=function(e){var t=e.currentTarget.innerText.toLowerCase();if(console.log(t),"show all"!==t){var a=v.reduce((function(e,a){var n=!1;return a.genres.map((function(e){e.includes(t)&&(n=!0)})),!0===n&&e.push(a),e}),[]);console.log(a),x(a)}else x(v)};return r.a.createElement(E.d,null,r.a.createElement(E.b,{exact:!0,path:"/",render:function(){return r.a.createElement(R,null)}}),r.a.createElement(E.b,{path:"/myhome",render:function(){return r.a.createElement(N,{myAlbums:w,searchMyAlbums:$,sortGenre:Q})}}),r.a.createElement(E.b,{path:"/add-album",render:function(){return r.a.createElement(C,{handleArtistSearch:Y,handleAlbumSearch:H,artists:a,handlePickArtist:q,showArtists:f,showAlbums:O,albums:u,handleAdd:K,toMyList:B,myAlbums:v})}}),r.a.createElement(E.b,{path:"/stats",render:function(){return r.a.createElement(F,{myAlbums:v})}}),r.a.createElement(E.b,{path:"/signin",render:function(){return r.a.createElement(G,null)}}),r.a.createElement(E.b,{path:"/signup",render:function(){return r.a.createElement(T,null)}}))}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(S.a,null,r.a.createElement(r.a.StrictMode,null,r.a.createElement(U,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[225,1,2]]]);
//# sourceMappingURL=main.e5873dde.chunk.js.map