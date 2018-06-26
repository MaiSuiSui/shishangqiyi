(function(window){var svgSprite='<svg><symbol id="icon-qipao" viewBox="0 0 1024 1024"><path d="M172.083 926.089c0 0 0 0 0 0 0 14.921 21.333 27.017 47.65 27.017 26.317 0 47.65-12.096 47.65-27.017 0 0 0 0 0 0 0-14.921-21.333-27.017-47.65-27.017-26.317 0-47.65 12.096-47.65 27.017z" fill="" ></path><path d="M234.667 782.234c0 32.198 44.257 58.3 98.85 58.3s98.85-26.101 98.85-58.3c0-32.198-44.257-58.3-98.85-58.3-54.593 0-98.85 26.101-98.85 58.3z" fill="" ></path><path d="M19.951 343.586c0 158.275 219.985 286.583 491.349 286.583s491.349-128.308 491.349-286.583c0-158.275-219.985-286.583-491.349-286.583-271.364 0-491.349 128.308-491.349 286.583z" fill="" ></path></symbol><symbol id="icon-message" viewBox="0 0 1024 1024"><path d="M509.099 85.117C230.895 85.117 5.444 248.855 5.444 450.8c0 125.764 76.977 235.372 210.074 301.26 0 0.774-0.24 1.332-0.24 2.202 0 54.642-31.63 114.728-50.164 145.647h0.063a26.601 26.601 0 0 0-2.338 10.86c0 15.326 12.726 27.614 28.53 27.614 2.36 0 6.144-0.472 7.526-0.472 0.341 0 0.518 0 0.49 0.091 98.371-15.559 206.551-99.692 228.067-125.076 22.101 3.18 37.04 3.658 55.546 3.658 7.805 0 16.236-0.09 26.1-0.09 278.142 0 503.66-163.704 503.66-365.688-0.005-201.95-225.518-365.688-503.66-365.688z m0 688.93l-14.91 0.057-11.191 0.034c-17.277 0-28.615-0.45-46.296-3.003l-35.294-4.881-22.619 26.515c-10.428 12.175-82.608 54.403-141.198 81.573 11.93-30.503 20.719-82.306 21.487-115.25l0.313-1.821v-42.49l-34.276-16.96c-111.741-55.33-175.804-145.35-175.804-247.01 0-168.033 216.787-323.238 459.793-323.238 243.007 0 459.793 155.205 459.793 323.237-0.005 168.01-216.792 323.237-459.798 323.237z" fill="#46C01B" ></path></symbol><symbol id="icon-shoucang" viewBox="0 0 1024 1024"><path d="M680.128 192C614.016 192 552.768 223.04 512 274.048A214.72 214.72 0 0 0 343.872 192C224.768 192 128 290.816 128 412.096c0 72.32 34.56 123.328 62.592 164.16 81.024 118.848 285.056 266.24 293.824 272.384 8.32 6.08 17.92 8.96 27.584 8.96 9.6 0 19.264-2.88 27.584-8.96 8.768-6.144 212.352-153.984 293.76-272.384 28.096-40.832 62.656-91.904 62.656-164.16C896 290.816 799.232 192 680.128 192"  ></path></symbol><symbol id="icon-aidisheng_biaoqianqipao" viewBox="0 0 1479 1024"><path d="M113.777778 0h1251.555555a113.777778 113.777778 0 0 1 113.777778 113.777778v625.777778a113.777778 113.777778 0 0 1-113.777778 113.777777H455.111111l-227.555555 170.666667v-170.666667H113.777778a113.777778 113.777778 0 0 1-113.777778-113.777777V113.777778a113.777778 113.777778 0 0 1 113.777778-113.777778z"  ></path></symbol></svg>';var script=function(){var scripts=document.getElementsByTagName("script");return scripts[scripts.length-1]}();var shouldInjectCss=script.getAttribute("data-injectcss");var ready=function(fn){if(document.addEventListener){if(~["complete","loaded","interactive"].indexOf(document.readyState)){setTimeout(fn,0)}else{var loadFn=function(){document.removeEventListener("DOMContentLoaded",loadFn,false);fn()};document.addEventListener("DOMContentLoaded",loadFn,false)}}else if(document.attachEvent){IEContentLoaded(window,fn)}function IEContentLoaded(w,fn){var d=w.document,done=false,init=function(){if(!done){done=true;fn()}};var polling=function(){try{d.documentElement.doScroll("left")}catch(e){setTimeout(polling,50);return}init()};polling();d.onreadystatechange=function(){if(d.readyState=="complete"){d.onreadystatechange=null;init()}}}};var before=function(el,target){target.parentNode.insertBefore(el,target)};var prepend=function(el,target){if(target.firstChild){before(el,target.firstChild)}else{target.appendChild(el)}};function appendSvg(){var div,svg;div=document.createElement("div");div.innerHTML=svgSprite;svgSprite=null;svg=div.getElementsByTagName("svg")[0];if(svg){svg.setAttribute("aria-hidden","true");svg.style.position="absolute";svg.style.width=0;svg.style.height=0;svg.style.overflow="hidden";prepend(svg,document.body)}}if(shouldInjectCss&&!window.__iconfont__svg__cssinject__){window.__iconfont__svg__cssinject__=true;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(e){console&&console.log(e)}}ready(appendSvg)})(window)