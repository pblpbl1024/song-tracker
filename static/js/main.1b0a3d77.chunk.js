(this["webpackJsonpsong-tracker"]=this["webpackJsonpsong-tracker"]||[]).push([[0],{29:function(e,t,c){},30:function(e,t,c){"use strict";c.r(t);var n=c(4),r=c(0),s=c.n(r),a=c(9),i=c.n(a),o=c(7);var l=function(e){var t=e.artist,c=e.tracks,r=e.notFound,s=e.updateAudio,a=e.setAudioUrl;if(null===t||0===c.length)return Object(n.jsxs)("div",{children:[Object(n.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAABcwAAAXMBxHQifQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAATJSURBVHic5ZtLiB1FFIa/0zNx40Y0kMkojKBoxJ0TUWMMVyFPITFxkMigCxfG90LRuBBERHyALsS3GwVFBDEmYUCNCRJBow6RgEpUoqiTx8TgRI2ayWTmuOi+2Klb9051V7/uvT/Uout2nfrP36fO7Xq0qCpZQkQWACuBc4H5sdIHTAMHjfIDMKKqv2ZKxJWvrwAiEgBXAGuickFKU7uBzcBmVd3jRSoJVDVVAXqBDcAYoBmXb4B1abkl8iOF4wLcAHyfg+Nm2QXU8hQg0RAQkUHgZWCwVVABo8B24BfgQKz0AP1RORsYAFYAF8/S9QfABlX92ZmsKxI8+ZuAf7E/qZPACOGQ6E8RVecB9wKfNLGvwG/kEA0u5HqAZ1oQewdYkBkhWATsbNLXFHBPYQIAZwAfNSGzA7g0r7EJrAL2NOn7NaA3VwEIs/w2S+fTwMa8HDc4zAFeaiLCi3kL8Lyl06PAqiKcN7jcBpyw8Lk7FwGAOyyd/QRcWLTzMU5LogdgJt9lmQoA1KJkYz75i8pyPsZtWeR0nNsEcH4mAkQZ/1uLysvLdj7G8U5LdG7NSoBbLcbvKttpiwjPWXhe7SUAcDrh7CxudHvZzjYR4DTgR4PrbqLJXVoBHjYMzgCXlO1sCxHWW6Lg5lQCRIr+YRh7o2wnZxFAgC8MznvTCrDSMDQJDJTtpIMINUsUJPq3CgixllOxTfOYeWUMVf0Y2GdUm760RBCt6Kw26t/14FU0TK7XJWlcX86aF6ubBrZ4kioSpgALReQc18YBcJVRt1NVj3jTKg6fEy621CHAYtfGAWCqNZoBqcKgYTY0Ofe7tg8Il6biOORLqgQcMK7nuza0CXDQm07x2G9ce0VAOwrgFQFzjbrfvekUDzNpn+XaMLA0PtObTvEwH+KEa8OAxvHjHD4VgjnmnRN5pwiQ+p/MJkCfN53i4RUBY0bdQm86BUJEhEbOzhO5gHA7Ko4lImImlSrjMk6NACXcl3RCAHwGjMfqemicHVYZ64zrL1X1sGvjQFVnaJz9mUarDJPrSJLG9QWRTUb9UhEZSE2pIIhIjXBnOY5EAnTamuDXJFwZjhvshFXhtYntxAy2+77AaCpbhuF23hlakYUA7bo3+GFqe5YOarTX7vB+YF5mAkQdtcv5gClgsZfdFh22wwmR+7xtt+i06meEpoDB3ASICFT1lFi9TPhycCFSpXOCtnIUuDw3AWLEyj4pegQYBt6z/PYnsCiNAHmfFR4jXJ05RPiW2cP/3w70EZ4VXs7sZ4U3Aber6riIzAHeAq437jlGmKDN9Y3WSPG0ijwtvg+40cKhF3jbcv8xEp4n9hmreX4vsAsYIlyvaJWb3rS0/Ru4JncBYkQC4ErgKeA7D6f3Er57OL/YRH2/brH1D7A08xzgglm+GVLgcFTGCfPCp8AOVTVXp137C4BXgVuMn44TTo/fb2nANwKqUAjz0is0RsJx4Npch0BVSiTCCxYRJoHVHS9ATIhnLSKcoMlqUemEcxLhaYsIU8BQVwgQifBkExHWd4UAkQiPWUQ4CQx3hQCRCI9YRJgmOlec+XtAFSEiDwGPGtUzwFBXCAAgIg8CjxvVXwW2mzsRqvoEcL9RPdk1EVCHiAwDG4G/gAf+A/vLQQ45/dhRAAAAAElFTkSuQmCC",alt:"search-icon"}),Object(n.jsx)("p",{children:r?"No results found.":"Artist data and top tracks will appear here."})]});var i,o=t.images,l=t.name,u=t.followers;return Object(n.jsxs)("div",{children:[Object(n.jsx)("h3",{children:l}),Object(n.jsxs)("p",{children:[(i=u.total,i.toString().replace(/\B(?=(\d{3})+(?!\d))/g,","))," followers"]}),void 0!==o[0]?Object(n.jsx)("img",{src:o[0].url,className:"profile",alt:""}):Object(n.jsx)("p",{children:"This artist doesn't have a profile picture."}),Object(n.jsx)("h4",{children:"Top Tracks"}),Object(n.jsx)("div",{children:c.map((function(e){var t=e.id,c=e.name,r=e.album,i=e.preview_url;return Object(n.jsxs)("div",{onClick:function(){return s(i,c)},className:"track",children:[Object(n.jsx)("img",{src:r.images[0].url,className:"trackImage",alt:""}),Object(n.jsx)("audio",{id:i,onEnded:function(){return a("")},src:i}),Object(n.jsx)("p",{style:{marginTop:0,marginBottom:10},children:c})]},t)}))})]})},u=c(35),j=c(36),A="https://spotify-api-wrapper.appspot.com/";var d=function(e){var t=e.setArtist,c=e.setTracks,s=e.updateAudio,a=e.getArtistName,i=e.setNotFound,l=Object(r.useState)(!1),d=Object(o.a)(l,2),h=d[0],b=d[1];function g(){var e=document.querySelector("input").value.replace(/[^\w\s-.~]/g,"").trim();console.log("Query:",e),e&&(b(!0),fetch("".concat(A,"/artist/").concat(e)).then((function(e){return e.json()})).then((function(e){if(e.artists.total>0){var n=e.artists.items[0];n.name!==a()?fetch("".concat(A,"/artist/").concat(n.id,"/top-tracks")).then((function(e){return e.json()})).then((function(e){b(!1),s("","");var r=e.tracks;t(n),c(r),console.log(n),console.log(r)})).catch((function(e){return alert(e.message)})):b(!1)}else s("",""),b(!1),i(!0),t(null),c([])})).catch((function(e){return alert(e.message)})))}return Object(n.jsx)("div",{children:Object(n.jsxs)(u.a,{inline:!0,children:[Object(n.jsx)(u.a.Control,{id:"search-bar",placeholder:"Search for an artist...",maxLength:32,onKeyDown:function(e){return function(e){"Enter"===e.key&&(e.preventDefault(),g())}(e)}}),Object(n.jsxs)(j.a,{variant:"success",onClick:g,disabled:h,children:[h?"Searching...":"Search"," "]})]})})},h=c(34);var b=function(e){var t=Object(r.useState)(!0),c=Object(o.a)(t,2),s=c[0],a=c[1];return Object(n.jsx)("div",{children:Object(n.jsxs)(h.a,{show:s,onHide:function(){return a(!1)},size:"lg",centered:!0,children:[Object(n.jsxs)(h.a.Body,{children:[Object(n.jsx)("h4",{children:"Song Tracker"}),Object(n.jsx)("hr",{}),Object(n.jsx)("p",{children:"This app uses Spotify's web API to get the top tracks of artists."}),Object(n.jsx)("p",{children:"After searching for an artist, click on the track to listen to a 30-second preview."})]}),Object(n.jsx)(j.a,{onClick:function(){return a(!1)},children:"Close"})]})})},g=c(32),O=c(33),f=c(16),p=c(18),m=c.n(p);var x=function(){var e=Object(r.useState)(null),t=Object(o.a)(e,2),c=t[0],s=t[1],a=Object(r.useState)([]),i=Object(o.a)(a,2),u=i[0],j=i[1],A=Object(r.useState)(""),h=Object(o.a)(A,2),p=h[0],x=h[1],v=Object(r.useState)(""),B=Object(o.a)(v,2),C=B[0],k=B[1],w=Object(r.useState)(!0),S=Object(o.a)(w,2),T=S[0],F=S[1],Q=Object(r.useState)(50),R=Object(o.a)(Q,2),E=R[0],U=R[1],L=Object(r.useState)(!1),N=Object(o.a)(L,2),Y=N[0],H=N[1];function I(){return null===c?"":c.name}function V(e,t){var c=document.getElementById(p);if(p===e)null!==c&&(c.paused?c.play():c.pause(),F(c.paused),console.log(c.volume));else{null===c||c.paused||(c.pause(),F(!0));var n=document.getElementById(e);null!==n&&(n.currentTime=0,n.volume=E/100,n.play(),F(!1))}x(e),k(t)}return Object(n.jsxs)("div",{children:[Object(n.jsx)(b,{}),Object(n.jsx)("h1",{children:"Song Tracker"}),Object(n.jsx)(d,{setArtist:s,setTracks:j,updateAudio:V,getArtistName:I,setNotFound:H}),Object(n.jsx)("p",{children:"Volume"}),Object(n.jsx)(g.a,{children:Object(n.jsx)(O.a,{children:Object(n.jsx)(f.a,{xs:{span:4,offset:4},children:Object(n.jsx)(m.a,{value:E,onChange:function(e){return function(e){U(e);var t=document.getElementById(p);null!==t&&(t.volume=e/100)}(e.target.value)}})})})}),Object(n.jsx)("hr",{}),Object(n.jsx)(l,{artist:c,tracks:u,notFound:Y,updateAudio:V,setAudioUrl:x}),Object(n.jsx)("div",{className:""!==p?"footer-active":"footer",children:Object(n.jsx)("p",{children:""!==p?T?I()+" - "+C+" (Paused)":I()+" - "+C+" (Playing)":"Not playing"})})]})},v=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,37)).then((function(t){var c=t.getCLS,n=t.getFID,r=t.getFCP,s=t.getLCP,a=t.getTTFB;c(e),n(e),r(e),s(e),a(e)}))};c(27),c(28),c(29);i.a.render(Object(n.jsx)(s.a.StrictMode,{children:Object(n.jsx)(x,{})}),document.getElementById("root")),v()}},[[30,1,2]]]);
//# sourceMappingURL=main.1b0a3d77.chunk.js.map