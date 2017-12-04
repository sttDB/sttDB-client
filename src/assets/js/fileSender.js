function sendFile(){
  $('#trinity-submit').on('click', ()=>{
    console.log("calling ajax");
  var formData = new FormData();
  formData.append('file', $('input[type=file]')[0].files[0]);
  $.ajax({
    url: 'http://localhost:8080/uploadFasta',
    contentType: false,
    processData: false,
    type: 'POST',
    data: formData,
    success: function(){
      alert("File entered");
    },
    error: function(err){
      console.log(JSON.stringify(err));
    }
  });
});
}

sendFile();
