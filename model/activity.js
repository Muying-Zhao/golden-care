// import Http from "../utils/http"
// import Base from "./base"
// class Activity extends Base {
//   async getActivityList(tab) {
//     console.log(tab,'tab')
//     const ActivityList = await Http.request({
//       url: '/api/home/activity',
//       data: {
//         tab: tab || ''
//       },
//     })
//     // console.log("ActivityList", ActivityList)
//     return ActivityList
//   }

//   static getActivityById(id) {
//     // console.log(id,'id')
//     return Http.request({
//       url: `/api/activity/${id}`
//     })
//   }
  
//   async getMyActivityList(tab) {
//     console.log(tab,'tab')
//     const MyActivityList = await Http.request({
//       url: '/api/my_activity',
//       data: {
//         tab: tab || ''
//       },
//     })
//     // console.log("MyActivityList", MyActivityList)
//     return MyActivityList
//   }

//   async getApplyActivityList(tab) {
//     const ApplyActivityList = await Http.request({
//       url: '/api/apply/activity',
//       data: {
//         tab: tab || ''
//       },
//     })
//     return ApplyActivityList
//   }
// }
// export default Activity