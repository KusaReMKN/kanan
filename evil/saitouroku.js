'use strict';
himitu.addEventListener('input', e => document.body.style.background = e.target.value);
bangou.addEventListener('input', e => bangouOut.textContent = e.target.value);
namae.addEventListener('keydown', e => {
	e.preventDefault();
	switch (e.key) {
		case 'Backspace':
			e.target.value = e.target.value.substring(1);
			break;
		case 'Enter':
			break;
		default:
			e.target.value += 'あ';
	}
});
function guruguru(target) {
	const range = 0x3094 - 0x3041;
	target.textContent = String.fromCharCode(Math.random() * range + 0x3041);
	target.dataset.timer = setTimeout(() => guruguru(target));
}
function restart() {
	mouikkai.disabled = true;
	[ wa, ka, ra, na, ia ].forEach(e => {
		guruguru(e);
		e.onclick = e => {
			e.preventDefault();
			clearTimeout(+e.target.dataset.timer);
			e.target.textContent = e.target.dataset.stop;
			const wakaranai = [];
			[ wa, ka, ra, na, ia ].forEach(e => wakaranai.push(e.textContent));
			if (wakaranai.join('') === 'わからない')
				mouikkai.disabled = false;
		};
	});
}
mouikkai.addEventListener('click', e => {
	e.preventDefault();
	restart();
});
saitouroku.addEventListener('submit', e => {
	const yes = confirm(
		`${[ wa, ka, ra, na, ia ].map(e => e.textContent).join('')} の `
		+ `${namae.value} さんを出席番号 ${bangou.value} で再登録します`
	);
	if (!yes)
		e.preventDefault();
		return false;
});
document.addEventListener('DOMContentLoaded', _ => {
	for (let i = 0; i < 100; i++)
		yume.append(yume.firstElementChild.cloneNode(true));
	restart();
});
