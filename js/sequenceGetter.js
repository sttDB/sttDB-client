function getSequenceById(){
  $('#trinity-submit').on('click', ()=>{
    $.ajax({
      url: "http://localhost:8080/sequences/search/findByTrinityId",
      dataType: "json",
      type: 'GET',
      data: {
        trinityId: document.getElementById('trinity-input').value
      }
    }).then((dnaSequence)=>{
      $("#search-result").append(JSON.stringify(dnaSequence));
    });
  });
}

getSequenceById();
