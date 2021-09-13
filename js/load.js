'use strict';


// Headerを読み込むためのFunction
// 以後htmlの指定方法は<script>header();</script>
function header() {
  $.ajax({
    url: '/component/header.html',
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
    url: '/component/footer.html',
    cache: false,
    async: false,
    dataType: 'html',
    success: function(html){
      document.write(html);
    }
  });
}
