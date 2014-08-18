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
});

angular.module('experiments').directive('lblDroppable', function() {
    return {
        scope: {},
        link: function(scope, element) {
            // again we need the native object
            var el = element[0];
        }
        el.addEventListener(
		    'dragover',
		    function(e) {
		        e.dataTransfer.dropEffect = 'copy';
		        // allows us to drop
		        if (e.preventDefault) e.preventDefault();
		        this.classList.add('over');
		        return false;
		    },
		    false
		);
		el.addEventListener(
		    'dragenter',
		    function(e) {
		        this.classList.add('over');
		        return false;
		    },
		    false
		);

		el.addEventListener(
		    'dragleave',
		    function(e) {
		        this.classList.remove('over');
		        return false;
		    },
		    false
		);

		el.addEventListener(
		    'drop',
		    function(e) {
		        // Stops some browsers from redirecting.
		        if (e.stopPropagation) e.stopPropagation();

		        this.classList.remove('over');

		        var item = document.getElementById(e.dataTransfer.getData('Text'));
		        this.appendChild(item);

		        return false;
		    },
		    false
		);

    }
});