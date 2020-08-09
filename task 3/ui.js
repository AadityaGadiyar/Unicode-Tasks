class UI {
    constructor(){
        this.profile = document.getElementById('profile');
    }


    //display table data
  showData(data) {
    
    
      let output = `<table class = "table table-hover"
          < thead >
          <tr>
              <th >Country</th>
              <th style= "color:blue">Active Cases</th>
              <th style="color:red">Deceased</th>
              <th style="color:green">Recovered</th>
          </tr>
        </thead >`;
    
    for (let i=0;i<=10;i++) {
        output+=`
        
        <tbody>
        <tr>
        <td>${data.countries_stat[i].country_name}</td>
        <td>${data.countries_stat[i].cases}</td>
        <td>${data.countries_stat[i].deaths}</td>
        <td>${data.countries_stat[i].total_recovered}</td>
        </tr>
        </tbody>
        `;
    }
        document.getElementById("profile").innerHTML = output;
  
}


//get search results
getSpecData(data,sp){
    let list=[];
    const cList = data.countries_stat.forEach(function (repo) {
        list.push(repo.country_name.toLowerCase())
    })
    

    if(list.indexOf(sp) !== -1){
        
        const d = list.indexOf(sp);
        let output2 ='';
        output2+=`
        <span class="alert alert-info">Cases:${data.countries_stat[d].cases}</span>
        <br><br><br>
        <span class="alert alert-success">Recoveries:${data.countries_stat[d].total_recovered}</span>
        <br><br><br>
        <span class="alert alert-danger ">Deceased:${data.countries_stat[d].deaths}</span>
        <br><br><br>
        <span class="alert alert-warning ">Seriously Critical:${data.countries_stat[d].serious_critical}</span>
        <br>
        
        `;

        document.getElementById('specific').innerHTML=output2;


    }
}


//clear data
clearData(){
    document.getElementById('specific').innerHTML='';
}



//Alert
showAlert(message){
    const div = document.createElement('div');
    div.className = 'alert alert-danger text-center';
    div.appendChild(document.createTextNode(message));
    const container = document.querySelector('.searchContainer ');
    const d = document.querySelector('.search');
    container.insertBefore(div,d)
    
    setTimeout(function(){
        document.querySelector('.alert').remove();
    },3000);
}


//display chart
showChart(data){
    let myChart = document.getElementById('myChart').getContext('2d');

    


    let l=[];
    let d=[];
    let numArray=[];

    let x = data.countries_stat
    for (let j = 0; j < 10; j++){
        l.push(x[j].country_name);
        d.push(x[j].cases);
    }

    
    for(let k=0;k<10;k++){
        numArray.push(Number(d[k].split(',').join('')))
    }
   

    let barChart = new Chart(myChart,{
        type:'bar',
        data:{
            labels:l,
            datasets:[{
                label:'Cases',
                data: numArray,
                backgroundColor: [
                    'rgb(84, 71, 140)',
                    'rgb(44, 105, 154)',
                    'rgb(4, 139, 168)',
                    'rgb(172, 86, 38)',
                    'rgb(22, 219, 147)',
                    'rgb(131, 227, 119)',
                    'rgb(185, 231, 105)',
                    'rgb(239, 234, 90)',
                    'rgb(241, 196, 83)',
                    'rgb(242, 158, 76)',
                ],
                borderWidth:1,
                borderColor:'#777',
                hoverBorderWidth:3,
                hoverBorderColor:'#000'
        }]
        
        },
        options:{
            title:{
                display:true,
                text:'10 Most affected countries'
            }
        }
    })

}

}
