//继承二
function my(name,age){
    console.log('my')
    this.name=name;
    this.age=age;

    this.run=function(){
        console.log('run');
        console.log('name:'+name+',age:'+age);
    }
}

function you(){
    console.log('you')
    console.log(arguments);
    var args=arguments;

    // my.call(this,args[0],args[1]);
    my.apply(this,arguments);
}

var my1=new my('suger',31);
my1.run();

var my2=new you('suger',31);
my2.run();
