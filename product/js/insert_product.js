/**
 *  servlet 프로젝트명 : product
 *  group_id : com.study
 *  artifact_id : product
 *  name : product
 *  jdk : 11
 *  dependencies
 *  1. lombok
 *  2. jsp
 *  3. Gson
 *  4. mysql
 * 
 *  package
 *  com.study.product
 *      config  -   DBConfig
 *      dao     -   ProductDao
 *      entity  -   Product
 *      filter  -   CommonFilter
 *      servlet 
 *              -   InsertProductServlet(/product, POST)
 *              -   SearchProductServlet(/products, GET)
 * 
 *  DB(db_study)
 *  table(product_tb)
 *  product_id, product_name(유니크 = 중복확인), product_price, product_sizq(SS, S, M, L , XL, XXL)
 */

async function handleAddClick() {
    const dataInputs = document.querySelectorAll(".product-inputs");

    const data = {
        productName: dataInputs[0].value,
        productPrice: parseInt(dataInputs[1].value), // parseInt를 해줘야 int
        productSize: dataInputs[2].value
    }

    const jsonData = JSON.stringify(data);

    const option = {
        method: "post",
        header: {
            "content-Type": "application/json"
        },
        body: jsonData
    }

    try {
        const response = await fetch("http://localhost:8080/product/product", option)

        if(!response.ok) {
            throw await response.json();
        }
        const responseData = await response.json();

        alert(`${responseData.successCount}건의 상품 추가 완료`);
    } catch (error) {
        alert(error?.errorMessage); // ?. = 참조할 수 없을때(null,undifind)
    }

}