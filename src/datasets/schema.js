export const schema = {
  "fields": [
      {
          "label": "Fullname",
          "key": "fullname",
          "seq": 2,
          "readonly": false,
          "type": "text",
          "maxlength": 50,
          "required": true,
          "validation": null,
          "show_in_listing": true
      },
      {
          "label": "Phone",
          "key": "mobile",
          "seq": 7,
          "readonly": false,
          "type": "tel",
          "maxlength": 8,
          "required": true,
          "validation": "\/\\+65(6|8|9)\\d{7}\/g",
          "show_in_listing": true
      },
      {
          "label": "Company",
          "key": "company",
          "seq": 3,
          "readonly": false,
          "type": "dropdown",
          "maxlength": null,
          "required": true,
          "validation": null,
          "source": "ajax:companies.json",
          "show_in_listing": true
      },
      {
          "label": "Roles",
          "key": "roles",
          "seq": 4,
          "readonly": false,
          "type": "checkboxe",
          "maxlength": null,
          "required": false,
          "validation": null,
          "source": {
              "worker": "Worker",
              "team_leader": "Team leader",
              "task_manager": "Task manager"
          },
          "show_in_listing": true
      },
      {
          "label": "Self-description",
          "key": "description",
          "seq": 6,
          "type": "textarea",
          "readonly": false,
          "maxlength": null,
          "required": false,
          "validation": null,
          "show_in_listing": false
      },
      {
          "label": "ID",
          "key": "id",
          "seq": 1,
          "type": "label",
          "readonly": true,
          "maxlength": 50,
          "required": true,
          "validation": null,
          "show_in_listing": false
      }
  ]
}