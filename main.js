
const html = items.results.map(item =>{
    return `
    
    <div class="products">
     <ul class="productlist">
        <li class="specific" id="evenmore">
        <div id="fullheart">
        <img src="${item.Images[0].url_fullxfull}"/>
        <div id="heart">
                    <a href="#" class="hearta"><i class="fa fa-heart"></i></a>
                </div>
        </div>
            <h3>${item.title}</h3>
                <div class="descr">   
                    <p>Views: ${item.views}</p>
                    <p class="price">&dollar;${item.price}</p>
                </div>
            </li>
        </ul>
    </div> 
    `
}).join('')
document.querySelector("#allproducts").innerHTML = html


