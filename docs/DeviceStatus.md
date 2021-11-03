# InLaneApi.DeviceStatus

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**globalStatus** | [**DeviceGlobalStatusEnum**](DeviceGlobalStatusEnum.md) |  | 
**errorCode** | **Number** | Main Error Code  * &#x60;0&#x60; - No error  * &#x60;10&#x60; - Machine busy  * &#x60;13&#x60; - The device is blocked  * &#x60;15&#x60; - The command failed  * &#x60;18&#x60; - Not allowed command  * &#x60;49&#x60; - Cover in a wrong position  * &#x60;120&#x60; - Machine not ready  * &#x60;121&#x60; - Configuration error  * &#x60;9200&#x60; - Device offline  * &#x60;9302&#x60; - Only service allowed  * &#x60;9999&#x60; - Unknown end result | 
**blockingError** | **Boolean** | Blocking Error | 
**inspectionRequired** | **Boolean** | Inspection required - it is mandatory to inspect the area of the module with status KO (opening the cover) | 
**banknotesModuleStatus** | [**ModuleStatus**](ModuleStatus.md) |  | 
**coinsModuleStatus** | [**ModuleStatus**](ModuleStatus.md) |  | 
**safeDoors** | [**[DoorStatus]**](DoorStatus.md) | Safe door/doors status | 
**stocksStatus** | [**[StockStatus]**](StockStatus.md) | Stocks status | 
