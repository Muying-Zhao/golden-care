// 基类
class Base{
  // 将数据初始化
  reset(){
    this.page=1
    this.count=4
    this.data=[]
    this.hasMoreData=true
    return this
  }
}

export default Base