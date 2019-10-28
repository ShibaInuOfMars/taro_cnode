export default function (date) {
  if (!date) {
    return '';
  }

  let dvalue = parseInt(new Date().getTime()) - parseInt(new Date(date).getTime())

  let minTime = 60 * 1000
  let hourTime = 60 * minTime
  let dayTime = 24 * hourTime
  let monthTime = 30 * dayTime
  let yearTime = 12 * monthTime

  if (dvalue < minTime) {
    return '刚刚';
  } else if (dvalue >= minTime && dvalue < hourTime) {
    return parseInt(dvalue / minTime) + '分钟前'
  } else if (dvalue >= hourTime && dvalue < dayTime) {
    return parseInt(dvalue / hourTime) + '小时前'
  } else if (dvalue >= dayTime && dvalue < monthTime) {
    return parseInt(dvalue / dayTime) + '天前'
  } else if (dvalue >= monthTime && dvalue < yearTime) {
    return parseInt(dvalue / monthTime) + '月前'
  } else if (dvalue >= yearTime) {
    return parseInt(dvalue / yearTime) + '年前'
  }
}

/* 
export default (dateTimeStamp) => { // getDateDiff
  if (!dateTimeStamp) {
    return;
  }
  dateTimeStamp = new Date(dateTimeStamp).getTime();
  var minute = 1000 * 60;
  var hour = minute * 60;
  var day = hour * 24;
  //   var halfmonth = day * 15;
  var month = day * 30;
  var now = new Date().getTime();
  var diffValue = now - dateTimeStamp;
  if (diffValue < 0) {
    // alert('结束日期不能小于开始日期');
    return;
  }
  var monthC = diffValue / month;
  var weekC = diffValue / (7 * day);
  var dayC = diffValue / day;
  var hourC = diffValue / hour;
  var minC = diffValue / minute;
  // 7个显示阶段
  if (monthC > 12) { // 大于12个月显示年-月-日 时：分
    // console.log(getLocalTime(dateTimeStamp));
    // console.log(dateTimeStamp);
    return getLocalTime(dateTimeStamp);
  } else if (monthC >= 1) { // 一年以内显示 几个月前
    // console.log(parseInt(monthC) + '个月前');
    return parseInt(monthC) + '个月前';
  } else if (weekC >= 1) { // 几周前
    // console.log(parseInt(weekC) + '周前');
    return parseInt(weekC) + '周前';
  } else if (dayC >= 1) { // 几天前
    // console.log(parseInt(dayC) + '天前');
    return parseInt(dayC) + '天前';
  } else if (hourC >= 1) { // 几小时前
    // console.log(parseInt(hourC) + '个小时前');
    return parseInt(hourC) + '个小时前';
  } else if (minC >= 1) { // 几分钟前
    // console.log(parseInt(minC) + '分钟前');
    return parseInt(minC) + '分钟前';
  } else { // 刚刚
    // console.log('刚刚');
    return '刚刚';
  }
}
// 时间戳转化为日期格式
function getLocalTime(time) {
  var gnow = new Date(time);
  var gyear = gnow.getFullYear();
  var gmonth = gnow.getMonth() + 1;
  var gday = gnow.getDate();
  var ghour = gnow.getHours();
  var gminute = gnow.getMinutes();
  var gsecond = gnow.getSeconds();

  function addZera(i) { // 格式改为00
    if (i < 10 && i >= 0) {
      i = '0' + i;
    } else if (i < 0) {
      i = '00'
    }
    return i;
  }
  return gyear + "-" + addZera(gmonth) + "-" + addZera(gday) + " " + addZera(ghour) + ":" + addZera(gminute) + ":" + addZera(gsecond);
} */
