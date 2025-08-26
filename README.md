# capacitor-plugin-receipt-scanner

Receipt scanner - This is a Capacitor plugin that lets you scan receipts using Android and iOS.

## Install

```bash
npm install capacitor-plugin-receipt-scanner
npx cap sync
```

## API

<docgen-index>

* [`scan(...)`](#scan)
* [Interfaces](#interfaces)
* [Enums](#enums)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### scan(...)

```typescript
scan(options: ScanReceiptOptions) => Promise<ScanReceiptResponse>
```

| Param         | Type                                                              |
| ------------- | ----------------------------------------------------------------- |
| **`options`** | <code><a href="#scanreceiptoptions">ScanReceiptOptions</a></code> |

**Returns:** <code>Promise&lt;<a href="#scanreceiptresponse">ScanReceiptResponse</a>&gt;</code>

--------------------


### Interfaces


#### ScanReceiptResponse

| Prop              | Type                                                                            | Description                                                                                                                       |
| ----------------- | ------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| **`scannedFile`** | <code>string</code>                                                             | This is an array with either file path or base64 for the document scan.                                                           |
| **`status`**      | <code><a href="#scanreceiptresponsestatus">ScanReceiptResponseStatus</a></code> | The status lets you know if the document scan completes successfully, or if the user cancels before completing the document scan. |


#### ScanReceiptOptions

| Prop               | Type                                                  | Description                                                                                                       | Default                                   |
| ------------------ | ----------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------- |
| **`responseType`** | <code><a href="#responsetype">ResponseType</a></code> | The response comes back in this format on success. It can be the document scan image file paths or base64 images. | <code>: ResponseType.ImageFilePath</code> |


### Enums


#### ScanReceiptResponseStatus

| Members       | Value                  | Description                                                                                               |
| ------------- | ---------------------- | --------------------------------------------------------------------------------------------------------- |
| **`Success`** | <code>'success'</code> | The status comes back as success if the document scan completes successfully.                             |
| **`Cancel`**  | <code>'cancel'</code>  | The status comes back as cancel if the user closes out of the camera before completing the document scan. |


#### ResponseType

| Members             | Value                        | Description                                                                     |
| ------------------- | ---------------------------- | ------------------------------------------------------------------------------- |
| **`Base64`**        | <code>'base64'</code>        | Use this response type if you want document scan returned as base64 images.     |
| **`ImageFilePath`** | <code>'imageFilePath'</code> | Use this response type if you want document scan returned as inmage file paths. |

</docgen-api>
