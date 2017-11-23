// Generated by dart2js, the Dart to JavaScript compiler version: 1.24.2.
// The code supports the following hooks:
// dartPrint(message):
//    if this function is defined it is called instead of the Dart [print]
//    method.
//
// dartMainRunner(main, args):
//    if this function is defined, the Dart [main] method will not be invoked
//    directly. Instead, a closure that will invoke [main], and its arguments
//    [args] is passed to [dartMainRunner].
//
// dartDeferredLibraryLoader(uri, successCallback, errorCallback):
//    if this function is defined, it will be called when a deferred library
//    is loaded. It should load and eval the javascript of `uri`, and call
//    successCallback. If it fails to do so, it should call errorCallback with
//    an error.
//
// defaultPackagesBase:
//    Override the location where `package:` uris are resolved from. By default
//    they are resolved under "packages/" from the current window location.
(function() {
  // /* ::norenaming:: */
  var supportsDirectProtoAccess = function() {
    var cls = function() {
    };
    cls.prototype = {p: {}};
    var object = new cls();
    if (!(object.__proto__ && object.__proto__.p === cls.prototype.p))
      return false;
    try {
      if (typeof navigator != "undefined" && typeof navigator.userAgent == "string" && navigator.userAgent.indexOf("Chrome/") >= 0)
        return true;
      if (typeof version == "function" && version.length == 0) {
        var v = version();
        if (/^\d+\.\d+\.\d+\.\d+$/.test(v))
          return true;
      }
    } catch (_) {
    }
    return false;
  }();
  function map(x) {
    x = Object.create(null);
    x.x = 0;
    delete x.x;
    return x;
  }
  // The global objects start as so-called "slow objects". For V8, this
  // means that it won't try to make map transitions as we add properties
  // to these objects. Later on, we attempt to turn these objects into
  // fast objects by calling "convertToFastObject" (see
  // [emitConvertToFastObjectFunction]).
  var A = map();
  var B = map();
  var C = map();
  var D = map();
  var E = map();
  var F = map();
  var G = map();
  var H = map();
  var J = map();
  var K = map();
  var L = map();
  var M = map();
  var N = map();
  var O = map();
  var P = map();
  var Q = map();
  var R = map();
  var S = map();
  var T = map();
  var U = map();
  var V = map();
  var W = map();
  var X = map();
  var Y = map();
  var Z = map();
  function Isolate() {
  }
  init();
  // Constructors are generated at runtime.
  function setupProgram(programData, typesOffset) {
    "use strict";
    function generateAccessor(fieldDescriptor, accessors, cls) {
      var fieldInformation = fieldDescriptor.split("-");
      var field = fieldInformation[0];
      var len = field.length;
      var code = field.charCodeAt(len - 1);
      var reflectable;
      if (fieldInformation.length > 1)
        reflectable = true;
      else
        reflectable = false;
      code = code >= 60 && code <= 64 ? code - 59 : code >= 123 && code <= 126 ? code - 117 : code >= 37 && code <= 43 ? code - 27 : 0;
      if (code) {
        var getterCode = code & 3;
        var setterCode = code >> 2;
        var accessorName = field = field.substring(0, len - 1);
        var divider = field.indexOf(":");
        if (divider > 0) {
          accessorName = field.substring(0, divider);
          field = field.substring(divider + 1);
        }
        if (getterCode) {
          var args = getterCode & 2 ? "receiver" : "";
          var receiver = getterCode & 1 ? "this" : "receiver";
          var body = "return " + receiver + "." + field;
          var property = cls + ".prototype.get$" + accessorName + "=";
          var fn = "function(" + args + "){" + body + "}";
          if (reflectable)
            accessors.push(property + "$reflectable(" + fn + ");\n");
          else
            accessors.push(property + fn + ";\n");
        }
        if (setterCode) {
          var args = setterCode & 2 ? "receiver, value" : "value";
          var receiver = setterCode & 1 ? "this" : "receiver";
          var body = receiver + "." + field + " = value";
          var property = cls + ".prototype.set$" + accessorName + "=";
          var fn = "function(" + args + "){" + body + "}";
          if (reflectable)
            accessors.push(property + "$reflectable(" + fn + ");\n");
          else
            accessors.push(property + fn + ";\n");
        }
      }
      return field;
    }
    function defineClass(name, fields) {
      var accessors = [];
      var str = "function " + name + "(";
      var body = "";
      for (var i = 0; i < fields.length; i++) {
        if (i != 0)
          str += ", ";
        var field = generateAccessor(fields[i], accessors, name);
        var parameter = "p_" + field;
        str += parameter;
        body += "this." + field + " = " + parameter + ";\n";
      }
      if (supportsDirectProtoAccess)
        body += "this." + "$deferredAction" + "();";
      str += ") {\n" + body + "}\n";
      str += name + ".builtin$cls=\"" + name + "\";\n";
      str += "$desc=$collectedClasses." + name + "[1];\n";
      str += name + ".prototype = $desc;\n";
      if (typeof defineClass.name != "string")
        str += name + ".name=\"" + name + "\";\n";
      str += accessors.join("");
      return str;
    }
    var inheritFrom = supportsDirectProtoAccess ? function(constructor, superConstructor) {
      var prototype = constructor.prototype;
      prototype.__proto__ = superConstructor.prototype;
      prototype.constructor = constructor;
      prototype["$is" + constructor.name] = constructor;
      return convertToFastObject(prototype);
    } : function() {
      function tmp() {
      }
      return function(constructor, superConstructor) {
        tmp.prototype = superConstructor.prototype;
        var object = new tmp();
        convertToSlowObject(object);
        var properties = constructor.prototype;
        var members = Object.keys(properties);
        for (var i = 0; i < members.length; i++) {
          var member = members[i];
          object[member] = properties[member];
        }
        object["$is" + constructor.name] = constructor;
        object.constructor = constructor;
        constructor.prototype = object;
        return object;
      };
    }();
    function finishClasses(processedClasses) {
      var allClasses = init.allClasses;
      processedClasses.combinedConstructorFunction += "return [\n" + processedClasses.constructorsList.join(",\n  ") + "\n]";
      var constructors = new Function("$collectedClasses", processedClasses.combinedConstructorFunction)(processedClasses.collected);
      processedClasses.combinedConstructorFunction = null;
      for (var i = 0; i < constructors.length; i++) {
        var constructor = constructors[i];
        var cls = constructor.name;
        var desc = processedClasses.collected[cls];
        var globalObject = desc[0];
        desc = desc[1];
        allClasses[cls] = constructor;
        globalObject[cls] = constructor;
      }
      constructors = null;
      var finishedClasses = init.finishedClasses;
      function finishClass(cls) {
        if (finishedClasses[cls])
          return;
        finishedClasses[cls] = true;
        var superclass = processedClasses.pending[cls];
        if (!superclass || typeof superclass != "string") {
          var constructor = allClasses[cls];
          var prototype = constructor.prototype;
          prototype.constructor = constructor;
          prototype.$isObject = constructor;
          prototype.$deferredAction = function() {
          };
          return;
        }
        finishClass(superclass);
        var superConstructor = allClasses[superclass];
        if (!superConstructor)
          superConstructor = existingIsolateProperties[superclass];
        var constructor = allClasses[cls];
        var prototype = inheritFrom(constructor, superConstructor);
        if (prototype.$isInterceptor)
          prototype.$deferredAction();
      }
      var properties = Object.keys(processedClasses.pending);
      for (var i = 0; i < properties.length; i++)
        finishClass(properties[i]);
    }
    function finishAddStubsHelper() {
      var prototype = this;
      while (!prototype.hasOwnProperty("$deferredAction"))
        prototype = prototype.__proto__;
      delete prototype.$deferredAction;
      var properties = Object.keys(prototype);
      for (var index = 0; index < properties.length; index++) {
        var property = properties[index];
        var firstChar = property.charCodeAt(0);
        var elem;
        if (property !== "^" && property !== "$reflectable" && firstChar !== 43 && firstChar !== 42 && (elem = prototype[property]) != null && elem.constructor === Array && property !== "<>")
          addStubs(prototype, elem, property, false, []);
      }
      convertToFastObject(prototype);
      prototype = prototype.__proto__;
      prototype.$deferredAction();
    }
    function processClassData(cls, descriptor, processedClasses) {
      descriptor = convertToSlowObject(descriptor);
      var previousProperty;
      var properties = Object.keys(descriptor);
      var hasDeferredWork = false;
      var shouldDeferWork = supportsDirectProtoAccess && cls != "Object";
      for (var i = 0; i < properties.length; i++) {
        var property = properties[i];
        var firstChar = property.charCodeAt(0);
        if (property === "static") {
          processStatics(init.statics[cls] = descriptor.static, processedClasses);
          delete descriptor.static;
        } else if (firstChar === 43) {
          mangledNames[previousProperty] = property.substring(1);
          var flag = descriptor[property];
          if (flag > 0)
            descriptor[previousProperty].$reflectable = flag;
        } else if (firstChar === 42) {
          descriptor[previousProperty].$defaultValues = descriptor[property];
          var optionalMethods = descriptor.$methodsWithOptionalArguments;
          if (!optionalMethods)
            descriptor.$methodsWithOptionalArguments = optionalMethods = {};
          optionalMethods[property] = previousProperty;
        } else {
          var elem = descriptor[property];
          if (property !== "^" && elem != null && elem.constructor === Array && property !== "<>")
            if (shouldDeferWork)
              hasDeferredWork = true;
            else
              addStubs(descriptor, elem, property, false, []);
          else
            previousProperty = property;
        }
      }
      if (hasDeferredWork)
        descriptor.$deferredAction = finishAddStubsHelper;
      var classData = descriptor["^"], split, supr, fields = classData;
      var s = fields.split(";");
      fields = s[1] ? s[1].split(",") : [];
      supr = s[0];
      split = supr.split(":");
      if (split.length == 2) {
        supr = split[0];
        var functionSignature = split[1];
        if (functionSignature)
          descriptor.$signature = function(s) {
            return function() {
              return init.types[s];
            };
          }(functionSignature);
      }
      if (supr)
        processedClasses.pending[cls] = supr;
      processedClasses.combinedConstructorFunction += defineClass(cls, fields);
      processedClasses.constructorsList.push(cls);
      processedClasses.collected[cls] = [globalObject, descriptor];
      classes.push(cls);
    }
    function processStatics(descriptor, processedClasses) {
      var properties = Object.keys(descriptor);
      for (var i = 0; i < properties.length; i++) {
        var property = properties[i];
        if (property === "^")
          continue;
        var element = descriptor[property];
        var firstChar = property.charCodeAt(0);
        var previousProperty;
        if (firstChar === 43) {
          mangledGlobalNames[previousProperty] = property.substring(1);
          var flag = descriptor[property];
          if (flag > 0)
            descriptor[previousProperty].$reflectable = flag;
          if (element && element.length)
            init.typeInformation[previousProperty] = element;
        } else if (firstChar === 42) {
          globalObject[previousProperty].$defaultValues = element;
          var optionalMethods = descriptor.$methodsWithOptionalArguments;
          if (!optionalMethods)
            descriptor.$methodsWithOptionalArguments = optionalMethods = {};
          optionalMethods[property] = previousProperty;
        } else if (typeof element === "function") {
          globalObject[previousProperty = property] = element;
          functions.push(property);
          init.globalFunctions[property] = element;
        } else if (element.constructor === Array) {
        } else {
          previousProperty = property;
          processClassData(property, element, processedClasses);
        }
      }
    }
    var functionCounter = 0;
    if (!init.libraries)
      init.libraries = [];
    if (!init.mangledNames)
      init.mangledNames = map();
    if (!init.mangledGlobalNames)
      init.mangledGlobalNames = map();
    if (!init.statics)
      init.statics = map();
    if (!init.typeInformation)
      init.typeInformation = map();
    if (!init.globalFunctions)
      init.globalFunctions = map();
    var libraries = init.libraries;
    var mangledNames = init.mangledNames;
    var mangledGlobalNames = init.mangledGlobalNames;
    var hasOwnProperty = Object.prototype.hasOwnProperty;
    var length = programData.length;
    var processedClasses = map();
    processedClasses.collected = map();
    processedClasses.pending = map();
    processedClasses.constructorsList = [];
    processedClasses.combinedConstructorFunction = "function $reflectable(fn){fn.$reflectable=1;return fn};\n" + "var $desc;\n";
    for (var i = 0; i < length; i++) {
      var data = programData[i];
      var name = data[0];
      var uri = data[1];
      var metadata = data[2];
      var globalObject = data[3];
      var descriptor = data[4];
      var isRoot = !!data[5];
      var fields = descriptor && descriptor["^"];
      if (fields instanceof Array)
        fields = fields[0];
      var classes = [];
      var functions = [];
      processStatics(descriptor, processedClasses);
      libraries.push([name, uri, classes, functions, metadata, fields, isRoot, globalObject]);
    }
    finishClasses(processedClasses);
  }
  Isolate.functionThatReturnsNull = function() {
  };
  var dart = [["_foreign_helper", "dart:_foreign_helper",, H, {
    "^": "",
    JS_CONST: {
      "^": "Object;code"
    }
  }], ["_interceptors", "dart:_interceptors",, J, {
    "^": "",
    getInterceptor: function(object) {
      return void 0;
    },
    Interceptor: {
      "^": "Object;",
      toString$0: function(receiver) {
        return H.Primitives_objectToHumanReadableString(receiver);
      }
    },
    JSBool: {
      "^": "Interceptor;",
      toString$0: function(receiver) {
        return String(receiver);
      },
      $isbool: 1
    },
    JSNull: {
      "^": "Interceptor;",
      toString$0: function(receiver) {
        return "null";
      }
    },
    JSArray: {
      "^": "Interceptor;",
      toString$0: function(receiver) {
        return P.IterableBase_iterableToFullString(receiver, "[", "]");
      },
      get$length: function(receiver) {
        return receiver.length;
      }
    },
    JSUnmodifiableArray: {
      "^": "JSArray;"
    },
    ArrayIterator: {
      "^": "Object;_iterable,_length,_index,_current",
      moveNext$0: function() {
        var t1, $length, t2;
        t1 = this._iterable;
        $length = t1.length;
        if (this._length !== $length)
          throw H.wrapException(H.throwConcurrentModificationError(t1));
        t2 = this._index;
        if (t2 >= $length) {
          this._current = null;
          return false;
        }
        this._current = t1[t2];
        this._index = t2 + 1;
        return true;
      }
    },
    JSNumber: {
      "^": "Interceptor;",
      toString$0: function(receiver) {
        if (receiver === 0 && 1 / receiver < 0)
          return "-0.0";
        else
          return "" + receiver;
      },
      $isnum: 1
    },
    JSInt: {
      "^": "JSNumber;",
      $isnum: 1,
      $isint: 1
    },
    JSDouble: {
      "^": "JSNumber;",
      $isnum: 1
    },
    JSString: {
      "^": "Interceptor;",
      _codeUnitAt$1: function(receiver, index) {
        if (index >= receiver.length)
          throw H.wrapException(H.diagnoseIndexError(receiver, index));
        return receiver.charCodeAt(index);
      },
      substring$2: function(receiver, startIndex, endIndex) {
        if (endIndex == null)
          endIndex = receiver.length;
        if (startIndex > endIndex)
          throw H.wrapException(P.RangeError$value(startIndex, null, null));
        if (endIndex > receiver.length)
          throw H.wrapException(P.RangeError$value(endIndex, null, null));
        return receiver.substring(startIndex, endIndex);
      },
      substring$1: function($receiver, startIndex) {
        return this.substring$2($receiver, startIndex, null);
      },
      toString$0: function(receiver) {
        return receiver;
      },
      get$length: function(receiver) {
        return receiver.length;
      },
      $isString: 1
    }
  }], ["_js_helper", "dart:_js_helper",, H, {
    "^": "",
    S: function(value) {
      var res;
      if (typeof value === "string")
        return value;
      if (typeof value === "number") {
        if (value !== 0)
          return "" + value;
      } else if (true === value)
        return "true";
      else if (false === value)
        return "false";
      else if (value == null)
        return "null";
      res = J.toString$0$(value);
      if (typeof res !== "string")
        throw H.wrapException(H.argumentErrorValue(value));
      return res;
    },
    Primitives_objectTypeName: function(object) {
      var interceptor, interceptorConstructor, interceptorConstructorName, $name, dispatchName, objectConstructor, match, decompiledName;
      interceptor = J.getInterceptor(object);
      interceptorConstructor = interceptor.constructor;
      if (typeof interceptorConstructor == "function") {
        interceptorConstructorName = interceptorConstructor.name;
        $name = typeof interceptorConstructorName === "string" ? interceptorConstructorName : null;
      } else
        $name = null;
      if ($name == null || interceptor === C.Interceptor_methods || false) {
        dispatchName = C.JS_CONST_u2C(object);
        if (dispatchName === "Object") {
          objectConstructor = object.constructor;
          if (typeof objectConstructor == "function") {
            match = String(objectConstructor).match(/^\s*function\s*([\w$]*)\s*\(/);
            decompiledName = match == null ? null : match[1];
            if (typeof decompiledName === "string" && /^\w+$/.test(decompiledName))
              $name = decompiledName;
          }
          if ($name == null)
            $name = dispatchName;
        } else
          $name = dispatchName;
      }
      $name = $name;
      if ($name.length > 1 && C.JSString_methods._codeUnitAt$1($name, 0) === 36)
        $name = C.JSString_methods.substring$1($name, 1);
      return function(str, names) {
        return str.replace(/[^<,> ]+/g, function(m) {
          return names[m] || m;
        });
      }($name + H.joinArguments(H.getRuntimeTypeInfo(object), 0, null), init.mangledGlobalNames);
    },
    Primitives_objectToHumanReadableString: function(object) {
      return "Instance of '" + H.Primitives_objectTypeName(object) + "'";
    },
    ioore: function(receiver, index) {
      if (receiver == null)
        J.get$length$as(receiver);
      throw H.wrapException(H.diagnoseIndexError(receiver, index));
    },
    diagnoseIndexError: function(indexable, index) {
      var $length;
      if (typeof index !== "number" || Math.floor(index) !== index)
        return new P.ArgumentError(true, index, "index", null);
      $length = J.get$length$as(indexable);
      if (index < 0 || index >= $length)
        return P.IndexError$(index, indexable, "index", null, $length);
      return P.RangeError$value(index, "index", null);
    },
    argumentErrorValue: function(object) {
      return new P.ArgumentError(true, object, null, null);
    },
    wrapException: function(ex) {
      var wrapper;
      if (ex == null)
        ex = new P.NullThrownError();
      wrapper = new Error();
      wrapper.dartException = ex;
      if ("defineProperty" in Object) {
        Object.defineProperty(wrapper, "message", {get: H.toStringWrapper});
        wrapper.name = "";
      } else
        wrapper.toString = H.toStringWrapper;
      return wrapper;
    },
    toStringWrapper: function() {
      return J.toString$0$(this.dartException);
    },
    throwExpression: function(ex) {
      throw H.wrapException(ex);
    },
    throwConcurrentModificationError: function(collection) {
      throw H.wrapException(new P.ConcurrentModificationError(collection));
    },
    throwCyclicInit: function(staticName) {
      throw H.wrapException(new P.CyclicInitializationError(staticName));
    },
    createRuntimeType: function($name) {
      return new H.TypeImpl($name, null);
    },
    getRuntimeTypeInfo: function(target) {
      if (target == null)
        return;
      return target.$ti;
    },
    runtimeTypeToString: function(rti, onTypeVariable) {
      var typedefInfo;
      if (rti == null)
        return "dynamic";
      if (typeof rti === "object" && rti !== null && rti.constructor === Array)
        return rti[0].builtin$cls + H.joinArguments(rti, 1, onTypeVariable);
      if (typeof rti == "function")
        return rti.builtin$cls;
      if (typeof rti === "number" && Math.floor(rti) === rti)
        return H.S(rti);
      if (typeof rti.func != "undefined") {
        typedefInfo = rti.typedef;
        if (typedefInfo != null)
          return H.runtimeTypeToString(typedefInfo, onTypeVariable);
        return H._functionRtiToString(rti, onTypeVariable);
      }
      return "unknown-reified-type";
    },
    _functionRtiToString: function(rti, onTypeVariable) {
      var returnTypeText, $arguments, t1, argumentsText, sep, _i, argument, optionalArguments, namedArguments, t2, $name;
      returnTypeText = !!rti.v ? "void" : H.runtimeTypeToString(rti.ret, onTypeVariable);
      if ("args" in rti) {
        $arguments = rti.args;
        for (t1 = $arguments.length, argumentsText = "", sep = "", _i = 0; _i < t1; ++_i, sep = ", ") {
          argument = $arguments[_i];
          argumentsText = argumentsText + sep + H.runtimeTypeToString(argument, onTypeVariable);
        }
      } else {
        argumentsText = "";
        sep = "";
      }
      if ("opt" in rti) {
        optionalArguments = rti.opt;
        argumentsText += sep + "[";
        for (t1 = optionalArguments.length, sep = "", _i = 0; _i < t1; ++_i, sep = ", ") {
          argument = optionalArguments[_i];
          argumentsText = argumentsText + sep + H.runtimeTypeToString(argument, onTypeVariable);
        }
        argumentsText += "]";
      }
      if ("named" in rti) {
        namedArguments = rti.named;
        argumentsText += sep + "{";
        for (t1 = H.extractKeys(namedArguments), t2 = t1.length, sep = "", _i = 0; _i < t2; ++_i, sep = ", ") {
          $name = t1[_i];
          argumentsText = argumentsText + sep + H.runtimeTypeToString(namedArguments[$name], onTypeVariable) + (" " + H.S($name));
        }
        argumentsText += "}";
      }
      return "(" + argumentsText + ") => " + returnTypeText;
    },
    joinArguments: function(types, startIndex, onTypeVariable) {
      var buffer, index, firstArgument, allDynamic, t1, argument;
      if (types == null)
        return "";
      buffer = new P.StringBuffer("");
      for (index = startIndex, firstArgument = true, allDynamic = true, t1 = ""; index < types.length; ++index) {
        if (firstArgument)
          firstArgument = false;
        else
          buffer._contents = t1 + ", ";
        argument = types[index];
        if (argument != null)
          allDynamic = false;
        t1 = buffer._contents += H.runtimeTypeToString(argument, onTypeVariable);
      }
      return allDynamic ? "" : "<" + buffer.toString$0(0) + ">";
    },
    TypeImpl: {
      "^": "Object;_typeName,_unmangledName",
      toString$0: function(_) {
        var t1, unmangledName;
        t1 = this._unmangledName;
        if (t1 != null)
          return t1;
        unmangledName = function(str, names) {
          return str.replace(/[^<,> ]+/g, function(m) {
            return names[m] || m;
          });
        }(this._typeName, init.mangledGlobalNames);
        this._unmangledName = unmangledName;
        return unmangledName;
      }
    }
  }], ["dart._js_names", "dart:_js_names",, H, {
    "^": "",
    extractKeys: function(victim) {
      var t1 = victim ? Object.keys(victim) : [];
      t1.fixed$length = Array;
      return t1;
    }
  }], ["dart.collection", "dart:collection",, P, {
    "^": "",
    IterableBase_iterableToFullString: function(iterable, leftDelimiter, rightDelimiter) {
      var buffer, t1, t2;
      if (P._isToStringVisiting(iterable))
        return leftDelimiter + "..." + rightDelimiter;
      buffer = new P.StringBuffer(leftDelimiter);
      t1 = $.$get$_toStringVisiting();
      t1.push(iterable);
      try {
        t2 = buffer;
        t2._contents = P.StringBuffer__writeAll(t2.get$_contents(), iterable, ", ");
      } finally {
        if (0 >= t1.length)
          return H.ioore(t1, -1);
        t1.pop();
      }
      t1 = buffer;
      t1._contents = t1.get$_contents() + rightDelimiter;
      t1 = buffer.get$_contents();
      return t1.charCodeAt(0) == 0 ? t1 : t1;
    },
    _isToStringVisiting: function(o) {
      var i, t1;
      for (i = 0; t1 = $.$get$_toStringVisiting(), i < t1.length; ++i)
        if (o === t1[i])
          return true;
      return false;
    }
  }], ["dart.core", "dart:core",, P, {
    "^": "",
    Error_safeToString: function(object) {
      if (typeof object === "number" || typeof object === "boolean" || null == object)
        return J.toString$0$(object);
      if (typeof object === "string")
        return JSON.stringify(object);
      return P.Error__objectToString(object);
    },
    Error__objectToString: function(object) {
      var t1 = J.getInterceptor(object);
      if (!!t1.$isClosure)
        return t1.toString$0(object);
      return H.Primitives_objectToHumanReadableString(object);
    },
    bool: {
      "^": "Object;",
      toString$0: function(_) {
        return this ? "true" : "false";
      }
    },
    "+bool": 0,
    double: {
      "^": "num;"
    },
    "+double": 0,
    Error: {
      "^": "Object;"
    },
    NullThrownError: {
      "^": "Error;",
      toString$0: function(_) {
        return "Throw of null.";
      }
    },
    ArgumentError: {
      "^": "Error;_hasValue,invalidValue,name,message",
      get$_errorName: function() {
        return "Invalid argument";
      },
      get$_errorExplanation: function() {
        return "";
      },
      toString$0: function(_) {
        var t1, nameString, message, prefix, explanation, errorValue;
        t1 = this.name;
        nameString = t1 != null ? " (" + t1 + ")" : "";
        t1 = this.message;
        message = t1 == null ? "" : ": " + t1;
        prefix = this.get$_errorName() + nameString + message;
        explanation = this.get$_errorExplanation();
        errorValue = P.Error_safeToString(this.invalidValue);
        return prefix + explanation + ": " + H.S(errorValue);
      }
    },
    RangeError: {
      "^": "ArgumentError;start,end,_hasValue,invalidValue,name,message",
      get$_errorName: function() {
        return "RangeError";
      },
      get$_errorExplanation: function() {
        return "";
      },
      static: {
        RangeError$value: function(value, $name, message) {
          return new P.RangeError(null, null, true, value, $name, "Value not in range");
        }
      }
    },
    IndexError: {
      "^": "ArgumentError;indexable,length>,_hasValue,invalidValue,name,message",
      get$_errorName: function() {
        return "RangeError";
      },
      get$_errorExplanation: function() {
        var t1 = this.invalidValue;
        if (typeof t1 !== "number")
          return t1.$lt();
        if (t1 < 0)
          return ": index must not be negative";
        t1 = this.length;
        if (t1 === 0)
          return ": no indices are valid";
        return ": index should be less than " + t1;
      },
      static: {
        IndexError$: function(invalidValue, indexable, $name, message, $length) {
          return new P.IndexError(indexable, $length, true, invalidValue, $name, "Index out of range");
        }
      }
    },
    UnsupportedError: {
      "^": "Error;message",
      toString$0: function(_) {
        return "Unsupported operation: " + this.message;
      }
    },
    ConcurrentModificationError: {
      "^": "Error;modifiedObject",
      toString$0: function(_) {
        var t1 = this.modifiedObject;
        if (t1 == null)
          return "Concurrent modification during iteration.";
        return "Concurrent modification during iteration: " + H.S(P.Error_safeToString(t1)) + ".";
      }
    },
    CyclicInitializationError: {
      "^": "Error;variableName",
      toString$0: function(_) {
        var t1 = this.variableName;
        return t1 == null ? "Reading static variable during its initialization" : "Reading static variable '" + H.S(t1) + "' during its initialization";
      }
    },
    int: {
      "^": "num;"
    },
    "+int": 0,
    List: {
      "^": "Object;"
    },
    "+List": 0,
    Null: {
      "^": "Object;",
      toString$0: function(_) {
        return "null";
      }
    },
    "+Null": 0,
    num: {
      "^": "Object;"
    },
    "+num": 0,
    Object: {
      "^": ";",
      toString$0: function(_) {
        return H.Primitives_objectToHumanReadableString(this);
      },
      toString: function() {
        return this.toString$0(this);
      }
    },
    String: {
      "^": "Object;"
    },
    "+String": 0,
    StringBuffer: {
      "^": "Object;_contents<",
      get$length: function(_) {
        return this._contents.length;
      },
      toString$0: function(_) {
        var t1 = this._contents;
        return t1.charCodeAt(0) == 0 ? t1 : t1;
      },
      static: {
        StringBuffer__writeAll: function(string, objects, separator) {
          var iterator = new J.ArrayIterator(objects, objects.length, 0, null);
          if (!iterator.moveNext$0())
            return string;
          if (separator.length === 0) {
            do
              string += H.S(iterator._current);
            while (iterator.moveNext$0());
          } else {
            string += H.S(iterator._current);
            for (; iterator.moveNext$0();)
              string = string + separator + H.S(iterator._current);
          }
          return string;
        }
      }
    }
  }], ["", "package:angular/src/platform/bootstrap.dart",, O, {
    "^": "",
    bootstrap: function(appComponentType, customProviders) {
      return H.throwExpression(new P.UnsupportedError("Using the 'angular2' transformer is required.\n\nPlease see https://webdev.dartlang.org/angular/tutorial for setup instructions,\nand ensure your 'pubspec.yaml' file is configured to invoke the 'angular2'\ntransformer on your application's entry point."));
    }
  }], ["", "web/main.dart",, F, {
    "^": "",
    main: function() {
      O.bootstrap(C.Type_AppComponent_TyU, null);
    }
  }, 1]];
  setupProgram(dart, 0);
  // getInterceptor methods
  J.getInterceptor = function(receiver) {
    if (typeof receiver == "number") {
      if (Math.floor(receiver) == receiver)
        return J.JSInt.prototype;
      return J.JSDouble.prototype;
    }
    if (typeof receiver == "string")
      return J.JSString.prototype;
    if (receiver == null)
      return J.JSNull.prototype;
    if (typeof receiver == "boolean")
      return J.JSBool.prototype;
    if (receiver.constructor == Array)
      return J.JSArray.prototype;
    return receiver;
  };
  J.getInterceptor$as = function(receiver) {
    if (typeof receiver == "string")
      return J.JSString.prototype;
    if (receiver == null)
      return receiver;
    if (receiver.constructor == Array)
      return J.JSArray.prototype;
    return receiver;
  };
  J.get$length$as = function(receiver) {
    return J.getInterceptor$as(receiver).get$length(receiver);
  };
  J.toString$0$ = function(receiver) {
    return J.getInterceptor(receiver).toString$0(receiver);
  };
  // Output contains no constant list.
  var $ = Isolate.$isolateProperties;
  C.Interceptor_methods = J.Interceptor.prototype;
  C.JSString_methods = J.JSString.prototype;
  C.JS_CONST_u2C = function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
};
  C.Type_AppComponent_TyU = H.createRuntimeType("AppComponent");
  $ = null;
  init.isHunkLoaded = function(hunkHash) {
    return !!$dart_deferred_initializers$[hunkHash];
  };
  init.deferredInitialized = new Object(null);
  init.isHunkInitialized = function(hunkHash) {
    return init.deferredInitialized[hunkHash];
  };
  init.initializeLoadedHunk = function(hunkHash) {
    $dart_deferred_initializers$[hunkHash]($globals$, $);
    init.deferredInitialized[hunkHash] = true;
  };
  init.deferredLibraryUris = {};
  init.deferredLibraryHashes = {};
  // Empty type-to-interceptor map.
  (function(lazies) {
    for (var i = 0; i < lazies.length;) {
      var fieldName = lazies[i++];
      var getterName = lazies[i++];
      var lazyValue = lazies[i++];
      var staticName = lazies[i++];
      Isolate.$lazy(fieldName, getterName, lazyValue, staticName);
    }
  })(["_toStringVisiting", "$get$_toStringVisiting", function() {
    return [];
  }, "_toStringVisiting"]);
  Isolate = Isolate.$finishIsolateConstructor(Isolate);
  $ = new Isolate();
  init.metadata = [];
  init.types = [];
  function convertToFastObject(properties) {
    function MyClass() {
    }
    MyClass.prototype = properties;
    new MyClass();
    return properties;
  }
  function convertToSlowObject(properties) {
    properties.__MAGIC_SLOW_PROPERTY = 1;
    delete properties.__MAGIC_SLOW_PROPERTY;
    return properties;
  }
  A = convertToFastObject(A);
  B = convertToFastObject(B);
  C = convertToFastObject(C);
  D = convertToFastObject(D);
  E = convertToFastObject(E);
  F = convertToFastObject(F);
  G = convertToFastObject(G);
  H = convertToFastObject(H);
  J = convertToFastObject(J);
  K = convertToFastObject(K);
  L = convertToFastObject(L);
  M = convertToFastObject(M);
  N = convertToFastObject(N);
  O = convertToFastObject(O);
  P = convertToFastObject(P);
  Q = convertToFastObject(Q);
  R = convertToFastObject(R);
  S = convertToFastObject(S);
  T = convertToFastObject(T);
  U = convertToFastObject(U);
  V = convertToFastObject(V);
  W = convertToFastObject(W);
  X = convertToFastObject(X);
  Y = convertToFastObject(Y);
  Z = convertToFastObject(Z);
  function init() {
    Isolate.$isolateProperties = Object.create(null);
    init.allClasses = map();
    init.getTypeFromName = function(name) {
      return init.allClasses[name];
    };
    init.interceptorsByTag = map();
    init.leafTags = map();
    init.finishedClasses = map();
    Isolate.$lazy = function(fieldName, getterName, lazyValue, staticName, prototype) {
      if (!init.lazies)
        init.lazies = Object.create(null);
      init.lazies[fieldName] = getterName;
      prototype = prototype || Isolate.$isolateProperties;
      var sentinelUndefined = {};
      var sentinelInProgress = {};
      prototype[fieldName] = sentinelUndefined;
      prototype[getterName] = function() {
        var result = this[fieldName];
        if (result == sentinelInProgress)
          H.throwCyclicInit(staticName || fieldName);
        try {
          if (result === sentinelUndefined) {
            this[fieldName] = sentinelInProgress;
            try {
              result = this[fieldName] = lazyValue();
            } finally {
              if (result === sentinelUndefined)
                this[fieldName] = null;
            }
          }
          return result;
        } finally {
          this[getterName] = function() {
            return this[fieldName];
          };
        }
      };
    };
    Isolate.$finishIsolateConstructor = function(oldIsolate) {
      var isolateProperties = oldIsolate.$isolateProperties;
      function Isolate() {
        var staticNames = Object.keys(isolateProperties);
        for (var i = 0; i < staticNames.length; i++) {
          var staticName = staticNames[i];
          this[staticName] = isolateProperties[staticName];
        }
        var lazies = init.lazies;
        var lazyInitializers = lazies ? Object.keys(lazies) : [];
        for (var i = 0; i < lazyInitializers.length; i++)
          this[lazies[lazyInitializers[i]]] = null;
        function ForceEfficientMap() {
        }
        ForceEfficientMap.prototype = this;
        new ForceEfficientMap();
        for (var i = 0; i < lazyInitializers.length; i++) {
          var lazyInitName = lazies[lazyInitializers[i]];
          this[lazyInitName] = isolateProperties[lazyInitName];
        }
      }
      Isolate.prototype = oldIsolate.prototype;
      Isolate.prototype.constructor = Isolate;
      Isolate.$isolateProperties = isolateProperties;
      Isolate.functionThatReturnsNull = oldIsolate.functionThatReturnsNull;
      return Isolate;
    };
  }
  // BEGIN invoke [main].
  (function(callback) {
    if (typeof document === "undefined") {
      callback(null);
      return;
    }
    if (typeof document.currentScript != 'undefined') {
      callback(document.currentScript);
      return;
    }
    var scripts = document.scripts;
    function onLoad(event) {
      for (var i = 0; i < scripts.length; ++i)
        scripts[i].removeEventListener("load", onLoad, false);
      callback(event.target);
    }
    for (var i = 0; i < scripts.length; ++i)
      scripts[i].addEventListener("load", onLoad, false);
  })(function(currentScript) {
    init.currentScript = currentScript;
    if (typeof dartMainRunner === "function")
      dartMainRunner(F.main, []);
    else
      F.main([]);
  });
  // END invoke [main].
})();

//# sourceMappingURL=out.js.map
