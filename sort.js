// 1. 冒泡排序
function bubble (arr) {
  for (const i in arr) {
    for (const j in arr) {
      if (arr[i] < arr[j]) {
        [arr[i], arr[j]] = [arr[j], arr[i]]
      }
    }
  }
  return arr
}