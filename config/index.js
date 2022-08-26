export const config = {
    // 公众号配置
    // 公众号appId
    appId: "wx167517ff4453d20c",
    // 公众号appSecret
    appSecret: "8c90e7506564342f13561d201897fae7",
    // 模板消息id
    templateId: "c9zHKtJ3BrNmBINWdBWiVg8BUAJQ4MW2y1UCj7A9CJk",
    // 接收公众号消息的微信号，如果有多个，需要在[]里用英文逗号间隔，例如["wx1", "wx2"]
    user: ["od_A16tmSxdpeJlfTD5RHI64A8dQ"],
     
    // 信息配置
    // 所在省份
    province: "山东",
    // 所在城市
    city: "济南",
    // 生日，修改名字为对应需要显示的名字，如果生日为农历， type为 r
    birthdays: [
      {"name": "老婆", "year": "1999", "date": "08-30", "type": 'new'},
    ],
    // 在一起的日子，格式同上
    loveDate: "2017-06-08",
    // 结婚纪念日
    marryDate: "2022-08-29"
    }

// {{date.DATA}}  
// 城市：{{city.DATA}}  
// 天气：{{weather.DATA}}  
// 最低气温: {{min_temperature.DATA}}  
// 最高气温: {{max_temperature.DATA}}  
// 今天是我们恋爱的第{{love_day.DATA}}天
// 今天是你正式工作的的第{{marry_day.DATA}}天
// {{birthday_message.DATA}}

// {{note_en.DATA}}  
// {{note_ch.DATA}}
