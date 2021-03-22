export function getSelectedChildElements() {
    let selectedElements = [];

    [].forEach.call(
        document.querySelectorAll('.sts_child_checkbox'),
        function (el) {
            if (el.checked) {
                selectedElements.push({
                    id: el.getAttribute('data-item-id'),
                    description: el.getAttribute('data-item-description')
                });
            }
        });

    return selectedElements;
}

export function getEverySelectedElement() {
    let selectedElements = [];

    [].forEach.call(
        document.querySelectorAll('.sts_child_checkbox, .sts_root_checkbox'),
        function (el) {
            if (el.checked) {
                selectedElements.push({
                    id: el.getAttribute('data-item-id'),
                    description: el.getAttribute('data-item-description')
                });
            }
        });

    return selectedElements;
}


export function buildTree(treeModel, rootElementId, isDefaultView, isParentDescBold, descriptionSpanClass, checkboxClass) {
    if (rootElementId) {
        var treeRoot = document.getElementById(rootElementId);
        if (treeRoot) {
            for (var i = 0; i < treeModel.length; i++) {
                var rootUL = document.createElement('ul');

                var childrenContainer = document.createElement('div');
                childrenContainer.setAttribute('id', 'sts_div_' + treeModel[i].id);
                if (isDefaultView)
                    childrenContainer.style.display = 'none';

                appendCheckbox(rootUL, treeModel[i], checkboxClass);
                appendDescription(rootUL, treeModel[i], isParentDescBold, descriptionSpanClass);
                addItem(childrenContainer, treeModel[i], isParentDescBold, descriptionSpanClass, checkboxClass);

                rootUL.appendChild(childrenContainer);
                treeRoot.appendChild(rootUL);
            }
        }
    }
}

function addItem(parentContainer, treeModel, isParentDescBold, descriptionSpanClass, checkboxClass) {
    if (treeModel) {
        for (var i = 0; i < treeModel.children.length; i++) {
            var item = treeModel.children[i];
            var nestedElement = document.createElement('ul');

            appendCheckbox(nestedElement, item, checkboxClass);
            appendDescription(nestedElement, item, item.children.length > 0 && isParentDescBold, descriptionSpanClass);

            parentContainer.appendChild(nestedElement);

            if (item.children.length > 0) {
                var childrenContainer = document.createElement('div');
                childrenContainer.setAttribute('id', 'sts_div_' + item.id);

                addItem(childrenContainer, item, isParentDescBold, descriptionSpanClass, checkboxClass);
                nestedElement.appendChild(childrenContainer);
            }
        }
    }
}

function appendCheckbox(nestedElement, item, checkboxClass) {
    var createClickHandler = function (event) {
        let isRootCheckbox = event.target.classList.contains('sts_root_checkbox');

        if (isRootCheckbox) {
            let itemId = event.target.getAttribute('data-item-id');
            let childrenContainer = document.getElementById('sts_div_' + itemId);
            [].forEach.call(
                childrenContainer.querySelectorAll('.sts_child_checkbox, .sts_root_checkbox'),
                function (el) {
                    el.checked = event.target.checked;
                });
        } 
    };

    let hasChildren = item.children.length > 0;

    var checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'checkbox');
    checkbox.setAttribute('id', 'sts_checkbox_' + item.id);
    checkbox.onclick = (event) => createClickHandler(event);
    checkbox.setAttribute('data-item-id', item.id);
    checkbox.setAttribute('data-item-description', item.description);
    checkbox.classList.add(hasChildren ? 'sts_root_checkbox' : 'sts_child_checkbox');

    if (checkbox)

    if (checkboxClass)
        checkbox.classList.add(checkboxClass);

    nestedElement.appendChild(checkbox);
}

function appendDescription(childrenContainer, item, isParentDescBold, descriptionSpanClass) {
    var descriptionSpan = document.createElement('span');
    descriptionSpan.setAttribute('id', 'sts_description_' + item.id);

    if (descriptionSpanClass) {
        descriptionSpan.classList.add(descriptionSpanClass);
    }

    var createClickHandler = function () {
        var element = document.getElementById('sts_div_' + item.id);
        if (element) {
            if (element.style.display == 'none') {
                element.style.display = 'block';
            }
            else {
                element.style.display = 'none';
            }
        }
    };

    if (item.children.length > 0) descriptionSpan.onclick = () => createClickHandler();

    descriptionSpan.innerHTML = item.description;

    if (isParentDescBold)
        descriptionSpan.style.fontWeight = "bold";

    childrenContainer.appendChild(descriptionSpan);
}