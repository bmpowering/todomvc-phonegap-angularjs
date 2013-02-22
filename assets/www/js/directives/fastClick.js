todomvc.directive('fastClick', function() {
    return function(scope, elem, attr) {
        elem.fastClick(function (e) {
            scope.$apply(attr.fastClick);
        })
    };
});