$(function(){

  let position = 0;
  const slidesToShow = 1;
  const slidesToScroll = 1;
  const container = $('.head__slider-container');
  const track = $('.head__slider-track');
  const item = $('.head__slider-item');
  const btnPrev = $('.counter__btn-1');
  const btnNext = $('.counter__btn-2');
  const itemsCount =  item.length;
  const itemWidth = container.width() / slidesToShow;
  const movePosition = slidesToScroll * itemWidth;

  item.each(function (index, item){
    $(item).css({
      minWidth: itemWidth,
    });
  });

  btnNext.click(function(){
    position -=movePosition;

    setPosition();
    checkBtns();

  });

  btnPrev.click(function(){
      position +=movePosition;

      setPosition();
      checkBtns();

  });

  const setPosition = () => {
    track.css({
      transform: `translateX(${position}px)`
    });
  };
  const checkBtns = () => {
    btnPrev.prop('disabled', position === 0);
    btnNext.prop(
      'disabled',
      position <=  -(itemsCount - slidesToShow) * itemWidth
    );
      
  };
  checkBtns();

  

  



/*
        var theNum = "0";

        let arr = ["header-img","header-img-1", "header-img-3", "header-img-4"];

        function go_to_right()

        {

        theNum++;

        if(theNum == arr.length){theNum="0";}

        change_image_2.src='img/'+arr[theNum]+'.jpg';

        }

        function go_to_left()

        {

        theNum--;

        if(theNum == "-1"){theNum = arr.length -1; } console.log(theNum );

        change_image_2.src='img/'+arr[theNum]+'.jpg';

        }
*/

    const counter = function () {
        const btns = document.querySelectorAll('.counter__btn');
      
      
        btns.forEach(btn => {
          btn.addEventListener('click', function () {
            const direction = this.dataset.direction;
            const inp = this.parentElement.querySelector('.counter__value');
            const currentValue = +inp.value;
            let newValue;
      
            if (direction === 'plus') {
              newValue = currentValue + 1;
            } else {
              newValue = currentValue - 1 > 0 ? currentValue - 1 : 0;
            }
            

      
            inp.value = newValue;
          })
        })
      
      } 
 
      counter();



      let dog = $('.counter__value').val() ;
          while (dog > 10) {
            $('.counter__max1').addClass("disabled");
            i++;
          }

      /*
      $('.counter__btn-1').click(function(){
        go_to_left();
      });
      $('.counter__btn-2').click(function(){
        go_to_right();
      });
      */
     $('.counter__btn-1').click(function(){
      wow = new WOW(
        {
        boxClass:     'wow',      
        animateClass: 'animated animate__zoomIn',               
        Infinity: true,
      }
      )
      


      wow.init();
      $('.head__slider-item').css({
        opacity:`0`
      });
    });
    $('.counter__btn-2').click(function(){
      wow = new WOW(
        {
        boxClass:     'wow',      
        animateClass: 'animated animate__zoomIn',          
        Infinity: true       
      }
      )
      wow.init();
    });
        
  
});
