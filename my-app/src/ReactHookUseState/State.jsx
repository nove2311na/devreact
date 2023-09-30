// Chương 1:

// 1. component: chia nhỏ ui + tái sử dụng
// 2. {} được sử dụng để nhúng mã JavaScript vào trong markup JSX; cách dùng của "",'',``
// 3. prop: dùng props, truyền props, pass props from parent to children components
// 4. 2 cách viết style trong react: inline và tách file + dùng class để css
// 5. rendering list:
// - api trả về data là mảng với nhiều object (mỗi object chứa nhiều key và các data value tương ứng)
// - import data dùng kiến thức về map, dùng map để lấy data ra dùng
// - call back trong map: định nghĩa bạn làm gì với array gốc để tạo ra array mới
// - set key = {item.id} và setup các prop={item.prop}
// - data không có --> default: sử dụng toán tử hoặc "||"
// 6. props children (props.children): dùng để truyền các component con vào component cha

// state: thông tin được lưu bên trong component --> khối dữ liệu component duy trì và quản lý --> Khi state của một component thay đổi, React sẽ tự động cập nhật lại giao diện người dùng (UI) của component đó để phản ánh sự thay đổi
// stateless component: component không có state
// stateful component: component có state
// useState: hook dùng để quản lý state trong functional component
// array déstructuring: cú pháp giúp lấy giá trị của phần tử trong mảng ra một cách nhanh chóng và tiện lợi --> const [a, b] = [1, 2] --> a = 1, b = 2 --> const [on, setOn] = useState(true) --> on = true, setOn = function dùng để cập nhật lại giá trị của state

// 1. enabling state in functional component with useState hook: useState(...)

// 2. initial state: giá trị khởi tạo của state: useState(initialState)
// initial value: boolean, number, string, array, object, null, undefined, ... {name: 'John', age: 18}

// 3. reading state: đọc giá trị của state: const [state, setState] = useState(initialState) --> state: giá trị của state, setState: function dùng để cập nhật lại giá trị của state

// 4. updating state: cập nhật lại giá trị của state: setState(newState) --> newState: giá trị mới của state

// hàm update state là hàm callback: hàm update state sẽ được gọi sau khi component được render lại
// handling events: xử lý sự kiện: onClick, onChange, onSubmit, ...
// hàm callback dùng khi xử lý sự kiện: hàm callback sẽ được gọi khi sự kiện xảy ra --> hàm callback được gọi cùng handling event

// truyền function khi onClick: onClick={function} --> function: hàm callback
// cách truyền arrow function khi onClick: onClick={() => {}} --> arrow function: hàm callback

// Nguyên tắc dùng Hook (useState):
// Viết ở trên cùng, không để trong function, loop, if, ...\
// Chỉ gọi ở root level của function component

// Stale state: state không cập nhật được --> cập nhật state bằng cách truyền vào một function


import React, {useState} from 'react'

function State() {
  // const array = useState(false)
  // console.log(array);
  // console.log(array[0]);
  // console.log(array[1]);
  
  // const arr = [1, 2, 3]
  // const [a, b, c] = arr
  // console.log(a, b, c);

  // useState: nhận vào một giá trị là giá trị khởi tạo của state, trả về một mảng gồm 2 phần tử (phần tử đầu tiên là giá trị của state, phần tử thứ 2 là một function dùng để cập nhật lại giá trị của  state) --> useState: function khởi tạo state và cập nhật lại giá trị của state đó
  const [on, setOn] = useState(true) 

  const handleClick = () => { 
    console.log('clicked'); 
    // 1.
    // setOn(!on)

    // 2.
    // setOn((on) => !on);

    // 3.
    function toggleOn(on) {
      return !on
    }
    setOn(toggleOn);
  }


  return (
    // <div className='State'>
    //   <p>Light {on? 'On' : 'Off'} </p> 
    //   <p>{on ? 'Light On' : 'Light Off'}</p>
    //   <button onClick={() => setOn(!on)}>Hi</button>
    // </div>

    <div className='State'>
      <p>Light {on? 'On' : 'Off'} </p> 
      <p>{on ? 'Light On' : 'Light Off'}</p>
      <button onClick={handleClick}>Hi</button>
    </div>
  )
}

export default State
