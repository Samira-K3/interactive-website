function  getElementById(value){
    const element=document.getElementById(value);
    return element;
}

function getValue(element){
    const text=element.innerText;
    const number=parseInt(text);
    return number;
}


function createP(value){
    let p=document.createElement('p');
    p.innerText=value;
    return p;
}

function calculate(value){
    let totalPrice=getElementById('total');
    let totalValue=getValue(totalPrice);
    let discount =  parseInt(totalValue*(value/100));
    let grandTotal= totalValue-discount;
    console.log('totalValue',totalValue,'discount',discount,'grandTotal',grandTotal);

    let tableOfDiscount=getElementById('discount');
    let p1 = createP('Discount');           
    let p2 = createP(discount);
    p1.classList.add('col-span-2');
    p1.classList.add('text-red-500');
    p2.classList.add('text-center');
    p2.classList.add('text-red-500');
    tableOfDiscount.appendChild(p1);
    tableOfDiscount.appendChild(p2);

    let grandPrice=getElementById('grand-total');
    grandPrice.innerText=grandTotal;
}


function buttonEnable(){
    let button=getElementById('next');
    button.disabled=false;
}