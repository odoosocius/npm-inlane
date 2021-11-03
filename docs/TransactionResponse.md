# InLaneApi.TransactionResponse

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | Transaction ID | [optional] 
**timestamp** | **Date** | Transaction end timestamp | [optional] 
**username** | **String** | Username who has executed the transaction | [optional] 
**type** | [**TransactionTypeEnum**](TransactionTypeEnum.md) |  | [optional] 
**countings** | [**TransactionCountings**](TransactionCountings.md) |  | [optional] 
**totals** | [**[TransactionTotals]**](TransactionTotals.md) | Totals of what has been moved during the operation | [optional] 
**transactionReference** | **String** | Transaction reference | [optional] 
