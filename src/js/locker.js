// 套件
import axios from 'axios';
import $ from 'jquery';
// 樣式
import "../scss/locker.scss";

// api
const lockerStatusApi = "https://iotbase-gdaslocker.azurewebsites.net/webapi/system/example/box/status"
// 儲存api資料
let lockersData = null

// 使用axios套件向api取得資料
axios.get(lockerStatusApi)
  .then((response) => {
    // handle success
    const { data, statusText } = response
    if (statusText !== "OK") throw new Error()
    lockersData = data
    fetchLockerStatus()
  })
  .catch((error) => {
    // handle error
    console.log(error);
  })

// 根據api資料渲染畫面
function fetchLockerStatus() {
  // 全部智能櫃node
  const lockerBoxes = $(".locker-boxes")
  // 待替換的節點內容
  let LockerHTML = ''

  lockersData.Data.forEach(box => {
    if (box.status) {
      // status: 1 已使用
      LockerHTML += `
        <div class="locker-box border" data-id=${box.id} data-boxname=${box.boxname} data-status=${box.status}>已使用</div>
      `
    } else {
      // status: 0 請選擇
      LockerHTML += `
        <div class="locker-box border available" data-id=${box.id} data-boxname=${box.boxname} data-status=${box.status}>請選擇</div>
      `
    }
  })

  lockerBoxes.html(LockerHTML)
}