function isPalindrome(num){
    num=b
    answer=[]
    for(a=0;a<num.toString().lendth();a++){
        num/=num.toString().lendth()-a+1
        num=Math.floor(num)
        num*=num.toString().lendth()
        answer.push(b)
    }
    if(answer=answer.reverse){
        return true
    }
    else{
        return false
    }
}
console.log(isPalindrome(2012))