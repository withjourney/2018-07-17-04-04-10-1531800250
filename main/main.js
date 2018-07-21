module.exports = function main() {
    let sequence = new Sequence([6, 9, 15, -2, 92, 11]);
    console.log(`o) 最小值 = ${sequence.minimum()}`);
	
// Write your code here
	console.log(`o) 最小值 = ${sequence.max()}`);
	console.log(`o) 元素数量 = ${sequence.length()}`);
	console.log(`o) 平均值 = ${sequence.average().toFixed(2)}`);

};

class Sequence {
  constructor(input) {
    // Write your code here
      this.input = input;
  }

  minimum() {
    return Math.min.apply(null, this.input);
  }
    
  max() {
    return Math.max.apply(null, this.input);
  }
length(){
	return this.input.length;
}
average() {
    var len = this.input.length;
    var sum = 0;
    for(var i = 0;i<len;i++){
        sum +=this.input[i];
    }
    return sum/len;
}
     
}
