// This was Robbies
console.log("hi")
function stop (event) {
  event.preventDefault();
  event.stopPropagation();
}

$('.drop-zone').on('dragenter dragover', stop);

$('.drop-zone').on('drop', function(event) {

  stop(event);
  console.log(event)
  console.log(event.originalEvent.dataTransfer.files[0])

// at this point it isn't working.  I can't see anythign through console.log

})

// recopied for changes



// recopied for changes

$('.drop-zone').on('drop', function(event) {
  stop(event);
  var originalEvent = event.originalEvent;
  var dataTransfer = originalEvent.dataTransfer;
  // console.log(dataTransfer.files[0])

})


function drop(e) {
  e.stopPropagation();
  e.preventDefault();

  var dt = e.dataTransfer;
  var files = dt.files;

  handleFiles(files);
}


// This was pulled from MDN Using files from web applications
//
// var dropbox;
//
// dropbox = document.getElementById("dropbox");
// dropbox.addEventListener("dragenter", dragenter, false);
// dropbox.addEventListener("dragover", dragover, false);
// dropbox.addEventListener("drop", drop, false);
//
// function dragenter(e) {
//   e.stopPropagation();
//   e.preventDefault();
// }
//
// function dragover(e) {
//   e.stopPropagation();
//   e.preventDefault();
// }
//
// function drop(e) {
//   e.stopPropagation();
//   e.preventDefault();
//
//   var dt = e.dataTransfer;
//   var files = dt.files;
//
//   handleFiles(files);
// }
