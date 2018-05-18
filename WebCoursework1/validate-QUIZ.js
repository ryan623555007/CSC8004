/**
 * @Author XiaoyongSun
 * @version 1.0
 * @returns {boolean}
 */
function validate(){
    var form=document.querySelector('form')

    var UserInfo = document.getElementById("UserInfo");
    var Name = document.getElementsByName("UserInfo")[0].value;
    //question
    // var QInfro=document.getElementById('UserInfo')
    var Q1=document.getElementById('Q1')
    var Q2=document.getElementById('Q2')
    var Q3=document.getElementById('Q3')
    var Q4=document.getElementById('Q4')
    //answer
    // var AInfro=form.UserInfo.value
    var A1=form.Q1.value
    var A2a=form.Q2a.checked
    var A2b=form.Q2b.checked
    var A2c=form.Q2c.checked
    var A2d=form.Q2d.checked
    // var A3=form.Q3.value
    var A4=form.Q4.value
    // console.log(form.Q3[0])
    //check empty
    if(Name==""){
        UserInfo.style.backgroundColor="yellow"
        alert('Please enter your name')
        return false
    }else{
        UserInfo.style.backgroundColor="white"
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

    if(!form.Q3[0].checked&&!form.Q3[1].checked&&!form.Q3[2].checked&&!form.Q3[3].checked){
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

    //alert when choose more than two options
    if(twoTrueInFour(A2a,A2b,A2c,A2d)){
        Q2.style.backgroundColor="white"
    }else{
        Q2.style.backgroundColor="yellow"
        alert('You only can choose two answers in question 2')
        return false
    }
/*
the function judge whether choose two options
 */
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
    //show score
    if(A1==='c') score++
    if(A2a) score++
    if(A2c) score++
    if(form.Q3[1].checked) score++
    if(A4.toLowerCase()==='british,australian and new zealand sign language') score++
    var str="Your score:"+score
    alert(str)
    return true
}

//最多只能点击两个
window.onload=function(){
    var form=document.querySelector('form')  //表单元素
    var A2a=form.Q2a
    var A2b=form.Q2b
    var A2c=form.Q2c
    var A2d=form.Q2d

    if(window.addEventListener){
        console.log('true')
        A2a.addEventListener('click',function(e){

            if(e.target.checked){
                if(twoTrueInThree(A2b.checked,A2c.checked,A2d.checked)){
                    e.target.checked=false
                    e.preventDefault()
                }
            }

        })
        A2b.addEventListener('click',function(e){
            if(e.target.checked){
                if(twoTrueInThree(A2a.checked,A2c.checked,A2d.checked)){
                    e.target.checked=false
                    e.preventDefault()
                }
            }
        })

        A2c.addEventListener('click',function(e){
            if(e.target.checked){
                if(twoTrueInThree(A2a.checked,A2b.checked,A2d.checked)){
                    e.target.checked=false
                    e.preventDefault()
                }
            }
        })

        A2d.addEventListener('click',function(e){
            if(e.target.checked){
                if(twoTrueInThree(A2a.checked,A2b.checked,A2c.checked)){
                    e.target.checked=false
                    e.preventDefault()

                }
            }
        })
    }else{  //兼容IE8的事件
        console.log('false')
        A2a.attachEvent('onclick',function(e){

            if(e.srcElement.checked){
                if(twoTrueInThree(A2b.checked,A2c.checked,A2d.checked)){
                    e.srcElement.checked=false
                    e.returnValue = false
                }
            }

        })
        A2b.attachEvent('onclick',function(e){
            if(e.srcElement.checked){
                if(twoTrueInThree(A2a.checked,A2c.checked,A2d.checked)){
                    e.srcElement.checked=false
                    e.returnValue = false
                }
            }
        })

        A2c.attachEvent('onclick',function(e){
            if(e.srcElement.checked){
                if(twoTrueInThree(A2a.checked,A2b.checked,A2d.checked)){
                    e.srcElement.checked=false
                    e.returnValue = false
                }
            }
        })

        A2d.attachEvent('onclick',function(e){
            if(e.srcElement.checked){
                if(twoTrueInThree(A2a.checked,A2b.checked,A2c.checked)){
                    e.srcElement.checked=false
                    e.returnValue = false

                }
            }
        })
    }


    function twoTrueInThree(a,b,c){
        if(!a&&b&&c) return true
        if(a&&!b&&c) return true
        if(a&&b&&!c) return true
        return false
    }


}
