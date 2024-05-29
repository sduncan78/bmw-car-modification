import{r as e}from"./index.b62607bb.js";import{u as M,s as b,a as F,P as $,w as A,L as O,b as U,e as K}from"./jsx-runtime.c8b9ae4a.js";function P(){const n=e.exports.useRef(!1);return M(()=>(n.current=!0,()=>{n.current=!1}),[]),n}function S(){const n=P(),[o,t]=e.exports.useState(0),r=e.exports.useCallback(()=>{n.current&&t(o+1)},[o]);return[e.exports.useCallback(()=>b.postRender(r),[r]),o]}class T extends e.exports.Component{getSnapshotBeforeUpdate(o){const t=this.props.childRef.current;if(t&&o.isPresent&&!this.props.isPresent){const r=this.props.sizeRef.current;r.height=t.offsetHeight||0,r.width=t.offsetWidth||0,r.top=t.offsetTop,r.left=t.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function B({children:n,isPresent:o}){const t=e.exports.useId(),r=e.exports.useRef(null),m=e.exports.useRef({width:0,height:0,top:0,left:0});return e.exports.useInsertionEffect(()=>{const{width:p,height:u,top:c,left:x}=m.current;if(o||!r.current||!p||!u)return;r.current.dataset.motionPopId=t;const f=document.createElement("style");return document.head.appendChild(f),f.sheet&&f.sheet.insertRule(`
          [data-motion-pop-id="${t}"] {
            position: absolute !important;
            width: ${p}px !important;
            height: ${u}px !important;
            top: ${c}px !important;
            left: ${x}px !important;
          }
        `),()=>{document.head.removeChild(f)}},[o]),e.exports.createElement(T,{isPresent:o,childRef:r,sizeRef:m},e.exports.cloneElement(n,{ref:r}))}const y=({children:n,initial:o,isPresent:t,onExitComplete:r,custom:m,presenceAffectsLayout:p,mode:u})=>{const c=F(G),x=e.exports.useId(),f=e.exports.useMemo(()=>({id:x,initial:o,isPresent:t,custom:m,onExitComplete:a=>{c.set(a,!0);for(const i of c.values())if(!i)return;r&&r()},register:a=>(c.set(a,!1),()=>c.delete(a))}),p?void 0:[t]);return e.exports.useMemo(()=>{c.forEach((a,i)=>c.set(i,!1))},[t]),e.exports.useEffect(()=>{!t&&!c.size&&r&&r()},[t]),u==="popLayout"&&(n=e.exports.createElement(B,{isPresent:t},n)),e.exports.createElement($.Provider,{value:f},n)};function G(){return new Map}const h=n=>n.key||"";function D(n,o){n.forEach(t=>{const r=h(t);o.set(r,t)})}function H(n){const o=[];return e.exports.Children.forEach(n,t=>{e.exports.isValidElement(t)&&o.push(t)}),o}const Y=({children:n,custom:o,initial:t=!0,onExitComplete:r,exitBeforeEnter:m,presenceAffectsLayout:p=!0,mode:u="sync"})=>{m&&(u="wait",A(!1,"Replace exitBeforeEnter with mode='wait'"));let[c]=S();const x=e.exports.useContext(O).forceRender;x&&(c=x);const f=P(),a=H(n);let i=a;const l=new Set,R=e.exports.useRef(i),C=e.exports.useRef(new Map).current,E=e.exports.useRef(!0);if(M(()=>{E.current=!1,D(a,C),R.current=i}),U(()=>{E.current=!0,C.clear(),l.clear()}),E.current)return e.exports.createElement(e.exports.Fragment,null,i.map(s=>e.exports.createElement(y,{key:h(s),isPresent:!0,initial:t?void 0:!1,presenceAffectsLayout:p,mode:u},s)));i=[...i];const w=R.current.map(h),g=a.map(h),I=w.length;for(let s=0;s<I;s++){const d=w[s];g.indexOf(d)===-1&&l.add(d)}return u==="wait"&&l.size&&(i=[]),l.forEach(s=>{if(g.indexOf(s)!==-1)return;const d=C.get(s);if(!d)return;const v=w.indexOf(s),z=()=>{C.delete(s),l.delete(s);const L=R.current.findIndex(k=>k.key===s);if(R.current.splice(L,1),!l.size){if(R.current=a,f.current===!1)return;c(),r&&r()}};i.splice(v,0,e.exports.createElement(y,{key:h(d),isPresent:!1,onExitComplete:z,custom:o,presenceAffectsLayout:p,mode:u},d))}),i=i.map(s=>{const d=s.key;return l.has(d)?s:e.exports.createElement(y,{key:h(s),isPresent:!0,presenceAffectsLayout:p,mode:u},s)}),K!=="production"&&u==="wait"&&i.length>1&&console.warn(`You're attempting to animate multiple children within AnimatePresence, but its mode is set to "wait". This will lead to odd visual behaviour.`),e.exports.createElement(e.exports.Fragment,null,l.size?i:i.map(s=>e.exports.cloneElement(s)))};export{Y as A};