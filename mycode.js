
function main() {

        $('#changeAll').on('click',function(){
          var back = ['AliceBlue', 'AntiqueWhite', 'Aqua', 'Aquamarine', 'Azure', 'Beige', 'Bisque', 'Black', 'BlanchedAlmond', 'Blue', 'BlueViolet', 'Brown', 'BurlyWood', 'CadetBlue', 'Chartreuse', 'Chocolate', 'Crimson'];
          var clrr = back[Math.floor(Math.random() * back.length)];
          $('.addclr').css("background-color", clrr);
          
        });
        
        $('#reset-btn').on('click',function(){
          
          $('.my-squ').removeClass('addclr');
          
        })


    $('.my-squ').click(function () {

        
        $(this).toggleClass('addclr');

    });
  


}

$(document).ready(main);

