 
// materialise functionality for sideBar, collapsible popout, select options 

 $(document).ready(function(){
    $('.sidenav').sidenav({edge:"right"});

    $('.collapsible').collapsible();
  
    $('.tooltipped').tooltip();

    $("select").formSelect();

});



  
    
