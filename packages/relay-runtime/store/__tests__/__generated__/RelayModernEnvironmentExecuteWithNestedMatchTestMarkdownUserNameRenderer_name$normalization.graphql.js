/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 * 
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @generated SignedSource<<6e3b80904f5646bb59a876af306aa89a>>
 * @flow
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

/*::
import type { NormalizationSplitOperation } from 'relay-runtime';

import type { Local3DPayload } from "relay-runtime";
type RelayModernEnvironmentExecuteWithNestedMatchTestPlainUserNameRenderer_name$normalization = any;
export type RelayModernEnvironmentExecuteWithNestedMatchTestPlainUserNameRenderer_name = {|
  ...RelayModernEnvironmentExecuteWithNestedMatchTestPlainUserNameRenderer_name$normalization,
|};
export type RelayModernEnvironmentExecuteWithNestedMatchTestMarkdownUserNameRenderer_name$normalization = {|
  +__typename: string,
  +markdown: ?string,
  +data: ?{|
    +markup: ?string,
    +id: ?string,
  |},
  +user: ?{|
    +innerRenderer: ?({|
      +__typename: "PlainUserNameRenderer",
      +__module_operation_RelayModernEnvironmentExecuteWithNestedMatchTestMarkdownUserNameRenderer_name: ?any,
      +__module_component_RelayModernEnvironmentExecuteWithNestedMatchTestMarkdownUserNameRenderer_name: ?any,
      ...RelayModernEnvironmentExecuteWithNestedMatchTestPlainUserNameRenderer_name,
    |} | Local3DPayload<"RelayModernEnvironmentExecuteWithNestedMatchTestMarkdownUserNameRenderer_name", {|
      +__typename: "PlainUserNameRenderer",
      ...RelayModernEnvironmentExecuteWithNestedMatchTestPlainUserNameRenderer_name,
    |}> | {|
      +__typename: string,
    |}),
    +id: string,
  |},
|};

*/

var node/*: NormalizationSplitOperation*/ = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
},
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "kind": "SplitOperation",
  "metadata": {},
  "name": "RelayModernEnvironmentExecuteWithNestedMatchTestMarkdownUserNameRenderer_name$normalization",
  "selections": [
    (v0/*: any*/),
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "markdown",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "MarkdownUserNameData",
      "kind": "LinkedField",
      "name": "data",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "markup",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "filters": null,
          "handle": "markup_handler",
          "key": "",
          "kind": "ScalarHandle",
          "name": "markup"
        },
        (v1/*: any*/)
      ],
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "User",
      "kind": "LinkedField",
      "name": "user",
      "plural": false,
      "selections": [
        {
          "alias": "innerRenderer",
          "args": [
            {
              "kind": "Literal",
              "name": "supported",
              "value": [
                "PlainUserNameRenderer"
              ]
            }
          ],
          "concreteType": null,
          "kind": "LinkedField",
          "name": "nameRenderer",
          "plural": false,
          "selections": [
            (v0/*: any*/),
            {
              "kind": "InlineFragment",
              "selections": [
                {
                  "args": null,
                  "documentName": "RelayModernEnvironmentExecuteWithNestedMatchTestMarkdownUserNameRenderer_name",
                  "fragmentName": "RelayModernEnvironmentExecuteWithNestedMatchTestPlainUserNameRenderer_name",
                  "fragmentPropName": "name",
                  "kind": "ModuleImport"
                }
              ],
              "type": "PlainUserNameRenderer",
              "abstractKey": null
            }
          ],
          "storageKey": "nameRenderer(supported:[\"PlainUserNameRenderer\"])"
        },
        (v1/*: any*/)
      ],
      "storageKey": null
    }
  ]
};
})();

if (__DEV__) {
  (node/*: any*/).hash = "44c58e2b7f52b082c9fbb6fc18edbfa3";
}

module.exports = node;
