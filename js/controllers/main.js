materialAdmin

// =========================================================================
// Initialize constants and variables.
// =========================================================================

    .constant('USER', {"USER_ROLES": ["Student", "Faculty Member", "Other"],
    BIG: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAMCAgICAgMCAgIDAwMDBAYEBAQEBAgGBgUGCQgKCgkICQkKDA8MCgsOCwkJDRENDg8QEBEQCgwSExIQEw8QEBD/2wBDAQMDAwQDBAgEBAgQCwkLEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBD/wAARCAEAAQADASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD7SJxSbjSt0ptWWLuNG40lFAC7jRuNJRQAu40bjSUUALuNG40lFAC7jRuNJRQAu40bjSUUALuNG40lFAC7jRuNJRQAu40bjSUUALuNG40lFAC7jRuNJRQAu40bjSUUALuNG40lFAC7jRuNJRQAu40oOabSrQArdKbTm6U2gAooooAKKKKACiiigAooooAKKKKACgDNKB9ah1zU9F8KWCan4r1m30q3lBMImb95Nj+4g+Zv5UATYHegDPavKNf/AGm/Dmmb4PCPhGTVZhwt1qkxihz6iJPmP0LCuB1D9o/4t30pkt9W03S4yP8AUWGlwhB9DKJH/NqAPpbb7EUhAxXzBF+0F8X4jlfF2/rkS6fauP1jrq9A/ak12Lbb+MfCGkapF0+0WQezuPqcFo2PsFUUAe6YNJXN+Ffij8PvGjpbaVrR0+9kwFs9SxGzMeyv91j+VdVcW09rK0FzE0ci9VYUAQ0UpGKSgAooooAKKKKACiiigAooooAKVaSlWgBW6U2nN0ptABRRRQAUUUUAFFFFABRRRQAVJHG8jrHGpZmOAAMk0wDsa4z4w/EpPhvoQ0rSpQfEmrRfu2BybKA9ZD6Of4fzoAh+KXxj0v4cN/YWhxwal4jK5lZsNBYegb+/J7dB3r5m1/X9a8U6tPrniHU57++uPvyzMScdlHoo7AcVSlmmuJXuLiRpJZWLO7nLMT1JPekANACUYPpTgMUtADcGkwafRQBGRnrXr3wz+P8Aqvh1bbw942efVtEQiNJCd9zaL6ox5ZR/dJ+leSEZppoA+41eyubWHUtJvor7T7pQ9vcxHKuv9D6g9KaR3r5v+CPxXk8E6n/wjuvSGXw7qTBJFY82kp6TJ6e47ivpa4gNvIE3h0ZQ8bryHQjIYexFAEFFBGDRQAUUUUAFFFFABRRRQAUq0lKtACt0ptObpTaACiiigAooooAKKKKACgcmilHSgBZ9QsND0y/8SauwWx0m3a5lz/EQPlQe7NgV8ZeK/EuoeMPEV/4k1SQtcX0pkOT91eiqPQAYAr3f9pbxJJp3hjSPCFvLsbU5Df3YHVo0O2NT7ZyfwFfOY60AKBmnUUUAFFFFABRRRQAUhANLRQAwivpz4AeOZvFfhOXwlqcpl1Dw+ga1kY5aS0J+6fXYf0NfMhHeus+FPi9vA/j3SdckY/ZDOLe8XPDQSfK+foDn8KAPrQ4PNJVq/tRZ3s1sGDKjfK3qvY/lVXpQAUUUUAFFFFABRRRQAUq0lKtACt0ptObpTaACiiigAooooAKKKKACnqpYqi9WOBTKuaVGsupWkbDIaZAfzoA+X/2jNWOpfFPUbJXDRaVHDYxgHIGxBu/8eJrzRetdF8SLz+0PiF4lvf8Antqty34eYR/SueXpQAtFFFABRRRQAUUUUAFFFFACHpTD0qSmHigD7S8Lam+t+CvDmsSvukuNNiWRt2SXQbDn3+Wr561yXwamW4+EeglcZiluYTz6Pn+tda3WgBKKKKACiiigAooooAKVaSlWgBW6U2nN0ptABRRRQAUUUUAFFFFABV3SW2anZuTgCZP5iqVPR2jZZF+8pBH1pCPjz4hWpsvH3iS0brDqt0h/7+tWCOleh/tB6V/ZnxY1qVFxFqJjv48dxIgJ/XNedr1pjHUUUUAFFFFABRRRQAUUUUAFMNOPApjHCk+1AH1p8Frdbb4RaGF6zT3Ux/FwP6V1xrK8E6adG8AeGdMeMI6abHM4/wBqXL/+zCtVutACUUUUAFFFFABRRRQAUq0lKtACt0ptObpTaACiiigAooooAKKKKAClB49aSlHWgDx79pzw/Jc6ZoXjGGMsId2mXTD+E8tHn8Nw/Cvn8HmvtrWNDs/F3h7U/B+pMFg1WHYkh/5YzjmOQfRv0Jr4x1nSL7QNWu9E1OExXdjM0MqkdGB/yaAK1FNB7U6gAooooAKKKKACiikPFACMa6H4d+E5vHHjbSPDMeRFd3Km5f8AuW6/NI3/AHyD+JrnSa+jP2cfBc2jaDd+PtRhMc2rA2mmhh83kA/vJR6Bj8oPfBoA9f1G4juryWWGMJFnbEg4CoOFH5AVUpegpKACiiigAooooAKKKKAClWkpVoAVulNpzdKbQAUUUUAFFFFABRRRQAUUUDmgB9eafHT4Yt4y04+NfD1ru1vT4gt/BGPmvIF6SAd3UcH1H0r0unwzzW0qzwSFHQ5BFAHwyD0J4p9fRnxV+BEXiiSfxT8PbNItSYGS80lPlWdu7w9gx6lfyr54u7S80+5ksr+1ltriFikkUqFXRh1BB6UARUUUUAFFFFABTWIpTXoXwz+CniHx+41S9Euk+H4zmW/ljOZfVIQfvt79BQBB8IvhfefEXXPMulaDQdPYPqF0RgEdok9XbpjsOa+qJXiIigtYFgtbaNYLeFBhYolGFUfhVfTdN0jQNJt/D3h2yFnptqPkjByzt3dz/Ex7mpqAGnrSUp60lABRRRQAUUUUAFFFFABSrSUq0AK3Sm05ulNoAKKKKACiiigAooxSgd6AADjNKqliAoJJ4AFM1K80rQdLbXPEmq2+maen/LWZsGQ/3UXq59hXifjb9pa7YSaX8N7E6dHkq2p3Chrlx/sL0j+vJoA9q1rU9B8LW/2zxbr1npEOMgTtmV/92MfMfyryzxF+0z4asHe38G+GJtSdeBeai/lxn3WJfmI+pFfPuoajqGr3kmoarfXF5dSks808hd2PuTVcCgD0DXPj18UtcLIviNtMgbjydNjFuMf7w+b9a4e6vLu/uXvL+6luJ5Tl5ZXLux9STyahAxS0AFFFFABRRRQAhGa6bQPid8QfCsccOh+K7+C3jwFt2k3xAemxsjFc1SHmgD23w/8AtP6pGFh8Y+GLPUU/insz9nm+uOVP5CvVfC/xH+HvjVEXQ/EKWt6/Ww1HEMufRW+634Gvjwr6ZpMYOckEdKAPue4tp7V9lxCyHtkdR7VDj0r5k8DfHfxr4N8uxu7ka1pC8GyvSW2j/pm/3kP6V9A+CfH3hH4jwgeHLxrfUgMvpd0QJv8Atmekg+nNAGzRTnRlYo6lWBwQeDmm4IoAKKKKACiiigApVpKVaAFbpTac3Sm0AFFFFABQOe1FOALEKgJJOAAOTQAqqSwRQSTwAO5rl/iJ8TfDvwwtvJuhHqWvyrug05W+WEHo8xHQf7PU1m/Fr4tW/wANYH0HQjFceKJoxudvmTTlI6kd5MdB2r5cvLy71G7lv7+4kuLmdzJLLIxZnY9STQBreMPG3iXx5qf9reJdRe5kHEUY+WOFf7qL0UVhgZpQtLjFACBfWnUUUAFFFFABRRRQAUUUUAFFFFABSYFLRQA0jFOtri5s7iO7tLiSCeFg8csbFWRh0II5BopCPSgD6C+GX7QMOqvD4c+JMu2ZsR22sgd+yzjuP9ofjXsc9u8BXcVZJFDxyIdyup6FT3FfDBA7ivX/AINfGl/DJTwl4yupZtAlbEE7Zd7Bz3Xvs9V/EUAfQRGKSppoVj2SRzxzwTKJIZom3JKh6MpHUVERg0AJRRRQAUq0lKtACt0ptObpTaACiilAoABxXL/FH4iw/C/w+ktq8beIdTUiwh6mBO87D9FHc101/qmmeG9Gv/FeuSBNP0qPzJATgyOThI19SzYFfHPjHxVqXjXxJe+JdVctNdyEqueI4x91B6ADigDLurq5v7qa+vbiSe4uHMsssjbmdickk0wDvSAe1OoAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigBCM00in0hGaAPa/gL8WY9Okj+HviyUnTrpsadds3/HnMf4T/0zbp7HFe8TwvBK0EowyHBr4ayVIIJBHII7V9U/BX4hnx94X/sbVnH9u6DEFaXPN3a5wrn/AGl+6fYA0AdueKKXGRSUAFKtJSrQArdKbTm6U2gAp6qxIVRkk4A96aOtMvtcg8K6PqXiu5QOmkWz3KoTw8gGEX8WxQB4f+0z4vM+qWnw+sp82+j4nvQp4a6Zeh9doOPqTXiSjPWpr+/vdVv7rVNSnae7vJnnnkbq7sck/mahWgB1FFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFADWHet7wJ4yv/AAF4qsPE9inm/ZZB50OeJoTw8Z+oz+NYVNOaAPuaSfT72KDVNHm83T7+Jbm1cjkxsMgH3HQ/SoiMV51+zv4jPiHwJeeHpZQ134dlEiKTybWQ449g/wDOvRj0oAbSrSUq0AK3Sm05ulNoAVfWvOP2jtZbR/h9pujJIVm129aRl/6YwgfoWb9K9HxnAr57/ae1pr/4h22iRuDDoWmQWwA7SPmV/wD0NfyoA8iAp1IOtOoAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACmkd6dSN0oA9C+APiSTw78TtNVpStrqqvpt0ueGSQfLn6OENfUE0ZileFuqMVP4V8S6VeyabqtpqMTFWtp0lBHbDA/0r7euZVuZEvEztuYYpxkdQ6Bv60AV6VaQ9aVaAFbpTac3Sm0ATQLvniQd2A/Wvk340XUl58VPEk8jZIvWj/BAFH6AV9a2X/H7B/10X+dfH/xSO74i+IT/ANRCb/0KgDl1p1NWnUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABSHpS0h6UAMbO0464r7X8NSm78DeE9RMhdrnRoCxPquUP/oNfFNfY3w3Z2+EngcuSSdKbk/9d5KANtutC0N1oWgBW6U2nN0ptAE9q+y5hf0dT+tfJPxht2tPif4kgdAv+nyOAPRsEfzr6wBIwR2NeC/tI+B9UtvEsnxBs4PP0fVUiWWWPn7PcKgVlk9M4yD3zQB4yOtOplKCRQA6im7qXcKAFopMijIoAWikyKMigBaKTIoyKAFopMijIoAWikyKMigBaKTcKNwoAWik3CjcKAFopNwo3CgBaKTcKTd7UAOppNGTSGgBGICk+gr7U8I28dl8PPB9hGu3yNGhJGMcuzP/AOzV8p/Dv4f618RfEMej6XbyC3jxJe3W393bQ92Y9AewHc19fSrbwLDaWhJt7SGO2iz12IoUfyzQBGetC0lKtACt0ptOIzSbfegBKlSRGt57K6t4rm0ukMc9tMgeOVD2ZTxUe33pQMd6APNPEv7OHg3xBLJc+F9bbw9cPlhb3MbTWxPoGHzKPzrzfVv2bPixpjf6Fpmn6zGSQslhqMXI9SJShFfSZpRkdCaAPlkfAT4yZ/5EK5/8DrP/AOPUD4CfGQn/AJEO5H/b7af/AB2vqbLf3jRub+8fzoA+Wf8AhQvxhHXwLdfhdW3/AMcpD8BvjCP+ZFuz/wBvFv8A/HK+qNzf3j+dG5v7x/OgD5W/4UT8Xx18B3x+k0H/AMcpD8C/i8OT4D1D8HiP/s9fVW5/77fnRuf++350AfLEXwG+L0o3DwRdpzjDzQqfyL04/AP4vD/mSrg/9vEH/wAXX1Juf++350u5v7x/OgD5XPwH+L44/wCEHuz7+dD/APF0h+BXxeH/ADIt8fpJD/8AF19U7m/vN+dG5uzt+dIR8qj4FfF7p/wgd/8A99xf/F0H4FfF7p/wgWof99xf/F19Vb3/AL7fnRvf++350xnyt/wor4wf9CDqH/fUX/xdPHwD+MZA/wCKEuhn1urYfoZK+p/Mk/56N+dJvk/56N+dAHy1/wAKC+Mf/QiXf/gVbf8Axyj/AIUF8Y/+hEuz/wBvFv8A/HK+pd7/AN9vzo8yQf8ALRvzoA+Wf+FB/GP/AKEK8/7/AMH/AMcoPwF+MX/QiXv/AH+g/wDi6+p/Nl/56N+dHmyj/lq350AfK5+Avxi/6ES9/wC/sP8A8XSf8KH+L+QP+EEvuf8AppF/8XX1T503/PZ/++qPOm/56v8AnQB8u2/7PnxhnmWFvBz24Y48ye8gRF+p3k/pXeeGv2XorQJd+PPFVsehNhpWZH+jSsAo/DNeyFnYYZ2P40gGO9AEGkabpHhrSBoHhnTY9PsA250Tlpm/vSN1Y/Wpic0pGe9Jt96AEpVo2+9KBigD/9k=",
        SMALL: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAMCAgICAgMCAgIDAwMDBAYEBAQEBAgGBgUGCQgKCgkICQkKDA8MCgsOCwkJDRENDg8QEBEQCgwSExIQEw8QEBD/2wBDAQMDAwQDBAgEBAgQCwkLEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBD/wAARCAAwADADASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD7QPWig9aqavqcOi6Te6xcQtLFYW8ly8attLqiliAcHBIHXB+lWWc54v8Ain4P8FzNZaneyXF8hXdZ2qb5VDDILZIVeCDgsCQwIBFM8G/Ffwh42uWsNPuZrS9AZktbxBG8qjGShBKt1+6DuwrHGATXy1qGoXmrX9zqmoTebdXkrzzPtC7nYkk4AAHJ6AADtUcFxcWk8d3aTyQTwOskUsbFXR1OQykcggjIIoA+2qB1rM8L6jPrHhnSNWuiDPeWME8uF2je0alsDsMk49q0x1oAD1qO5tbW+t5bK9gWe3uEaKaJiQHRhhlOCDggkcEGpcEnAHJNeIfEv453VrqLaL4CvLdo7f5Z9SEYlDyZGVh3ZUqOQWIIY/d4AZgDyjxd4W1Hwbr91oWoo+YXJhmZNonhJ+SReSMEdsnByDyDVfQNB1LxLq1toulQmS4uXCA7SVjBIBdsAkKM5JxwKg1HU9S1e6N9q2o3V9clVQzXMzSyFVGFG5iTgDgDtTLK+vdNuY73Trye1uIjmOaCQxuh9QykEUAfZWiaYuiaLp+jJKJFsLWK1EmwJv2IF3YHQnGfxq6OteBfD/49X1gYtH8bbry2LJGmoDHmwIFC/vAB+8HAJb7/ACxJckAe+qVYBlYEHkEHIIoA4b40+Ip/DngG9a18xZ9TddOjkVFZUEgYvu3dMxrIARyCQRjGR8tV9V/GDwzrnjHwUNE0KKGSeLUIb8pI+wuI45k2qTxn97nkgcdfXxFfgV8U26eGovx1O0H/ALVoA4Oiu/PwH+KgOP8AhG4P/BrZ/wDx2g/Ab4qgZ/4Ru3/8Gtn/APHaAOAr6U+Avid9d8GnS7y9E13o032YIfMMi2xAMJZm+XH+sRQp4WIDA4J8rHwF+KxBP/CN23H/AFFrP/47Xq3wV+H2s+CNMv7vXnSK81R4wbRcOYEiLgFnUlSW3k4HAAXkklVAP//Z"
})

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
            ],

            authRoles: [

                'Students',
                'Faculty Members',
                'Public'
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

        /*this.userImage = 'img/profile-pics/default_profile_photo.jpg';
        this.userImageSmall = 'img/profile-pics/default_profile_photo_small.jpg';*/


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


                });

                this.editSummary = 0;

            }

            if (item === 'profileInfo') {

                $rootScope.currentUserReference.currentUserData.$save().then(function () {


                });

                this.editInfo = 0;

            }

            if (item === 'profilePrivacy') {
                this.editContact = 0;
            }

            growlService.growlSuccess('Your profile has updated successfully!');
        };

        this.cancel = function (item, message) {
            if (item === 'profileSummary') {

                this.editSummary = 0;
            }

            if (item === 'profileInfo') {

                this.editInfo = 0;

            }

            if (item === 'profilePrivacy') {
                this.editContact = 0;
            }

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
                    size: 400,
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
        $scope.userRegisterRoles = USER.USER_ROLES;
        $rootScope.model.user.role = USER.USER_ROLES[0];
        $rootScope.model.user.userImage = USER.BIG;
        $rootScope.model.user.userImageSmall = USER.SMALL;
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

    .controller('PollCtrl', function PollCtrl($scope, fireFactory, $rootScope, $state, pollQuestion, pollQuestionOption, currentPoll, $filter, $sce, ngTableParams, $location, growlService) {

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
            $rootScope.searchTerm = '';
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

            return ($state.$current.name == "pages.poll.poll-create-new" && $scope.isContinueFromTemplate == false);

        };

        $scope.isCreateNewPage = function () {

            return ($state.$current.name == "pages.poll.poll-create-new");

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
                growlService.growlWarning('You need to enter a title for your poll!');
                return;
            }

            if (!$rootScope.model.poll.description) {
                growlService.growlWarning('You need to enter a description for your poll!');
                return;
            }

            if (!$rootScope.model.poll.endDate) {
                growlService.growlWarning('You need to select an end date for your poll!');
                return;
            }

            if (!$rootScope.model.poll.isOwnerPrivate) {

                $rootScope.model.poll.isOwnerPrivate = false;

            }

            if (!$rootScope.model.poll.authRole) {

                $rootScope.model.poll.authRole = 'Public';

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

            growlService.growlSuccess('Your poll is saved!');

            $scope.viewSpecificPoll(fireBaseObj.key());
        };

        $scope.removePollTemplate = function (pollId) {

            fireFactory.specificPollReference(pollId).remove(function (error) {

                /*alert(error ? "Error occured!" : "Your poll is deleted!");*/

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

                    try {

                        if($rootScope.model.pollQuestionOption.value[i][j]);

                    }catch(err){

                        growlService.growlWarning("Please fill at least one option in each question!");

                        return;
                    }

                }
            }


            for (i = 0; i < questionLength; i++) {

                for (j = 0; j < optionLength; j++) {

                    var pollJSON = angular.fromJson(angular.toJson($rootScope.model.pollQuestionOption.value[i][j]));

                    fireFactory.optionValueReference($scope.specificPollId, i, j).push(pollJSON);

                }
            }

            $rootScope.model.pollQuestionOption.value = "";

            $scope.userPollParticipateInteraction($scope.specificPollId);

            $scope.viewSpecificPoll($scope.specificPollId);

            growlService.growlSuccess('Your vote is recorded anonymously!');

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

            $rootScope.model.pollQuestionOption.value = {};

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

                        if (qValue.answerType == "Percent") {

                            $scope.resultSum = 0;

                            angular.forEach(qValue.option, function (oValue, oKey) {

                                $scope.resultSum = $scope.resultSum + oValue.result;

                            });

                            angular.forEach(qValue.option, function (oValue, oKey) {

                                var normalizedResultForPercent = (oValue.result / $scope.resultSum) * 100;

                                    $scope.specificPoll.question[qKey].result.push({
                                    value: normalizedResultForPercent.toFixed(2),
                                    color: getRandomColor(),
                                    label: oValue.body
                                })

                            });


                        }else{

                            angular.forEach(qValue.option, function (oValue, oKey) {

                                $scope.specificPoll.question[qKey].result.push({
                                    value: oValue.result,
                                    color: getRandomColor(),
                                    label: oValue.body
                                })

                            });

                        }




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

            $rootScope.model.pollQuestionOption.value = {};

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



        $scope.viewRandomPoll = function () {

            $scope.currentPolls.$loaded().then(function (loadedData) {

                var pollArray = [];

                angular.forEach(loadedData, function (value, key) {

                    pollArray.push(key);

                });

                $scope.viewSpecificPoll(pollArray[pollArray.length-1]);

            });

        };

        $scope.viewRandomPoll();

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
                if (!$rootScope.currentUserReference.currentUserData.data || !$rootScope.currentUserReference.currentUserData.data.participatedPolls) {
                    return false;
                }
                return $rootScope.currentUserReference.currentUserData.data.participatedPolls[$scope.specificPollId];
            }

        };

        $scope.isParticipated = function (pollId) {

                if (!$rootScope.currentUserReference.currentUserData.data || !$rootScope.currentUserReference.currentUserData.data.participatedPolls) {
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

