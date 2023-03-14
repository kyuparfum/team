window.onload=function(){
    let open_btn=document.querySelector('.open_btn')
    let close_btn=document.querySelector('.close_btn')
    let hide_list=document.querySelector('.hide_list')
    console.log(open_btn,close_btn)

    open_btn.addEventListener('click',function(){
        hide_list.style.display='block'
        open_btn.style.display='none'
        close_btn.style.display='flex'
        close_btn.style.transform='rotate(180deg);'
    })
    close_btn.addEventListener('click',function(){
        hide_list.style.display='none'
        open_btn.style.display='flex'
        close_btn.style.display='none'
    })

}