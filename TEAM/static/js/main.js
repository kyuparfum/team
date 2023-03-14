window.onload=function(){
    let open_btn=document.querySelector('.open_btn')
    let close_btn=document.querySelector('.close_btn')
    let open_list=document.querySelector('.open_list')
    let r_c_btn_box=document.querySelector('.r_c_btn_box')
    let r_btn_box=document.querySelector('.r_btn_box')
    console.log(open_btn,open_list,close_btn)

    open_btn.addEventListener('click',function(){
        open_list.style.display='block'
        r_btn_box.style.display='none'
        close_btn.style.display='block'
        r_c_btn_box.style.display='block'
    })


    close_btn.addEventListener('click',function(){
        open_list.style.display='none'
        r_btn_box.style.display='block'
        r_c_btn_box.style.display='none'
    })


}