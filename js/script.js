console.log("js�Ǎ��܂ꂽ��");

  // �X���C�h�C��
  var slideConts = document.querySelectorAll('.slideConts'); // �X���C�h�ŕ\��������v�f�̎擾
  var slideContsRect = []; // �v�f�̈ʒu�����邽�߂̔z��
  var slideContsTop = []; // �v�f�̈ʒu�����邽�߂̔z��
  var windowY = window.pageYOffset; // �E�B���h�E�̃X�N���[���ʒu���擾
  var windowH = window.innerHeight; // �E�B���h�E�̍������擾
  var remainder = 100; // ������Ƃ͂ݏo�����镔��
  // �v�f�̈ʒu���擾
  for (var i = 0; i < slideConts.length; i++) {
    slideContsRect.push(slideConts[i].getBoundingClientRect());
  }
  for (var i = 0; i < slideContsRect.length; i++) {
    slideContsTop.push(slideContsRect[i].top + windowY);
  }
  // �E�B���h�E�����T�C�Y���ꂽ��A�E�B���h�E�̍������Ď擾
  window.addEventListener('resize', function () {
    windowH = window.innerHeight;
  });
  // �X�N���[�����ꂽ��
  window.addEventListener('scroll', function () {
    // �X�N���[���ʒu���擾
    windowY = window.pageYOffset;
    
    for (var i = 0; i < slideConts.length; i++) {
      // �v�f����ʂ̉��[�ɂ���������
      if(windowY > slideContsTop[i] - windowH + remainder) {
        // .show��t�^
        slideConts[i].classList.add('show');
      } else {
        // �t��.show���폜
        slideConts[i].classList.remove('show');
      }
    }
  });var slideConts = document.querySelectorAll('.slideConts'); // �X���C�h�ŕ\��������v�f�̎擾
  var slideContsRect = []; // �v�f�̈ʒu�����邽�߂̔z��
  var slideContsTop = []; // �v�f�̈ʒu�����邽�߂̔z��
  var windowY = window.pageYOffset; // �E�B���h�E�̃X�N���[���ʒu���擾
  var windowH = window.innerHeight; // �E�B���h�E�̍������擾
  var remainder = 100; // ������Ƃ͂ݏo�����镔��
  // �v�f�̈ʒu���擾
  for (var i = 0; i < slideConts.length; i++) {
    slideContsRect.push(slideConts[i].getBoundingClientRect());
  }
  for (var i = 0; i < slideContsRect.length; i++) {
    slideContsTop.push(slideContsRect[i].top + windowY);
  }
  // �E�B���h�E�����T�C�Y���ꂽ��A�E�B���h�E�̍������Ď擾
  window.addEventListener('resize', function () {
    windowH = window.innerHeight;
  });
  // �X�N���[�����ꂽ��
  window.addEventListener('scroll', function () {
    // �X�N���[���ʒu���擾
    windowY = window.pageYOffset;
    
    for (var i = 0; i < slideConts.length; i++) {
      // �v�f����ʂ̉��[�ɂ���������
      if(windowY > slideContsTop[i] - windowH + remainder) {
        // .show��t�^
        slideConts[i].classList.add('show');
      } else {
        // �t��.show���폜
        slideConts[i].classList.remove('show');
      }
    }
  });



// �t�F�[�h
  var fadeConts = document.querySelectorAll('.fadeConts'); // �t�F�[�h������v�f�̎擾
var fadeContsRect = []; // �v�f�̈ʒu���擾���邽�߂̔z��
var fadeContsTop = []; // �v�f�̈ʒu���擾���邽�߂̔z��
var windowY = window.pageYOffset; // �E�B���h�E�̃X�N���[���ʒu
var windowH = window.innerHeight; // �E�B���h�E�̍���
var remainder = 100; // ������Ƃ͂ݏo�����镔��
// �v�f�̈ʒu���擾
for (var i = 0; i < fadeConts.length; i++) {
  fadeContsRect.push(fadeConts[i].getBoundingClientRect());
}
for (var i = 0; i < fadeContsRect.length; i++) {
  fadeContsTop.push(fadeContsRect[i].top + windowY);
}
// �E�B���h�E�����T�C�Y���ꂽ��A�E�B���h�E�̍������Ď擾
window.addEventListener('resize', function () {
  windowH = window.innerHeight;
});
// �X�N���[�����ꂽ��
window.addEventListener('scroll', function () {
  // �X�N���[���ʒu���擾
  windowY = window.pageYOffset;
  
  for (var i = 0; i < fadeConts.length; i++) {
    // �v�f����ʂ̉��[�ɂ���������
    if(windowY > fadeContsTop[i] - windowH + remainder) {
      // .show��t�^
      fadeConts[i].classList.add('show');
    } else {
      // �t��.show���폜
      fadeConts[i].classList.remove('show');
    }
  }
});


// �A�R�[�f�B�I���A�j���[�V����
const ANIMATION_TIME = 250;
const OFFSET_TIME = 5;

document.addEventListener('DOMContentLoaded', function () {

  const accordions = document.querySelectorAll('.details');
  accordions.forEach((accordion) => {
    const title = accordion.querySelector('.summary');
    title.addEventListener('click', (e) => {
      e.preventDefault();
      if (!accordion.open) {
        accordion.open = true;
        setTimeout(() => {
          accordion.classList.add('is-opened'); 
        }, OFFSET_TIME);
        //
      } else if (accordion.open) {
        accordion.classList.remove('is-opened'); 
        setTimeout(() => {
          accordion.open = false;
        }, ANIMATION_TIME + OFFSET_TIME);
      }
    });


    accordion.addEventListener('toggle', () => {
      const hasOpenedClass = accordion.classList.contains('is-opened');

      if (accordion.open && !hasOpenedClass) {
        accordion.classList.add('is-opened');
      } else if (!accordion.open && hasOpenedClass) {
        accordion.classList.remove('is-opened');
      }
    });
  });
});