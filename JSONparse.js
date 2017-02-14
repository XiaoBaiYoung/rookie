 function parseJson(json) {
   debugger
   /**
    * onOff作为一个开关，判定“”内的字符
    * 将“”外的字符去除空格，tab，换行等
    */
   var onOff = true
   var jsonString = ''
   for (var i = 0; i < json.length; i++) {
     if (json[i] == '"') {
       onOff = ((onOff == true) ? false : true)
     }
     if ((onOff == true) && (json[i] == ' ' || json[i] == '\n' || json[i] == '\r' || json[i] == '\t')) {
       continue
     }
     jsonString += json[i]
   }
   index = 0
   return parse()


   /**根据字符串的第一个字符来判断它的类型
    * 然后进入到相应的函数中
    */

   function parse() {
     var indexChar = jsonString[index]
     if (indexChar == '{') {
       return parseObject()
     }
     if (indexChar == '[') {
       return parseArray()
     }
     if (indexChar == '"') {
       return parseString()
     }
     if (indexChar == 't') {
       return parseTrue()
     }
     if (indexChar == 'f') {
       return parseFalse()
     }
     if (indexChar == 'n') {
       return parseNull()
     }
     if (isDigit(indexChar)) {
       return parseNumber()
     }
   }
   /**
    * 给定一个空对象，以及属性名和属性值
    * 循环原先字符串
    * 字符串判定为属性名
    * 后面的判定为属性值
    */
   function parseObject() {
     var result = {}
     var key
     var value
     index++
     for (var n = index; n <= jsonString.length; n++) {
       key = parseString()
       index++
       value = parse()
       result[key] = value
       if (jsonString[index] == ',') {
         index++
         continue
       }
       if (jsonString[index] == '}') {
         break
       }
     }
     index++
     return result
   }
   /**
    * 给定一个空数组
    * 将原数组里面的内容依旧进入parse内循环
    * 如果是内容，就输出
    * 如果是','则跳过，是'['就结束
    * 然后将内容输入空数组
    */
   function parseArray() {
     var result = []
     var product
     index++
     for (;;) {
       if (jsonString[index] == ',') {
         index++
         continue
       }
       if (jsonString[index] == ']') {
         break
       }
       product = parse()
       result.push(product)
     }
     index++
     return result
   }
   /**
    * 判定为字符串时
    * 选取""内的字符串输出
    * @return {[type]} [description]
    */
   function parseString() {
     var startStr = index
     var endStr = jsonString.indexOf('"', startStr + 1)
     var string = jsonString.slice(startStr + 1, endStr)
     index = endStr + 1
     return string
   }

   function parseTrue() {
     index += 4
     return true
   }

   function parseFalse() {
     index += 5
     return false
   }

   function parseNull() {
     index += 4
     return null
   }
   /**先判断字符串是不是在0-9内
    * 是的话判定true，不是判定false
    */

   function isDigit(char) {
     if (!char) {
       return false
     }
     var theMin = '0'.charCodeAt(0)
     var theMax = '9'.charCodeAt(0)
     var theChar = char.charCodeAt(0)
     if (theChar >= theMin && theChar <= theMax) {
       return true
     } else {
       return false
     }
   }
   /**
    * 循环字符串
    * 搜集到isDigit判断为false时的字符串
    * 这中间都是num，然后截取并输出
    * @return {[type]} [description]
    */
   function parseNumber() {
     for (var j = index;; j++) {
       if (isDigit(jsonString[j]) == false) {
         break
       }
     }
     var number = jsonString.slice(index, j)
     index = j
     return parseInt(number)
   }
 }
