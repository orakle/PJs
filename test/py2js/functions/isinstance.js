/*** File generated by PJs http://jaredforsyth.com/projects/pjs ***/

// from source file /home/jared/clone/pjs/test/py2js/functions/isinstance.py

load("build/pjslib.js");
var console = {log:function(){print.apply(this, arguments);}};
var window  = this;
module('/home/jared/clone/pjs/test/py2js/functions/isinstance.py', function (_) {
    _.__doc__ = "";
    _.Spam = Class('Spam', [$b.object], (function(){
        var __0 = {};
        __0.__init__ = $def(function $___init__(self, value) { // 4
            self.value = value;
        });
        __0.__init__.__module__ = _.__name__;
        __0.__init__.__name__ = $b.str("__init__");
        return __0;
    }()));
    _.Spam.__module__ = _.__name__;
    _.Eggs = Class('Eggs', [$b.object], (function(){
        var __0 = {};
        __0.__init__ = $def(function $___init__(self, value) { // 9
            self.value = value;
        });
        __0.__init__.__module__ = _.__name__;
        __0.__init__.__name__ = $b.str("__init__");
        return __0;
    }()));
    _.Eggs.__module__ = _.__name__;
    _.s = _.Spam(1);
    _.e = _.Eggs(2);
    if ($b.bool($b.isinstance(_.s, _.Spam)) === true) {
        $b.print($b.str('s is Spam - correct'));//, true
    }
    if ($b.bool($b.isinstance(_.s, _.Eggs)) === true) {
        $b.print($b.str('s is Eggs - incorrect'));//, true
    }
    if ($b.bool($b.isinstance(_.e, _.Spam)) === true) {
        $b.print($b.str('e is Spam - incorrect'));//, true
    }
    if ($b.bool($b.isinstance(_.e, _.Eggs)) === true) {
        $b.print($b.str('e is Eggs - correct'));//, true
    }
});

__builtins__.__import__('sys').argv = __builtins__.list(arguments);
var pjs_main = __builtins__.run_main('/home/jared/clone/pjs/test/py2js/functions/isinstance.py', ['/home/jared/clone/pjs', '/home/jared/clone/pjs', '/home/jared/python', '/usr/lib/python2.7', '/usr/lib/python2.7/plat-linux2', '/usr/lib/python2.7/lib-tk', '/usr/lib/python2.7/lib-old', '/usr/lib/python2.7/lib-dynload', '/home/jared/.local/lib/python2.7/site-packages', '/usr/local/lib/python2.7/dist-packages', '/usr/lib/python2.7/dist-packages', '/usr/lib/python2.7/dist-packages/PIL', '/usr/lib/python2.7/dist-packages/gst-0.10', '/usr/lib/python2.7/dist-packages/gtk-2.0', '/usr/lib/pymodules/python2.7', '/usr/lib/python2.7/dist-packages/ubuntu-sso-client', '/usr/lib/python2.7/dist-packages/ubuntuone-client', '/usr/lib/python2.7/dist-packages/ubuntuone-control-panel', '/usr/lib/python2.7/dist-packages/ubuntuone-couch', '/usr/lib/python2.7/dist-packages/ubuntuone-storage-protocol']);

