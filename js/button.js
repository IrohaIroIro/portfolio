//*********************************************//
//***************table-management**************//
//*********************************************//
$(function(){
	p_tableDnD();
	p_tableShadow();
	// �v���X�{�^���N���b�N��
	$(".PlusBtn").on('click',function(){
		// �ԉ��փX�N���[��
		setTimeout(function() {
			window.scroll(0,$(document).height());
		},0);
		$(".table-management tbody tr:first-child").clone(true).appendTo(".table-management tbody");
		$(".table-management tbody tr:last-child td input").val("");
		// $(".table-management tbody tr:last-child td select option").atter("selected",false);
		p_tableDnD();
		p_tableShadow();
	});
	// �}�C�i�X�{�^���N���b�N��
	$(".MinusBtn").on('click',function(){
		// �s��2�s�ȏ゠��΃N���b�N���ꂽ����폜
		if ($(".table-management tbody tr").length >= 2) {
			$(this).parents('tr').remove();
			p_tableDnD();
			p_tableShadow();
		}
	});
// �h���b�O�A���h�h���b�v����
	function p_tableDnD(){
		$(".table-management").tableDnD({
			dragHandle: ".handle"
		});
	}
// �h���b�O�A���h�h���b�v���ɉe��t����
	function p_tableShadow(){
		$(".table-management tbody tr .handle").mousedown(function(){
			// �̈���ŉ�������
			$(this).parents('tr').css('box-shadow','2px 3px 6px 2px #9E9E9E');
			return false;
		})
		$(" * ").mouseup(function(){
			// ��������
			$(".table-management tbody tr").css('box-shadow','none');
		});
	}
});