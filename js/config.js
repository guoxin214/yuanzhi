

//rem.config
(function (doc, win) {
	var docEl = doc.documentElement,
		resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
		recalc = function () {

			var clientWidth = docEl.clientWidth;
			if (!clientWidth) return;
			if (clientWidth >= 1400) {
				docEl.style.fontSize = '100px';
			}else if(clientWidth <= 750){
				docEl.style.fontSize = 150 * (clientWidth / 1400) + 'px';
			}else {
				docEl.style.fontSize = 100 * (clientWidth / 1400) + 'px';
			}
		};

	if (!doc.addEventListener) return;
	win.addEventListener(resizeEvt, recalc, false);
	recalc()
	doc.addEventListener('DOMContentLoaded', recalc, false);
	/*DOMContentLoaded文档加载完成不包含图片资源 onload包含图片资源*/
})(document, window);

	
	