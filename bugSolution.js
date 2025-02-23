```javascript
import React, { useState, useEffect } from 'react';
import isEqual from 'lodash.isequal'; // Or a custom deep comparison function

function MyComponent(props) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Correct: Use deep comparison
    if (!isEqual(props.data, prevProps.data)) {
      console.log('Data changed!');
    }
  }, [props.data]);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default MyComponent;
```