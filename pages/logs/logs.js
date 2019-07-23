//logs.js
const util = require('../../utils/util.js')

function get_consulate_date(survey_data) {
  return util.formatTime(survey_data['interview_date']);
}

Page({
  data: {
    logs: []
  },

  onLoad: function () {
    var survey_data = wx.getStorageSync('survey_data') || []
    var consulate_dates = survey_data.map(get_consulate_date)
    this.setData({
      logs : consulate_dates
    })
  }
})
