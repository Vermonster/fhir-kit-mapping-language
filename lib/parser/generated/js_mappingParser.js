// Generated from grammars/js_mapping.g4 by ANTLR 4.7.1
// jshint ignore: start
var antlr4 = require('antlr4/index');
var js_mappingListener = require('./js_mappingListener').js_mappingListener;
var js_mappingVisitor = require('./js_mappingVisitor').js_mappingVisitor;

var grammarFileName = "js_mapping.g4";

var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u00034\u0138\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f\u0004",
    "\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010\u0004",
    "\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013\u0004\u0014\t",
    "\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017\t\u0017\u0004",
    "\u0018\t\u0018\u0004\u0019\t\u0019\u0004\u001a\t\u001a\u0004\u001b\t",
    "\u001b\u0004\u001c\t\u001c\u0004\u001d\t\u001d\u0004\u001e\t\u001e\u0004",
    "\u001f\t\u001f\u0004 \t \u0004!\t!\u0004\"\t\"\u0004#\t#\u0004$\t$\u0004",
    "%\t%\u0004&\t&\u0004\'\t\'\u0004(\t(\u0004)\t)\u0003\u0002\u0003\u0002",
    "\u0007\u0002U\n\u0002\f\u0002\u000e\u0002X\u000b\u0002\u0003\u0002\u0007",
    "\u0002[\n\u0002\f\u0002\u000e\u0002^\u000b\u0002\u0003\u0002\u0006\u0002",
    "a\n\u0002\r\u0002\u000e\u0002b\u0003\u0002\u0003\u0002\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0004\u0003\u0004\u0003",
    "\u0005\u0003\u0005\u0003\u0006\u0003\u0006\u0003\u0006\u0005\u0006s",
    "\n\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0007\u0003\u0007",
    "\u0003\u0007\u0003\b\u0003\b\u0003\b\u0003\t\u0003\t\u0003\t\u0003\t",
    "\u0005\t\u0082\n\t\u0003\t\u0005\t\u0085\n\t\u0003\t\u0003\t\u0003\n",
    "\u0003\n\u0006\n\u008b\n\n\r\n\u000e\n\u008c\u0003\n\u0003\n\u0003\u000b",
    "\u0003\u000b\u0003\u000b\u0003\u000b\u0003\f\u0003\f\u0003\f\u0003\r",
    "\u0003\r\u0003\r\u0003\r\u0006\r\u009c\n\r\r\r\u000e\r\u009d\u0003\r",
    "\u0003\r\u0003\u000e\u0003\u000e\u0003\u000e\u0005\u000e\u00a5\n\u000e",
    "\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u0010\u0003\u0010\u0003\u0010",
    "\u0005\u0010\u00ad\n\u0010\u0003\u0010\u0005\u0010\u00b0\n\u0010\u0003",
    "\u0010\u0005\u0010\u00b3\n\u0010\u0003\u0010\u0003\u0010\u0003\u0011",
    "\u0003\u0011\u0003\u0012\u0003\u0012\u0003\u0012\u0007\u0012\u00bc\n",
    "\u0012\f\u0012\u000e\u0012\u00bf\u000b\u0012\u0003\u0013\u0003\u0013",
    "\u0005\u0013\u00c3\n\u0013\u0003\u0013\u0005\u0013\u00c6\n\u0013\u0003",
    "\u0013\u0005\u0013\u00c9\n\u0013\u0003\u0013\u0005\u0013\u00cc\n\u0013",
    "\u0003\u0013\u0005\u0013\u00cf\n\u0013\u0003\u0013\u0005\u0013\u00d2",
    "\n\u0013\u0003\u0013\u0005\u0013\u00d5\n\u0013\u0003\u0014\u0003\u0014",
    "\u0003\u0014\u0007\u0014\u00da\n\u0014\f\u0014\u000e\u0014\u00dd\u000b",
    "\u0014\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0005",
    "\u0015\u00e4\n\u0015\u0003\u0016\u0003\u0016\u0003\u0017\u0003\u0017",
    "\u0003\u0017\u0005\u0017\u00eb\n\u0017\u0003\u0018\u0003\u0018\u0003",
    "\u0018\u0003\u0019\u0003\u0019\u0003\u0019\u0003\u001a\u0003\u001a\u0003",
    "\u001a\u0003\u001b\u0003\u001b\u0003\u001b\u0003\u001c\u0003\u001c\u0003",
    "\u001c\u0003\u001d\u0003\u001d\u0003\u001d\u0005\u001d\u00ff\n\u001d",
    "\u0003\u001e\u0003\u001e\u0003\u001e\u0005\u001e\u0104\n\u001e\u0003",
    "\u001e\u0005\u001e\u0107\n\u001e\u0003\u001e\u0005\u001e\u010a\n\u001e",
    "\u0003\u001e\u0003\u001e\u0005\u001e\u010e\n\u001e\u0005\u001e\u0110",
    "\n\u001e\u0003\u001f\u0003\u001f\u0003\u001f\u0005\u001f\u0115\n\u001f",
    "\u0003 \u0003 \u0003 \u0005 \u011a\n \u0003 \u0003 \u0003!\u0003!\u0003",
    "!\u0007!\u0121\n!\f!\u000e!\u0124\u000b!\u0003\"\u0003\"\u0005\"\u0128",
    "\n\"\u0003#\u0003#\u0003$\u0003$\u0003%\u0003%\u0003&\u0003&\u0003\'",
    "\u0003\'\u0003(\u0003(\u0003)\u0003)\u0003)\u0002\u0002*\u0002\u0004",
    "\u0006\b\n\f\u000e\u0010\u0012\u0014\u0016\u0018\u001a\u001c\u001e ",
    "\"$&(*,.02468:<>@BDFHJLNP\u0002\n\u0003\u0002-.\u0004\u0002\u0016\u0016",
    "00\u0004\u0002*,/1\u0003\u0002\u001d\u001e\u0003\u0002\u001f#\u0005",
    "\u0002\u001f\u001f!!$%\u0003\u0002&\'\u0003\u0002&)\u0002\u0131\u0002",
    "R\u0003\u0002\u0002\u0002\u0004f\u0003\u0002\u0002\u0002\u0006k\u0003",
    "\u0002\u0002\u0002\bm\u0003\u0002\u0002\u0002\no\u0003\u0002\u0002\u0002",
    "\fw\u0003\u0002\u0002\u0002\u000ez\u0003\u0002\u0002\u0002\u0010}\u0003",
    "\u0002\u0002\u0002\u0012\u0088\u0003\u0002\u0002\u0002\u0014\u0090\u0003",
    "\u0002\u0002\u0002\u0016\u0094\u0003\u0002\u0002\u0002\u0018\u0097\u0003",
    "\u0002\u0002\u0002\u001a\u00a1\u0003\u0002\u0002\u0002\u001c\u00a6\u0003",
    "\u0002\u0002\u0002\u001e\u00a9\u0003\u0002\u0002\u0002 \u00b6\u0003",
    "\u0002\u0002\u0002\"\u00b8\u0003\u0002\u0002\u0002$\u00c0\u0003\u0002",
    "\u0002\u0002&\u00d6\u0003\u0002\u0002\u0002(\u00de\u0003\u0002\u0002",
    "\u0002*\u00e5\u0003\u0002\u0002\u0002,\u00e7\u0003\u0002\u0002\u0002",
    ".\u00ec\u0003\u0002\u0002\u00020\u00ef\u0003\u0002\u0002\u00022\u00f2",
    "\u0003\u0002\u0002\u00024\u00f5\u0003\u0002\u0002\u00026\u00f8\u0003",
    "\u0002\u0002\u00028\u00fb\u0003\u0002\u0002\u0002:\u010f\u0003\u0002",
    "\u0002\u0002<\u0114\u0003\u0002\u0002\u0002>\u0116\u0003\u0002\u0002",
    "\u0002@\u011d\u0003\u0002\u0002\u0002B\u0127\u0003\u0002\u0002\u0002",
    "D\u0129\u0003\u0002\u0002\u0002F\u012b\u0003\u0002\u0002\u0002H\u012d",
    "\u0003\u0002\u0002\u0002J\u012f\u0003\u0002\u0002\u0002L\u0131\u0003",
    "\u0002\u0002\u0002N\u0133\u0003\u0002\u0002\u0002P\u0135\u0003\u0002",
    "\u0002\u0002RV\u0005\u0004\u0003\u0002SU\u0005\n\u0006\u0002TS\u0003",
    "\u0002\u0002\u0002UX\u0003\u0002\u0002\u0002VT\u0003\u0002\u0002\u0002",
    "VW\u0003\u0002\u0002\u0002W\\\u0003\u0002\u0002\u0002XV\u0003\u0002",
    "\u0002\u0002Y[\u0005\u000e\b\u0002ZY\u0003\u0002\u0002\u0002[^\u0003",
    "\u0002\u0002\u0002\\Z\u0003\u0002\u0002\u0002\\]\u0003\u0002\u0002\u0002",
    "]`\u0003\u0002\u0002\u0002^\\\u0003\u0002\u0002\u0002_a\u0005\u0010",
    "\t\u0002`_\u0003\u0002\u0002\u0002ab\u0003\u0002\u0002\u0002b`\u0003",
    "\u0002\u0002\u0002bc\u0003\u0002\u0002\u0002cd\u0003\u0002\u0002\u0002",
    "de\u0007\u0002\u0002\u0003e\u0003\u0003\u0002\u0002\u0002fg\u0007\u0003",
    "\u0002\u0002gh\u0005\u0006\u0004\u0002hi\u0007\u0004\u0002\u0002ij\u0005",
    "\b\u0005\u0002j\u0005\u0003\u0002\u0002\u0002kl\u0007.\u0002\u0002l",
    "\u0007\u0003\u0002\u0002\u0002mn\t\u0002\u0002\u0002n\t\u0003\u0002",
    "\u0002\u0002op\u0007\u0005\u0002\u0002pr\u0005\u0006\u0004\u0002qs\u0005",
    "\f\u0007\u0002rq\u0003\u0002\u0002\u0002rs\u0003\u0002\u0002\u0002s",
    "t\u0003\u0002\u0002\u0002tu\u0007\u0006\u0002\u0002uv\u0005P)\u0002",
    "v\u000b\u0003\u0002\u0002\u0002wx\u0007\u0007\u0002\u0002xy\u0005\b",
    "\u0005\u0002y\r\u0003\u0002\u0002\u0002z{\u0007\b\u0002\u0002{|\u0005",
    "\u0006\u0004\u0002|\u000f\u0003\u0002\u0002\u0002}~\u0007\t\u0002\u0002",
    "~\u007f\u0005\b\u0005\u0002\u007f\u0081\u0005\u0018\r\u0002\u0080\u0082",
    "\u0005\u0016\f\u0002\u0081\u0080\u0003\u0002\u0002\u0002\u0081\u0082",
    "\u0003\u0002\u0002\u0002\u0082\u0084\u0003\u0002\u0002\u0002\u0083\u0085",
    "\u0005\u0014\u000b\u0002\u0084\u0083\u0003\u0002\u0002\u0002\u0084\u0085",
    "\u0003\u0002\u0002\u0002\u0085\u0086\u0003\u0002\u0002\u0002\u0086\u0087",
    "\u0005\u0012\n\u0002\u0087\u0011\u0003\u0002\u0002\u0002\u0088\u008a",
    "\u0007\n\u0002\u0002\u0089\u008b\u0005\u001e\u0010\u0002\u008a\u0089",
    "\u0003\u0002\u0002\u0002\u008b\u008c\u0003\u0002\u0002\u0002\u008c\u008a",
    "\u0003\u0002\u0002\u0002\u008c\u008d\u0003\u0002\u0002\u0002\u008d\u008e",
    "\u0003\u0002\u0002\u0002\u008e\u008f\u0007\u000b\u0002\u0002\u008f\u0013",
    "\u0003\u0002\u0002\u0002\u0090\u0091\u0007\f\u0002\u0002\u0091\u0092",
    "\u0005H%\u0002\u0092\u0093\u0007\r\u0002\u0002\u0093\u0015\u0003\u0002",
    "\u0002\u0002\u0094\u0095\u0007\u000e\u0002\u0002\u0095\u0096\u0005\b",
    "\u0005\u0002\u0096\u0017\u0003\u0002\u0002\u0002\u0097\u0098\u0007\u000f",
    "\u0002\u0002\u0098\u009b\u0005\u001a\u000e\u0002\u0099\u009a\u0007\u0010",
    "\u0002\u0002\u009a\u009c\u0005\u001a\u000e\u0002\u009b\u0099\u0003\u0002",
    "\u0002\u0002\u009c\u009d\u0003\u0002\u0002\u0002\u009d\u009b\u0003\u0002",
    "\u0002\u0002\u009d\u009e\u0003\u0002\u0002\u0002\u009e\u009f\u0003\u0002",
    "\u0002\u0002\u009f\u00a0\u0007\u0011\u0002\u0002\u00a0\u0019\u0003\u0002",
    "\u0002\u0002\u00a1\u00a2\u0005N(\u0002\u00a2\u00a4\u0005\b\u0005\u0002",
    "\u00a3\u00a5\u0005\u001c\u000f\u0002\u00a4\u00a3\u0003\u0002\u0002\u0002",
    "\u00a4\u00a5\u0003\u0002\u0002\u0002\u00a5\u001b\u0003\u0002\u0002\u0002",
    "\u00a6\u00a7\u0007\u0012\u0002\u0002\u00a7\u00a8\u0005\b\u0005\u0002",
    "\u00a8\u001d\u0003\u0002\u0002\u0002\u00a9\u00ac\u0005\"\u0012\u0002",
    "\u00aa\u00ab\u0007\u0013\u0002\u0002\u00ab\u00ad\u0005&\u0014\u0002",
    "\u00ac\u00aa\u0003\u0002\u0002\u0002\u00ac\u00ad\u0003\u0002\u0002\u0002",
    "\u00ad\u00af\u0003\u0002\u0002\u0002\u00ae\u00b0\u00058\u001d\u0002",
    "\u00af\u00ae\u0003\u0002\u0002\u0002\u00af\u00b0\u0003\u0002\u0002\u0002",
    "\u00b0\u00b2\u0003\u0002\u0002\u0002\u00b1\u00b3\u0005 \u0011\u0002",
    "\u00b2\u00b1\u0003\u0002\u0002\u0002\u00b2\u00b3\u0003\u0002\u0002\u0002",
    "\u00b3\u00b4\u0003\u0002\u0002\u0002\u00b4\u00b5\u0007\u0014\u0002\u0002",
    "\u00b5\u001f\u0003\u0002\u0002\u0002\u00b6\u00b7\u0007.\u0002\u0002",
    "\u00b7!\u0003\u0002\u0002\u0002\u00b8\u00bd\u0005$\u0013\u0002\u00b9",
    "\u00ba\u0007\u0010\u0002\u0002\u00ba\u00bc\u0005$\u0013\u0002\u00bb",
    "\u00b9\u0003\u0002\u0002\u0002\u00bc\u00bf\u0003\u0002\u0002\u0002\u00bd",
    "\u00bb\u0003\u0002\u0002\u0002\u00bd\u00be\u0003\u0002\u0002\u0002\u00be",
    "#\u0003\u0002\u0002\u0002\u00bf\u00bd\u0003\u0002\u0002\u0002\u00c0",
    "\u00c2\u0005,\u0017\u0002\u00c1\u00c3\u0005(\u0015\u0002\u00c2\u00c1",
    "\u0003\u0002\u0002\u0002\u00c2\u00c3\u0003\u0002\u0002\u0002\u00c3\u00c5",
    "\u0003\u0002\u0002\u0002\u00c4\u00c6\u0005.\u0018\u0002\u00c5\u00c4",
    "\u0003\u0002\u0002\u0002\u00c5\u00c6\u0003\u0002\u0002\u0002\u00c6\u00c8",
    "\u0003\u0002\u0002\u0002\u00c7\u00c9\u0005J&\u0002\u00c8\u00c7\u0003",
    "\u0002\u0002\u0002\u00c8\u00c9\u0003\u0002\u0002\u0002\u00c9\u00cb\u0003",
    "\u0002\u0002\u0002\u00ca\u00cc\u00050\u0019\u0002\u00cb\u00ca\u0003",
    "\u0002\u0002\u0002\u00cb\u00cc\u0003\u0002\u0002\u0002\u00cc\u00ce\u0003",
    "\u0002\u0002\u0002\u00cd\u00cf\u00052\u001a\u0002\u00ce\u00cd\u0003",
    "\u0002\u0002\u0002\u00ce\u00cf\u0003\u0002\u0002\u0002\u00cf\u00d1\u0003",
    "\u0002\u0002\u0002\u00d0\u00d2\u00054\u001b\u0002\u00d1\u00d0\u0003",
    "\u0002\u0002\u0002\u00d1\u00d2\u0003\u0002\u0002\u0002\u00d2\u00d4\u0003",
    "\u0002\u0002\u0002\u00d3\u00d5\u00056\u001c\u0002\u00d4\u00d3\u0003",
    "\u0002\u0002\u0002\u00d4\u00d5\u0003\u0002\u0002\u0002\u00d5%\u0003",
    "\u0002\u0002\u0002\u00d6\u00db\u0005:\u001e\u0002\u00d7\u00d8\u0007",
    "\u0010\u0002\u0002\u00d8\u00da\u0005:\u001e\u0002\u00d9\u00d7\u0003",
    "\u0002\u0002\u0002\u00da\u00dd\u0003\u0002\u0002\u0002\u00db\u00d9\u0003",
    "\u0002\u0002\u0002\u00db\u00dc\u0003\u0002\u0002\u0002\u00dc\'\u0003",
    "\u0002\u0002\u0002\u00dd\u00db\u0003\u0002\u0002\u0002\u00de\u00df\u0007",
    "\u0012\u0002\u0002\u00df\u00e3\u0005\b\u0005\u0002\u00e0\u00e1\u0007",
    "0\u0002\u0002\u00e1\u00e2\u0007\u0015\u0002\u0002\u00e2\u00e4\u0005",
    "*\u0016\u0002\u00e3\u00e0\u0003\u0002\u0002\u0002\u00e3\u00e4\u0003",
    "\u0002\u0002\u0002\u00e4)\u0003\u0002\u0002\u0002\u00e5\u00e6\t\u0003",
    "\u0002\u0002\u00e6+\u0003\u0002\u0002\u0002\u00e7\u00ea\u0005\b\u0005",
    "\u0002\u00e8\u00e9\u0007\u0017\u0002\u0002\u00e9\u00eb\u0005\b\u0005",
    "\u0002\u00ea\u00e8\u0003\u0002\u0002\u0002\u00ea\u00eb\u0003\u0002\u0002",
    "\u0002\u00eb-\u0003\u0002\u0002\u0002\u00ec\u00ed\u0007\u0018\u0002",
    "\u0002\u00ed\u00ee\u0005D#\u0002\u00ee/\u0003\u0002\u0002\u0002\u00ef",
    "\u00f0\u0007\u0006\u0002\u0002\u00f0\u00f1\u0005\b\u0005\u0002\u00f1",
    "1\u0003\u0002\u0002\u0002\u00f2\u00f3\u0007\u0019\u0002\u0002\u00f3",
    "\u00f4\u0005D#\u0002\u00f43\u0003\u0002\u0002\u0002\u00f5\u00f6\u0007",
    "\u001a\u0002\u0002\u00f6\u00f7\u0005D#\u0002\u00f75\u0003\u0002\u0002",
    "\u0002\u00f8\u00f9\u0007\u001b\u0002\u0002\u00f9\u00fa\u0005D#\u0002",
    "\u00fa7\u0003\u0002\u0002\u0002\u00fb\u00fe\u0007\u001c\u0002\u0002",
    "\u00fc\u00ff\u0005> \u0002\u00fd\u00ff\u0005\u0012\n\u0002\u00fe\u00fc",
    "\u0003\u0002\u0002\u0002\u00fe\u00fd\u0003\u0002\u0002\u0002\u00ff9",
    "\u0003\u0002\u0002\u0002\u0100\u0103\u0005,\u0017\u0002\u0101\u0102",
    "\u0007\u0004\u0002\u0002\u0102\u0104\u0005<\u001f\u0002\u0103\u0101",
    "\u0003\u0002\u0002\u0002\u0103\u0104\u0003\u0002\u0002\u0002\u0104\u0106",
    "\u0003\u0002\u0002\u0002\u0105\u0107\u00050\u0019\u0002\u0106\u0105",
    "\u0003\u0002\u0002\u0002\u0106\u0107\u0003\u0002\u0002\u0002\u0107\u0109",
    "\u0003\u0002\u0002\u0002\u0108\u010a\u0005L\'\u0002\u0109\u0108\u0003",
    "\u0002\u0002\u0002\u0109\u010a\u0003\u0002\u0002\u0002\u010a\u0110\u0003",
    "\u0002\u0002\u0002\u010b\u010d\u0005> \u0002\u010c\u010e\u00050\u0019",
    "\u0002\u010d\u010c\u0003\u0002\u0002\u0002\u010d\u010e\u0003\u0002\u0002",
    "\u0002\u010e\u0110\u0003\u0002\u0002\u0002\u010f\u0100\u0003\u0002\u0002",
    "\u0002\u010f\u010b\u0003\u0002\u0002\u0002\u0110;\u0003\u0002\u0002",
    "\u0002\u0111\u0115\u0005F$\u0002\u0112\u0115\u0005,\u0017\u0002\u0113",
    "\u0115\u0005> \u0002\u0114\u0111\u0003\u0002\u0002\u0002\u0114\u0112",
    "\u0003\u0002\u0002\u0002\u0114\u0113\u0003\u0002\u0002\u0002\u0115=",
    "\u0003\u0002\u0002\u0002\u0116\u0117\u0005\b\u0005\u0002\u0117\u0119",
    "\u0007\u000f\u0002\u0002\u0118\u011a\u0005@!\u0002\u0119\u0118\u0003",
    "\u0002\u0002\u0002\u0119\u011a\u0003\u0002\u0002\u0002\u011a\u011b\u0003",
    "\u0002\u0002\u0002\u011b\u011c\u0007\u0011\u0002\u0002\u011c?\u0003",
    "\u0002\u0002\u0002\u011d\u0122\u0005B\"\u0002\u011e\u011f\u0007\u0010",
    "\u0002\u0002\u011f\u0121\u0005B\"\u0002\u0120\u011e\u0003\u0002\u0002",
    "\u0002\u0121\u0124\u0003\u0002\u0002\u0002\u0122\u0120\u0003\u0002\u0002",
    "\u0002\u0122\u0123\u0003\u0002\u0002\u0002\u0123A\u0003\u0002\u0002",
    "\u0002\u0124\u0122\u0003\u0002\u0002\u0002\u0125\u0128\u0005F$\u0002",
    "\u0126\u0128\u0005\b\u0005\u0002\u0127\u0125\u0003\u0002\u0002\u0002",
    "\u0127\u0126\u0003\u0002\u0002\u0002\u0128C\u0003\u0002\u0002\u0002",
    "\u0129\u012a\u0005F$\u0002\u012aE\u0003\u0002\u0002\u0002\u012b\u012c",
    "\t\u0004\u0002\u0002\u012cG\u0003\u0002\u0002\u0002\u012d\u012e\t\u0005",
    "\u0002\u0002\u012eI\u0003\u0002\u0002\u0002\u012f\u0130\t\u0006\u0002",
    "\u0002\u0130K\u0003\u0002\u0002\u0002\u0131\u0132\t\u0007\u0002\u0002",
    "\u0132M\u0003\u0002\u0002\u0002\u0133\u0134\t\b\u0002\u0002\u0134O\u0003",
    "\u0002\u0002\u0002\u0135\u0136\t\t\u0002\u0002\u0136Q\u0003\u0002\u0002",
    "\u0002#V\\br\u0081\u0084\u008c\u009d\u00a4\u00ac\u00af\u00b2\u00bd\u00c2",
    "\u00c5\u00c8\u00cb\u00ce\u00d1\u00d4\u00db\u00e3\u00ea\u00fe\u0103\u0106",
    "\u0109\u010d\u010f\u0114\u0119\u0122\u0127"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'map'", "'='", "'uses'", "'as'", "'alias'", 
                     "'imports'", "'group'", "'{'", "'}'", "'<<'", "'>>'", 
                     "'extends'", "'('", "','", "')'", "':'", "'->'", "';'", 
                     "'..'", "'*'", "'.'", "'default'", "'where'", "'check'", 
                     "'log'", "'then'", "'types'", "'type+'", "'first'", 
                     "'not_first'", "'last'", "'not_last'", "'only_one'", 
                     "'share'", "'collate'", "'source'", "'target'", "'queried'", 
                     "'produced'" ];

var symbolicNames = [ null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, "BOOL", "DATETIME", "TIME", 
                      "IDENTIFIER", "DELIMITEDIDENTIFIER", "STRING", "INTEGER", 
                      "NUMBER", "WS", "COMMENT", "LINE_COMMENT" ];

var ruleNames =  [ "structureMap", "mapId", "url", "identifier", "structure", 
                   "structureAlias", "imports", "group", "rules", "typeMode", 
                   "js_extends", "parameters", "parameter", "type", "js_rule", 
                   "ruleName", "ruleSources", "ruleSource", "ruleTargets", 
                   "sourceType", "upperBound", "ruleContext", "sourceDefault", 
                   "alias", "whereClause", "checkClause", "log", "dependent", 
                   "ruleTarget", "transform", "invocation", "paramList", 
                   "param", "fhirPath", "literal", "groupTypeMode", "sourceListMode", 
                   "targetListMode", "inputMode", "modelMode" ];

function js_mappingParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

js_mappingParser.prototype = Object.create(antlr4.Parser.prototype);
js_mappingParser.prototype.constructor = js_mappingParser;

Object.defineProperty(js_mappingParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

js_mappingParser.EOF = antlr4.Token.EOF;
js_mappingParser.T__0 = 1;
js_mappingParser.T__1 = 2;
js_mappingParser.T__2 = 3;
js_mappingParser.T__3 = 4;
js_mappingParser.T__4 = 5;
js_mappingParser.T__5 = 6;
js_mappingParser.T__6 = 7;
js_mappingParser.T__7 = 8;
js_mappingParser.T__8 = 9;
js_mappingParser.T__9 = 10;
js_mappingParser.T__10 = 11;
js_mappingParser.T__11 = 12;
js_mappingParser.T__12 = 13;
js_mappingParser.T__13 = 14;
js_mappingParser.T__14 = 15;
js_mappingParser.T__15 = 16;
js_mappingParser.T__16 = 17;
js_mappingParser.T__17 = 18;
js_mappingParser.T__18 = 19;
js_mappingParser.T__19 = 20;
js_mappingParser.T__20 = 21;
js_mappingParser.T__21 = 22;
js_mappingParser.T__22 = 23;
js_mappingParser.T__23 = 24;
js_mappingParser.T__24 = 25;
js_mappingParser.T__25 = 26;
js_mappingParser.T__26 = 27;
js_mappingParser.T__27 = 28;
js_mappingParser.T__28 = 29;
js_mappingParser.T__29 = 30;
js_mappingParser.T__30 = 31;
js_mappingParser.T__31 = 32;
js_mappingParser.T__32 = 33;
js_mappingParser.T__33 = 34;
js_mappingParser.T__34 = 35;
js_mappingParser.T__35 = 36;
js_mappingParser.T__36 = 37;
js_mappingParser.T__37 = 38;
js_mappingParser.T__38 = 39;
js_mappingParser.BOOL = 40;
js_mappingParser.DATETIME = 41;
js_mappingParser.TIME = 42;
js_mappingParser.IDENTIFIER = 43;
js_mappingParser.DELIMITEDIDENTIFIER = 44;
js_mappingParser.STRING = 45;
js_mappingParser.INTEGER = 46;
js_mappingParser.NUMBER = 47;
js_mappingParser.WS = 48;
js_mappingParser.COMMENT = 49;
js_mappingParser.LINE_COMMENT = 50;

js_mappingParser.RULE_structureMap = 0;
js_mappingParser.RULE_mapId = 1;
js_mappingParser.RULE_url = 2;
js_mappingParser.RULE_identifier = 3;
js_mappingParser.RULE_structure = 4;
js_mappingParser.RULE_structureAlias = 5;
js_mappingParser.RULE_imports = 6;
js_mappingParser.RULE_group = 7;
js_mappingParser.RULE_rules = 8;
js_mappingParser.RULE_typeMode = 9;
js_mappingParser.RULE_js_extends = 10;
js_mappingParser.RULE_parameters = 11;
js_mappingParser.RULE_parameter = 12;
js_mappingParser.RULE_type = 13;
js_mappingParser.RULE_js_rule = 14;
js_mappingParser.RULE_ruleName = 15;
js_mappingParser.RULE_ruleSources = 16;
js_mappingParser.RULE_ruleSource = 17;
js_mappingParser.RULE_ruleTargets = 18;
js_mappingParser.RULE_sourceType = 19;
js_mappingParser.RULE_upperBound = 20;
js_mappingParser.RULE_ruleContext = 21;
js_mappingParser.RULE_sourceDefault = 22;
js_mappingParser.RULE_alias = 23;
js_mappingParser.RULE_whereClause = 24;
js_mappingParser.RULE_checkClause = 25;
js_mappingParser.RULE_log = 26;
js_mappingParser.RULE_dependent = 27;
js_mappingParser.RULE_ruleTarget = 28;
js_mappingParser.RULE_transform = 29;
js_mappingParser.RULE_invocation = 30;
js_mappingParser.RULE_paramList = 31;
js_mappingParser.RULE_param = 32;
js_mappingParser.RULE_fhirPath = 33;
js_mappingParser.RULE_literal = 34;
js_mappingParser.RULE_groupTypeMode = 35;
js_mappingParser.RULE_sourceListMode = 36;
js_mappingParser.RULE_targetListMode = 37;
js_mappingParser.RULE_inputMode = 38;
js_mappingParser.RULE_modelMode = 39;

function StructureMapContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = js_mappingParser.RULE_structureMap;
    return this;
}

StructureMapContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StructureMapContext.prototype.constructor = StructureMapContext;

StructureMapContext.prototype.mapId = function() {
    return this.getTypedRuleContext(MapIdContext,0);
};

StructureMapContext.prototype.EOF = function() {
    return this.getToken(js_mappingParser.EOF, 0);
};

StructureMapContext.prototype.structure = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(StructureContext);
    } else {
        return this.getTypedRuleContext(StructureContext,i);
    }
};

StructureMapContext.prototype.imports = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ImportsContext);
    } else {
        return this.getTypedRuleContext(ImportsContext,i);
    }
};

StructureMapContext.prototype.group = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(GroupContext);
    } else {
        return this.getTypedRuleContext(GroupContext,i);
    }
};

StructureMapContext.prototype.enterRule = function(listener) {
    if(listener instanceof js_mappingListener ) {
        listener.enterStructureMap(this);
	}
};

StructureMapContext.prototype.exitRule = function(listener) {
    if(listener instanceof js_mappingListener ) {
        listener.exitStructureMap(this);
	}
};

StructureMapContext.prototype.accept = function(visitor) {
    if ( visitor instanceof js_mappingVisitor ) {
        return visitor.visitStructureMap(this);
    } else {
        return visitor.visitChildren(this);
    }
};




js_mappingParser.StructureMapContext = StructureMapContext;

js_mappingParser.prototype.structureMap = function() {

    var localctx = new StructureMapContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, js_mappingParser.RULE_structureMap);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 80;
        this.mapId();
        this.state = 84;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===js_mappingParser.T__2) {
            this.state = 81;
            this.structure();
            this.state = 86;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 90;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===js_mappingParser.T__5) {
            this.state = 87;
            this.imports();
            this.state = 92;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 94; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 93;
            this.group();
            this.state = 96; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===js_mappingParser.T__6);
        this.state = 98;
        this.match(js_mappingParser.EOF);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function MapIdContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = js_mappingParser.RULE_mapId;
    return this;
}

MapIdContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
MapIdContext.prototype.constructor = MapIdContext;

MapIdContext.prototype.url = function() {
    return this.getTypedRuleContext(UrlContext,0);
};

MapIdContext.prototype.identifier = function() {
    return this.getTypedRuleContext(IdentifierContext,0);
};

MapIdContext.prototype.enterRule = function(listener) {
    if(listener instanceof js_mappingListener ) {
        listener.enterMapId(this);
	}
};

MapIdContext.prototype.exitRule = function(listener) {
    if(listener instanceof js_mappingListener ) {
        listener.exitMapId(this);
	}
};

MapIdContext.prototype.accept = function(visitor) {
    if ( visitor instanceof js_mappingVisitor ) {
        return visitor.visitMapId(this);
    } else {
        return visitor.visitChildren(this);
    }
};




js_mappingParser.MapIdContext = MapIdContext;

js_mappingParser.prototype.mapId = function() {

    var localctx = new MapIdContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, js_mappingParser.RULE_mapId);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 100;
        this.match(js_mappingParser.T__0);
        this.state = 101;
        this.url();
        this.state = 102;
        this.match(js_mappingParser.T__1);
        this.state = 103;
        this.identifier();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function UrlContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = js_mappingParser.RULE_url;
    return this;
}

UrlContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
UrlContext.prototype.constructor = UrlContext;

UrlContext.prototype.DELIMITEDIDENTIFIER = function() {
    return this.getToken(js_mappingParser.DELIMITEDIDENTIFIER, 0);
};

UrlContext.prototype.enterRule = function(listener) {
    if(listener instanceof js_mappingListener ) {
        listener.enterUrl(this);
	}
};

UrlContext.prototype.exitRule = function(listener) {
    if(listener instanceof js_mappingListener ) {
        listener.exitUrl(this);
	}
};

UrlContext.prototype.accept = function(visitor) {
    if ( visitor instanceof js_mappingVisitor ) {
        return visitor.visitUrl(this);
    } else {
        return visitor.visitChildren(this);
    }
};




js_mappingParser.UrlContext = UrlContext;

js_mappingParser.prototype.url = function() {

    var localctx = new UrlContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, js_mappingParser.RULE_url);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 105;
        this.match(js_mappingParser.DELIMITEDIDENTIFIER);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function IdentifierContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = js_mappingParser.RULE_identifier;
    return this;
}

IdentifierContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
IdentifierContext.prototype.constructor = IdentifierContext;

IdentifierContext.prototype.IDENTIFIER = function() {
    return this.getToken(js_mappingParser.IDENTIFIER, 0);
};

IdentifierContext.prototype.DELIMITEDIDENTIFIER = function() {
    return this.getToken(js_mappingParser.DELIMITEDIDENTIFIER, 0);
};

IdentifierContext.prototype.enterRule = function(listener) {
    if(listener instanceof js_mappingListener ) {
        listener.enterIdentifier(this);
	}
};

IdentifierContext.prototype.exitRule = function(listener) {
    if(listener instanceof js_mappingListener ) {
        listener.exitIdentifier(this);
	}
};

IdentifierContext.prototype.accept = function(visitor) {
    if ( visitor instanceof js_mappingVisitor ) {
        return visitor.visitIdentifier(this);
    } else {
        return visitor.visitChildren(this);
    }
};




js_mappingParser.IdentifierContext = IdentifierContext;

js_mappingParser.prototype.identifier = function() {

    var localctx = new IdentifierContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, js_mappingParser.RULE_identifier);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 107;
        _la = this._input.LA(1);
        if(!(_la===js_mappingParser.IDENTIFIER || _la===js_mappingParser.DELIMITEDIDENTIFIER)) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function StructureContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = js_mappingParser.RULE_structure;
    return this;
}

StructureContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StructureContext.prototype.constructor = StructureContext;

StructureContext.prototype.url = function() {
    return this.getTypedRuleContext(UrlContext,0);
};

StructureContext.prototype.modelMode = function() {
    return this.getTypedRuleContext(ModelModeContext,0);
};

StructureContext.prototype.structureAlias = function() {
    return this.getTypedRuleContext(StructureAliasContext,0);
};

StructureContext.prototype.enterRule = function(listener) {
    if(listener instanceof js_mappingListener ) {
        listener.enterStructure(this);
	}
};

StructureContext.prototype.exitRule = function(listener) {
    if(listener instanceof js_mappingListener ) {
        listener.exitStructure(this);
	}
};

StructureContext.prototype.accept = function(visitor) {
    if ( visitor instanceof js_mappingVisitor ) {
        return visitor.visitStructure(this);
    } else {
        return visitor.visitChildren(this);
    }
};




js_mappingParser.StructureContext = StructureContext;

js_mappingParser.prototype.structure = function() {

    var localctx = new StructureContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, js_mappingParser.RULE_structure);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 109;
        this.match(js_mappingParser.T__2);
        this.state = 110;
        this.url();
        this.state = 112;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===js_mappingParser.T__4) {
            this.state = 111;
            this.structureAlias();
        }

        this.state = 114;
        this.match(js_mappingParser.T__3);
        this.state = 115;
        this.modelMode();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function StructureAliasContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = js_mappingParser.RULE_structureAlias;
    return this;
}

StructureAliasContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StructureAliasContext.prototype.constructor = StructureAliasContext;

StructureAliasContext.prototype.identifier = function() {
    return this.getTypedRuleContext(IdentifierContext,0);
};

StructureAliasContext.prototype.enterRule = function(listener) {
    if(listener instanceof js_mappingListener ) {
        listener.enterStructureAlias(this);
	}
};

StructureAliasContext.prototype.exitRule = function(listener) {
    if(listener instanceof js_mappingListener ) {
        listener.exitStructureAlias(this);
	}
};

StructureAliasContext.prototype.accept = function(visitor) {
    if ( visitor instanceof js_mappingVisitor ) {
        return visitor.visitStructureAlias(this);
    } else {
        return visitor.visitChildren(this);
    }
};




js_mappingParser.StructureAliasContext = StructureAliasContext;

js_mappingParser.prototype.structureAlias = function() {

    var localctx = new StructureAliasContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, js_mappingParser.RULE_structureAlias);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 117;
        this.match(js_mappingParser.T__4);
        this.state = 118;
        this.identifier();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ImportsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = js_mappingParser.RULE_imports;
    return this;
}

ImportsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ImportsContext.prototype.constructor = ImportsContext;

ImportsContext.prototype.url = function() {
    return this.getTypedRuleContext(UrlContext,0);
};

ImportsContext.prototype.enterRule = function(listener) {
    if(listener instanceof js_mappingListener ) {
        listener.enterImports(this);
	}
};

ImportsContext.prototype.exitRule = function(listener) {
    if(listener instanceof js_mappingListener ) {
        listener.exitImports(this);
	}
};

ImportsContext.prototype.accept = function(visitor) {
    if ( visitor instanceof js_mappingVisitor ) {
        return visitor.visitImports(this);
    } else {
        return visitor.visitChildren(this);
    }
};




js_mappingParser.ImportsContext = ImportsContext;

js_mappingParser.prototype.imports = function() {

    var localctx = new ImportsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, js_mappingParser.RULE_imports);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 120;
        this.match(js_mappingParser.T__5);
        this.state = 121;
        this.url();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function GroupContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = js_mappingParser.RULE_group;
    return this;
}

GroupContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
GroupContext.prototype.constructor = GroupContext;

GroupContext.prototype.identifier = function() {
    return this.getTypedRuleContext(IdentifierContext,0);
};

GroupContext.prototype.parameters = function() {
    return this.getTypedRuleContext(ParametersContext,0);
};

GroupContext.prototype.rules = function() {
    return this.getTypedRuleContext(RulesContext,0);
};

GroupContext.prototype.js_extends = function() {
    return this.getTypedRuleContext(Js_extendsContext,0);
};

GroupContext.prototype.typeMode = function() {
    return this.getTypedRuleContext(TypeModeContext,0);
};

GroupContext.prototype.enterRule = function(listener) {
    if(listener instanceof js_mappingListener ) {
        listener.enterGroup(this);
	}
};

GroupContext.prototype.exitRule = function(listener) {
    if(listener instanceof js_mappingListener ) {
        listener.exitGroup(this);
	}
};

GroupContext.prototype.accept = function(visitor) {
    if ( visitor instanceof js_mappingVisitor ) {
        return visitor.visitGroup(this);
    } else {
        return visitor.visitChildren(this);
    }
};




js_mappingParser.GroupContext = GroupContext;

js_mappingParser.prototype.group = function() {

    var localctx = new GroupContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, js_mappingParser.RULE_group);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 123;
        this.match(js_mappingParser.T__6);
        this.state = 124;
        this.identifier();
        this.state = 125;
        this.parameters();
        this.state = 127;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===js_mappingParser.T__11) {
            this.state = 126;
            this.js_extends();
        }

        this.state = 130;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===js_mappingParser.T__9) {
            this.state = 129;
            this.typeMode();
        }

        this.state = 132;
        this.rules();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function RulesContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = js_mappingParser.RULE_rules;
    return this;
}

RulesContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
RulesContext.prototype.constructor = RulesContext;

RulesContext.prototype.js_rule = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Js_ruleContext);
    } else {
        return this.getTypedRuleContext(Js_ruleContext,i);
    }
};

RulesContext.prototype.enterRule = function(listener) {
    if(listener instanceof js_mappingListener ) {
        listener.enterRules(this);
	}
};

RulesContext.prototype.exitRule = function(listener) {
    if(listener instanceof js_mappingListener ) {
        listener.exitRules(this);
	}
};

RulesContext.prototype.accept = function(visitor) {
    if ( visitor instanceof js_mappingVisitor ) {
        return visitor.visitRules(this);
    } else {
        return visitor.visitChildren(this);
    }
};




js_mappingParser.RulesContext = RulesContext;

js_mappingParser.prototype.rules = function() {

    var localctx = new RulesContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, js_mappingParser.RULE_rules);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 134;
        this.match(js_mappingParser.T__7);
        this.state = 136; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 135;
            this.js_rule();
            this.state = 138; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===js_mappingParser.IDENTIFIER || _la===js_mappingParser.DELIMITEDIDENTIFIER);
        this.state = 140;
        this.match(js_mappingParser.T__8);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function TypeModeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = js_mappingParser.RULE_typeMode;
    return this;
}

TypeModeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TypeModeContext.prototype.constructor = TypeModeContext;

TypeModeContext.prototype.groupTypeMode = function() {
    return this.getTypedRuleContext(GroupTypeModeContext,0);
};

TypeModeContext.prototype.enterRule = function(listener) {
    if(listener instanceof js_mappingListener ) {
        listener.enterTypeMode(this);
	}
};

TypeModeContext.prototype.exitRule = function(listener) {
    if(listener instanceof js_mappingListener ) {
        listener.exitTypeMode(this);
	}
};

TypeModeContext.prototype.accept = function(visitor) {
    if ( visitor instanceof js_mappingVisitor ) {
        return visitor.visitTypeMode(this);
    } else {
        return visitor.visitChildren(this);
    }
};




js_mappingParser.TypeModeContext = TypeModeContext;

js_mappingParser.prototype.typeMode = function() {

    var localctx = new TypeModeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 18, js_mappingParser.RULE_typeMode);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 142;
        this.match(js_mappingParser.T__9);
        this.state = 143;
        this.groupTypeMode();
        this.state = 144;
        this.match(js_mappingParser.T__10);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Js_extendsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = js_mappingParser.RULE_js_extends;
    return this;
}

Js_extendsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Js_extendsContext.prototype.constructor = Js_extendsContext;

Js_extendsContext.prototype.identifier = function() {
    return this.getTypedRuleContext(IdentifierContext,0);
};

Js_extendsContext.prototype.enterRule = function(listener) {
    if(listener instanceof js_mappingListener ) {
        listener.enterJs_extends(this);
	}
};

Js_extendsContext.prototype.exitRule = function(listener) {
    if(listener instanceof js_mappingListener ) {
        listener.exitJs_extends(this);
	}
};

Js_extendsContext.prototype.accept = function(visitor) {
    if ( visitor instanceof js_mappingVisitor ) {
        return visitor.visitJs_extends(this);
    } else {
        return visitor.visitChildren(this);
    }
};




js_mappingParser.Js_extendsContext = Js_extendsContext;

js_mappingParser.prototype.js_extends = function() {

    var localctx = new Js_extendsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 20, js_mappingParser.RULE_js_extends);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 146;
        this.match(js_mappingParser.T__11);
        this.state = 147;
        this.identifier();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ParametersContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = js_mappingParser.RULE_parameters;
    return this;
}

ParametersContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ParametersContext.prototype.constructor = ParametersContext;

ParametersContext.prototype.parameter = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ParameterContext);
    } else {
        return this.getTypedRuleContext(ParameterContext,i);
    }
};

ParametersContext.prototype.enterRule = function(listener) {
    if(listener instanceof js_mappingListener ) {
        listener.enterParameters(this);
	}
};

ParametersContext.prototype.exitRule = function(listener) {
    if(listener instanceof js_mappingListener ) {
        listener.exitParameters(this);
	}
};

ParametersContext.prototype.accept = function(visitor) {
    if ( visitor instanceof js_mappingVisitor ) {
        return visitor.visitParameters(this);
    } else {
        return visitor.visitChildren(this);
    }
};




js_mappingParser.ParametersContext = ParametersContext;

js_mappingParser.prototype.parameters = function() {

    var localctx = new ParametersContext(this, this._ctx, this.state);
    this.enterRule(localctx, 22, js_mappingParser.RULE_parameters);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 149;
        this.match(js_mappingParser.T__12);
        this.state = 150;
        this.parameter();
        this.state = 153; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 151;
            this.match(js_mappingParser.T__13);
            this.state = 152;
            this.parameter();
            this.state = 155; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===js_mappingParser.T__13);
        this.state = 157;
        this.match(js_mappingParser.T__14);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ParameterContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = js_mappingParser.RULE_parameter;
    return this;
}

ParameterContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ParameterContext.prototype.constructor = ParameterContext;

ParameterContext.prototype.inputMode = function() {
    return this.getTypedRuleContext(InputModeContext,0);
};

ParameterContext.prototype.identifier = function() {
    return this.getTypedRuleContext(IdentifierContext,0);
};

ParameterContext.prototype.type = function() {
    return this.getTypedRuleContext(TypeContext,0);
};

ParameterContext.prototype.enterRule = function(listener) {
    if(listener instanceof js_mappingListener ) {
        listener.enterParameter(this);
	}
};

ParameterContext.prototype.exitRule = function(listener) {
    if(listener instanceof js_mappingListener ) {
        listener.exitParameter(this);
	}
};

ParameterContext.prototype.accept = function(visitor) {
    if ( visitor instanceof js_mappingVisitor ) {
        return visitor.visitParameter(this);
    } else {
        return visitor.visitChildren(this);
    }
};




js_mappingParser.ParameterContext = ParameterContext;

js_mappingParser.prototype.parameter = function() {

    var localctx = new ParameterContext(this, this._ctx, this.state);
    this.enterRule(localctx, 24, js_mappingParser.RULE_parameter);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 159;
        this.inputMode();
        this.state = 160;
        this.identifier();
        this.state = 162;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===js_mappingParser.T__15) {
            this.state = 161;
            this.type();
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function TypeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = js_mappingParser.RULE_type;
    return this;
}

TypeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TypeContext.prototype.constructor = TypeContext;

TypeContext.prototype.identifier = function() {
    return this.getTypedRuleContext(IdentifierContext,0);
};

TypeContext.prototype.enterRule = function(listener) {
    if(listener instanceof js_mappingListener ) {
        listener.enterType(this);
	}
};

TypeContext.prototype.exitRule = function(listener) {
    if(listener instanceof js_mappingListener ) {
        listener.exitType(this);
	}
};

TypeContext.prototype.accept = function(visitor) {
    if ( visitor instanceof js_mappingVisitor ) {
        return visitor.visitType(this);
    } else {
        return visitor.visitChildren(this);
    }
};




js_mappingParser.TypeContext = TypeContext;

js_mappingParser.prototype.type = function() {

    var localctx = new TypeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 26, js_mappingParser.RULE_type);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 164;
        this.match(js_mappingParser.T__15);
        this.state = 165;
        this.identifier();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Js_ruleContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = js_mappingParser.RULE_js_rule;
    return this;
}

Js_ruleContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Js_ruleContext.prototype.constructor = Js_ruleContext;

Js_ruleContext.prototype.ruleSources = function() {
    return this.getTypedRuleContext(RuleSourcesContext,0);
};

Js_ruleContext.prototype.ruleTargets = function() {
    return this.getTypedRuleContext(RuleTargetsContext,0);
};

Js_ruleContext.prototype.dependent = function() {
    return this.getTypedRuleContext(DependentContext,0);
};

Js_ruleContext.prototype.ruleName = function() {
    return this.getTypedRuleContext(RuleNameContext,0);
};

Js_ruleContext.prototype.enterRule = function(listener) {
    if(listener instanceof js_mappingListener ) {
        listener.enterJs_rule(this);
	}
};

Js_ruleContext.prototype.exitRule = function(listener) {
    if(listener instanceof js_mappingListener ) {
        listener.exitJs_rule(this);
	}
};

Js_ruleContext.prototype.accept = function(visitor) {
    if ( visitor instanceof js_mappingVisitor ) {
        return visitor.visitJs_rule(this);
    } else {
        return visitor.visitChildren(this);
    }
};




js_mappingParser.Js_ruleContext = Js_ruleContext;

js_mappingParser.prototype.js_rule = function() {

    var localctx = new Js_ruleContext(this, this._ctx, this.state);
    this.enterRule(localctx, 28, js_mappingParser.RULE_js_rule);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 167;
        this.ruleSources();
        this.state = 170;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===js_mappingParser.T__16) {
            this.state = 168;
            this.match(js_mappingParser.T__16);
            this.state = 169;
            this.ruleTargets();
        }

        this.state = 173;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===js_mappingParser.T__25) {
            this.state = 172;
            this.dependent();
        }

        this.state = 176;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===js_mappingParser.DELIMITEDIDENTIFIER) {
            this.state = 175;
            this.ruleName();
        }

        this.state = 178;
        this.match(js_mappingParser.T__17);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function RuleNameContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = js_mappingParser.RULE_ruleName;
    return this;
}

RuleNameContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
RuleNameContext.prototype.constructor = RuleNameContext;

RuleNameContext.prototype.DELIMITEDIDENTIFIER = function() {
    return this.getToken(js_mappingParser.DELIMITEDIDENTIFIER, 0);
};

RuleNameContext.prototype.enterRule = function(listener) {
    if(listener instanceof js_mappingListener ) {
        listener.enterRuleName(this);
	}
};

RuleNameContext.prototype.exitRule = function(listener) {
    if(listener instanceof js_mappingListener ) {
        listener.exitRuleName(this);
	}
};

RuleNameContext.prototype.accept = function(visitor) {
    if ( visitor instanceof js_mappingVisitor ) {
        return visitor.visitRuleName(this);
    } else {
        return visitor.visitChildren(this);
    }
};




js_mappingParser.RuleNameContext = RuleNameContext;

js_mappingParser.prototype.ruleName = function() {

    var localctx = new RuleNameContext(this, this._ctx, this.state);
    this.enterRule(localctx, 30, js_mappingParser.RULE_ruleName);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 180;
        this.match(js_mappingParser.DELIMITEDIDENTIFIER);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function RuleSourcesContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = js_mappingParser.RULE_ruleSources;
    return this;
}

RuleSourcesContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
RuleSourcesContext.prototype.constructor = RuleSourcesContext;

RuleSourcesContext.prototype.ruleSource = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(RuleSourceContext);
    } else {
        return this.getTypedRuleContext(RuleSourceContext,i);
    }
};

RuleSourcesContext.prototype.enterRule = function(listener) {
    if(listener instanceof js_mappingListener ) {
        listener.enterRuleSources(this);
	}
};

RuleSourcesContext.prototype.exitRule = function(listener) {
    if(listener instanceof js_mappingListener ) {
        listener.exitRuleSources(this);
	}
};

RuleSourcesContext.prototype.accept = function(visitor) {
    if ( visitor instanceof js_mappingVisitor ) {
        return visitor.visitRuleSources(this);
    } else {
        return visitor.visitChildren(this);
    }
};




js_mappingParser.RuleSourcesContext = RuleSourcesContext;

js_mappingParser.prototype.ruleSources = function() {

    var localctx = new RuleSourcesContext(this, this._ctx, this.state);
    this.enterRule(localctx, 32, js_mappingParser.RULE_ruleSources);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 182;
        this.ruleSource();
        this.state = 187;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===js_mappingParser.T__13) {
            this.state = 183;
            this.match(js_mappingParser.T__13);
            this.state = 184;
            this.ruleSource();
            this.state = 189;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function RuleSourceContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = js_mappingParser.RULE_ruleSource;
    return this;
}

RuleSourceContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
RuleSourceContext.prototype.constructor = RuleSourceContext;

RuleSourceContext.prototype.ruleContext = function() {
    return this.getTypedRuleContext(RuleContextContext,0);
};

RuleSourceContext.prototype.sourceType = function() {
    return this.getTypedRuleContext(SourceTypeContext,0);
};

RuleSourceContext.prototype.sourceDefault = function() {
    return this.getTypedRuleContext(SourceDefaultContext,0);
};

RuleSourceContext.prototype.sourceListMode = function() {
    return this.getTypedRuleContext(SourceListModeContext,0);
};

RuleSourceContext.prototype.alias = function() {
    return this.getTypedRuleContext(AliasContext,0);
};

RuleSourceContext.prototype.whereClause = function() {
    return this.getTypedRuleContext(WhereClauseContext,0);
};

RuleSourceContext.prototype.checkClause = function() {
    return this.getTypedRuleContext(CheckClauseContext,0);
};

RuleSourceContext.prototype.log = function() {
    return this.getTypedRuleContext(LogContext,0);
};

RuleSourceContext.prototype.enterRule = function(listener) {
    if(listener instanceof js_mappingListener ) {
        listener.enterRuleSource(this);
	}
};

RuleSourceContext.prototype.exitRule = function(listener) {
    if(listener instanceof js_mappingListener ) {
        listener.exitRuleSource(this);
	}
};

RuleSourceContext.prototype.accept = function(visitor) {
    if ( visitor instanceof js_mappingVisitor ) {
        return visitor.visitRuleSource(this);
    } else {
        return visitor.visitChildren(this);
    }
};




js_mappingParser.RuleSourceContext = RuleSourceContext;

js_mappingParser.prototype.ruleSource = function() {

    var localctx = new RuleSourceContext(this, this._ctx, this.state);
    this.enterRule(localctx, 34, js_mappingParser.RULE_ruleSource);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 190;
        this.ruleContext();
        this.state = 192;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===js_mappingParser.T__15) {
            this.state = 191;
            this.sourceType();
        }

        this.state = 195;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===js_mappingParser.T__21) {
            this.state = 194;
            this.sourceDefault();
        }

        this.state = 198;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(((((_la - 29)) & ~0x1f) == 0 && ((1 << (_la - 29)) & ((1 << (js_mappingParser.T__28 - 29)) | (1 << (js_mappingParser.T__29 - 29)) | (1 << (js_mappingParser.T__30 - 29)) | (1 << (js_mappingParser.T__31 - 29)) | (1 << (js_mappingParser.T__32 - 29)))) !== 0)) {
            this.state = 197;
            this.sourceListMode();
        }

        this.state = 201;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===js_mappingParser.T__3) {
            this.state = 200;
            this.alias();
        }

        this.state = 204;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===js_mappingParser.T__22) {
            this.state = 203;
            this.whereClause();
        }

        this.state = 207;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===js_mappingParser.T__23) {
            this.state = 206;
            this.checkClause();
        }

        this.state = 210;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===js_mappingParser.T__24) {
            this.state = 209;
            this.log();
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function RuleTargetsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = js_mappingParser.RULE_ruleTargets;
    return this;
}

RuleTargetsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
RuleTargetsContext.prototype.constructor = RuleTargetsContext;

RuleTargetsContext.prototype.ruleTarget = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(RuleTargetContext);
    } else {
        return this.getTypedRuleContext(RuleTargetContext,i);
    }
};

RuleTargetsContext.prototype.enterRule = function(listener) {
    if(listener instanceof js_mappingListener ) {
        listener.enterRuleTargets(this);
	}
};

RuleTargetsContext.prototype.exitRule = function(listener) {
    if(listener instanceof js_mappingListener ) {
        listener.exitRuleTargets(this);
	}
};

RuleTargetsContext.prototype.accept = function(visitor) {
    if ( visitor instanceof js_mappingVisitor ) {
        return visitor.visitRuleTargets(this);
    } else {
        return visitor.visitChildren(this);
    }
};




js_mappingParser.RuleTargetsContext = RuleTargetsContext;

js_mappingParser.prototype.ruleTargets = function() {

    var localctx = new RuleTargetsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 36, js_mappingParser.RULE_ruleTargets);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 212;
        this.ruleTarget();
        this.state = 217;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===js_mappingParser.T__13) {
            this.state = 213;
            this.match(js_mappingParser.T__13);
            this.state = 214;
            this.ruleTarget();
            this.state = 219;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function SourceTypeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = js_mappingParser.RULE_sourceType;
    return this;
}

SourceTypeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SourceTypeContext.prototype.constructor = SourceTypeContext;

SourceTypeContext.prototype.identifier = function() {
    return this.getTypedRuleContext(IdentifierContext,0);
};

SourceTypeContext.prototype.INTEGER = function() {
    return this.getToken(js_mappingParser.INTEGER, 0);
};

SourceTypeContext.prototype.upperBound = function() {
    return this.getTypedRuleContext(UpperBoundContext,0);
};

SourceTypeContext.prototype.enterRule = function(listener) {
    if(listener instanceof js_mappingListener ) {
        listener.enterSourceType(this);
	}
};

SourceTypeContext.prototype.exitRule = function(listener) {
    if(listener instanceof js_mappingListener ) {
        listener.exitSourceType(this);
	}
};

SourceTypeContext.prototype.accept = function(visitor) {
    if ( visitor instanceof js_mappingVisitor ) {
        return visitor.visitSourceType(this);
    } else {
        return visitor.visitChildren(this);
    }
};




js_mappingParser.SourceTypeContext = SourceTypeContext;

js_mappingParser.prototype.sourceType = function() {

    var localctx = new SourceTypeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 38, js_mappingParser.RULE_sourceType);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 220;
        this.match(js_mappingParser.T__15);
        this.state = 221;
        this.identifier();
        this.state = 225;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===js_mappingParser.INTEGER) {
            this.state = 222;
            this.match(js_mappingParser.INTEGER);
            this.state = 223;
            this.match(js_mappingParser.T__18);
            this.state = 224;
            this.upperBound();
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function UpperBoundContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = js_mappingParser.RULE_upperBound;
    return this;
}

UpperBoundContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
UpperBoundContext.prototype.constructor = UpperBoundContext;

UpperBoundContext.prototype.INTEGER = function() {
    return this.getToken(js_mappingParser.INTEGER, 0);
};

UpperBoundContext.prototype.enterRule = function(listener) {
    if(listener instanceof js_mappingListener ) {
        listener.enterUpperBound(this);
	}
};

UpperBoundContext.prototype.exitRule = function(listener) {
    if(listener instanceof js_mappingListener ) {
        listener.exitUpperBound(this);
	}
};

UpperBoundContext.prototype.accept = function(visitor) {
    if ( visitor instanceof js_mappingVisitor ) {
        return visitor.visitUpperBound(this);
    } else {
        return visitor.visitChildren(this);
    }
};




js_mappingParser.UpperBoundContext = UpperBoundContext;

js_mappingParser.prototype.upperBound = function() {

    var localctx = new UpperBoundContext(this, this._ctx, this.state);
    this.enterRule(localctx, 40, js_mappingParser.RULE_upperBound);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 227;
        _la = this._input.LA(1);
        if(!(_la===js_mappingParser.T__19 || _la===js_mappingParser.INTEGER)) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function RuleContextContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = js_mappingParser.RULE_ruleContext;
    return this;
}

RuleContextContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
RuleContextContext.prototype.constructor = RuleContextContext;

RuleContextContext.prototype.identifier = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(IdentifierContext);
    } else {
        return this.getTypedRuleContext(IdentifierContext,i);
    }
};

RuleContextContext.prototype.enterRule = function(listener) {
    if(listener instanceof js_mappingListener ) {
        listener.enterRuleContext(this);
	}
};

RuleContextContext.prototype.exitRule = function(listener) {
    if(listener instanceof js_mappingListener ) {
        listener.exitRuleContext(this);
	}
};

RuleContextContext.prototype.accept = function(visitor) {
    if ( visitor instanceof js_mappingVisitor ) {
        return visitor.visitRuleContext(this);
    } else {
        return visitor.visitChildren(this);
    }
};




js_mappingParser.RuleContextContext = RuleContextContext;

js_mappingParser.prototype.ruleContext = function() {

    var localctx = new RuleContextContext(this, this._ctx, this.state);
    this.enterRule(localctx, 42, js_mappingParser.RULE_ruleContext);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 229;
        this.identifier();
        this.state = 232;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===js_mappingParser.T__20) {
            this.state = 230;
            this.match(js_mappingParser.T__20);
            this.state = 231;
            this.identifier();
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function SourceDefaultContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = js_mappingParser.RULE_sourceDefault;
    return this;
}

SourceDefaultContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SourceDefaultContext.prototype.constructor = SourceDefaultContext;

SourceDefaultContext.prototype.fhirPath = function() {
    return this.getTypedRuleContext(FhirPathContext,0);
};

SourceDefaultContext.prototype.enterRule = function(listener) {
    if(listener instanceof js_mappingListener ) {
        listener.enterSourceDefault(this);
	}
};

SourceDefaultContext.prototype.exitRule = function(listener) {
    if(listener instanceof js_mappingListener ) {
        listener.exitSourceDefault(this);
	}
};

SourceDefaultContext.prototype.accept = function(visitor) {
    if ( visitor instanceof js_mappingVisitor ) {
        return visitor.visitSourceDefault(this);
    } else {
        return visitor.visitChildren(this);
    }
};




js_mappingParser.SourceDefaultContext = SourceDefaultContext;

js_mappingParser.prototype.sourceDefault = function() {

    var localctx = new SourceDefaultContext(this, this._ctx, this.state);
    this.enterRule(localctx, 44, js_mappingParser.RULE_sourceDefault);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 234;
        this.match(js_mappingParser.T__21);
        this.state = 235;
        this.fhirPath();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function AliasContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = js_mappingParser.RULE_alias;
    return this;
}

AliasContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AliasContext.prototype.constructor = AliasContext;

AliasContext.prototype.identifier = function() {
    return this.getTypedRuleContext(IdentifierContext,0);
};

AliasContext.prototype.enterRule = function(listener) {
    if(listener instanceof js_mappingListener ) {
        listener.enterAlias(this);
	}
};

AliasContext.prototype.exitRule = function(listener) {
    if(listener instanceof js_mappingListener ) {
        listener.exitAlias(this);
	}
};

AliasContext.prototype.accept = function(visitor) {
    if ( visitor instanceof js_mappingVisitor ) {
        return visitor.visitAlias(this);
    } else {
        return visitor.visitChildren(this);
    }
};




js_mappingParser.AliasContext = AliasContext;

js_mappingParser.prototype.alias = function() {

    var localctx = new AliasContext(this, this._ctx, this.state);
    this.enterRule(localctx, 46, js_mappingParser.RULE_alias);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 237;
        this.match(js_mappingParser.T__3);
        this.state = 238;
        this.identifier();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function WhereClauseContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = js_mappingParser.RULE_whereClause;
    return this;
}

WhereClauseContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
WhereClauseContext.prototype.constructor = WhereClauseContext;

WhereClauseContext.prototype.fhirPath = function() {
    return this.getTypedRuleContext(FhirPathContext,0);
};

WhereClauseContext.prototype.enterRule = function(listener) {
    if(listener instanceof js_mappingListener ) {
        listener.enterWhereClause(this);
	}
};

WhereClauseContext.prototype.exitRule = function(listener) {
    if(listener instanceof js_mappingListener ) {
        listener.exitWhereClause(this);
	}
};

WhereClauseContext.prototype.accept = function(visitor) {
    if ( visitor instanceof js_mappingVisitor ) {
        return visitor.visitWhereClause(this);
    } else {
        return visitor.visitChildren(this);
    }
};




js_mappingParser.WhereClauseContext = WhereClauseContext;

js_mappingParser.prototype.whereClause = function() {

    var localctx = new WhereClauseContext(this, this._ctx, this.state);
    this.enterRule(localctx, 48, js_mappingParser.RULE_whereClause);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 240;
        this.match(js_mappingParser.T__22);
        this.state = 241;
        this.fhirPath();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function CheckClauseContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = js_mappingParser.RULE_checkClause;
    return this;
}

CheckClauseContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
CheckClauseContext.prototype.constructor = CheckClauseContext;

CheckClauseContext.prototype.fhirPath = function() {
    return this.getTypedRuleContext(FhirPathContext,0);
};

CheckClauseContext.prototype.enterRule = function(listener) {
    if(listener instanceof js_mappingListener ) {
        listener.enterCheckClause(this);
	}
};

CheckClauseContext.prototype.exitRule = function(listener) {
    if(listener instanceof js_mappingListener ) {
        listener.exitCheckClause(this);
	}
};

CheckClauseContext.prototype.accept = function(visitor) {
    if ( visitor instanceof js_mappingVisitor ) {
        return visitor.visitCheckClause(this);
    } else {
        return visitor.visitChildren(this);
    }
};




js_mappingParser.CheckClauseContext = CheckClauseContext;

js_mappingParser.prototype.checkClause = function() {

    var localctx = new CheckClauseContext(this, this._ctx, this.state);
    this.enterRule(localctx, 50, js_mappingParser.RULE_checkClause);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 243;
        this.match(js_mappingParser.T__23);
        this.state = 244;
        this.fhirPath();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function LogContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = js_mappingParser.RULE_log;
    return this;
}

LogContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
LogContext.prototype.constructor = LogContext;

LogContext.prototype.fhirPath = function() {
    return this.getTypedRuleContext(FhirPathContext,0);
};

LogContext.prototype.enterRule = function(listener) {
    if(listener instanceof js_mappingListener ) {
        listener.enterLog(this);
	}
};

LogContext.prototype.exitRule = function(listener) {
    if(listener instanceof js_mappingListener ) {
        listener.exitLog(this);
	}
};

LogContext.prototype.accept = function(visitor) {
    if ( visitor instanceof js_mappingVisitor ) {
        return visitor.visitLog(this);
    } else {
        return visitor.visitChildren(this);
    }
};




js_mappingParser.LogContext = LogContext;

js_mappingParser.prototype.log = function() {

    var localctx = new LogContext(this, this._ctx, this.state);
    this.enterRule(localctx, 52, js_mappingParser.RULE_log);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 246;
        this.match(js_mappingParser.T__24);
        this.state = 247;
        this.fhirPath();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function DependentContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = js_mappingParser.RULE_dependent;
    return this;
}

DependentContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DependentContext.prototype.constructor = DependentContext;

DependentContext.prototype.invocation = function() {
    return this.getTypedRuleContext(InvocationContext,0);
};

DependentContext.prototype.rules = function() {
    return this.getTypedRuleContext(RulesContext,0);
};

DependentContext.prototype.enterRule = function(listener) {
    if(listener instanceof js_mappingListener ) {
        listener.enterDependent(this);
	}
};

DependentContext.prototype.exitRule = function(listener) {
    if(listener instanceof js_mappingListener ) {
        listener.exitDependent(this);
	}
};

DependentContext.prototype.accept = function(visitor) {
    if ( visitor instanceof js_mappingVisitor ) {
        return visitor.visitDependent(this);
    } else {
        return visitor.visitChildren(this);
    }
};




js_mappingParser.DependentContext = DependentContext;

js_mappingParser.prototype.dependent = function() {

    var localctx = new DependentContext(this, this._ctx, this.state);
    this.enterRule(localctx, 54, js_mappingParser.RULE_dependent);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 249;
        this.match(js_mappingParser.T__25);
        this.state = 252;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case js_mappingParser.IDENTIFIER:
        case js_mappingParser.DELIMITEDIDENTIFIER:
            this.state = 250;
            this.invocation();
            break;
        case js_mappingParser.T__7:
            this.state = 251;
            this.rules();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function RuleTargetContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = js_mappingParser.RULE_ruleTarget;
    return this;
}

RuleTargetContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
RuleTargetContext.prototype.constructor = RuleTargetContext;

RuleTargetContext.prototype.ruleContext = function() {
    return this.getTypedRuleContext(RuleContextContext,0);
};

RuleTargetContext.prototype.transform = function() {
    return this.getTypedRuleContext(TransformContext,0);
};

RuleTargetContext.prototype.alias = function() {
    return this.getTypedRuleContext(AliasContext,0);
};

RuleTargetContext.prototype.targetListMode = function() {
    return this.getTypedRuleContext(TargetListModeContext,0);
};

RuleTargetContext.prototype.invocation = function() {
    return this.getTypedRuleContext(InvocationContext,0);
};

RuleTargetContext.prototype.enterRule = function(listener) {
    if(listener instanceof js_mappingListener ) {
        listener.enterRuleTarget(this);
	}
};

RuleTargetContext.prototype.exitRule = function(listener) {
    if(listener instanceof js_mappingListener ) {
        listener.exitRuleTarget(this);
	}
};

RuleTargetContext.prototype.accept = function(visitor) {
    if ( visitor instanceof js_mappingVisitor ) {
        return visitor.visitRuleTarget(this);
    } else {
        return visitor.visitChildren(this);
    }
};




js_mappingParser.RuleTargetContext = RuleTargetContext;

js_mappingParser.prototype.ruleTarget = function() {

    var localctx = new RuleTargetContext(this, this._ctx, this.state);
    this.enterRule(localctx, 56, js_mappingParser.RULE_ruleTarget);
    var _la = 0; // Token type
    try {
        this.state = 269;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,28,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 254;
            this.ruleContext();
            this.state = 257;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===js_mappingParser.T__1) {
                this.state = 255;
                this.match(js_mappingParser.T__1);
                this.state = 256;
                this.transform();
            }

            this.state = 260;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===js_mappingParser.T__3) {
                this.state = 259;
                this.alias();
            }

            this.state = 263;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(((((_la - 29)) & ~0x1f) == 0 && ((1 << (_la - 29)) & ((1 << (js_mappingParser.T__28 - 29)) | (1 << (js_mappingParser.T__30 - 29)) | (1 << (js_mappingParser.T__33 - 29)) | (1 << (js_mappingParser.T__34 - 29)))) !== 0)) {
                this.state = 262;
                this.targetListMode();
            }

            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 265;
            this.invocation();
            this.state = 267;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===js_mappingParser.T__3) {
                this.state = 266;
                this.alias();
            }

            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function TransformContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = js_mappingParser.RULE_transform;
    return this;
}

TransformContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TransformContext.prototype.constructor = TransformContext;

TransformContext.prototype.literal = function() {
    return this.getTypedRuleContext(LiteralContext,0);
};

TransformContext.prototype.ruleContext = function() {
    return this.getTypedRuleContext(RuleContextContext,0);
};

TransformContext.prototype.invocation = function() {
    return this.getTypedRuleContext(InvocationContext,0);
};

TransformContext.prototype.enterRule = function(listener) {
    if(listener instanceof js_mappingListener ) {
        listener.enterTransform(this);
	}
};

TransformContext.prototype.exitRule = function(listener) {
    if(listener instanceof js_mappingListener ) {
        listener.exitTransform(this);
	}
};

TransformContext.prototype.accept = function(visitor) {
    if ( visitor instanceof js_mappingVisitor ) {
        return visitor.visitTransform(this);
    } else {
        return visitor.visitChildren(this);
    }
};




js_mappingParser.TransformContext = TransformContext;

js_mappingParser.prototype.transform = function() {

    var localctx = new TransformContext(this, this._ctx, this.state);
    this.enterRule(localctx, 58, js_mappingParser.RULE_transform);
    try {
        this.state = 274;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,29,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 271;
            this.literal();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 272;
            this.ruleContext();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 273;
            this.invocation();
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function InvocationContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = js_mappingParser.RULE_invocation;
    return this;
}

InvocationContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
InvocationContext.prototype.constructor = InvocationContext;

InvocationContext.prototype.identifier = function() {
    return this.getTypedRuleContext(IdentifierContext,0);
};

InvocationContext.prototype.paramList = function() {
    return this.getTypedRuleContext(ParamListContext,0);
};

InvocationContext.prototype.enterRule = function(listener) {
    if(listener instanceof js_mappingListener ) {
        listener.enterInvocation(this);
	}
};

InvocationContext.prototype.exitRule = function(listener) {
    if(listener instanceof js_mappingListener ) {
        listener.exitInvocation(this);
	}
};

InvocationContext.prototype.accept = function(visitor) {
    if ( visitor instanceof js_mappingVisitor ) {
        return visitor.visitInvocation(this);
    } else {
        return visitor.visitChildren(this);
    }
};




js_mappingParser.InvocationContext = InvocationContext;

js_mappingParser.prototype.invocation = function() {

    var localctx = new InvocationContext(this, this._ctx, this.state);
    this.enterRule(localctx, 60, js_mappingParser.RULE_invocation);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 276;
        this.identifier();
        this.state = 277;
        this.match(js_mappingParser.T__12);
        this.state = 279;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(((((_la - 40)) & ~0x1f) == 0 && ((1 << (_la - 40)) & ((1 << (js_mappingParser.BOOL - 40)) | (1 << (js_mappingParser.DATETIME - 40)) | (1 << (js_mappingParser.TIME - 40)) | (1 << (js_mappingParser.IDENTIFIER - 40)) | (1 << (js_mappingParser.DELIMITEDIDENTIFIER - 40)) | (1 << (js_mappingParser.STRING - 40)) | (1 << (js_mappingParser.INTEGER - 40)) | (1 << (js_mappingParser.NUMBER - 40)))) !== 0)) {
            this.state = 278;
            this.paramList();
        }

        this.state = 281;
        this.match(js_mappingParser.T__14);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ParamListContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = js_mappingParser.RULE_paramList;
    return this;
}

ParamListContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ParamListContext.prototype.constructor = ParamListContext;

ParamListContext.prototype.param = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ParamContext);
    } else {
        return this.getTypedRuleContext(ParamContext,i);
    }
};

ParamListContext.prototype.enterRule = function(listener) {
    if(listener instanceof js_mappingListener ) {
        listener.enterParamList(this);
	}
};

ParamListContext.prototype.exitRule = function(listener) {
    if(listener instanceof js_mappingListener ) {
        listener.exitParamList(this);
	}
};

ParamListContext.prototype.accept = function(visitor) {
    if ( visitor instanceof js_mappingVisitor ) {
        return visitor.visitParamList(this);
    } else {
        return visitor.visitChildren(this);
    }
};




js_mappingParser.ParamListContext = ParamListContext;

js_mappingParser.prototype.paramList = function() {

    var localctx = new ParamListContext(this, this._ctx, this.state);
    this.enterRule(localctx, 62, js_mappingParser.RULE_paramList);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 283;
        this.param();
        this.state = 288;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===js_mappingParser.T__13) {
            this.state = 284;
            this.match(js_mappingParser.T__13);
            this.state = 285;
            this.param();
            this.state = 290;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ParamContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = js_mappingParser.RULE_param;
    return this;
}

ParamContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ParamContext.prototype.constructor = ParamContext;

ParamContext.prototype.literal = function() {
    return this.getTypedRuleContext(LiteralContext,0);
};

ParamContext.prototype.identifier = function() {
    return this.getTypedRuleContext(IdentifierContext,0);
};

ParamContext.prototype.enterRule = function(listener) {
    if(listener instanceof js_mappingListener ) {
        listener.enterParam(this);
	}
};

ParamContext.prototype.exitRule = function(listener) {
    if(listener instanceof js_mappingListener ) {
        listener.exitParam(this);
	}
};

ParamContext.prototype.accept = function(visitor) {
    if ( visitor instanceof js_mappingVisitor ) {
        return visitor.visitParam(this);
    } else {
        return visitor.visitChildren(this);
    }
};




js_mappingParser.ParamContext = ParamContext;

js_mappingParser.prototype.param = function() {

    var localctx = new ParamContext(this, this._ctx, this.state);
    this.enterRule(localctx, 64, js_mappingParser.RULE_param);
    try {
        this.state = 293;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case js_mappingParser.BOOL:
        case js_mappingParser.DATETIME:
        case js_mappingParser.TIME:
        case js_mappingParser.STRING:
        case js_mappingParser.INTEGER:
        case js_mappingParser.NUMBER:
            this.enterOuterAlt(localctx, 1);
            this.state = 291;
            this.literal();
            break;
        case js_mappingParser.IDENTIFIER:
        case js_mappingParser.DELIMITEDIDENTIFIER:
            this.enterOuterAlt(localctx, 2);
            this.state = 292;
            this.identifier();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function FhirPathContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = js_mappingParser.RULE_fhirPath;
    return this;
}

FhirPathContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FhirPathContext.prototype.constructor = FhirPathContext;

FhirPathContext.prototype.literal = function() {
    return this.getTypedRuleContext(LiteralContext,0);
};

FhirPathContext.prototype.enterRule = function(listener) {
    if(listener instanceof js_mappingListener ) {
        listener.enterFhirPath(this);
	}
};

FhirPathContext.prototype.exitRule = function(listener) {
    if(listener instanceof js_mappingListener ) {
        listener.exitFhirPath(this);
	}
};

FhirPathContext.prototype.accept = function(visitor) {
    if ( visitor instanceof js_mappingVisitor ) {
        return visitor.visitFhirPath(this);
    } else {
        return visitor.visitChildren(this);
    }
};




js_mappingParser.FhirPathContext = FhirPathContext;

js_mappingParser.prototype.fhirPath = function() {

    var localctx = new FhirPathContext(this, this._ctx, this.state);
    this.enterRule(localctx, 66, js_mappingParser.RULE_fhirPath);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 295;
        this.literal();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function LiteralContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = js_mappingParser.RULE_literal;
    return this;
}

LiteralContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
LiteralContext.prototype.constructor = LiteralContext;

LiteralContext.prototype.INTEGER = function() {
    return this.getToken(js_mappingParser.INTEGER, 0);
};

LiteralContext.prototype.NUMBER = function() {
    return this.getToken(js_mappingParser.NUMBER, 0);
};

LiteralContext.prototype.STRING = function() {
    return this.getToken(js_mappingParser.STRING, 0);
};

LiteralContext.prototype.DATETIME = function() {
    return this.getToken(js_mappingParser.DATETIME, 0);
};

LiteralContext.prototype.TIME = function() {
    return this.getToken(js_mappingParser.TIME, 0);
};

LiteralContext.prototype.BOOL = function() {
    return this.getToken(js_mappingParser.BOOL, 0);
};

LiteralContext.prototype.enterRule = function(listener) {
    if(listener instanceof js_mappingListener ) {
        listener.enterLiteral(this);
	}
};

LiteralContext.prototype.exitRule = function(listener) {
    if(listener instanceof js_mappingListener ) {
        listener.exitLiteral(this);
	}
};

LiteralContext.prototype.accept = function(visitor) {
    if ( visitor instanceof js_mappingVisitor ) {
        return visitor.visitLiteral(this);
    } else {
        return visitor.visitChildren(this);
    }
};




js_mappingParser.LiteralContext = LiteralContext;

js_mappingParser.prototype.literal = function() {

    var localctx = new LiteralContext(this, this._ctx, this.state);
    this.enterRule(localctx, 68, js_mappingParser.RULE_literal);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 297;
        _la = this._input.LA(1);
        if(!(((((_la - 40)) & ~0x1f) == 0 && ((1 << (_la - 40)) & ((1 << (js_mappingParser.BOOL - 40)) | (1 << (js_mappingParser.DATETIME - 40)) | (1 << (js_mappingParser.TIME - 40)) | (1 << (js_mappingParser.STRING - 40)) | (1 << (js_mappingParser.INTEGER - 40)) | (1 << (js_mappingParser.NUMBER - 40)))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function GroupTypeModeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = js_mappingParser.RULE_groupTypeMode;
    return this;
}

GroupTypeModeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
GroupTypeModeContext.prototype.constructor = GroupTypeModeContext;


GroupTypeModeContext.prototype.enterRule = function(listener) {
    if(listener instanceof js_mappingListener ) {
        listener.enterGroupTypeMode(this);
	}
};

GroupTypeModeContext.prototype.exitRule = function(listener) {
    if(listener instanceof js_mappingListener ) {
        listener.exitGroupTypeMode(this);
	}
};

GroupTypeModeContext.prototype.accept = function(visitor) {
    if ( visitor instanceof js_mappingVisitor ) {
        return visitor.visitGroupTypeMode(this);
    } else {
        return visitor.visitChildren(this);
    }
};




js_mappingParser.GroupTypeModeContext = GroupTypeModeContext;

js_mappingParser.prototype.groupTypeMode = function() {

    var localctx = new GroupTypeModeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 70, js_mappingParser.RULE_groupTypeMode);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 299;
        _la = this._input.LA(1);
        if(!(_la===js_mappingParser.T__26 || _la===js_mappingParser.T__27)) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function SourceListModeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = js_mappingParser.RULE_sourceListMode;
    return this;
}

SourceListModeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SourceListModeContext.prototype.constructor = SourceListModeContext;


SourceListModeContext.prototype.enterRule = function(listener) {
    if(listener instanceof js_mappingListener ) {
        listener.enterSourceListMode(this);
	}
};

SourceListModeContext.prototype.exitRule = function(listener) {
    if(listener instanceof js_mappingListener ) {
        listener.exitSourceListMode(this);
	}
};

SourceListModeContext.prototype.accept = function(visitor) {
    if ( visitor instanceof js_mappingVisitor ) {
        return visitor.visitSourceListMode(this);
    } else {
        return visitor.visitChildren(this);
    }
};




js_mappingParser.SourceListModeContext = SourceListModeContext;

js_mappingParser.prototype.sourceListMode = function() {

    var localctx = new SourceListModeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 72, js_mappingParser.RULE_sourceListMode);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 301;
        _la = this._input.LA(1);
        if(!(((((_la - 29)) & ~0x1f) == 0 && ((1 << (_la - 29)) & ((1 << (js_mappingParser.T__28 - 29)) | (1 << (js_mappingParser.T__29 - 29)) | (1 << (js_mappingParser.T__30 - 29)) | (1 << (js_mappingParser.T__31 - 29)) | (1 << (js_mappingParser.T__32 - 29)))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function TargetListModeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = js_mappingParser.RULE_targetListMode;
    return this;
}

TargetListModeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TargetListModeContext.prototype.constructor = TargetListModeContext;


TargetListModeContext.prototype.enterRule = function(listener) {
    if(listener instanceof js_mappingListener ) {
        listener.enterTargetListMode(this);
	}
};

TargetListModeContext.prototype.exitRule = function(listener) {
    if(listener instanceof js_mappingListener ) {
        listener.exitTargetListMode(this);
	}
};

TargetListModeContext.prototype.accept = function(visitor) {
    if ( visitor instanceof js_mappingVisitor ) {
        return visitor.visitTargetListMode(this);
    } else {
        return visitor.visitChildren(this);
    }
};




js_mappingParser.TargetListModeContext = TargetListModeContext;

js_mappingParser.prototype.targetListMode = function() {

    var localctx = new TargetListModeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 74, js_mappingParser.RULE_targetListMode);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 303;
        _la = this._input.LA(1);
        if(!(((((_la - 29)) & ~0x1f) == 0 && ((1 << (_la - 29)) & ((1 << (js_mappingParser.T__28 - 29)) | (1 << (js_mappingParser.T__30 - 29)) | (1 << (js_mappingParser.T__33 - 29)) | (1 << (js_mappingParser.T__34 - 29)))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function InputModeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = js_mappingParser.RULE_inputMode;
    return this;
}

InputModeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
InputModeContext.prototype.constructor = InputModeContext;


InputModeContext.prototype.enterRule = function(listener) {
    if(listener instanceof js_mappingListener ) {
        listener.enterInputMode(this);
	}
};

InputModeContext.prototype.exitRule = function(listener) {
    if(listener instanceof js_mappingListener ) {
        listener.exitInputMode(this);
	}
};

InputModeContext.prototype.accept = function(visitor) {
    if ( visitor instanceof js_mappingVisitor ) {
        return visitor.visitInputMode(this);
    } else {
        return visitor.visitChildren(this);
    }
};




js_mappingParser.InputModeContext = InputModeContext;

js_mappingParser.prototype.inputMode = function() {

    var localctx = new InputModeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 76, js_mappingParser.RULE_inputMode);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 305;
        _la = this._input.LA(1);
        if(!(_la===js_mappingParser.T__35 || _la===js_mappingParser.T__36)) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ModelModeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = js_mappingParser.RULE_modelMode;
    return this;
}

ModelModeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ModelModeContext.prototype.constructor = ModelModeContext;


ModelModeContext.prototype.enterRule = function(listener) {
    if(listener instanceof js_mappingListener ) {
        listener.enterModelMode(this);
	}
};

ModelModeContext.prototype.exitRule = function(listener) {
    if(listener instanceof js_mappingListener ) {
        listener.exitModelMode(this);
	}
};

ModelModeContext.prototype.accept = function(visitor) {
    if ( visitor instanceof js_mappingVisitor ) {
        return visitor.visitModelMode(this);
    } else {
        return visitor.visitChildren(this);
    }
};




js_mappingParser.ModelModeContext = ModelModeContext;

js_mappingParser.prototype.modelMode = function() {

    var localctx = new ModelModeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 78, js_mappingParser.RULE_modelMode);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 307;
        _la = this._input.LA(1);
        if(!(((((_la - 36)) & ~0x1f) == 0 && ((1 << (_la - 36)) & ((1 << (js_mappingParser.T__35 - 36)) | (1 << (js_mappingParser.T__36 - 36)) | (1 << (js_mappingParser.T__37 - 36)) | (1 << (js_mappingParser.T__38 - 36)))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


exports.js_mappingParser = js_mappingParser;
