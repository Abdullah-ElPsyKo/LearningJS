function sortByPriceAscending(str){
    var products = JSON.parse(str);

    products.sort((a,b) => {
        if (a.price > b.price) {
            return 1;
        } 
        else if (a.price < b.price){
            return -1
        }
        else{
            if (a.name > b.name) {
                return 1;
            }
            else if (a.name < b.name) {
                return -1;
            }
            else{
                return 0;
            }
        }
    });
    return JSON.stringify(products);
}







console.log(sortByPriceAscending(' [{"name":"eggs","price":1},{"name":"coffee","price":9.99},{"name":"rice","price":4.04},{"name":"abc","price":4.04} ]'));