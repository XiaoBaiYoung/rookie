var ShenXiaoBai = {
  //Math
  /**
   * 给定两个参数
   * 使这两个参数相加
   * 返回相加的值
   */
  add: function(augend, addend) {
    var sum = augend + addend
    return sum
  },
  /**
   * 给定两个参数
   * 如果precision为空或者0，number加1取整后返回
   * 如果不为0或空
   * number乘以10的precision次方后加1，然后再除以10的precision次方
   * 然后返回number
   */
  ceil: function(number, precision) {
    if (precision == undefined || precision == 0) {
      number = parseInt(number + 1)
      return number
    } else {
      number = (parseInt((number * Math.pow(10, precision)) + 1)) / Math.pow(10, precision)
    }
    return number
  },
  /**
   * 传入两个参数
   * 使dividend除以divisor取得Num
   * 返回num
   */
  divide: function(dividend, divisor) {
    var num = dividend / divisor
    return num
  },
  /**
   * 传入两个参数
   * 判断precision是否为空或者0，是的话取整后返回
   * 如果不为空或者0
   * number乘以10的precision次方后取整，再除以10的precision次方后返回
   */
  floor: function(number, precision) {
    if (precision == undefined || precision == 0) {
      number = parseInt(number)
    } else {
      number = parseInt(number * Math.pow(10, precision)) / Math.pow(10, precision)
    }
    return number
  },
  /**
   * 传入一个数组
   * 循环数组，判断数组中有没有空或者false
   * 没有的话，如果数组中后面的小于前面的，则位置互换
   * 最后，返回位于数组最后面的一个数
   */
  max: function(array) {
    var temp
    for (i = 0; i < array.length; i++) {
      if (array[i] == undefined || array[i] == false) {
        return undefined
      } else {
        if (array[i] < array[i - 1]) {
          temp = array[i]
          array[i] = array[i - 1]
          array[i - 1] = temp
        }
      }
    }
    return array[i - 1]
  },
  /**
   * 类似于max
   * 只不过在循环的时候给数组中的每一个属性一个interatee函数
   * 返回最大值
   */
  maxBy: function(array, interatee) {
    var temp
    for (var i = 0; i < array.length; i++) {
      ineratee(array[i])
      if (interatee(array[i]) < interatee(array[i - 1])) {
        temp = interatee(array[i])
        interatee(array[i]) = interatee(array[i - 1])
        interatee(array[i - 1]) = temp
      }
    }
    return ineratee(array[i])
  },
  /**
   * 传入一个数组
   * 遍历数组，将每一项相加
   * 得到和，然后除以数组的字节数并返回
   */
  mean: function(array) {
    var result = 0
    for (var i = 0; i < array.length; i++) {
      result += array[i]
    }
    result = result / array.length
    return result
  },
  /**
   * 方法类似于mean
   * 只不过在遍历时给数组内的每一个属性一个interatee函数
   * 返回平均值
   */
  meanBy: function(array, interatee) {
    var result = 0
    for (var i = 0; i < array.length; i++) {
      interatee(array[i])
      result += interatee(array[i])
    }
    result = result / array.length
    return result
  },
  /**
   * 传入一个数组
   * 遍历数组，将每一项相加
   * 得到和，返回
   */
  sum: function(array) {
    var result = 0
    for (var i = 0; i < array.length; i++) {
      result += array[i]
    }
    return result
  },
  /**
   * 方法类似于sum
   * 只不过在遍历时给数组的每个属性一个interatee函数
   * 返回result
   */
  sunBy: function(array, interatee) {
    var result = 0
    for (var i = 0; i < array.length; i++) {
      interatee(array[i])
      result += interatee(array[i])
    }
    return result
  },
  /**
   * 传入一个数组
   * 循环数组，判断数组中有没有空或者false
   * 没有的话，如果数组中后面的大于前面的，则位置互换
   * 最后，返回位于数组最后面的一个数
   */
  min: function(array) {
    var temp
    for (var i = 0; i < array.length; i++) {
      if (array[i] == undefined || array[i] == false) {
        return undefined
      } else {
        if (array[i] > array[i - 1]) {
          temp = array[i]
          array[i] = array[i - 1]
          array[i - 1] = temp
        }
      }
    }
    return array[i]
  },
  /**
   * 方法类似于Min
   * 只不过在遍历时给数组中的每一个属性一个interatee属性
   * 返回最小值
   */
  minBy: function(array, interatee) {
    var temp
    for (var i = 0; i < array.length; i++) {
      interatee(array[i])
      if (interatee(array[i]) > interatee(array[i - 1])) {
        temp = interatee(array[i])
        interatee(array[i]) = interatee(array[i - 1])
        interatee(array[i - 1]) = temp
      }
    }
    return interatee(array[i])
  },
  /**
   * 传入两个参数
   * 使dividend乘以divisor取得Num
   * 返回num
   */
  multiply: function(dividend, divisor) {
    var num = dividend * divisor
    return num
  },

  /**
   * 传入两个参数
   * 使dividend减去divisor取得Num
   * 返回num
   */
  subtract: function(dividend, divisor) {
    var num = dividend - divisor
    return num
  },
  /**
   * 传入两个参数
   * 判断是否为空或者0，是的话判断小数点第一位是不是大于等于5
   * 是的话加一取整，不是的话直接取整
   * 如果不是空或者0，是数字
   * 再判断precision要求的后一位是不是大于等于5
   * 是的话在那一位加一，不是的话不加1，然后返回
   */
  round: function(number, precision) {
    if (precision == undefined || precision == 0) {
      if ((number * 10) % 10 >= 5) {
        number = parseInt(number + 1)
      } else {
        number = parseInt(number)
      }
    } else {
      if ((number * Math.pow(10, precision + 1)) % 10 >= 5) {
        number = parseInt(number * Math.pow(10, precision) + 1) / Math.pow(10, precision)
      } else {
        number = parseInt(number * Math.pow(10, precision)) / Math.pow(10, precision)
      }
    }
    return number
  },
  //Number
  /**
   * 传入三个参数
   * 判断number是否在lower和upper中间
   * 是的话返回number
   * 如果number小于lower，返回lower
   * 如果number大于upper，返回upper
   */
  clamp: function(number, lower, upper) {
    if (lower < number && number < upper) {
      return number
    } else if (number < lower) {
      return lower
    } else if (number > upper) {
      return upper
    }
  },

  /**
   * 传入三个参数
   * 判断有无end，如果没有，end=start,start=0
   * 判断start是否大于end，是的话两者互换
   * 判断number是否在start和end间，是的话返回true
   * 否则返回false
   */
  inRange: function(number, start, end) {
    var temp
    if (end == undefined) {
      end = start
      start = 0
    }
    if (start > end) {
      temp = start
      start = end
      end = temp
    }
    if (number > start && number < end) {
      return true
    } else {
      return false
    }
  },
  /**
   * 传入三个参数，lower,upper,floating
   * 给定一个变量result
   * 如果只传入一个参数的话，
   * 让upper = lower，lower=0
   * 传入一个随机数乘以取整后的upper然后取整
   * 如果等于5的话 取4
   * 返回
   * 如果floating没有传入，而且lower和upper都为整数的话
   * 传入一个随机数乘以取整后的upper然后取整
   * 如果等于5的话 取4
   * 返回
   * 如果lower或者upper为浮点数，又或者flaoting传入true的话
   * 传入一个随机数，并且乘以取整后的upper
   * 返回
   */
  random: function(lower, upper, floating) {
    var result
    if (upper == undefined && floating == undefined) {
      upper = lower
      lower = 0
      result = Math.ceil(Math.random() * parseInt(upper))
      if (result == 5) {
        result = 4
      }
      return result
    }
    if (floating == undefined && parseInt(lower) == lower && parseInt(upper) == upper) {
      result = Math.ceil(Math.random() * parseInt(upper))
      if (result == 5) {
        result = 4
      }
      return result
    }
    if (floating == true || parseInt(lower) != lower || parseInt(upper) != upper) {
      result = Math.random() * parseInt(upper)
      return result
    }
  },
  //function
  /**
   * 传入两个参数，n和func
   * 创建一个计数器
   * 调用函数，每调用一次，计数器加1
   * 当调用次数大于等于n时
   * 返回想要调用的函数
   */
  after: function(n, func) {
    var count = 0
    return function(arg) {
      count++
      if (count >= n) {
        return func(arg)
      }
    }
  },
  /**
   * 传入两个参数fun 和 n。
   * 如果没有传入n，则认为n等于1（文档要求）
   * 调用函数，如果传入的参数数量大于n，则将传入参数数量变为n
   * 然后返回新函数
   */
  ary: function(func, n) {
    if (n == undefined) {
      n = 1
    }
    return function(...arg) {
      if (arguments.length > n) {
        arguments.length = n
      }
      return func(...arg)
    }
  },
  /**
   * 传入两个参数，n和func
   * 设置一个计数器，和一个变量lastFunc
   * 调用函数，当调用次数小于等于n时，将函数赋予变量lastFunc，然后返回这个变量
   * 否则（就是当调用次数大于n时）返回lastFunc（即最后一次调用的函数）
   */
  brfore: function(n, func) {
    var count = 0
    var lastFunc
    return function(arg) {
      count++
      if (count <= n) {
        lastFunc = func(arg)
        return lastFunc
      } else {
        return lastFunc
      }
    }
  },

  /**
   * 返回一个setTimeout函数包裹的func
   * setTimeout函数的特性就是会等到后面栈调用完以后才执行
   * @param  {[type]} args [description]
   * @return {[type]}      [description]
   */
  defer: function(func, args) {
    return setTimeout(func(args), 0)
  },
  /**
   * 返回一个setTimeout函数包裹的func
   * setTimeout函数的特性就是会等到后面栈调用完以后才执行
   * @param  {[type]} args [description]
   * @return {[type]}      [description]
   */
  delay: function(func, wait, args) {
    return setTimeout(func(args), wait)
  },
  /**
   * 传入一个参数func
   * 调用函数
   * 创建一个变量newArg
   * 将函数内的参数以逗号分隔的方式化成数组
   * 然后再将这个数组翻转
   * 将翻转后的数组重新化作字符串当做参数传入
   * 返回函数
   */
  flip: function(func) {
    return function(args) {
      var newArg
      newArg = reverse(args.split(','))
      newArg = newArg.join(',')
      return func(newArg)
    }
  },
  /**
   * 传入一个参数func
   * 传入一个变量result
   * 调用函数
   * 第一次调用时使result等于函数func的结果
   * 以后每次调用都返回result
   */
  once: function(func) {
    var result
    return function(args) {
      result = func(args)
      return result
    }
  },
  /**
   * 传入两个参数，函数func和函数transfroms
   * 调用函数func
   * 将函数transfroms的返回值作为func的参数
   * 返回func这个函数
   */
  overArgs: function(func, transfroms) {
    return func(transfroms(identity))
  },
  /**
   * 传入一个参数，函数func
   * 给定一个变量result
   * 调用函数，result参数中的第一个参数
   * 返回func，参数为result
   */
  unary: function(func) {
    var result
    return function(args) {
      result = arguments[0]
      return func(result)
    }
  },
  //Array
  /**
   * 传入两个参数array和size
   * 判断size是否等于undefined
   * 是的话令size=1（即判定有没有传入size参数）
   * 给定一个参数siLength（数组被size整分成了几组）
   * 给定一个参数newarray（创建一个新数组，数组里面有sizeLength个属性）
   * 循环，使每个属性变成一个空数组，并在每个空数组依次填入size个原array里的属性
   * 如果array不能刚好被size整除的话，将多余的push进新的数组
   * 返回新数组
   */
  chunk: function(array, size) {
    if (size == undefined) {
      size = 1
    }

    var sizeLength = Math.floor(array.length / size)
    var newArray = new Array(sizeLength)

    for (var i = 0; i < sizeLength; i++) {
      newArray[i] = []
      for (var j = i * size; j < i * size + size; j++) {
        newArray[i].push(array[j])
      }
    }
    if (array.length % size != 0) {
      newArray.push(array.slice(j, array.length))
    }
    return newArray
  },
  /**
   * 传入一个数组array
   * 使用filter函数，判断条件是数组中的每一项不等于false
   * 返回返回值是true的数组
   */
  compact: function(array) {
    return array.filter(it => it != false)
  },
  /**
   * 传入参数array,和values
   * 如果没有传入values参数的话，直接返回array数组
   * 传入values参数的话，循环values参数
   * 将values参数push进数组array中
   * 返回新数组array
   */
  concat: function(array, values) {
    if (values == undefined) {
      return array
    }
    for (var i = 1; i < arguments.length; i++) {
      array.push(arguments[i])
    }
    return array
  },
  /**
   * 传入两组数组array和values
   * 如果values为undefined，则直接返回array
   * 遍历数组array与values，并将两个数组的每一个属性进行对比
   * 如果有相等的，则从array中删除这一属性
   * 返回遍历后的数组array
   */
  difference: function(array, values) {
    if (values == undefined) {
      return array
    }
    for (var i = 0; i < array.length; i++) {
      for (var j = 0; j < values.length; j++) {
        if (array[i] == values[j]) {
          array.splice(i, 1)
          i--
        }
      }
    }
    return array
  },
  /**
   * 方法同difference
   * 不同之处在于在遍历array和values时同时都给一个函数interatee
   * 然后返回新数组
   */
  differenceBy: function(array, value, interatee) {
    if (typeof inerateec == 'array') {
      for (var i = 0; i < array.length; i++) {
        for (var j = 0; j < value.length; j++) {
          if (interatee(array[i]) == interatee(values[j])) {
            array.splice(i, 1)
            i--
          }
        }
      }
    }
    if (typeof interatee == 'string') {
      for (var i = 0; i < array.length; i++) {
        for (var j = 0; j < value.length; j++) {
          if (array[i][interatee] == value[j][interatee]) {
            array.splice(i, 1)
            i--
          }
        }
      }
    }
    return array
  },
  /**
   * 方法同difference
   * 不同之处在于遍历array和values时同时都给一个函数comparator
   * 返回新数组array
   */
  differenceWith: function(array, values, comparator) {
    if (values == undefined) {
      return array
    }
    for (var i = 0; i < array.length; i++) {
      for (var j = 0; j < values.length; j++) {
        if (comparator(array[i], values[j])) {
          array.splice(i, 1)
          i--
        }
      }
    }
    return array
  },
  /**
   * 传入两个参数array和n
   * 判断如果没有传入参数n的话，令n=1
   * 用splice方法删除前n项
   * 返回数组
   */
  drop: function(array, n) {
    if (n == undefined) {
      n = 1
    }
    array.splice(0, n)
    return array
  },
  /**
   * 传入两个参数array和n
   * 判断如果没有传入参数n的话，令n=1
   * 用reberse方法反转数组
   * 用splice方法删除前n项
   * 反转数组
   * 返回数组
   */
  dropRight: function(array, n) {
    if (n == undefined) {
      n = 1
    }
    array.reverse()
    array.splice(0, n)
    array.reverse()
    return array
  },
  /**
   * 传入两个参数，数组array和函数predicate
   * 创建一个变量result
   * 遍历数组array，给每个属性一个函数predicate
   * 如果返回false值时，遍历停止
   * 用splice方法删除false值到最后一个属性部分
   * 返回数组
   */
  dropRightWhile: function(array, predicate) {
    var result
    for (var i = 0; i < array.length; i++) {
      result = predicate(array[i], i, array)
      if (result == false) {
        break
      }
    }
    array.splice(i, array.length)
    return array
  },
  /**
   * 传入两个参数，数组array和函数predicate
   * 创建一个变量result
   * 遍历数组array，给每个属性一个函数predicate
   * 如果返回false值时，遍历停止
   * 用splice方法删除第一项到false值属性部分
   * 返回数组
   */
  dropWhile: function(array, predicate) {
    var result
    for (var i = 0; i < array.length; i++) {
      result = predicate(array[i], i, array)
      if (result == false) {
        break
      }
    }
    array.splice(0, i + 1)
    return array
  },
  /**
   * 传入四个参数array,value,start,end
   * 如果没有传入start参数，令start=0
   * 如果没有传入end参数，令end=array.length
   * 遍历数组中位于start和end中间的属性
   * 并令这些属性等于value值
   * 返回数组
   */
  fill: function(array, value, start, end) {
    if (start == undefined) {
      start = 0
    }
    if (end == undefined) {
      end = array.length
    }
    for (var i = start; i < end; i++) {
      array[i] = value
    }
    return array
  },
  /**
   * 传入三个参数。一组数组，一个函数，和一个开始值
   * 判断fromIndex为Undefined的话，令fromIndex为0
   * 循环数组，从fromIndex开始
   * 给数组中的每一个属性一个predocate函数
   * 第一个通过判断为真值的属性，返回它的下标
   * 如果全为假，返回-1
   */
  findIndex: function(array, predicate, fromIndex) {
    if (fromIndex == undefined) {
      fromIndex = 0
    }
    for (var i = fromIndex; i < array.length; i++) {
      if (predicate(array[i]) == true) {
        return i
      } else {
        return -1
      }
    }
  },
  /**
   * 方法类似于findIndex
   * 只不过循环时从后往前
   */
  findLastIndex: function(array, predicate, fromIndex) {
    if (fromIndex == undefined) {
      fromIndex = 0
    }
    for (var i = array.length - 1; i >= 0; i--) {
      if (predicate(array[i]) == true) {
        return i
      } else {
        return -1
      }
    }
  },
  /**
   * 传入一个数组
   * 返回数组的第一项
   */
  head: function(array) {
    debugger
    return array[0]
  },
  /**
   * 传入一个数组pairs
   * 创建一个空对象result
   * 循环数组，令数组中每一项的前一项为key，后一项为value，然后传入result
   * 返回result
   */
  fromParis: function(pairs) {
    var result = {}
    for (var i = 0; i < pairs.length; i++) {
      result[pairs[i][0]] = pairs[i][1]
    }
    return result
  },
  /**
   * 传入三个参数，array,value和fromIndex
   * 如果fromIndex为空，令fromIndex为0
   * 如果fromIndex小于0，就从数组尾端开始循环
   * 如果循环到了数组中的一个数等于value值，则返回索引值
   * 否则，返回-1
   * * 如果fromIndex大于0，就从数组头部开始循环
   * 如果循环到了数组中的一个数等于value值，则返回索引值
   * 否则，返回-1
   */
  indexOf: function(array, value, fromIndex) {
    if (fromIndex == undefined) {
      for (var i = 0; i < array.length; i++) {
        if (array[i] == value) {
          return i
        }
      }
      return -1
    }
    if (fromIndex < 0) {
      fromIndex = Math.abs(fromIndex)
      for (var j = array.length - 1 - fromIndex; j >= 0; j--) {
        if (array[j] == value) {
          return j
        }
      }
      return -1
    }
    if (fromIndex >= 0) {
      for (var n = fromIndex; n < array.length; n++) {
        if (array[n] == value) {
          return n
        }
      }
      return -1
    }
  },
  /**
   * 传入一个参数array
   * 用slice方法获得除最后一个元素的array数组
   * 返回
   */
  initial: function(array) {
    return array.slice(0, array.length - 1)
  },
  /**
   * 给定函数多个数组的参数
   * 首先先将第一个数组的每个数遍历出来
   * 再遍历出里面的每个数组
   * 再将每个数组的每个数都和第一个数组的每个数比较
   * 有相同的就计数器加上
   * 如果计数器的数目等于数组的数量
   * 返回result
   */
  intersection: function(...array) {
    var result
    var num = []
    var arr = arguments[0]
    var arrJ
    var count
    for (var i = 0; i < arr.length; i++) {
      count = 0
      result = arr[i]
      for (var j = 1; j < arguments.length; j++) {
        arrJ = arguments[j]
        for (var k = 0; k < arrJ.length; k++) {
          if (result == arrJ[k]) {
            count++
            if (count == arguments.length - 1) {
              num.push(result)
              return num
            }
          }
        }
      }
    }
  },
  /**
   * 方法类似于interesetion
   * 只不过给遍历的每一个数都添加一个函数interatee
   */
  interesetionBy: function() {
    var result
    var arr = arguments[0]
    var arrJ
    var count
    for (var i = 0; i < arr.length; i++) {
      count = 0
      result = arguments[length - 1](arr[i])
      for (var j = 1; j < arguments.length; j++) {
        arrJ = arguments[j]
        for (var k = 0; k < arrJ.length; k++) {
          if (result == arguments[length - 1](arrJ[k])) {
            count++
            break
          }
        }
      }
      if (count == arguments.length - 1) {
        return result
      }
    }
  },
  /**
   * 直接用join方法实现
   */
  join: function(array, separator) {
    return array.join(separator)
  },
  /**
   * 传入一个数组
   * 获取它的最后一项
   * 即在数组内的下标为数组的字节减一项
   * 返回
   */
  last: function(array) {
    return array[array.length - 1]
  },
  /**
   * 传入三个参数array,value,fromIndex
   * 如果fromIndex没有传入，令fromIndex为 array.length - 1
   * 从右向左循环
   * 如果arr[i]==value
   * 返回这个属性的下标
   */
  lastIndexOf: function(array, value, fromIndex) {
    if (fromIndex == undefined) {
      fromIndex = array.length - 1
    }
    for (var i = fromIndex; i > 0; i--) {
      if (array[i] == value) {
        return i
      }
    }
  },
  /**
   * 传入两个参数array,n
   * 如果n为0 直接返回数组的第一个属性值
   * 如果n小于0，从右向左循环
   * i每循环一次，计数器+1，当计数器等于n的绝对值时
   * 返回数组的这个属性值
   * 如果n大于0，直接返回数组的第n项
   */
  nth: function(array, n) {
    debugger
    var count = 0
    if (n == undefined) {
      return array[0]
    } else if (n < 0) {
      for (var i = array.length - 1; i >= 0; i--) {
        count++
        if (count == Math.abs(n)) {
          return array[i]
        }
      }
    } else if (n > 0) {
      return array[n]
    }
  },
  /**
   * 传入参数，array,values
   * 给定变量，循环values
   * 循环array看数组中有没有和values中的值相等
   * 相等的话删除
   * 返回删除后的数组
   */
  pull: function(array, values) {
    var arr
    for (var i = 1; i < arguments.length; i++) {
      arr = arguments[i]
      for (var j = 0; j < array.length; j++) {
        if (array[j] == arr) {
          array.splice(j, 1)
          j--
        }
      }
    }
    return array
  },
  /**
   * 给定参数array,values
   * 循环values和array
   * 看有没有相等的数，有的话从array中删除
   * 返回删除后的array数组
   */
  pullAll: function(array, values) {
    var arr
    for (var i = 0; i < values.length; i++) {
      for (var j = 0; j < array.length; j++) {
        if (array[j] == values[i]) {
          array.splice(j, 1)
          j--
        }
      }
    }
    return array
  },
  /**
   * 方法类似于pullAll
   * 只不过在遍历后给每个属性值一个函数然后再比较
   */
  pullAllBy: function(array, values, interatee) {
    var arr
    for (var i = 0; i < values.length; i++) {
      for (var j = 0; j < array.length; j++) {
        if (interatee(array[j]) == interatee(values[i])) {
          array.splice(j, 1)
          j--
        }
      }
    }
    return array
  },
  /**
   * 方法类似于pullAll
   * 只不过比较用的是comparator函数
   */
  pullAllWith: function(array, values, comparator) {
    var arr
    for (var i = 0; i < values.length; i++) {
      for (var j = 0; j < array.length; j++) {
        if (comparator(array[j], values[i])) {
          array.splice(j, 1)
          j--
        }
      }
    }
    return array
  },
  /**
   * 传入参数array,index
   * 给定变量和一个为0计数器
   * 循环数组以及给定的索引值
   * 删除数组中与索引相对应下标的属性值
   * 每删除一次计数器+1
   * 下次删除索引值相对-1
   * 返回删除好后的数组
   */
  pullAt: function(array, index) {
    debugger
    var count = 0
    var arr
    for (var i = 0; i < array.length; i++) {
      for (var j = 1; j < arguments.length; j++) {
        if (i == arguments[j]) {
          arguments[j] = arguments[j] - count
          count++
          array.splice(arguments[j], 1)
        }
      }
    }
    return array
  },
  /**
   * 传入两个参数array,predicate
   * 给定一个变量空数组result
   * 循环原数组，并给每一个属性一个predicate函数
   * 返回真值的属性push入rusult
   * 返回result
   */
  remove: function(array, predicate) {
    var result = []
    for (var i = 0; i < array.length; i++) {
      var arr = predicate(array[i], i, array)
      if (arr == true) {
        result.push(arr)
      }
    }
    return result
  },
  /**
   * 传入一个参数array
   * 给定一个变量result
   * 村换这个数组，然后将循环出来的每一项依次push入result
   * 返回result
   */
  reverse: function(array) {
    var result = []
    for (var i = 0; i < array.length; i++) {
      result.unshift(array[i])
    }
    return result
  },
  /**
   * 传入参数array,start,end
   * 给定一个变量
   * 如果没有传入start，令start=0
   * @param  {[type]} end   [description]
   * @return {[type]}       [description]
   */
  slice: function(array, start, end) {
    var result = []
    if (start == undefined) {
      start = 0
    }
    if (end == undefined) {
      end = array.length
    }
    for (var i = start; i < end; i++) {
      result.push(array[i])
    }
    return result
  },
  /**
   * 传入两个参数array,value
   * 循环数组
   * 如果遇到大于value的数
   * 就返回这个数的下标
   */
  sortedIndex: function(array, value) {
    for (var i = 0; i < array.length; i++) {
      if (array[i] > value) {
        return i
      }
    }
  },
  /**
   * 传入参数array,value,interatee
   * 方法类似于sortedIndex
   * 只不过在循环时给每个数一个函数
   */
  sortedIndexBy: function(array, value, ineratee) {
    for (var i = 0; i < array.length; i++) {
      if (ineratee(array[i]) > value) {
        return i
      }
    }
  },
  /**
   * 传入两个参数array,value
   * 循环数组
   * 如果遇到等于value的数
   * 就返回这个数的下标
   */
  sortedIndexOf: function(array, value) {
    for (var i = 0; i < array.length; i++) {
      if (array[i] == value) {
        return i
      }
    }
    return -1
  },
  /**
   * 传入两个参数array,value
   * 循环数组
   * 如果遇到小于等于value的数
   * 就返回这个数的下标
   * 否则 返回-1
   */
  sortedLastIndex: function(array, value) {
    for (var i = array.length - 1; i > 0; i--) {
      if (array[i] <= value) {
        return i
      }
    }
  },
  /**
   * 方法类似于sortedLastIndex
   * 只不过在每次遍历的时候给每个数一个函数
   */
  sortedLastIndex: function(array, value, interatee) {
    for (var i = array.length - 1; i > 0; i--) {
      if (interatee(array[i]) <= value) {
        return i
      }
    }
  },
  /**
   * 方法类似sortedIndexOf
   * 只不过遍历的顺序从后往前
   * 找到value值相等的数时返回下标
   * 否则返回-1
   */
  sortedLastIndexOf: function(array, value) {
    for (var i = array.length - 1; i > 0; i--) {
      if (interatee(array[i]) == value) {
        return i
      }
    }
    return -1
  },
  /**
   * 传入参数array
   * 给定一个计数器
   * 用sort方法给数组排序并返回
   * 循环排序后的数组，没遇到一个和arr[i]一样的数字，计数器加1
   * 当计数器大于1的时候，删除arr[i]
   * 返回去重后的数组
   */
  sortedUniq: function(array) {
    var count
    arr = array.sort()
    for (var i = 0; i < arr.length; i++) {
      count = 0
      for (var j = 0; j < arr.length; j++) {
        if (arr[i] == arr[j]) {
          count++
          if (count > 1) {
            arr.splice(i, 1)
            i--
          }
        }
      }
    }
    return arr
  },
  /**
   * 方法类似于sorteduniq
   * 只不过在遍历每个数时给一个函数interatee
   */
  sortedUniqBy: function(array, interatee) {
    var count
    arr = array.sort()
    for (var i = 0; i < arr.length; i++) {
      count = 0
      for (var j = 0; j < arr.length; j++) {
        if (interatee(arr[i]) == interatee(arr[j])) {
          count++
          if (count > 1) {
            arr.splice(i, 1)
            i--
          }
        }
      }
    }
    return arr
  },
  /**
   * 传入一个参数array
   * 给定一个变量result
   * 用slice给数组切片，获取除第一个元素外所有元素
   * 返回
   */
  tail: function(array) {
    var result = array.slice(1, array.length)
    return result
  },
  /**
   * 传入参数array,n
   * 如果没有传入n，令n=1
   * 给定一个变量result
   * 用slice给数组切片，获取除下标0到下标n之间所有元素
   * 返回
   */
  take: function(array, n) {
    if (n == undefined) {
      n = 1
    }
    var result = array.slice(0, n)
    return result
  },
  /**
   * 传入两个参数array,n
   * 如果没有传入n，令n为1
   * 如果n大于array字节数时
   * 令n等于数组的字节数
   * 然后用slice方法切片
   * 返回
   */
  takeRight: function(array, n) {
    if (n == undefined) {
      n = 1
    }
    if (n > array.length) {
      n = array.length
    }
    var result = array.slice(array.length - n, array.length)
    return result
  },
  /**
   * 从array数组的最后一个元素开始提取元素，直到 predicate 返回假值。predicate 会传入三个参数： (value, index, array)。
   * @param  {array} array   要检索的数组
   * @param  {[predicate=_.identity] (Array|Function|Object|string)} predicate 每次迭代调用的函数
   * @return {result}返回 array 数组的切片
   */
  takeRightWhile: function(array, predicate) {
    var result = []
    for (var i = array.length - 1; i >= 0; i--) {
      if (predicate(array[i]) == true) {
        result.unshift(array[i])
      } else if (predicate(array[i]) == false) {
        break
      }
    }
    return result
  },
  /**
   * 从array数组的起始元素开始提取元素，，直到 predicate 返回假值。predicate 会传入三个参数： (value, index, array)。
   * @param  {[array (Array)]} array需要处理的数组
   * @param  {[predicate=_.identity] (Array|Function|Object|string)} predicate 每次迭代调用的函数
   * @return {Array} 返回 array 数组的切片
   */
  takeWhile: function(array, predicate) {
    var result = []
    for (var i = 0; i < array.length; i++) {
      if (predicate(array[i]) == true) {
        result.unshift(array[i])
      } else if (predicate(array[i]) == false) {
        break
      }
    }
    return result
  },
  /**
   * 创建一个按顺序排列的唯一值的数组。所有给定数组的元素值使用SameValueZero做等值比较
   * @param  {[arrays] (...Array)} arrays 要检查的数组。
   * @return {Array} result        返回一个新的联合数组。
   */
  union: function(arrays) {
    var result = []
    var count
    for (var i = 0; i < arguments.length; i++) {
      for (var j = 0; j < arguments[i].length; j++) {
        result.push(arguments[i][j])
      }
    }
    for (var k = 0; k < result.length; k++) {
      count = 0
      for (var n = 0; n < result.length; n++) {
        if (result[k] == result[n]) {
          count++
          if (count > 1) {
            result.splice(n, 1)
            n--
          }
        }
      }
    }
    return result
  },
  /**
   * 这个方法类似 _.union ，除了它接受一个 iteratee （迭代函数），调用每一个数组（array）的每个元素以产生唯一性计算的标准。iteratee 会传入一个参数：(value)。
   * @param  {[arrays] (...Array)} arrays   要检查的数组
   * @param  {[iteratee=_.identity] (Array|Function|Object|string)} ineratee 迭代函数，调用每个元素
   * @return {Array} result  返回一个新的联合数组。
   */
  unionBy: function(arrays, ineratee) {
    var result = []
    var count
    for (var i = 0; i < arguments.length; i++) {
      for (var j = 0; j < arguments[i].length; j++) {
        result.push(arguments[i][j])
      }
    }
    for (var k = 0; k < result.length; k++) {
      count = 0
      for (var n = 0; n < result.length; n++) {
        if (ineratee(result[k]) == ineratee(result[n])) {
          count++
          if (count > 1) {
            result.splice(k, 1)
            k--
          }
        }
      }
    }
    return result
  },
  /**
   * 这个方法类似 _.uniq， 除了它接受一个 comparator 调用比较arrays数组的每一个元素。 comparator 调用时会传入2个参数： (arrVal, othVal)。
   * @param  {array (Array)} arrays   要检查的数组。
   * @param  {[comparator] (Function)} comparator  比较函数，调用每个元素
   * @return {Array} result   返回新的去重后的数组。
   */
  unionWith: function(arrays, comparator) {
    var result = []
    var count
    for (var i = 0; i < arguments.length; i++) {
      for (var j = 0; j < arguments[i].length; j++) {
        result.push(arguments[i][j])
      }
    }
    for (var k = 0; k < result.length; k++) {
      count = 0
      for (var n = 0; n < result.length; n++) {
        if (comparator(result[k], result[n])) {
          count++
          if (count > 1) {
            result.splice(k, 1)
            k--
          }
        }
      }
    }
    return result
  },
  /**
   * 这个方法类似于_.zip，除了它接收分组元素的数组，并且创建一个数组，分组元素到打包前的结构。
   * @param  {array (Array)} array 要处理的分组元素数组
   * @return {Array} result 返回重组元素的新数组
   */
  unzip: function(array) {
    var result = []
    for (var i = 0; i < array[0].length; i++) {
      result[i] = []
    }
    for (var j = 0; j < array.length; j++) {
      for (var k = 0; k < array[0].length; k++) {
        result[k][j] = array[j][k]
      }
    }
    return result
  },
  /**
   * 此方法类似于_.unzip，除了它接受一个iteratee指定重组值应该如何被组合。iteratee 调用时会传入每个分组的值： (...group)
   * @param  {array (Array)} array  要处理的分组元素数组。
   * @param  {[iteratee=_.identity] (Function)} ineratee  这个函数用来组合重组的值
   * @return {array} result   返回重组元素的新数组。
   */
  unzipWith: function(array, ineratee) {
    var result = []
    for (var i = 0; i < array.length; i++) {
      for (var j = 0; j < array[i].length; j++) {
        result.push(ineratee(array[i][j]))
      }
    }
    return result
  },
  /**
   * 创建一个剔除所有给定值的新数组，剔除值的时候，使用SameValueZero做相等比较
   * @param  {array (Array)} array   要检查的数组
   * @param  {[values] (...*)} values 要剔除的值
   * @return {(Array)} array   返回过滤值后的新数组
   */
  without: function(array, values) {
    for (var i = 0; i < array.length; i++) {
      for (var j = 1; j < arguments.length; j++) {
        if (array[i] == arguments[j]) {
          array.splice(i, 1)
          i--
        }
      }
    }
    return array
  },
  /**
   * 创建一个给定数组唯一值的数组，使用symmetric difference做等值比较。返回值的顺序取决于他们数组的出现顺序。
   * @param  {[arrays] (...Array)} ...array 要检查的数组
   * @return {(Array)}  返回过滤值后的新数组
   */
  xor: function(...array) {
    var result = []
    var count
    var temp
    for (var i = 0; i < arguments.length; i++) {
      for (var x = 0; x < arguments[i].length; x++) {
        result.push(arguments[i][x])
      }
    }
    for (var j = 0; j < result.length; j++) {
      count = 0
      for (var n = 0; n < result.length; n++) {
        if (result[j] == result[n]) {
          count++
          if (count > 1) {
            temp = result[j]
            break
          }
        }
      }
    }
    for (var m = 0; m < result.length; m++) {
      if (result[m] == temp) {
        result.splice(m, 1)
        m--
      }
    }
    return result
  },
  /**
   * 这个方法类似 _.xor ，除了它接受 iteratee（迭代器），这个迭代器 调用每一个 arrays（数组）的每一个值，以生成比较的新值。iteratee 调用一个参数： (value).
   * @param  {[arrays] (...Array)} array   要检查的数组。
   * @param  {[iteratee=_.identity] (Array|Function|Object|string)}    ineratee 调用每一个元素的迭代函数
   * @return {(Array)}   返回过滤值后的新数组
   */
  xorBy: function(interatee, ...array) {
    var result = []
    var count
    var temp
    for (var i = 1; i < arguments.length; i++) {
      for (var x = 0; x < arguments[i].length; x++) {
        result.push(interatee(arguments[i][x]))
      }
    }
    for (var j = 0; j < result.length; j++) {
      count = 0
      for (var n = 0; n < result.length; n++) {
        if (result[j] == result[n]) {
          count++
          if (count > 1) {
            temp = result[j]
            break
          }
        }
      }
    }
    for (var m = 0; m < result.length; m++) {
      if (result[m] == temp) {
        result.splice(m, 1)
        m--
      }
    }
    return result
  },
  /**
   * 该方法是像 _.xor，除了它接受一个 comparator ，以调用比较数组的元素。 comparator 调用2个参数：(arrVal, othVal).
   * @param  {[arrays] (...Array)} array   要检查的数组
   * @param  {[comparator] (Function)}    comparator调用每一个元素的比较函数
   * @return {(Array)}  返回过滤值后的新数组
   */
  xorWith: function(comparator, ...array) {
    var result = []
    var count
    var temp
    for (var i = 1; i < arguments.length; i++) {
      for (var x = 0; x < arguments[i].length; x++) {
        result.push(arguments[i][x])
      }
    }
    for (var j = 0; j < result.length; j++) {
      count = 0
      for (var n = 0; n < result.length; n++) {
        if (comparator(result[j], result[n])) {
          count++
          if (count > 1) {
            temp = result[j]
            break
          }
        }
      }
    }
    for (var m = 0; m < result.length; m++) {
      if (result[m] == temp) {
        result.splice(m, 1)
        m--
      }
    }
    return result
  },
  /**
   * 创建一个分组元素的数组，数组的第一个元素包含所有给定数组的第一个元素，数组的第二个元素包含所有给定数组的第二个元素，以此类推。
   * @param  {[arrays] (...Array)} array 要处理的数组。
   * @return {(Array)}   返回分组元素的新数组。
   */
  zip: function(...array) {
    var result = []
    for (var i = 0; i < arguments[0].length; i++) {
      result[i] = []
    }
    for (var j = 0; j < result.length; j++) {
      for (var n = 0; n < arguments.length; n++) {
        result[j][n] = arguments[n][j]
      }
    }
    return result
  },
  /**
   * 这个方法类似 _.fromPairs，除了它接受2个数组，第一个数组中的值作为属性标识符（属性名），第二个数组中的值作为相应的属性值。
   * @param  {arr1(Array)} arr1 作为属性名的数组
   * @param  {arr2(Array)} arr2 作为属性值的数组
   * @return {(Object)}  返回对象object
   */
  zipObject: function(arr1, arr2) {
    var object = {}
    for (var i = 0; i < arr1.length; i++) {
      object[arr1[i]] = arr2[i]
    }
    return object
  },
  /**
   * 这个方法类似于_.zip，不同之处在于它接受一个 iteratee（迭代函数），来 指定分组的值应该如何被组合。 该iteratee调用每个组的元素： (...group).
   * @param  {[arrays] (...Array)} array  要处理的数组
   * @param  {[iteratee=_.identity] (Function)}    ineratee 函数用来组合分组的值
   * @return {result}   返回分组元素的新数组。
   */
  zipWith: function(ineratee, ...array) {
    var result = []
    for (var i = 1; i < arguments.length; i++) {
      for (var j = 0; j < arguments[0].length; j++) {
        result.push(interatee(arguments[i][j]))
      }
    }
    return result
  },
  /**
   * 转换字符串string为 驼峰写法。
   * @param  {[string=''] (string)} string 要转换的字符串。
   * @return {(string)} 返回驼峰写法的字符串。
   */
  camelCase: function(string) {
    return string.replace(/\w/g, function(letter) {
      return letter.toLowerCase()
    }).replace(/\b\w/g, function(letter) {
      return letter.toUpperCase()
    }).replace(/[-_ ]*/g, '').replace(/\b\w/, function(letter) {
      return letter.toLowerCase()
    })
  },
  /**
   * 转换字符串string首字母为大写，剩下为小写。
   * @param  {[string=''] (string)} string 要大写开头的字符串。
   * @return {(string)} 返回大写开头的字符串。
   */
  capitalize: function(string) {
    var letter = string.split('')
    letter[0] = letter[0].toUpperCase()
    for (var i = 1; i < letter.length; i++) {
      letter[i] = letter[i].toLowerCase()
    }
    return letter.join('')
  },
  /**
   * 检查字符串string是否以给定的target字符串结尾。
   * @param  {[string=''] (string)} string  要检索的字符串。
   * @param  {[target] (string)} target  要检索字符。
   * @param  {[position=string.length] (number)} position 检索的位置。
   * @return {(boolean)}     如果字符串string以target字符串结尾，那么返回 true，否则返回 false。
   */
  endsWith: function(string, target, position) {
    let num = string.length
    if (position == undefined) {
      if (string[num - 1] == target) {
        return true
      } else {
        return false
      }
    } else {
      if (string[position] == target) {
        return true
      } else {
        return false
      }
    }
  },
  /**
   * 创建一个去重后的array数组副本。使用了 SameValueZero 做等值比较。只有第一次出现的元素才会被保留。
   * @param  {array (Array)} array 要检查的数组
   * @return {(Array)}  返回新的去重后的数组。
   */
  uniq: function(array) {
    var count = 0
    for (var i = 0; i < array.length; i++) {
      for (var j = i; j < array.length; j++) {
        if (array[i] == array[j]) {
          count++
          if (count > 1) {
            array.splice(i, 1)
            i--
          }
        }
      }
      count = 0
    }
    return array
  },
  /**
   * 这个方法类似 _.uniq ，除了它接受一个 iteratee （迭代函数），调用每一个数组（array）的每个元素以产生唯一性计算的标准。
   * @param  {array (Array)} array    要检查的数组。
   * @param  {[iteratee=_.identity]} ineratee  迭代函数，调用每个元素。
   * @return {(Array)}   返回新的去重后的数组。
   */
  uniqBy: function(array, ineratee) {
    var count = 0
    for (var i = 0; i < array.length; i++) {
      for (var j = i; j < array.length; j++) {
        if (ineratee(array[i]) == ineratee(array[j])) {
          count++
          if (count > 1) {
            array.splice(i, 1)
            i--
          }
        }
      }
      count = 0
    }
    return array
  },
  /**
   * 这个方法类似 _.uniq， 除了它接受一个 comparator 调用比较arrays数组的每一个元素。
   * @param  {array (Array)} array   要检查的数组。
   * @param  {[comparator] (Function)} comparator 比较函数，调用每个元素。
   * @return {(Array)} 返回新的去重后的数组。
   */
  uniqWith: function(array, comparator) {
    for (var i = 0; i < array.length; i++) {
      for (var j = i; j < array.length; j++) {
        if (comparator(array[i], array[j])) {
          count++
          if (count > 1) {
            array.splice(i, 1)
            i--
          }
        }
      }
      count = 0
    }
    return array
  },
  /**
   * 通过 predicate（断言函数） 检查 collection（集合）中的 所有 元素是否都返回真值。一旦 predicate（断言函数） 返回假值，迭代就马上停止。
   * @param  {collection (Array|Object)} collection 一个用来迭代的集合
   * @param  {[predicate=_.identity] } predicate  每次迭代调用的函数。
   * @return {(boolean)}     如果所有元素经 predicate（断言函数） 检查后都都返回真值，那么就返回true，否则返回 false 。
   */
  every: function(collection, predicate) {
    if (collection == []) {
      return false
    }
    collection.map(function(it) {
      if (predicate(it) == false) {
        return false
      } else {
        return true
      }
    })
  },
  /**
   * 遍历 collection（集合）元素，返回 predicate（断言函数）返回真值 的所有元素的数组。
   * @param  {collection (Array|Object)} collection 一个用来迭代的集合。
   * @param  {[predicate=_.identity]} predicate  每次迭代调用的函数。
   * @return {(Array)}            返回一个新的过滤后的数组。
   */
  filter: function(collection, predicate) {
    var array = []
    collection.forEach(function(it) {
      if (predicate(it) == true) {
        array.push(it)
      }
    })
    return array
  },
  /**
   * 遍历 collection（集合）元素，返回 predicate（断言函数）第一个返回真值的第一个元素。
   * @param  {collection (Array|Object)} collection 一个用来迭代的集合。
   * @param  {[predicate=_.identity]} predicate  每次迭代调用的函数。
   * @return {[fromIndex=0] }       开始搜索的索引位置。
   */
  find: function(collection, predicate, fromIndex) {
    if (fromIndex == undefined) {
      fromIndex = 0
    }
    for (var i = fromIndex; i < collection.length; i++) {
      if (predicate(collection[i]) == true) {
        return collection[i]
      }
    }
    return false
  },
  /**
   * 这个方法类似_.find ，不同之处在于，_.findLast是从右至左遍历collection （集合）元素的。
   * @param  {collection (Array|Object)} collection 一个用来迭代的集合。
   * @param  {[predicate=_.identity]} predicate  每次迭代调用的函数。
   * @return {[fromIndex=0] }       开始搜索的索引位置。
   */
  findLast: function(collection, predicate, fromIndex) {
    if (fromIndex == undefined) {
      fromIndex = collection.length - 1
    }
    for (var i = fromIndex; i > 0; i--) {
      if (predicate(collection[i]) == true) {
        return collection[i]
      }
    }
    return false
  },
  /**
   * 创建一个扁平化（愚人码头注：同阶数组）的数组，这个数组的值来自collection（集合）中的每一个值经过 iteratee（迭代函数） 处理后返回的结果，并且扁平化合并。
   * @param  {collection (Array|Object)} collection 一个用来迭代遍历的集合。
   * @param  {[iteratee=_.identity] } iteratee    每次迭代调用的函数。
   * @return {(Array)}   返回新扁平化数组。
   */
  flatMap: function(collection, iteratee) {
    var array = []
    collection.map(function(it) {
      array.push(iteratee(it))
    })
    return array
  },
  /**
   * 调用 iteratee 遍历 collection(集合) 中的每个元素， iteratee 调用3个参数： (value, index|key, collection)。 如果迭代函数（iteratee）显式的返回 false ，迭代会提前退出。 
   * @param  {collection (Array|Object)} collection 一个用来迭代的集合。
   * @param  {[iteratee=_.identity] } iteratee   每次迭代调用的函数。
   * @return {(*)}            collection。
   */
  forEach: function(collection, iteratee) {
    for (var i = 0; i < collection.length; i++) {
      collection[i] = iteratee(collection[i])
    }
    return collection
  },
  //方法同forEach 循环顺序从右往左
  forEachRight: function(collection, iteratee) {
    for (var i = collection.length - 1; i > 0; i--) {
      collection[i] = iteratee(collection[i])
    }
    return collection
  },
  /**
   * 创建一个对象，key 是 iteratee 遍历 collection(集合) 中的每个元素返回的结果。 分组值的顺序是由他们出现在 collection(集合) 中的顺序确定的。每个键对应的值负责生成 key 的元素组成的数组
   * @param  {collection (Array|Object)} collection 一个用来迭代的集合
   * @param  {[iteratee=_.identity]} iteratee   这个迭代函数用来转换key。
   * @return {(Object)}    返回一个组成聚合的对象。
   */
  groupBy: function(collection, iteratee) {
    var object = {}
    collection.map(function(it) {
      object[iteratee[it]] = it
    })
    return object
  }

}
