var cnt = 0;

function mySearchFunction(){
  $("#mySearchDropdown").toggleClass("show")
  cnt++;
  var containerSearch = $("#mySearchDropdown");
  var buttonSearch = $("#btnSearchCate");
  containerSearch.toggleClass("show");
  if(!(cnt%2 == 0)){
    containerSearch.toggleClass("show");
  }

  if($("#mySearchDropdown").hasClass("show")){
    $(document).mouseup(function(e){
      if(!containerSearch.is(e.target) && containerSearch.has(e.target).length === 0){
          containerSearch.removeClass("show");
      }
    });
  }
}


function filterFunction() {
  var input, filter, ul, li, a, i;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  div = document.getElementById("mySearchDropdown");
  a = div.getElementsByTagName("a");
  for (i = 0; i < a.length; i++) {
    txtValue = a[i].textContent || a[i].innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      a[i].style.display = "";
    } 
    else {
      a[i].style.display = "none";
    }
  }
}