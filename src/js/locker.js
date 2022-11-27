import axios from 'axios';

const lockerStatusApi = "http://iotbase-gdaslocker.azurewebsites.net/webapi/system/example/box/status"
let lockersData = null

axios.get(lockerStatusApi)
  .then((response) => {
    // handle success
    const { data, statusText } = response
    console.log(statusText)
    lockersData = data
    console.log('lockersData: ', lockersData);
  })
  .catch((error) => {
    // handle error
    console.log(error);
  })
  .finally(() => {
    // always executed
  });