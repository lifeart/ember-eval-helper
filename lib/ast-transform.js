"use strict";

class EvalHelperTransform {
  constructor(options) {
    this.syntax = null;
    this.options = options;
  }

  transform(ast) {
    // let b = this.syntax.builders;

    // **** copy from here ****

    function handleNode(node) {
      const value = node.value;
      if (value.type === "TextNode") {
        if (!value.chars.startsWith("`") || !value.chars.endsWith("`")) {
          return;
        }
        node.value = {
          type: "MustacheStatement",
          path: {
            type: "PathExpression",
            original: "e",
            this: false,
            parts: ["e"],
            data: false,
            log: null
          },
          params: [
            {
              type: "StringLiteral",
              value: JSON.stringify("'" + value.chars + "'")
                .slice(0, -2)
                .slice(2),
              original: value.chars,
              loc: null
            },
            {
              type: "PathExpression",
              original: "this",
              this: true,
              parts: [],
              data: false,
              loc: null
            }
          ],
          hash: {
            type: "Hash",
            pairs: [],
            loc: null
          },
          loc: null,
          escaped: true,
          strip: {
            open: false,
            close: false
          }
        };
      }
    }

    let visitor = {
      AttrNode: handleNode
    };

    // **** copy to here ****

    this.syntax.traverse(ast, visitor);

    return ast;
  }
}

// eslint-disable-next-line no-undef
module.exports = EvalHelperTransform;
