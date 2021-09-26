'use strict';

$(function() {
  $("#header").load("../component/header.html");
  $("#footer").load("../component/footer.html");
});





/*// Headerを読み込むためのFunction
// 以後htmlの指定方法は<script>header();</script>
function header() {
  $.ajax({
    url: 'header.html',
    cache: false,
    async: false,
    dataType: 'html',
    success: function(html){
      document.write(html);
    }
  });
}



// Footerを読み込むためのFunction
// 以後htmlの指定方法は<script>footer();</script>
function footer() {
  $.ajax({
    url: './assets/component/footer.html',
    cache: false,
    async: false,
    dataType: 'html',
    success: function(html){
      document.write(html);
    }
  });
}
*/
