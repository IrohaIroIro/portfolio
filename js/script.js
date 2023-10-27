console.log("js読込まれたよ");

  // スライドイン
  var slideConts = document.querySelectorAll('.slideConts'); // スライドで表示させる要素の取得
  var slideContsRect = []; // 要素の位置を入れるための配列
  var slideContsTop = []; // 要素の位置を入れるための配列
  var windowY = window.pageYOffset; // ウィンドウのスクロール位置を取得
  var windowH = window.innerHeight; // ウィンドウの高さを取得
  var remainder = 100; // ちょっとはみ出させる部分
  // 要素の位置を取得
  for (var i = 0; i < slideConts.length; i++) {
    slideContsRect.push(slideConts[i].getBoundingClientRect());
  }
  for (var i = 0; i < slideContsRect.length; i++) {
    slideContsTop.push(slideContsRect[i].top + windowY);
  }
  // ウィンドウがリサイズされたら、ウィンドウの高さを再取得
  window.addEventListener('resize', function () {
    windowH = window.innerHeight;
  });
  // スクロールされたら
  window.addEventListener('scroll', function () {
    // スクロール位置を取得
    windowY = window.pageYOffset;
    
    for (var i = 0; i < slideConts.length; i++) {
      // 要素が画面の下端にかかったら
      if(windowY > slideContsTop[i] - windowH + remainder) {
        // .showを付与
        slideConts[i].classList.add('show');
      } else {
        // 逆に.showを削除
        slideConts[i].classList.remove('show');
      }
    }
  });var slideConts = document.querySelectorAll('.slideConts'); // スライドで表示させる要素の取得
  var slideContsRect = []; // 要素の位置を入れるための配列
  var slideContsTop = []; // 要素の位置を入れるための配列
  var windowY = window.pageYOffset; // ウィンドウのスクロール位置を取得
  var windowH = window.innerHeight; // ウィンドウの高さを取得
  var remainder = 100; // ちょっとはみ出させる部分
  // 要素の位置を取得
  for (var i = 0; i < slideConts.length; i++) {
    slideContsRect.push(slideConts[i].getBoundingClientRect());
  }
  for (var i = 0; i < slideContsRect.length; i++) {
    slideContsTop.push(slideContsRect[i].top + windowY);
  }
  // ウィンドウがリサイズされたら、ウィンドウの高さを再取得
  window.addEventListener('resize', function () {
    windowH = window.innerHeight;
  });
  // スクロールされたら
  window.addEventListener('scroll', function () {
    // スクロール位置を取得
    windowY = window.pageYOffset;
    
    for (var i = 0; i < slideConts.length; i++) {
      // 要素が画面の下端にかかったら
      if(windowY > slideContsTop[i] - windowH + remainder) {
        // .showを付与
        slideConts[i].classList.add('show');
      } else {
        // 逆に.showを削除
        slideConts[i].classList.remove('show');
      }
    }
  });




// フェード
  var fadeConts = document.querySelectorAll('.fadeConts'); // フェードさせる要素の取得
var fadeContsRect = []; // 要素の位置を取得するための配列
var fadeContsTop = []; // 要素の位置を取得するための配列
var windowY = window.pageYOffset; // ウィンドウのスクロール位置
var windowH = window.innerHeight; // ウィンドウの高さ

// 要素の位置を取得
for (var i = 0; i < fadeConts.length; i++) {
  fadeContsRect.push(fadeConts[i].getBoundingClientRect());
}
for (var i = 0; i < fadeContsRect.length; i++) {
  fadeContsTop.push(fadeContsRect[i].top + windowY);
}
// ウィンドウがリサイズされたら、ウィンドウの高さを再取得
window.addEventListener('resize', function () {
  windowH = window.innerHeight;
});
// スクロールされたら
window.addEventListener('scroll', function () {
  // スクロール位置を取得
  windowY = window.pageYOffset;
  
  for (var i = 0; i < fadeConts.length; i++) {
    // 要素が画面の下端にかかったら
    if(windowY > fadeContsTop[i] - windowH + remainder) {
      // .showを付与
      fadeConts[i].classList.add('show');
    } else {
      // 逆に.showを削除
      fadeConts[i].classList.remove('show');
    }
  }
});


// アコーディオンアニメーション
function setDetailsHeight(selector, wrapper = document) {
  const setHeight = (detail, open = false) => {
    detail.open = open;
    const rect = detail.getBoundingClientRect();
    detail.dataset.width = rect.width;
    detail.style.setProperty(open ? `--expanded` : `--collapsed`,`${rect.height}px`);
  }
  const details = wrapper.querySelectorAll(selector);
  const RO = new ResizeObserver(entries => {
    return entries.forEach(entry => {
      const detail = entry.target;
      const width = parseInt(detail.dataset.width, 10);
      if (width !== entry.contentRect.width) {
        detail.removeAttribute('style');
        setHeight(detail);
        setHeight(detail, true);
        detail.open = false;
      }
    })
  });
  details.forEach(detail => {
    RO.observe(detail);
  });
}

/* Run it */
setDetailsHeight('details');
