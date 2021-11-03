# InLaneApi.PaymentOperationStatus

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**paymentStatus** | [**PaymentStatusEnum**](PaymentStatusEnum.md) |  | 
**depositCounting** | [**[CashCount]**](CashCount.md) | Deposit Countings | 
**depositTotal** | [**[CurrencyAmount]**](CurrencyAmount.md) | Deposit operation totals by currency | 
**dispenseCounting** | [**[CashCount]**](CashCount.md) | Dispense countings (if change has been dispensed) | 
**dispenseTotal** | [**[CurrencyAmount]**](CurrencyAmount.md) | Dispense operation totals by currency | 
**missingAmount** | [**CurrencyAmount**](CurrencyAmount.md) |  | 
**status** | [**OperationStatusEnum**](OperationStatusEnum.md) |  | 
**errorDescription** | [**ErrorCode**](ErrorCode.md) |  | 
