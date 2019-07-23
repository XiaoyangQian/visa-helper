const consulates = {
  '中国': ['北京', '上海', '广州', '成都', '武汉', '沈阳'],
  '日本': ['东京', '大阪', '札幌', '名古屋'],
  '英国': ['伦敦', '爱丁堡', 'Belfast', 'Cardiff', 'Hamilton'],
  '加拿大': ['温哥华', '蒙特利尔', '多伦多'],
  '墨西哥': ['墨西哥城', 'Monterrey']
}
Page({
  data: {
    show: {
      consulatePopup: false,
      interviewDatePopup: false,
      visaCategoryPopup: false
    },
    minDate: new Date().setFullYear(new Date().getFullYear() - 2),
    maxDate: new Date().getTime(),
    visaCategories: ['H1B', 'F1', 'J1', 'B1', 'B2'],
    consulateLocations: [
      {
        values: Object.keys(consulates),
        className: 'country'
      },
      {
        values: consulates['中国'],
        className: 'consulate',
        defaultIndex: 2
      }
    ],
    formatter(type, value) {
      if (type === 'year') {
        return `${value}年`;
      } else if (type === 'month') {
        return `${value}月`;
      }
      return value;
    }
  },
  toggle(type) {
    this.setData({
      [`show.${type}`]: !this.data.show[type]
    });
  },
  toggleInterviewDatePopup() {
    this.toggle('interviewDatePopup');
  },
  toggleConsulatePopup() {
    this.toggle('consulatePopup');
  },
  toggleVisaCategoryPopup() {
    this.toggle('visaCategoryPopup');
  },
  onVisaCategoryChange(event) {
    this.setData({
      selectedVisaCategory: event.detail
    })
    console.log(this.data.selectedVisaCategory)
  },
  onConsulateLocationChange(event) {
    const { picker, value, index } = event.detail;
    picker.setColumnValues(1, consulates[value[0]]);
    console.log(this.data.selectedConsulate)
  },
  onDateTimePickerInput(event) {
    this.setData({
      selectedDate: event.detail
    });
  },

  onInterviewDateConfirm(event) {
    var entered_results = {
      "interview_date": this.data.selectedDate,
    }
    var survey_results = wx.getStorageSync('survey_data') || []
    survey_results.unshift(entered_results)
    wx.setStorageSync('survey_data', survey_results)
    this.setData({
      [`show.interviewDatePopup`]: false
      })
  },
  onInterviewDateCancel(event) {
    this.setData({
      [`show.interviewDatePopup`]: false
    })  
  },
  onVisaCategoryConfirm(event) {
    this.setData({
      [`show.visaCategoryPopup`]: false
    })
  },
  onVisaCategoryCancel(event) {
    this.setData({
      [`show.visaCategoryPopup`]: false
    })
  },
  onConsulateConfirm(event) {
    this.setData({
      [`show.consulatePopup`]: false
    })
  },  
  onConsulateCancel(event) {
    this.setData({
      [`show.consulatePopup`]: false
    })
  }
});

