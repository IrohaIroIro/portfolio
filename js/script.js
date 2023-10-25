console.log("js�Ǎ��܂ꂽ��");

document.addEventListener('DOMContentLoaded', () => {
  const details = document.querySelectorAll('.details');

  details.forEach(element => {
    const summary = element.querySelector('.details__summary');
    const content = element.querySelector('.details__content');

    summary.addEventListener('click', e => {
      e.preventDefault();
      if (element.open) {
        const openDetails = content.animate(
          {
            opacity: [1, 0],
            height: [content.offsetHeight + 'px', 0],
          },
          {
            duration: 360,
            easing: 'ease-out',
          }
        );
        openDetails.onfinish = () => {
          element.removeAttribute('open');
        }
      } else {
        element.setAttribute('open', 'true');
        const openDetails = content.animate(
          {
            opacity: [0, 1],
            height: [0, content.offsetHeight + 'px'],
          },
          {
            duration: 360,
            easing: 'ease-out',
          }
        );
      }
    });
  });
});

  // �摜�X���C�_�[
  
	$('.slider').slick({
		autoplay: true,//�����I�ɓ����o�����B�����l��false�B
		infinite: true,//�X���C�h�����[�v�����邩�ǂ����B�����l��true�B
		speed: 500,//�X���C�h�̃X�s�[�h�B�����l��300�B
		slidesToShow: 3,//�X���C�h����ʂ�3��������
		slidesToScroll: 1,//1��̃X�N���[����1���̎ʐ^���ړ����Č�����
		prevArrow: '<div class="slick-prev"></div>',//��󕔕�Preview��HTML��ύX
		nextArrow: '<div class="slick-next"></div>',//��󕔕�Next��HTML��ύX
		centerMode: true,//�v�f�𒆉����낦�ɂ���
		variableWidth: true,//���̈Ⴄ�摜�̍����𑵂��ĕ\��
		dots: false,//�����h�b�g�i�r�Q�[�V�����̕\��
	});


      

    