// 第一階段：請寫 printBmi 函式，並印出對應狀態

// printBmi(178, 20) >> 印出 console.log 文字為「您的體重過輕」
// printBmi(178, 70) >> 印出 console.log 文字為「您的體重正常」
// printBmi(178, 85)>> 印出 console.log 文字為「您的體重過重」
// printBmi(178, 90)>> 印出 console.log 文字為「您的體重輕度肥胖」
// printBmi(178, 110)>> 印出 console.log 文字為「您的體重中度肥胖」
// printBmi(178, 130)>> 印出 console.log 文字為「您的體重重度肥胖」
// printBmi("身高","體重")>> 印出 console.log 文字為「您的數值輸入錯誤，請重新輸入」

// 第一階段:
// function printBmi(height,weight){
//   let bmi = (weight/((height/100)**2)).toFixed(2)
//   if(bmi<18.5){
//     console.log("您的體重過輕")
//   }else if(18.5<=bmi && bmi<24){
//     console.log("您的體重正常")
//   }else if(24<=bmi && bmi<27){
//     console.log("您的體重過重")
//   }else if(27<=bmi && bmi<30){
//     console.log("您的體重輕度肥胖")
//   }else if(30<=bmi && bmi<35){
//     console.log("您的體重中度肥胖")
//   }else if(bmi>=35){
//     console.log("您的體重重度肥胖")
//   }else{
//     console.log("您的數值輸入錯誤，請重新輸入")
//   }
// }
// printBmi(178,20)
// printBmi(178,70)
// printBmi(178,85)
// printBmi(178,90)
// printBmi(178,110)
// printBmi(178,130)
// printBmi("身高","體重")

// 第二階段：請程式碼裡加入此變數，並嘗試運用此變數裡的資訊。

// printBmi(178, 20) >> 印出 console.log 文字為「您的體重過輕，健康指數為藍色」
// printBmi(178, 70) >> 印出 console.log 文字為「您的體重正常，健康指數為紅色」
// printBmi(178, 85)>> 印出 console.log 文字為「您的體重過重，健康指數為澄色」
// printBmi(178, 90)>> 印出 console.log 文字為「您的體重輕度肥胖，健康指數為黃色」
// printBmi(178, 110)>> 印出 console.log 文字為「您的體重中度肥胖，健康指數為黑色」
// printBmi(178, 130)>> 印出 console.log 文字為「您的體重重度肥胖，健康指數為綠色」
// printBmi("身高","體重")>> 印出 console.log 文字為「您的數值輸入錯誤，請重新輸入」

// 第二階段:
// const bmiData = {
//   underWeight: {
//     status: "過輕",
//     color: "藍色"
//   },
//   standardWeight: {
//     status: "正常",
//     color: "紅色"
//   },
//   overWeight: {
//     status: "過重",
//     color: "澄色"
//   },
//   mildObesity: {
//     status: "輕度肥胖",
//     color: "黃色"
//   },
//   moderateObesity : {
//     status: "中度肥胖",
//     color: "黑色"
//   },
//   severeObesity: {
//     status: "重度肥胖",
//     color: "綠色"
//   }
// }

// function bmiText(state){
//   console.log(`您的體重${bmiData[state].status}，健康指數為${bmiData[state].color}`)
// }
// function printBmi(height,weight){
//   let bmi = (weight/((height/100)**2)).toFixed(2)
//   if(bmi<18.5){
//     bmiText("underWeight")
//   }else if(18.5<=bmi && bmi<24){
//     bmiText("standardWeight")
//   }else if(24<=bmi && bmi<27){
//     bmiText("overWeight")
//   }else if(27<=bmi && bmi<30){
//     bmiText("mildObesity")
//   }else if(30<=bmi && bmi<35){
//     bmiText("moderateObesity")
//   }else if(bmi>=35){
//     bmiText("severeObesity")
//   }else{
//     console.log("您的數值輸入錯誤，請重新輸入")
//   }
// }
// printBmi(178,20)
// printBmi(178,70)
// printBmi(178,85)
// printBmi(178,90)
// printBmi(178,110)
// printBmi(178,130)
// printBmi("身高","體重")

// 第三階段：儲存每筆計算資料，多一個變數為 bmiHistoryData，並賦予空陣列來儲存計算物件資料，若數值輸入錯誤，則不儲存。

// printBmi(178, 20) >> 印出 console.log 文字為「您的體重過輕，健康指數為藍色」
// printBmi(178, 70) >> 印出 console.log 文字為「您的體重正常，健康指數為紅色」
// printBmi(178, 85)>> 印出 console.log 文字為「您的體重過重，健康指數為澄色」
// showHistoryData() >> 印出 console.log 文字為「您總共計算 3 次 BMI 紀錄，最後一次 BMI 指數為 26.83，體重過重！健康指數為澄色！」

第三階段:
let bmiHistoryData = [];

const bmiData = {
  underWeight: {
    status: "過輕",
    color: "藍色"
  },
  standardWeight: {
    status: "正常",
    color: "紅色"
  },
  overWeight: {
    status: "過重",
    color: "澄色"
  },
  mildObesity: {
    status: "輕度肥胖",
    color: "黃色"
  },
  moderateObesity : {
    status: "中度肥胖",
    color: "黑色"
  },
  severeObesity: {
    status: "重度肥胖",
    color: "綠色"
  }
}

function addData(bmi,state){
  let obj = {};
  obj.bmi = bmi;
  obj.state = state;
  bmiHistoryData.push(obj)
}

function bmiText(state){
  console.log(`您的體重${bmiData[state].status}，健康指數為${bmiData[state].color}`)
}
function printBmi(height,weight){
  let bmi = (weight/((height/100)**2)).toFixed(2)
  if(bmi<18.5){
    bmiText("underWeight");
    addData(bmi,"underWeight")
  }else if(18.5<=bmi && bmi<24){
    bmiText("standardWeight");
    addData(bmi,"standardWeight")
  }else if(24<=bmi && bmi<27){
    bmiText("overWeight");
    addData(bmi,"overWeight")
  }else if(27<=bmi && bmi<30){
    bmiText("mildObesity");
    addData(bmi,"mildObesity")
  }else if(30<=bmi && bmi<35){
    bmiText("moderateObesity");
    addData(bmi,"moderateObesity")
  }else if(bmi>=35){
    bmiText("severeObesity");
    addData(bmi,"severeObesity")
  }else{
    console.log("您的數值輸入錯誤，請重新輸入")
  }
}

function showHistoryData(){
  let dataNum = bmiHistoryData.length;
  let lastData = dataNum - 1;
  let lastState = bmiHistoryData[lastData]
  // console.log(lastState)
  console.log(`您總共計算${dataNum}次 BMI 紀錄，最後一次 BMI 指數為 ${lastState.bmi}，體重${bmiData[lastState.state].status}！健康指數為${bmiData[lastState.state].color}！`)
}

printBmi(178,20)
printBmi(178,70)
printBmi(178,85)
// console.log( bmiHistoryData)
showHistoryData()