# React ik-select-wealth-health Documentation

## Overview

The **Select** component is a customizable dropdown menu built for React applications. It provides a clean and user-friendly interface for selecting options from a list.

## Installation

To use the **Select** component in your React project, you can install it via npm:

```bash
npm install ik-select-wealth-health
```

## Usage

Import the **Select** component into your React file:

```jsx
import { Select } from 'ik-select-wealth-health'
```

### Props

The **Select** component accepts the following props:

- `options` (Array of Strings): An array of strings representing the available options in the dropdown.
- `setState` (Function): A state-setting function to update the selected option in the parent component.
- `selectedOption` (String): The currently selected option.

### Example

```jsx
import React, { useState } from 'react'
import { Select } from 'ik-select-wealth-health'

const MyComponent = () => {
  const [selectedValue, setSelectedValue] = useState('Default')

  const handleStateChange = (value) => {
    setSelectedValue(value)
  }

  const options = ['Option 1', 'Option 2', 'Option 3']

  return (
    <div>
      <h1>Select Component Example</h1>
      <Select options={options} setState={handleStateChange} selectedOption={selectedValue} />
    </div>
  )
}
```

## Behavior

- Clicking on the dropdown header toggles the visibility of the options.
- Clicking on an option sets it as the selected value and closes the dropdown.
- Pressing the 'Escape' key closes the dropdown.
- Clicking outside the dropdown also closes it.

## Dependencies

The **Select** component relies on the following external libraries:

- React
- React Icons (specifically, `FaAngleDown` and `FaAngleUp` from 'react-icons/fa6')
- React styled-components (`npm install styled-components`)

`Ensure these dependencies are installed in your project.`

## Conclusion

The **Select** component simplifies the process of creating a dropdown menu in your React application. It is highly customizable and easy to integrate into your existing project. If you have any questions or issues, feel free to check the [GitHub repository](https://github.com/iKnorr/ik-select-wealth-health) for more information.

---

```

```
