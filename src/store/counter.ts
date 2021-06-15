import {action, observable} from 'mobx'
import phone from "../utils/phone";

class GlobalStore{

  @observable
  idArr:any=[]
  @observable
  nameArr:any=[]
  @observable
  tagNameArr:any=[]
  @observable
  tagCompanyArr:any=[]
  @observable
  purchesMoneyArr:any=[]
  @observable
  phoneArr:any=[]

  @action.bound
  setPhone=()=>{
    this.phoneArr.push(phone.dataList[0])
    this.phoneArr.push(phone.dataList[1])
    this.phoneArr.push(phone.dataList[2])
    this.phoneArr.push(phone.dataList[3])
    this.phoneArr.push(phone.dataList[4])
    this.phoneArr.push(phone.dataList[5])

  }

  @action.bound
  emptyPhone=()=>{
    this.phoneArr=[]
  }

  @observable
  infoArr=[
    'id',
    'name',
    '手机名字',
    '公司名字',
    '购买价格',
    '购买价格',
    'name',
    '手机名字',
    '公司名字',
    'name',
    '手机名字',
    '公司名字',
    'name',
    '手机名字',
    '公司名字',
    'name',
    '手机名字',
    '公司名字',
  ]


}
export default new GlobalStore()
