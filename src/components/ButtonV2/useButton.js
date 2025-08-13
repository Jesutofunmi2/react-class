import React, { useState } from 'react'

const useButton = () => {
const [value, setValue] = useState();
  
    return {
       value,
       setValue
    }
}

export default useButton;