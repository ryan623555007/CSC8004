function validate(){
    var form=document.querySelector('form')  //表单元素

    //问题
    var QInfro=document.getElementById('UserInfo')
    var Q1=document.getElementById('Q1')
    var Q2=document.getElementById('Q2')
    var Q3=document.getElementById('Q3')
    var Q4=document.getElementById('Q4')
    //答案
    var AInfro=form.UserInfo.value
    var A1=form.Q1.value
    var A2a=form.Q2a.checked
    var A2b=form.Q2b.checked
    var A2c=form.Q2c.checked
    var A2d=form.Q2d.checked
    var A3=form.Q3.value
    var A4=form.Q4.value

    //空输入检查
    if(AInfro.replace(' ','')===''){
        QInfro.style.backgroundColor="yellow"
        alert('Please enter your name')
        return false
    }else{
        QInfro.style.backgroundColor="white"
    }

    if(A1===''){
        Q1.style.backgroundColor="yellow"
        alert('Please complete question 1')
        return false
    }else{
        Q1.style.backgroundColor="white"
    }

    if(!A2a&&!A2b&&!A2c&&!A2d){
        Q2.style.backgroundColor="yellow"
        alert('Please complete question 2')
        return false
    }else{
        Q2.style.backgroundColor="white"

    }

    if(A3===''){
        Q3.style.backgroundColor="yellow"
        alert('Please complete question 3')
        return false
    }else{
        Q3.style.backgroundColor="white"

    }

    if(A4===''){
        Q4.style.backgroundColor="yellow"
        alert('Please complete question 4')
        return false
    }else{
        Q4.style.backgroundColor="white"
    }

    //确保问题2只选了两个答案
    if(twoTrueInFour(A2a,A2b,A2c,A2d)){
        Q2.style.backgroundColor="white"
    }else{
        Q2.style.backgroundColor="yellow"
        alert('You only can choose two answers in question 2')
        return false
    }

    function twoTrueInFour(a,b,c,d){
        if(!a&&!b&&c&&d) return true
        if(!a&&b&&!c&&d) return true
        if(!a&&b&&c&&!d) return true
        if(a&&!b&&!c&&d) return true
        if(a&&!b&&c&&!d) return true
        if(a&&b&&!c&&!d) return true
        return false
    }

    var score=0
    //显示得分
    if(A1==='c') score++
    if(A2a) score++
    if(A2c) score++
    if(A3==='b') score++
    if(A4.toLowerCase()==='british,australian and new zealand sign language') score++
    var str="Your score:"+score
    alert(str)
    return true

}



