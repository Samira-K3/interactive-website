let seatList=[];
const classType='economy';
const ticketPrice=550;

// let totalNumber=0;


function select(id){

    if(!seatList.includes(id)){

        let total=getElementById('total-seat');
        let totalNumber=getValue(total);
        totalNumber=totalNumber+1;

        if(totalNumber<=4){

            buttonEnable();

            seatList.push(id);          

            let selectedSit=getElementById(id);
            selectedSit.classList.remove('bg-gray-100');
            selectedSit.classList.add('bg-[#1DD100]');
            selectedSit.classList.add('text-white');


            let tableOfTransaction=getElementById('transaction-list');
            let p1 = createP(id);           
            let p2 = createP(classType);
            let p3 = createP(ticketPrice);
            tableOfTransaction.appendChild(p1);
            tableOfTransaction.appendChild(p2);
            tableOfTransaction.appendChild(p3);
            
            // console.log(typeof ticketPrice);
            let totalPrice=getElementById('total');
            let totalValue=getValue(totalPrice);
            totalValue=totalValue+ticketPrice;
            totalPrice.innerText=totalValue;


            let grandPrice=getElementById('grand-total');
            let grandValue=getValue(grandPrice);
            grandPrice.innerText=totalValue;
        
            let remain=getElementById('seat-remain');
            let remainNumber=getValue(remain);
            remainNumber=remainNumber-1;

            total.innerText=totalNumber;
            remain.innerText=remainNumber;

            
           
        }else{
            alert("You Can't Buy More Ticket");
        }
    }else{
        alert("Already Selected");
    }
        
}


function setPrice(id){
    
    const couponOne='NEW15';
    const couponTwo='Couple 20';
    const element=getElementById('coupon');
    let coupon =element.value;
    let applyButton=getElementById(id);
    if(coupon===couponOne){
        calculate(15);
        applyButton.parentNode.classList.add('hidden');

        
    }else if(coupon===couponTwo){
        calculate(20);
        applyButton.parentNode.classList.add('hidden');

        
    }else{
        alert("Invalid Coupon");
    }
}