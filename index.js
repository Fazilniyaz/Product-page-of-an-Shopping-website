var productData = {
    id: "1",
    name: "Men Navy Blue Solid Sweatshirt",
    preview:
      "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/08a7b230-ee8f-46c0-a945-4e835a3c01c01541402833619-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-1.jpg",
    previewPhotos: [
      "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/08a7b230-ee8f-46c0-a945-4e835a3c01c01541402833619-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-1.jpg",
      "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/efc3d5b9-1bb3-4427-af53-7acae7af98951541402833591-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-2.jpg",
      "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/c7e58861-3431-4189-9903-9880f5eebd181541402833566-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-3.jpg",
      "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/66490b64-32de-44b4-a6e4-fe36f1c040051541402833548-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-4.jpg",
      "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/957be784-7c5d-4e90-ab9f-0928015b22891541402833645-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-5.jpg",
    ],
    description:
      "Navy solid sweatshirt with patchwork, has a round neck, long sleeves, straight hem",
    size: [1, 1, 0, 1, 0],
    isAccessory: false,
    brand: "United Colors of Benetton",
    price: 2599,
  };


  var image1 = document.querySelector(".image1")

  var img = document.createElement("img")
  img.src = productData.preview
  img.className = "frontimg"
  image1.appendChild(img)

  var div2 = document.querySelector(".others")
  var head = document.createElement("h2")
  head.innerText = productData.name
  head.className = "name"
  div2.appendChild(head)


  var brand = document.createElement("p")
  brand.innerText = productData.brand
  brand.className = "brand"
  div2.appendChild(brand)


  var price = document.createElement("p")
  price.innerText = "Rs." + productData.price
  price.className = "price"
  div2.appendChild(price)
  var description = document.createElement("p")
  description.innerText = productData.description
  description.className = "desc"
  div2.appendChild(description)

  var head2 = document.createElement("p")
  head2.innerText = "Product preview:"
  div2.appendChild(head2)

  var previmg = document.createElement("div")
  previmg.className = "previmg"
  div2.appendChild(previmg)

  id = ["one","two","three","four","five"]
  for(var i=0;i<5;i++){

    var pdiv = document.createElement("div")
    pdiv.className = "pdiv"

    var prim = document.createElement("img")
    prim.src = productData.previewPhotos[i]
    prim.className = "prims"
    pdiv.id = id[i]
    

    pdiv.appendChild(prim)
    previmg.appendChild(pdiv)

  }
var s = document.getElementById("one")
var s1 = document.getElementById("two")
var s2 = document.getElementById("three")
var s3 = document.getElementById("four")
var s4 = document.getElementById("five")



  s.addEventListener("click",function(){
    img.src =  productData.previewPhotos[0]
    // productData.previewPhotos[0] = image.src
})
s1.addEventListener("click",function(){
    img.src =  productData.previewPhotos[1]
    // productData.previewPhotos[1] = image.src

})
s2.addEventListener("click",function(){
    img.src =  productData.previewPhotos[2]
    // productData.previewPhotos[2] = image.src

})
s3.addEventListener("click",function(){
    img.src =  productData.previewPhotos[3]
    // productData.previewPhotos[3] = image.src

})
s4.addEventListener("click",function(){
    img.src =  productData.previewPhotos[4]
})


var button = document.createElement("button")
button.innerText = "Add to cart"
button.id = "button"
div2.appendChild(button)

