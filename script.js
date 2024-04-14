//Calculate which fuel will give the best performance based on price
function calculateBestOption() {
    //Receive and store user inputs
    const ethanolPriceInput = document.getElementById('ethanol');
    const gasolinePriceInput = document.getElementById('gasoline');
    const dieselPriceInput = document.getElementById('diesel');
    const elementResult = document.getElementById('result');
        
    /*Ensure that the inputs will be converted in valid real numbers, 
        storing in these constants and being able to calculate in the
        processing*/
    const ethanolPrice = parseFloat(ethanolPriceInput.value);
    const gasolinePrice = parseFloat(gasolinePriceInput.value);
    const dieselPrice = parseFloat(dieselPriceInput.value);
        
    /*Validations for the user inputs (confirm that the inputs are
        valid numbers and positive numbers, if not, the calculus is 
        not executed)*/
    if (isNaN(ethanolPrice) || ethanolPrice <= 0) {
        alert('Type a valid value for the price of ethanol');
        ethanolPriceInput.value = '';
        return;
    }
      
    if (isNaN(gasolinePrice) || gasolinePrice <= 0) {
        alert('Type a valid value for the price of gasoline');
        gasolinePriceInput.value = '';
        return;
    }
      
    if (isNaN(dieselPrice) || dieselPrice <= 0) {
        alert('Type a valid value for the price of diesel');
        dieselPriceInput.value = '';
        return;
    }
    
    /*Constants declaration for processing,
        where 1 money unity = constant value*/
    const ethanolDistance = 0.85;
    const gasolineDistance = 1.1;
    const dieselDistance = 1.5;
    
    let result = '';
        
    //Processing
    let totalDistanceEthanol = ethanolDistance * ethanolPrice;
    let totalDistanceGasoline = gasolineDistance * gasolinePrice;
    let totalDistanceDiesel = dieselDistance * dieselPrice;
    
    if(totalDistanceEthanol > totalDistanceGasoline && totalDistanceEthanol > totalDistanceDiesel){
        result = 'Ethanol'
    }else if(totalDistanceGasoline > totalDistanceEthanol && totalDistanceGasoline > totalDistanceDiesel){
        result = 'Gasoline'
    }else{
        result = 'Diesel'
    }

    //Result output
    elementResult.innerText = 'You will have a better performance with: ' + result;
}
