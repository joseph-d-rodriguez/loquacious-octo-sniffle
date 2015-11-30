(function (angular) {
  "use strict";

  // This is a data dictionary, metadata, etc. This one is hand-typed,
  // but in a larger project it might be generated from server-side
  // metadata instead.

  angular.module('dictionary', [])

  .constant("fieldDictionary", {
	  "applicant": {
		  "firstName": {
			  label: "First Name",
			  widget: "text",
        maxLength: 20,
			  required: true
		  },
		  "lastName": {
			  label: "Last Name",
			  widget: "text",
        maxLength: 30,
			  required: false
		  },
		  "mi": {
			  label: "Middle Init.",
			  widget: "text",
        maxLength: 5,
			  required: true
		  },
		  "SSN": {
			  label: "SSN or ID #",
			  widget: "ssn",
			  required: false
		  },
		  "birthday": {
			  label: "Date of Birth",
			  widget: "date",
			  required: true
		  },
		  "zip": {
			  label: "ZIP Code",
			  widget: "zip",
			  required: false
		  },
		  "phoneHome": {
			  label: "Home Phone",
			  widget: "phone",
			  required: false
		  },
		  "country": {
			  label: "Country",
			  widget: "select",
        options: [
          { code: "USA", display: "United States"},
          { code: "MEX", display: "Mexico"},
          { code: "UK", display: "United Kingdom"},
          { code: "LAT", display: "Latvia"},
          { code: "AUS", display: "Australia"}
        ],
			  required: false
		  }
	  },
    "qualification": {
      "skillCategory": {
        label: "Skill Category",
        widget: "select",
        options: [
          { code: "VT", display: "Very Techinical"},
          { code: "LT", display: "Less Technical"}
        ],
        required: true
      },
      "skill": {
        label: "Skill",
        widget: "text",
        maxLength: 20,
        required: true
      },
      "years": {
        label: "Years Used",
        widget: "text",
        maxLength: 1,
        required: true
      },
      "lastUsed": {
        label: "Date Last Used",
        widget: "date",
        required: false
      }
    },
    "reference": {
      "firstName": {
        label: "First Name",
        widget: "text",
        maxLength: 20,
        required: false
      },
      "lastName": {
        label: "Last Name",
        widget: "text",
        maxLength: 30,
        required: true
      },
      "phoneWork": {
        label: "Day Phone",
        widget: "phone",
        required: false
      },
      "relationship": {
        label: "Country",
        widget: "select",
        options: [
          { code: "BOSS", display: "Supervisor"},
          { code: "PEER", display: "Coworker"},
          { code: "SPOUSE", display: "Spouse"}
        ],
        required: false
      }
    }

  });

})(window.angular);
