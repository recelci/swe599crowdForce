materialAdmin

// =========================================================================
// Initialize constants and variables.
// =========================================================================

    .constant('USER', {"USER_ROLES": ["Student", "Faculty Member", "Other"]})

    .run(["$rootScope", function ($rootScope) {
        $rootScope.model = {
            user: {
                email: "",
                userName: "",
                userLastName: "",
                photo: "",
                role: "",
                data: {
                    createdPolls: [],
                    participatedPolls: []
                },
                isAdmin: false
            },

            poll: {
                isOwnerPrivate: "",
                title: "",
                description: "",
                question: [],
                participant: [],
                owner: "",
                createDate: "",
                endDate: "",
                updateDate: "",
                authRole: [],
                readyToPublish: ""
            },

            pollQuestion: {
                body: "",
                answerType: "",
                placeHolder: "",
                option: []
            },

            pollQuestionOption: {
                body: "",
                value: []
            },

            pollAnswerType: [

                'Number',
                'Text',
                'Time',
                'Date',
                'Currency',
                'Percent',
                'Radio',
                'Multiple-Choice'
            ]


        };

        localStorage.setItem('ma-layout-status', 1);
    }])

    // =========================================================================
    // Base controller for common functions
    // =========================================================================

    .controller('materialadminCtrl', function ($timeout, $state, growlService, $window, fireFactory, $rootScope, currentPoll) {

        // Detact Mobile Browser
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            angular.element('html').addClass('ismobile');
        }

        // By default Sidbars are hidden in boxed layout and in wide layout only the right sidebar is hidden.
        this.sidebarToggle = {
            left: false,
            right: false
        };

        // By default template has a boxed layout (Enables dynamic left-bar)
        this.layoutType = localStorage.getItem('ma-layout-status');


        // For Mainmenu Active Class
        this.$state = $state;

        //Close sidebar on click
        this.sidebarStat = function (event) {
            if (!angular.element(event.target).parent().hasClass('active')) {
                this.sidebarToggle.left = false;
            }
        };

        //Listview Search (Check listview pages)
        this.listviewSearchStat = false;

        this.lvSearch = function () {
            this.listviewSearchStat = true;
        };

        //Listview menu toggle in small screens
        this.lvMenuStat = false;

        //Blog
        this.wallCommenting = [];

        this.wallImage = false;
        this.wallVideo = false;
        this.wallLink = false;


        //Dashboard

        this.dashboardData = currentPoll.index();

        /*this.pollDashboardTotalCount = 125;*/

        //Authorization Control
        this.authData = fireFactory.firebaseRef().getAuth();
        if (this.authData) {
            console.log("User " + this.authData.uid + " is logged in with " + this.authData.provider);
        } else {
            $window.location.href = 'login.html';
        }
        this.userId = this.authData.uid;
        this.email = this.authData.password.email;

        this.currentUserData = fireFactory.getUserData(this.userId);
        this.userImage = 'img/space_invaders_big.jpg';


        this.logout = function () {
            fireFactory.firebaseRef().unauth();
            $window.location.href = 'login.html';
        };

        $rootScope.currentUserReference = this;

        this.currentUserData.$loaded().then(function (loadedData) {

            if (!loadedData.customTypes) {
                loadedData.customTypes = [];
            }
            if (loadedData.userImage) {
                $rootScope.currentUserReference.userImage = loadedData.userImage;
                $rootScope.currentUserReference.userImageSmall = loadedData.userImageSmall;
            }
        });

        //Welcome Message
        growlService.growl('Welcome back ' + this.email, 'inverse');
    })


    // =========================================================================
    // Header
    // =========================================================================
    .controller('headerCtrl', function ($timeout, messageService) {

        // Top Search
        this.openSearch = function () {
            angular.element('#header').addClass('search-toggled');
            //growlService.growl('Welcome back Mallinda Hollaway', 'inverse');
        };

        this.closeSearch = function () {
            angular.element('#header').removeClass('search-toggled');
        };

        // Get messages and notification for header
        this.img = messageService.img;
        this.user = messageService.user;
        this.user = messageService.text;

        this.messageResult = messageService.getMessage(this.img, this.user, this.text);


        //Clear Notification
        this.clearNotification = function ($event) {
            $event.preventDefault();

            var x = angular.element($event.target).closest('.listview');
            var y = x.find('.lv-item');
            var z = y.size();

            angular.element($event.target).parent().fadeOut();

            x.find('.list-group').prepend('<i class="grid-loading hide-it"></i>');
            x.find('.grid-loading').fadeIn(1500);
            var w = 0;

            y.each(function () {
                var z = $(this);
                $timeout(function () {
                    z.addClass('animated fadeOutRightBig').delay(1000).queue(function () {
                        z.remove();
                    });
                }, w += 150);
            });

            $timeout(function () {
                angular.element('#notifications').addClass('empty');
            }, (z * 150) + 200);
        };

        // Clear Local Storage
        this.clearLocalStorage = function () {

            //Get confirmation, if confirmed clear the localStorage
            swal({
                title: "Are you sure?",
                text: "All your saved localStorage values will be removed",
                type: "warning",
                showCancelButton: true,
                confirmButtonColor: "#F44336",
                confirmButtonText: "Yes, delete it!",
                closeOnConfirm: false
            }, function () {
                localStorage.clear();
                swal("Done!", "localStorage is cleared", "success");
            });

        };

        //Fullscreen View
        this.fullScreen = function () {
            //Launch
            function launchIntoFullscreen(element) {
                if (element.requestFullscreen) {
                    element.requestFullscreen();
                } else if (element.mozRequestFullScreen) {
                    element.mozRequestFullScreen();
                } else if (element.webkitRequestFullscreen) {
                    element.webkitRequestFullscreen();
                } else if (element.msRequestFullscreen) {
                    element.msRequestFullscreen();
                }
            }

            //Exit
            function exitFullscreen() {
                if (document.exitFullscreen) {
                    document.exitFullscreen();
                } else if (document.mozCancelFullScreen) {
                    document.mozCancelFullScreen();
                } else if (document.webkitExitFullscreen) {
                    document.webkitExitFullscreen();
                }
            }

            if (exitFullscreen()) {
                launchIntoFullscreen(document.documentElement);
            }
            else {
                launchIntoFullscreen(document.documentElement);
            }
        }

    })

    // =========================================================================
    // Best Selling Widget
    // =========================================================================

    .controller('bestsellingCtrl', function (bestsellingService) {
        // Get Best Selling widget Data
        this.img = bestsellingService.img;
        this.name = bestsellingService.name;
        this.range = bestsellingService.range;

        this.bsResult = bestsellingService.getBestselling(this.img, this.name, this.range);
    })


    // =========================================================================
    // To do List Widget
    // =========================================================================

    .controller('todoCtrl', function (todoService) {

        //Get To do List Widget Data
        this.todo = todoService.todo;

        this.tdResult = todoService.getTodo(this.todo);

        //Add new Item (closed by default)
        this.addTodoStat = false;
    })


    // =========================================================================
    // Recent Items Widget
    // =========================================================================

    .controller('recentitemCtrl', function (recentitemService) {

        //Get Recent Items Widget Data
        this.id = recentitemService.id;
        this.name = recentitemService.name;
        this.parseInt = recentitemService.price;

        this.riResult = recentitemService.getRecentitem(this.id, this.name, this.price);
    })


    // =========================================================================
    // Recent Posts Widget
    // =========================================================================

    .controller('recentpostCtrl', function (recentpostService) {

        //Get Recent Posts Widget Items
        this.img = recentpostService.img;
        this.user = recentpostService.user;
        this.text = recentpostService.text;

        this.rpResult = recentpostService.getRecentpost(this.img, this.user, this.text);
    })

    // =========================================================================
    // PIE CHART
    // =========================================================================

    .controller('chartCtrl', function ($scope) {
        $scope.percent = 50;
        $scope.options = {
            barColor: '#ef1e25',
            trackColor: '#f9f9f9',
            scaleColor: '#dfe0e0',
            scaleLength: 5,
            lineCap: 'round',
            lineWidth: 3,
            size: 110,
            rotate: 0,
            animate: {
                duration: 1000,
                enabled: true
            }
        };
    })


    //=================================================
    // Profile
    //=================================================

    .controller('profileCtrl', function (growlService, $rootScope) {

        //Get Profile Information from profileService Service

        /*$rootScope.currentUserReference.currentUserData.$loaded().then(function (loadedData) {

         });*/

        //User

        /*this.pristineState = angular.copy($rootScope.currentUserReference.currentUserData);*/

        this.name = $rootScope.currentUserReference.currentUserData.userName;
        this.lastName = $rootScope.currentUserReference.currentUserData.userLastName;
        this.gender = "Male";
        this.birthDay = "23/06/1988";
        this.martialStatus = "Single";
        this.mobileNumber = "00971123456789";
        this.emailAddress = $rootScope.currentUserReference.currentUserData.email;
        this.twitter = "@osman";
        this.twitterUrl = "twitter.com/osman";
        this.skype = "osman";
        this.addressSuite = "Umraniye";
        this.addressCity = "Istanbul";
        this.addressCountry = "Turkey";
        this.role = $rootScope.currentUserReference.currentUserData.role;

        //Edit
        this.editSummary = 0;
        this.editInfo = 0;
        this.editContact = 0;

        this.submit = function (item, message) {
            if (item === 'profileSummary') {


                $rootScope.currentUserReference.currentUserData.$save().then(function () {

                    alert("Profile updated!");

                });

                this.editSummary = 0;

            }

            if (item === 'profileInfo') {

                $rootScope.currentUserReference.currentUserData.$save().then(function () {

                    alert("Profile updated!");

                });

                this.editInfo = 0;

            }

            if (item === 'profileContact') {
                this.editContact = 0;
            }

            growlService.growl(message + ' has updated Successfully!', 'inverse');
        };

        this.cancel = function (item, message) {
            if (item === 'profileSummary') {

                this.editSummary = 0;
            }

            if (item === 'profileInfo') {

                /*$rootScope.currentUserReference.currentUserData = this.pristineState;*/

                $rootScope.currentUserReference.currentUserData.$setPristine();

                this.editInfo = 0;

            }

            if (item === 'profileContact') {
                this.editContact = 0;
            }

            growlService.growl(message + ' has updated Successfully!', 'inverse');
        };

    })


    .controller('PictureUploadCtrl', function ($scope, resizeService, $rootScope) {

        $scope.image = null;
        $scope.imageFileName = '';
        $scope.uploadImage = function () {

            $scope.fileReader = new FileReader();
            $scope.fileReader.readAsDataURL(this.$flow.files[0].file);
            $scope.fileReader.onloadend = function () {
                resizeService.resizeImage($scope.fileReader.result, {
                    size: 100,
                    sizeScale: 'ko',
                    otherOptions: '',
                    height: 256,
                    width: 256
                }, function (err, image) {
                    if (err) {
                        console.error(err);
                        return;
                    }
                    $scope.bigImage = image;
                    $rootScope.currentUserReference.currentUserData.userImage = $scope.bigImage;
                    $rootScope.currentUserReference.currentUserData.$save();
                });
                resizeService.resizeImage($scope.fileReader.result, {
                    size: 100,
                    sizeScale: 'ko',
                    otherOptions: '',
                    height: 48,
                    width: 48
                }, function (err, image) {
                    if (err) {
                        console.error(err);
                        return;
                    }
                    $scope.smallImage = image;
                    $rootScope.currentUserReference.currentUserData.userImageSmall = $scope.smallImage;
                    $rootScope.currentUserReference.currentUserData.$save();
                });
            };

        };


    })

    //=================================================
    // LOGIN / REGISTER
    //=================================================

    .controller('loginCtrl', function () {

        //Status

        this.login = 1;
        this.register = 0;
        this.forgot = 0;
    })

    .controller('RegisterCtrl', function RegisterCtrl($scope, fireFactory, $rootScope, USER) {

        $scope.emailErrorMessage = '';
        $scope.passwordErrorMessage = '';
        $scope.emailError = function (error) {
            $scope.emailErrorMessage = error.message;
        };
        $scope.passwordError = function (error) {
            $scope.passwordErrorMessage = error.message;
        };
        $scope.isInError = function (errorString) {
            return !(!errorString || errorString == null || errorString == '');
        };
        $scope.errorFunction = {};
        $scope.errorFunction["INVALID_USER"] = $scope.emailError;
        $scope.errorFunction["INVALID_EMAIL"] = $scope.emailError;
        $scope.errorFunction["EMAIL_TAKEN"] = $scope.emailError;
        $scope.errorFunction["INVALID_PASSWORD"] = $scope.passwordError;

        $scope.registerCB = function (error, userData) {
            $scope.emailErrorMessage = '';
            $scope.passwordErrorMessage = '';
            if (error) {
                $scope.loading = false;
                if ($scope.errorFunction[error.code]) {
                    $scope.$apply($scope.errorFunction[error.code](error));

                } else {
                    console.log("Unknown error occurred: ", error);
                }
            } else {
                var createdUserData = fireFactory.getUserData(userData.uid);
                $rootScope.model.user.userName = $scope.getName($rootScope.model.user.email);
                angular.copy($rootScope.model.user, createdUserData);
                createdUserData.$save();
                console.log("Successfully created user account with uid:", userData.uid);
                fireFactory.loginAndRedirect($rootScope.model.user, 'index.html', function () {
                    $scope.loading = false;
                });
            }
        };
        $scope.submit = function () {
            $scope.loading = true;
            var registerData = {
                email: $rootScope.model.user.email,
                password: $rootScope.model.user.password
            };
            fireFactory.firebaseRef().createUser(registerData, $scope.registerCB);

            fireFactory.userCountReference().transaction(function (currentVal) {
                return (currentVal || 0) + 1;
            });

        };
        $scope.getName = function (authData) {
            return authData.replace(/@.*/, '');
        };
        $scope.userRoles = USER.USER_ROLES;
        $rootScope.model.user.role = USER.USER_ROLES[0];
    })

    .controller('LoginCtrl', function LoginCtrl($scope, $window, $rootScope, fireFactory) {
        var ref = fireFactory.firebaseRef();

        var authData = ref.getAuth();
        if (authData) {
            console.log("User " + authData.uid + " is logged in with " + authData.provider);
            $window.location.href = 'index.html';
        } else {
            console.log("User is logged out!");
        }
        $scope.emailErrorMessage = '';
        $scope.passwordErrorMessage = '';
        $scope.emailError = function (error) {
            $scope.emailErrorMessage = error.message;
        };
        $scope.passwordError = function (error) {
            $scope.passwordErrorMessage = error.message;
        };

        $scope.errorFunction = {};
        $scope.errorFunction["INVALID_USER"] = $scope.emailError;
        $scope.errorFunction["INVALID_EMAIL"] = $scope.emailError;
        $scope.errorFunction["INVALID_PASSWORD"] = $scope.passwordError;
        $scope.isInError = function (errorString) {
            return !(!errorString || errorString == null || errorString == '');
        };

        $scope.submit = function () {
            $scope.loading = true;
            $scope.loginCB = function (error) {
                $scope.emailErrorMessage = '';
                $scope.passwordErrorMessage = '';
                $scope.loading = false;
                if (error) {
                    if ($scope.errorFunction[error.code]) {
                        $scope.$apply($scope.errorFunction[error.code](error));
                    } else {
                        console.log("Unknown error occurred: ", error);
                    }
                }
            };
            fireFactory.loginAndRedirect($rootScope.model.user, 'index.html', $scope.loginCB);

        };
    })

    //=================================================
    // POLL
    //=================================================

    .controller('PollCtrl', function PollCtrl($scope, fireFactory, $rootScope, $state, pollQuestion, pollQuestionOption, currentPoll, $filter, $sce, ngTableParams, $location) {

        $scope.pollQuestions = pollQuestion.list();
        $scope.pollQuestionOptions = pollQuestionOption.list();

        $scope.viewMyPolls = localStorage.getItem('viewMyPolls');

        $rootScope.searchTerm = '';

        $scope.pollMainPageView = '';

        $scope.isContinueFromTemplate = false;

        $scope.getCurrentPolls = function () {

            if ($scope.viewMyPolls == 1) {
                $scope.currentPolls = currentPoll.listUserPoll($rootScope.currentUserReference.userId);
                $scope.searchListPolls = currentPoll.listUserPoll($rootScope.currentUserReference.userId);
            } else {
                $scope.currentPolls = currentPoll.listPublished();
                $scope.searchListPolls = currentPoll.listPublished();
            }

            /*currentPoll.getLastPublishedPoll().$loaded().then(function (loadedData) {

             angular.forEach(loadedData, function (value, key) {

             $scope.pollMainPageView = key;

             });

             });*/

        };

        $scope.getCurrentPolls();

        $scope.$watch('viewMyPolls', function (newVal, oldVal) {
            $scope.getCurrentPolls();
        }, true);

        $rootScope.$watch('searchTerm', function () {

            if ($rootScope.searchTerm.length > 0) {

                var searchResult = [];

                angular.forEach($scope.searchListPolls, function (value, key) {
                    var tempSearchTerm = $rootScope.searchTerm;
                    var tempDescription = value.description;
                    tempSearchTerm = angular.lowercase(tempSearchTerm);
                    tempDescription = angular.lowercase(tempDescription);

                    if (tempDescription.search(tempSearchTerm) > -1) {

                        var matches = searchResult.filter(function (datum) {
                            return datum.key === key;
                        });
                        if (!matches.length) {
                            searchResult.push({pollID: key, poll: fireFactory.getSpecificPollData(key)});
                        }

                    }

                });

                console.log(" *** " + searchResult);

                $scope.currentPolls = searchResult;

            }
            else {
                $scope.getCurrentPolls();
            }
        });

        $scope.pieChartGaugeOptions = {thickness: 30, mode: "gauge", total: 100};

        $scope.pieChartOptions = {thickness: 30};

        $scope.isCreateNewButtonDisabled = function () {

            return $state.$current.name == "pages.poll.poll-create-new";

        };

        $scope.isQuestionButtonDisabled = function () {

            return ($rootScope.model.pollQuestion.body && $rootScope.model.pollQuestion.answerType && $scope.pollQuestionOptions.length > 0);

        };

        $scope.addQuestion = function () {


            if (!$scope.isQuestionButtonDisabled()) {

                return false;

            } else {

                pollQuestion.add({
                    body: $rootScope.model.pollQuestion.body,
                    answerType: $rootScope.model.pollQuestion.answerType,
                    placeHolder: $rootScope.model.pollQuestion.placeHolder,
                    option: $scope.pollQuestionOptions.slice()

                });

                $rootScope.model.pollQuestion = {};

                pollQuestionOption.clear();

            }


        };

        $scope.addOption = function () {

            pollQuestionOption.add({
                body: $rootScope.model.pollQuestionOption.body,
                value: ""
            });

            $rootScope.model.pollQuestionOption = {};

        };

        $scope.removeOption = function (optionToBeRemoved) {
            pollQuestionOption.remove(optionToBeRemoved);
        };

        $scope.removeQuestion = function (questionToBeRemoved) {
            pollQuestion.remove(questionToBeRemoved);
        };

        $scope.submit = function () {

            if (!$rootScope.model.poll.title) {
                alert("You need to enter a title for your poll!");
                return;
            }

            if (!$rootScope.model.poll.description) {
                alert("You need to enter a description for your poll!");
                return;
            }

            if (!$rootScope.model.poll.isOwnerPrivate) {

                $rootScope.model.poll.isOwnerPrivate = false;

            }

            $rootScope.model.poll.owner = $rootScope.currentUserReference.userId;
            $rootScope.model.poll.question = $scope.pollQuestions;
            $rootScope.model.poll.createDate = new Date();

            if ($rootScope.model.poll.readyToPublish != false || $rootScope.model.poll.readyToPublish === "") {
                $rootScope.model.poll.readyToPublish = true;

            }

            var pollJSON = angular.fromJson(angular.toJson($rootScope.model.poll));
            var fireBaseObj = fireFactory.pollReference().push(pollJSON);

            $scope.updateIndex($scope.pollQuestions.length);

            $scope.clearForm();

            $scope.userPollCreateInteraction(fireBaseObj.key());

            if ($scope.isSpecificPollPublished == false && $scope.specificPollId) {

                $scope.removePollTemplate($scope.specificPollId)

            }

            $scope.viewSpecificPoll(fireBaseObj.key());
        };

        $scope.removePollTemplate = function (pollId) {

            fireFactory.specificPollReference(pollId).remove(function (error) {

                alert(error ? "Error occured!" : "Your poll is deleted!");

            });

        };

        $scope.saveTemplate = function () {

            $rootScope.model.poll.readyToPublish = false;
            $scope.submit();

        };

        $scope.clearForm = function () {


            pollQuestion.clear();
            pollQuestionOption.clear();
            $rootScope.model.poll = {};
            $rootScope.model.pollQuestion = {};
            $rootScope.model.pollQuestionOption = {};
            $scope.specificPoll = {};

        };

        $scope.updateIndex = function (questionCount) {

            fireFactory.pollCountReference().transaction(function (currentVal) {
                return (currentVal || 0) + 1;
            });

            fireFactory.questionCountReference().transaction(function (currentVal) {
                return (currentVal || 0) + questionCount;
            });

        };

        $scope.tableSorting = new ngTableParams({
            page: 1,            // show first page
            count: 10,           // count per page
            sorting: {
                title: 'asc'     // initial sorting
            }
        }, {
            total: $scope.currentPolls.length, // length of data
            getData: function ($defer, params) {
                // use build-in angular filter
                var orderedData = params.sorting() ? $filter('orderBy')($scope.currentPolls, params.orderBy()) : $scope.currentPolls;

                $defer.resolve(orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count()));
            }
        });


        $scope.submitAnswerForSpecificPoll = function () {

            for (var i = 0, questionLength = $scope.specificPoll.question.length; i < questionLength; i++) {

                for (var j = 0, optionLength = $scope.specificPoll.question[i].option.length; j < optionLength; j++) {

                    /*console.log(i + " " + j +" "+$rootScope.model.pollQuestionOption.value[i][j]);*/
                    var pollJSON = angular.fromJson(angular.toJson($rootScope.model.pollQuestionOption.value[i][j]));
                    fireFactory.optionValueReference($scope.specificPollId, i, j).push(pollJSON);

                }
            }

            $rootScope.model.pollQuestionOption.value = "";

            $scope.userPollParticipateInteraction($scope.specificPollId);

            $scope.viewSpecificPoll($scope.specificPollId);

        };

        $scope.userPollParticipateInteraction = function (pollId) {

            if (!$rootScope.currentUserReference.currentUserData.data) {
                $rootScope.currentUserReference.currentUserData.data = {};
            }

            if (!$rootScope.currentUserReference.currentUserData.data.participatedPolls) {
                $rootScope.currentUserReference.currentUserData.data.participatedPolls = {};
            }
            $rootScope.currentUserReference.currentUserData.data.participatedPolls[pollId] = true;

            $rootScope.currentUserReference.currentUserData.$save();

            fireFactory.answerCountReference().transaction(function (currentVal) {
                return (currentVal || 0) + 1;
            });

        };

        $scope.userPollCreateInteraction = function (pollId) {

            if (!$rootScope.currentUserReference.currentUserData.data) {
                $rootScope.currentUserReference.currentUserData.data = {};
            }

            if (!$rootScope.currentUserReference.currentUserData.data.createdPolls) {
                $rootScope.currentUserReference.currentUserData.data.createdPolls = {};
            }
            $rootScope.currentUserReference.currentUserData.data.createdPolls[pollId] = true;

            $rootScope.currentUserReference.currentUserData.$save();

        };

        $scope.viewSpecificPoll = function (pollId) {

            $scope.specificPollId = pollId;

            $scope.specificPoll = currentPoll.get(pollId);

            $scope.isContinueFromTemplate = false;

            $scope.specificPoll.$loaded().then(function (loadedData) {

                if (loadedData.readyToPublish) {

                    angular.forEach(loadedData.question, function (qValue, qKey) {

                        angular.forEach(qValue.option, function (oValue, oKey) {

                            $scope.optionValueArray = [];
                            $scope.specificPoll.question[qKey].result = [];

                            angular.forEach(oValue.value, function (vValue, vKey) {


                                if (qValue.answerType == "Percent") {

                                    $scope.optionValueArray.push(vValue * 100);

                                } else if (qValue.answerType == "Time" || qValue.answerType == "Date") {

                                    $scope.optionValueArray.push(Date.parse(vValue));

                                } else {
                                    $scope.optionValueArray.push(vValue);
                                }


                            });

                            if (qValue.answerType == "Percent") {

                                $scope.optionAverage = $scope.calculateAverage($scope.optionValueArray);

                                $scope.specificPoll.question[qKey].option[oKey].result = $scope.optionAverage;

                            } else if (qValue.answerType == "Number") {

                                $scope.optionAverage = $scope.calculateAverage($scope.optionValueArray);

                                $scope.specificPoll.question[qKey].option[oKey].result = $scope.optionAverage;

                            } else if (qValue.answerType == "Currency") {

                                $scope.optionAverage = $scope.calculateAverage($scope.optionValueArray);

                                $scope.specificPoll.question[qKey].option[oKey].result = $scope.optionAverage;

                            } else if (qValue.answerType == "Radio") {

                                $scope.specificPoll.question[qKey].option[oKey].result = $scope.optionValueArray.length;

                            } else if (qValue.answerType == "Multiple-Choice") {

                                $scope.specificPoll.question[qKey].option[oKey].result = $scope.optionValueArray.length;

                            } else if (qValue.answerType == "Date") {

                                $scope.optionAverage = $scope.calculateAverage($scope.optionValueArray);

                                $scope.specificPoll.question[qKey].option[oKey].result = new Date($scope.optionAverage).toDateString();

                            } else if (qValue.answerType == "Time") {

                                $scope.optionAverage = $scope.calculateAverage($scope.optionValueArray);

                                $scope.specificPoll.question[qKey].option[oKey].result = new Date($scope.optionAverage).toTimeString();

                            } else {
                                /*alert("WHAT?")*/
                            }

                            console.log($scope.optionAverage + " " + " *** " + $scope.optionValueArray);

                        });


                        angular.forEach(qValue.option, function (oValue, oKey) {

                            $scope.specificPoll.question[qKey].result.push({
                                value: oValue.result,
                                color: getRandomColor(),
                                label: oValue.body
                            })

                        });


                    });

                    /*console.log($scope.specificPoll.question[0].result[1].value);*/


                    $scope.specificPollOwner = fireFactory.getUserData(loadedData.owner);

                    /*$scope.specificPollOwner.$loaded().then(function (loadedData) {

                     $scope.specificPollOwnerName = loadedData.userName;



                     });*/

                    $state.go("pages.poll.poll-view-specific.poll-questions");

                }else{

                    $scope.continueFromTemplate(pollId);

                }
            });

        };

        /*$scope.viewSpecificPoll($scope.pollMainPageView);*/

        $scope.continueFromTemplate = function (pollId) {

            $scope.isContinueFromTemplate = true;

            $scope.specificPollId = pollId;

            $scope.specificPoll = currentPoll.get(pollId);

            $scope.specificPoll.$loaded().then(function (loadedData) {

                $scope.isSpecificPollPublished = loadedData.readyToPublish;

                $rootScope.model.poll.title = loadedData.title;

                $rootScope.model.poll.description = loadedData.description;

                pollQuestion.clear();

                angular.forEach(loadedData.question, function (qValue, qKey) {

                    angular.forEach(qValue.option, function (oValue, oKey) {

                        pollQuestionOption.add({
                            body: oValue.body,
                            value: ""
                        });

                        $rootScope.model.pollQuestionOption = {};

                    });

                    pollQuestion.add({
                        body: qValue.body,
                        answerType: qValue.answerType,
                        option: $scope.pollQuestionOptions.slice()
                    });

                    $rootScope.model.pollQuestion = {};
                    pollQuestionOption.clear();

                });

                $state.go("pages.poll.poll-create-new");


            });


        };

        $scope.calculateAverage = function (data) {

            var sum = data.reduce(function (sum, value) {
                return sum + value;
            }, 0);

            return Math.round(sum / data.length);

        };

        $scope.getUrl = function () {

            $scope.pollUrl = $location.absUrl();

        };

        $scope.isCurrentUserParticipated = function () {

            if ($scope.specificPollId != null) {
                if (!$rootScope.currentUserReference.currentUserData.data.participatedPolls) {
                    return false;
                }
                return $rootScope.currentUserReference.currentUserData.data.participatedPolls[$scope.specificPollId];
            }

        };

        $scope.isParticipated = function (pollId) {

                if (!$rootScope.currentUserReference.currentUserData.data.participatedPolls) {
                    return false;
                }
                return $rootScope.currentUserReference.currentUserData.data.participatedPolls[pollId];


        }

    })

    //=================================================
    // CALENDAR
    //=================================================

    .controller('calendarCtrl', function ($modal) {

        //Create and add Action button with dropdown in Calendar header.
        this.month = 'month';

        this.actionMenu = '<ul class="actions actions-alt" id="fc-actions">' +
            '<li class="dropdown" dropdown>' +
            '<a href="" dropdown-toggle><i class="zmdi zmdi-more-vert"></i></a>' +
            '<ul class="dropdown-menu dropdown-menu-right">' +
            '<li class="active">' +
            '<a data-calendar-view="month" href="">Month View</a>' +
            '</li>' +
            '<li>' +
            '<a data-calendar-view="basicWeek" href="">Week View</a>' +
            '</li>' +
            '<li>' +
            '<a data-calendar-view="agendaWeek" href="">Agenda Week View</a>' +
            '</li>' +
            '<li>' +
            '<a data-calendar-view="basicDay" href="">Day View</a>' +
            '</li>' +
            '<li>' +
            '<a data-calendar-view="agendaDay" href="">Agenda Day View</a>' +
            '</li>' +
            '</ul>' +
            '</div>' +
            '</li>';

        //Open new event modal on selecting a day
        this.onSelect = function (argStart, argEnd) {
            var modalInstance = $modal.open({
                templateUrl: 'addEvent.html',
                controller: 'addeventCtrl',
                backdrop: 'static',
                keyboard: false,
                resolve: {
                    calendarData: function () {
                        var x = [argStart, argEnd];
                        return x;
                    }
                }
            });
        }
    })

    //Add event Controller (Modal Instance)
    .controller('addeventCtrl', function ($scope, $modalInstance, calendarData) {

        //Calendar Event Data
        $scope.calendarData = {
            eventStartDate: calendarData[0],
            eventEndDate: calendarData[1]
        };

        //Tags
        $scope.tags = [
            'bgm-teal',
            'bgm-red',
            'bgm-pink',
            'bgm-blue',
            'bgm-lime',
            'bgm-green',
            'bgm-cyan',
            'bgm-orange',
            'bgm-purple',
            'bgm-gray',
            'bgm-black'
        ];

        //Select Tag
        $scope.currentTag = '';

        $scope.onTagClick = function (tag, $index) {
            $scope.activeState = $index;
            $scope.activeTagColor = tag;
        };

        //Add new event
        $scope.addEvent = function () {
            if ($scope.calendarData.eventName) {

                //Render Event
                $('#calendar').fullCalendar('renderEvent', {
                    title: $scope.calendarData.eventName,
                    start: $scope.calendarData.eventStartDate,
                    end: $scope.calendarData.eventEndDate,
                    allDay: true,
                    className: $scope.activeTagColor

                }, true); //Stick the event

                $scope.activeState = -1;
                $scope.calendarData.eventName = '';
                $modalInstance.close();
            }
        };

        //Dismiss
        $scope.eventDismiss = function () {
            $modalInstance.dismiss();
        }
    })

    // =========================================================================
    // COMMON FORMS
    // =========================================================================

    .controller('formCtrl', function () {

        //Input Slider
        this.nouisliderValue = 4;
        this.nouisliderFrom = 25;
        this.nouisliderTo = 80;
        this.nouisliderRed = 35;
        this.nouisliderBlue = 90;
        this.nouisliderCyan = 20;
        this.nouisliderAmber = 60;
        this.nouisliderGreen = 75;

        //Color Picker
        this.color = '#03A9F4';
        this.color2 = '#8BC34A';
        this.color3 = '#F44336';
        this.color4 = '#FFC107';
    })

    // =========================================================================
    // PHOTO GALLERY
    // =========================================================================

    .controller('photoCtrl', function () {

        //Default grid size (2)
        this.photoColumn = 'col-md-2';
        this.photoColumnSize = 2;

        this.photoOptions = [
            {value: 2, column: 6},
            {value: 3, column: 4},
            {value: 4, column: 3},
            {value: 1, column: 12},
        ];

        //Change grid
        this.photoGrid = function (size) {
            this.photoColumn = 'col-md-' + size;
            this.photoColumnSize = size;
        }

    })

    // =========================================================================
    // ANIMATIONS DEMO
    // =========================================================================
    .controller('animCtrl', function ($timeout) {

        //Animation List
        this.attentionSeekers = [
            {animation: 'bounce', target: 'attentionSeeker'},
            {animation: 'flash', target: 'attentionSeeker'},
            {animation: 'pulse', target: 'attentionSeeker'},
            {animation: 'rubberBand', target: 'attentionSeeker'},
            {animation: 'shake', target: 'attentionSeeker'},
            {animation: 'swing', target: 'attentionSeeker'},
            {animation: 'tada', target: 'attentionSeeker'},
            {animation: 'wobble', target: 'attentionSeeker'}
        ];
        this.flippers = [
            {animation: 'flip', target: 'flippers'},
            {animation: 'flipInX', target: 'flippers'},
            {animation: 'flipInY', target: 'flippers'},
            {animation: 'flipOutX', target: 'flippers'},
            {animation: 'flipOutY', target: 'flippers'}
        ];
        this.lightSpeed = [
            {animation: 'lightSpeedIn', target: 'lightSpeed'},
            {animation: 'lightSpeedOut', target: 'lightSpeed'}
        ];
        this.special = [
            {animation: 'hinge', target: 'special'},
            {animation: 'rollIn', target: 'special'},
            {animation: 'rollOut', target: 'special'}
        ];
        this.bouncingEntrance = [
            {animation: 'bounceIn', target: 'bouncingEntrance'},
            {animation: 'bounceInDown', target: 'bouncingEntrance'},
            {animation: 'bounceInLeft', target: 'bouncingEntrance'},
            {animation: 'bounceInRight', target: 'bouncingEntrance'},
            {animation: 'bounceInUp', target: 'bouncingEntrance'}
        ];
        this.bouncingExits = [
            {animation: 'bounceOut', target: 'bouncingExits'},
            {animation: 'bounceOutDown', target: 'bouncingExits'},
            {animation: 'bounceOutLeft', target: 'bouncingExits'},
            {animation: 'bounceOutRight', target: 'bouncingExits'},
            {animation: 'bounceOutUp', target: 'bouncingExits'}
        ];
        this.rotatingEntrances = [
            {animation: 'rotateIn', target: 'rotatingEntrances'},
            {animation: 'rotateInDownLeft', target: 'rotatingEntrances'},
            {animation: 'rotateInDownRight', target: 'rotatingEntrances'},
            {animation: 'rotateInUpLeft', target: 'rotatingEntrances'},
            {animation: 'rotateInUpRight', target: 'rotatingEntrances'}
        ];
        this.rotatingExits = [
            {animation: 'rotateOut', target: 'rotatingExits'},
            {animation: 'rotateOutDownLeft', target: 'rotatingExits'},
            {animation: 'rotateOutDownRight', target: 'rotatingExits'},
            {animation: 'rotateOutUpLeft', target: 'rotatingExits'},
            {animation: 'rotateOutUpRight', target: 'rotatingExits'}
        ];
        this.fadeingEntrances = [
            {animation: 'fadeIn', target: 'fadeingEntrances'},
            {animation: 'fadeInDown', target: 'fadeingEntrances'},
            {animation: 'fadeInDownBig', target: 'fadeingEntrances'},
            {animation: 'fadeInLeft', target: 'fadeingEntrances'},
            {animation: 'fadeInLeftBig', target: 'fadeingEntrances'},
            {animation: 'fadeInRight', target: 'fadeingEntrances'},
            {animation: 'fadeInRightBig', target: 'fadeingEntrances'},
            {animation: 'fadeInUp', target: 'fadeingEntrances'},
            {animation: 'fadeInBig', target: 'fadeingEntrances'}
        ];
        this.fadeingExits = [
            {animation: 'fadeOut', target: 'fadeingExits'},
            {animation: 'fadeOutDown', target: 'fadeingExits'},
            {animation: 'fadeOutDownBig', target: 'fadeingExits'},
            {animation: 'fadeOutLeft', target: 'fadeingExits'},
            {animation: 'fadeOutLeftBig', target: 'fadeingExits'},
            {animation: 'fadeOutRight', target: 'fadeingExits'},
            {animation: 'fadeOutRightBig', target: 'fadeingExits'},
            {animation: 'fadeOutUp', target: 'fadeingExits'},
            {animation: 'fadeOutUpBig', target: 'fadeingExits'}
        ];
        this.zoomEntrances = [
            {animation: 'zoomIn', target: 'zoomEntrances'},
            {animation: 'zoomInDown', target: 'zoomEntrances'},
            {animation: 'zoomInLeft', target: 'zoomEntrances'},
            {animation: 'zoomInRight', target: 'zoomEntrances'},
            {animation: 'zoomInUp', target: 'zoomEntrances'}
        ];
        this.zoomExits = [
            {animation: 'zoomOut', target: 'zoomExits'},
            {animation: 'zoomOutDown', target: 'zoomExits'},
            {animation: 'zoomOutLeft', target: 'zoomExits'},
            {animation: 'zoomOutRight', target: 'zoomExits'},
            {animation: 'zoomOutUp', target: 'zoomExits'}
        ];

        //Animate
        this.ca = '';

        this.setAnimation = function (animation, target) {
            if (animation === "hinge") {
                animationDuration = 2100;
            }
            else {
                animationDuration = 1200;
            }

            angular.element('#' + target).addClass(animation);

            $timeout(function () {
                angular.element('#' + target).removeClass(animation);
            }, animationDuration);
        }

    })


    // =========================================================================
    // COMMON FUNCTIONS
    // =========================================================================


    // =========================================================================
    // FIREBASE SERVER CONNECTION
    // =========================================================================

    .factory('fireFactory', ['$firebaseObject', '$window',

        function ($firebaseObject, $window) {

            //COMMON
            var helperFactory = {};
            helperFactory.firebaseRef = function (path) {
                var baseUrl = "https://recel.firebaseio.com";
                path = (path !== '' && path) ? baseUrl + '/' + path : baseUrl;
                return new Firebase(path);
            };

            //USER
            helperFactory.loginAndRedirect = function (modelUser, redirection, callback) {
                var ref = helperFactory.firebaseRef();
                ref.authWithPassword({
                    email: modelUser.email,
                    password: modelUser.password
                }, function (error, authData) {
                    if (callback) {
                        callback(error);
                    }
                    if (error) {
                        console.log("Error in login: ", error);
                    } else {
                        console.log("Authenticated successfully with payload:", authData);
                        $window.location.href = redirection;
                    }
                }, {
                    remember: "sessionOnly"
                });
            };

            helperFactory.userReference = function (uid) {
                return helperFactory.firebaseRef().child('user').child(uid);
            };

            helperFactory.getUserData = function (uid) {
                return $firebaseObject(helperFactory.userReference(uid));
            };


            //DATA
            helperFactory.dataReference = function () {
                return helperFactory.firebaseRef().child('data');
            };

            //DASHBOARD

            helperFactory.pollIndexReference = function () {

                return helperFactory.firebaseRef().child('index');

            };

            helperFactory.pollCountReference = function () {

                return helperFactory.pollIndexReference().child('pollCount');

            };

            helperFactory.questionCountReference = function () {

                return helperFactory.pollIndexReference().child('questionCount');

            };

            helperFactory.answerCountReference = function () {

                return helperFactory.pollIndexReference().child('answerCount');

            };

            helperFactory.userCountReference = function () {

                return helperFactory.pollIndexReference().child('userCount');

            };

            //POLL
            helperFactory.pollReference = function () {
                return helperFactory.dataReference().child('poll');
            };

            helperFactory.publishedPollReference = function () {
                return helperFactory.pollReference().orderByChild("readyToPublish").equalTo(true);
            };

            helperFactory.lastPublishedPollReference = function () {
                return helperFactory.publishedPollReference().limitToLast(1);
            };

            helperFactory.usersPollReference = function (userId) {
                return helperFactory.pollReference().orderByChild("owner").equalTo(userId);
            };

            helperFactory.specificPollReference = function (pollID) {
                return helperFactory.pollReference().child(pollID);
            };

            helperFactory.optionValueReference = function (pollID, questionID, optionID) {
                return helperFactory.pollReference().child(pollID).child('question').child(questionID).child('option').child(optionID).child('value');
            };

            helperFactory.specificPollQuestionReference = function (pollID, questionID) {
                return helperFactory.pollReference().child(pollID).child('question').child(questionID).child('option');
            };

            helperFactory.getPollData = function () {
                return $firebaseObject(helperFactory.pollReference());
            };

            helperFactory.getPublishedPollData = function () {
                return $firebaseObject(helperFactory.publishedPollReference());
            };

            helperFactory.getUsersPollData = function (userId) {
                return $firebaseObject(helperFactory.usersPollReference(userId));
            };

            helperFactory.getSpecificPollData = function (pollID) {
                return $firebaseObject(helperFactory.specificPollReference(pollID));
            };

            helperFactory.getSpecificPollQuestionOption = function (pollID) {
                return $firebaseObject(helperFactory.specificPollReference(pollID));
            };

            helperFactory.getSpecificPollQuestionOption = function (pollID, questionID) {
                return $firebaseObject(helperFactory.specificPollQuestionReference(pollID, questionID));
            };

            helperFactory.removeSpecificPollData = function (pollID) {
                return $firebaseObject(helperFactory.specificPollReference(pollID).remove());
            };

            helperFactory.getIndexData = function () {
                return $firebaseObject(helperFactory.pollIndexReference());
            };

            helperFactory.getLastPublishedPoll = function () {
                return $firebaseObject(helperFactory.lastPublishedPollReference());
            };

            return helperFactory;

        }]
    )

    .factory('pollQuestion', function () {
        var question = [];

        var questionService = {};

        questionService.add = function (questionObject) {
            question.push(questionObject);
        };

        questionService.list = function () {
            return question;
        };

        questionService.clear = function () {
            question.length = 0;
        };

        questionService.remove = function (questionId) {
            question.splice(questionId, 1);
        };

        return questionService;
    })

    .factory('pollQuestionOption', function () {
        var option = [];

        var optionService = {};

        optionService.add = function (optionObject) {
            option.push(optionObject);
        };

        optionService.list = function () {
            return option;
        };

        optionService.clear = function () {
            option.length = 0;
        };

        optionService.remove = function (optionId) {
            option.splice(optionId, 1);
        };

        return optionService;
    })

    .factory('currentPoll', function (fireFactory) {

        var currentPollsService = {};

        currentPollsService.get = function (specificPollID) {
            if (specificPollID) {
                var specificPollData = fireFactory.getSpecificPollData(specificPollID);
            }
            return specificPollData;
        };

        currentPollsService.list = function () {
            return fireFactory.getPollData();
        };

        currentPollsService.index = function () {

            return fireFactory.getIndexData();

        };

        currentPollsService.listPublished = function () {
            return fireFactory.getPublishedPollData();
        };

        currentPollsService.getLastPublishedPoll = function () {
            return fireFactory.getLastPublishedPoll();
        };

        currentPollsService.listUserPoll = function (userId) {

            if (userId) {
                var userPollData = fireFactory.getUsersPollData(userId);
            }
            return userPollData;
        };

        return currentPollsService;
    });

/*.factory('calculateAverage', function () {

 var result = {};


 result.getAverage = function (data) {

 var sum = data.reduce(function (sum, value) {
 return sum + value;
 }, 0);

 return sum / data.length;
 };

 /!*result.getAverage = function () {

 return sum / data.length;

 };*!/

 })*/

function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

