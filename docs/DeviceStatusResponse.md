# InLaneApi.DeviceStatusResponse

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**deviceStatus** | [**DeviceStatus**](DeviceStatus.md) |  | 
**operationsAvailability** | [**{String: OperationAvailabilityEnum}**](OperationAvailabilityEnum.md) | Operation availability | 
**resolutionGifURL** | **String** | Resolution Gif URL  In the case of a module error it can contain an url of a gif to be shown to help the user to solve the problem  There is NOT a gif for all the types of errors, so the field could be empty | 
