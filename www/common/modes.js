define(function () {
    var Modes = {};

    // mode language (extension)
    var list = Modes.list = [
        "apl apl .apl",
        "asciiarmor asciiarmor",
        "asn.1 asn.1",
        "asterisk asterisk",
        "brainfuck brainfuck .b",
        "clike clike",
        "clojure clojure",
        "cmake cmake",
        "cobol cobol",
        "coffeescript coffeescript",
        "commonlisp commonlisp",
        "crystal crystal",
        "css css .css",
        "cypher cypher",
        "d d",
        "dart dart",
        "diff diff",
        "django django",
        "dockerfile dockerfile",
        "dtd dtd",
        "dylan dylan",
        "ebnf ebnf",
        "ecl ecl",
        "eiffel eiffel",
        "elm elm .elm",
        "erlang erlang",
        "factor factor",
        "fcl fcl",
        "forth forth",
        "fortran fortran",
        "gas gas",
        "gfm gfm .md",
        "gherkin gherkin",
        "go go",
        "groovy groovy",
        "haml haml",
        "handlebars handlebars",
        "haskell haskell .hs",
        "haskell-literate haskell-literate",
        "haxe haxe",
        "htmlembedded htmlembedded",
        "htmlmixed htmlmixed .html",
        "http http",
        "idl idl",
        "index.html index.html",
        "jade jade",
        "javascript javascript .js",
        "jinja2 jinja2",
        "jsx jsx .jsx",
        "julia julia",
        "livescript livescript",
        "loadmode.js loadmode.js",
        "lua lua",
        "markdown markdown .md",
        "mathematica mathematica",
        "meta.js meta.js",
        "mirc mirc",
        "mllike mllike",
        "modelica modelica",
        "mscgen mscgen",
        "mumps mumps",
        "nginx nginx",
        "nsis nsis",
        "ntriples ntriples",
        "octave octave",
        "oz oz",
        "pascal pascal",
        "pegjs pegjs",
        "perl perl",
        "php php",
        "pig pig",
        "properties properties",
        "protobuf protobuf",
        "puppet puppet",
        "python python .py",
        "q q",
        "r r",
        "rpm rpm",
        "rst rst",
        "ruby ruby",
        "rust rust",
        "sass sass",
        "scheme scheme .scm",
        "shell shell .sh",
        "sieve sieve",
        "slim slim",
        "smalltalk smalltalk",
        "smarty smarty",
        "solr solr",
        "soy soy",
        "sparql sparql",
        "spreadsheet spreadsheet",
        "sql sql",
        "stex stex",
        "stylus stylus",
        "swift swift",
        "tcl tcl",
        "text text .txt",
        "textile textile",
        "tiddlywiki tiddlywiki",
        "tiki tiki",
        "toml toml",
        "tornado tornado",
        "troff troff",
        "ttcn ttcn",
        "ttcn-cfg ttcn-cfg",
        "turtle turtle",
        "twig twig",
        "vb vb",
        "vbscript vbscript",
        "velocity velocity",
        "verilog verilog",
        "vhdl vhdl",
        "vue vue",
        "xml xml",
        //"xwiki xwiki21",
        "xquery xquery",
        "yaml yaml .yaml",
        "yaml-frontmatter yaml-frontmatter",
        "z80 z80"
    ].map(function (line) {
        var kv = line.split(/\s/);
        return {
            language: kv[0].replace(/_/g, ' '),
            mode: kv[1],
            ext: kv[2],
        };
    });

    var extensionOf = Modes.extensionOf = function (mode) {
        var ext = '';
        list.some(function (o) {
            if (o.mode !== mode) { return; }
            ext = o.ext || '';
            return true;
        });
        return ext;
    };

    return Modes;
});