# grpc-error-messages
A collection of grpc error classes with default human-readable messages

## Install:
```
npm install grpc-error-messages
```

## Usage:
```javascript
import { UnimplementedError } from 'grpc-error-messages';

function raiseError() {
  throw new UnimplementedError();
}
```

The above error will result in:
```json
{
  "code": 12,
  "message": "The operation is not implemented.",
  "details": []
}
```
