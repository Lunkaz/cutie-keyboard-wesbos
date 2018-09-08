function removeTransition(e) {
		if (e.propertyName !== 'transform') return;
    this.classList.remove('playing');
	}

function playSound(e) {
    const audio = document.querySelector(`audio[data-key='${e.keyCode}']`);
    const key = document.querySelector(`div[data-key='${e.keyCode}']`);
  	if (!audio) return;

    key.classList.add('playing');
    audio.currentTime = 0;
    audio.play();
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);


const items = document.querySelectorAll('.item');

function clickTrigger() {
  let key=(this.dataset.key);
  const audio=document.querySelector(`audio[data-key="${key}"]`);
  const item=this;
  item.classList.add('playing');
  audio.currentTime = 0;
  audio.play();
}

function unclickTrigger() {
  this.classList.remove('play');
}

items.forEach(item=>item.addEventListener('mousedown',clickTrigger));
items.forEach(item=>item.addEventListener('mouseup',unclickTrigger));
