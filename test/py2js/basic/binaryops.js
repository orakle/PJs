/*** File generated by PJs http://jaredforsyth.com/projects/pjs ***/

// from source file /home/jared/clone/pjs/test/py2js/basic/binaryops.py

load("./build/pjslib.js");
var console = {log:function(){print.apply(this, arguments);}};
module('/home/jared/clone/pjs/test/py2js/basic/binaryops.py', function (_) {
    _.__doc__ = "";
    _.x = 1;
    _.y = 2;
    _.z = 3;
    $b.print($b.mod(10, _.z));//, true
    $b.print($b.mult(_.y, _.x));//, true
    $b.print($b.sub(_.y, _.z));//, true
    $b.print($b.add($b.add(_.y, _.x), _.z));//, true
    $b.print($b.div(10, 2));//, true
    $b.print($b.pow(10, 2));//, true
});

__builtins__.__import__('sys').argv = __builtins__.list(arguments);
__builtins__.run_main('/home/jared/clone/pjs/test/py2js/basic/binaryops.py', ['/home/jared/clone/pjs', '/home/jared/clone/pjs', '/home/jared/python', '/usr/lib/python2.6', '/usr/lib/python2.6/plat-linux2', '/usr/lib/python2.6/lib-tk', '/usr/lib/python2.6/lib-old', '/usr/lib/python2.6/lib-dynload', '/usr/lib/python2.6/dist-packages', '/usr/lib/python2.6/dist-packages/PIL', '/usr/lib/python2.6/dist-packages/gst-0.10', '/usr/lib/pymodules/python2.6', '/usr/lib/python2.6/dist-packages/gtk-2.0', '/usr/lib/pymodules/python2.6/gtk-2.0', '/usr/local/lib/python2.6/dist-packages']);
