document.addEventListener('DOMContentLoaded', function() {
  // 恢复设置
  chrome.storage.sync.get({
    monthlySalary: 10000,
    workDaysPerMonth: 22,
    startTime: '09:00',
    endTime: '18:00',
    defaultHideAmount: true
  }, function(items) {
    document.getElementById('monthlySalary').value = items.monthlySalary;
    document.getElementById('workDaysPerMonth').value = items.workDaysPerMonth;
    document.getElementById('startTime').value = items.startTime;
    document.getElementById('endTime').value = items.endTime;
    document.getElementById('defaultHideAmount').checked = items.defaultHideAmount;
  });

  // 保存设置
  document.getElementById('saveBtn').addEventListener('click', function() {
    const settings = {
      monthlySalary: document.getElementById('monthlySalary').value,
      workDaysPerMonth: document.getElementById('workDaysPerMonth').value,
      startTime: document.getElementById('startTime').value,
      endTime: document.getElementById('endTime').value,
      defaultHideAmount: document.getElementById('defaultHideAmount').checked
    };

    chrome.storage.sync.set(settings, function() {
      const status = document.getElementById('status');
      status.textContent = '设置已保存';
      status.style.display = 'block';
      setTimeout(() => status.style.display = 'none', 1500);
    });
  });
});