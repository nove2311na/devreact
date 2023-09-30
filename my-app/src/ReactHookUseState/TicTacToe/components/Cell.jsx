import React from 'react'

// const props = {
//   value: 'x',
//   onClick: () => true
// }

// Truyền props vào component Cell tạo ra 1 ô vuông có nội dung value của props và có sự kiện onClick
function Cell({value, onClick}) {
  // destructuring từ params (không cần props.) hoặc props (cần props.)
  // const {value, onClick} = props;
  return (
    <div className='game-cell' onClick={onClick}>
      {value}
    </div>
  )
}

export default Cell
