/*** File generated by PJs http://jaredforsyth.com/projects/pjs ***/

// from source file /Users/jared/clone/PJs/test/py2js/strings/string_format_i.py

load("pjs/data/pjslib.js");
var console = {log:function(){print.apply(this, arguments);}};
var window  = this;
module('/Users/jared/clone/PJs/test/py2js/strings/string_format_i.py', function (_) {
    _.__doc__ = "";
    _.a = $b._float(1.123456);
    _.b = 10;
    _.c = -30;
    _.d = 34;
    _.e = $b._float(123.456);
    _.f = 19892122;
    _.s = $b.mod($b.str('b=%i'), _.b);
    $b.print(_.s);//, true
    _.s = $b.mod($b.str('b,c,d=%i+%i+%i'), $b.tuple([_.b, _.c, _.d]));
    $b.print(_.s);//, true
    _.s = $b.mod($b.str('b=%(b)i and c=%(c)i and d=%(d)i'), $b.dict([[$b.str('b'), _.b], [$b.str('c'), _.c], [$b.str('d'), _.d]]));
    $b.print(_.s);//, true
    _.s = $b.mod($b.str('e=%020i e=%+i e=%20i e=%-20i (e=%- 20i)'), $b.tuple([_.e, _.e, _.e, _.e, _.e]));
    $b.print(_.s);//, true
});

__builtins__.__import__('sys').argv = __builtins__.list(arguments);
var pjs_main = __builtins__.run_main('/Users/jared/clone/PJs/test/py2js/strings/string_format_i.py', ['/Users/jared/clone/PJs', '/Users/jared/.venv/default/lib/python2.7/site-packages/setuptools-0.6c11-py2.7.egg', '/Users/jared/.venv/default/lib/python2.7/site-packages/pip-1.3-py2.7.egg', '/Users/jared/.venv/default/lib/python2.7/site-packages/readline-6.2.4.1-py2.7-macosx-10.7-intel.egg', '/Users/jared/.venv/default/lib/python27.zip', '/Users/jared/.venv/default/lib/python2.7', '/Users/jared/.venv/default/lib/python2.7/plat-darwin', '/Users/jared/.venv/default/lib/python2.7/plat-mac', '/Users/jared/.venv/default/lib/python2.7/plat-mac/lib-scriptpackages', '/Users/jared/.venv/default/Extras/lib/python', '/Users/jared/.venv/default/lib/python2.7/lib-tk', '/Users/jared/.venv/default/lib/python2.7/lib-old', '/Users/jared/.venv/default/lib/python2.7/lib-dynload', '/System/Library/Frameworks/Python.framework/Versions/2.7/lib/python2.7', '/System/Library/Frameworks/Python.framework/Versions/2.7/lib/python2.7/plat-darwin', '/System/Library/Frameworks/Python.framework/Versions/2.7/lib/python2.7/lib-tk', '/System/Library/Frameworks/Python.framework/Versions/2.7/lib/python2.7/plat-mac', '/System/Library/Frameworks/Python.framework/Versions/2.7/lib/python2.7/plat-mac/lib-scriptpackages', '/Users/jared/.venv/default/lib/python2.7/site-packages']);

