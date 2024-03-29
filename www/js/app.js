// App logic.
window.myApp = {};

document.addEventListener('init', function(event) {
  var page = event.target;



  // Each page calls its own initialization controller.
  if (myApp.controllers.hasOwnProperty(page.id)) {
    myApp.controllers[page.id](page);
  }

  // Fill the lists with initial data when the pages we need are ready.
  // This only happens once at the beginning of the app.
  if (page.id === 'menuPage' || page.id === 'completedTasksPage') {
    console.log("Bouton :" + document.querySelector('#buttonToutSuppr'));
    document.querySelector('#buttonToutSuppr').onclick = function(){
      myApp.services.tasks.toutSupp();
    };
    if (document.querySelector('#menuPage')
      && document.querySelector('#pendingTasksPage')
      && !document.querySelector('#pendingTasksPage ons-list-item')
    ) {

      let storage = window.localStorage;
      for (let storageKey in storage) {
        myApp.services.tasks.remettre(storageKey, JSON.parse(storage.getItem(storageKey)));
      }
    }
  }
});
