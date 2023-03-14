window.onload=function(){
    let open_btn=document.querySelector('.open_btn')
    let close_btn=document.querySelector('.close_btn')
    let close_btn_button=document.querySelector('.close_btn > button')
    let open_list=document.querySelector('.open_list')
    console.log(open_btn,open_list,close_btn)

    open_btn.addEventListener('click',function(){
        open_btn.style.display='none'
        close_btn.style.display='flex'
        open_list.style.display='block'
        close_btn_button.style.transform='rotate(180deg)'
    })
    close_btn.addEventListener('click',function(){
        open_btn.style.display='flex'
        close_btn.style.display='none'
        open_list.style.display='none'
    })

    

}