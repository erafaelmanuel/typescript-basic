//implicit
var a: number;
var b: string;
var c: boolean;
var d: number|string;

a = 5;
b = "foo"
c = true;
d = 1;
d = "1";

//explicit
var e  = 10;
var f = "justString";
var g = false;

//none typing
var h;
var i;

h = 10;
h = "tai";

i = false ? c : g;