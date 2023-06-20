export default {
  show () {
    const div = document.createElement('div');
    div.classList.add('loading');
    div.id = 'spin-overlay';

    const div2 = document.createElement('div');
    div2.classList.add('lds-ripple');

    const div3 = document.createElement('div');
    const div4 = document.createElement('div');

    div2.appendChild(div3);
    div2.appendChild(div4);
    div.appendChild(div2);

    document.body.appendChild(div);

    setTimeout(() => {
      document.getElementById('spin-overlay').style.opacity = '1';
    });
  },
  hide () {
    const spinOverlay = document.getElementById('spin-overlay');
    if (!spinOverlay) {
      return;
    }
    document.getElementById('spin-overlay').style.opacity = '';

    setTimeout(() => {
      document.getElementById('spin-overlay').remove();
    }, 500);
  }
};
