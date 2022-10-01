class Phone{
    constructor(name,color,price,image) {
        this._name=name;
        this._color=color;
        this._price=price;
        this._image=image;
    }
    get name() {
        return this._name
    }set name(value) {
         this._name =value
    }get color() {
        return this._color
    }set color(value) {
        this._color=value;
    }
    get price() {
        return this._price;
    }
    set price(value) {
        this._price = value;
    }
    get image() {
        return this._image;
    }
    set image(value) {
        this._image = value;
    }
}
function buy(){
    if(confirm("BẠN  MUỐN THÊM HÀNG VÀO GIỎ CỦA  MÌNH ?")){
        alert("Thêm Thành công vào giỏ")
    }}