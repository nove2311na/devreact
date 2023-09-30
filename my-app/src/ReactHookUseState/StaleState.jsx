import React, {useState} from 'react'

// stale state: state không cập nhật được --> cập nhật state bằng cách truyền vào một function
// closure: function bên trong có thể truy cập được biến bên ngoài
// closure và stale state: stale state là trạng thái không được cập nhật kịp thời, closure là function bên trong có thể truy cập được biến bên ngoài --> stale state và closure có liên quan đến nhau
// handleClick sử dụng một closure để truy cập biến count nằm trong phạm vi của Counter. Khi bạn click vào nút, một timeout được thiết lập, và sau đó giá trị của count được sử dụng. Tuy nhiên, khi bạn click vào nút, giá trị của count đã thay đổi. Điều này có nghĩa là khi timeout được thiết lập, giá trị của count không phải là giá trị mới nhất. Đây là một ví dụ về stale state.P

function StaleState() {
  const [count, setCount] = useState(0);
  const handleIncreasment = () => {
    // setCount(count + 1);
    // console.log('count: ', count);
    setTimeout (() => {
      // functional update. Functional updates cho phép bạn cập nhật state dựa trên giá trị trước đó của state, chứ không phải dựa trên giá trị hiện tại. Điều này có thể giúp tránh vấn đề stale state (trạng thái không được cập nhật kịp thời) trong một số trường hợp. 
      setCount((count) => count + 1);
      console.log('count: ', count);
    }, 1000)
  }

  return (
    <div onClick={handleIncreasment}>
      Up
    </div>
  )
}

export default StaleState
