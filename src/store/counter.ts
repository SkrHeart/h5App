import {action, observable} from 'mobx'
import phone from "../utils/phone";

class GlobalStore{

  @observable
  phoneArr:any=[]

  @action.bound
  setPhone=(list,i)=>{
    this.phoneArr.push(phone[list][i])
  }

  @action.bound
  deletePhone=(index)=>{
    if (index < 1){
      return
    }
    this.phoneArr.splice(index,1)

  }

  @action.bound
  emptyPhone=()=>{
    this.phoneArr=[]
  }

  @observable
  select=["name","createTime","purchesMoney","appearance", "color", "type", "phoneSize", "weight", "screenSize", "screenMaterial", "screenBit", "screenResolution", "pixelDensity", "screenFeatures", "operator", "card", "wifi", "bluetooth", "system", "cpuType", "cpuProcess", "runMemory", "storageCapacity", "rearCamera", "frontCamera", "zoom", "videoCapture", "camera", "sensor", "function", "usbInterface", "headset", "packing"]



}
export default new GlobalStore()
