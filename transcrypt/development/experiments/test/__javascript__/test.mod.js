	(function () {
		var __name__ = '__main__';
		var Foo = __class__ ('Foo', [object], {
			__module__: __name__,
		});
		var foo = Foo ();
		foo.bar = 'baz';
		foo.py_name = 'hello';
		foo.py_default = 'world';
		print ((function () {
			var __accu0__ = [];
			var __iterable0__ = dir (foo);
			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
				var x = __iterable0__ [__index0__];
				if (!(x.startswith ('__'))) {
					__accu0__.append (x);
				}
			}
			return __accu0__;
		}) ());
		var foo = function () {
			var kwargs = dict ();
			if (arguments.length) {
				var __ilastarg0__ = arguments.length - 1;
				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
					var __allkwargs0__ = arguments [__ilastarg0__--];
					for (var __attrib0__ in __allkwargs0__) {
						switch (__attrib0__) {
							default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
						}
					}
					delete kwargs.__kwargtrans__;
				}
				var args = tuple ([].slice.apply (arguments).slice (0, __ilastarg0__ + 1));
			}
			else {
				var args = tuple ();
			}
			var py_default = kwargs.py_get ('default', 'bar');
			return py_default;
		};
		print (foo ());
		print (foo (__kwargtrans__ ({py_default: 'Hello World'})));
		__pragma__ ('<all>')
			__all__.Foo = Foo;
			__all__.__name__ = __name__;
			__all__.foo = foo;
		__pragma__ ('</all>')
	}) ();
