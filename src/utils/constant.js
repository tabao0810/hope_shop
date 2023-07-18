export const FormatPrice = (index) => {
    let x = index;
    return (x = x.toLocaleString("vi", {
        style: "currency",
        currency: "VND",
    }));
}
export const FormatOldPrice = (index, sale) => {
    let x = index - index * (sale / 100);
    return (x = x.toLocaleString("vi", {
        style: "currency",
        currency: "VND",
    }));
}