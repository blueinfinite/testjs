
//继承一
function base(name){
    console.log('base')
    this.name=name;
}

base.prototype.run=function(){
    console.log('base.run')
    console.log('name='+this.name)
}


var t1=new base('a1')
t1.run()

function my(name){
    console.log('my')
    this.name=name;
}

my.prototype=new base();
var t2=new my('b2');
t2.run();
