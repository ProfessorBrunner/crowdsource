angular.module('experiments').directive('lblDraggable', function() {
    return function(scope, element) {
		// this gives us the native JS object
        var el = element[0];

        el.draggable = true;

        el.addEventListener(
            'dragstart',
            function(e) {
                e.dataTransfer.effectAllowed = 'copy';
                e.dataTransfer.setData('Text', this.id);
                this.classList.add('drag');
                return false;
            },
            false
        );

        el.addEventListener(
            'dragend',
            function(e) {
                this.classList.remove('drag');
                return false;
            },
            false
        );
    }
    }
});

angular.module('experiments').directive('lblDroppable', function() {
    return {
        scope: {},
        link: function(scope, element) {
            // again we need the native object
            var el = element[0];
        }
    }
});