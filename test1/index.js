
Survey
    .StylesManager
    .applyTheme("default");

var json = {
    "pages": [
        {
            "name": "page1",
            "elements": [
                {
                    "type": "text",
                    "name": "question1",
                    "title": "Why do you want to work here?"
                },
                {
                    "type": "text",
                    "name": "question2",
                    "title": "What is your desired salary?"
                },
                {
                    "type": "radiogroup",
                    "name": "question3",
                    "title": "Are you willing to travel distances upto 40km a day on short notices?",
                    "choices": [
                        {
                            "value": "item1",
                            "text": "Yes"
                        },
                        {
                            "value": "item2",
                            "text": "No"
                        },
                        {
                            "value": "item3",
                            "text": "Maybe"
                        }
                    ]
                },
                {
                    "type": "radiogroup",
                    "name": "question4",
                    "title": "Are you willing to work weekends?",
                    "choices": [
                        {
                            "value": "item1",
                            "text": "Yes"
                        },
                        {
                            "value": "item2",
                            "text": "No"
                        }
                    ]
                },
                {
                    "type": "checkbox",
                    "name": "question5",
                    "title": "Please check the skills you have and are confident with",
                    "choices": [
                        {
                            "value": "item1",
                            "text": "Lifting (Light)"
                        },
                        {
                            "value": "item2",
                            "text": "Lifting (Medium)"
                        },
                        {
                            "value": "item3",
                            "text": "Lifting (Heavy)"
                        },
                        {
                            "value": "item4",
                            "text": "Construction"
                        },
                        {
                            "value": "item5",
                            "text": "Painting"
                        },
                        {
                            "value": "item6",
                            "text": "Welding"
                        },
                        {
                            "value": "item7",
                            "text": "Carpentary"
                        },
                        {
                            "value": "item8",
                            "text": "Forklift"
                        },
                        {
                            "value": "item9",
                            "text": "CNC"
                        }
                    ],
                    "hasOther": true,
                    "hasSelectAll": true
                },
                {
                    "type": "radiogroup",
                    "name": "question6",
                    "title": "Do you currently have any WHMIS Certificate?",
                    "choices": [
                        {
                            "value": "item1",
                            "text": "Yes"
                        },
                        {
                            "value": "item2",
                            "text": "No"
                        }
                    ]
                },
                {
                    "type": "radiogroup",
                    "name": "question7",
                    "title": "Do you have a pair of Saftey Shoes?",
                    "choices": [
                        {
                            "value": "item1",
                            "text": "Yes"
                        },
                        {
                            "value": "item2",
                            "text": "No"
                        }
                    ]
                },
                {
                    "type": "radiogroup",
                    "name": "question8",
                    "title": "Do you currently have access to any vehicle?",
                    "choices": [
                        {
                            "value": "item1",
                            "text": "Yes"
                        },
                        {
                            "value": "item2",
                            "text": "No"
                        }
                    ]
                },
                {
                    "type": "radiogroup",
                    "name": "question9",
                    "title": "Have you worked as a factory production associate before?",
                    "choices": [
                        {
                            "value": "item1",
                            "text": "Yes, for more than a year"
                        },
                        {
                            "value": "item2",
                            "text": "Yes, for under a year"
                        },
                        {
                            "value": "item3",
                            "text": "Yes, for under 2 months"
                        },
                        {
                            "value": "item4",
                            "text": "No"
                        }
                    ]
                },
                {
                    "type": "text",
                    "name": "question10",
                    "title": "How many hours would you like to work per week?"
                }
            ],
            "title": "Interview questions",
            "description": "Please answer the following questions"
        },
    ]
};

window.survey = new Survey.Model(json);

survey
    .onComplete
    .add(function (result) {
        document
            .location = "indexthanks.html";
    });

$("#surveyElement").Survey({ model: survey });