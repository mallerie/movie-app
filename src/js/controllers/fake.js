function  FakeController () {
  console.log("Fake Controller ran succesfully");


  function init() {
    console.log("init in fake controller ran");  
    }

  init();


}

MovieController.$inject = [];
export { FakeController };