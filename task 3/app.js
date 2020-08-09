const response = new covid;
const ui = new UI;



const submitbtn = document.getElementById('trigger');
const country = document.getElementById('searchCountry');

response.getRequest().then((data)=>{ui.showData(data);});
// response.getRequest().then((data)=>{ui.showChart(data);});


submitbtn.addEventListener('click',function(){
    c=country.value.toLowerCase();
    if (c !== ''){
      response.getRequest().then((data) => {
        ui.showChart(data)
        ui.getSpecData(data, c);
      });
    }else{
      
      ui.clearData();
      ui.showAlert('Please check your entry.')
      
    }
})
