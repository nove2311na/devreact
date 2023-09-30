export function CalculateWinner(cells){
    // Tạo ra 1 mảng chứa các vị trí thắng
    const lines = [
        [0,1,2], // hàng 1
        [3,4,5], // hàng 2
        [6,7,8], // hàng 3
        [0,3,6], // cột 1
        [1,4,7], // cột 2
        [2,5,8], // cột 3
        [0,4,8], // đường chéo 1
        [2,4,6] // đường chéo 2
    ];
    
    // Chủ yếu dùng destructure để lấy ra các giá trị a,b,c xét điều kiện

    for (let index = 0; index < lines.length; index++) {
        // mảng = mảng[index]
        const [a,b,c] = lines[index];
        // Nếu cells[a] có giá trị và cells[a] === cells[b] và cells[a] === cells[c] thì trả về cells[a]
        if(cells[a] && cells[a] === cells[b] && cells[a] === cells[c]){
            return cells[a];
        }
    }
    return null;
}