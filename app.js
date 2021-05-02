const right = document.querySelector('.fa-arrow-right');
const left = document.querySelector('.fa-arrow-left');

const check = document.querySelector('.check');

const slide = document.querySelectorAll('.slider-1')
let curSlide = 0;
const maxSlide = slide.length -1;

console.log(maxSlide)



gTo(0);

function gTo(slide1){

    slide.forEach((s,i)=>{

        s.style.transform = `translateX(${50 *(i-slide1)}%)`;
       
      
       
    })
}
right.addEventListener('click',function(){
nextView()

    gTo(curSlide);

    
    
})


left.addEventListener('click',function(){
prevSl();
gTo(curSlide)
   
})



function prevSl(){
    
    if(curSlide ===0){
        curSlide = slide.length-1;
    }else{
curSlide--;
    };
}


function nextView(){
    
    if(curSlide === maxSlide){
        curSlide =0;
    }else{
curSlide++;
    }
}

