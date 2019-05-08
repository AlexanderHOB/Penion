//FUNCIONES

// nav toggle
function navToggle(){
	// Button animation
	if (this.classList.contains('open')) {
		this.classList.remove(navToggleStatus);
		navToggleStatus = 'close';
	} else if (this.classList.contains('close')) {
		this.classList.remove(navToggleStatus);
		navToggleStatus = 'open';
	}
	void this.offsetWidth;
	this.classList.add(navToggleStatus);

	// Slide down
	navH = $nav.scrollHeight + 'px';
	$nav.classList.toggle('drop');
	$nav.classList.contains('drop') ? $nav.style.height = navH : $nav.style.height = '0px';

}

function navRemove(){
	$nav.style.height = '0px';
	$nav.classList.remove('drop');
	$navToggle.classList.remove(navToggleStatus);
	navToggleStatus = 'close';
	void $navToggle.offsetWidth;
	$navToggle.classList.add(navToggleStatus);

}

// ScrollSpy
function scrollSpy(){
	scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;
	for (let i in sections) {
		if (sections[i] <= scrollPosition + headerH) {
			document.querySelector('.nav-link-active').classList.remove('nav-link-active');
			document.querySelector('a[data-spy*=' + i + ']').classList.add('nav-link-active');
		}
	}
}

//Service
validateForm($formName,$groupName);
validateForm($formEmail,$groupEmail);
validateForm($formMessage,$groupMessage);
validateForm($formError);
//valida formulario en los eventos focus-blur-submit
function validateForm(form,group){
	form.addEventListener('focus',()=>{
		group.classList.add('contactanos-form-group-active');
		group.classList.remove('contactanos-form-group');
	});
	form.addEventListener('blur',()=>{
		group.classList.remove('contactanos-form-group-active');
		group.classList.add('contactanos-form-group');
	});
	form.addEventListener('submit',validar,false);
}
//añade una clase para mostrar imagen
function focusForm(group){
	group.classList.add('contactanos-form-group-active');
	group.classList.remove('contactanos-form-group');
}
//recibe en que parte del formulario se dio el error
function errorField(field){
	field.classList.add('contactanos-form-group-error');
	setTimeout(function(){
		field.classList.remove('contactanos-form-group-error');
	},2000);
}
//valida que los campos esten llenos
function validar(e){
	var stopsubmit=false;
	if($formName.value==""){
		errorField($groupName);
		stopsubmit=true;
		e.preventDefault();	
	}
	if($formEmail.value==""){
		errorField($groupEmail);
		stopsubmit=true;
		e.preventDefault();	
	}
}

// Messenger Service
function chatNone(){
	$messengerChat.style.display = 'none';
	$messengerChat.classList.contains('messenger-chat-down') ? $messengerChat.classList.remove('messenger-chat-down'): null;
}

function bodyRemove(){
	$body.classList.remove('close-body', 'close-messenger-body', 'close-chat-body', 'close-helper-body');
}