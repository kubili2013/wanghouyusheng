// 这是一个能将嵌套文件夹下图片信息转化为 json 脚本，供我使用！

var fs = require('fs');//引用文件系统模块
var image = require("imageinfo"); //引用imageinfo模块

function readFileList(path, filesList) {
  var files = fs.readdirSync(path);
  files.forEach(function (itm, index) {
    var stat = fs.statSync(path + itm);
    if (stat.isDirectory()) {
      //递归读取文件
      readFileList(path + itm + "/", filesList)
    } else {
      var obj = {};//定义一个对象存放文件的路径和名字
      obj.src = path  + itm;//路径
      
      // obj.filename = itm//名字
      
      var ms = image(fs.readFileSync(path + itm));
      // ms.mimeType && (imageList.push(item.filename));
      obj.w = ms.width;
      obj.h = ms.height;
      filesList.push(obj);
    }
  })
}
var list = [];
readFileList("./public/images/",list);
console.log(list);
fs.writeFile( './images.json', JSON.stringify(list, null, 4), function (err) {
    if (err) {
        console.log(err)
    } else {
        console.log("tupian")
    }
})