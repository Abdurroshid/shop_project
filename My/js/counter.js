let all_items = document.getElementsByClassName("items");
for (let i=0;i<all_items.length;i++){
    ot(all_items[i]);
}
let item_number = document.getElementById("item_number"), ct_num = 0;
let item_price = document.getElementById("item_price"), ct_price = 0;
function ot(cur){
    let ct = 0;
    let block_minus = cur.childNodes[1];
    let block_cnt = cur.childNodes[3];
    let block_plus = cur.childNodes[5];
    block_minus.addEventListener("click",function(){
        if(ct==0)return;
        ct--;
        block_cnt.innerHTML = ct;
        ct_num-=6;
        item_number.innerHTML = ct_num;

        let par = cur.parentNode;
        let x = par.childNodes[3].childNodes[3].innerHTML.slice(0,4);
        x = Number(x);
        ct_price-=x;
        item_price.innerHTML = ct_price;
    });
    block_plus.addEventListener("click",function(){
        ct++;
        block_cnt.innerHTML = ct;
        ct_num+=6;
        item_number.innerHTML = ct_num;

        let par = cur.parentNode;
        let x = par.childNodes[3].childNodes[3].innerHTML.slice(0,4);
        x = Number(x);
        ct_price+=x;
        item_price.innerHTML = ct_price;
    });
}
