/*
* Copyright 2010-2011 Research In Motion Limited.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/


function deleteItem(id) {
    var element = document.getElementById(id);
    element.parentNode.removeChild(element);
}

function FlagItem(id) {
    var element = document.getElementById(id);
    element.className = "greyed-out";
}

function unFlagItem(id) {
    var element = document.getElementById(id);
    element.className = "";
}


/* Wait for the DOM to load before we register webworks ready */
document.addEventListener("DOMContentLoaded", function () {
    document.addEventListener("webworksready", function () {
        var options = {
                includeContextItems: [blackberry.ui.contextmenu.CONTEXT_ALL],
                includePlatformItems: true,
                includeMenuServiceItems: true,
                pinnedItemId: '1'
                },
            items,
            item,
            i,
            contexts = [blackberry.ui.contextmenu.CONTEXT_ALL];

        /* Define the custom context with the options that we want used */
        blackberry.ui.contextmenu.defineCustomContext("PrincessContext", options);

        /* Create a menu item and add it to the context */
        item = {actionId: '1', label: 'Delete Item', icon:'local:///images/icon.png'};
        blackberry.ui.contextmenu.addItem(contexts, item, deleteItem);

        /* And another */
        item = {actionId: '2', label: 'Flag Item', icon:'local:///images/icon.png'};
        blackberry.ui.contextmenu.addItem(contexts, item, FlagItem);

        /* And another */
        item = {actionId: '7', label: 'Un Flag Item', icon:'local:///images/icon.png'};
        blackberry.ui.contextmenu.addItem(contexts, item, unFlagItem);

        /* And another */
        item = {actionId: '3', label: 'Reply', icon:'local:///images/icon.png'};
        blackberry.ui.contextmenu.addItem(contexts, item, FlagItem);

        /* And another */
        item = {actionId: '4', label: 'Reply All', icon:'local:///images/icon.png'};
        blackberry.ui.contextmenu.addItem(contexts, item, FlagItem);

        /* And another */
        item = {actionId: '5', label: 'Move', icon:'local:///images/icon.png'};
        blackberry.ui.contextmenu.addItem(contexts, item, FlagItem);

        /* And another */
        item = {actionId: '6', label: 'File', icon:'local:///images/icon.png'};
        blackberry.ui.contextmenu.addItem(contexts, item, FlagItem);

        // Add a click handler to all the items in the list
        items = document.getElementsByClassName("listItem");
        for(i = 0; i < items.length; i++) {
            items[i].addEventListener('click', function () {
                blackberry.invoke.invoke({
                    target: "sys.pim.uib.email.composer",
                    action: "bb.action.COMPOSE"
                });
            });
        }

    });
});

