
const html = items.results.map(item =>{
    return `
    
    <div class="products">
        <a href="${item.url}" target="_blank">
        <ul class="productlist">
        <li class="specific" id="evenmore">
        <div id="fullheart">
        <img class="javaimg"src="${item.Images[0].url_fullxfull}"/>
        <div id="heart">
                    <a href="#" class="hearta"><i class="fa fa-heart"></i></a>
                </div>
        </div>
        <a href="${item.url}" target="_blank">
                <h3>${item.title}</h3>
                    <div class="descr">   
                        <p>Views: ${item.views}</p>
                        <div class="rating">
                        <div class="rate"></div> 
                        </div>
                        <p class="price">&dollar;${item.price}</p>
                    </div>
                </li>
                </a>
            </a>
        </ul>
    </div> 
    `
}).join('')
document.querySelector("#allproducts").innerHTML = html



