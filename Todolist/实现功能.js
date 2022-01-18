window.onload = function(){
    /* 
        调整一下输入框的一些样式
    */
    //获取输入框对象
    var kuan = document.getElementById("save");
    kuan.onfocus = function(){
        if(kuan.value == ' 添加事件'){
            kuan.value = '';
        }
    }
    kuan.onblur = function(){
        if(kuan.value == ''){
            kuan.value = ' 添加事件';
        }
    }
    /* 
        定义两个空数组用于储存todo和done事项
     */
     var todoArr = [];
     var doneArr = [];
    
     /* 
        获取todo和done列表对象
     */
    var todo = document.getElementById("Todo");
    var done = document.getElementById("Done");

     /* 
        绑定敲击键盘的事件,敲击时执行函数
     */
    document.addEventListener('keyup',listadd);
    function listadd(event){
        if(event.keyCode!==13||save.value===""){
            return;
        }else{
            todoArr.push(save.value);
            todo.innerHTML += '<li><input type="checkbox" name = "chekVal" value = ' + save.value + '/>'+'<span>'+ save.value + '</span><button>X</button></li>'
            save.value='';
            load();
        }

        /* 
            加载页面的函数
        */
       function load(){
           todo.innerHTML = '';
           done.innerHTML = '';

           for(var i=0; i<todoArr.length ; i++){
               todo.innerHTML += '<li index = '+ i +'><input type="checkbox" name = "chekVal" value = ' + todoArr[i] + '/>'+'<span>'+ todoArr[i] + '</span><button>X</button></li>'
           }
           for(var j=0; j<doneArr.length ; j++){
            done.innerHTML += '<li index = '+ j +'><input checked type="checkbox" name = "chekVal" value = ' + doneArr[j] + '/>'+'<span>'+ doneArr[j] + '</span><button>X</button></li>'
           }
       }

     /* 
       点击未完成事项的按钮变为完成事项
     */
    todo.onclick = function(event){
        if(event.target.nodeName ==='INPUT'){
            //记录被点击到的是列表中的第几个事项
            var idx = event.target.parentNode.getAttribute('index');
            //用splice函数删除该事项，并且赋值给last
            var last = todoArr.splice(idx,1);
            //将事项存在未完成事件对应的数组中
            doneArr.push(last);
            load();
        }
        if(event.target.nodeName ==='BUTTON'){
            var idx = event.target.parentNode.getAttribute('index');
            todoArr.splice(idx,1);
            load();
        }
    }
    /* 
        点击完成事项的按钮变为未完成事项
    */
    done.onclick = function(event){
        if(event.target.nodeName ==='INPUT'){
            var idx = event.target.parentNode.getAttribute('index');
            var lasts = doneArr.splice(idx,1);
            todoArr.push(lasts);
            load();
        }
        if(event.target.nodeName ==='BUTTON'){
            var idx = event.target.parentNode.getAttribute('index');
            doneArr.splice(idx,1);
            load();
        }
        
    }


    }
    
}