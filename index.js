let arr = [
    {
      img_src:
        "file:///C:/Users/LENOVO/Desktop/29327f40e9c4d26b.webp",
      title: "Grocery",
    },
    {
      img_src:
        "file:///C:/Users/LENOVO/Desktop/22fddf3c7da4c4f4.webp",
      title: "Mobiles",
    },
    {
      img_src:
        "file:///C:/Users/LENOVO/Desktop/0d75b34f7d8fbcb3.webp",
      title: "Fashion",
      href:'Product.html'
    },
    ,
    {
      img_src:
        "file:///C:/Users/LENOVO/Desktop/69c6589653afdb9a.webp",
      title: "Electronics",
    },
    ,
    {
      img_src:
        "file:///C:/Users/LENOVO/Desktop/ab7e2b022a4587dd.webp",
      title: "Home and Furtinure",
    },
    {
      img_src:
        "file:///C:/Users/LENOVO/Downloads/69c6589653afdb9a.webp",
      title: "Appliances",
    },
    {
      img_src:
        "file:///C:/Users/LENOVO/Desktop/71050627a56b4693.webp",
      title: "Travel",
    },
    {
      img_src:
        "",
      title: "Beauty,Toys and More",
      href: "file:///C:/Users/LENOVO/Downloads/dff3f7adcf3a90c6.webp",
    },
    {
      img_src:
        "",
      title: "Two Wheelers",
      href: "file:///C:/Users/LENOVO/Desktop/05d708653beff580.webp",
    },
  ];

//  let arr = [1,2,3,4,5];
// for(let i=0; i<arr.length;i++){
//     console.log(arr[i]);
// }

arr.map((element)=>{
  let image = document.createElement('img');
  image.src = element.img_src;
  
  let title = document.createElement("p");
  title.innerHTML = element.title;
 
  let box = document.createElement('div');
  
  box.append(image,title);
  
 document.getElementById("categories").append(box);

})




let a = document.getElementById("categories");