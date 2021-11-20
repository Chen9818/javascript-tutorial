
//API
let data =[];
axios.get("https://raw.githubusercontent.com/hexschool/js-training/main/travelApi.json")
  .then(function(re){
  // console.log(re.data.data)
  data = re.data.data;
  card(data)
})
//渲染套票圖卡
function card(data){
let totalSearch = document.querySelector("#searchResult-text")
let cardArea = document.querySelector(".ticketCard-area")
let content = ''
data.forEach(i=>content+=` <li class="ticketCard">
        <div class="ticketCard-img">
          <a href="#">
            <img src="${i.imgUrl}" alt="">
          </a>
          <div class="ticketCard-region">${i.area}</div>
          <div class="ticketCard-rank">${i.rate}</div>
        </div>
        <div class="ticketCard-content">
          <div>
            <h3>
              <a href="#" class="ticketCard-name">${i.name}</a>
            </h3>
            <p class="ticketCard-description">
              ${i.description}
            </p>
          </div>
          <div class="ticketCard-info">
            <p class="ticketCard-num">
              <span><i class="fas fa-exclamation-circle"></i></span>
              剩下最後 <span id="ticketCard-num"> ${i.group} </span> 組
            </p>
            <p class="ticketCard-price">
              TWD <span id="ticketCard-price">${i.price}</span>
            </p>
          </div>
        </div>
      </li>`)

cardArea.innerHTML = content
totalSearch.textContent = `本次搜尋共 ${data.length} 筆資料`
}

//篩選地區
let searchArea = document.querySelector(".regionSearch")
searchArea.addEventListener("change",filter)
function filter(e){
  // console.log(e.target.value)
  let a = data.filter(i=>i.area==e.target.value);
  card(a);
  if(e.target.value==""){
    return card(data)
  }
}

//表單
let btn  = document.querySelector(".addTicket-btn")
let form = document.querySelector(".addTicket-form")
btn.addEventListener("click",addData)
function addData(){
  //新增套票
  let name = document.querySelector("#ticketName");
  let img = document.querySelector("#ticketImgUrl");
  let region = document.querySelector("#ticketRegion");
  let price = document.querySelector("#ticketPrice");
  let num = document.querySelector("#ticketNum");
  let rate = document.querySelector("#ticketRate");
  let description = document.querySelector("#ticketDescription");
  
  //選取提示位置
  let alertName = document.querySelector("#ticketName-message");
  let alertImg = document.querySelector("#ticketImgUrl-message");
  let alertRegion = document.querySelector("#ticketRegion-message");
  let alertPrice = document.querySelector("#ticketPrice-message");
  let alertNum = document.querySelector("#ticketNum-message");
  let alertRate = document.querySelector("#ticketRate-message");
  let alertDescription = document.querySelector("#ticketDescription-message");
  let alertIcon = `<i class="fas fa-exclamation-circle"></i><span>必填!</span>`
  
  obj = {
      "id": data.length,
      "name": name.value,
      "imgUrl": img.value,
      "area": region.value,
      "description": description.value,
      "group": Number(num.value),
      "price": Number(price.value),
      "rate": Number(rate.value)
  }
  
  if(obj.name != '' && obj.imgUrl != '' && obj.area != '' && obj.description != '' && obj.group != '' && obj.price != '' && obj.rate != ''){
  data.push(obj);//如果資料無缺漏，則加入data
  card(data);
  form.reset();
  alertName.innerHTML = "";//清除提示
  alertImg.innerHTML = "";
  alertRegion.innerHTML = "";
  alertPrice.innerHTML = "";
  alertNum.innerHTML = "";
  alertRate.innerHTML = "";
  alertDescription.innerHTML = "";
  }else{//資料缺漏，加上提示
  if(obj.name==""){
    alertName.innerHTML = alertIcon
  }
  if(obj.imgUrl==""){
    alertImg.innerHTML = alertIcon
  }
  if(obj.area==""){
    alertRegion.innerHTML = alertIcon
  }
  if(obj.price==""){
    alertPrice.innerHTML = alertIcon
  }
  if(obj.group==""){
    alertNum.innerHTML = alertIcon
  }
  if(obj.rate==""){
    alertRate.innerHTML = alertIcon
  }else if(obj.rate>10){
    alert("星級最高為10顆星")
  }
  if(obj.description==""){
    alertDescription.innerHTML = alertIcon
  }else if(obj.description.length>100){
    alert("超過字數")
  }
  }
}

// card(data)//渲染套票圖卡