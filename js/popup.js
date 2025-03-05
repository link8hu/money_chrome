let isHidden = true;
let settings = {};

document.addEventListener('DOMContentLoaded', function() {
  // 加载设置
  chrome.storage.sync.get({
    monthlySalary: 10000,
    workDaysPerMonth: 22,
    startTime: '09:00',
    endTime: '18:00',
    defaultHideAmount: true
  }, function(items) {
    settings = items;
    isHidden = items.defaultHideAmount;
    updateDisplay();
    startTimer();
  });

  // 绑定事件
  document.getElementById('toggleBtn').addEventListener('click', function() {
    isHidden = !isHidden;
    updateDisplay();
  });

  document.getElementById('settingsBtn').addEventListener('click', function() {
    chrome.runtime.openOptionsPage();
  });
});

function calculateEarnings() {
  const now = new Date();
  const [startHour, startMinute] = settings.startTime.split(':').map(Number);
  const [endHour, endMinute] = settings.endTime.split(':').map(Number);
  
  const workStart = new Date(now);
  workStart.setHours(startHour, startMinute, 0);
  
  const workEnd = new Date(now);
  workEnd.setHours(endHour, endMinute, 0);
  
  const totalMinutes = (workEnd - workStart) / 60000;
  const workedMinutes = Math.max(0, Math.min(totalMinutes, (now - workStart) / 60000));
  
  const dailySalary = settings.monthlySalary / settings.workDaysPerMonth;
  const earnedSalary = dailySalary * (workedMinutes / totalMinutes);
  const progress = (workedMinutes / totalMinutes) * 100;

  return {
    daily: dailySalary,
    earned: earnedSalary,
    progress: Math.min(100, Math.max(0, progress))
  };
}

function updateDisplay() {
  const earnings = calculateEarnings();
  const format = num => num.toFixed(2);
  
  document.getElementById('dailySalary').textContent = isHidden ? '****' : format(earnings.daily);
  document.getElementById('earnedSalary').textContent = isHidden ? '****' : format(earnings.earned);
  document.getElementById('progressPercent').textContent = format(earnings.progress);
  document.getElementById('progressBar').style.width = `${earnings.progress}%`;
  
  document.getElementById('workStartTime').textContent = settings.startTime;
  document.getElementById('workEndTime').textContent = settings.endTime;
}

function startTimer() {
  setInterval(updateDisplay, 1000);
}