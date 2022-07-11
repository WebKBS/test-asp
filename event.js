// Code to handle install prompt on desktop

let deferredPrompt;
const addBtn = document.getElementById('add_btn');
addBtn.style.display = 'none';

window.addEventListener('beforeinstallprompt', (e) => {
  // Prevent Chrome 67 and earlier from automatically showing the prompt
  e.preventDefault();
  // Stash the event so it can be triggered later.
  deferredPrompt = e;
  // Update UI to notify the user they can add to home screen
  addBtn.style.display = 'block';

  addBtn.addEventListener('click', () => {
    // hide our user interface that shows our A2HS button
    addBtn.style.display = 'none';
    // Show the prompt
    deferredPrompt.prompt();
    // Wait for the user to respond to the prompt
    deferredPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === 'accepted') {
        alert.log('설치가 완료되었습니다. 브라우저가 종료됩니다.');
      } else {
        alert.log('설치 실패하였습니다.');
      }
      deferredPrompt = null;
    });
  });
});
