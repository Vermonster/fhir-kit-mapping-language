// Generated from grammars/js_mapping.g4 by ANTLR 4.7.1
// jshint ignore: start
var antlr4 = require('antlr4/index');


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u00024\u01d8\b\u0001\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004",
    "\u0004\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t",
    "\u0007\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004",
    "\f\t\f\u0004\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010",
    "\t\u0010\u0004\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013",
    "\u0004\u0014\t\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017",
    "\t\u0017\u0004\u0018\t\u0018\u0004\u0019\t\u0019\u0004\u001a\t\u001a",
    "\u0004\u001b\t\u001b\u0004\u001c\t\u001c\u0004\u001d\t\u001d\u0004\u001e",
    "\t\u001e\u0004\u001f\t\u001f\u0004 \t \u0004!\t!\u0004\"\t\"\u0004#",
    "\t#\u0004$\t$\u0004%\t%\u0004&\t&\u0004\'\t\'\u0004(\t(\u0004)\t)\u0004",
    "*\t*\u0004+\t+\u0004,\t,\u0004-\t-\u0004.\t.\u0004/\t/\u00040\t0\u0004",
    "1\t1\u00042\t2\u00043\t3\u00044\t4\u00045\t5\u00046\t6\u00047\t7\u0003",
    "\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0003\u0003\u0003\u0003",
    "\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0005\u0003",
    "\u0005\u0003\u0005\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003",
    "\u0006\u0003\u0006\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003",
    "\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\b\u0003\b\u0003\b\u0003",
    "\b\u0003\b\u0003\b\u0003\t\u0003\t\u0003\n\u0003\n\u0003\u000b\u0003",
    "\u000b\u0003\u000b\u0003\f\u0003\f\u0003\f\u0003\r\u0003\r\u0003\r\u0003",
    "\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003\u000e\u0003\u000e\u0003\u000f",
    "\u0003\u000f\u0003\u0010\u0003\u0010\u0003\u0011\u0003\u0011\u0003\u0012",
    "\u0003\u0012\u0003\u0012\u0003\u0013\u0003\u0013\u0003\u0014\u0003\u0014",
    "\u0003\u0014\u0003\u0015\u0003\u0015\u0003\u0016\u0003\u0016\u0003\u0017",
    "\u0003\u0017\u0003\u0017\u0003\u0017\u0003\u0017\u0003\u0017\u0003\u0017",
    "\u0003\u0017\u0003\u0018\u0003\u0018\u0003\u0018\u0003\u0018\u0003\u0018",
    "\u0003\u0018\u0003\u0019\u0003\u0019\u0003\u0019\u0003\u0019\u0003\u0019",
    "\u0003\u0019\u0003\u001a\u0003\u001a\u0003\u001a\u0003\u001a\u0003\u001b",
    "\u0003\u001b\u0003\u001b\u0003\u001b\u0003\u001b\u0003\u001c\u0003\u001c",
    "\u0003\u001c\u0003\u001c\u0003\u001c\u0003\u001c\u0003\u001d\u0003\u001d",
    "\u0003\u001d\u0003\u001d\u0003\u001d\u0003\u001d\u0003\u001e\u0003\u001e",
    "\u0003\u001e\u0003\u001e\u0003\u001e\u0003\u001e\u0003\u001f\u0003\u001f",
    "\u0003\u001f\u0003\u001f\u0003\u001f\u0003\u001f\u0003\u001f\u0003\u001f",
    "\u0003\u001f\u0003\u001f\u0003 \u0003 \u0003 \u0003 \u0003 \u0003!\u0003",
    "!\u0003!\u0003!\u0003!\u0003!\u0003!\u0003!\u0003!\u0003\"\u0003\"\u0003",
    "\"\u0003\"\u0003\"\u0003\"\u0003\"\u0003\"\u0003\"\u0003#\u0003#\u0003",
    "#\u0003#\u0003#\u0003#\u0003$\u0003$\u0003$\u0003$\u0003$\u0003$\u0003",
    "$\u0003$\u0003%\u0003%\u0003%\u0003%\u0003%\u0003%\u0003%\u0003&\u0003",
    "&\u0003&\u0003&\u0003&\u0003&\u0003&\u0003\'\u0003\'\u0003\'\u0003\'",
    "\u0003\'\u0003\'\u0003\'\u0003\'\u0003(\u0003(\u0003(\u0003(\u0003(",
    "\u0003(\u0003(\u0003(\u0003(\u0003)\u0003)\u0003)\u0003)\u0003)\u0003",
    ")\u0003)\u0003)\u0003)\u0005)\u013e\n)\u0003*\u0003*\u0003*\u0003*\u0003",
    "*\u0003*\u0003*\u0003*\u0003*\u0003*\u0003*\u0003*\u0003*\u0005*\u014d",
    "\n*\u0005*\u014f\n*\u0005*\u0151\n*\u0003*\u0005*\u0154\n*\u0003+\u0003",
    "+\u0003+\u0003+\u0003,\u0003,\u0003,\u0003,\u0003,\u0003,\u0003,\u0003",
    ",\u0003,\u0003,\u0006,\u0164\n,\r,\u000e,\u0165\u0005,\u0168\n,\u0005",
    ",\u016a\n,\u0005,\u016c\n,\u0003,\u0003,\u0003,\u0003,\u0003,\u0003",
    ",\u0003,\u0005,\u0175\n,\u0003-\u0005-\u0178\n-\u0003-\u0007-\u017b",
    "\n-\f-\u000e-\u017e\u000b-\u0003.\u0003.\u0003.\u0007.\u0183\n.\f.\u000e",
    ".\u0186\u000b.\u0003.\u0003.\u0003.\u0003.\u0007.\u018c\n.\f.\u000e",
    ".\u018f\u000b.\u0003.\u0005.\u0192\n.\u0003/\u0003/\u0003/\u0007/\u0197",
    "\n/\f/\u000e/\u019a\u000b/\u0003/\u0003/\u00030\u00060\u019f\n0\r0\u000e",
    "0\u01a0\u00031\u00031\u00031\u00061\u01a6\n1\r1\u000e1\u01a7\u00051",
    "\u01aa\n1\u00032\u00062\u01ad\n2\r2\u000e2\u01ae\u00032\u00032\u0003",
    "3\u00033\u00033\u00033\u00073\u01b7\n3\f3\u000e3\u01ba\u000b3\u0003",
    "3\u00033\u00033\u00033\u00033\u00034\u00034\u00034\u00034\u00074\u01c5",
    "\n4\f4\u000e4\u01c8\u000b4\u00034\u00034\u00035\u00035\u00035\u0005",
    "5\u01cf\n5\u00036\u00036\u00036\u00036\u00036\u00036\u00037\u00037\u0006",
    "\u0184\u018d\u0198\u01b8\u00028\u0003\u0003\u0005\u0004\u0007\u0005",
    "\t\u0006\u000b\u0007\r\b\u000f\t\u0011\n\u0013\u000b\u0015\f\u0017\r",
    "\u0019\u000e\u001b\u000f\u001d\u0010\u001f\u0011!\u0012#\u0013%\u0014",
    "\'\u0015)\u0016+\u0017-\u0018/\u00191\u001a3\u001b5\u001c7\u001d9\u001e",
    ";\u001f= ?!A\"C#E$G%I&K\'M(O)Q*S+U,W\u0002Y-[.]/_0a1c2e3g4i\u0002k\u0002",
    "m\u0002\u0003\u0002\n\u0003\u00022;\u0004\u0002--//\u0005\u0002C\\a",
    "ac|\u0006\u00022;C\\aac|\u0005\u0002\u000b\f\u000f\u000f\"\"\u0004\u0002",
    "\f\f\u000f\u000f\n\u0002$$))11^^hhppttvv\u0005\u00022;CHch\u0002\u01ed",
    "\u0002\u0003\u0003\u0002\u0002\u0002\u0002\u0005\u0003\u0002\u0002\u0002",
    "\u0002\u0007\u0003\u0002\u0002\u0002\u0002\t\u0003\u0002\u0002\u0002",
    "\u0002\u000b\u0003\u0002\u0002\u0002\u0002\r\u0003\u0002\u0002\u0002",
    "\u0002\u000f\u0003\u0002\u0002\u0002\u0002\u0011\u0003\u0002\u0002\u0002",
    "\u0002\u0013\u0003\u0002\u0002\u0002\u0002\u0015\u0003\u0002\u0002\u0002",
    "\u0002\u0017\u0003\u0002\u0002\u0002\u0002\u0019\u0003\u0002\u0002\u0002",
    "\u0002\u001b\u0003\u0002\u0002\u0002\u0002\u001d\u0003\u0002\u0002\u0002",
    "\u0002\u001f\u0003\u0002\u0002\u0002\u0002!\u0003\u0002\u0002\u0002",
    "\u0002#\u0003\u0002\u0002\u0002\u0002%\u0003\u0002\u0002\u0002\u0002",
    "\'\u0003\u0002\u0002\u0002\u0002)\u0003\u0002\u0002\u0002\u0002+\u0003",
    "\u0002\u0002\u0002\u0002-\u0003\u0002\u0002\u0002\u0002/\u0003\u0002",
    "\u0002\u0002\u00021\u0003\u0002\u0002\u0002\u00023\u0003\u0002\u0002",
    "\u0002\u00025\u0003\u0002\u0002\u0002\u00027\u0003\u0002\u0002\u0002",
    "\u00029\u0003\u0002\u0002\u0002\u0002;\u0003\u0002\u0002\u0002\u0002",
    "=\u0003\u0002\u0002\u0002\u0002?\u0003\u0002\u0002\u0002\u0002A\u0003",
    "\u0002\u0002\u0002\u0002C\u0003\u0002\u0002\u0002\u0002E\u0003\u0002",
    "\u0002\u0002\u0002G\u0003\u0002\u0002\u0002\u0002I\u0003\u0002\u0002",
    "\u0002\u0002K\u0003\u0002\u0002\u0002\u0002M\u0003\u0002\u0002\u0002",
    "\u0002O\u0003\u0002\u0002\u0002\u0002Q\u0003\u0002\u0002\u0002\u0002",
    "S\u0003\u0002\u0002\u0002\u0002U\u0003\u0002\u0002\u0002\u0002Y\u0003",
    "\u0002\u0002\u0002\u0002[\u0003\u0002\u0002\u0002\u0002]\u0003\u0002",
    "\u0002\u0002\u0002_\u0003\u0002\u0002\u0002\u0002a\u0003\u0002\u0002",
    "\u0002\u0002c\u0003\u0002\u0002\u0002\u0002e\u0003\u0002\u0002\u0002",
    "\u0002g\u0003\u0002\u0002\u0002\u0003o\u0003\u0002\u0002\u0002\u0005",
    "s\u0003\u0002\u0002\u0002\u0007u\u0003\u0002\u0002\u0002\tz\u0003\u0002",
    "\u0002\u0002\u000b}\u0003\u0002\u0002\u0002\r\u0083\u0003\u0002\u0002",
    "\u0002\u000f\u008b\u0003\u0002\u0002\u0002\u0011\u0091\u0003\u0002\u0002",
    "\u0002\u0013\u0093\u0003\u0002\u0002\u0002\u0015\u0095\u0003\u0002\u0002",
    "\u0002\u0017\u0098\u0003\u0002\u0002\u0002\u0019\u009b\u0003\u0002\u0002",
    "\u0002\u001b\u00a3\u0003\u0002\u0002\u0002\u001d\u00a5\u0003\u0002\u0002",
    "\u0002\u001f\u00a7\u0003\u0002\u0002\u0002!\u00a9\u0003\u0002\u0002",
    "\u0002#\u00ab\u0003\u0002\u0002\u0002%\u00ae\u0003\u0002\u0002\u0002",
    "\'\u00b0\u0003\u0002\u0002\u0002)\u00b3\u0003\u0002\u0002\u0002+\u00b5",
    "\u0003\u0002\u0002\u0002-\u00b7\u0003\u0002\u0002\u0002/\u00bf\u0003",
    "\u0002\u0002\u00021\u00c5\u0003\u0002\u0002\u00023\u00cb\u0003\u0002",
    "\u0002\u00025\u00cf\u0003\u0002\u0002\u00027\u00d4\u0003\u0002\u0002",
    "\u00029\u00da\u0003\u0002\u0002\u0002;\u00e0\u0003\u0002\u0002\u0002",
    "=\u00e6\u0003\u0002\u0002\u0002?\u00f0\u0003\u0002\u0002\u0002A\u00f5",
    "\u0003\u0002\u0002\u0002C\u00fe\u0003\u0002\u0002\u0002E\u0107\u0003",
    "\u0002\u0002\u0002G\u010d\u0003\u0002\u0002\u0002I\u0115\u0003\u0002",
    "\u0002\u0002K\u011c\u0003\u0002\u0002\u0002M\u0123\u0003\u0002\u0002",
    "\u0002O\u012b\u0003\u0002\u0002\u0002Q\u013d\u0003\u0002\u0002\u0002",
    "S\u013f\u0003\u0002\u0002\u0002U\u0155\u0003\u0002\u0002\u0002W\u0159",
    "\u0003\u0002\u0002\u0002Y\u0177\u0003\u0002\u0002\u0002[\u0191\u0003",
    "\u0002\u0002\u0002]\u0193\u0003\u0002\u0002\u0002_\u019e\u0003\u0002",
    "\u0002\u0002a\u01a2\u0003\u0002\u0002\u0002c\u01ac\u0003\u0002\u0002",
    "\u0002e\u01b2\u0003\u0002\u0002\u0002g\u01c0\u0003\u0002\u0002\u0002",
    "i\u01cb\u0003\u0002\u0002\u0002k\u01d0\u0003\u0002\u0002\u0002m\u01d6",
    "\u0003\u0002\u0002\u0002op\u0007o\u0002\u0002pq\u0007c\u0002\u0002q",
    "r\u0007r\u0002\u0002r\u0004\u0003\u0002\u0002\u0002st\u0007?\u0002\u0002",
    "t\u0006\u0003\u0002\u0002\u0002uv\u0007w\u0002\u0002vw\u0007u\u0002",
    "\u0002wx\u0007g\u0002\u0002xy\u0007u\u0002\u0002y\b\u0003\u0002\u0002",
    "\u0002z{\u0007c\u0002\u0002{|\u0007u\u0002\u0002|\n\u0003\u0002\u0002",
    "\u0002}~\u0007c\u0002\u0002~\u007f\u0007n\u0002\u0002\u007f\u0080\u0007",
    "k\u0002\u0002\u0080\u0081\u0007c\u0002\u0002\u0081\u0082\u0007u\u0002",
    "\u0002\u0082\f\u0003\u0002\u0002\u0002\u0083\u0084\u0007k\u0002\u0002",
    "\u0084\u0085\u0007o\u0002\u0002\u0085\u0086\u0007r\u0002\u0002\u0086",
    "\u0087\u0007q\u0002\u0002\u0087\u0088\u0007t\u0002\u0002\u0088\u0089",
    "\u0007v\u0002\u0002\u0089\u008a\u0007u\u0002\u0002\u008a\u000e\u0003",
    "\u0002\u0002\u0002\u008b\u008c\u0007i\u0002\u0002\u008c\u008d\u0007",
    "t\u0002\u0002\u008d\u008e\u0007q\u0002\u0002\u008e\u008f\u0007w\u0002",
    "\u0002\u008f\u0090\u0007r\u0002\u0002\u0090\u0010\u0003\u0002\u0002",
    "\u0002\u0091\u0092\u0007}\u0002\u0002\u0092\u0012\u0003\u0002\u0002",
    "\u0002\u0093\u0094\u0007\u007f\u0002\u0002\u0094\u0014\u0003\u0002\u0002",
    "\u0002\u0095\u0096\u0007>\u0002\u0002\u0096\u0097\u0007>\u0002\u0002",
    "\u0097\u0016\u0003\u0002\u0002\u0002\u0098\u0099\u0007@\u0002\u0002",
    "\u0099\u009a\u0007@\u0002\u0002\u009a\u0018\u0003\u0002\u0002\u0002",
    "\u009b\u009c\u0007g\u0002\u0002\u009c\u009d\u0007z\u0002\u0002\u009d",
    "\u009e\u0007v\u0002\u0002\u009e\u009f\u0007g\u0002\u0002\u009f\u00a0",
    "\u0007p\u0002\u0002\u00a0\u00a1\u0007f\u0002\u0002\u00a1\u00a2\u0007",
    "u\u0002\u0002\u00a2\u001a\u0003\u0002\u0002\u0002\u00a3\u00a4\u0007",
    "*\u0002\u0002\u00a4\u001c\u0003\u0002\u0002\u0002\u00a5\u00a6\u0007",
    ".\u0002\u0002\u00a6\u001e\u0003\u0002\u0002\u0002\u00a7\u00a8\u0007",
    "+\u0002\u0002\u00a8 \u0003\u0002\u0002\u0002\u00a9\u00aa\u0007<\u0002",
    "\u0002\u00aa\"\u0003\u0002\u0002\u0002\u00ab\u00ac\u0007/\u0002\u0002",
    "\u00ac\u00ad\u0007@\u0002\u0002\u00ad$\u0003\u0002\u0002\u0002\u00ae",
    "\u00af\u0007=\u0002\u0002\u00af&\u0003\u0002\u0002\u0002\u00b0\u00b1",
    "\u00070\u0002\u0002\u00b1\u00b2\u00070\u0002\u0002\u00b2(\u0003\u0002",
    "\u0002\u0002\u00b3\u00b4\u0007,\u0002\u0002\u00b4*\u0003\u0002\u0002",
    "\u0002\u00b5\u00b6\u00070\u0002\u0002\u00b6,\u0003\u0002\u0002\u0002",
    "\u00b7\u00b8\u0007f\u0002\u0002\u00b8\u00b9\u0007g\u0002\u0002\u00b9",
    "\u00ba\u0007h\u0002\u0002\u00ba\u00bb\u0007c\u0002\u0002\u00bb\u00bc",
    "\u0007w\u0002\u0002\u00bc\u00bd\u0007n\u0002\u0002\u00bd\u00be\u0007",
    "v\u0002\u0002\u00be.\u0003\u0002\u0002\u0002\u00bf\u00c0\u0007y\u0002",
    "\u0002\u00c0\u00c1\u0007j\u0002\u0002\u00c1\u00c2\u0007g\u0002\u0002",
    "\u00c2\u00c3\u0007t\u0002\u0002\u00c3\u00c4\u0007g\u0002\u0002\u00c4",
    "0\u0003\u0002\u0002\u0002\u00c5\u00c6\u0007e\u0002\u0002\u00c6\u00c7",
    "\u0007j\u0002\u0002\u00c7\u00c8\u0007g\u0002\u0002\u00c8\u00c9\u0007",
    "e\u0002\u0002\u00c9\u00ca\u0007m\u0002\u0002\u00ca2\u0003\u0002\u0002",
    "\u0002\u00cb\u00cc\u0007n\u0002\u0002\u00cc\u00cd\u0007q\u0002\u0002",
    "\u00cd\u00ce\u0007i\u0002\u0002\u00ce4\u0003\u0002\u0002\u0002\u00cf",
    "\u00d0\u0007v\u0002\u0002\u00d0\u00d1\u0007j\u0002\u0002\u00d1\u00d2",
    "\u0007g\u0002\u0002\u00d2\u00d3\u0007p\u0002\u0002\u00d36\u0003\u0002",
    "\u0002\u0002\u00d4\u00d5\u0007v\u0002\u0002\u00d5\u00d6\u0007{\u0002",
    "\u0002\u00d6\u00d7\u0007r\u0002\u0002\u00d7\u00d8\u0007g\u0002\u0002",
    "\u00d8\u00d9\u0007u\u0002\u0002\u00d98\u0003\u0002\u0002\u0002\u00da",
    "\u00db\u0007v\u0002\u0002\u00db\u00dc\u0007{\u0002\u0002\u00dc\u00dd",
    "\u0007r\u0002\u0002\u00dd\u00de\u0007g\u0002\u0002\u00de\u00df\u0007",
    "-\u0002\u0002\u00df:\u0003\u0002\u0002\u0002\u00e0\u00e1\u0007h\u0002",
    "\u0002\u00e1\u00e2\u0007k\u0002\u0002\u00e2\u00e3\u0007t\u0002\u0002",
    "\u00e3\u00e4\u0007u\u0002\u0002\u00e4\u00e5\u0007v\u0002\u0002\u00e5",
    "<\u0003\u0002\u0002\u0002\u00e6\u00e7\u0007p\u0002\u0002\u00e7\u00e8",
    "\u0007q\u0002\u0002\u00e8\u00e9\u0007v\u0002\u0002\u00e9\u00ea\u0007",
    "a\u0002\u0002\u00ea\u00eb\u0007h\u0002\u0002\u00eb\u00ec\u0007k\u0002",
    "\u0002\u00ec\u00ed\u0007t\u0002\u0002\u00ed\u00ee\u0007u\u0002\u0002",
    "\u00ee\u00ef\u0007v\u0002\u0002\u00ef>\u0003\u0002\u0002\u0002\u00f0",
    "\u00f1\u0007n\u0002\u0002\u00f1\u00f2\u0007c\u0002\u0002\u00f2\u00f3",
    "\u0007u\u0002\u0002\u00f3\u00f4\u0007v\u0002\u0002\u00f4@\u0003\u0002",
    "\u0002\u0002\u00f5\u00f6\u0007p\u0002\u0002\u00f6\u00f7\u0007q\u0002",
    "\u0002\u00f7\u00f8\u0007v\u0002\u0002\u00f8\u00f9\u0007a\u0002\u0002",
    "\u00f9\u00fa\u0007n\u0002\u0002\u00fa\u00fb\u0007c\u0002\u0002\u00fb",
    "\u00fc\u0007u\u0002\u0002\u00fc\u00fd\u0007v\u0002\u0002\u00fdB\u0003",
    "\u0002\u0002\u0002\u00fe\u00ff\u0007q\u0002\u0002\u00ff\u0100\u0007",
    "p\u0002\u0002\u0100\u0101\u0007n\u0002\u0002\u0101\u0102\u0007{\u0002",
    "\u0002\u0102\u0103\u0007a\u0002\u0002\u0103\u0104\u0007q\u0002\u0002",
    "\u0104\u0105\u0007p\u0002\u0002\u0105\u0106\u0007g\u0002\u0002\u0106",
    "D\u0003\u0002\u0002\u0002\u0107\u0108\u0007u\u0002\u0002\u0108\u0109",
    "\u0007j\u0002\u0002\u0109\u010a\u0007c\u0002\u0002\u010a\u010b\u0007",
    "t\u0002\u0002\u010b\u010c\u0007g\u0002\u0002\u010cF\u0003\u0002\u0002",
    "\u0002\u010d\u010e\u0007e\u0002\u0002\u010e\u010f\u0007q\u0002\u0002",
    "\u010f\u0110\u0007n\u0002\u0002\u0110\u0111\u0007n\u0002\u0002\u0111",
    "\u0112\u0007c\u0002\u0002\u0112\u0113\u0007v\u0002\u0002\u0113\u0114",
    "\u0007g\u0002\u0002\u0114H\u0003\u0002\u0002\u0002\u0115\u0116\u0007",
    "u\u0002\u0002\u0116\u0117\u0007q\u0002\u0002\u0117\u0118\u0007w\u0002",
    "\u0002\u0118\u0119\u0007t\u0002\u0002\u0119\u011a\u0007e\u0002\u0002",
    "\u011a\u011b\u0007g\u0002\u0002\u011bJ\u0003\u0002\u0002\u0002\u011c",
    "\u011d\u0007v\u0002\u0002\u011d\u011e\u0007c\u0002\u0002\u011e\u011f",
    "\u0007t\u0002\u0002\u011f\u0120\u0007i\u0002\u0002\u0120\u0121\u0007",
    "g\u0002\u0002\u0121\u0122\u0007v\u0002\u0002\u0122L\u0003\u0002\u0002",
    "\u0002\u0123\u0124\u0007s\u0002\u0002\u0124\u0125\u0007w\u0002\u0002",
    "\u0125\u0126\u0007g\u0002\u0002\u0126\u0127\u0007t\u0002\u0002\u0127",
    "\u0128\u0007k\u0002\u0002\u0128\u0129\u0007g\u0002\u0002\u0129\u012a",
    "\u0007f\u0002\u0002\u012aN\u0003\u0002\u0002\u0002\u012b\u012c\u0007",
    "r\u0002\u0002\u012c\u012d\u0007t\u0002\u0002\u012d\u012e\u0007q\u0002",
    "\u0002\u012e\u012f\u0007f\u0002\u0002\u012f\u0130\u0007w\u0002\u0002",
    "\u0130\u0131\u0007e\u0002\u0002\u0131\u0132\u0007g\u0002\u0002\u0132",
    "\u0133\u0007f\u0002\u0002\u0133P\u0003\u0002\u0002\u0002\u0134\u0135",
    "\u0007v\u0002\u0002\u0135\u0136\u0007t\u0002\u0002\u0136\u0137\u0007",
    "w\u0002\u0002\u0137\u013e\u0007g\u0002\u0002\u0138\u0139\u0007h\u0002",
    "\u0002\u0139\u013a\u0007c\u0002\u0002\u013a\u013b\u0007n\u0002\u0002",
    "\u013b\u013c\u0007u\u0002\u0002\u013c\u013e\u0007g\u0002\u0002\u013d",
    "\u0134\u0003\u0002\u0002\u0002\u013d\u0138\u0003\u0002\u0002\u0002\u013e",
    "R\u0003\u0002\u0002\u0002\u013f\u0140\u0007B\u0002\u0002\u0140\u0141",
    "\t\u0002\u0002\u0002\u0141\u0142\t\u0002\u0002\u0002\u0142\u0143\t\u0002",
    "\u0002\u0002\u0143\u0150\t\u0002\u0002\u0002\u0144\u0145\u0007/\u0002",
    "\u0002\u0145\u0146\t\u0002\u0002\u0002\u0146\u014e\t\u0002\u0002\u0002",
    "\u0147\u0148\u0007/\u0002\u0002\u0148\u0149\t\u0002\u0002\u0002\u0149",
    "\u014c\t\u0002\u0002\u0002\u014a\u014b\u0007V\u0002\u0002\u014b\u014d",
    "\u0005W,\u0002\u014c\u014a\u0003\u0002\u0002\u0002\u014c\u014d\u0003",
    "\u0002\u0002\u0002\u014d\u014f\u0003\u0002\u0002\u0002\u014e\u0147\u0003",
    "\u0002\u0002\u0002\u014e\u014f\u0003\u0002\u0002\u0002\u014f\u0151\u0003",
    "\u0002\u0002\u0002\u0150\u0144\u0003\u0002\u0002\u0002\u0150\u0151\u0003",
    "\u0002\u0002\u0002\u0151\u0153\u0003\u0002\u0002\u0002\u0152\u0154\u0007",
    "\\\u0002\u0002\u0153\u0152\u0003\u0002\u0002\u0002\u0153\u0154\u0003",
    "\u0002\u0002\u0002\u0154T\u0003\u0002\u0002\u0002\u0155\u0156\u0007",
    "B\u0002\u0002\u0156\u0157\u0007V\u0002\u0002\u0157\u0158\u0005W,\u0002",
    "\u0158V\u0003\u0002\u0002\u0002\u0159\u015a\t\u0002\u0002\u0002\u015a",
    "\u016b\t\u0002\u0002\u0002\u015b\u015c\u0007<\u0002\u0002\u015c\u015d",
    "\t\u0002\u0002\u0002\u015d\u0169\t\u0002\u0002\u0002\u015e\u015f\u0007",
    "<\u0002\u0002\u015f\u0160\t\u0002\u0002\u0002\u0160\u0167\t\u0002\u0002",
    "\u0002\u0161\u0163\u00070\u0002\u0002\u0162\u0164\t\u0002\u0002\u0002",
    "\u0163\u0162\u0003\u0002\u0002\u0002\u0164\u0165\u0003\u0002\u0002\u0002",
    "\u0165\u0163\u0003\u0002\u0002\u0002\u0165\u0166\u0003\u0002\u0002\u0002",
    "\u0166\u0168\u0003\u0002\u0002\u0002\u0167\u0161\u0003\u0002\u0002\u0002",
    "\u0167\u0168\u0003\u0002\u0002\u0002\u0168\u016a\u0003\u0002\u0002\u0002",
    "\u0169\u015e\u0003\u0002\u0002\u0002\u0169\u016a\u0003\u0002\u0002\u0002",
    "\u016a\u016c\u0003\u0002\u0002\u0002\u016b\u015b\u0003\u0002\u0002\u0002",
    "\u016b\u016c\u0003\u0002\u0002\u0002\u016c\u0174\u0003\u0002\u0002\u0002",
    "\u016d\u0175\u0007\\\u0002\u0002\u016e\u016f\t\u0003\u0002\u0002\u016f",
    "\u0170\t\u0002\u0002\u0002\u0170\u0171\t\u0002\u0002\u0002\u0171\u0172",
    "\u0007<\u0002\u0002\u0172\u0173\t\u0002\u0002\u0002\u0173\u0175\t\u0002",
    "\u0002\u0002\u0174\u016d\u0003\u0002\u0002\u0002\u0174\u016e\u0003\u0002",
    "\u0002\u0002\u0174\u0175\u0003\u0002\u0002\u0002\u0175X\u0003\u0002",
    "\u0002\u0002\u0176\u0178\t\u0004\u0002\u0002\u0177\u0176\u0003\u0002",
    "\u0002\u0002\u0178\u017c\u0003\u0002\u0002\u0002\u0179\u017b\t\u0005",
    "\u0002\u0002\u017a\u0179\u0003\u0002\u0002\u0002\u017b\u017e\u0003\u0002",
    "\u0002\u0002\u017c\u017a\u0003\u0002\u0002\u0002\u017c\u017d\u0003\u0002",
    "\u0002\u0002\u017dZ\u0003\u0002\u0002\u0002\u017e\u017c\u0003\u0002",
    "\u0002\u0002\u017f\u0184\u0007$\u0002\u0002\u0180\u0183\u0005i5\u0002",
    "\u0181\u0183\u000b\u0002\u0002\u0002\u0182\u0180\u0003\u0002\u0002\u0002",
    "\u0182\u0181\u0003\u0002\u0002\u0002\u0183\u0186\u0003\u0002\u0002\u0002",
    "\u0184\u0185\u0003\u0002\u0002\u0002\u0184\u0182\u0003\u0002\u0002\u0002",
    "\u0185\u0187\u0003\u0002\u0002\u0002\u0186\u0184\u0003\u0002\u0002\u0002",
    "\u0187\u0192\u0007$\u0002\u0002\u0188\u018d\u0007b\u0002\u0002\u0189",
    "\u018c\u0005i5\u0002\u018a\u018c\u000b\u0002\u0002\u0002\u018b\u0189",
    "\u0003\u0002\u0002\u0002\u018b\u018a\u0003\u0002\u0002\u0002\u018c\u018f",
    "\u0003\u0002\u0002\u0002\u018d\u018e\u0003\u0002\u0002\u0002\u018d\u018b",
    "\u0003\u0002\u0002\u0002\u018e\u0190\u0003\u0002\u0002\u0002\u018f\u018d",
    "\u0003\u0002\u0002\u0002\u0190\u0192\u0007b\u0002\u0002\u0191\u017f",
    "\u0003\u0002\u0002\u0002\u0191\u0188\u0003\u0002\u0002\u0002\u0192\\",
    "\u0003\u0002\u0002\u0002\u0193\u0198\u0007)\u0002\u0002\u0194\u0197",
    "\u0005i5\u0002\u0195\u0197\u000b\u0002\u0002\u0002\u0196\u0194\u0003",
    "\u0002\u0002\u0002\u0196\u0195\u0003\u0002\u0002\u0002\u0197\u019a\u0003",
    "\u0002\u0002\u0002\u0198\u0199\u0003\u0002\u0002\u0002\u0198\u0196\u0003",
    "\u0002\u0002\u0002\u0199\u019b\u0003\u0002\u0002\u0002\u019a\u0198\u0003",
    "\u0002\u0002\u0002\u019b\u019c\u0007)\u0002\u0002\u019c^\u0003\u0002",
    "\u0002\u0002\u019d\u019f\t\u0002\u0002\u0002\u019e\u019d\u0003\u0002",
    "\u0002\u0002\u019f\u01a0\u0003\u0002\u0002\u0002\u01a0\u019e\u0003\u0002",
    "\u0002\u0002\u01a0\u01a1\u0003\u0002\u0002\u0002\u01a1`\u0003\u0002",
    "\u0002\u0002\u01a2\u01a9\u0005_0\u0002\u01a3\u01a5\u00070\u0002\u0002",
    "\u01a4\u01a6\t\u0002\u0002\u0002\u01a5\u01a4\u0003\u0002\u0002\u0002",
    "\u01a6\u01a7\u0003\u0002\u0002\u0002\u01a7\u01a5\u0003\u0002\u0002\u0002",
    "\u01a7\u01a8\u0003\u0002\u0002\u0002\u01a8\u01aa\u0003\u0002\u0002\u0002",
    "\u01a9\u01a3\u0003\u0002\u0002\u0002\u01a9\u01aa\u0003\u0002\u0002\u0002",
    "\u01aab\u0003\u0002\u0002\u0002\u01ab\u01ad\t\u0006\u0002\u0002\u01ac",
    "\u01ab\u0003\u0002\u0002\u0002\u01ad\u01ae\u0003\u0002\u0002\u0002\u01ae",
    "\u01ac\u0003\u0002\u0002\u0002\u01ae\u01af\u0003\u0002\u0002\u0002\u01af",
    "\u01b0\u0003\u0002\u0002\u0002\u01b0\u01b1\b2\u0002\u0002\u01b1d\u0003",
    "\u0002\u0002\u0002\u01b2\u01b3\u00071\u0002\u0002\u01b3\u01b4\u0007",
    ",\u0002\u0002\u01b4\u01b8\u0003\u0002\u0002\u0002\u01b5\u01b7\u000b",
    "\u0002\u0002\u0002\u01b6\u01b5\u0003\u0002\u0002\u0002\u01b7\u01ba\u0003",
    "\u0002\u0002\u0002\u01b8\u01b9\u0003\u0002\u0002\u0002\u01b8\u01b6\u0003",
    "\u0002\u0002\u0002\u01b9\u01bb\u0003\u0002\u0002\u0002\u01ba\u01b8\u0003",
    "\u0002\u0002\u0002\u01bb\u01bc\u0007,\u0002\u0002\u01bc\u01bd\u0007",
    "1\u0002\u0002\u01bd\u01be\u0003\u0002\u0002\u0002\u01be\u01bf\b3\u0002",
    "\u0002\u01bff\u0003\u0002\u0002\u0002\u01c0\u01c1\u00071\u0002\u0002",
    "\u01c1\u01c2\u00071\u0002\u0002\u01c2\u01c6\u0003\u0002\u0002\u0002",
    "\u01c3\u01c5\n\u0007\u0002\u0002\u01c4\u01c3\u0003\u0002\u0002\u0002",
    "\u01c5\u01c8\u0003\u0002\u0002\u0002\u01c6\u01c4\u0003\u0002\u0002\u0002",
    "\u01c6\u01c7\u0003\u0002\u0002\u0002\u01c7\u01c9\u0003\u0002\u0002\u0002",
    "\u01c8\u01c6\u0003\u0002\u0002\u0002\u01c9\u01ca\b4\u0002\u0002\u01ca",
    "h\u0003\u0002\u0002\u0002\u01cb\u01ce\u0007^\u0002\u0002\u01cc\u01cf",
    "\t\b\u0002\u0002\u01cd\u01cf\u0005k6\u0002\u01ce\u01cc\u0003\u0002\u0002",
    "\u0002\u01ce\u01cd\u0003\u0002\u0002\u0002\u01cfj\u0003\u0002\u0002",
    "\u0002\u01d0\u01d1\u0007w\u0002\u0002\u01d1\u01d2\u0005m7\u0002\u01d2",
    "\u01d3\u0005m7\u0002\u01d3\u01d4\u0005m7\u0002\u01d4\u01d5\u0005m7\u0002",
    "\u01d5l\u0003\u0002\u0002\u0002\u01d6\u01d7\t\t\u0002\u0002\u01d7n\u0003",
    "\u0002\u0002\u0002\u001e\u0002\u013d\u014c\u014e\u0150\u0153\u0165\u0167",
    "\u0169\u016b\u0174\u0177\u017a\u017c\u0182\u0184\u018b\u018d\u0191\u0196",
    "\u0198\u01a0\u01a7\u01a9\u01ae\u01b8\u01c6\u01ce\u0003\u0002\u0003\u0002"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

function js_mappingLexer(input) {
	antlr4.Lexer.call(this, input);
    this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.PredictionContextCache());
    return this;
}

js_mappingLexer.prototype = Object.create(antlr4.Lexer.prototype);
js_mappingLexer.prototype.constructor = js_mappingLexer;

Object.defineProperty(js_mappingLexer.prototype, "atn", {
        get : function() {
                return atn;
        }
});

js_mappingLexer.EOF = antlr4.Token.EOF;
js_mappingLexer.T__0 = 1;
js_mappingLexer.T__1 = 2;
js_mappingLexer.T__2 = 3;
js_mappingLexer.T__3 = 4;
js_mappingLexer.T__4 = 5;
js_mappingLexer.T__5 = 6;
js_mappingLexer.T__6 = 7;
js_mappingLexer.T__7 = 8;
js_mappingLexer.T__8 = 9;
js_mappingLexer.T__9 = 10;
js_mappingLexer.T__10 = 11;
js_mappingLexer.T__11 = 12;
js_mappingLexer.T__12 = 13;
js_mappingLexer.T__13 = 14;
js_mappingLexer.T__14 = 15;
js_mappingLexer.T__15 = 16;
js_mappingLexer.T__16 = 17;
js_mappingLexer.T__17 = 18;
js_mappingLexer.T__18 = 19;
js_mappingLexer.T__19 = 20;
js_mappingLexer.T__20 = 21;
js_mappingLexer.T__21 = 22;
js_mappingLexer.T__22 = 23;
js_mappingLexer.T__23 = 24;
js_mappingLexer.T__24 = 25;
js_mappingLexer.T__25 = 26;
js_mappingLexer.T__26 = 27;
js_mappingLexer.T__27 = 28;
js_mappingLexer.T__28 = 29;
js_mappingLexer.T__29 = 30;
js_mappingLexer.T__30 = 31;
js_mappingLexer.T__31 = 32;
js_mappingLexer.T__32 = 33;
js_mappingLexer.T__33 = 34;
js_mappingLexer.T__34 = 35;
js_mappingLexer.T__35 = 36;
js_mappingLexer.T__36 = 37;
js_mappingLexer.T__37 = 38;
js_mappingLexer.T__38 = 39;
js_mappingLexer.BOOL = 40;
js_mappingLexer.DATETIME = 41;
js_mappingLexer.TIME = 42;
js_mappingLexer.IDENTIFIER = 43;
js_mappingLexer.DELIMITEDIDENTIFIER = 44;
js_mappingLexer.STRING = 45;
js_mappingLexer.INTEGER = 46;
js_mappingLexer.NUMBER = 47;
js_mappingLexer.WS = 48;
js_mappingLexer.COMMENT = 49;
js_mappingLexer.LINE_COMMENT = 50;

js_mappingLexer.prototype.channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];

js_mappingLexer.prototype.modeNames = [ "DEFAULT_MODE" ];

js_mappingLexer.prototype.literalNames = [ null, "'map'", "'='", "'uses'", 
                                           "'as'", "'alias'", "'imports'", 
                                           "'group'", "'{'", "'}'", "'<<'", 
                                           "'>>'", "'extends'", "'('", "','", 
                                           "')'", "':'", "'->'", "';'", 
                                           "'..'", "'*'", "'.'", "'default'", 
                                           "'where'", "'check'", "'log'", 
                                           "'then'", "'types'", "'type+'", 
                                           "'first'", "'not_first'", "'last'", 
                                           "'not_last'", "'only_one'", "'share'", 
                                           "'collate'", "'source'", "'target'", 
                                           "'queried'", "'produced'" ];

js_mappingLexer.prototype.symbolicNames = [ null, null, null, null, null, 
                                            null, null, null, null, null, 
                                            null, null, null, null, null, 
                                            null, null, null, null, null, 
                                            null, null, null, null, null, 
                                            null, null, null, null, null, 
                                            null, null, null, null, null, 
                                            null, null, null, null, null, 
                                            "BOOL", "DATETIME", "TIME", 
                                            "IDENTIFIER", "DELIMITEDIDENTIFIER", 
                                            "STRING", "INTEGER", "NUMBER", 
                                            "WS", "COMMENT", "LINE_COMMENT" ];

js_mappingLexer.prototype.ruleNames = [ "T__0", "T__1", "T__2", "T__3", 
                                        "T__4", "T__5", "T__6", "T__7", 
                                        "T__8", "T__9", "T__10", "T__11", 
                                        "T__12", "T__13", "T__14", "T__15", 
                                        "T__16", "T__17", "T__18", "T__19", 
                                        "T__20", "T__21", "T__22", "T__23", 
                                        "T__24", "T__25", "T__26", "T__27", 
                                        "T__28", "T__29", "T__30", "T__31", 
                                        "T__32", "T__33", "T__34", "T__35", 
                                        "T__36", "T__37", "T__38", "BOOL", 
                                        "DATETIME", "TIME", "TIMEFORMAT", 
                                        "IDENTIFIER", "DELIMITEDIDENTIFIER", 
                                        "STRING", "INTEGER", "NUMBER", "WS", 
                                        "COMMENT", "LINE_COMMENT", "ESC", 
                                        "UNICODE", "HEX" ];

js_mappingLexer.prototype.grammarFileName = "js_mapping.g4";



exports.js_mappingLexer = js_mappingLexer;

