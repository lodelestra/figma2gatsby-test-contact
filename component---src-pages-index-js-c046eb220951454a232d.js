(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"0mN4":function(e,t,a){"use strict";a("OGtf")("fixed",(function(e){return function(){return e(this,"tt","","")}}))},"9eSz":function(e,t,a){"use strict";a("rGqo"),a("yt8O"),a("Btvt"),a("XfO3"),a("EK0E"),a("0mN4");var r=a("5NKs");t.__esModule=!0,t.default=void 0;var i,n=r(a("v06X")),s=r(a("XEEL")),l=r(a("uDP2")),o=r(a("j8BX")),d=r(a("q1tI")),c=r(a("17x9")),f=function(e){var t=(0,o.default)({},e),a=t.resolutions,r=t.sizes,i=t.critical;return a&&(t.fixed=a,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),i&&(t.loading="eager"),t.fluid&&(t.fluid=w([].concat(t.fluid))),t.fixed&&(t.fixed=w([].concat(t.fixed))),t},u=function(e){var t=e.fluid,a=e.fixed;return(t&&t[0]||a&&a[0]).src},C=Object.create({}),m=function(e){var t=f(e),a=u(t);return C[a]||!1},g="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,p="undefined"!=typeof window,h=p&&window.IntersectionObserver,b=new WeakMap;function y(e){return e.map((function(e){var t=e.src,a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return d.default.createElement(d.default.Fragment,{key:t},r&&d.default.createElement("source",{type:"image/webp",media:i,srcSet:r,sizes:n}),d.default.createElement("source",{media:i,srcSet:a,sizes:n}))}))}function w(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),[].concat(t,a)}function E(e){return e.map((function(e){var t=e.src,a=e.media,r=e.tracedSVG;return d.default.createElement("source",{key:t,media:a,srcSet:r})}))}function v(e){return e.map((function(e){var t=e.src,a=e.media,r=e.base64;return d.default.createElement("source",{key:t,media:a,srcSet:r})}))}function S(e,t){var a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(i?'media="'+i+'" ':"")+'srcset="'+(t?r:a)+'" '+(n?'sizes="'+n+'" ':"")+"/>"}var N=function(e,t){var a=(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver((function(e){e.forEach((function(e){if(b.has(e.target)){var t=b.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),b.delete(e.target),t())}}))}),{rootMargin:"200px"})),i);return a&&(a.observe(e),b.set(e,t)),function(){a.unobserve(e),b.delete(e)}},x=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",i=e.title?'title="'+e.title+'" ':"",n=e.alt?'alt="'+e.alt+'" ':'alt="" ',s=e.width?'width="'+e.width+'" ':"",l=e.height?'height="'+e.height+'" ':"",o=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",d=e.loading?'loading="'+e.loading+'" ':"",c=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?S(e,!0):"")+S(e)})).join("")+"<img "+d+s+l+a+r+t+n+i+o+c+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},L=function(e){var t=e.src,a=e.imageVariants,r=e.generateSources,i=e.spreadProps,n=d.default.createElement(O,(0,o.default)({src:t},i));return a.length>1?d.default.createElement("picture",null,r(a),n):n},O=d.default.forwardRef((function(e,t){var a=e.sizes,r=e.srcSet,i=e.src,n=e.style,s=e.onLoad,c=e.onError,f=e.loading,u=e.draggable,C=(0,l.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable"]);return d.default.createElement("img",(0,o.default)({sizes:a,srcSet:r,src:i},C,{onLoad:s,onError:c,ref:t,loading:f,draggable:u,style:(0,o.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))}));O.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var I=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=p&&m(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!g&&h&&!a.isCritical&&!a.seenBefore;var r=a.isCritical||p&&(g||!a.useIOSupport);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=d.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,n.default)(a)),a.handleRef=a.handleRef.bind((0,n.default)(a)),a}(0,s.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:m(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=N(e,(function(){var e=m(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=f(e),a=u(t),C[a]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=f(this.props),t=e.title,a=e.alt,r=e.className,i=e.style,n=void 0===i?{}:i,s=e.imgStyle,l=void 0===s?{}:s,c=e.placeholderStyle,u=void 0===c?{}:c,C=e.placeholderClassName,m=e.fluid,g=e.fixed,p=e.backgroundColor,h=e.durationFadeIn,b=e.Tag,w=e.itemProp,S=e.loading,N=e.draggable,I=!1===this.state.fadeIn||this.state.imgLoaded,T=!0===this.state.fadeIn&&!this.state.imgCached,V=(0,o.default)({opacity:I?1:0,transition:T?"opacity "+h+"ms":"none"},l),P="boolean"==typeof p?"lightgray":p,z={transitionDelay:h+"ms"},A=(0,o.default)({opacity:this.state.imgLoaded?0:1},T&&z,{},l,{},u),M={title:t,alt:this.state.isVisible?"":a,style:A,className:C,itemProp:w};if(m){var J=m,R=J[0];return d.default.createElement(b,{className:(r||"")+" gatsby-image-wrapper",style:(0,o.default)({position:"relative",overflow:"hidden"},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(R.srcSet)},d.default.createElement(b,{style:{width:"100%",paddingBottom:100/R.aspectRatio+"%"}}),P&&d.default.createElement(b,{title:t,style:(0,o.default)({backgroundColor:P,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},T&&z)}),R.base64&&d.default.createElement(L,{src:R.base64,spreadProps:M,imageVariants:J,generateSources:v}),R.tracedSVG&&d.default.createElement(L,{src:R.tracedSVG,spreadProps:M,imageVariants:J,generateSources:E}),this.state.isVisible&&d.default.createElement("picture",null,y(J),d.default.createElement(O,{alt:a,title:t,sizes:R.sizes,src:R.src,crossOrigin:this.props.crossOrigin,srcSet:R.srcSet,style:V,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:w,loading:S,draggable:N})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:x((0,o.default)({alt:a,title:t,loading:S},R,{imageVariants:J}))}}))}if(g){var q=g,k=q[0],j=(0,o.default)({position:"relative",overflow:"hidden",display:"inline-block",width:k.width,height:k.height},n);return"inherit"===n.display&&delete j.display,d.default.createElement(b,{className:(r||"")+" gatsby-image-wrapper",style:j,ref:this.handleRef,key:"fixed-"+JSON.stringify(k.srcSet)},P&&d.default.createElement(b,{title:t,style:(0,o.default)({backgroundColor:P,width:k.width,opacity:this.state.imgLoaded?0:1,height:k.height},T&&z)}),k.base64&&d.default.createElement(L,{src:k.base64,spreadProps:M,imageVariants:q,generateSources:v}),k.tracedSVG&&d.default.createElement(L,{src:k.tracedSVG,spreadProps:M,imageVariants:q,generateSources:E}),this.state.isVisible&&d.default.createElement("picture",null,y(q),d.default.createElement(O,{alt:a,title:t,width:k.width,height:k.height,sizes:k.sizes,src:k.src,crossOrigin:this.props.crossOrigin,srcSet:k.srcSet,style:V,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:w,loading:S,draggable:N})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:x((0,o.default)({alt:a,title:t,loading:S},k,{imageVariants:q}))}}))}return null},t}(d.default.Component);I.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var T=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string}),V=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string});I.propTypes={resolutions:T,sizes:V,fixed:c.default.oneOfType([T,c.default.arrayOf(T)]),fluid:c.default.oneOfType([V,c.default.arrayOf(V)]),fadeIn:c.default.bool,durationFadeIn:c.default.number,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,crossOrigin:c.default.oneOfType([c.default.string,c.default.bool]),style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string,loading:c.default.oneOf(["auto","lazy","eager"]),draggable:c.default.bool};var P=I;t.default=P},OGtf:function(e,t,a){var r=a("XKFU"),i=a("eeVq"),n=a("vhPU"),s=/"/g,l=function(e,t,a,r){var i=String(n(e)),l="<"+t;return""!==a&&(l+=" "+a+'="'+String(r).replace(s,"&quot;")+'"'),l+">"+i+"</"+t+">"};e.exports=function(e,t){var a={};a[e]=t(l),r(r.P+r.F*i((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3})),"String",a)}},RXBc:function(e,t,a){"use strict";a.r(t);var r=a("q1tI"),i=a.n(r),n=a("Bl7J"),s=a("vrFN"),l=a("jIJW"),o=a("9eSz"),d=a.n(o),c=function(){var e=l.data;return i.a.createElement(d.a,{fluid:e.placeholderImage.childImageSharp.fluid,className:"rounded-full"})},f=function(e){var t=e.isOpen,a=e.contact,r=e.onClick;return i.a.createElement("div",{className:"flex flex-col bg-white rounded-50 overflow-hidden mb-6 contact-shadow",onClick:r},i.a.createElement("div",{className:"flex flex-row items-center justify-start w-full "},i.a.createElement("div",{style:{width:"86px",height:"86px"},className:"m-2 mr-4"},i.a.createElement(c,null)),i.a.createElement("div",{className:"flex flex-col leading-none justify-center flex-grow"},i.a.createElement("p",{className:"text-xl font-bold text-gray-700"},a.firstName),i.a.createElement("p",{className:"text-xl font-bold text-gray-900"},a.lastName),i.a.createElement("p",{className:"leading-tight text-sm font-light text-gray-600 tracking-wider"},a.compagny)),t&&i.a.createElement("div",{className:"p-4 m-2 mr-4 bg-linear-green rounded-full"},i.a.createElement("svg",{width:"31",height:"31",viewBox:"0 0 31 30",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i.a.createElement("path",{d:"M15.2778 7.09027H26.1865L21.2558 2.14349L22.706 0.693298L30.1342 8.12152L22.706 15.5497L21.2558 14.0995L26.1865 9.15277H15.2778V7.09027ZM23.4311 17.8378C23.85 17.8378 24.2582 17.9184 24.6557 18.0795C25.0532 18.2407 25.4023 18.4716 25.7031 18.7724C25.9286 18.998 26.1811 19.2397 26.4604 19.4975C26.7504 19.7446 27.0458 20.0078 27.3466 20.287C27.6474 20.5556 27.9374 20.8403 28.2167 21.1411C28.496 21.4418 28.7485 21.7534 28.9741 22.0756C29.1996 22.3871 29.3769 22.7148 29.5058 23.0585C29.6454 23.4023 29.7153 23.7568 29.7153 24.122C29.7153 24.541 29.6347 24.9492 29.4736 25.3466C29.3124 25.7441 29.0815 26.0932 28.7807 26.394C28.2328 26.9418 27.7387 27.4252 27.2983 27.8442C26.8578 28.2631 26.3959 28.6176 25.9125 28.9077C25.4399 29.1977 24.9135 29.4179 24.3334 29.5683C23.7534 29.7079 23.0605 29.7778 22.2548 29.7778C21.0839 29.7778 19.8808 29.5952 18.6454 29.2299C17.4101 28.8647 16.1801 28.3598 14.9555 27.7153C13.7309 27.0707 12.5331 26.3027 11.3622 25.4111C10.1913 24.5195 9.07953 23.5473 8.02679 22.4946C6.9848 21.4418 6.02338 20.33 5.14252 19.1591C4.26166 17.9882 3.50433 16.7958 2.87054 15.582C2.23676 14.3574 1.73724 13.1381 1.37201 11.9243C1.01752 10.6996 0.840271 9.51801 0.840271 8.37933C0.840271 7.56293 0.910095 6.86469 1.04974 6.28461C1.20013 5.70453 1.41498 5.17816 1.69427 4.70551C1.98431 4.23285 2.33881 3.77631 2.75775 3.33588C3.1767 2.8847 3.66547 2.38519 4.22406 1.83734C4.52484 1.53656 4.87396 1.3056 5.27142 1.14447C5.66888 0.983337 6.07709 0.902771 6.49603 0.902771C7.03314 0.902771 7.54877 1.04779 8.04291 1.33783C8.54779 1.62787 9.02582 1.98236 9.47699 2.40131C9.92816 2.82025 10.3525 3.26068 10.7499 3.7226C11.1474 4.18451 11.5126 4.58197 11.8456 4.91498C12.1464 5.21576 12.3774 5.56488 12.5385 5.96234C12.6996 6.3598 12.7802 6.76801 12.7802 7.18695C12.7802 7.6059 12.7104 7.98187 12.5707 8.31488C12.4311 8.63715 12.2538 8.93793 12.039 9.21722C11.8349 9.48578 11.6093 9.73285 11.3622 9.95844C11.1259 10.1733 10.9003 10.3828 10.6855 10.5869C10.4814 10.791 10.3095 10.9951 10.1699 11.1992C10.0302 11.3925 9.96039 11.5966 9.96039 11.8115C9.96039 11.9404 10.0571 12.1498 10.2504 12.4399C10.4545 12.7192 10.7231 13.0522 11.0561 13.4389C11.3891 13.8149 11.7704 14.2285 12.2001 14.6796C12.6406 15.1201 13.0917 15.5766 13.5536 16.0493C14.0263 16.5112 14.4936 16.9677 14.9555 17.4189C15.4282 17.8701 15.8632 18.289 16.2607 18.6757C16.6689 19.0517 17.0234 19.3847 17.3242 19.6747C17.6357 19.9648 17.8613 20.1796 18.0009 20.3193C18.2265 20.5449 18.4951 20.6577 18.8066 20.6577C19.0322 20.6577 19.2416 20.5878 19.435 20.4482C19.6391 20.3085 19.8378 20.1367 20.0312 19.9326C20.2353 19.7177 20.4448 19.4921 20.6596 19.2558C20.8852 19.0087 21.1323 18.7831 21.4008 18.579C21.6694 18.3642 21.9648 18.187 22.287 18.0473C22.6201 17.9077 23.0014 17.8378 23.4311 17.8378ZM22.2548 27.7153C22.9101 27.7153 23.4579 27.6562 23.8984 27.538C24.3495 27.4091 24.7524 27.2265 25.1069 26.9902C25.4614 26.7538 25.8051 26.4638 26.1381 26.1201C26.4819 25.7763 26.874 25.3842 27.3144 24.9438C27.54 24.7182 27.6528 24.4496 27.6528 24.1381C27.6528 23.9985 27.5668 23.7997 27.395 23.5419C27.2231 23.2734 27.0029 22.9833 26.7343 22.6718C26.4765 22.3495 26.1811 22.0273 25.8481 21.705C25.5258 21.3828 25.2089 21.0873 24.8974 20.8188C24.5859 20.5502 24.2958 20.33 24.0273 20.1581C23.7695 19.9863 23.5707 19.9003 23.4311 19.9003C23.2055 19.9003 22.9907 19.9702 22.7866 20.1098C22.5825 20.2495 22.3784 20.4267 22.1743 20.6415C21.9809 20.8456 21.7714 21.0712 21.5458 21.3183C21.331 21.5546 21.0893 21.7802 20.8207 21.9951C20.5522 22.1992 20.2514 22.371 19.9184 22.5107C19.5961 22.6503 19.2255 22.7202 18.8066 22.7202C18.3769 22.7202 17.9633 22.6396 17.5659 22.4785C17.1791 22.3066 16.8354 22.0703 16.5346 21.7695L8.84857 14.0834C8.54779 13.7827 8.31146 13.4389 8.13959 13.0522C7.97845 12.6547 7.89789 12.2411 7.89789 11.8115C7.89789 11.3925 7.96771 11.0219 8.10736 10.6996C8.24701 10.3666 8.41888 10.0659 8.62299 9.7973C8.83783 9.52875 9.06342 9.28705 9.29974 9.0722C9.54681 8.84662 9.7724 8.63177 9.9765 8.42767C10.1913 8.22357 10.3686 8.02484 10.5082 7.83148C10.6479 7.62738 10.7177 7.41254 10.7177 7.18695C10.7177 7.0473 10.6318 6.84857 10.4599 6.59076C10.288 6.33295 10.0678 6.04828 9.79926 5.73676C9.54144 5.41449 9.24603 5.09222 8.91302 4.76996C8.59076 4.43695 8.26849 4.14154 7.94623 3.88373C7.6347 3.61517 7.35004 3.39496 7.09222 3.22308C6.83441 3.05121 6.63568 2.96527 6.49603 2.96527C6.17377 2.96527 5.89984 3.07806 5.67426 3.30365C5.23383 3.74408 4.84174 4.1308 4.49799 4.46381C4.15424 4.79681 3.8642 5.14594 3.62787 5.51117C3.39154 5.86566 3.20892 6.26312 3.08002 6.70355C2.96185 7.14398 2.90277 7.68646 2.90277 8.33099C2.90277 9.36224 3.06927 10.4311 3.40228 11.5375C3.73529 12.644 4.1972 13.7504 4.78802 14.8569C5.38959 15.9526 6.09857 17.0322 6.91498 18.0956C7.73138 19.1591 8.61761 20.1689 9.57367 21.1249C10.5297 22.081 11.5395 22.9619 12.603 23.7675C13.6772 24.5732 14.7621 25.2714 15.8578 25.8622C16.9536 26.4423 18.0439 26.8989 19.1288 27.2319C20.2138 27.5541 21.2558 27.7153 22.2548 27.7153Z",fill:"white"})))),t&&i.a.createElement("div",{className:"px-16 py-4 text-red-700 font-normal text-xs"},i.a.createElement("div",{className:"flex mb-2 items-center"},i.a.createElement("svg",{className:"mr-2",width:"16",height:"15",viewBox:"0 0 16 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i.a.createElement("path",{d:"M11.9657 8.88428C12.1805 8.88428 12.3856 8.92578 12.5809 9.00879C12.7811 9.08691 12.9569 9.20166 13.1082 9.35303L14.7196 10.9644C14.8709 11.1157 14.9857 11.2915 15.0638 11.4917C15.1468 11.687 15.1883 11.8921 15.1883 12.1069C15.1883 12.3218 15.1468 12.5293 15.0638 12.7295C14.9857 12.9248 14.8709 13.0981 14.7196 13.2495L14.617 13.3521C14.3534 13.6157 14.1117 13.8501 13.8919 14.0552C13.6722 14.2603 13.4427 14.4336 13.2035 14.5752C12.9642 14.7119 12.6981 14.8169 12.4051 14.8901C12.1122 14.9634 11.763 15 11.3578 15C10.7474 15 10.12 14.9048 9.47544 14.7144C8.83091 14.5239 8.18882 14.2603 7.54917 13.9233C6.9144 13.5864 6.2894 13.186 5.67417 12.7222C5.06382 12.2583 4.4852 11.7529 3.93833 11.2061C3.39634 10.6543 2.89585 10.0732 2.43686 9.46289C1.97788 8.84766 1.58237 8.22266 1.25034 7.58789C0.918308 6.94824 0.659519 6.31104 0.473972 5.67627C0.288425 5.0415 0.195652 4.42627 0.195652 3.83057C0.195652 3.42529 0.229831 3.07861 0.298191 2.79053C0.371433 2.50244 0.476413 2.23877 0.613132 1.99951C0.754734 1.76025 0.925632 1.5332 1.12583 1.31836C1.33091 1.09863 1.56528 0.856934 1.82895 0.593262L1.94614 0.476074C2.09751 0.324707 2.27085 0.20752 2.46616 0.124512C2.66147 0.0415039 2.86899 0 3.08872 0C3.30356 0 3.50864 0.0415039 3.70395 0.124512C3.90415 0.20752 4.07993 0.324707 4.2313 0.476074L5.84262 2.0874C5.99399 2.23877 6.10874 2.41455 6.18686 2.61475C6.26987 2.81006 6.31137 3.01514 6.31137 3.22998C6.31137 3.44482 6.27475 3.6377 6.20151 3.80859C6.12827 3.97461 6.03794 4.12598 5.93051 4.2627C5.82309 4.39941 5.70346 4.52393 5.57163 4.63623C5.44467 4.74854 5.32749 4.8584 5.22007 4.96582C5.11264 5.07324 5.02231 5.18311 4.94907 5.29541C4.87583 5.40283 4.83921 5.52002 4.83921 5.64697C4.83921 5.83252 4.90512 5.99121 5.03696 6.12305L9.0726 10.1587C9.20444 10.2905 9.36313 10.3564 9.54868 10.3564C9.67563 10.3564 9.79282 10.3198 9.90024 10.2466C10.0125 10.1733 10.1224 10.083 10.2298 9.97559C10.3373 9.86816 10.4471 9.75098 10.5594 9.62402C10.6717 9.49219 10.7962 9.37256 10.933 9.26514C11.0697 9.15771 11.221 9.06738 11.3871 8.99414C11.558 8.9209 11.7508 8.88428 11.9657 8.88428ZM11.3578 14.0625C11.7093 14.0625 12.0023 14.0308 12.2367 13.9673C12.4759 13.8989 12.6908 13.8037 12.8812 13.6816C13.0716 13.5547 13.2572 13.3984 13.4378 13.2129C13.6185 13.0273 13.826 12.8174 14.0604 12.583C14.1922 12.4512 14.2582 12.2925 14.2582 12.1069C14.2582 12.019 14.2215 11.9165 14.1483 11.7993C14.0799 11.6772 13.9896 11.5503 13.8773 11.4185C13.765 11.2866 13.638 11.1523 13.4964 11.0156C13.3597 10.874 13.223 10.7422 13.0863 10.6201C12.9544 10.4932 12.8299 10.3784 12.7127 10.2759C12.6004 10.1685 12.5125 10.083 12.4491 10.0195C12.3172 9.8877 12.1561 9.82178 11.9657 9.82178C11.8387 9.82178 11.7215 9.8584 11.6141 9.93164C11.5067 10.0049 11.3993 10.0952 11.2918 10.2026C11.1844 10.3101 11.0721 10.4297 10.9549 10.5615C10.8426 10.6885 10.7181 10.8057 10.5814 10.9131C10.4447 11.0205 10.2909 11.1108 10.12 11.1841C9.95395 11.2573 9.76352 11.2939 9.54868 11.2939C9.33384 11.2939 9.12632 11.2549 8.92612 11.1768C8.73081 11.0938 8.55747 10.9766 8.4061 10.8252L4.37046 6.78955C4.21909 6.63818 4.1019 6.46484 4.01889 6.26953C3.94077 6.06934 3.90171 5.86182 3.90171 5.64697C3.90171 5.43213 3.93833 5.2417 4.01157 5.07568C4.08481 4.90479 4.17514 4.75098 4.28257 4.61426C4.38999 4.47754 4.50717 4.35303 4.63413 4.24072C4.76596 4.12354 4.88559 4.01123 4.99301 3.90381C5.10044 3.79639 5.19077 3.68896 5.26401 3.58154C5.33725 3.47412 5.37387 3.35693 5.37387 3.22998C5.37387 3.03955 5.30796 2.87842 5.17612 2.74658C5.11264 2.68311 5.02719 2.59521 4.91977 2.48291C4.81723 2.36572 4.70249 2.24121 4.57553 2.10938C4.45346 1.97266 4.32163 1.83594 4.18003 1.69922C4.04331 1.55762 3.90903 1.43066 3.77719 1.31836C3.64536 1.20605 3.51841 1.11572 3.39634 1.04736C3.27915 0.974121 3.17661 0.9375 3.08872 0.9375C2.90317 0.9375 2.74448 1.00342 2.61264 1.13525C2.37827 1.36963 2.16831 1.57715 1.98276 1.75781C1.8021 1.93848 1.64585 2.12402 1.51401 2.31445C1.38706 2.50488 1.2894 2.71973 1.22104 2.95898C1.15757 3.19336 1.12583 3.48389 1.12583 3.83057C1.12583 4.37744 1.21372 4.94141 1.3895 5.52246C1.57016 6.10352 1.81675 6.68457 2.12925 7.26562C2.44663 7.84668 2.82016 8.42041 3.24985 8.98682C3.67954 9.54834 4.14829 10.0806 4.6561 10.5835C5.16391 11.0864 5.69858 11.5503 6.2601 11.9751C6.82651 12.3999 7.3978 12.7686 7.97397 13.0811C8.55503 13.3887 9.1312 13.6304 9.70249 13.8062C10.2787 13.9771 10.8304 14.0625 11.3578 14.0625Z",fill:"#E53E3E"})),"06.37.69.94.43"),i.a.createElement("div",{className:"flex mb-2 items-center"},i.a.createElement("svg",{className:"mr-2",width:"16",height:"11",viewBox:"0 0 16 11",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i.a.createElement("path",{d:"M15.1957 0.8125V10.1875H0.195652V0.8125H15.1957ZM1.24301 1.75L7.69565 4.97998L14.1483 1.75H1.24301ZM14.2582 9.25V2.74609L7.69565 6.02002L1.13315 2.74609V9.25H14.2582Z",fill:"#E53E3E"})),"nathan.roberts@example.com"),i.a.createElement("div",{className:"flex mb-2 items-center"},i.a.createElement("svg",{className:"mr-2",width:"16",height:"15",viewBox:"0 0 8 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i.a.createElement("path",{d:"M7.50815 3.28125C7.50815 3.68652 7.43735 4.07471 7.29575 4.4458C7.15415 4.81201 6.95884 5.1416 6.70981 5.43457C6.46079 5.72266 6.16294 5.96436 5.81626 6.15967C5.47446 6.3501 5.10092 6.47217 4.69565 6.52588V14.0625L4.2269 15L3.75815 14.0625V6.52588C3.35288 6.47217 2.9769 6.3501 2.63022 6.15967C2.28842 5.96436 1.99301 5.72266 1.74399 5.43457C1.49497 5.1416 1.29966 4.81201 1.15805 4.4458C1.01645 4.07471 0.945652 3.68652 0.945652 3.28125C0.945652 2.82715 1.0311 2.40234 1.202 2.00684C1.3729 1.60645 1.60727 1.25732 1.90512 0.959473C2.20298 0.661621 2.54966 0.427246 2.94516 0.256348C3.34555 0.0854492 3.7728 0 4.2269 0C4.681 0 5.10581 0.0854492 5.50132 0.256348C5.90171 0.427246 6.25083 0.661621 6.54868 0.959473C6.84653 1.25732 7.08091 1.60645 7.2518 2.00684C7.4227 2.40234 7.50815 2.82715 7.50815 3.28125ZM4.2269 5.625C4.54917 5.625 4.8519 5.56396 5.1351 5.44189C5.41831 5.31982 5.66489 5.15381 5.87485 4.94385C6.08969 4.729 6.25815 4.47998 6.38022 4.19678C6.50717 3.90869 6.57065 3.60352 6.57065 3.28125C6.57065 2.95898 6.50717 2.65625 6.38022 2.37305C6.25815 2.08984 6.08969 1.84326 5.87485 1.6333C5.66489 1.41846 5.41831 1.25 5.1351 1.12793C4.8519 1.00098 4.54917 0.9375 4.2269 0.9375C3.90464 0.9375 3.59946 1.00098 3.31137 1.12793C3.02817 1.25 2.77915 1.41846 2.5643 1.6333C2.35434 1.84326 2.18833 2.08984 2.06626 2.37305C1.94419 2.65625 1.88315 2.95898 1.88315 3.28125C1.88315 3.60352 1.94419 3.90869 2.06626 4.19678C2.18833 4.47998 2.35434 4.729 2.5643 4.94385C2.77915 5.15381 3.02817 5.31982 3.31137 5.44189C3.59946 5.56396 3.90464 5.625 4.2269 5.625Z",fill:"#E53E3E"})),"2142 Dogwood Ave undefined",i.a.createElement("br",null),"Illinois 57793 United States")))};f.defaultProps={isOpen:!1,contact:{firstName:"firstName",lastName:"lastName",compagny:"Compagny Name"}};var u=f;t.default=function(){var e=Object(r.useState)(-1),t=e[0],a=e[1];return i.a.createElement(n.a,{pageTitle:"contacts"},i.a.createElement(s.a,{title:"Home"}),i.a.createElement("div",{className:"flex flex-col overflow-scroll p-3"},[{firstName:"Clara",lastName:"Mercier",compagny:"Louis Vuitton"},{firstName:"Jules",lastName:"Roux",compagny:"Johnson & Johnson"},{firstName:"Valentina",lastName:"Petit",compagny:"Apple"},{firstName:"Milo",lastName:"Joly",compagny:"Johnson & Johnson"},{firstName:"Noa",lastName:"Petit",compagny:"Apple"},{firstName:"Jean",lastName:"Michel",compagny:"Johnson & Johnson"}].map((function(e,r){return i.a.createElement(u,{key:e.firstName+"_"+e.lastName,contact:e,isOpen:r===t,onClick:function(){return function(e){a(t===e?-1:e)}(r)}})}))))}},jIJW:function(e){e.exports=JSON.parse('{"data":{"placeholderImage":{"childImageSharp":{"fluid":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsSAAALEgHS3X78AAAFU0lEQVQ4yz2Ua0zTVxjG/5/2wSxbzJbN+GFm0W1xM7pNJyHKNhOU6TTT6KLOxYRdvKFsAwdeIk4RlKhTNjbdxKk4HQME5CK9QLmWlpZS2lJsLfdLqVBaeuEu/nbosp3kzT//vO95z/M+z3OO1Nffz8zMTCiCwSA+nz8UIyOz4cPr9TI87MHt9uDxjODzB0TdKFNTU8yu6elpkXPT3u7A1NyIZDQ2Mjg4GEqOj48TCAYYGxtldHSUQCDA1OQk/60nT56Emk1MTPD06VMmJ6cYGHDysNVMfZ0KWfE9JJWyBIvFFEIye+ps8cTEpGg4Fmpgs9vJL8jnypVfMJua/0c1Pj5BT083Ol0dKmUp6upyOjs7kXR6LcpyGcZmA929PfT0i+jrxu1xo5A94MPwZawPX8ziBS+y8u0lKOWlggoPVquJ6holWm0NPd2djInpZp6C1P94gFa7A6PZiL3NjtXegqPDRqNezbqI5aTtX4/xdiKF56KJXPE6G9euwtJUhUYgM1ssYoqZEOrRoB//iBvJJ3gan5xm2Oujb6CfboEuOBbk2tWfWL9yEZW/H8NacIlHJZdIP7yDiPeWci83izGxx+ef5dkvuJwk/8Y59LUlSP5ZkkUyODqOS4jTK0aeHSk+dh+xOyMpvByP9vYp1HdTKEr/lh0bwkk6kcDU9IyoG6HFrAsJWHQrBauh4l+EY+OToYbD3hGcggLnQB+fbIjkzP5t9Mp/w5h9lnbx7VNkEv/5OjZvjMQtrDTrgvZHTSFnqO6lY20sR/KOeAX0IP7AqBBiBLfXI7hpYtlbi4jZEoEjNxnFma8wZB6nX/Ez+zeH8X7YUqyCv4DwbZutUfh0iJI/07A1VyMNPHaKUYfwCCO7Bt34RFFBfjaLF85nzYo3qMyMw5CVhKP4MvqcZNYse4UP3llIQ0M9voAPm6Ve+NiJ7O557MYqpO7eTnqdToaGvThdLjx+P79mXGDJqy/z0txnObJrNbXX4zDnJ5P+3UbmPfcMUcsXoG9sEBS5sRorcbl6qS7I4KFQX+rqbqNH+M81NCQa9zPo8ZB8/Btem/cs8+fO4cyeSEw5P2AruyhE2cO7C19gQ9hC7A6buHIuTDo5TmcXFbk/Ym1SIbW0GoWyvcIyTtFsWPBnYnvUSl6f/zzb17zJr4c3obt7AtuDC9RkJVJ0MZqcnxN4aDPT0daCob6U3h4H8rtpWPRCFJmyiIHBx0JdFx1dnaScTGDL2jAWvTSHhM8iuHF8O+qbCTTnnaL08n4qrh2mvbUOe2uDsEwdbQ4zXR2tlNxKxtQgRzIYtSFD9wuExYU5/JX1G7s//Zjlr83jYuwWbpyKRnf7qIgj/HXhAC0NxXR1moW6Oro7munpsuKwNZN/9TgG9QOkEyeP8nXMAVLTUqiuKEPx4B67t33EpshVFOdmkhq3k/rsVMquJ5F3J0PcWysPLbU8atXQ8cgg0FmwmjXcuRyHrroIKTziQ/YdPEh5eQl1VUqKC/4kLmY3n0StRqdVcT71GDqNgpzsa1RW3KfD3khLcw16rTw0tkMY22So5WZaDPUV+Uhf7NmHSlGE3WqgWiVDXprHsbi97NoaRZOuiqzMdApy/+BKRqo4sARbi1Y0qMKoVwlkahz2JpSyXM7G70Cjuo9059ZVoZRCbK6hRiCsq5KTGPsl3+zdhcVUT1lxNudTjvLTj6dp0ldiNgp0GrmoV4X+bVYdMtl9onfv4Pb1DPEe1irQVpeJglo06hoqxWOZlBDDkdhoweffFObd5Nj3Bzh7OlHkCqlU5FGlLEBTJ6dBrRQHaKhXV3Do4CE+3bqFfwDr8Of51w6J2wAAAABJRU5ErkJggg==","aspectRatio":1,"src":"/static/92841cf4d43fa722808633b7edec0f6f/4acbb/profile_mercier.png","srcSet":"/static/92841cf4d43fa722808633b7edec0f6f/6a503/profile_mercier.png 23w,\\n/static/92841cf4d43fa722808633b7edec0f6f/af7b5/profile_mercier.png 45w,\\n/static/92841cf4d43fa722808633b7edec0f6f/4acbb/profile_mercier.png 90w,\\n/static/92841cf4d43fa722808633b7edec0f6f/9b129/profile_mercier.png 135w,\\n/static/92841cf4d43fa722808633b7edec0f6f/10898/profile_mercier.png 180w,\\n/static/92841cf4d43fa722808633b7edec0f6f/59beb/profile_mercier.png 200w","sizes":"(max-width: 90px) 100vw, 90px"}}}}}')}}]);
//# sourceMappingURL=component---src-pages-index-js-c046eb220951454a232d.js.map