## JSX In Depth
Syntactic sugar for React.createElement(component, props, ...children)

```javascript
<MyButton color="blue" shadowSize={2}>
  Click Me
</MyButton>
```

```javascript
React.createElement(
  MyButton,
  {color: 'blue', shadowSize: 2},
  'Click Me'
)
```

### Specifying The React Element Type
1. React Must Be in Scope
  * Since JSX compiles into calls to React.createElement, the React library must also always be in scope from your JSX code

2. Using Dot Notation for JSX Type
```javascript
import React from 'react';

const MyComponents = {
  DatePicker: function DatePicker(props) {
    return <div>Imagine a {props.color} datepicker here.</div>;
  }
}

function BlueDatePicker() {
  return <MyComponents.DatePicker color="blue" />;
}
```

3. User-Defined Components Must Be Capitalized
  * When an element type starts with a lowercase letter, it refers to a built-in component like <div> or <span>

### Props in JSX
There are several different ways to specify props in JSX

#### JavaScript Expressions as Props
```javascript
<MyComponent foo={1 + 2 + 3 + 4} />
```

1. For MyComponent, the value of props.foo will be 10
#### String Literals
```javascript
<MyComponent message="hello world" />
<MyComponent message={'hello world'} />
```

#### Props Default to "True"

#### Spread Attributes
  * If you already have props as an object, and you want to pass it in JSX, you can use ... as a "spread" operator to pass the whole props object. These two components are equivalent.

### Children in JSX
In JSX, expressions that contain both an opening tag and a closing tag, the content between those tags is passed as a special prop: props.children

#### String Literals
```javascript
<MyComponent>Hello world!</MyComponent>
```

#### JSX Children
  * You can provide more JSX elements as the children
  * A React component can't return multiple React elements, but a single JSX expression can have multiple children

#### JavaScript Expressions as Children
JS expressions can be passed as children by enclosing it within {}

#### Functions as Children
Normally, JS expressions inserted in JSX will evaluate to a string, a React element, or a list of those things
  * If you have a custom component, you could have it take a callback as props.children

  ```javascript
  // Calls the children callback numTimes to produce a repeated component
function Repeat(props) {
  let items = [];
  for (let i = 0; i < props.numTimes; i++) {
    items.push(props.children(i));
  }
  return <div>{items}</div>;
}

function ListOfTenThings() {
  return (
    <Repeat numTimes={10}>
      {(index) => <div key={index}>This is item {index} in the list</div>}
    </Repeat>
  );
}
  ```

#### Booleans, Null, and Undefined Are Ignored
  * false, null, undefined, and true are valid children
  * can be useful to conditionally render React elements
  ```html
  <div>
    {showHeader && <Header />}
    <Content />
  </div>
  ```
  * if you want a value like false, true, null, or undefined to appear in the output, you have to convert it to a string first
