materialAdmin

// =========================================================================
// INPUT FEILDS MODIFICATION
// =========================================================================

//Add blue animated border and remove with condition when focus and blur

    .directive('fgLine', function () {
        return {
            restrict: 'C',
            link: function (scope, element) {
                if ($('.fg-line')[0]) {
                    $('body').on('focus', '.form-control', function () {
                        $(this).closest('.fg-line').addClass('fg-toggled');
                    })

                    $('body').on('blur', '.form-control', function () {
                        var p = $(this).closest('.form-group');
                        var i = p.find('.form-control').val();

                        if (p.hasClass('fg-float')) {
                            if (i.length == 0) {
                                $(this).closest('.fg-line').removeClass('fg-toggled');
                            }
                        }
                        else {
                            $(this).closest('.fg-line').removeClass('fg-toggled');
                        }
                    });
                }

            }
        }

    })



    // =========================================================================
    // AUTO SIZE TEXTAREA
    // =========================================================================

    .directive('autoSize', function () {
        return {
            restrict: 'A',
            link: function (scope, element) {
                if (element[0]) {
                    autosize(element);
                }
            }
        }
    })


    // =========================================================================
    // BOOTSTRAP SELECT
    // =========================================================================

    .directive('selectPicker', function () {
        return {
            restrict: 'A',
            link: function (scope, element, attrs) {
                //if (element[0]) {
                element.selectpicker();
                //}
            }
        }
    })


    // =========================================================================
    // INPUT MASK
    // =========================================================================

    .directive('inputMask', function () {
        return {
            restrict: 'A',
            scope: {
                inputMask: '='
            },
            link: function (scope, element) {
                element.mask(scope.inputMask.mask);
            }
        }
    })


    // =========================================================================
    // COLOR PICKER
    // =========================================================================

    .directive('colordPicker', function () {
        return {
            restrict: 'A',
            link: function (scope, element, attrs) {
                $(element).each(function () {
                    var colorOutput = $(this).closest('.cp-container').find('.cp-value');
                    $(this).farbtastic(colorOutput);
                });

            }
        }
    })



    // =========================================================================
    // PLACEHOLDER FOR IE 9 (on .form-control class)
    // =========================================================================

    .directive('formControl', function () {
        return {
            restrict: 'C',
            link: function (scope, element, attrs) {
                if (angular.element('html').hasClass('ie9')) {
                    $('input, textarea').placeholder({
                        customClass: 'ie9-placeholder'
                    });
                }
            }

        }
    })

    .directive ('pollQuestionOptionList', function pollQuestionOptionList() {
        return {
            restrict: 'E',
            scope: {

                optionType: "=",
                optionBody: "=",
                answerValue: "=specificAnswerValue",
                questionId: "=",
                optionId: "="

            },
            templateUrl: "template/poll-question-option-list-template.html",
            link: function (scope, element, attrs) {



                scope.calculateResiduePercent = function (qId, oId) {
                    var sum = 0;

                    var length = numProps(scope.answerValue[qId]);


                    for (var i = 0; i < length; i++) {

                        sum = sum + scope.answerValue[qId][i]*100;

                    }

                    if (sum > 100){

                        alert(sum +" can not be higher than 100%");

                        scope.answerValue[qId][oId] = ((scope.answerValue[qId][oId]*100) - (sum - 100))/100;

                    } else{

                        alert(sum +" is less than 100%, Good!");
                    }

                };

                /*scope.$watch('answerValue', function (newVal, oldVal) {
                    scope.calculateResiduePercent();
                }, true);*/

                function add(a, b) {
                    return a + b;
                }

                function numProps(obj) {
                    var c = 0;
                    for (var key in obj) {
                        if (obj.hasOwnProperty(key)) ++c;
                    }
                    return c;
                }


            }

        }
    });
